<h2 id="projects" style="margin: 2px 0px -15px;">Projects</h2>
<br/>
{% for project in site.data.projects.projects %}
<h3>{{ project.title }}</h3>
<p>{{ project.description }}</p>
<p><strong>Tech:</strong> {{ project.technologies | join: ", " }}</p>
<a href="{{ project.github }}">GitHub</a>
<a href="{{ project.demo }}">Live Demo</a>
{% endfor %}
