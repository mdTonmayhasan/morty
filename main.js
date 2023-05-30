
// Slider create   //

var swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 3.7,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
        
      },
    });



// drop down menu bar stem //

const optionMneu = document.querySelector(".select-menu"),
      selectBtn = optionMneu.querySelector(".select-btn"),
      options = optionMneu.querySelectorAll(".option"),
      sBtn_text = optionMneu.querySelector(".sBtn-text");

      selectBtn.addEventListener("click", () =>{
        optionMneu.classList.toggle('active')
      })

      options.forEach(option => {
         option.addEventListener("click", () =>{
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption ;
         })
        
         console.log(

         );

      })

//                    pagiNation stem                     //


const allMembers = document.querySelector(".all-members").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page");
const maxItem=15;
let index=1;


const pagiNation =Math.ceil(allMembers.length/maxItem);
console.log(pagiNation);


prev.addEventListener("click",function(){
  index--;
  check()
  showItem()
})
next.addEventListener("click",function(){
  index++;
  check()
  showItem()
})

function check(){
  if(index == pagiNation){
      next.classList.add("disabled")
  }
  else{
     next.classList.remove("disabled")
  }
  if(index == 1){
    prev.classList.add("disabled")
  }
  else{
    prev.classList.remove("disabled")
  }
}

function showItem(){
  for(let i = 0;i<allMembers.length; i++){

    allMembers[i].classList.remove("show");
    allMembers[i].classList.add("hide");

    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
      allMembers[i].classList.remove("hide");
      allMembers[i].classList.add("show");
    }
    
  }
  page.innerHTML= index;
}
  
window.onload = function(){
  showItem();
  check();
}