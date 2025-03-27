import React, { useState } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const frases = [
  "Respira hondo y relájate 💙",
  "Eres increíble, nunca lo olvides ✨",
  "Cada día es una nueva oportunidad 🌞",
  "Deja que todo fluya 🌊",
  "Tómate un momento para ti y disfruta el presente 🕊️",
  "La vida es más hermosa cuando sonríes 😁",
  "Eres más fuerte de lo que piensas 💪",
  "No hay límites para lo que puedes lograr 🌟",
  "El amor propio es el primer paso para ser feliz ❤️",
  "Cada paso que das te acerca a tus sueños ✨",
  "Eres el sol que ilumina mi vida 🌞",
  "No te preocupes, todo saldrá bien 🌸",
  "Hoy es un buen día para empezar de nuevo 💫",
  "La felicidad está en las pequeñas cosas 🍀",
  "Tú puedes con todo lo que te propongas 💫",
  "Sé la razón por la que alguien sonría hoy 😊"
];

function App() {
  const [frase, setFrase] = useState("Presiona el botón para ver una frase 💡");

  const cambiarFrase = () => {
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(nuevaFrase);
  };

  return (
    <div className="contenedor">
      <h1>🌿 Relax 🌿</h1>
      <p className="frase">{frase}</p>
      <button onClick={cambiarFrase}>✨ Nueva Frase ✨</button>
      <audio controls loop>
        <source
          src="https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"
          type="audio/mp3"
        />
        Tu navegador no soporta audio.
      </audio>
      <p className="mensaje-te-amo">💖 Te amo Alejandra 💖</p>
      <p className="mensaje-footer">
        Realizado con amor por Eduardo. ¡Ya no te estreses, que te haces fea! 😘
      </p>
      
      <Analytics />
    </div>
  );
}

export default App;
