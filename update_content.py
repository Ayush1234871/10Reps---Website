from pathlib import Path
import re

root = Path(__file__).parent / 'dist'
p = root / 'index.html'
s = p.read_text(encoding='utf-8')
replacements = {
'One more rep.</b><div><b class="w g" style="--i:2">Built around you.':'Less guesswork.</b><div><b class="w g" style="--i:2">More good sessions.',
'A plan for your goals. Guidance for your next set.<br>Train with RepStart AI, see your progress and keep going with your squad.':'Not sure what to train, how to use your gym, or how to keep going?<br>Find your next session with RepStart AI, follow clear guidance and build a routine with your squad.',
'Invite-only access. Built with our founding crew.':'Your goals. Your starting point. Invitation-only access.',
'Stop piecing together saved workouts. Start with a session built for your goal, your gym and the time you have.':'Saved workouts everywhere. A clear plan nowhere. Bring your goal and connect your gym. RepStart AI helps turn them into a session you can follow.',
'Your gym. Your setup.':'A plan for the gym you actually use.',
'Connect Your Gym and build your session around the equipment you have.':'Connect Your Gym so your plan fits the equipment available to you.',
'Guidance when it matters.':'Unsure of a movement? Find your cue.',
'Get direction from RepStart AI, with exercise guidance close at hand.':'Keep exercise guidance and equipment information close, with RepStart AI for your next question.',
'Less deciding. More doing.':'Stop switching between saved workouts.',
'Open your plan, follow each movement and log your session in one place.':'Your plan, movements and session log belong together. Open one place and get started.',
'Make room for busy weeks and rest days. See what is improving, adjust your routine and come back at your pace.':'A busy week should not mean starting over. Make room for recovery, move a session and see the progress that is easy to miss day to day.',
'Adjust the day. Keep the direction.':'Missed a day? Keep your next step.',
'Move your training or recovery day without losing your next step.':'Shift training and recovery around your week, without abandoning your routine.',
'See progress beyond the mirror.':'Training hard, but unsure what is changing?',
'Put your workout history, personal records and training patterns in context.':'Look back at your sessions, personal records and training patterns. Give your effort some context.',
'Keep your people close.':'You do not have to keep going alone.',
'Share a Squad Snap, celebrate the small wins and keep each other going.':'Check in with your squad, share a training moment and give each other a reason to return.',
'From your first plan to your next milestone. All connected.':'The questions that interrupt your training, answered in one place.',
'Different journeys.<br>Shared momentum.<br><span>Your kind of people.</span>':'Different starting points.<br>One shared feeling.<br><span>We keep showing up.</span>',
'A glimpse of the culture we’re building.<br>Show up. Share a moment. Bring your squad.':'Some days you bring the energy. Some days your squad does.<br>Share the effort, the small wins and the return after a break.',
'Access starts with an invitation.':'Build your next chapter with us.',
'10reps is an invite-only experience. Request an invitation to join the founding crew and help shape what comes next.':'New to training or finding your rhythm again? Request an invitation to the founding crew and help shape a more connected way to train.',
'Your invitation.<br>A different beginning.':'Your starting point.<br>Your way forward.',
'A personal invitation to the 10reps founding crew.':'A place in the founding crew. Room for your goals, your pace and your feedback.',
'Invitation only. Founding access. Shared ambition.':'Invitation-only access. Every starting point welcome.',
'Join the founding crew. Help shape what comes next.':'For every starting point. Access by invitation.',
'A clearer plan. A stronger routine. Your people, alongside you.':'Spend less time figuring it out. Find your plan, take your next step and bring your people along.',
'Train with direction.<br>Keep going, together.':'Less guesswork.<br>More reasons to keep going.',
'Built around you. One rep at a time.':'Your starting point. Your next rep.',
'Discover personalised training, RepStart AI, your squad, and a routine built around real life. Explore the 10reps founding membership.':'Unsure what to train next? Explore equipment-aware plans, RepStart AI guidance, flexible recovery and your squad. Discover invite-only 10reps.',
'10reps — Training that fits your life':'10reps — Less guesswork. More good sessions.',
}
for old, new in replacements.items():
    if old not in s: raise ValueError(f'Missing copy: {old}')
    s = s.replace(old, new)
descriptions = [
'Different gym, different equipment? Connect Your Gym for a plan that fits what is available.',
'Unsure what comes next? Find AI guidance, exercise and equipment libraries, and trainer discovery.',
'Motivation comes and goes. Stay connected through My Squad, Squad Snaps, chats, challenges and 10 Together.',
'Not seeing a change in the mirror? Explore workout history, analytics and personal records to understand your effort.',
'Need a rest day? Make space for recovery and adjust your routine around real life.',
'Small wins are easy to overlook. Mark your effort with tokens, achievements, levels and milestones.'
]
titles = ['Train Anywhere','Train With Confidence','Better Together','Progress Beyond the Mirror','Recover at Your Pace','Make Every Effort Count']
import json
s = re.sub(r'const F=\[.*?\];', 'const F='+json.dumps([[str(i), t, d] for i,(t,d) in enumerate(zip(titles,descriptions))])+';', s, count=1)
# Address decision-making concerns without inventing launch dates, pricing or product claims.
anchor='<details><summary>When does the app launch?</summary>'
s=s.replace(anchor,'<details><summary>I’m new to training. Is 10reps for me?</summary><p>There is no experience requirement to request an invitation. The experience brings planning, exercise guidance and equipment information together, so you can find a starting point for your goals.</p></details><details><summary>What if my schedule or equipment changes?</summary><p>Connect Your Gym for equipment-aware planning, explore movement alternatives and adjust training or recovery days around your week.</p></details>'+anchor)
s=s.replace('Request an invitation with your contact details. We’ll share the next steps when early access is ready.','Use “Request your invitation” to explore the signup flow. This preview does not send or save your details. Live invitation requests will be connected before launch.')
s=s.replace('<link rel="stylesheet" href="interaction-polish.css">','<link rel="stylesheet" href="interaction-polish.css">\n<link rel="stylesheet" href="content-refinements.css">')
p.write_text(s,encoding='utf-8')
