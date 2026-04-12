let nav=document.querySelector('.nav');
let x=document.querySelectorAll('.mid a')[0];
let arrow=document.querySelector('.arrow');
let video=document.querySelector('#myVideo');
let image=document.querySelector('.vid img');
let but=document.querySelector('.max button');
let mes=document.querySelector('.mes');
let img1=document.querySelector('.mes img');
let cri=document.querySelector('.cri');
let img2=document.querySelector('.cri img');
let ney=document.querySelector('.ney');
let img3=document.querySelector('.ney img');
let rob=document.querySelector('.rob');
let img4=document.querySelector('.rob img');
x.addEventListener('mousemove', function(){
    nav.style.opacity='1';
});
x.addEventListener('mouseleave', function(){
    setTimeout(() => {
        if (!nav.matches(':hover')) {
            nav.style.opacity = '0';
        }
    }, 50);
});
nav.addEventListener('mouseleave', function(){
    nav.style.opacity = '0';
});
arrow.addEventListener('click', function(){
    video.style.opacity='1';
    video.play();
    arrow.style.opacity='0';
});
video.addEventListener('ended', () => {
  video.style.opacity = '0';  
  video.currentTime = 0;        
  arrow.style.opacity = '1';     
});
const vid = document.querySelector('.vid');

vid.addEventListener('mousemove', (e) => {
  const rect = vid.getBoundingClientRect();

  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

  const scaleX = 1 + Math.abs(x) * 0.05;
  const scaleY = 1 + Math.abs(y) * 0.05;
  const translateX = x * 8;
  const translateY = y * 8;

  vid.style.transition = 'none';
  vid.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
});

vid.addEventListener('mouseleave', () => {
  vid.style.transition = 'transform 0.5s ease';
  vid.style.transform = 'translate(0, 0) scale(1, 1)';
});
// Torsion spin effect on button
const text = but.textContent;
but.innerHTML = '';
let charEls = [], progress = 0, isHovered = false, animFrame;
text.split('').forEach(char => {
  const span = document.createElement('span');
  span.style.display = 'inline-block';
  span.style.transformOrigin = 'center center';
  span.textContent = char === ' ' ? '\u00A0' : char;
  but.appendChild(span);
  charEls.push(span);
});
function loop() {
  progress += 3;
  charEls.forEach((el, i) => {
    const angle = (progress - i * 12) % 360;
    el.style.transform = `rotateX(${angle}deg)`;
    const visibility = Math.cos((angle * Math.PI) / 180);
    el.style.opacity = visibility < 0 ? 0 : visibility;
  });
  animFrame = requestAnimationFrame(loop); // save the frame
}
but.addEventListener('mouseenter', () => {
  isHovered = true;
  progress = 0;
  charEls.forEach(el => el.style.transition = 'none');
  loop();
});
but.addEventListener('mouseleave', () => {
  isHovered = false;
  cancelAnimationFrame(animFrame);
  charEls.forEach(el => {
    el.style.transition = 'transform 0.5s ease, opacity 0.3s ease';
    el.style.transform = 'rotateX(0deg)';
    el.style.opacity = 1;
  });
});

mes.addEventListener('mousemove', function(dets){
    img1.style.opacity='1';
   img1.style.transform = `translateX(${dets.offsetX}px)`;
});
mes.addEventListener('mouseleave',function(){
  img1.style.opacity='0';
  img1.style.transform = `translateX(0px)`;
});
cri.addEventListener('mousemove', function(messi){
    img2.style.opacity='1';
   img2.style.transform = `translateX(${messi.offsetX}px)`;
});
cri.addEventListener('mouseleave',function(){
  img2.style.opacity='0';
  img2.style.transform = `translateX(0px)`;
});
ney.addEventListener('mousemove', function(cris){
    img3.style.opacity='1';
   img3.style.transform = `translateX(${cris.offsetX}px)`;
});
ney.addEventListener('mouseleave',function(){
  img3.style.opacity='0';
  img3.style.transform = `translateX(0px)`;
});
rob.addEventListener('mousemove', function(robb){
    img4.style.opacity='1';
   img4.style.transform = `translateX(${robb.offsetX}px)`;
});
rob.addEventListener('mouseleave',function(){
  img4.style.opacity='0';
  img4.style.transform = `translateX(0px)`;
});