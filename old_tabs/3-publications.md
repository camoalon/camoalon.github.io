---
layout: default
title: Publications
permalink: publications/
order: 3
---

<p> The following list groups publications by topic (* denotes equal contribution).
For a comprehensive list of publications and corresponding citations, visit my <a href="https://scholar.google.com/citations?user=2snI7NsAAAAJ&hl=en"> Google Scholar</a> page. You can find an open source (and sometimes extended) version of all of these papers on the <a href="https://arxiv.org"> arXiv</a>. </p>

<!-- Artificial Intelligence meets Control Theory -->
<h2 style="display: inline-block; margin-top:10px;"> Artificial Intelligence meets Control Theory </h2>

<!-- Mixer Block -->
<h3 style="margin-top:10px; color: #39653B;"> Mixer Block </h3>
<div class="home">
    {% assign publications_foundation = site.categories.publications | where: 'topic', 'foundation' %}
    {% for publication in publications_foundation %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
</div>

<!-- Surrounding Components -->
<h3 style="margin-top:10px; color: #8176A9;"> Surrounding Components </h3>
<div class="home">
    {% assign publications_surrounding = site.categories.publications | where: 'topic', 'surrounding' %}
    {% for publication in publications_surrounding %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
    <p><em>Paper on layer norm coming soon!</em></p>
</div>

<!-- Single Layer -->
<h3 style="margin-top:10px; color: #D8875A;"> Single Layer </h3>
<div class="home">
    {% assign publications_nlp = site.categories.publications | where: 'topic', 'nlp' %}
    {% for publication in publications_nlp %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}

<!-- Deep AI Architecture -->
<h3 style="margin-top:10px; color: #5580A3;"> Deep AI Architecture </h3>
<div class="home publication-section deep-ai-architecture">
    {% assign publications_deep_ai = site.categories.publications | where: 'topic', 'deep-ai-architecture' %}
    {% for publication in publications_deep_ai %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
</div>

<!-- AI Systems -->
<h3 style="margin-top:10px; color: #B54950;"> AI Systems </h3>
<div class="home publication-section ai-systems">
    {% assign publications_ai_systems = site.categories.publications | where: 'topic', 'ai-systems' %}
    {% for publication in publications_ai_systems %}
<div class="publication" id="publication-{{publication.id}}">
    <p>
     {% include publication_details.html index=forloop.index%}
    </p>
</div>
{% endfor %}
</div>

<!-- Distributed Optimal Control -->
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
