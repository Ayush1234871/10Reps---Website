// Composed app scenes. No simulated screen recording, nested screens or auto-scroll.
const appPaths={home:'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z',workout:'M3 8v8m4-11v14m10-14v14m4-11v8M7 12h10',community:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',profile:'M20 21v-2a7 7 0 0 0-14 0v2M17 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',check:'m5 12 4 4L19 6',spark:'m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z',play:'m9 5 10 7-10 7Z',calendar:'M4 5h16v16H4ZM8 2v6m8-6v6M4 11h16',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',chevron:'m9 5 7 7-7 7',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-12 12h0m3 0h6',chart:'M3 3v18h18M6 15l4-5 4 2 6-7',trophy:'M8 3h8v7a4 4 0 0 1-8 0ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v6m-4 1h8',moon:'M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z'};
const appIcon=(name,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${appPaths[name]||appPaths.spark}"/></svg>`;
appPaths.gym='M3 8v8m4-11v14m10-14v14m4-11v8M7 12h10';
appPaths.location='M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z';
appPaths.history='M3 11a9 9 0 1 1 2.6 7.4M3 4v7h7m2-4v6l4 2';
const benefitIcons=['location','spark','check','calendar','chart','community'];
document.querySelectorAll('.pts em').forEach((e,i)=>{e.innerHTML=appIcon(benefitIcons[i],'site-icon');e.setAttribute('aria-hidden','true')});
document.querySelectorAll('.fc .ic').forEach((e,i)=>{e.innerHTML=appIcon(['location','spark','community','chart','moon','trophy'][i],'site-icon');e.setAttribute('aria-hidden','true')});
const phoneNotes=document.createElement('div');phoneNotes.className='phone-notes';phoneNotes.setAttribute('aria-label','Training benefits');document.querySelector('.stage').append(phoneNotes);
const chapterNotes=[
 [['CONSISTENCY','One more reason to show up'],['YOUR SQUAD','A new PR. A shared celebration.'],['WORKOUT GOAL','Today’s session completed']],
 [['YOUR GYM','Your equipment. Your session.'],['REPSTART AI','Clear guidance for your next set'],['WORKOUT GOAL','A plan you can put into action']],
 [['YOUR ROUTINE','A missed day isn’t a restart'],['YOUR SQUAD','Your effort has company'],['WORKOUT GOAL','Another session in your story']]
];
let noteChapter=-1;
function syncPhoneNotes(chapter){if(noteChapter===chapter)return;noteChapter=chapter;phoneNotes.innerHTML=chapterNotes[chapter].map(([label,text],i)=>`<div class="phone-note"><span class="phone-note-label">${label}</span><div class="phone-note-status"><i class="note-status-dot" aria-hidden="true"></i><b>${text}</b>${i===2?'<span class="note-equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>':''}</div></div>`).join('')}
const appTabs=['Home','Workout','Community','Profile'];
const appNav=document.querySelector('.device-nav');
appNav.innerHTML=appTabs.map((name,i)=>`<button type="button" data-app-tab="${i}" aria-label="Preview ${name} tab">${appIcon(['home','workout','community','profile'][i])}<small>${name}</small></button>`).join('');
appNav.setAttribute('aria-label','App preview navigation');
document.querySelector('.notch').remove();document.querySelectorAll('.device-button,.home-indicator').forEach(e=>e.remove());
const shell=document.createElement('img');shell.className='device-shell';shell.src='assets/iphone-pro-frame.svg';shell.alt='';shell.setAttribute('aria-hidden','true');document.querySelector('#phone').append(shell);
document.querySelector('.device-status').innerHTML='<span>9:41</span><span class="phone-system"><svg viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx=".6"/><rect x="5" y="5" width="3" height="7" rx=".6"/><rect x="10" y="2" width="3" height="10" rx=".6"/><rect x="15" width="3" height="12" rx=".6"/></svg><svg viewBox="0 0 18 13" aria-hidden="true"><path d="M1 4q8-7 16 0M4 7q5-4 10 0M7 10q2-1 4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="12" r="1"/></svg><svg viewBox="0 0 26 13" aria-hidden="true"><rect x="1" y="1" width="21" height="11" rx="3" fill="none" stroke="currentColor"/><rect x="3" y="3" width="17" height="7" rx="1.5"/><path d="M24 4v5" stroke="currentColor" stroke-width="2"/></svg></span>';
const appAvatar=(name='A',photo=false)=>`<span class="p-avatar${photo?' p-avatar-photo':''}">${photo?'':name}</span>`;
const appHeading=(small,title,right=appAvatar())=>`<div class="p-heading"><div><span class="p-overline">${small}</span><h3>${title}</h3></div>${right}</div>`;
const appWeek=`<div class="p-week">${['M','T','W','T','F','S','S'].map((day,i)=>`<div class="${i<2?'done':i===2?'today':''}"><span>${day}</span><b>${i<2?appIcon('check'):i===2?'<i></i>':'·'}</b></div>`).join('')}</div>`;
const pCoach=(title,copy)=>`<div class="p-coach">${appIcon('spark')}<div><b>${title}</b><p>${copy}</p></div><span class="p-coach-glint"></span></div>`;
const pExercise=(name,info,img=0,done=false)=>`<div class="p-exercise"><span class="p-exercise-photo photo-${img}"></span><div><b>${name}</b><small>${info}</small></div><span class="p-exercise-mark">${appIcon(done?'check':'chevron')}</span></div>`;
const pButton=(text,icon='play')=>`<div class="p-cta">${appIcon(icon)}<span>${text}</span></div>`;
const pSection=(title,more='')=>`<div class="p-section-label"><b>${title}</b><span>${more}</span></div>`;
const homeScene=()=>appHeading('LET’S MAKE IT COUNT','Good morning, Aman',appAvatar('A'))+
 '<div class="p-training-hero"><div class="p-training-photo"></div><div class="p-photo-shade"></div><span class="p-floating-tag">YOUR PLAN · READY FOR YOU</span><div class="p-training-copy"><span>STRENGTH · UPPER BODY</span><h4>Today is<br>your day.</h4><div class="p-hero-meta"><span>45 min</span><i></i><span>Gym session</span></div></div><div class="p-play-orb">'+appIcon('play')+'</div></div>'+
 pCoach('Your next move, made clearer.','Open your plan. Take it one set at a time.')+
 '<div class="p-week-block">'+pSection('A little momentum.','Your week')+appWeek+'</div>'+
 '<div class="p-home-bottom"><div class="p-mini-card">'+appIcon('chart')+'<span>YOUR JOURNEY</span><b>See your progress</b></div><div class="p-mini-card">'+appIcon('community')+'<span>YOUR PEOPLE</span><b>Check in with your squad</b></div></div>';
const workoutScene=()=>appHeading('YOUR WORKOUT','A plan with purpose.',`<span class="p-round-icon">${appIcon('calendar')}</span>`)+
 '<div class="p-plan-banner"><div class="p-plan-thumb"></div><div><span class="p-overline">TODAY’S FOCUS</span><h4>Upper body<br>strength</h4><small>45 min · Dumbbells & cables</small></div><span class="p-plan-check">'+appIcon('check')+'</span></div>'+
 '<div class="p-connected">'+appIcon('check')+'<span>Your gym is connected</span><b>Equipment matched</b></div>'+
 pSection('Your session','Preview')+'<div class="p-exercise-list">'+pExercise('Dumbbell press','3 sets · 10 reps',0)+pExercise('Seated cable row','3 sets · 12 reps',1)+pExercise('Shoulder press','3 sets · 10 reps',2)+'</div>'+
 pCoach('Equipment taken?','Find an alternative that fits your setup.')+pButton('Start your session');
const communityScene=()=>appHeading('COMMUNITY','Better, together.',`<span class="p-round-icon">${appIcon('bell')}</span>`)+
 '<div class="p-squad-strip"><div class="p-squad-avatars">'+appAvatar('N')+appAvatar('R')+appAvatar('A')+'<span>+</span></div><div><b>My Squad</b><small>Your people. Your corner.</small></div>'+appIcon('chevron')+'</div>'+
 '<div class="p-snap-card"><div class="p-snap-header">'+appAvatar('R')+'<div><b>Riya’s training moment</b><small>Squad Snaps · Preview</small></div><span>•••</span></div><div class="p-snap-image"><div class="p-snap-caption"><span>ONE SESSION AT A TIME.</span><b>Showing up<br>looks good on you.</b></div><span class="p-snap-stamp">10reps</span></div><div class="p-snap-actions">'+appIcon('heart')+'<span>A little encouragement goes a long way.</span><b>Cheer</b></div></div>'+
 '<div class="p-challenge">'+appIcon('community')+'<div><span>10 TOGETHER</span><b>A shared goal. A reason to return.</b></div>'+appIcon('chevron')+'</div>';
const profileScene=()=>appHeading('PROFILE','Your effort, in focus.',`<span class="p-round-icon">${appIcon('profile')}</span>`)+
 '<div class="p-profile-top">'+appAvatar('A')+'<div><h4>Aman</h4><p>Building strength. Finding a rhythm.</p><span class="p-member-tag">10REPS FOUNDING CREW</span></div></div>'+
 '<div class="p-progress-panel"><div>'+pSection('Your training story','Sample view')+'<div class="p-chart-title"><b>Stronger, at your pace.</b><span>WORKOUT HISTORY</span></div><svg class="p-line-chart" viewBox="0 0 260 90"><defs><linearGradient id="chart-fill" x2="0" y2="1"><stop stop-color="#b7f87c" stop-opacity=".3"/><stop offset="1" stop-color="#b7f87c" stop-opacity="0"/></linearGradient></defs><path class="p-chart-area" d="M4 73 38 58 73 64 109 39 146 46 182 28 218 34 256 9V90H4Z" fill="url(#chart-fill)"/><path class="p-chart-line" d="M4 73 38 58 73 64 109 39 146 46 182 28 218 34 256 9" fill="none" stroke="#b7f87c" stroke-width="3" stroke-linecap="round"/><circle class="p-chart-dot" cx="256" cy="9" r="4" fill="#d6ffac"/></svg><div class="p-chart-labels"><span>Your first session</span><span>Your next chapter</span></div></div></div>'+
 '<div class="p-achievement"><span class="p-achievement-icon">'+appIcon('trophy')+'</span><div><span>MAKE EVERY EFFORT COUNT</span><b>Milestones worth celebrating.</b><small>Achievements · Tokens · Personal records</small></div></div>'+
 '<div class="p-profile-links"><div>'+appIcon('workout')+'<b>Training preferences</b>'+appIcon('chevron')+'</div><div>'+appIcon('chart')+'<b>Your workout history</b>'+appIcon('chevron')+'</div></div>';
const setupScene=()=>appHeading('BUILT AROUND YOUR SETUP','Your gym. Your plan.',`<span class="p-round-icon">${appIcon('workout')}</span>`)+
 '<div class="p-setup-visual"><div class="p-setup-photo"></div><div class="p-photo-shade"></div><span class="p-floating-tag">CONNECT YOUR GYM</span><div><span>TRAIN WITH WHAT’S AROUND YOU.</span><h4>Less guesswork.<br>More good sets.</h4></div></div>'+
 '<div class="p-equipment"><span class="p-overline">YOUR AVAILABLE EQUIPMENT</span><div><span class="selected">'+appIcon('check')+'Dumbbells</span><span class="selected">'+appIcon('check')+'Cable station</span><span>Machines</span></div></div>'+
 pSection('A session that fits','Equipment aware')+pExercise('Dumbbell press','Matched to your setup',0)+pExercise('Seated cable row','A clear next movement',1)+pButton('Build my session','spark');
const executionScene=()=>appHeading('WORKOUT IN FOCUS','Move with intention.',`<span class="p-round-icon">${appIcon('workout')}</span>`)+
 '<div class="p-execution"><video autoplay muted loop playsinline preload="metadata" poster="assets/wall-editorial-v3.png"><source src="assets/workout-preview.mp4" type="video/mp4"></video><div class="p-photo-shade"></div><span class="p-floating-tag">MOVEMENT PREVIEW</span><div class="p-execution-caption"><span>STRENGTH · GYM SESSION</span><h4>Own the<br>next rep.</h4></div><span class="p-video-pulse">'+appIcon('play')+'</span></div>'+
 '<div class="p-set-row"><div><span>YOUR SESSION</span><b>Strength session preview</b></div><span class="p-set-tag">IN FOCUS</span></div>'+
 '<div class="p-cue-list"><div>'+appIcon('check')+'<span>Set your position.</span></div><div>'+appIcon('check')+'<span>Move with control.</span></div><div>'+appIcon('check')+'<span>Choose your own pace.</span></div></div>'+
 pCoach('RepStart AI, close at hand.','Exercise cues. Useful alternatives. Clear direction.')+pButton('Ready for your next set');
const recoveryScene=()=>appHeading('A ROUTINE FOR REAL LIFE','Room to recover.',`<span class="p-round-icon">${appIcon('moon')}</span>`)+
 '<div class="p-recovery-hero"><div class="p-recovery-orbit"></div><span class="p-moon">'+appIcon('moon')+'</span><span>RECOVERY IS PART OF THE PLAN</span><h4>Rest today.<br>Pick up from here.</h4></div>'+
 '<div class="p-week-block">'+pSection('Your week, your way.','Flexible by design')+appWeek+'</div>'+
 '<div class="p-recovery-options"><div>'+appIcon('calendar')+'<span><b>Move your session</b><small>Keep the direction. Adjust the day.</small></span>'+appIcon('chevron')+'</div><div>'+appIcon('heart')+'<span><b>Make space for mobility</b><small>A little movement, at your pace.</small></span>'+appIcon('chevron')+'</div></div>'+pCoach('A missed day isn’t a lost journey.','Your next session is a fresh place to begin.');
const scenes={home:{tab:0,build:homeScene,label:'Your day, ready to go'},workout:{tab:1,build:workoutScene,label:'A clear plan for your effort'},community:{tab:2,build:communityScene,label:'Your people, in your corner'},profile:{tab:3,build:profileScene,label:'See your effort take shape'},setup:{tab:1,build:setupScene,label:'Built for your gym, your equipment'},execution:{tab:1,build:executionScene,label:'Direction for your next set'},recovery:{tab:0,build:recoveryScene,label:'A routine with room for life'}};
const appSequences=[['home','workout','community','profile'],['setup','execution'],['profile','recovery']];
let activeAppChapter=0,activeAppPhase=0,appElapsed=0,appVisible=true,lastAppTick=performance.now();
function showAppScene(key){
 syncPhoneNotes(activeAppChapter);
 document.querySelectorAll('#screen video').forEach(video=>video.pause());
 const scene=scenes[key],host=S[activeAppChapter];
 host.classList.add('product-screen');host.innerHTML=`<div class="product-app"><div class="app-scene scene-${key}">${scene.build()}</div></div>`;
 host.dataset.previewTab=appTabs[scene.tab];host.dataset.scene=key;
 appNav.querySelectorAll('button').forEach((button,i)=>{button.classList.toggle('active',i===scene.tab);button.setAttribute('aria-pressed',String(i===scene.tab))});
 document.querySelector('.device-caption').innerHTML=`<span>${scene.label}</span><small>Illustrative app preview</small>`;
 host.querySelectorAll('video').forEach(video=>{video.muted=true;if(!reducedMotion)video.play().catch(()=>{})});
 if(reducedMotion)host.querySelectorAll('video').forEach(video=>video.pause());
}
function startWalkthrough(chapter){activeAppChapter=chapter;activeAppPhase=0;appElapsed=0;lastAppTick=performance.now();showAppScene(appSequences[chapter][0])}
function alignAppToChapter(){
 const line=innerHeight*.5,index=[...document.querySelectorAll('.ch')].findIndex(e=>{const r=e.getBoundingClientRect();return r.top<=line&&r.bottom>line});
 if(index>=0){if(cur!==index)setS(index);else if(activeAppChapter!==index)startWalkthrough(index)}
}
let alignmentQueued=false;function queueAppAlignment(){if(alignmentQueued)return;alignmentQueued=true;requestAnimationFrame(()=>{alignmentQueued=false;alignAppToChapter()})}
addEventListener('scroll',queueAppAlignment,{passive:true});addEventListener('resize',queueAppAlignment);
appNav.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{appElapsed=0;showAppScene(['home','workout','community','profile'][Number(button.dataset.appTab)])}));
new IntersectionObserver(entries=>entries.forEach(e=>{appVisible=e.isIntersecting}),{threshold:.2}).observe(document.querySelector('#phone'));
document.addEventListener('visibilitychange',()=>{lastAppTick=performance.now()});
setInterval(()=>{const now=performance.now(),delta=Math.min(now-lastAppTick,500);lastAppTick=now;if(reducedMotion||document.hidden||!appVisible||document.querySelector('#modal').classList.contains('open')||document.querySelector('#footer-info').open||appNav.matches(':focus-within'))return;appElapsed+=delta;if(appElapsed>=6500){appElapsed=0;activeAppPhase=(activeAppPhase+1)%appSequences[activeAppChapter].length;showAppScene(appSequences[activeAppChapter][activeAppPhase])}},150);
startWalkthrough(Math.max(0,cur));alignAppToChapter();
