const navBtn = document.getElementById('navBtn');
const mainNav = document.getElementById('mainNav');
const header = document.getElementById('mainHeader');
const logo = document.getElementById('logo');
const phrase = document.getElementById('phrase');
const timerId = document.getElementById('timerId');
let rectangle = document.getElementById('rectangle-1');
let sliderPhoto = document.getElementById('slider-photo-1');
const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popupBtn');
const popupOverlay = document.getElementById('popupOverlay');
const shippingInformation = document.getElementById('shippingInformation');
const ReedLess = document.getElementById('ReedLess');
const footerP = document.getElementById('footerP');
const vectorBtn = document.getElementById('vectorBtn');

let number = 0;
let ReedLessNumber = 0;
let shippingInformationNumber = 0;
let numberSliderAnimation = 2;

sliderPhoto.style.transform = 'none';
sliderPhoto.style.transition = 'transform';
rectangle.style.background = '#A0A0A0'

setInterval(() => {
  if (numberSliderAnimation < 5) {
    sliderPhoto.style = {}
    rectangle.style = {}
    sliderPhoto = document.getElementById('slider-photo-' + numberSliderAnimation);
    rectangle = document.getElementById('rectangle-' + numberSliderAnimation)
    sliderPhoto.style.transform = 'none';
    sliderPhoto.style.transition = 'transform 1s';
    numberSliderAnimation++
    sliderPhoto.style.transform = 'none';
    sliderPhoto.style.transition = 'transform 1s';
    rectangle.style.background = '#A0A0A0'
  } else {
    numberSliderAnimation = 1
  }

}, 2000)


let time = 3600;
let hours = 17;

const timer = setInterval(() => {
  let minutes = Math.floor(time / 60)
  let seconds = time % 60;
  let hoursTimer = hours
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hoursTimer = hoursTimer < 10 ? '0' + hoursTimer : hoursTimer;
  timerId.innerHTML = hoursTimer + ':' + minutes + ':' + seconds;
  if (minutes === '00' && seconds === '00') {
    if (hours === 0) {
      clearInterval(timer)
    }
    time = 3600
    hours--
  }
  time--
}, 1000)

navBtn.addEventListener('click', () => {
  if (number === 0) {
    number = 1;
    const heightNav = mainNav.firstElementChild.offsetHeight;
    logo.innerHTML = '<img id="logo" src="images/logo.svg" alt="">'
    phrase.style.paddingTop = '40px'
    header.style.background = 'none'
    navBtn.style.background = 'url(images/menu.svg) no-repeat'
    mainNav.style.height = heightNav + 'px';
  } else {
    number = 0;
    logo.innerHTML = '<img id="logo" src="images/logo-white.svg" alt="">'
    mainNav.style = {};
    header.style = {};
    navBtn.style = {};
    phrase.style = {};
  }
});

const popupBtnActive = () => {
  popupOverlay.style.position = 'fixed';
  popup.style.position = 'relative'
  popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  popup.style.transition = 'transform 1s'
  popup.style.transform = 'none'
}

const popupClosing = () => {
  popupOverlay.style = {};
  popup.style = {};
}

const shippingInformationClosing = () => {
  if(shippingInformationNumber === 0) {
    shippingInformationNumber = 1;
    vectorBtn.style.transition = 'transform 0.5s'
    vectorBtn.style.transform = 'none'
    const heightShippingInformation = shippingInformation.firstElementChild.offsetHeight;
    shippingInformation.style.height = heightShippingInformation + 'px';

  }else{
    shippingInformationNumber = 0;
    vectorBtn.style = {};
    shippingInformation.style = {};
  }

}

const footerHeight = () => {
  if(ReedLessNumber === 0){
    ReedLessNumber = 1;
    ReedLess.innerText = 'Read Less';
    const footerPHeight = footerP.firstElementChild.offsetHeight;
    footerP.style.height = footerPHeight + 'px';
  }else{
    ReedLessNumber = 0;
    ReedLess.innerText = 'Read More';
    footerP.style = {};
  }
}


