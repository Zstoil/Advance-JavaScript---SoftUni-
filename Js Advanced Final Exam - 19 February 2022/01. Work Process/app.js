function solve() {

    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let tbody = document.getElementById('tbody');
    let sum = 0;
    let btnHire = document.getElementById('add-worker');
    btnHire.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = Number(salary.value);

        if (!firstNameValue || !lastNameValue || !emailValue || !birthValue || !positionValue || !salaryValue) {
            return;
        }

        firstName.value = '';
        lastName.value = ''
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        let tr = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstNameValue;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = lastNameValue;

        let tdEmail = document.createElement('td');
        tdEmail.textContent = emailValue;

        let tdBird = document.createElement('td');
        tdBird.textContent = birthValue;

        let tdPosition = document.createElement('td');
        tdPosition.textContent = positionValue;

        let tdSalary = document.createElement('td');
        tdSalary.textContent = salaryValue;

        let tdBtn = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fired);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        tdBtn.appendChild(firedBtn);
        tdBtn.appendChild(editBtn);

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBird);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdBtn);

        tbody.appendChild(tr);

        let messageBudget = document.getElementById('sum');


        sum += salaryValue;
        messageBudget.textContent = `${sum.toFixed(2)}`

        function edit(e) {
            e.preventDefault();

            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = Number(salaryValue);

            sum -= salaryValue;
            messageBudget.textContent = `${sum.toFixed(2)}`

            e.target.parentElement.parentElement.remove();

        }

        function fired(e){
            e.preventDefault();

            e.target.parentElement.parentElement.remove();
            sum -= salaryValue;
            messageBudget.textContent = `${sum.toFixed(2)}`
            
        }
    }
}
solve()