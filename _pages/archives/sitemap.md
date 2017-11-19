---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
exclude_from_search: true
sidebar:
  nav: "archives"
---

{% include base_path %}

Une liste de tous les billets & pages du site. Une [version XML]({{ base_path }}/sitemap.xml) est disponible pour les robots.

<h2>Pages</h2>
<ul>
{% for post in site.pages %}
  {% include archive-single-list.html %}
{% endfor %}
</ul>

<h2>Articles</h2>
<ul>
{% for post in site.posts %}
  {% include archive-single-list.html %}
{% endfor %}
</ul>
{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  <ul>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
  </ul>
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single-list.html %}
  {% endunless %}
{% endfor %}

{% endfor %}
