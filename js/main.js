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

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 42,   
    freeMode: true,

    // breakpoints:{
    //     640:{
    //         slidesPerView: 2,
    //         spaceBetween: 20,   
    //     },
    //     640:{
    //         slidesPerView: 4,
    //         spaceBetween: 40,   
    //     },
    //     640:{
    //         slidesPerView: 5,
    //         spaceBetween: 50,   
    //     },
    // },
  
    navigation: {
      nextEl: '#swiperNext',
      prevEl: '#swiperPrew',
    },

  });

//   tabs

const tabsBtn = document.querySelectorAll('[data-tab]')
const tabProducts = document.querySelectorAll('[data-tab-value]')
for(let btn of tabsBtn){
    btn.addEventListener('click', function(){
        for(let btn of tabsBtn){
            btn.classList.remove('active-btn')
        }   
        this.classList.add('active-btn')

        // отображаем нужное и скрываем ненужное
        for(let product of tabProducts){
            if(product.dataset.tabValue === this.dataset.tab){
                product.classList.remove('none')
            }
            else{
                product.classList.add('none')
            }

           
        }
    })
}