<h2 id="projects" style="margin: 2px 0px -15px;">Projects</h2>
<br/>

{% for project in site.data.projects.projects %}
<div class="project-item">
  <h3>{{ project.title }}</h3>
  <p>{{ project.description }}</p>

  {% if project.technologies %}
    <p><strong>Tech:</strong> {{ project.technologies | join: ", " }}</p>
  {% endif %}

  <p>
    {% if project.github and project.github != "" %}
      <a href="{{ project.github }}" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> GitHub
      </a>
    {% endif %}

  {% if project.demo and project.demo != "" %}
    {% if project.github and project.github != "" %} &nbsp; {% endif %}
    <a href="{{ project.demo }}" target="_blank" rel="noopener noreferrer">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
  {% endif %}
  </p>
</div>
{% endfor %}
