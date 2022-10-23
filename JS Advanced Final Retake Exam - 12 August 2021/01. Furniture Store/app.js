window.addEventListener('load', solve);

function solve() {

    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let furnitureList = document.getElementById('furniture-list');
    let totalPrice = document.getElementsByClassName('total-price')[0];
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addForm);

    function addForm(e) {
        e.preventDefault();

        let modelValue = model.value;
        let yearValue = Number(year.value);
        let descriptionValue = description.value;
        let priceValue = Number(price.value).toFixed(2);

        if (!modelValue || !yearValue || !descriptionValue || !priceValue || yearValue < 0 || priceValue < 0) {
            return;
        }

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';

        // create model

        let trInfo = document.createElement('tr');
        trInfo.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = modelValue;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = priceValue;

        let tdBtn = document.createElement('td');

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = "More Info";
        moreInfoBtn.addEventListener('click', info);

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = "Buy it";
        buyBtn.addEventListener("click", buyItem);

        let hideTr = document.createElement('tr');
        hideTr.classList.add('hide');
        //hideTr.style.display = "none";

        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${yearValue}`;

        let descriptionTd = document.createElement('td');
        descriptionTd.setAttribute("colspan", "3");
        descriptionTd.textContent = `Description: ${descriptionValue}`;

        hideTr.appendChild(yearTd)
        hideTr.appendChild(descriptionTd)

        tdBtn.appendChild(moreInfoBtn);
        tdBtn.appendChild(buyBtn);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdBtn);

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(hideTr);

        function info(e) {
            e.preventDefault();

            if (moreInfoBtn.textContent === "Less Info") {
                hideTr.style.display = "none";
                moreInfoBtn.textContent = "More Info";
                return;
            }

            hideTr.style.display = "contents";
            moreInfoBtn.textContent = "Less Info";
        }

        function buyItem(e){
            e.preventDefault();

            totalPrice.textContent = priceValue;

            e.target.parentElement.parentElement.remove();
        }
    }

}
