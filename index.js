let computerChoiceEl=document.getElementById('computer-choice')

let yourChoiceEl=document.getElementById('your-choice')

let resultEl=document.getElementById('result')


let choices=["Rock","Paper","Scissors"]
let choiceNum

let computerChoice
let yourChoice


//nodelist to array
let buttons = Array.from(document.querySelectorAll('button'))


buttons.forEach(button=>{
    button.addEventListener('click',function(){
        
        choiceNum=Math.floor(Math.random()*3)

        computerChoice=choices[choiceNum]

        computerChoiceEl.innerText=`Computer's Choice: ${computerChoice}`
        
        yourChoice=choices[buttons.indexOf(button)]

        yourChoiceEl.innerText=`Your Choice: ${yourChoice}`

        checkForWin(computerChoice,yourChoice)
    })
})


function checkForWin(computerChoice,yourChoice)
{
    
    //Draw
    if(computerChoice===yourChoice)
    {
        resultEl.innerText="Result: It's a Draw!"
        return
    }


    //Paper vs Rock
    if(computerChoice==="Paper" && yourChoice==="Rock")
    {
        resultEl.innerText="Result: Computer wins!"
        return
    }
    if(computerChoice==="Rock" && yourChoice==="Paper")
    {
        resultEl.innerText="Result: You win!"
        return
    }


    //Scissors vs Paper
    if(computerChoice==="Scissors" && yourChoice==="Paper")
    {
        resultEl.innerText="Result: Computer wins!"
        return
    }
    if(computerChoice==="Paper" && yourChoice==="Scissors")
    {
        resultEl.innerText="Result: You win!"
        return
    }


    //Rock vs Scissors
    if(computerChoice==="Rock" && yourChoice==="Scissors")
    {
        resultEl.innerText="Result: Computer wins!"
        return
    }
    if(computerChoice==="Scissors" && yourChoice==="Rock")
    {
        resultEl.innerText="Result: You win!"
        return
    }
}


