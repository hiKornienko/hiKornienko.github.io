/*
 * modal-deposit
 */
document.addEventListener('DOMContentLoaded', modalDeposit);

function modalDeposit() {
  const minDeposit = 50;
  const max = 7; //length
  const width = 40; //px
  const block = document.querySelector('.modal__deposit--input');
  const input = block.querySelector('input');
  const nav = document.querySelectorAll('[data-deposit-nav]');
  const btn = document.querySelector('.modal__deposit--btn');
  const alert = document.querySelector('.modal__deposit--alert');

  input.addEventListener('input', event => {
    transform(event.target.value);
  })

  for (let item of nav) {
    item.addEventListener('click', event => {
      input.value = event.target.dataset.depositNav;
      transform(event.target.dataset.depositNav);
    })
  }

  function transform(value) {
    if (value.length > 0) {
      input.style.width = width * value.length + 'px';
    } else {
      input.style.width = width + 'px';
    }

    if (value.length >= 4) {
      block.style.transform = 'scale(0.8)';
    } else {
      block.style.transform = 'scale(1)';
    }

    if (value.length >= max) {
      input.value = value.substr(0, value.length - 1);
      input.style.width = ((max - 1) * width) + 'px';
    }

    check();
  }

  function check() {
    block.classList.remove('active');
    btn.classList.remove('active');

    if (Number(input.value) >= Number(minDeposit)) {
      block.classList.add('active');
      btn.classList.add('active');
      alert.innerHTML = '';
    } else {
      alert.innerHTML = `The amount must be equal to or more than ${minDeposit}UAH`;
    }
  }
}
/*
 * modal-deposit
 */


/*
 * modal-exchange
 */
let coin = [{
    key: 'btc',
    name: 'Bitcoin',
    balance: '0.000157',
    result: '1025.74',
    resultKey: 'uah',
    connection: ['uah', 'eth', 'xrp', 'usdt', 'rub']
  },
  {
    key: 'eth',
    name: 'Ethereum',
    balance: '0',
    result: '0',
    resultKey: 'uah',
    connection: ['btc', 'xrp', 'usdt']
  },
  {
    key: 'xrp',
    name: 'Ripple',
    balance: '4.00227',
    result: '2025.44',
    resultKey: 'uah',
    connection: ['uah', 'eth', 'usdt']
  },
  {
    key: 'usdt',
    name: 'Tether',
    balance: '0',
    result: '0',
    resultKey: 'uah',
    connection: ['uah', 'eth', 'xrp']
  },
  {
    key: 'uah',
    name: 'Bitcoin',
    balance: '2044.75',
    result: '2045',
    resultKey: 'uah',
    connection: ['btc', 'usdt', 'rub']
  },
  {
    key: 'rub',
    name: 'Rubble',
    balance: '2044.75',
    result: '2045',
    resultKey: 'uah',
    connection: ['btc', 'eth']
  }
];

document.addEventListener('DOMContentLoaded', modalExchange);

function modalExchange() {
  const select = document.querySelectorAll('[data-exchange-select-btn]');
  const selectList = document.querySelectorAll('[data-exchange-select-list]');
  const selectClose = document.querySelectorAll('[data-exchange-select-close]');
  const give = document.querySelector('[data-exchange-give]');
  const giveList = document.querySelector('[data-exchange-give-list]');
  const receive = document.querySelector('[data-exchange-receive]');
  const receiveList = document.querySelector('[data-exchange-receive-list]');
  const reverse = document.querySelector('[data-exchange-reverse]');
  const input = document.querySelector('[data-exchange-input] input');
  const inputBlock = document.querySelector('[data-exchange-input]');
  const inputKey = document.querySelector('[data-exchange-input] span');
  const btn = document.querySelector('[data-exchange-btn]');
  const alert = document.querySelector('[data-exchange-alert]');

  let app = {
    bd: '',
    give: '',
    receive: '',
    sum: 0,
    run: function(database) {
      this.bd = database;
      this.give = this.bd[0].key;
      this.receive = this.bd[0].connection[0];
      this.pushGive();
      this.pushReceive();
      this.pushInfo();
      this.event.openSelect();
      this.event.closeSelect();
      this.event.reload();
      this.event.reverse();
      this.event.sum();
    },
    reload: function(){
      this.pushGive();
      this.pushReceive();
      this.pushInfo();
      this.check();
    },
    pushGive: function() {
      giveList.innerHTML = '';
      for (let item of this.bd) {
        giveList.innerHTML += this.pushTemplateList(item, 'give');
      }
      give.innerHTML = this.pushTemplate(this.give);
    },
    pushReceive: function() {
      receive.innerHTML = this.pushTemplate(this.receive);
      receiveList.innerHTML = '';
      for (let item of this.bd) {
        for(let connection of this.search(this.give).connection){
          if(item.key == connection){
            receiveList.innerHTML += this.pushTemplateList(item, 'receive');
          }
        }
      }
    },
    pushInfo: function(){
      this.sum = 0;
      input.value = '';
      input.style.width = '40px';

      let item = this.search(this.give);
      inputKey.innerHTML = item.key;
      alert.innerHTML = `Max ${item.balance} <span>${item.key}</span>`;
    },
    transformInput: function(){
      this.sum = input.value;
      let width = 40;
      let max = 10;

      if (this.sum.length > 0) {
        input.style.width = width * this.sum.length + 'px';
      } else {
        input.style.width = width + 'px';
      }

      if (this.sum.length >= 4) {
        inputBlock.style.transform = 'scale(0.8)';
        if (this.sum.length >= 8) {
          inputBlock.style.transform = 'scale(0.6)';
        }else{
          inputBlock.style.transform = 'scale(0.8)';
        }
      } else {
        inputBlock.style.transform = 'scale(1)';
      }

      if (this.sum.length >= max) {
        input.value = this.sum.substr(0, this.sum.length - 1);
        input.style.width = ((max - 1) * width) + 'px';
      }

      this.check();
    },
    check: function(){
      inputBlock.classList.remove('active');
      btn.classList.remove('active');
      let item = this.search(this.give);
      if(Number(this.sum) > 0){
        if(Number(this.sum) <= Number(item.balance)){
          inputBlock.classList.add('active');
          btn.classList.add('active');
        }
      }
    },
    search: function(key){
      for(let item of this.bd){
        if(item.key == key){
          return item;
        }
      }
    },
    pushTemplateList: function(item,param) {
      return `
        <li data-exchange-${param}-list-key="${item.key}">
          <img src="img/coin/${item.key}.svg" alt="image">
          <div>
            <strong>${item.key}</strong>
            <span>${item.name}</span>
          </div>
          <div>
            <strong>${item.balance} ${item.key}</strong>
            <span>≈ ${item.result} ${item.resultKey}</span>
          </div>
        </li>
      `;
    },
    pushTemplate: function(key) {
      return `
        <img src="img/coin/${key}.svg" alt="coin">
        <span>${key}</span>
      `;
    },
    event: {
      openSelect: function(){
        for (let btn of select) {
          btn.addEventListener('click', event => {
            for (let list of selectList) {
              if (btn.dataset.exchangeSelectBtn == list.dataset.exchangeSelectList) {
                list.classList.add('active');
              }
            }
          })
        }
      },
      closeSelect: function(){
        for (let btn of selectClose) {
          btn.addEventListener('click', event => {
            this.closeList();
          })
        }
      },
      closeList: function(){
        for (let list of selectList) {
          list.classList.remove('active');
        }
      },
      reload: function(){
        giveList.addEventListener('click', event => {
          app.give = event.target.dataset.exchangeGiveListKey;
          let item = app.search(app.give);
          for(let connection of item.connection){
            if(connection != app.receive){
              app.receive = item.connection[0]
            }
          }
          app.reload();
          this.closeList();
        })

        receiveList.addEventListener('click', event => {
          app.receive = event.target.dataset.exchangeReceiveListKey;
          app.reload();
          this.closeList();
        })
      },
      reverse: function(){
        reverse.addEventListener('click', event => {
          app.receive = [app.give, app.give = app.receive][0];
          let item = app.search(app.give);
          for(let connection of item.connection){
            if(connection != app.receive){
              app.receive = item.connection[0]
            }
          }
          app.reload();
        })
      },
      sum: function(){
        input.addEventListener('input', event => {
          app.transformInput();
        })
      }
    },
  };

  app.run(coin);
}
/*
 * modal-exchange
 */
