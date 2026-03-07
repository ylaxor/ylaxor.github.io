<h2 id="projects" style="margin: 2px 0px -15px;">Professional/ personal projects</h2>
<br/>

{% for project in site.data.projects.projects %}
<div class="project-item">

<h3>{{ project.title }}</h3>

{% if project.affiliation or project.start %}
  <p>
    {% if project.affiliation %}
      <strong>{{ project.affiliation }}</strong>
    {% endif %}

  {% if project.start %}
    — {{ project.start }}
    {% if project.end %}–{{ project.end }}{% endif %}
  {% endif %}
  </p>
{% endif %}

<p>{{ project.description }}</p>

{% if project.technologies %}
  <p><strong>Tech:</strong> {{ project.technologies | join: ", " }}</p>
{% endif %}

{% assign has_github = project.github and project.github != "" %}
{% assign has_demo = project.demo and project.demo != "" %}

{% if has_github or has_demo %}
<p>
  {% if has_github %}
    <a href="{{ project.github }}" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
  {% endif %}

  {% if has_demo %}
    {% if has_github %} &nbsp; {% endif %}
    <a href="{{ project.demo }}" target="_blank">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
  {% endif %}
</p>
{% endif %}

</div>
{% endfor %}
