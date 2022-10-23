window.addEventListener("load", solve);

function solve() {

  document.getElementById('publish').addEventListener('click', createTask);

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById('selling-price');
  let receiveSection = document.getElementById('table-body');
  let sellSection = document.getElementById('cars-list');
  let profit = document.getElementById('profit');

  
  function createTask(e){
    e.preventDefault();

    let makeValue = make.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValue = fuel.value;
    let originalCostValue = Number(originalCost.value);
    let sellingPriceValue = Number(sellingPrice.value);

    if(!makeValue || !modelValue || !yearValue || !fuelValue || !originalCostValue || !sellingPriceValue){
     return
    }
    if(originalCost > sellingPriceValue){
      return
    }

    

    createOrder(makeValue,modelValue,yearValue,fuelValue,originalCostValue,sellingPriceValue);

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';

  

  function createOrder(makeValue,modelValue,yearValue,fuelValue,originalCostValue,sellingPriceValue){
    
    let tr = document.createElement('tr');
    tr.classList.add('row');

    let tdMake = document.createElement('td');
    tdMake.textContent = makeValue;

    let tdModel = document.createElement('td');
    tdModel.textContent = modelValue;

    let tdYear = document.createElement('td');
    tdYear.textContent = yearValue;

    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuelValue;

    let tdOrgCost = document.createElement('td');
    tdOrgCost.textContent = originalCostValue;

    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPriceValue;

    let tdBtn = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn','edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);  

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn','sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sell);

    tdBtn.appendChild(editBtn);
    tdBtn.appendChild(sellBtn);
    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOrgCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdBtn);
    receiveSection.appendChild(tr);
  }

  function edit(e){
    e.preventDefault();

     make.value = makeValue;
     model.value = modelValue;
     year.value = yearValue;
     fuel.value =fuelValue;
     originalCost.value = Number(originalCostValue);
     sellingPrice.value = Number(sellingPriceValue);

     
     Array.from(document.querySelector('#table-body').children).forEach(el => el.remove());
  }

  function sell(e){

    let li = document.createElement('li');
    li.classList.add('each-list');
    let makeModelSpan = document.createElement('span');
    let yearSpan = document.createElement('span');
    let diffPriceSpan = document.createElement('span');

    li.appendChild(makeModelSpan);
    li.appendChild(yearSpan);
    li.appendChild(diffPriceSpan);
    sellSection.appendChild(li);

    makeModelSpan.textContent = `${makeValue} ${modelValue}`;
    yearSpan.textContent = yearValue;
    diffPriceSpan.textContent = `${sellingPriceValue - originalCostValue}`;

    profit.textContent = (Number(profit.textContent) + sellingPriceValue - originalCostValue).toFixed(2);

    e.target.parentElement.parentElement.remove();
  }

      // tr.appendChild(tdMake);
      // tr.appendChild(tdModel);
      // tr.appendChild(tdYear);
      // tr.appendChild(tdFuel);
      // tr.appendChild(tdOrgCost);
      // tr.appendChild(tdSellingPrice);
      // tr.appendChild(tdSellingPrice);
   
      // receiveSection.appendChild(tr);
}


}
