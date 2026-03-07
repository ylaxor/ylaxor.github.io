<h2 id="skills" style="margin: 2px 0px -15px;">Skills</h2>
<div class="skills">

{% for skill in site.data.skills.skills %}
<h3>{{ skill.category }}</h3>
<ul>
  {% for item in skill.items %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>
{% endfor %}
