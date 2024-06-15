---
layout: default
order: 0
---

<link rel="icon" type="image/png" sizes="32x32" href="/assets/imgs/favicon-32x32.png">

<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}
  <!-- <h3 style="font-size:18pt"> Welcome to my website! </h3> -->
  <img id="myphoto" alt="Carmen Amo Alonso" src="{{ "/assets/imgs/me.jpg" | relative_url }}"/>
    <div id="aboutme">
  {% include_relative 1-about.md %}
  </div>
  
<!---
<div id="recent-news">
    <div id="news">

    {% for currentyear in (2019..2022) reversed %}
    <section class="year">
    <h3>{{ currentyear }}</h3>
    <ul>
    {% for news in site.categories.news %}
    {% capture newsyear %}{{ news.date | date: "%Y"  }}{% endcapture %}
    {% assign newsyear = newsyear | plus: 0 %}
    {% if newsyear ==  currentyear %}
    <li>{{news.content}}</li>
    {% endif %}
    {% endfor %}
    </ul>
    </section>
    {% endfor %}
    </div> 
</div>
--->
