/*const buttonElement = document.querySelector('.miko')

buttonElement.addEventListener('click',mikoButton)

function mikoButton(){
  if(buttonElement.innerText === 'Disable Miko'){
    buttonElement.innerText = 'Enable Miko'
  }else if(buttonElement.innerText === 'Enable Miko'){
    buttonElement.innerText = 'Disable Miko'
  }
};


const card= document.querySelector('.experience3');

const glow = document.createElement('span')
glow.classList.add('glow')

window.addEventListener('mousemove',(e) =>{
  document.body.append(glow);
  const x  = e.pageX;
  const y  = e.pageY;

  console.log(x,y);
})


/*
const back = document.body

const button = document.querySelector('.switch')

button.addEventListener('click',switchButton)

function switchButton(){
  back.classList.add('darkmode');
  
};

/*
const buttonChanger = document.querySelector('.switch')

buttonChanger.addEventListener('click',buttonText)

function buttonText(){
  if(buttonChanger.innerText === 'Dark mode'){
    buttonChanger.innerText = 'Pink Mode'
  }else if(buttonChanger.innerText === 'Pink Mode'){
    buttonChanger.innerText = 'Dark Mode'
  
  }
};

/*
const body = document.body

const pink = document.querySelector('#switchchanger')



function pinkMode(){
  if(pink.innerText === 'Pink Mode'){
    pink.addEventListener('click',function(){
      body.classList.add('pinkmode')
    })
  }
}*/

const menu = document.querySelector('.logo');
const popup = document.querySelector('.navwords')

menu.addEventListener('click',show)

function show(){
  if(popup.style.display ==='none'){
    popup.style.display = 'flex'
  }else{
    popup.style.display = 'none'
  }
}


