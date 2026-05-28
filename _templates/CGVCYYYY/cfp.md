---
layout: default
year: CGVCYYYY
title: Call for Papers
---

<h1>{{page.title}}</h1>

{% assign info = site.data[page.year].general_information %}

<p>
{{ page.year | replace: "CGVC","CGVC " }}, hosted by {{ info.host_name }}, is the {{ info.conference_number }} annual computer graphics, visualization, and visual computing conference organized by the Eurographics UK Chapter.

TODO: Add this year's call for papers text.
</p>

{% include submission.html year=page.year %}
