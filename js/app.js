const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
//modal 
const modal = document.getElementById('modal');

function openModal(){
  modal.style.display = 'flex';
}

function closeModal(){
  modal.style.display = 'none';
}
//rendering data

const users = [
  {
    name: 'Alice', role: 'Senior Software Engineer', active: true
  },
  {
    name: 'Jacqeline', role: 'Software Engineer', active: false
  },
  {
    name: 'Jennifer', role: 'Data Analyst', active: false
  },
  {
    name: 'Michael', role: 'Senior Software Engineer', active: true
  }
]

const tableBody = document.querySelector("#userTable tbody");

function renderTableData(data){
   tableBody.innerHTML = '';

  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
                  <td>${user.name}</td>
                  <td>${user.role}</td>
                   <div class="status">
        <span class="status-dot ${user.active ? 'Active' : 'Inactive'}"></span>
        <span>${user.active ? 'Active' : 'Inactive'}</span>
        </div>
                    `;
    tableBody.appendChild(row);
  });
}
  renderTableData(users)
