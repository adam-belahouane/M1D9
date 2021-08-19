const displayBingoNumbers = function(){
    let bingonumbersnode = document.getElementById("bingo-numbers")

    for(i = 1;i <= 76; i++){
        let newNumNode = document.createElement("div")
        newNumNode.innerText = i
        newNumNode.id = i
        newNumNode.classList.add("bNum")

        bingonumbersnode.appendChild(newNumNode)
    }
}
let arrayOfNums = []
const numberGenerator = function(){
    let num = Math.floor(Math.random()* 76 + 1)
    arrayOfNums.push(num)
    console.log(arrayOfNums)
    return num
}
const selectNum = function(eventData) {
    let newNum = numberGenerator()
    document.getElementById(newNum).classList.add("selected")


}
window.onload = function() {
    displayBingoNumbers()
    numberGenerator()
}