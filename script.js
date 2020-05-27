window.onload = () => {

  /* put stuff here */
  console.log('hey there');

let listItem = document.getElementById('listBox');
console.log(listItem);

let list = document.getElementById('theList');
console.log(list);




function clickButton () {
  list.innerHTML += `<li class="checkBox">${listBox.value} <input type="checkbox"></li><br>`

  let checkBox = document.getElementsByClassName('checkBox');
  checkBox.addEventListener('checked', checkTheBox);
}

let submitButton = document.getElementById('button');
submitButton.addEventListener('click', clickButton);

function checkTheBox () {
  console.log('checked box') 
  
}






};

