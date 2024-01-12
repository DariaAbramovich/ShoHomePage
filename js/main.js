const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

for (let btn of infoBtns){
    btn.addEventListener('click', showHint)
}
function showHint(e){
    e.stopPropagation(); // кликл от кнопки не будет передаваться на родителей. 
    // через родителя удаляем / добавляем  класс none
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

// закрываем подсказку кликая в любом месте док-та
document.addEventListener('click', closeHints)
function closeHints(){
    for(let hint of infoHints){
        hint.classList.add('none')
    }
}

for(let hint of infoHints){
    hint.addEventListener('click', (e)=> e.stopPropagation())
}