let boxes = document.querySelectorAll(".box");
let restbtn1= document.querySelector(".resetBtn");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector("#msgText");
let new1 = document.querySelector("#newbtn");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
];

const reset = () =>{
    turnO=true;
    enableDisable();
    msgContainer.classList.add("hide");
};
const enableDisable=() =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
         if(turnO)
         {
            box.innerHTML="O";
            turnO=false;
         }
         else{
            box.innerHTML="X";
            turnO=true;
         }
         box.disabled= true;
    
    checkwinner();
    });
});
const checkwinner = () =>
{
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1 !="" && pos2 !="" && pos3 !="")
    {
        if(pos1==pos2 && pos2==pos3 )
        {
           showwinner(pos1);
        }
    }
    }  
};

const showwinner = (winners) =>{
msg.innerHTML=`Winner is ${winners}`;
msgContainer.classList.remove("hide");
disableBoxs();

};

const disableBoxs =()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

new1.addEventListener("click",reset);
restbtn1.addEventListener("click",reset);