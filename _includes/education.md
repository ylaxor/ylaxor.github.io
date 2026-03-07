<h2 id="projects" style="margin: 2px 0px -15px;">Education</h2>
<br/>
{% for edu in site.data.education.education %}
<div class="education-item">
  <h3>{{ edu.degree }}</h3>
  <p><strong>{{ edu.school }}</strong> — {{ edu.location }}</p>
  <p>{{ edu.period }}</p>

  <ul>
    {% for item in edu.details %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
