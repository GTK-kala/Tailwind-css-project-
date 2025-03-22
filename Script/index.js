let SetData = document.querySelector('#year');
 let Data = new Date();
  let NowData = Data.getFullYear();
   SetData.innerHTML = NowData;


let SetMenu = document.querySelector('#mobile-menu');
 SetMenu.addEventListener('click', ()=>{
  let Box = document.querySelector('#move');
   if(Box.classList.contains('hidden')){
    Box.classList.add('block');
   }
   else{
    Box.classList.remove('hidden');
   }
 })