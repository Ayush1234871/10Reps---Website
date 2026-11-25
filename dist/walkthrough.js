// In-phone interface walkthroughs. These are animated concepts, not app recordings.
const demoTabs=['Home','Workout','Community','Profile'];
const demoIcons=['⌂','▦','◎','◉'];
const demoNav=document.querySelector('.device-nav');
demoNav.setAttribute('aria-label','App preview tabs');
demoNav.innerHTML=demoTabs.map((name,i)=>`<button type="button" data-demo-tab="${i}" aria-label="Preview ${name} tab">${demoIcons[i]}<small>${name}</small></button>`).join('');
const demoHeader=(eyebrow,title,avatar='A')=>`<div class="app-heading"><div><small>${eyebrow}</small><h3>${title}</h3></div><span class="app-avatar">${avatar}</span></div>`;
const demoCoach=(title,copy)=>`<div class="coach-brief"><span class="coach-icon">✦</span><div><b>${title}</b><p>${copy}</p></div></div>`;
const demoExercise=(name,note,icon='╪')=>`<div class="exercise-item"><span class="exercise-icon">${icon}</span><div><b>${name}</b><small>${note}</small></div><span>○</span></div>`;
const demoRow=(label,value)=>`<div class="app-row"><span>${label}</span><b>${value}</b></div>`;
const demoGallery='<div class="demo-snap"><span>SQUAD SNAPS</span><div class="demo-snap-photo"></div><b>Another session. A shared moment.</b><small>Illustrative community preview</small></div>';
const demoProfile=demoHeader('YOUR JOURNEY, IN ONE PLACE','A little stronger. A little more you.')+'<div class="demo-profile"><span class="profile-portrait">A</span><b>Your training profile</b><small>Goals, preferences and your own pace.</small></div>'+demoRow('Your focus','Build strength')+demoRow('Your setup','Connected gym')+SC[2].match(/<div class="momentum-card">.*?<\/div>/s)[0]+'<div class="demo-milestone"><span>MAKE EVERY EFFORT COUNT</span><b>More than a personal best.</b><p>Discover achievements, tokens and the milestones that tell your story.</p></div>'+demoRow('Your preferences','Made personal')+'<div class="app-action">Explore your journey</div>';
const demoCommunity=demoHeader('BETTER TOGETHER','Your people. Your momentum.','◎')+'<div class="gym-connected"><span class="connected-check">◎</span><div><b>My Squad</b><small>A little encouragement goes a long way.</small></div></div>'+demoGallery+'<div class="demo-feed"><span class="app-avatar">N</span><div><b>A session worth sharing.</b><p>Celebrate your crew’s everyday wins.</p><small>Cheer · Chat · Show up together</small></div></div><div class="demo-milestone"><span>10 TOGETHER</span><b>Find your shared challenge.</b><p>Bring a friend. Build momentum together.</p></div><div class="app-action">Meet your squad</div>';
const demoHome=SC[0]+demoRow('Later this week','Make room for recovery')+'<div class="demo-milestone"><span>YOUR NEXT SMALL WIN</span><b>Start with showing up.</b><p>One focused session can set the tone for your week.</p></div>'+demoCoach('Your squad is in your corner.','Share a moment after your workout.');
const demoWorkout=SC[1].replace('Begin your session','Your session is ready')+'<div class="session-title"><span>KEEP MOVING WITH CONFIDENCE</span><h3>Know your next move.</h3></div>'+demoExercise('Shoulder press','Equipment & exercise library','◒')+demoExercise('A suitable alternative','Adapt to the equipment around you','⌁')+demoCoach('RepStart AI','Understand the movement before you start.');
const demoExecution=demoHeader('WORKOUT · SESSION PREVIEW','One focused set at a time.','▦')+'<div class="demo-exercise-hero"><span>YOUR NEXT MOVEMENT</span><b>Dumbbell press</b><small>Control the movement. Find your range.</small></div>'+demoExercise('Get set','Choose a comfortable load')+demoCoach('RepStart guidance','Read the exercise cues, take your time and log the set when you finish.')+'<div class="demo-cues"><span>SET YOUR POSITION</span><p>Feet planted. A steady setup.</p><span>MOVE WITH INTENT</span><p>A controlled press. A comfortable range.</p><span>MAKE IT YOURS</span><p>Adjust the load to your ability today.</p></div><div class="app-action">Log your set</div>'+demoRow('Up next','Seated cable row');
const demoRecovery=SC[2]+demoCoach('A rest day is still part of the plan.','Move your session when life moves first.')+demoRow('Next session','Ready when you are');
const demoAnalytics=demoHeader('PROFILE · YOUR TRAINING STORY','Progress beyond the mirror.')+SC[2].match(/<div class="momentum-card">.*?<\/div>/s)[0]+demoRow('Workout history','Every session in context')+demoRow('Personal records','See what is changing')+'<div class="demo-milestone"><span>FIND YOUR RHYTHM</span><b>Progress has more than one shape.</b><p>Look at your training, recovery and effort together.</p></div>'+demoCoach('A useful view of your effort.','Understand patterns over time, at your own pace.')+'<div class="app-action">Explore your history</div>';
const demoContent=[demoHome,demoWorkout,demoCommunity,demoProfile];
const heroWorkout=demoHeader('WORKOUT','A session for your day.','▦')+'<div class="demo-milestone"><span>YOUR TRAINING, ORGANIZED</span><b>A clear place to start.</b><p>Find your plan, explore exercises and take your next session with you.</p></div>'+demoExercise('Your next workout','Matched to your goal')+demoRow('Your equipment','Built into the plan')+'<div class="app-action">Explore workouts</div>';
const heroCommunity=demoHeader('COMMUNITY','Keep your people close.','◎')+demoGallery+'<div class="demo-milestone"><span>BETTER TOGETHER</span><b>Your squad is in your corner.</b><p>Share a snap. Start a chat. Celebrate the everyday wins.</p></div>';
const heroProfile=demoHeader('PROFILE','Your training. Your story.')+'<div class="demo-profile"><span class="profile-portrait">A</span><b>A space that is yours.</b><small>Your goals, preferences and milestones.</small></div>'+demoRow('Your focus','Build strength')+demoRow('Your progress','See the bigger picture')+'<div class="app-action">Make it personal</div>';
const planningSetup=demoHeader('WORKOUT · BUILD YOUR SESSION','Your gym. Your plan.','⌖')+'<div class="gym-connected"><span class="connected-check">✓</span><div><b>Connect Your Gym</b><small>Plan with the equipment around you.</small></div></div><div class="demo-milestone"><span>WHAT YOU HAVE. WHAT YOU NEED.</span><b>A session that fits your setup.</b><p>Choose your focus and the equipment available. Give your effort a clear direction.</p></div>'+demoRow('Training focus','Upper body')+demoRow('Available equipment','Dumbbells · Cable station')+demoExercise('Dumbbell press','Matched to your setup')+demoExercise('Seated cable row','Ready for your next set','⌁')+'<div class="app-action">Your session is ready</div>';
const demoSequences=[
 [{tab:0,html:demoHome,duration:6500},{tab:1,html:heroWorkout,duration:5000},{tab:2,html:heroCommunity,duration:5500},{tab:3,html:heroProfile,duration:5000}],
 [{tab:1,html:planningSetup,duration:6500},{tab:1,html:demoExecution,duration:6500}],
 [{tab:0,html:demoRecovery,duration:6500},{tab:3,html:demoAnalytics,duration:6500}]
];
let demoChapter=0,demoPhase=0,demoElapsed=0,demoLast=performance.now(),demoViewport,demoTrack,demoOnScreen=true;
function renderDemo(step){
 const host=S[demoChapter];
 host.classList.add('walkthrough-screen');
 host.innerHTML=`<div class="demo-viewport"><div class="demo-track">${step.html}<div class="demo-endnote">10reps · Interface concept</div></div></div>`;
 demoViewport=host.querySelector('.demo-viewport');demoTrack=host.querySelector('.demo-track');
 demoNav.querySelectorAll('button').forEach((button,i)=>{button.classList.toggle('active',i===step.tab);button.setAttribute('aria-pressed',String(i===step.tab))});
 document.querySelector('.device-caption').innerHTML=`<span>${demoTabs[step.tab]}</span> · Animated interface preview`;
 host.dataset.previewTab=demoTabs[step.tab];
}
function startWalkthrough(chapter){
 demoChapter=chapter;demoPhase=0;demoElapsed=0;demoLast=performance.now();renderDemo(demoSequences[chapter][0]);
}
function syncWalkthroughChapter(){
 const readingLine=innerHeight*.5;
 const chapters=[...document.querySelectorAll('.ch')];
 const index=chapters.findIndex(chapter=>{const bounds=chapter.getBoundingClientRect();return bounds.top<=readingLine&&bounds.bottom>readingLine});
 if(index>=0){
  if(cur!==index)setS(index);
  else if(demoChapter!==index)startWalkthrough(index);
 }
}
let chapterUpdatePending=false;
function queueChapterUpdate(){if(chapterUpdatePending)return;chapterUpdatePending=true;requestAnimationFrame(()=>{chapterUpdatePending=false;syncWalkthroughChapter()})}
addEventListener('scroll',queueChapterUpdate,{passive:true});addEventListener('resize',queueChapterUpdate);
demoNav.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
 const tab=Number(button.dataset.demoTab);demoElapsed=0;demoLast=performance.now();
 // A manual selection previews that tab, then the section walkthrough resumes.
 renderDemo({tab,html:demoContent[tab]});
}));
new IntersectionObserver(entries=>entries.forEach(entry=>{demoOnScreen=entry.isIntersecting}),{threshold:.15}).observe(document.querySelector('#phone'));
document.addEventListener('visibilitychange',()=>{demoLast=performance.now()});
function tickWalkthrough(now){
 if(now-demoLast<40){requestAnimationFrame(tickWalkthrough);return}
 const delta=Math.min(now-demoLast,100);demoLast=now;
 if(!reducedMotion&&!document.hidden&&demoOnScreen&&!document.querySelector('#modal').classList.contains('open')&&!document.querySelector('#footer-info').open&&!demoNav.matches(':focus-within')){
  demoElapsed+=delta;let step=demoSequences[demoChapter][demoPhase];
  if(demoElapsed>=step.duration){demoElapsed=0;demoPhase=(demoPhase+1)%demoSequences[demoChapter].length;step=demoSequences[demoChapter][demoPhase];renderDemo(step)}
  if(demoViewport&&demoTrack){const travel=Math.max(0,demoTrack.scrollHeight-demoViewport.clientHeight);const progress=Math.min(1,Math.max(0,(demoElapsed-1000)/(step.duration-2200)));const smooth=progress*progress*(3-2*progress);demoTrack.style.transform=`translate3d(0,${-travel*smooth}px,0)`}
 }
 requestAnimationFrame(tickWalkthrough);
}
startWalkthrough(Math.max(0,cur));syncWalkthroughChapter();requestAnimationFrame(tickWalkthrough);
