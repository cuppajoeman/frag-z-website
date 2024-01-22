"use client"

import { characterCursor } from "cursor-effects";

const Cursor = () => {
    const test = new characterCursor({ 
        element: document.querySelector("#character"), 
        characters: ["*"],
        font: "15px serif",
        colors: [
            "#111",
        ],
        characterLifeSpanFunction: function() {
            return Math.floor(Math.random() * 60 + 80);
        },
        initialCharacterVelocityFunction: function() {
            return {
                x: (Math.random() < 0.5 ? -1 : 1) * Math.random() / 2,
                y: 1 + Math.random(),
            }
        },
        characterVelocityChangeFunctions: {
          x_func: function(age:number, lifeSpan:number) {
            return (Math.random() < 0.5 ? -1 : 1)/30;
          },
          y_func: function(age:number, lifeSpan:number) {
            return (Math.random() < 0.5 ? -1 : 1)/ 15;
          },
        },
        characterScalingFunction: function(age:number, lifeSpan:number) {
            let lifeLeft = lifeSpan - age;
            return Math.max(lifeLeft / lifeSpan * 2, 0);
        },
        characterNewRotationDegreesFunction: function(age:number, lifeSpan:number) {
            let lifeLeft = lifeSpan - age;
            console.log(age, lifeSpan);
            return lifeLeft / 5;
        }
    })

  return (
    <>
      <div ref={test}></div>
    </>
  );
};

export default Cursor;