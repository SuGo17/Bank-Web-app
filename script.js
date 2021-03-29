'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Surya Gowda',
  movements: [200, 450, -400, 3000, -650, -130, 70, 13000],
  movementsDates : ['2021-02-24T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Sarika D Raj',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Sujith Ramesh',
  movements: [2000, -200, 340, -300, -20, 50, 400, -460],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Siddaling Randale',
  movements: [430, 1000, 700, 50, 90],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Vijeth Bhat',
  movements: [380, 500,-350 ,2000,-500],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 5555,
};

const account6 = {
  owner: 'Sunil Indi',
  movements: [5000, 2500, -150, -790, -3210, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 6666,
};

const account7 = {
  owner: 'Syed Monu Abbas',
  movements: [1500, 4500, -150, -790, -3210, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 7777,
};

const account8 = {
  owner: 'Shreyas S',
  movements: [2000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 8888,
};

const account9 = {
  owner: 'Vishnu R',
  movements: [5000, 3400, -150, 2000, -3210, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 9999,
};

const account10 = {
  owner: 'Amith N',
  movements: [5000, 3400, -150, -790, -2000, -1000, 8500, -30],
  movementsDates : ['2021-02-25T18:30:00.000Z','2021-03-01T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-02T18:30:00.000Z','2021-03-04T18:30:00.000Z','2021-03-05T18:30:00.000Z','2021-03-20T18:30:00.000Z','2021-03-23T18:30:00.000Z'],
  interestRate: 1,
  pin: 1010,
};


const accounts = [account1, account2, account3, account4,account5, account6, account7, account8,account9, account10];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

labelTimer.innerHTML = ''
/////////////////////////////////////////////////
// Creating UserNames
const creatingUserNames = (accs) => {
  accs.forEach((acc) => {
    acc.userName = acc.owner.toLowerCase().split(' ').map( name => name[0]).join('');
  })
};
creatingUserNames(accounts);

//Implementing Timer


// const CreateDate = (isoStr) => {
//   const dates = new Date(isoStr);
//   const year = dates.getFullYear()
//   const month = `${dates.getMonth() + 1}`.padStart(2,0);
//   const day = `${dates.getDate()}`.padStart(2,0);
//   return `${day}/${month}/${year}`
// } 

const formatMovementsDates = (date) => {
  const calcDaysPassed = (date1,date2) => Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) - 1;
  const curDate = new Date();
  const transDate = new Date(date)
  const formatDate = calcDaysPassed(transDate,curDate);
  const options = {
    month : 'long',
    year : 'numeric',
    day: '2-digit',
  }
  return formatDate == 0 ? 'Today' : (formatDate == 1 ? 'Yesterday' : (formatDate <= 7 ? `${formatDate} Days Ago` : new Intl.DateTimeFormat('en-Us',options).format(transDate)));
}

// Display Movements
const displayMovements = (acc) =>{
  containerMovements.innerHTML = '';
  acc.movements.forEach((mov,i) => {
    let html;
    mov > 0 ? (html = `<div class="movements__row">
          <div class="movements__type movements__type--deposit">&nbsp &nbsp &nbsp${i+1} Credit &nbsp &nbsp &nbsp</div>
          <div class="movements__date">${formatMovementsDates(acc.movementsDates[i])}</div>
          <div class="movements__value">₹ ${Math.abs(mov)}</div>
          </div>`) : (html = `<div class="movements__row">
          <div class="movements__type movements__type--withdrawal">&nbsp &nbsp &nbsp &nbsp${i+1} Debit &nbsp &nbsp &nbsp &nbsp</div>
          <div class="movements__date">${formatMovementsDates(acc.movementsDates[i])}</div>
          <div class="movements__value">- ₹ ${Math.abs(mov)}</div>
        </div>`);
    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};


// Displaying Balance
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc,ele) => acc + ele);
  labelBalance.textContent = `₹ ${acc.balance.toFixed(2)}`;
}

// Calculating and Displaying both total deposited and total debited
const calcDisplaySummary = (acc) => {
  let deposited = acc.movements.filter(mov => mov > 0).reduce((acc,mov) => acc + mov);
  labelSumIn.innerHTML = `₹${deposited.toFixed(2)}`;
  let withdrew = acc.movements.filter(mov => mov < 0).reduce((acc,mov) => acc + mov);
  labelSumOut.innerHTML = `₹${Math.abs(withdrew).toFixed(2)}`;
  let interest = acc.movements.filter(mov => mov > 0).map((mov) => mov * acc.interestRate * 0.01).reduce((acc,mov) => acc + mov);
  labelSumInterest.textContent = `₹ ${interest.toFixed(2)}`;
}

//Update UI
function updateUI(user){
  //Update movements
  displayMovements(user)

  //Update balance
  calcDisplayBalance(user);

  //Update summary
  calcDisplaySummary(user);

  //display Dates
  const dates = new Date();
  const options = {
    hour : 'numeric',
    minute : 'numeric',
    day : '2-digit',
    month : 'long',
    year : 'numeric',
    weekday: 'long',
  }
  // const locale = navigator.language;
  labelDate.innerHTML = new Intl.DateTimeFormat('en-US',options).format(dates);
}

let user;
let timer;
const logoutTimer = () => {
  //if Timer is already present
  if (timer){
    clearInterval(timer);
  }
  let time = 600;
  //Timer
  timer = setInterval(() => {
    const min = `${Math.trunc(time / 60)}`.padStart(2,0);
    const sec = `${time % 60}`.padStart(2,0);
    labelTimer.innerHTML = `${min}:${sec}`
    time--;
    //When timer 0
    if (time === 0)
    {
      setTimeout(() => {containerApp.style.opacity = 0},400);
      setTimeout(() => {containerApp.style.display = 'none'},800);
      setTimeout(() => {labelWelcome.innerHTML = `Log in to get started`;},800)
    }
    return time
  },1000)
}
//Implementing login
btnLogin.addEventListener('click',(e) => {
  e.preventDefault();
  user = accounts.find(acc => acc.userName === inputLoginUsername.value);
  // Checking the pin
  if (user?.pin === Number(inputLoginPin.value)){
    // Display welcome message
    labelWelcome.innerHTML = `Welcome Back, ${user.owner}`;

    // Display UI 
    containerApp.style.display = 'grid';
    setTimeout(()=>{containerApp.style.opacity = 100},150);

    //Remove Values from input and ufocus pin box
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Implementing Logout Timer
    logoutTimer();

    //update UI
    updateUI(user);
  }
});

//Implementing Transfer
btnTransfer.addEventListener('click',(e)=>{
  e.preventDefault();

  //store the values
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find((acc) => acc.userName === inputTransferTo.value);

  //clear the input feild and defocus
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur()

  //implement transfer 
  if(recieverAcc && amount > 0 && user.balance >= amount && recieverAcc !== user.userName){
    user.movementsDates.push(new Date().toISOString());
    user.movements.push(-amount);
    recieverAcc.movementsDates.push(new Date().toISOString());
    recieverAcc.movements.push(amount);
  }
  //reset logoutTimer
  logoutTimer();
  //update UI
  updateUI(user);
})

//Delete user account
btnClose.addEventListener('click',(e) => {
  e.preventDefault();
  const account = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
  //Check user.userName == account
  if (user?.userName === account && pin === user?.pin){
    const i = accounts.findIndex(acc => acc.userName == account)
    accounts.splice(i,1);
    setTimeout(() => {containerApp.style.opacity = 0},400);
    setTimeout(() => {containerApp.style.display = 'none'},800);
    labelWelcome.innerHTML = `Log in to get started`;
  }
});

//Implementing Loan
btnLoan.addEventListener('click',(e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  if(amount >= 0 && user.movements.some(amt => amt >= amount * 0.10)){
    user.movements.push(amount);
    user.movementsDates.push(new Date().toISOString());

    // Implementing date
    // Update UI
    setTimeout(() => {updateUI(user)},1500 );

    //reset logoutTimer
    logoutTimer();
  }
});

//implementing sorting movements
let sort = 0;
btnSort.addEventListener('click',(e) => {
  e.preventDefault();
  const sortedDates = (acc) => {
    let mov;
    let newDates = [];
        mov = acc.movements.slice().sort((a,b) => a - b);
        mov.forEach((m)=>{
          newDates.push(acc.movementsDates[acc.movements.findIndex(i => i == m)]);
        });
    return newDates
  }
  const sortedMovements = {
    movements: user.movements.slice().sort((a,b) => a - b),
    movementsDates : sortedDates(user),
  };
  
  sort ? (sort = 0,btnSort.textContent = '&uparrow; SORT') : (sort = 1,btnSort.textContent = '&downarrow; SORT');


  //Changing Innter Text
  btnSort.innerHTML = '&uparrow; SORT';
  
  // Implements Sort Function
  sort ? displayMovements(sortedMovements) : displayMovements(user);
  
});

