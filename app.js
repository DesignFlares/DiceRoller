let img=document.querySelector(".dice");
let btn=document.querySelector("button");
let p=document.querySelector("p");
const diceImages = {
  1: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png",
  2: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png",
  3: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png",
  4: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png",
  5: "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png",
  6: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png",
};

btn.addEventListener("click", ()=>{
    let rand=Math.floor(Math.random()*6)+1;
    let image=diceImages[rand];
    img.classList.remove("shake"); 
    void img.offsetWidth; 
  img.classList.add("shake");
    p.innerText=`You rolled a ${rand}`;
    img.setAttribute("src",image);
})
