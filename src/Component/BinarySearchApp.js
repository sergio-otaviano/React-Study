import React, { useState } from "react";
import "../styles.css";

export default function BinarySearchApp() {
  // INICIO, RODANDO, FIM
  const [estado, setEstado] = useState("INICIO");

  // Palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    setPalpite(parseInt((palpite - min) / 2) + min);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    setPalpite(parseInt((max - palpite) / 2 + palpite));
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "INICIO") {
    return (
      <div className="BinarySearchApp">
        <h2>Jogo de Busca Binária</h2>
        <hr />
        <br />
        <button onClick={iniciarJogo}>Começar a jogar!</button>
      </div>
    );
  } else if (estado === "RODANDO") {
    return (
      <div className="BinarySearchApp">
        <h2>Jogo de Busca Binária</h2>
        <hr />
        <br />
        <p>O seu número é {palpite}?</p>
        <p>
          Min: {min} / Max: {max}
        </p>
        <button onClick={menor}>Menor!</button>
        <button onClick={acertou}>Acertou!</button>
        <button onClick={maior}>Maior!</button>
      </div>
    );
  } else {
    return (
      <div className="BinarySearchApp">
        <h2>Jogo de Busca Binária</h2>
        <hr />
        <br />
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente!</button>
      </div>
    );
  }
}
