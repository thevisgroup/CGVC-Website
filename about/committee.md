---
title: CGVC Committee
layout: default
---

<div class="steering-committee">
	<ul >
	{% for member in site.data.committee %}
		<li class="list">
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
</div>
