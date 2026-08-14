const b=document.querySelector('.menu-btn'),n=document.querySelector('nav');b.onclick=()=>n.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>n.classList.remove('open'));function demoSubmit(e){e.preventDefault();document.getElementById('status').textContent='Danke! Diese Website ist derzeit ein Entwurf. Für eine echte Anfrage nutzen Sie bitte Telefon oder E-Mail.';return false;}
const modal=document.getElementById('gallery-modal'),modalTitle=document.getElementById('modal-title'),modalArt=document.getElementById('modal-art');
document.querySelectorAll('.gallery-card').forEach((card,i)=>card.addEventListener('click',()=>{
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');modalTitle.textContent=card.dataset.title;
  const arts=[
    'linear-gradient(135deg,#d7f0f2 0 36%,#88cbd2 36% 42%,#edfafa 42% 67%,#6aa8b6 67%)',
    'radial-gradient(circle at 30% 30%,#e6faf5 0 10%,transparent 11%),linear-gradient(145deg,#83d0c5 0 30%,#f7fbfa 30% 55%,#69b2a8 55% 72%,#d9eeeb 72%)',
    'repeating-linear-gradient(35deg,#7a9ca4 0 12px,#c8dadd 12px 24px,#6d8f97 24px 36px)',
    'linear-gradient(90deg,#d9ecef 0 23%,#6ea7b4 23% 26%,#eef7f8 26% 49%,#6ea7b4 49% 52%,#d8eaed 52% 75%,#6ea7b4 75% 78%,#f4f9f9 78%)'
  ]; modalArt.style.background=arts[i];
}));
document.querySelector('.modal-close').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

// Lightweight scroll motion
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionTargets=document.querySelectorAll('.reveal,.stagger');
if(reduceMotion){motionTargets.forEach(el=>el.classList.add('is-visible'))}else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.14,rootMargin:'0px 0px -40px 0px'});motionTargets.forEach(el=>io.observe(el));}
const counter=document.querySelector('.count-up');if(counter){const target=Number(counter.dataset.target||100);const runCounter=()=>{if(reduceMotion){counter.textContent=target+'%';return}const start=performance.now(),duration=1200;const tick=t=>{const p=Math.min((t-start)/duration,1),e=1-Math.pow(1-p,3);counter.textContent=Math.round(target*e)+'%';if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};const cio=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){runCounter();cio.disconnect()}}),{threshold:.5});cio.observe(counter);}
