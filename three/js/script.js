const referral = getReferral();
drawReferral(referral);

//*************************//
//*************************//
//*************************//

function drawReferral(arr) {
  for (let level of arr) {
    for (let item of level) {
      let block = document.querySelector('[data-board-user-id="' + item.pearent + '"]');
      let children = block.querySelector('[data-board-children]');
      let count = 0;

      for (let pearent of level) {
        if (item.pearent == pearent.pearent) {
          count++;
        }
      }
      children.innerHTML += templateRefferal(item.id, item.fio, item.image, count);
    }
  }

  lastTemplateRefferal();


  function templateRefferal(id, fio, image, count) {
    let solo = '';
    if (count == 1) {
      solo = 'board__item--solo';
    }

    if(image == null){
      image = 'img/no_avatar.png';
    }

    let result = `
    <div class="board__item ${solo}" data-board-user-id="${id}">
      <div class="board__user">
        <div class="board__user--inner" data-board-move>
          <div class="board__user--img">
             <img src="${image}" alt="user">
          </div>
          <div class="board__user--name">${fio}</div>
        </div>
      </div>
      <div class="board__item--children" data-board-children></div>
    </div>
    `;
    return result;
  } //templateRefferal

  function lastTemplateRefferal() {
    let blocks = document.querySelectorAll('[data-board-user-id]');

    for (let block of blocks) {
      let checkChildren = block.querySelector('[data-board-children]');
      if (checkChildren.innerHTML == '') {
        block.classList.add('board__item--last');
      }
    }
  } //lastTemplateRefferal
} //drawReferral

//*************************//
//*************************//
//*************************//

function getReferral() {
  const referral = data.all_data.data;

  let structure = [];
  let searchArr = [data.main.id];

  search(searchArr);

  function search(arr) {
    structure.push([]);
    searchArr = [];

    for (let i = 0; i < referral.length; i++) {
      for (let a = 0; a < arr.length; a++) {
        if (referral[i].user_data.sponsor_id === arr[a]) {
          structure[structure.length - 1].push({
            'id': referral[i].user_data.id,
            'pearent': referral[i].user_data.sponsor_id,
            'fio': referral[i].user_data.fio,
            'image': referral[i].user_data.image
          });
          searchArr.push(referral[i].user_data.id);
        }
      }
    }

    if (searchArr.length != 0) {
      search(searchArr);
    }
  } //search

  return structure;
} //getReferral

//*************************//
//*************************//
//*************************//

//scale
document.querySelector('[data-board-zoom-plus]').addEventListener('click', function() {
  let board = document.querySelector('[data-board-scale]');
  let scale = Number(board.dataset.boardScale) + 0.1;
  board.dataset.boardScale = scale;
  board.style.transform = "scale(" + scale + ")";
});

document.querySelector('[data-board-zoom-minus]').addEventListener('click', function() {
  let board = document.querySelector('[data-board-scale]');
  let scale = Number(board.dataset.boardScale) - 0.1;
  board.dataset.boardScale = scale;
  board.style.transform = "scale(" + scale + ")";
});
//scale

//*************************//
//*************************//
//*************************//

// swap board
swapBoard();

function swapBoard() {
  const board = document.querySelector('[data-board]');
  board.scrollLeft = (board.scrollWidth - board.offsetWidth) / 2;

  board.onmousedown = () => {
    let pageX = 0;
    let pageY = 0;

    document.onmousemove = e => {
      if (pageX !== 0) {
        board.scrollLeft = board.scrollLeft + (pageX - e.pageX);
      }
      if (pageY !== 0) {
        board.scrollTop = board.scrollTop + (pageY - e.pageY);
      }

      pageX = e.pageX;
      pageY = e.pageY;
    };

    // заканчиваем выполнение событий
    board.onmouseup = () => {
      document.onmousemove = null;
      board.onmouseup = null;
    };

    // отменяем браузерный drag
    board.ondragstart = () => {
      return false;
    };
  };
}
// swap board

//*************************//
//*************************//
//*************************//

//drag and drop
referralMove();
function referralMove(){
  let referrals = document.querySelectorAll('[data-board-move]');
  let localName = 'ReferralMove';

  for(let referral of referrals){
    referral.addEventListener('click', (event) => {
      let referralId = referral.parentElement.parentElement.dataset.boardUserId;

      if(localStorage.getItem(localName)){
        if(referralId === localStorage.getItem(localName)){
          referral.classList.remove('board__user--move');
          localStorage.removeItem(localName);
        }else{
          let a = referral.innerHTML;
          let aId = referralId;

          let b = document.querySelector('[data-board-user-id="'+localStorage.getItem(localName)+'"]');
          let bMove = b.querySelector('[data-board-move]');

          referral.innerHTML = bMove.innerHTML;
          referral.parentElement.parentElement.dataset.boardUserId = localStorage.getItem(localName);

          b.dataset.boardUserId = aId;
          bMove.innerHTML = a;

          localStorage.removeItem(localName);

          document.querySelector('.board__user--move').classList.remove('board__user--move');
        }
      }
      else{
        referral.classList.add('board__user--move');
        localStorage.setItem(localName, referralId);
      }
        //console.log(localStorage.getItem(localName))
    });
  }

}
