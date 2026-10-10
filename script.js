const $=id=>document.getElementById(id);
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2400)}
function hearts(n=18){const icons=["♥","♡","✿","💗"];for(let i=0;i<n;i++){const h=document.createElement("span");h.className="floating";h.textContent=icons[Math.floor(Math.random()*icons.length)];h.style.left=(7+Math.random()*86)+"vw";h.style.bottom=(7+Math.random()*14)+"vh";h.style.color=["#df6393","#f0a3bf","#b69ae8","#ed7c9f"][i%4];h.style.fontSize=(15+Math.random()*17)+"px";h.style.animationDelay=(Math.random()*.3)+"s";document.body.appendChild(h);setTimeout(()=>h.remove(),2200)}}
$("startBtn").addEventListener("click",()=>{$("letter").scrollIntoView({behavior:"smooth"});hearts(12);toast("Ek chhota sa surprise, sirf tumhare liye 💗")});
document.querySelectorAll(".reason").forEach(card=>card.addEventListener("click",()=>{document.querySelectorAll(".reason").forEach(c=>c.classList.remove("active"));card.classList.add("active");$("reasonMessage").textContent=card.dataset.msg;hearts(5)}));
$("missBtn").addEventListener("click",()=>{const note=$("missNote");note.hidden=!note.hidden;$("missBtn").textContent=note.hidden?"Mere paas aao, Baby ♡":"Ek aur virtual hug le lo ♡";if(!note.hidden){hearts(12);toast("Ek virtual hug, sirf tumhare liye 🤗💗")}});
$("secretBtn").addEventListener("click",()=>{const note=$("secretNote");note.hidden=!note.hidden;$("secretBtn").textContent=note.hidden?"Secret letter kholo":"Letter phir se band karo ♡";if(!note.hidden){hearts(10);toast("Ye secret sirf tumhare liye hai 💌")}});
$("partnerBtn").addEventListener("click",()=>{const response=$("partnerResponse");response.hidden=!response.hidden;if(!response.hidden){hearts(20);toast("Dil ki baat, bina kisi pressure ke 💗")}});
$("confettiBtn").addEventListener("click",()=>{hearts(30);toast("Birthday girl ki har baat sar-aankhon par! 🎉")});
$("wishBtn").addEventListener("click",()=>{$("wishResult").textContent="Tumhari har achhi wish poori ho, meri jaan. Dher saara pyaar — aaj bhi, kal bhi. 💗";hearts(28)});
function countdown(){const target=new Date(2026,9,26,0,0,0);let d=target-new Date();if(d<=0){$("days").textContent="🎂";$("hours").textContent="♡";$("minutes").textContent="♡";$("seconds").textContent="♡";$("countNote").textContent="Aaj tumhara din hai, meri Baby! Happy Birthday! 💗";return}const days=Math.floor(d/86400000);d%=86400000;const hours=Math.floor(d/3600000);d%=3600000;const minutes=Math.floor(d/60000);const seconds=Math.floor((d%60000)/1000);$("days").textContent=String(days).padStart(2,"0");$("hours").textContent=String(hours).padStart(2,"0");$("minutes").textContent=String(minutes).padStart(2,"0");$("seconds").textContent=String(seconds).padStart(2,"0")}
countdown();setInterval(countdown,1000);
if("IntersectionObserver"in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(s=>obs.observe(s))}else document.querySelectorAll(".reveal").forEach(s=>s.classList.add("visible"));

const lowBtn=$("lowBtn");
lowBtn.addEventListener("click",()=>{const note=$("lowNote");note.hidden=!note.hidden;lowBtn.textContent=note.hidden?"Meri baat sunogi, Baby? ♡":"Jab chaaho, ye message phir padhna ♡";if(!note.hidden){hearts(10);toast("Aaram se, meri jaan. Main sun raha hoon. 🫂")}});
const giftBtn=$("giftBtn");
giftBtn.addEventListener("click",()=>{const note=$("giftMessage");note.hidden=!note.hidden;giftBtn.classList.toggle("open",!note.hidden);giftBtn.setAttribute("aria-expanded",String(!note.hidden));$("giftEmoji").textContent=note.hidden?"🎁":"💝";$("giftLabel").textContent=note.hidden?"Open your little gift":"Your little gift is open ♡";if(!note.hidden){hearts(18);toast("Ek chhota sa surprise, sirf tumhare liye 🎁")}});
const littleMessages=[
"Baby, paani piya? Apna khayal rakhna bhi zaroori hai. 💗",
"Aaj agar thak gayi ho toh thoda rest kar lena. Har cheez abhi karna zaroori nahi. 🌷",
"Tumhe har waqt strong banne ki zaroorat nahi, meri jaan. 🫂",
"Bas yaad dilana tha ki tumhari feelings matter karti hain. ♡",
"Aaj apne liye bhi kuch achha karna—tum bhi care deserve karti ho. ✨",
"Chahe din kaisa bhi ho, apne aap se pyaar aur narmi se baat karna. 💕",
"Agar baat karne ka mann ho toh main sunne ki koshish karunga; aur space chahiye toh uski bhi respect hai. 🌙",
"Tumhari value kisi ek din, ek mistake ya kisi ke opinion se decide nahi hoti. 💗"
];
let lastLittleMessage=0;
$("messageBtn").addEventListener("click",()=>{let next;do{next=Math.floor(Math.random()*littleMessages.length)}while(next===lastLittleMessage);lastLittleMessage=next;$("randomMessage").textContent=littleMessages[next];hearts(5)});
