"use client";

import { useEffect } from "react";

export default function Home() {
  let ref: any, body: any, timer: any, pictures: any;
  useEffect(() => {
    ref = document.getElementById("scrollelem");
    body = document.body;
    pictures = document.querySelectorAll(".Picture");

    window.addEventListener(
      "scroll",
      function () {
        clearTimeout(timer);
        if (!body.classList.contains("disable-hover")) {
          body.classList.add("disable-hover");
        }

        timer = setTimeout(function () {
          body.classList.remove("disable-hover");
        }, 500);
      },
      false
    );
  });
  let xscrollp = 0;
  let lastX = 0;
  let x = 0;
  let isMouseDown = false;
  let prev = 0;

  const throttleFunction=(delay: any)=>{
     
    // Previously called time of the function
    let prev = 0;
    return () => {
      // Current called time of the function
      let now = new Date().getTime();

      if(now - prev> delay){
        prev = now;
        console.log("kaki");
        onMouseMove;
        // "..." is the spread operator here
        // returning the function with the
        // array of arguments
        return; 
      }
    }
  }

  const onMouseDown = (e: any) => {
    isMouseDown = true;
    lastX = e.clientX;
  };

  const onMouseMove = (e: any) => {
    let now = new Date().getTime();
    if(now - prev > 10){
      prev = now;
      if (isMouseDown) {
        x = e.clientX - lastX; // / ref.clientWidth *100;
        //console.log(x);
        ref.scroll(xscrollp + x * -1, 0);
        pictures.forEach((element: { "": any; }) => {
          var panpercent = ((xscrollp + x * -1) / (ref.scrollWidth - ref.clientWidth) * 100)
          panpercent > 100 ? panpercent = 100 : panpercent = panpercent;
          panpercent < 0 ? panpercent = 0 : panpercent = panpercent;
          element.style.objectPosition =  panpercent + "% 100%"
        });
      }
    }
  };

  const onMouseUp = (e: any) => {
    isMouseDown = false;
    xscrollp = xscrollp + x * -1;
    if (xscrollp < 0) {
      xscrollp = 0;
    }
    if (xscrollp > ref.scrollWidth - ref.clientWidth) {
      xscrollp = ref.scrollWidth - ref.clientWidth;
    }
  };

  return (
    <main
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="flex min-h-screen flex-row items-center bg-gradient-to-tr from-stone-950 to-stone-800"
    >
      <div
        id="scrollelem"
        className="flex flex-row items-center overflow-auto p-20 select-none no-scrollbar"
      >
        <div className="min-h-[100%] min-w-[30%] px-10" />
        <img src="/11.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/12.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/13.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/14.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/15.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/16.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/17.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <img src="/18.jpg" className="Picture px-10 drag-none object-cover object-left h-192 w-160" />
        <div className="min-h-[100%] min-w-[30%] px-10" />
      </div>
    </main>
  );
}
