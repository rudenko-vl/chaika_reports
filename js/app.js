import {employees} from './employees.js';

const moods = ['😴 Задремавшая чайка', '🕊️ В бойкой форме', '🎶 Поющая чайка', '😠 Крикливая чайка'];

function randomMood() {
  return moods[Math.floor(Math.random() * moods.length)];
}

function productivityFromMood(mood) {
  switch (mood) {
    case '🕊️ В бойкой форме':
      return 70 + Math.floor(Math.random() * 21);
    case '🎶 Поющая чайка':
      return 40 + Math.floor(Math.random() * 21);
    case '😠 Крикливая чайка':
      return 10 + Math.floor(Math.random() * 21);
    case '😴 Задремавшая чайка':
    default:
      return 0 + Math.floor(Math.random() * 21);
  }
}

function renderZoo(data) {
  const zooDiv = document.getElementById('zoo');
  zooDiv.innerHTML = '';
  data.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${emp.name} ${emp.star ? '⭐ ' : ''}</h3>
      <p class='role'>${emp.role}</p>
      <span class='cup'>${emp.cup ? '🏆 ' : ''}</span>
      <div class="productivity-bar">
        <div class="productivity-fill" style="width: ${emp.productivity}%;"></div>
      </div>
      <p>Продуктивность: <span class="percent">${emp.productivity} %</span></p>
      <p>Настроение: ${emp.mood}</p>
      <p><em>Комментарий:</em> <span class="comment">"${generateComment(emp)}"</span></p>
    `;
    zooDiv.appendChild(card);
  });
}

function updateMoodsAndProductivity() {
  employees.forEach(e => {
    e.mood = randomMood();
    e.productivity = productivityFromMood(e.mood);
    e.star = false;
    e.cup = false;
  });
  renderZoo(employees);
}

function showTop3() {
  const top3 = [...employees].sort((a, b) => b.productivity - a.productivity).slice(0, 3);
  top3.forEach(e => e.star = true);
  top3.forEach(e => e.cup = true);
  renderZoo(top3);
}

const topBtn = document.getElementById('topBtn');
const updBtn = document.getElementById('updBtn');
topBtn.addEventListener('click', showTop3);
updBtn.addEventListener('click', updateMoodsAndProductivity);


function generateComment(emp) {
  if (emp.productivity > 80) return 'Летала и работала без остановки!';
  if (emp.productivity > 60) return 'Кружила над задачами уверенно.';
  if (emp.productivity > 40) return 'Периодически садилась отдохнуть.';
  return 'Главное не мешать другим!';
}

updateMoodsAndProductivity();