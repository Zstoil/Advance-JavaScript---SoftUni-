window.addEventListener("load", solve);

function solve() {

  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let button = document.getElementById('publish-btn');
  let reviewList = document.getElementById('review-list');
  let publishList = document.getElementById('published-list');
  let clearBtn = document.getElementById('clear-btn');

  button.addEventListener('click', publish);
  clearBtn.addEventListener('click', BtnClear)

  function publish(e) {
    e.preventDefault();

    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;

    if(!titleValue || !categoryValue || !contentValue){
      return ;
    }

    title.value = '';
    category.value = '';
    content.value = '';

    let li = document.createElement('li');
    li.classList.add('rpost')
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = titleValue;
    let pFirst = document.createElement('p');
    pFirst.textContent = `Category: ${categoryValue}`;
    let pSecond = document.createElement('p');
    pSecond.textContent = `Content: ${contentValue}`;

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('action-btn', 'edit');
    btnEdit.textContent = 'Edit'
    //btnEdit.classList.add('edit');
    btnEdit.addEventListener('click', edit);

    let btnApprove = document.createElement('button');
    btnApprove.classList.add('action-btn', 'approve');
    btnApprove.textContent = 'Approve';
    btnApprove.addEventListener('click', approve);
    //btnApprove.classList.add('approve');

    article.appendChild(h4);
    article.appendChild(pFirst);
    article.appendChild(pSecond);

    li.appendChild(article);
    li.appendChild(btnEdit);
    li.appendChild(btnApprove);

    reviewList.appendChild(li);



    function edit(e) {
      e.preventDefault();

      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;

      e.target.parentElement.remove();
    }

    function approve(e) {
      e.preventDefault();

      publishList.appendChild(li);
      btnEdit.remove();
      btnApprove.remove();
    }



  }

  function BtnClear(e) {
    e.preventDefault();

    Array.from(document.querySelector('#published-list').children).forEach(el => el.remove());
  }

}
