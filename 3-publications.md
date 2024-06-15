---
layout: default
title: Publications
permalink: publications/
order: 2
---

The following list groups publications by topic (* denotes equal contribution).
For a comprehensive list of publications and corresponding citations, visit my <a href="https://scholar.google.com/citations?user=2snI7NsAAAAJ&hl=en"> Google Scholar</a> page. You can find an open source (and sometimes extended) version of all of these papers on the <a href="https://arxiv.org"> arXiv</a>.

<!-- Language to Control -->
<h2 style="display: inline-block; margin-top:10px;"> Language to Control: </h2>
<h3 style="display: inline-block"> Interfacing controllers with natural language </h3>
<!-- Robotics -->
<h3 style="color: inherit"> For robotics </h3>
<div class="home">
    {% assign publications_l2c = site.categories.publications | where: 'topic', 'l2c' %}
    {% for publication in publications_l2c %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}

<!-- Control for Language -->
<h2 style="display: inline-block; margin-top:20px;"> Control for Language: </h2>
<h3 style="display: inline-block"> Using control theory to enhance language algorithms </h3>
<!-- Controlled Language Generation -->
<h3 style= "color: inherit"> Controlled language generation </h3>
<div class="home">
    {% assign publications_nlp = site.categories.publications | where: 'topic', 'nlp' %}
    {% for publication in publications_nlp %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
<!-- Foundation Models -->
<h3 style="margin-top:10px;  color: inherit"> Foundation models </h3>
<div class="home">
    {% assign publications_foundation = site.categories.publications | where: 'topic', 'foundation' %}
    {% for publication in publications_foundation %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}

<!-- Optimal Control -->
<h2 style="margin-top:30px;"> Distributed Optimal Control </h2>
<!-- DLMPC -->
<h3 style="margin-top:10px;  color: inherit"> Distributed and Localized Model Predictive Control </h3>
<div class="home">
    {% assign publications_dmpc = site.categories.publications | where: 'topic', 'dmpc' %}
    {% for publication in publications_dmpc %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
    {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
<!-- Other -->
<h3 style="margin-top:10px;  color: inherit"> System Level Synthesis and Applications </h3>
    {% assign publications_other = site.categories.publications | where: 'topic', 'other_control' %}
    {% for publication in publications_other %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
    {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
</div>
