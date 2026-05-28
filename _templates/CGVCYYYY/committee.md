---
layout: default
year: CGVCYYYY
title: Committee
---

### Steering Committee

<ul>
    {% for member in site.data[page.year].steering_committee %}
    <li class="committee-list">
        <span class="committee name">{{ member.name }}</span>
        {% if member.role %}<span class="committee role">, {{ member.role }}</span>{% endif %}
        {% if member.affiliation %}<br><span class="committee affiliation">{{ member.affiliation }}</span>{% endif %}
    </li>
    {% endfor %}
</ul>

### Organizing Committee

<ul>
    {% for member in site.data[page.year].organizing_committee %}
    <li class="committee-list">
        <span class="committee name">{{ member.name }}</span>
        {% if member.role %}<span class="committee role">, {{ member.role }}</span>{% endif %}
        {% if member.affiliation %}<br><span class="committee affiliation">{{ member.affiliation }}</span>{% endif %}
    </li>
    {% endfor %}
</ul>

### Programme Committee

<ul>
    {% for member in site.data[page.year].programme_committee %}
    <li class="committee-list">
        <span class="committee name">{{ member.name }}</span>
        {% if member.affiliation %}<span class="committee affiliation">, {{ member.affiliation }}</span>{% endif %}
    </li>
    {% endfor %}
</ul>
