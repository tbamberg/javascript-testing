const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redP = document.createElement('p');
redP.classList.add('redP');
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const blackPink = document.createElement('div');
blackPink.style.cssText = "border: solid black; background-color: pink;";

const blackPinkH1 = document.createElement('h1');
const blackPinkP = document.createElement('p');
blackPinkH1.textContent = "I'm in a div";
blackPinkP.textContent = "ME TOO!";
blackPink.appendChild(blackPinkH1);
blackPink.appendChild(blackPinkP);

container.appendChild(blackPink);

///////////////////////////////

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});