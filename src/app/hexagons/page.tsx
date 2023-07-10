"use client";

import { useEffect } from "react";
import './style.css';

export default function Home() {

  const gridSize = 50;

  function click (element : HTMLDivElement) {
    console.log("clicked");
    element.style.background = "rgba(60,60,60,1)";
  }
  
  useEffect(() => {

    let mainhex = document.getElementsByClassName("mainhex");
    mainhex[0].innerHTML = '';

    for(let i = 0; i < gridSize; i++){
        let line = document.createElement('div');
        line.className = "line";
        for(let j = 0; j < gridSize; j++){
            let hexagon = document.createElement('div');
            let hex = document.createElement('div');
            let hex2 = document.createElement('div');
            let hex3 = document.createElement('div');
            hexagon.className = "hexagon";
            hex.className = "hex";
            hex2.className = "hex2";
            hex3.className = "hex3";
            hex.style.top = i*54 + 'px';
            hex2.style.top = i*54 + 'px';
            hex3.style.top = i*54 + 'px';
            if(i%2 == 0){
                hex.style.left = (89 + j*59) + 'px';
                hex2.style.left = (89 + j*59) + 'px';
                hex3.style.left = (89 + j*59) + 'px';
            }else{
                hex.style.left = (59 + j*59) + 'px';
                hex2.style.left = (59 + j*59) + 'px';
                hex3.style.left = (59 + j*59) + 'px';
            }
            hex2.style.transform = 'rotate(-60deg)';
            hex3.style.transform = 'rotate(60deg)';
            hexagon.onclick = () => click(hexagon);
            hexagon.appendChild(hex);
            hexagon.appendChild(hex2);
            hexagon.appendChild(hex3);
            line.appendChild(hexagon);
        }
        mainhex[0].appendChild(line);
    }
  });


  return (
    <main className="flex min-h-screen min-w-screen">
      <canvas id="canvas"/>
      <div className="mainhex"/>
    </main>
  );
}
