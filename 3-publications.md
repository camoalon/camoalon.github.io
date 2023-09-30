---
layout: default
title: Publications
permalink: publications/
order: 2
---

For a comprehensive list of publications and corresponding citations, visit my <a href="https://scholar.google.com/citations?user=2snI7NsAAAAJ&hl=en"> Google Scholar</a> page.

You can find an open source (and sometimes extended) version of all of these papers on the <a href="https://arxiv.org"> arXiv</a>.

<h2 style="margin-top:30px;"> Journal Articles </h2>

<div class="home">
  
  
    {% for publication in site.categories.publications %}


<div class="publication" id="publication-{{publication.id}}">
    {% if publication.type == "journal" %}
    <p><span class="title"><a style="color:black;" href="{{publication.paper-link}}">{{ publication.title }}</a></span> 
        {% for links in publication.other-links %}
        {% for link in links %}
        <a style="font-size:14px;" href="{{link[1]}}">[{{link[0]}}]</a>
        {% endfor %}
        {% endfor %} <br>
       <span class="authors">{{ publication.authors }}</span><br> 
        {% if publication.journal %}
       <span class="journal">{{ publication.journal }},</span>
        {% endif %}
    <span class="date">{{ publication.year|date:"%Y" }}.</span>
        <nobr><a style="font-size:14px;color:black;" id="show-abstract-{{forloop.index}}"><span id="abstract-icon-{{forloop.index}}" class="ui-icon ui-icon-plus"></span> [Click here to read the abstract]</a></nobr>
    </p>
    <p hidden class="abstract-info minimize" id="abstract-info-{{forloop.index}}">{{ publication.content | strip_html }}</p>
    
    {% endif %}

</div>

{% endfor %}


<h2 style="margin-top:30px;"> Conference Proceedings </h2>

    {% for publication in site.categories.publications %}

<div class="publication" id="publication-{{publication.id}}">
    {% if publication.type == "conference" %}
    <p><span class="title"><a style="color:black;" href="{{publication.paper-link}}">{{ publication.title }}</a></span> 
        {% for links in publication.other-links %}
        {% for link in links %}
        <a style="font-size:14px;" href="{{link[1]}}">[{{link[0]}}]</a>
        {% endfor %}
        {% endfor %} <br>
       <span class="authors">{{ publication.authors }}</span><br> 
        {% if publication.journal %}
       <span class="journal">{{ publication.journal }},</span>
        {% endif %}
    <span class="date">{{ publication.date|date:"%Y" }}.</span>
        <nobr><a style="font-size:14px;color:black;" id="show-abstract-{{forloop.index}}"><span id="abstract-icon-{{forloop.index}}" class="ui-icon ui-icon-plus"></span> [Click here to read the abstract]</a></nobr>
        {% if publication.remark %} <br>
        <span class="remark" style="color:black;font-weight:1000;margin-bottom:50px"> {{ publication.remark }}</span>
        {% endif %}
    </p>
    <p hidden class="abstract-info minimize" id="abstract-info-{{forloop.index}}">{{ publication.content | strip_html }}</p>
    
    {% endif %}

</div>

{% endfor %}

</div>

<h2 style="margin-top:30px;"> Ph.D. Thesis </h2>

<div class="home">
  
  
    {% for publication in site.categories.publications %}


<div class="publication" id="publication-{{publication.id}}">
    {% if publication.type == "thesis" %}
    <p><span class="title"><a style="color:black;" href="{{publication.paper-link}}">{{ publication.title }}</a></span> 
        {% for links in publication.other-links %}
        {% for link in links %}
        <a style="font-size:14px;" href="{{link[1]}}">[{{link[0]}}]</a>
        {% endfor %}
        {% endfor %} <br>
       <span class="authors">{{ publication.authors }},</span> 
       <span class="date">{{ publication.year|date:"%Y" }}.</span>
        <a style="font-size:14px;color:black;" id="show-abstract-{{forloop.index}}"><span id="abstract-icon-{{forloop.index}}" class="ui-icon ui-icon-plus"></span> [Click here to read the abstract]</a>
    </p>
    <p hidden class="abstract-info minimize" id="abstract-info-{{forloop.index}}">{{ publication.content | strip_html }}</p>
    
    {% endif %}

</div>

{% endfor %}



<script>
 $(document).ready(function(){
     {% for publication in site.categories.publications %}
     $("#abstract-info-{{forloop.index}}").hide();
     $("#show-abstract-{{forloop.index}}").click(function(){
         var icon = $("#abstract-icon-{{forloop.index}}");
         icon.toggleClass("ui-icon-plusthick");
         icon.toggleClass("ui-icon-minusthick");
         $("#abstract-info-{{forloop.index}}").toggle();
     });
     {% endfor %}
 });
 // http://jsfiddle.net/iambriansreed/bjdSF/
 jQuery(function(){
     var minimized_elements = $('p.minimize');
     var max_length = 100000;
     minimized_elements.each(function(){
         var t = $(this).text();
         if(t.length < max_length) return;

         $(this).html(
             t.slice(0, max_length)+'<span>... </span><a href="#" class="more">More</a>'+
             '<span style="display:none;">'+ t.slice(max_length, t.length)+' <a href="#" class="less">Less</a></span>'
         );

     });

     $('a.more', minimized_elements).click(function(event){
         event.preventDefault();
         $(this).hide().prev().hide();
         $(this).next().show();
     });

     $('a.less', minimized_elements).click(function(event){
         event.preventDefault();
         $(this).parent().hide().prev().show().prev().show();
     });
 });
</script>
