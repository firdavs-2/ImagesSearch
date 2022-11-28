
// slider
const box= document.querySelector(".box")
const slide = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prew = document.querySelector(".prew")
let n = 0;
function slider(){
if(n<0){
   n=slide.length-1;
}
if(n>slide.length-1){
   n=0;
}
box.style.transform=`translateX(${-n*570}px)`;
};
next.addEventListener('click', () =>{
   n++;
   slider();
   st()
});
prew.addEventListener('click', () =>{
   n--;
   slider();
   st()
});

let fx= function play(){
   n++
   slider();
}
let stop=setInterval(fx,2000);
let st= function st(){
   clearInterval(stop)
}
// 2

      let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container2 .image-container .image');

searchBox.oninput = () =>{
   images.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value;
   images.forEach(filter =>{
      let title = filter.getAttribute('data-title');
      if(value == title){
         filter.style.display = 'block';
      }
      if(searchBox.value == ''){
         filter.style.display = 'block';
      }
   });
};
