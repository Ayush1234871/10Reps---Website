// Accessible controls and honest prototype interactions.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const skip=document.createElement('a');skip.href='#features';skip.className='skip-link';skip.textContent='Skip to features';document.body.prepend(skip);
if(reducedMotion)clearInterval(at);
let returnFocus;
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{returnFocus=b;document.body.style.overflow='hidden';setTimeout(()=>document.querySelector('#f1').focus(),0)}));
const closeModal=()=>{document.querySelector('#modal').classList.remove('open');document.body.style.overflow='';returnFocus?.focus()};
document.querySelector('#cx').onclick=closeModal;document.querySelector('#dd').onclick=closeModal;
document.querySelector('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(!document.querySelector('#modal').classList.contains('open'))return;if(e.key==='Escape')closeModal();if(e.key==='Tab'){const elements=[...document.querySelectorAll('#modal button,#modal input,#modal select')].filter(e=>e.offsetParent!==null);const first=elements[0],last=elements.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
document.querySelectorAll('.modal input').forEach(e=>e.setAttribute('aria-label',e.placeholder));
document.querySelector('.modal select').setAttribute('aria-label','Country calling code');
document.querySelector('#sub').onclick=()=>{const name=document.querySelector('#f1'),email=document.querySelector('#f2');if(!name.value.trim()){name.focus();return}if(!email.checkValidity()||!email.value){email.reportValidity();email.focus();return}document.querySelector('#fm').style.display='none';document.querySelector('#dn').style.display='block';document.querySelector('#dd').focus()};

const footerInfo={privacy:{title:'Your privacy',copy:'This website is a product prototype. The early-access form does not send or save your details. The full privacy policy, including information about account data and your choices, will be published before live signups open.'},terms:{title:'Terms of use',copy:'You are exploring a pre-launch website concept. The training screens and AI interactions are demonstrations. Product availability, pricing and the full terms will be confirmed before registration opens.'},contact:{title:'Let’s stay connected',copy:'Our support channels will be published when early access opens. For now, explore the FAQs for answers about the 10reps concept and the early-access experience.'}};
const infoDialog=document.querySelector('#footer-info');
document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>{const info=footerInfo[b.dataset.info];document.querySelector('#info-title').textContent=info.title;document.querySelector('#info-copy').textContent=info.copy;infoDialog.showModal()}));
infoDialog.querySelectorAll('button').forEach(b=>b.onclick=()=>infoDialog.close());
infoDialog.addEventListener('click',e=>{if(e.target===infoDialog){const r=infoDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)infoDialog.close()}});

document.querySelectorAll('[data-store]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#info-title').textContent='Your next rep is on its way.';document.querySelector('#info-copy').textContent='The 10reps app is not available in stores yet. Explore early access to preview the invitation experience.';infoDialog.showModal()}));
const wallObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('assembled');wallObserver.unobserve(entry.target)}}),{threshold:.18});wallObserver.observe(document.querySelector('.wall-grid'));
document.querySelectorAll('.app-action').forEach(e=>{e.setAttribute('aria-hidden','true')});
document.querySelectorAll('.scr').forEach((e,i)=>e.setAttribute('aria-hidden',i!==0));
new MutationObserver(()=>document.querySelectorAll('.scr').forEach(e=>e.setAttribute('aria-hidden',!e.classList.contains('on')))).observe(document.querySelector('#screen'),{subtree:true,attributes:true,attributeFilter:['class']});
if(reducedMotion){document.querySelector('.wall-grid').classList.add('assembled');clearInterval(at)}
