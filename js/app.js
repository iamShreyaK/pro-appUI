const tableBody = document.querySelector('#userTable tbody');
const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

users.forEach(user => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.role}</td>
    <td>${user.status}</td>
  `;
  tableBody.appendChild(row);
});

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
