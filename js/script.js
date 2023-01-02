"use strict"

/* Pegando elementos do DOM */
const vs=document.querySelector(".vs");
const level=document.querySelector(".level");
const boxes=[...document.querySelectorAll(".box")];
const play=[...document.querySelectorAll(".play")];
const play1=document.querySelector(".play1");
const play2=document.querySelector(".play2");
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const ret=document.querySelector(".return");
const btnok=document.querySelector(".btnok");
const retText=document.querySelector(".returnText");

/* variáveis necessárias */
let px=0;
let po=0;
let vez="play1";
let empate="sim";

/* Trocar modo de jogo */
vs.addEventListener("click",(evt)=>{
  const versus=document.querySelector(".vs")
  if(versus.innerHTML=="vs/Máquina"){
    vs.innerHTML="vs/Amigo(a)"
    level.classList.add("disable")
    boxes.map((el)=>{
      el.innerHTML=""
    })
  } else if(versus.innerHTML=="vs/Amigo(a)"){
    vs.innerHTML="vs/Máquina"
    level.classList.remove("disable")
    boxes.map((el)=>{
      el.innerHTML=""
    })
  }
})

/* Trocar nivel de jogo */
level.addEventListener("click",(evt)=>{
  const nivel=document.querySelector(".level")
  if(nivel.innerHTML=="Moderado"){
    level.innerHTML="Impossível"
  } else if(nivel.innerHTML=="Impossível"){
    level.innerHTML="Moderado"
  }
})




/* Jogar os três modos */
boxes.map((el)=>{
  el.innerHTML=""
  el.addEventListener("click",(evt)=>{
    let event=evt.target
    let ver=event.innerHTML
    
    const res=[...ret.classList];    

    if(vs.innerHTML=="vs/Máquina" && level.innerHTML=="Moderado"){
      console.log("maquina moderado")
      /* Modo máquina moderada */

    } else if(vs.innerHTML=="vs/Máquina" && level.innerHTML=="Impossível"){
      console.log("maquina impossivel")
      /* Modo máquina impossível */

    } else if(vs.innerHTML=="vs/Amigo(a)"){
      console.log("amigo")
      /* Modo amigo(a) */
      if(vez=="play1" && ver!="X" && ver!="O" && res[1]=="disable"){
        el.innerHTML="X"
        vez="play2"
        play.map((el)=>{
          el.classList.toggle("focus")
        })
        const buscar=boxes.map((el)=>{
          return el.innerHTML
        })
        
        if(buscar[0]=="X" && buscar[1]=="X" && buscar[2]=="X"
        || buscar[3]=="X" && buscar[4]=="X" && buscar[5]=="X"
        || buscar[6]=="X" && buscar[7]=="X" && buscar[8]=="X"
        || buscar[0]=="X" && buscar[3]=="X" && buscar[6]=="X"
        || buscar[1]=="X" && buscar[4]=="X" && buscar[7]=="X"
        || buscar[2]=="X" && buscar[5]=="X" && buscar[8]=="X"
        || buscar[0]=="X" && buscar[4]=="X" && buscar[8]=="X"
        || buscar[2]=="X" && buscar[4]=="X" && buscar[6]=="X"){
          retText.innerHTML="Player X - GANHOU!"
          ret.classList.toggle("disable")
          px+=1;
          p1.innerHTML=px
          vez="play1"
          play.map((el)=>{
            el.classList.toggle("focus")
          })
          empate="não";
        }
        
        
      } else if(vez=="play2" && ver!="X" && ver!="O" && res[1]=="disable"){
        el.innerHTML="O";
        vez="play1";
        play.map((el)=>{
          el.classList.toggle("focus")
        })
        
        const buscar=boxes.map((el)=>{
          return el.innerHTML
        })
        
        if(buscar[0]=="O" && buscar[1]=="O" && buscar[2]=="O"
        || buscar[3]=="O" && buscar[4]=="O" && buscar[5]=="O"
        || buscar[6]=="O" && buscar[7]=="O" && buscar[8]=="O"
        || buscar[0]=="O" && buscar[3]=="O" && buscar[6]=="O"
        || buscar[1]=="O" && buscar[4]=="O" && buscar[7]=="O"
        || buscar[2]=="O" && buscar[5]=="O" && buscar[8]=="O"
        || buscar[0]=="O" && buscar[4]=="O" && buscar[8]=="O"
        || buscar[2]=="O" && buscar[4]=="O" && buscar[6]=="O"){
          retText.innerHTML="Player O - GANHOU!"
          ret.classList.toggle("disable")
          po+=1;
          p2.innerHTML=po;
          vez="play2";
          play.map((el)=>{
            el.classList.toggle("focus")
          })
          empate="não";
        }
      }
      
      const buscar=boxes.map((el)=>{
        return el.innerHTML
      })
      
      if(buscar[0]!="" && buscar[1]!="" && buscar[2]!=""
      && buscar[3]!="" && buscar[4]!="" && buscar[5]!=""
      && buscar[6]!="" && buscar[7]!="" && buscar[8]!="" && res[1]=="disable" && empate=="sim"){
        retText.innerHTML="EMPATE!"
        ret.classList.toggle("disable")
      }

    }
  })
})

/* Aceitar o resultado e continuar o jogo*/
btnok.addEventListener("click",(el)=>{
  boxes.map((el)=>{
    el.innerHTML="";
    empate="sim";
  })
  ret.classList.toggle("disable")
})