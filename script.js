// Controles básicos
const toggleP = id => document.getElementById(id).style.display = 
    document.getElementById(id).style.display === 'none' ? 'block' : 'none';
const enterSite = () => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
};

// Dicionário de traduções
const trad = {
    pt: {
        w:"Bem-vindo ao Meu Currículo", d:"Clique no botão abaixo para acessar.", e:"Entrar",
        sm:"Sobre Mim", st:"Meu nome é Wendel Santos Martins, sou um estudante à procura de um estágio...",
        ed:"Educação", et:"<strong>Ensino Médio:</strong> Instituto Federal de Ciências e Tecnologia - Edificações<br><strong>Cursando:</strong> Sistemas de Informação - 2º semestre na UNEX",
        h:"Habilidades", ht:"<strong>Técnicas:</strong> Conhecimento básico em linguagens de programação: JS, CSS, HTML<br><strong>Interpessoais:</strong> Comunicação eficaz, Trabalho em equipe, Liderança, Resolução de problemas, Adaptabilidade, Gerenciamento de tempo, Pensamento criativo",
        c:"Contato", ct:"<strong>Email:</strong> wendel.martins2017@hotmail.com<br><strong>Telefone:</strong> 73999549305",
        t:"Abrir/Fechar", s:"Estudante de Sistemas de Informação - UNEX"
    },
    en: {
        w:"Welcome to My Resume", d:"Click the button below to access.", e:"Enter",
        sm:"About Me", st:"My name is Wendel Santos Martins, I'm a student looking for an internship...",
        ed:"Education", et:"<strong>High School:</strong> Federal Institute of Science and Technology - Building Construction<br><strong>Currently:</strong> Information Systems - 2nd semester at UNEX",
        h:"Skills", ht:"<strong>Technical:</strong> Basic knowledge in programming languages: JS, CSS, HTML<br><strong>Interpersonal:</strong> Effective communication, Teamwork, Leadership, Problem solving, Adaptability, Time management, Creative thinking",
        c:"Contact", ct:"<strong>Email:</strong> wendel.martins2017@hotmail.com<br><strong>Phone:</strong> 73999549305",
        t:"Toggle", s:"Information Systems Student - UNEX"
    },
    es: {
        w:"Bienvenido a Mi Currículum", d:"Haz clic en el botón para acceder.", e:"Entrar",
        sm:"Sobre Mí", st:"Mi nombre es Wendel Santos Martins, soy un estudiante en busca de una pasantía...",
        ed:"Educación", et:"<strong>Escuela Secundaria:</strong> Instituto Federal de Ciencia y Tecnología - Edificaciones<br><strong>Actualmente:</strong> Sistemas de Información - 2º semestre en UNEX",
        h:"Habilidades", ht:"<strong>Técnicas:</strong> Conocimiento básico en lenguajes de programación: JS, CSS, HTML<br><strong>Interpersonales:</strong> Comunicación efectiva, Trabajo en equipo, Liderazgo, Resolución de problemas, Adaptabilidad, Gestión del tiempo, Pensamiento creativo",
        c:"Contacto", ct:"<strong>Email:</strong> wendel.martins2017@hotmail.com<br><strong>Teléfono:</strong> 73999549305",
        t:"Abrir/Cerrar", s:"Estudiante de Sistemas de Información - UNEX"
    }
};

// Tradutor
function mudaIdioma(lang) {
    const t = trad[lang];
    document.getElementById("welcome-message").textContent = t.w;
    document.getElementById("description").textContent = t.d;
    document.querySelector("#welcome-screen button").textContent = t.e;
    document.querySelector("#main-content header p").textContent = t.s;
    document.querySelector("#sobre h2").textContent = t.sm;
    document.getElementById("sobre-texto").innerHTML = t.st;
    document.querySelector("#educacao h2").textContent = t.ed;
    document.getElementById("educacao-texto").innerHTML = t.et;
    document.querySelector("#habilidades h2").textContent = t.h;
    document.getElementById("habilidades-texto").innerHTML = t.ht;
    document.querySelector("#contato h2").textContent = t.c;
    document.getElementById("contato-texto").innerHTML = t.ct;
    document.querySelectorAll("section button").forEach(b => b.textContent = t.t);
}