---
layout: front
custom_css: show_past_years
title: Welcome to CGVC!
---

Computer Graphics & Visual Computing (CGVC) has been a Eurographics supported event since 1983, when the first instance took place 28-29 March 1983 at University of York.

The exciting and vibrant field of visual computing is an increasingly important research area due to its wide range of applications in many disciplines. In general, our ability to collect, store, and archive data vastly exceeds our ability derive useful knowledge and insight from it. This is a ubiquitous problem. Visual computing plays a key role in gaining an understanding large, complex data sets or phenomena by exploiting the human visual system. Visual computing leverages computer graphics in order to provide a visual overview, explore, analyze, and present phenomena which is often very difficult to understand.

The objective of CGVC is to foster greater exchange between visual computing researchers and practitioners, and to draw more researchers and industry partners in the UK, Europe, and abroad to enter this rapidly growing area of research. CGVC has an expanded scope to include all areas of visual computing, and a steadily more wide-spread visibility that achieves a more wide-spread impact.

CGVC papers are published in the Eurographics Digital Library of the Eurographics Association, using an expert review process.

### CGVC 2020

CGVC 2020 will be held in **King's College London, UK**.

<p>
    <a class="btn btn-primary btn-lg" href="/CGVC2020" role="button">Learn more &raquo;</a>
	<a class="btn btn-info btn-lg" href="/CGVC2020/registration" role="button">Registration &raquo;</a>
</p>

#### Committee

<div class="steering-committee">
	<ul >
	{% for member in site.data.y2020.organizing_committee %}
		<li>
			<span class="committee name">
				{% if member.url %}
				<a href="{{ member.url }}">{{ member.name }}</a>,
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
</div>
