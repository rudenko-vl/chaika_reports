const moods = ['😴 Задремавшая чайка', '🕊️ В бойкой форме', '🎶 Поющая чайка', '😠 Крикливая чайка'];

const employees = [
  { name: 'Юрий', role: 'Чайка-приемщик', productivity: 60, mood: '', star: false },
  { name: 'Ольга', role: 'Чайка-приемщик', productivity: 80, mood: '', star: false },
  { name: 'Сергей', role: 'Чайка-приемщик', productivity: 70, mood: '', star: false },
  { name: 'Людмила', role: 'Чайка-приемщик', productivity: 45, mood: '', star: false },
  { name: 'Анна', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Катерина', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Иван', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Олег', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Николай', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Александр', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Денис', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Виктор', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Евгений', role: 'Чайка-отборщик', productivity: 90, mood: '', star: false },
  { name: 'Сергей', role: 'Чайка-переместитель', productivity: 90, mood: '', star: false },
  { name: 'Александр', role: 'Чайка-переместитель', productivity: 90, mood: '', star: false },
  { name: 'Николай', role: 'Чайка-переместитель', productivity: 90, mood: '', star: false },
  { name: 'Ярослав', role: 'Чайка-переместитель', productivity: 90, mood: '', star: false },
  { name: 'Михаил', role: 'Чайка-переместитель', productivity: 90, mood: '', star: false },
];

function randomMood() {
  return moods[Math.floor(Math.random() * moods.length)];
}

function productivityFromMood(mood) {
  switch (mood) {
    case '🕊️ В бойкой форме':
      return 70 + Math.floor(Math.random() * 21); // 70-90
    case '🎶 Поющая чайка':
      return 40 + Math.floor(Math.random() * 21); // 40-60
    case '😠 Крикливая чайка':
      return 10 + Math.floor(Math.random() * 21); // 10-30
    case '😴 Задремавшая чайка':
    default:
      return 0 + Math.floor(Math.random() * 21); // 0-20
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
  });
  renderZoo(employees);
}

function showTop3() {
  const top3 = [...employees].sort((a, b) => b.productivity - a.productivity).slice(0, 3);
  top3.forEach(e => e.star = true);
  renderZoo(top3);
}

function generateComment(emp) {
  if (emp.productivity > 80) return 'Летала и работала без остановки!';
  if (emp.productivity > 60) return 'Кружила над задачами уверенно.';
  if (emp.productivity > 40) return 'Периодически садилась отдохнуть.';
  return 'Главное не мешать другим!';
}

updateMoodsAndProductivity();