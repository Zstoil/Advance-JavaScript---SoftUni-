function solve() {

    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let btnAdd = document.getElementById('add');
    let btnReset = document.getElementById('reset');
    let ul = document.getElementById('list');
    let sendUl = document.getElementsByClassName('sent-list')[0];
    let deleteUl = document.getElementsByClassName('delete-list')[0];

    btnAdd.addEventListener('click', add);
    btnReset.addEventListener('click', reset);

    function add(e){
        e.preventDefault();

        recipientValue = recipient.value;
        titleValue = title.value;
        messageValue = message.value;

        if(!recipientValue || !titleValue || !messageValue){
            return ;
        }

        recipient.value = '';
        title.value = '';
        message.value = '';


        let li = document.createElement('li');
        let titleH4 = document.createElement('h4');
        titleH4.textContent = `Title: ${titleValue}`

        let recipientH4 = document.createElement('h4');
        recipientH4.textContent = `Recipient Name: ${recipientValue}`;

        let span = document.createElement('span');
        span.textContent = messageValue;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let btnSent = document.createElement('button');
        btnSent.setAttribute('id', 'send');
        btnSent.textContent = 'Send';
        btnSent.addEventListener('click', send);

        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('id', 'delete');
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', del);

        div.appendChild(btnSent);
        div.appendChild(btnDelete);

        li.appendChild(titleH4);
        li.appendChild(recipientH4);
        li.appendChild(span);
        li.appendChild(div);

        ul.appendChild(li);

        function send(e){
            e.preventDefault();

            let li = document.createElement('li');
            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipientValue}`
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleValue}`;

            let div = document.createElement('div');
            div.classList.add('btn');

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', del);

            div.appendChild(deleteBtn);

            li.appendChild(spanRecipient);
            li.appendChild(spanTitle);
            li.appendChild(div);

            sendUl.appendChild(li);

            e.target.parentElement.parentElement.remove();

        }

        function del(e){
            e.preventDefault();

             let li = document.createElement('li');
             let spanRecipient = document.createElement('span');
             spanRecipient.textContent = `To: ${recipientValue}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleValue}`;

            li.appendChild(spanRecipient);
            li.appendChild(spanTitle);

            deleteUl.appendChild(li);

            e.target.parentElement.parentElement.remove();

        }
    }

    function reset(e){
        e.preventDefault();

        recipient.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()