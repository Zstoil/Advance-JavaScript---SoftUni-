window.addEventListener('load', solve);

function solve() {
    
    let type = document.getElementById("type-product");
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let receivedOrder = document.getElementById('received-orders');
    let completedOrder = document.getElementById('completed-orders');

    let sendBtn = document.querySelectorAll('button[type=submit]')[0];
    //let sendBtn = document.getElementsByTagName('button')[0]
    sendBtn.addEventListener('click', sendForm);

    


    function sendForm(e){
        e.preventDefault();

        let typeValue = type.value;
        let descriptionValue = description.value;
        let nameValue = name.value;
        let phoneValue = phone.value;

        if(!descriptionValue || !nameValue || !phoneValue){
            return;
        }

        description.value = '';
        name.value = '';
        phone.value = '';

        let div = document.createElement('div');
        div.classList.add('container');
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeValue}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        let btnStart = document.createElement('button');
        btnStart.classList.add('start-btn');
        btnStart.textContent = 'Start repair';
        btnStart.addEventListener('click', start);

        let btnFinish = document.createElement('button');
        btnFinish.classList.add('finish-btn');
        btnFinish.textContent = 'Finish repair'
        btnFinish.disabled = true;
        btnFinish.addEventListener('click', finish);


        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(btnStart);
        div.appendChild(btnFinish);

        receivedOrder.appendChild(div);

        function start(e){
            e.preventDefault();

            btnStart.disabled = true;
            btnFinish.disabled = false;
        }

        function finish(e){
            e.preventDefault();

            let div = document.createElement('div');
            div.classList.add('container');

            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${typeValue}`;

            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${descriptionValue}`;

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);

            completedOrder.appendChild(div);

            e.target.parentElement.remove();
        }
        
        let clearBtn = document.getElementsByClassName('clear-btn')[0];
        clearBtn.addEventListener('click', clear);

        function clear(e){
            e.preventDefault();

            let div = document.getElementsByClassName('container');

            Array.from(div).forEach(el => {
                el.remove();
            });
        }
    }

}