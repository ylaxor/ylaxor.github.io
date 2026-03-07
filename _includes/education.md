<h2 id="projects" style="margin: 2px 0px -15px;">Education</h2>
<br/>

{% for edu in site.data.education.education %}
<div class="education-item">
  <h3>{{ edu.degree }}</h3>
  <p><strong>{{ edu.institution }}</strong> — {{ edu.location }}</p>
  <p>{{ edu.start_year }} - {{ edu.end_year }}</p>
  <p>{{ edu.description }}</p>
</div>
{% endfor %}
