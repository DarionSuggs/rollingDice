var count =  [0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function randomNumber() {
   return Math.floor(Math.random() * 6 ) + 1;
}

function myFunction() {
  document.getElementById("myBtn");

  for (var i = 0; i < 1000; i++) {
    let total = randomNumber() + randomNumber();
    count[total]++
  }
  let destination = document.getElementById('myResults');
  for (var i = 0; i < count.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = count[i]+"px";
    newDiv.style.background = "blue";
    newDiv.style.height = '20px';

    let divText = document.createTextNode(i + "," + count[i]);
    newDiv.appendChild(divText);
    destination.appendChild(newDiv);
  }
  console.log(count);
}
