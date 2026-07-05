// ===========================
// MÚSICA DE FUNDO
// ===========================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let tocando = false;

musicButton.addEventListener("click", async () => {

    try{

        if(!tocando){

            await music.play();

            musicButton.innerHTML = "🔊";

        }else{

            music.pause();

            musicButton.innerHTML = "🔇";

        }

        tocando = !tocando;

    }catch(e){

        alert("Toque novamente para iniciar a música.");

    }

});

// ===========================
// CONTAGEM REGRESSIVA
// ===========================

const dataEvento = new Date("2026-07-25T17:30:00");

const contador = document.createElement("div");

contador.id = "contador";

contador.style.marginTop = "25px";
contador.style.fontSize = "22px";
contador.style.fontWeight = "bold";
contador.style.color = "#FFD54F";

document.querySelector(".hero-content").appendChild(contador);

function atualizarContagem(){

    const agora = new Date();

    const diferenca = dataEvento - agora;

    if(diferenca <= 0){

        contador.innerHTML = "🎉 Hoje é o grande dia!";

        return;

    }

    const dias = Math.floor(diferenca / (1000*60*60*24));

    const horas = Math.floor((diferenca % (1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferenca % (1000*60*60))/60000);

    contador.innerHTML = `
        ⏳ Faltam
        <b>${dias}</b> dias,
        <b>${horas}</b> horas e
        <b>${minutos}</b> minutos
    `;

}

setInterval(atualizarContagem,1000);

atualizarContagem();

// ===========================
// CONFIRMAÇÃO PELO WHATSAPP
// ===========================

const form = document.getElementById("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if(nome === ""){

        alert("Digite seu nome.");

        return;

    }

    const mensagem =
`Olá!

Confirmo minha presença no aniversário de 1 aninho do Eduardo.

Nome: ${nome}`;

    const url =
`https://wa.me/5598983431122?text=${encodeURIComponent(mensagem)}`;

    criarConfetes();

    setTimeout(()=>{

        window.open(url,"_blank");

    },1000);

});

// ===========================
// CONFETES
// ===========================

function criarConfetes(){

    const emojis = ["✨","⭐","🎉","💛"];

    for(let i=0;i<120;i++){

        const confete = document.createElement("div");

        confete.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        confete.style.position = "fixed";

        confete.style.left = Math.random()*100 + "vw";

        confete.style.top = "-30px";

        confete.style.fontSize = (16+Math.random()*18)+"px";

        confete.style.transition = "3.5s linear";

        confete.style.zIndex = "99999";

        document.body.appendChild(confete);

        setTimeout(()=>{

            confete.style.top="110vh";

            confete.style.transform=`rotate(${Math.random()*720}deg)`;

        },10);

        setTimeout(()=>{

            confete.remove();

        },3600);

    }

}

// ===========================
// ANIMAÇÃO AO ROLAR
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.style.opacity="0";

    sec.style.transform="translateY(70px)";

    sec.style.transition="1s";

    observer.observe(sec);

});

// ===========================
// FOTO BRILHANDO
// ===========================

const foto = document.querySelector(".foto");

setInterval(()=>{

    foto.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.03)"
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:2500

    });

},2500);

// ===========================
// ESTRELAS CADENTES
// ===========================

function estrelaCadente(){

    const estrela = document.createElement("div");

    estrela.innerHTML="⭐";

    estrela.style.position="fixed";

    estrela.style.left=Math.random()*100+"vw";

    estrela.style.top="-50px";

    estrela.style.fontSize="22px";

    estrela.style.zIndex="999";

    estrela.style.transition="2s linear";

    document.body.appendChild(estrela);

    setTimeout(()=>{

        estrela.style.left=(Math.random()*100)+"vw";

        estrela.style.top="110vh";

        estrela.style.opacity="0";

    },50);

    setTimeout(()=>{

        estrela.remove();

    },2200);

}

setInterval(estrelaCadente,5000);