// where to add

const placeList =document.getElementById('places-list')
// what  to be added
const li=document.createElement("li")
li.innerText=("hello hi");
placeList.appendChild(li)
// add the child
// console.log("hello word")
// where to add
const mainContainer =document.getElementById('main-container')
const section =document.createElement('section')
mainContainer.appendChild(section)
const h1 =document.createElement('h1')
h1.innerText=('This is section heading')
section.appendChild(h1);
const ul =document.createElement('ul')
section.appendChild(ul);
const li1=document.createElement('li')
li1.innerText=("this is li1 tag")

ul.appendChild(li1)
const li3=document.createElement('li')
li3.innerText=("this is li3 tag")

ul.appendChild(li3)
const li2=document.createElement('li')
li2.innerText=("this is li2 tag")

ul.appendChild(li2)

// set innerHtml
