export function createTable(tbody, form, storage, people, editData, deleteData) {
    
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    let td = document.createElement('td');
    td.innerText = people.name;
    td.id = people.name;
    const peopleName = people.name;
    
    const tdName = td.textContent;

    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = people.birthday;

    const tdBirthday = td.textContent;

    tr.appendChild(td);

    td = document.createElement('td');
    td.className = 'btn-div';
    let btn = document.createElement('button');
    btn.className = 'btn-edit';
    btn.textContent = 'Editar';

    // Editar Dados
    btn.addEventListener('click', () => {
        editData(tdName, tdBirthday, form);
    })

    td.appendChild(btn);

    btn = document.createElement('button');
    btn.className = 'btn-delete';
    btn.textContent = 'Deletar';

    // Deletar Dados
    btn.addEventListener('click', () => {
        deleteData(storage, peopleName);
        tr.remove();
    })

    td.appendChild(btn);

    tr.appendChild(td);

}
