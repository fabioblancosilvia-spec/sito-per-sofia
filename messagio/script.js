/* ---------------- STELLE ---------------- */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let stars=[];
for(let i=0;i<140;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*1.8,
        speed:0.2+Math.random()*0.4
    });
}

function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(s=>{
        s.y+=s.speed;
        if(s.y>canvas.height){
            s.y=0;
            s.x=Math.random()*canvas.width;
        }

        ctx.beginPath();
        ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
        ctx.fillStyle="white";
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}
animateStars();


/* -------- TESTI CHE COMPAIONO -------- */

const texts=document.querySelectorAll("p");

function reveal(){
    const trigger=window.innerHeight*0.85;

    texts.forEach(t=>{
        const top=t.getBoundingClientRect().top;
        if(top<trigger){
            t.classList.add("show");
        }
    });
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);


/* -------- BOTTONI FINALI -------- */

const yes=document.getElementById("yesBtn");
const no=document.getElementById("noBtn");
const response=document.getElementById("response");
let noClickCount=0;

/* sì */
yes.addEventListener("click",()=>{
    response.textContent="ok allora scrivimi 🙂";
});

/* no che scappa */
no.addEventListener("mouseover",()=>{
    noClickCount++;
    const x=Math.random()*200-100;
    const y=Math.random()*200-100;
    no.style.transform=`translate(${x}px,${y}px)`;
    
    if(noClickCount>=2){
        response.textContent="ok (scrivimelo perché sono un informatico fallito e non riesco a vedere cosa rispondi)";
    }
});

/* no che scappa su mobile */
no.addEventListener("touchstart",()=>{
    noClickCount++;
    const x=Math.random()*200-100;
    const y=Math.random()*200-100;
    no.style.transform=`translate(${x}px,${y}px)`;
    
    if(noClickCount>=2){
        response.textContent="ok (scrivimelo perché sono un informatico fallito e non riesco a vedere cosa rispondi)";
    }
});


/* -------- HERO FADE OUT MENTRE SCROLLI -------- */

const hero=document.querySelector(".hero");

function heroFadeOut(){
    const scrolled=window.scrollY;
    const heroHeight=hero.offsetHeight;
    
    // Opacity diminuisce da 1 a 0 mentre scrolli fino a metà della hero
    let opacity=1-(scrolled/(heroHeight*0.6));
    opacity=Math.max(0,Math.min(1,opacity));
    
    hero.style.opacity=opacity;
}

window.addEventListener("scroll", heroFadeOut);

