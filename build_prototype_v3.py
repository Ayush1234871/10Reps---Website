from pathlib import Path
import re
r=Path(__file__).parent
old=(r/'dist/index.html').read_text(encoding='utf-8-sig')
s=Path('C:/Users/USER/Downloads/10reps.ai — Early access.html').read_text(encoding='utf-8')
s=s.replace('</style></head>','</style><link rel="stylesheet" href="prototype.css"></head>')
s=s.replace('<title>10reps.ai — Invite-only early access</title>','<title>10reps — Your effort. A little more direction.</title><meta name="description" content="Discover personalised training, RepStart AI, your squad, and a routine built around real life. Explore the 10reps founding membership.">')
s=s.replace('<nav><a href="#features">Features</a>','<nav aria-label="Main navigation"><a href="#features">Features</a><a href="#gallery">The wall</a>')
apple='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.5 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3-1.7-1.3-.2-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1 1.6 2.2 2.7 2.2 1.1-.1 1.5-.7 2.8-.7s1.7.7 2.9.7c1.2 0 2-1 2.7-2.1.8-1.2 1.2-2.4 1.2-2.4-.1 0-2.4-.9-2.4-3.9ZM15.4 6.4c.6-.8 1.1-1.8 1-2.9-1 .1-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.7-1.3Z"/></svg>'
play='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#78d6ba" d="M4 3v18l9-9Z"/><path fill="#a4d8fb" d="m4 3 12 7-3 2Z"/><path fill="#ffd768" d="m16 10 4 2-4 2-3-2Z"/><path fill="#f68a9b" d="m4 21 12-7-3-2Z"/></svg>'
stores=f'<div class="store-buttons"><button class="store-badge" data-store>{apple}<span><small>Coming soon to the</small>App Store</span></button><button class="store-badge" data-store>{play}<span><small>Coming soon to</small>Google Play</span></button></div>'
start=s.index('<div class="ch" data-s="0">');end=s.index('\n</div>\n<div class="stage">',start)
s=s[:start]+'''<div class="ch hero-ch" data-s="0"><h1><b class="w" style="--i:0">One more rep.</b><div><b class="w g" style="--i:2">Built around you.</b></div></h1><p class="hi">You bring the effort. We bring the direction.<br>Personalised training, RepStart AI and a squad that makes the next session easier to show up for.</p><div class="cta hi"><button class="btn" data-open>Get early access</button></div>'''+stores+'''<p class="access-note hi">A smaller founding crew. A more personal beginning.</p><div class="hint hi"><i></i> Your training, brought into focus.</div></div>
<div class="ch" data-s="1"><div class="idx">A PLAN, BEFORE YOU WALK IN</div><h2>Never wonder<br>what to train <span class="accent">next.</span></h2><p>Skip the saved-workout spiral. Turn your goal, your equipment and the time you have into a session with a clear starting point.</p><ul class="pts"><li style="--i:1"><em>⌖</em><div><b>Your gym. Your setup.</b><span>Connect Your Gym and plan around the equipment available to you.</span></div></li><li style="--i:2"><em>✦</em><div><b>Guidance when it matters.</b><span>RepStart AI helps you understand the next step, with an exercise library close at hand.</span></div></li><li style="--i:3"><em>✓</em><div><b>Less deciding. More doing.</b><span>A focused session you can follow, log and make your own.</span></div></li></ul></div>
<div class="ch" data-s="2"><div class="idx">PROGRESS THAT FITS REAL LIFE</div><h2>Build a routine.<br><span class="accent">Not another restart.</span></h2><p>Busy weeks happen. So do rest days. Make room for both without losing sight of how far you have come.</p><ul class="pts"><li style="--i:1"><em>↺</em><div><b>Adjust the day. Keep the direction.</b><span>Flexible training and recovery, with space to come back at your pace.</span></div></li><li style="--i:2"><em>⌁</em><div><b>See progress beyond the mirror.</b><span>Workout history, personal records and useful patterns in your training.</span></div></li><li style="--i:3"><em>◎</em><div><b>Keep your people close.</b><span>Share a Squad Snap, celebrate a milestone and find your next reason to train.</span></div></li></ul></div>'''+s[end:]
start=s.index('<div class="stage">');end=s.index('\n</div>\n\n\n<section',start)
s=s[:start]+'''<div class="stage"><div class="halo"></div><div class="orb"></div><div class="device-tag"><i></i> YOUR TRAINING, CONNECTED</div><div class="phone" id="phone"><div class="device-button volume"></div><div class="device-button power"></div><div class="notch"></div><div class="screen" id="screen"><div class="device-status"><span>9:41</span><span>▮▮▮ &nbsp; ▰</span></div><div class="device-nav"><span class="active">⌂<small>Today</small></span><span>▦<small>Train</small></span><span>✦<small>RepStart</small></span><span>◎<small>Squad</small></span></div></div><div class="home-indicator"></div></div><div class="device-caption"><span>10reps</span> · A preview of your everyday advantage</div></div>'''+s[end:]
s=s.replace('Drag, click or just watch the ring turn.','One connected experience. Built for the way you train.')
s=s.replace('<div class="ctl"><button id="pv" aria-label="Previous">←</button><button id="nx" aria-label="Next">→</button></div>','')
start=s.index('<section class="wall">');end=s.index('</section>',start)+len('</section>')
wall='''<section class="gallery-wall" id="gallery"><div class="wall-grid"><div class="wall-copy"><div class="idx">THE 10REPS WALL</div><h2>Different journeys.<br>Shared momentum.<br><span>Your kind of people.</span></h2><p>A glimpse of the culture we’re building.<br>Show up. Share a moment. Bring your squad.</p></div>'''
for i,alt in enumerate(['Athlete after a training session','Athlete performing a landmine press','Athlete doing a dumbbell row','Athlete jumping onto a training box','Athlete walking through the gym'],1):
    wall+=f'<figure class="wall-photo wall-photo-{i}" style="--delay:{i*70}ms" role="img" aria-label="{alt}"></figure>'
wall+='</div><p class="wall-disclosure">A vision of the 10reps community · AI-generated imagery</p></section>'
s=s[:start]+wall+s[end:]
s=s.replace('Founding spots are almost gone. Request yours before the door closes.','We’re starting with a smaller founding crew, so we can build the experience with the people who use it.')
s=s.replace('<div class="spots" id="spots"><div class="pb"><i></i></div><small>Founding spots claimed: 73%</small></div>','<div class="spots" id="spots"><small>Early access. Shared ambition. A voice in what comes next.</small></div>')
s=s.replace('Not for<br>everyone.','Not for everyone.<br>By design.')
s=s.replace('Unless you have an invite.','A more personal way in.')
s=s.replace('<div class="pn">Founding crew · Invite-only access</div><div class="pm"><span>ADMIT ONE</span><span>No. 0001</span></div>','<div class="pass-label">FOUNDING MEMBERSHIP</div><div class="pass-title">Your next chapter.<br>Our first crew.</div><div class="pn">For the ones ready to make it their own.</div><div class="pm"><span>INVITATION ONLY</span><span>10REPS ORIGINALS</span></div>')
s=s.replace('Click the lock or scroll to see if you\'re in','Scroll to reveal. Or select the lock.')
s=s.replace('<h2 class="rv">Questions</h2>','<div class="faq-heading"><div class="idx">BEFORE YOUR FIRST REP</div><h2>Good questions.<br> Clear answers.</h2></div><div class="faq-items">')
s=s.replace('</details></div>\n\n<section class="final">','</details></div></div>\n\n<section class="final">')
s=s.replace('<section class="final">','<section class="final" id="next-rep">')
s=s.replace('<button class="btn" data-open>Get Early Access ✦</button></section>','<p>Bring your ambition. We’ll help you find your rhythm.</p><button class="btn" data-open>Request your invitation</button>'+stores+'</section>')
footer=re.search(r'<footer class="site-footer">.*?</dialog>',old,re.S).group()
footer=footer.replace('href="#types"','href="#top"').replace('href="#toolkit"','href="#features"').replace('href="#more"','href="#top"').replace('href="#how"','href="#top"').replace('>How it works<','>The experience<').replace('href="#consistency"','href="#gallery"').replace('>Build consistency<','>Community<').replace('>The everyday athlete<','>The 10reps Wall<').replace('>For everyone<','>Founding membership<')
s=re.sub(r'<footer>.*?</footer>',lambda _:footer,s,flags=re.S)
s=s.replace('Tell us a little about yourself and request your invite.','Explore the invitation flow. This prototype does not submit or save your details.')
s=s.replace("You're on the list! 🔥",'Your preview is complete.').replace("We'll reach out when your 10reps.ai invite is ready.",'This is a product concept. No details were submitted. Live invitations will be connected before launch.')
s=s.replace('Get Early Access ✦','Get early access').replace('Request my invite ✦','Request my invitation')
# Replace phone display templates with three purpose-built screens.
start=s.index('const rbx=');end=s.index('const scr=',start)
screens=[
'''<div class="app-heading"><div><small>YOUR SPACE TO GET STRONGER</small><h3>Let’s make it count.</h3></div><span class="app-avatar">A</span></div><div class="app-workout"><div class="app-workout-photo"></div><div class="workout-overlay"><span class="app-pill">TODAY’S FOCUS</span><h3>Upper body.<br>Full intention.</h3><small>Strength · Your connected gym</small></div></div><div class="coach-brief"><span class="coach-icon">✦</span><div><b>RepStart briefing</b><p>Your session is ready. Start with a warm-up, then take it one set at a time.</p></div></div><div class="app-row"><span>Your plan</span><b>Made for your setup</b></div><div class="app-action">Open today’s session</div>''',
'''<div class="app-heading"><div><small>TRAIN WITH DIRECTION</small><h3>Your session, sorted.</h3></div><span class="app-avatar">⌖</span></div><div class="gym-connected"><span class="connected-check">✓</span><div><b>Your gym is connected</b><small>Equipment-aware planning</small></div></div><div class="session-title"><span>UPPER BODY · STRENGTH</span><h3>A clear plan.<br>Room to make it yours.</h3></div><div class="exercise-item"><span class="exercise-icon">╪</span><div><b>Dumbbell press</b><small>Controlled movement · Full range</small></div><span>✓</span></div><div class="exercise-item"><span class="exercise-icon">⌁</span><div><b>Seated cable row</b><small>Steady tempo · Strong finish</small></div><span>✓</span></div><div class="exercise-item"><span class="exercise-icon">◒</span><div><b>Shoulder press</b><small>Choose a comfortable load</small></div><span>○</span></div><div class="coach-brief"><span class="coach-icon">✦</span><div><b>Equipment taken?</b><p>Find a suitable alternative in your exercise library.</p></div></div><div class="app-action">Begin your session</div>''',
'''<div class="app-heading"><div><small>A ROUTINE WITH ROOM FOR LIFE</small><h3>Keep your momentum.</h3></div><span class="app-avatar">◎</span></div><div class="routine-card"><span>YOUR WEEK, YOUR WAY</span><div class="week-strip"><i>M<b>✓</b></i><i>T<b>☾</b></i><i>W<b>✓</b></i><i class="today">T<b>◎</b></i><i>F<b>·</b></i><i>S<b>·</b></i><i>S<b>·</b></i></div><div class="routine-note">Training and recovery belong together.</div></div><div class="app-row"><span>Today’s plan</span><b>Recovery & mobility</b></div><div class="momentum-card"><span>PROGRESS BEYOND THE MIRROR</span><svg viewBox="0 0 240 64"><path d="M2 54 40 45 75 49 112 27 148 33 185 17 238 4" fill="none" stroke="#a6ff3f" stroke-width="3" stroke-linecap="round"/></svg><b>Find the patterns in your effort.</b><small>Workout history · Records · Analytics</small></div><div class="squad-note"><div class="mini-avatars"><i>N</i><i>R</i><i>A</i></div><div><b>Your squad is in your corner.</b><small>Share a moment. Keep each other going.</small></div></div><div class="app-action">Make room for your next session</div>'''
]
import json
s=s[:start]+'const SC='+json.dumps(screens)+';\n'+s[end:]
s=s.replace("SC.slice(0,3).forEach",'SC.forEach')
start=s.index(' if(i===0){let n=0;');end=s.index('\nconst chIO=',start)
s=s[:start]+'}\n'+s[end:]
s=s.replace("const v=$('#demoVid');if(v.dataset.src){v.src=v.dataset.src;scr.classList.add('hasvid');v.play()}",'')
start=s.index('// wall\n');end=s.index('// arch carousel',start)
s=s[:start]+s[end:]
s=s.replace("if(e.target.id==='wg')cnt()",'')
s=s.replace("$$('.rv,#wg')","$$('.rv')")
start=s.index('const F=');end=s.index('const CH=',start)
features=[['⌖','Train Anywhere','Connect Your Gym. Equipment-aware planning.'],['✦','Train With Confidence','Intelligent guidance, exercise and equipment library, trainer discovery.'],['◎','Better Together','My Squad, Squad Snaps, chats, challenges and 10 Together.'],['⌁','Progress Beyond the Mirror','Analytics, workout history and personal records.'],['☾','Recover at Your Pace','Rest days and flexible recovery management.'],['◇','Make Every Effort Count','Tokens, achievements, levels and milestones.']]
s=s[:start]+'const F='+json.dumps(features)+';\n'+s[end:]
s=s.replace("$('#nx').onclick=()=>go(1);$('#pv').onclick=()=>go(-1);go(0);",'go(0);')
s=s.replace('hb=$(\'.hd\').offsetHeight','hb=0')
s=s.replace('rx=W*.46','rx=Math.min(W*.46,580)')
s=s.replace('</body>','<script src="interactions.js"></script></body>')
(r/'dist/index.html').write_text(s,encoding='utf-8')
# Retain the working footer and modal accessibility, omit obsolete media/dashboard handlers.
js=(r/'dist/enhancements.js').read_text(encoding='utf-8')
start=js.index('const video=');end=js.index('let returnFocus;',start)
js=js[:start]+js[end:]
js+='''
document.querySelectorAll('[data-store]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#info-title').textContent='Your next rep is on its way.';document.querySelector('#info-copy').textContent='The 10reps app is not available in stores yet. Explore early access to preview the invitation experience.';infoDialog.showModal()}));
const wallObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('assembled');wallObserver.unobserve(entry.target)}}),{threshold:.18});wallObserver.observe(document.querySelector('.wall-grid'));
document.querySelectorAll('.app-action').forEach(e=>{e.setAttribute('aria-hidden','true')});
document.querySelectorAll('.scr').forEach((e,i)=>e.setAttribute('aria-hidden',i!==0));
new MutationObserver(()=>document.querySelectorAll('.scr').forEach(e=>e.setAttribute('aria-hidden',!e.classList.contains('on')))).observe(document.querySelector('#screen'),{subtree:true,attributes:true,attributeFilter:['class']});
if(reducedMotion){document.querySelector('.wall-grid').classList.add('assembled');clearInterval(at)}
'''
(r/'dist/interactions.js').write_text(js,encoding='utf-8')
