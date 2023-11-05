---
layout: default
year: CGVC2021
title: Committee
---

### Steering Committee

<ul>
    {% for member in site.data.CGVC2021.steering_committee %}
    <li class="committee-list">
        <span class="committee name">
            {% if member.url %}
            <a href="{{ member.url }}">{{ member.name }}</a>
            {% else %}
            {{ member.name }}
            {% endif %}
        </span>
        <span class="committee role">, {{ member.role }}</span><br>
        <span class="committee affiliation">{{ member.affiliation }}</span>
    </li>
    {% endfor %}
</ul>

### Organizing Committee

<ul>
    {% for member in site.data.CGVC2021.organizing_committee %}
    <li class="committee-list">
        <span class="committee name">
            {% if member.url %}
            <a href="{{ member.url }}">{{ member.name }}</a>
            {% else %}
            {{ member.name }}
            {% endif %}
        </span>
        {% if member.role %}
        <span class="committee role">, {{ member.role }}</span>
        {% endif %}
        <br>
        <span class="committee affiliation">{{ member.affiliation }}</span>
    </li>
    {% endfor %}
</ul>

### Programme Committee

<div class="programme-committee">

{% for member in site.data.CGVC2021.programme_committee %}
{% assign index = forloop.index | modulo:3 %}

    {% if index == 1 %}
        <div class="row mt-3">
    {% endif %}
        <span class="col-4">
            <span class="committee name">
                {% if member.url %}
                <a href="{{ member.url }}">{{ member.name }}</a>
                {% else %}
                {{ member.name }}
                {% endif %}
            </span>
            {% if member.role %}
                <br>
                <span class="committee role">{{ member.role }}</span>
            {% endif %}
            <br>
            {% if member.affiliation %}
                <span class="committee affiliation">{{ member.affiliation }}</span>
            {% endif %}
        </span>
    {% if index == 0 %}
        </div>
    {% endif %}

{% endfor %}

{% if index != 0 %}

</div>
{% endif %}

</div>

{% include responsibility.md %}
