//Alan Contreras, 300330244

//////////////Solution 1//////////////////////
//Write a function that will calculate the amount 
//that should be paid as a tip for a restaurant bill.
//The tip will be 20 percent of the total bill.


//id of button has been set as q1Btn
const q1Btn = document.querySelector("#q1Btn");
//lets get the input field
const q1Amount = document.querySelector("#amount");
//now the result element where we will display the result
const q1Result = document.querySelector("#result");

q1Btn.addEventListener("click", (e)=>{

    q1Result.textContent = Number(q1Amount.value)*.2;

})
//ezy pezy


// e.preventDefault();let isCorrect = formProject.checkValidity();formProject.reportValidity();


//////////////Solution 2//////////////////////
//Question 2:Create a function called changeColor() that 
//will be called when the user presses one of two buttons. 
//The first button will contain the text “Press here for a light yellow background”. 
//The second button will contain the text “Press here for a light green background”. 
//The function will take one parameter, a color. Its function is tochange the 
//background color of the current document.


//there are 2 buttons, to which I assigned id q2Yellow and q2Green
// const q2YellowBtn = document.querySelector("#q2Yellow");
// const q2GreenBtn = document.querySelector("#q2Green");

function changeColor(color){
    if(color == "yellow"){
        // console.log("pressed yellow")
        document.body.style.backgroundColor = "#ff7";
    }else{
        document.body.style.backgroundColor = "lightgreen";
    }
}



//////////////Solution 3//////////////////////
//Create  an  application  that  converts  Fahrenheit  temperatures  to  Celsius  temperatures  
//by  using  the prompt() and alert() methods
function startPrompt(){
    let fahr = prompt("Enter Fahrenheit temperature");

    alert(`Fahrenheit temperature is: ${fahr}\nCelsius temperature is: ${((Number(fahr)-32)*(5/9)).toFixed(2)}`);

}


//////////////Solution 4//////////////////////
//an input field to add to an array.
//button to add to array
//display button
//display the array
//display the most frequent element.
//isi pisi

const q4Array = [];

//q4AddBtn
const q4AddBtn = document.querySelector("#q4AddBtn");
//q4DisplayBtn
const q4DisplayBtn = document.querySelector("#q4DisplayBtn");
//arrayElement
const arrayElement = document.querySelector("#arrayElement");
//result4a
const result4a = document.querySelector("#result4a");
//result4b
const result4b = document.querySelector("#result4b");


q4AddBtn.addEventListener("click", (e)=>{
    q4Array.push(arrayElement.value);
    arrayElement.value = "";

})

q4DisplayBtn.addEventListener("click", (e)=>{
    result4a.innerHTML = "Display the array here: <br>" +q4Array.join(", ");

    result4b.innerHTML = "Display the result here: <br>"+mostFrequent(q4Array);

})

function mostFrequent(arr){
    let mostFrequent = arr[0];
    let mostFrequentCounter = 0;

    for(let ele of arr){
        let counter = 0;
        for(let ele2 of arr){
            if(ele == ele2){
                counter++;
            }
        }
        if(counter > mostFrequentCounter){
            mostFrequent = ele;
            mostFrequentCounter = counter;
        }
    }

    return `${mostFrequent} appears ${mostFrequentCounter} times.`;
}


//////////////Solution 5//////////////////////
//Create  a  mouse  rollover  effect  using  images  of  your  choice.  
//Use  onmouseover,  onmouseout, onmouseenter and onmouseleave effects.
const imgEvent = document.querySelector("#imgEvent");
const q5Div = document.querySelector(".question5")

imgEvent.addEventListener("mouseover", (e)=>{
    e.target.src="yls.jpg";
})

imgEvent.addEventListener("mouseout", (e)=>{
    e.target.src="pls.jpg";
})

q5Div.addEventListener("mouseenter", (e)=>{
    // console.log("mouse entered");
    e.target.style.backgroundImage = "url('sakuraWashington.jpg')";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.backgroundPosition = "center";
    e.target.style.backgroundSize = "100% 100%";
})

q5Div.addEventListener("mouseleave", (e)=>{
    e.target.style.backgroundImage = "url('nationalMallImg.jpg')";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.backgroundPosition = "center";
    e.target.style.backgroundSize = "100% 100%";
})

//////////////Solution 6//////////////////////
//selectBox
const selectBox = document.querySelector("#selectBox");
const newsBox = document.querySelector("#news");

let newsArr = [ "There were reports of 15 kids with covid. \n15!!!\nLet us pray to jesus",
                "Hamilton continues to be the shame of the whole country. \nThose are rookie numbers!",
                "Montreal keeps being awesome, if only they would stop speaking french. \nThat's so middle age if you ask me",
                "COVID is serious business, follow rules, otherwise your CERB is practically cut in half.",
                "That pipeline is just a dream at this point, why is it even news?"
]

selectBox.addEventListener("change", (e)=>{
    // console.log("changed");
    newsBox.innerHTML = e.target.options[e.target.options.selectedIndex].value + ":\n";
    newsBox.innerHTML += newsArr[e.target.options.selectedIndex];
})



//////////////Solution 7//////////////////////
//input id's are a, b, and c

const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const inputC = document.querySelector("#c");

let isAValid = true;
let isBValid = true;
let isCValid = true;

inputA.addEventListener("change", (e)=>{
    if(e.target.value == 0 || e.target.value < -99 || e.target.value > 99){
        e.target.style.borderColor = "red";
        isAValid = false;
    }else{
        e.target.style.borderColor = "green";
        isAValid = true;
    }
})

inputB.addEventListener("change", (e)=>{
    if(e.target.value < -99 || e.target.value > 99){
        e.target.style.borderColor = "red";
        isBValid = false;
    }else{
        e.target.style.borderColor = "green";
        isBValid = true;
    }
})

inputC.addEventListener("change", (e)=>{
    if(e.target.value < -99 || e.target.value > 99){
        e.target.style.borderColor = "red";
        isCValid = false;
    }else{
        e.target.style.borderColor = "green";
        isCValid = true;
    }
})

const calcRootBtn = document.querySelector("#calcRootBtn");
const q7Solution = document.querySelector("#soln");


calcRootBtn.addEventListener("click", (e)=>{
    q7Solution.innerHTML = "";
    if(isAValid && isBValid && isCValid){

    }else{
        if(!isAValid){
            q7Solution.innerHTML += `The value of "a": ${inputA.value} is invalid <br/>`;
        }
        if(!isBValid){
            q7Solution.innerHTML += `The value of "b": ${inputB.value} is invalid <br/>`;
        }
        if(!isCValid){
            q7Solution.innerHTML += `The value of "c": ${inputC.value} is invalid <br/>`;
        }
    }

})


