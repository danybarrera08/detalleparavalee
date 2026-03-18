document.addEventListener("DOMContentLoaded", () => {

  const textos = [ 
    "Hola mi niña...",
    "Hice esta página sencilla con mis pocos conocimientos que tengo de programación para hacerte un pequeño detalle.",
    "Quiero que sepas que cada día pienso en ti y te deseo lo mejor",
    "Gracias por ser tan especial y llenar mi vida de alegría",
    "Gracias por tomarte el tiempo de ver este detalle..."
  ];

  let indice = 0;
  const textoElemento = document.getElementById("texto");
  const boton = document.getElementById("siguiente");


  function escribirTexto(texto) {
    let i = 0;
    textoElemento.textContent = "";

    const intervalo = setInterval(() => {
      textoElemento.textContent += texto[i];
      i++;
      if (i >= texto.length) clearInterval(intervalo);
    }, 40);
  }

  boton.addEventListener("click", () => {
    indice++;
    if (indice < textos.length) {
      escribirTexto(textos[indice]);
    } else {
      textoElemento.textContent = "Te dejo con esta pequeña carta que espero te guste...";
      boton.style.display = "none";


      document.getElementById("carta").style.display = "block";
    }
  });


  function crearCorazonAleatorio() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 95 + "%"; 
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
  }
  setInterval(crearCorazonAleatorio, 300);


  document.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.animationDuration = "3s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  });


  window.verificar = function(){
    const pass = document.getElementById("password").value.trim();

    if(pass === "051123"){ 
      document.getElementById("login").style.display = "none";
      document.getElementById("contenido").style.display = "block";

      indice = 0;
      escribirTexto(textos[0]);
    } else {
      document.getElementById("error").textContent = "Contraseña incorrecta mi niña, intenta otra vez";
    }
  }

});