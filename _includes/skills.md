<h2 id="skills" style="margin: 2px 0px -15px;">Skills</h2>
<br/>
{% for skill in site.data.skills.skills %}
<div class="skill-item">
<h3>{{ skill.category }}</h3>
<ul>
  {% for item in skill.items %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>
</div>
{% endfor %}
