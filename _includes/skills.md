{% for skill in site.data.skills.skills %}
<h3>{{ skill.category }}</h3>
<ul>
  {% for item in skill.items %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>
{% endfor %}
