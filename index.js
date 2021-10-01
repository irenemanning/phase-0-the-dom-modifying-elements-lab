document.getElementById('main');
main.remove('main');

const newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");
newHeader.textContent = "Irene is the champion";
console.log(newHeader.textContent);

document.body.append(newHeader);