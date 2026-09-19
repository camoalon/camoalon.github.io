function setHeaderHeightVar() {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var height = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", height + "px");
}

document.addEventListener("DOMContentLoaded", setHeaderHeightVar);
window.addEventListener("load", setHeaderHeightVar);
window.addEventListener("resize", setHeaderHeightVar);

document.addEventListener("DOMContentLoaded", function () {
  var homeLink = document.getElementById("home-nav-link");
  if (!homeLink) return;
  homeLink.addEventListener("click", function (e) {
    var onHomePage =
      window.location.pathname === homeLink.pathname ||
      window.location.pathname.replace(/index\.html$/, "") ===
        homeLink.pathname.replace(/index\.html$/, "");

    if (!onHomePage) {
      // Not on the homepage: let the browser navigate there normally.
      return;
    }

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (history.pushState) {
      history.pushState(null, "", homeLink.getAttribute("href"));
    }
  });
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Leaving the CV page for one of the other tabs: mark it so the
// destination page knows to slide in from the left instead of fading up.
if (document.body.classList.contains("cv-page")) {
  var navLinks = document.querySelectorAll(".frame-sidebar-nav a");
  for (var i = 0; i < navLinks.length; i++) {
    (function (link) {
      link.addEventListener("click", function () {
        if (link.pathname !== window.location.pathname) {
          sessionStorage.setItem("cvExit", "1");
        }
      });
    })(navLinks[i]);
  }
}

var cameFromCv =
  !document.body.classList.contains("cv-page") &&
  sessionStorage.getItem("cvExit") === "1";

// On any other page, if we just came from the CV page, slide the
// content in from the left instead of doing the default entrance —
// regardless of which section anchor we're headed to. This is the
// single, decisive scroll action for this load: nothing else should
// also try to move the scroll position afterwards, or it gets bumpy.
if (cameFromCv) {
  sessionStorage.removeItem("cvExit");

  var targetHash = window.location.hash;

  if (targetHash && targetHash !== "#about") {
    var target = document.querySelector(targetHash);
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    }
  } else {
    window.scrollTo(0, 0);
    // Strip the "#about" fragment so the browser doesn't try to
    // re-jump to it later (e.g. once the photo finishes loading and
    // the layout shifts), which is what caused the extra downward
    // hop after the slide-in.
    if (history.replaceState) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  document.body.classList.add("cv-exit-transition");
}

// Normal (non-CV-exit) loads of the homepage — including plain
// refreshes — always land at the very top (Welcome), regardless of
// whatever section hash happens to be sitting in the URL from an
// earlier click. Clicking a nav item while already on the page is a
// same-page scroll, not a reload, so this doesn't interfere with that.
function scrollToTopIfHome() {
  if (!cameFromCv && document.querySelector("#about")) {
    window.scrollTo(0, 0);
    if (window.location.hash && history.replaceState) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", scrollToTopIfHome);
window.addEventListener("load", scrollToTopIfHome);

// Keep the current section's sidebar item highlighted (same style as
// hover) as you scroll through the page, or the CV item on the CV page.
(function () {
  function init() {
    var navLinkItems = document.querySelectorAll(".frame-sidebar-nav > li");

    function clearActive() {
      navLinkItems.forEach(function (li) {
        li.classList.remove("active-nav-item");
      });
    }

    function setActiveForLink(link) {
      clearActive();
      if (link) {
        var li = link.closest("li");
        if (li) li.classList.add("active-nav-item");
      }
    }

    if (document.body.classList.contains("cv-page")) {
      var cvLink = document.querySelector(
        '.frame-sidebar-nav a[href$="/curriculum/"]'
      );
      setActiveForLink(cvLink);
      return;
    }

    var sections = Array.prototype.slice.call(
      document.querySelectorAll(
        "#about, #research, #teaching, #publications"
      )
    );
    if (!sections.length) return;

    var sectionLinkMap = {};
    sections.forEach(function (section) {
      var link = document.querySelector(
        '.frame-sidebar-nav a[href$="#' + section.id + '"]'
      );
      if (link) sectionLinkMap[section.id] = link;
    });

    function currentHeaderHeight() {
      return (
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          ),
          10
        ) || 90
      );
    }

    // Scrollspy: the "current" section is the last one whose top has
    // been scrolled past (offset by the sticky header height). This is
    // robust even for very short/empty sections, unlike ratio-based
    // intersection checks.
    function updateActiveSection() {
      // If we've scrolled (essentially) all the way to the bottom of
      // the page, always treat the last section as current — near the
      // very end there may not be enough room left to scroll past its
      // start by the usual header-height offset.
      var atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveForLink(sectionLinkMap[sections[sections.length - 1].id]);
        return;
      }

      var threshold = window.scrollY + currentHeaderHeight() + 30;
      var current = sections[0];
      sections.forEach(function (section) {
        if (section.offsetTop <= threshold) {
          current = section;
        }
      });
      setActiveForLink(sectionLinkMap[current.id]);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateActiveSection();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);
    window.setTimeout(updateActiveSection, 0);
    window.setTimeout(updateActiveSection, 300);
    window.setTimeout(updateActiveSection, 700);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// Keep footnote/signpost tooltips from spilling off either edge of the
// content column (e.g. under the sidebar on the right, or off the browser
// window on the left). Tooltips are positioned absolutely relative to their
// trigger word, which sits at whatever horizontal spot the text happens to
// wrap to, so their natural left:0 anchor can push a wide tooltip past
// either boundary depending on where that word lands.
(function () {
  var margin = 12;

  function clampTooltips() {
    var sidebar = document.querySelector(".frame-sidebar");
    var sidebarWidth = sidebar ? sidebar.offsetWidth : 0;
    var maxRight = window.innerWidth - sidebarWidth - margin;

    document.querySelectorAll(".footnote-tooltip").forEach(function (tip) {
      tip.style.left = "0px";
      tip.style.right = "auto";

      var rect = tip.getBoundingClientRect();
      var shift = 0;

      if (rect.right > maxRight) {
        shift -= rect.right - maxRight;
      }
      if (rect.left + shift < margin) {
        shift += margin - (rect.left + shift);
      }

      if (shift) {
        tip.style.left = shift + "px";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", clampTooltips);
  window.addEventListener("load", clampTooltips);
  window.addEventListener("resize", clampTooltips);
  window.setTimeout(clampTooltips, 300);
})();
