let toggledbtn = document.getElementById('toggle');
let mainmenu = document.getElementById('mainmenu');
// console.log(mainmenu);

toggledbtn.addEventListener('click', function(){
// mainmenu.style.display = 'block';
mainmenu.classList.toggle('showmenu')
})
