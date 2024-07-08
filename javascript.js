let marker = document.querySelector('#marker');
let list = document.querySelectorAll('.first-List li');

function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
    })
})
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));


let count = 1;
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


let mousein = false;
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')
   
}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})

 const myImage = document.querySelectorAll(".images img");
let myC = 0;
function showImage () {
    for (let i = 0; i < myImage.length; i++) {
        myImage[i].style.display = "none"; 
    }
    myImage[myC].style.display = "block";
}
showImage();

setInterval(() => {
    if (myC < myImage.length-1) {
        myC++;
        showImage();
    } else {
        myC = 0;
        showImage();
    }
}, 5000); 

const sideMenu = document.querySelector(".menuside");
const sideHiddenMenu = document.querySelector(".side-bar ul");
sideMenu.onclick = function() {
    sideHiddenMenu.style.display = "block";
    sideHiddenMenu.style.width = "220px";
   
} 

 const middleList0 = document.querySelectorAll(".right-list-middle li")[0];
 
 const middleList1 = document.querySelectorAll(".right-list-middle li")[1];
 const middleList2 = document.querySelectorAll(".right-list-middle li")[2];
 const middleList3 = document.querySelectorAll(".right-list-middle li")[3];
 const middleList4 = document.querySelectorAll(".right-list-middle li")[4];
 
 middleList0.onclick = () => {
    middleList0.style.backgroundImage = "linear-gradient(to top , blue , transparent)";
    middleList0.style.borderBottom = "3px solid white";
    middleList1.style.backgroundImage = "";
    middleList1.style.borderBottom = "";
    middleList2.style.backgroundImage = "";
    middleList2.style.borderBottom = "";
    middleList3.style.backgroundImage = "";
    middleList3.style.borderBottom = "";
    middleList4.style.backgroundImage = "";
    middleList4.style.borderBottom = "";
 }

 middleList1.onclick = () => {
    middleList0.style.backgroundImage = "";
    middleList0.style.borderBottom = "";
    middleList1.style.backgroundImage = "linear-gradient(to top , blue , transparent)";
    middleList1.style.borderBottom = "3px solid white";
    middleList2.style.backgroundImage = "";
    middleList2.style.borderBottom = "";
    middleList3.style.backgroundImage = "";
    middleList3.style.borderBottom = "";
    middleList4.style.backgroundImage = "";
    middleList4.style.borderBottom = "";
 }

 middleList2.onclick = () => {
    middleList0.style.backgroundImage = "";
    middleList0.style.borderBottom = "";
    middleList1.style.backgroundImage = "";
    middleList1.style.borderBottom = "";
    middleList2.style.backgroundImage = "linear-gradient(to top , blue , transparent)";
    middleList2.style.borderBottom = "3px solid white";
    middleList3.style.backgroundImage = "";
    middleList3.style.borderBottom = "";
    middleList4.style.backgroundImage = "";
    middleList4.style.borderBottom = "";
 }

 middleList3.onclick = () => {
    middleList0.style.backgroundImage = "";
    middleList0.style.borderBottom = "";
    middleList1.style.backgroundImage = "";
    middleList1.style.borderBottom = "";
    middleList2.style.backgroundImage = "";
    middleList2.style.borderBottom = "";
    middleList3.style.backgroundImage = "linear-gradient(to top , blue , transparent)";
    middleList3.style.borderBottom = "3px solid white";
    middleList4.style.backgroundImage = "";
    middleList4.style.borderBottom = "";
 }

 middleList4.onclick = () => {
    middleList0.style.backgroundImage = "";
    middleList0.style.borderBottom = "";
    middleList1.style.backgroundImage = "";
    middleList1.style.borderBottom = "";
    middleList2.style.backgroundImage = "";
    middleList2.style.borderBottom = "";
    middleList3.style.backgroundImage = "";
    middleList3.style.borderBottom = "";
    middleList4.style.backgroundImage = "linear-gradient(to top , blue , transparent)";
    middleList4.style.borderBottom = "3px solid white";
 }
 