const btn_start=document.getElementById('btn');
const containers=document.querySelectorAll('.container');
const insects=document.querySelectorAll('.insect');
const gamePlay=document.querySelector('.gamePlay');
const timeEl=document.getElementById('time');
seconds=0;

btn_start.addEventListener('click',()=>{
      containers[0].classList.add('up');
})

insects.forEach(insect=>{
  insect.addEventListener('click',()=>{
    containers[1].classList.add('up');
    let img=insect.querySelector('img');
    let alt=img.getAttribute('alt');
    let src=img.getAttribute('src');
    insect_info={src,alt};
    setTimeout(creatInsect,1000);
    startGame();
  })
})

function increaseTime() {
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	timeEl.innerHTML = `Time: ${m}:${s}`;

	seconds++;
}
function startGame(){
  setInterval(increaseTime,1000);
}
function creatInsect(){
    let insectImg=document.createElement('div');
    insectImg.classList.add('insectPic');
     insectImg.innerHTML=`<img
     src="${insect_info.src}"
     alt="img"
     />`;
    gamePlay.appendChild(insectImg);
    console.log(insectImg);
}