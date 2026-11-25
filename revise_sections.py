from pathlib import Path
import re
root=Path(__file__).parent/'dist'
p=root/'index.html'
s=p.read_text(encoding='utf-8')
s=s.replace('<div class="pill hi"><i></i> A stronger you starts here · Product preview</div>','')
s=s.replace('<a class="text-link hi" href="#features">Meet your training advantage</a>','')
s=s.replace('<h2 class="rv">Find your next great session.</h2><div class="chips2 rv" id="chips2"></div>','<div class="session-intro rv"><span class="idx">PURPOSE IN EVERY SESSION</span><p>Less time planning.<br><strong>More time getting stronger.</strong></p></div>')
s=s.replace('Your training toolkit. Drag to explore, or use the controls below.','Thoughtful tools. One connected training experience.')
s=re.sub(r'<div class="arc-controls">.*?</div>','',s,count=1)
start=s.index('<section class="wall">');end=s.index('</section>',start)+len('</section>')
s=s[:start]+'''<section class="consistency-story" id="consistency"><div class="consistency-photo rv" role="img" aria-label="Athlete pausing after a workout"><div class="photo-caption"><span>YOUR PACE. YOUR PROGRESS.</span><p>Keep a little<br>promise to yourself.</p></div></div><div class="consistency-copy rv"><span class="idx">CONSISTENCY, WITHOUT THE PRESSURE</span><h2>You don't need<br>a perfect streak.<br><span>Just a next session.</span></h2><p>Some days you push. Some days you pause. Build a routine with room for both, and a reason to return.</p><div class="rhythm-notes"><div><span class="rhythm-icon">↺</span><div><h3>Pick up where you are.</h3><p>A fresh start belongs in every routine.</p></div></div><div><span class="rhythm-icon">◌</span><div><h3>Make space for recovery.</h3><p>Rest is part of moving forward.</p></div></div><div><span class="rhythm-icon">✦</span><div><h3>Let the little wins count.</h3><p>Your effort matters before it becomes a milestone.</p></div></div></div></div></section>'''+s[end:]
s=s.replace('<div class="pn">YOUR NEXT CHAPTER STARTS HERE</div><div class="pm"><span>ADMIT ONE</span><span>ALL LEVELS</span></div>','<div class="pass-label">A PLACE TO BECOME STRONGER</div><div class="pass-message">You belong<br>at the starting line.</div><div class="pn">Bring your ambition. We’ll meet you where you are.</div><div class="pm"><span>YOUR JOURNEY</span><span>YOUR PACE</span></div>')
start=s.index('<div class="faq"');end=s.index('<section class="final">',start)
faq=s[start:end].strip().replace('<h2 class="rv">Questions</h2>','<div class="faq-intro"><span class="idx">A LITTLE MORE CLARITY</span><h2>Good questions.<br>Clear answers.</h2><p>The essentials before you get started.</p></div><div class="faq-list">')
faq=faq.rsplit('</div>',1)[0]+'</div></section>'
faq=faq.replace('<div class="faq" id="faq">','<section class="faq" id="faq">')
s=s[:start]+s[end:]
start=s.index('<footer>');end=s.index('</footer>',start)+len('</footer>')
footer='''<footer class="site-footer"><div class="footer-top"><div class="footer-brand"><a class="logo" href="#top" aria-label="10reps home">10<b>reps</b>.ai</a><p>More purpose in every rep.<br>More possibility in you.</p><button class="footer-invite" data-open>Explore early access</button></div><nav class="footer-group" aria-label="Footer product"><h3>Product</h3><a href="#features">RepStart AI</a><a href="#types">Workouts</a><a href="#toolkit">Training toolkit</a><a href="#more">Personalised training</a></nav><nav class="footer-group" aria-label="Footer explore"><h3>Explore</h3><a href="#how">How it works</a><a href="#consistency">Build consistency</a><a href="#gallery">The everyday athlete</a><a href="#exclusive">For everyone</a></nav><nav class="footer-group" aria-label="Footer support"><h3>Help & information</h3><a href="#faq">FAQs</a><button data-info="privacy">Privacy</button><button data-info="terms">Terms of use</button><button data-info="contact">Contact & support</button></nav></div><div class="footer-bottom"><span>© 2026 10reps.ai. All rights reserved.</span><span>Built around you. One rep at a time.</span></div></footer><dialog id="footer-info" aria-labelledby="info-title"><button class="info-close" aria-label="Close information">×</button><span class="idx">10REPS · PRE-LAUNCH</span><h2 id="info-title"></h2><p id="info-copy"></p><button class="btn info-done">Got it</button></dialog>'''
s=s[:start]+faq+'\n'+footer+s[end:]
s=s.replace('<section class="final">','<section class="final" id="next-rep">')
# Remove code for elements removed from the page, rather than leaving hidden UI.
s=s.replace("$('#chips2').innerHTML=WT.map((t,i)=>`<button class=\"chip2${i?'':' on'}\" data-i=\"${i}\">${t}</button>`).join('');",'')
start=s.index('// wall\n');end=s.index('// arch carousel',start)
s=s[:start]+s[end:]
s=s.replace("if(e.target.id==='wg')cnt()",'')
s=s.replace("hb=$('.hd').offsetHeight",'hb=0')
# Keep the semicircle animation independent from heading height and page whitespace.
s=s.replace('cy=H*.95','cy=H*.94').replace('rx=W*.46','rx=Math.min(W*.46,560)')
p.write_text(s,encoding='utf-8')
p=root/'enhancements.js';s=p.read_text(encoding='utf-8')
start=s.index("document.querySelector('#arc-prev')");end=s.index('const video=',start)
s=s[:start]+"if(reducedMotion)clearInterval(at);\n"+s[end:]
s+='''
const footerInfo={privacy:{title:'Your privacy',copy:'This website is a product prototype. The early-access form does not send or save your details. The full privacy policy, including information about account data and your choices, will be published before live signups open.'},terms:{title:'Terms of use',copy:'You are exploring a pre-launch website concept. The training screens and AI interactions are demonstrations. Product availability, pricing and the full terms will be confirmed before registration opens.'},contact:{title:'Let’s stay connected',copy:'Our support channels will be published when early access opens. For now, explore the FAQs for answers about the 10reps concept and the early-access experience.'}};
const infoDialog=document.querySelector('#footer-info');
document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>{const info=footerInfo[b.dataset.info];document.querySelector('#info-title').textContent=info.title;document.querySelector('#info-copy').textContent=info.copy;infoDialog.showModal()}));
infoDialog.querySelectorAll('button').forEach(b=>b.onclick=()=>infoDialog.close());
infoDialog.addEventListener('click',e=>{if(e.target===infoDialog){const r=infoDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)infoDialog.close()}});
'''
p.write_text(s,encoding='utf-8')
