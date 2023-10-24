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