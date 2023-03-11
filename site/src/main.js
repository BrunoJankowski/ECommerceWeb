var itemButton = document.getElementsByClassName("btn")
for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotal()
    })
}

const updateTotal = () => {
    var total = 0.0
    var priceItem = document.getElementsByClassName('price')
    for(var i = 0; i < priceItem.length; i++){
        var price = priceItem[i]
        console.log(price)
    }


}
