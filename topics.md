---
title: Topics
layout: page
description: Research topics and directions
permalink: "/topics/"
---

<div class="topics-page-overview">
  <p>Our research is organized into four connected areas, each with its own methodological strengths and application focus.</p>
</div>

<div class="topics-anchor-list">
  {% assign topics = site.topics | sort: 'weight' %}
  {% for topic in topics %}
  <section class="topic-anchor-card" id="{{ topic.slug }}">
    <span class="topic-anchor-tag">{{ topic.short_name }}</span>
    <h2><a href="{{ topic.url | relative_url }}">{{ topic.title }}</a></h2>
    <p>{{ topic.summary }}</p>
  </section>
  {% endfor %}
</div>
