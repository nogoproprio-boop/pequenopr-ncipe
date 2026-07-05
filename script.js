// ============================
// CONTAGEM REGRESSIVA
// ============================

// Altere o ano se necessário
const dataEvento = new Date("2026-07-25T17:30:00");

const contador = document.createElement("div");
contador.id = "contador";
contador.style.marginTop = "30px";
contador.style.fontSize = "22px";
contador.style.fontWeight = "bold";
contador.style.color = "#FFD54F";

document.querySelector(".hero-content").appendChild(contador);

function atualizarContagem() {

    const agora = new Date();
    const diferenca = dataEvento - agora;

    if (diferenca <= 0) {

        contador.innerHTML = "🎉 O grande dia chegou!";

        return;

    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / 60000);

    contador.innerHTML =
        `⏳ Faltam <b>${dias}</b> dias,
         <b>${horas}</b> horas e
         <b>${minutos}</b> minutos`;

}

setInterval(atualizarContagem, 1000);
atualizarContagem();


// ============================
// MÚSICA
// ============================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let tocando = false;

musicButton.addEventListener("click", async () => {

    if (tocando) {

        music.pause();
        musicButton.innerHTML = "🔇";

    } else {

        try {

            await music.play();
            musicButton.innerHTML = "🔊";

        } catch (e) {

            alert("Toque novamente para iniciar a música.");

        }

    }

    tocando = !tocando;

});


// ============================
// WHATSAPP
// ============================

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    const mensagem =
`Olá!

Confirmo minha presença no aniversário de 1 aninho do Eduardo.

Nome: ${nome}`;

    const url =
`https://wa.me/5598983431122?text=${encodeURIComponent(mensagem)}`;

    confetes();

    setTimeout(() => {

        window.open(url, "_blank");

    }, 1200);

});


// ============================
// CONFETES
// ============================

function confetes() {

    const emojis = ["✨", "⭐", "🎉", "💛"];

    for (let i = 0; i < 120; i++) {

        const confete = document.createElement("div");

        confete.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        confete.style.position = "fixed";
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = "-20px";
        confete.style.fontSize = (15 + Math.random() * 18) + "px";
        confete.style.transition = "3s linear";
        confete.style.zIndex = "9999";

        document.body.appendChild(confete);

        setTimeout(() => {

            confete.style.top = "110vh";
            confete.style.transform = `rotate(${Math.random() * 720}deg)`;

        }, 20);

        setTimeout(() => {

            confete.remove();

        }, 3200);

    }

}


// ============================
// ANIMAÇÃO AO ROLAR
// ============================

const secoes = document.querySelectorAll("section");

const aparecer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

secoes.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = ".9s";

    aparecer.observe(sec);

});
