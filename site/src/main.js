var itemButton = document.getElementsByClassName("btn")
for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotal(i)
    })
}

function updateTotal (index){
    console.log(index);
    var priceItem = document.getElementsByClassName('price')
    var price = priceItem[index]
    console.log(price.innerText);
        


}
