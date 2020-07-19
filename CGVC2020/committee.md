---
layout: default
title: CGVC 2020 Committee
---

### Steering Committee

<ul>
    {% for member in site.data.CGVC2020.steering_committee %}
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
    {% for member in site.data.CGVC2020.organizing_committee %}
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

<table>

{% for member in site.data.CGVC2020.programme_committee %}
{% assign index = forloop.index | modulo:3 %}

    {% if index == 1 %}
        <tr>
    {% endif %}

        <td>
            <ul>
                <li class="committee-list">
                    {% if member.role %}
                        <span class="committee role">{{ member.role }}</span>
                        <br>
                    {% endif %}
                    <span class="committee name">
                        {% if member.url %}
                        <a href="{{ member.url }}">{{ member.name }}</a>
                        {% else %}
                        {{ member.name }}
                        {% endif %}
                    </span>
                    <br>
                    {% if member.affiliation %}
                        <span class="committee affiliation">{{ member.affiliation }}</span>
                    {% endif %}
                </li>
            </ul>
        </td>

    {% if index == 0 %}
        </tr>
    {% endif %}

{% endfor %}

    {% if index != 0 %}
        </tr>
    {% endif %}

</table>

### Responsibilities

Below are the roles and responsibilities for members of the CGVC Organizing Committee.

#### Chair

- Put together the Organizing Committee
- Coordinate with event/organization that CGVC is co-locate with
- Coordinate with co-located event to get complimentary registration for keynote, other guests
- Set up budget
- Publicize on mailing lists, online calendars, blogs, social media
- Bring in sponsors
- Find a keynote speaker

#### Program Chair

- Put together the Program Committee
- Write Call for Papers
- Set up reviewing site [easychair](http://www.easychair.org/)
- Assign reviewers (at least 3 per paper)
- Determine the accepted papers based on reviews (no more than 12 papers)
- Notify authors of acceptance/rejection
- Determine program schedule
- Chair the program onsite, including keeping to a schedule (have time remaining signs)

#### Publication Chair

- Set up agreement with ACM for proceedings in the [International Conference Proceedings
  Series](https://www.acm.org/publications/icp_series), including free access for two weeks prior
- Get ISBN number
- Get copyrights from authors for all accepted papers
- Provide copyright block for papers to authors
- Collect camera ready papers from authors
- Check formatting of papers, fix minor issues, communicate to authors
- Generate frontmatter for proceedings [instructions](https://www.acm.org/publications/icps-instructions/)
- Send papers on to ACM
- Send papers to whoever puts them onto a USB drive for the conference
- Ensure that papers are available two weeks before the event and mail the URL to the CGVC mailing list

#### Webmaster

- Website and email hosting
- General website maintenance
- Update site with organizing and program committee
- Update site with CfP
- Update site with program schedule
