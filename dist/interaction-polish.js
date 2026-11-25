// Animate the details element itself so the sections below move with its height.
document.querySelectorAll('.faq details').forEach(details=>{
 const summary=details.querySelector('summary');
 let animation=null,expanded=details.open;
 summary.addEventListener('click',event=>{
  event.preventDefault();expanded=!expanded;
  const start=details.getBoundingClientRect().height;
  if(animation){animation.cancel();animation=null}
  details.dataset.expanded=String(expanded);
  if(reducedMotion){details.open=expanded;details.style.height='';details.style.overflow='';return}
  details.style.height='';details.open=true;
  const style=getComputedStyle(details);
  const closed=summary.getBoundingClientRect().height+parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)+parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
  const end=expanded?details.getBoundingClientRect().height:closed;
  details.style.height=start+'px';details.style.overflow='hidden';
  const current=details.animate([{height:start+'px'},{height:end+'px'}],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
  animation=current;
  current.onfinish=()=>{if(animation!==current)return;details.open=expanded;details.style.height='';details.style.overflow='';animation=null};
 });
});
