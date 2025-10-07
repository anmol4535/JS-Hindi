# Projects related to DOM

## PROJECT LINK
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Anmol")\

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```

# Project 5 Solution

```javascript
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyboard</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  

  `;
});

```

# Project 6 Solution

```javascript
// generate a random hexa color

let randomColor = function generateColor() {
  let col = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += col[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());
let intervalId;
const changeBgColor = function () {
  if (!intervalId) intervalId = setInterval(change, 1000);
  function change() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopBgColor = function () {
  clearInterval(intervalId);
  //intervalId = null;
};

document.querySelector('#start').addEventListener('click', changeBgColor);
document.querySelector('#stop').addEventListener('click', stopBgColor);


```