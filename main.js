const formElm = document.querySelector('form')
const userINputElm = document.getElementById('luck input')
const luckNumberElm = document.querySelector('.lucky-number span')
const p1BtnElm = document.querySelector('.p1Btn')
const p2BtnElm = document.querySelector('.p2Btn')
const p1InputElm = document.querySelector('.p1')
const p2InputElm = document.querySelector('.p2')
const rBtnInputElm = document.querySelector('.rBtn')
const winnerElm = document.querySelector('.winner')

    let luckScore = 10
    let p1Value = 0
    let p2Value = 0
    let p1Turn = true
    let p2Turn = true
    let gameOver = false

    // luckyNumberElm.textContent = luckNumber

formElm.addEventListener('reset', function(evt) {
    evt.preventDefault()
     luckNumber = parseInt (userINputElm.value)
    luckNumberElm.textContent = luckScore

    userINputElm.value = ''
    
} ) 

p1BtnElm.addEventListener('click', function(evt){
    
    if(p1Turn && luckScore !== p1Value && luckScore !== p2Value){

        p1Value++
    
     p1Turn = false
     p2Turn = true
     p1InputElm.textContent =  p1Value

     p1BtnElm.setAttribute('disabled','disabled')
     p2BtnElm.removeAttribute('disabled')
    
    }

     if(p1Value === luckScore){
         gameOver = true
         winnerElm.textContent = 'p1 is winner'
     }
})


p2BtnElm.addEventListener('click', function(evt){
    if(p2Turn && luckScore !== p1Value && luckScore !== p2Value){

        p2Value++
    
    p2Turn = false
    p1Turn = true
    p2InputElm.textContent =  p2Value

    p2BtnElm.setAttribute('disabled','disabled')
    p1BtnElm.removeAttribute('disabled')    
   
 
    }
    if(p2Value === luckScore){
        gameOver = true
        winnerElm.textContent = 'p2 is winner'
    }
})
    