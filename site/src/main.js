var itemButtonRemove = document.getElementsByClassName("btn")
var itemButtonSubmit = document.getElementsByClassName("submit")
var priceItem = document.getElementsByClassName('price')
var quantityItem = document.getElementsByClassName('quantity')

var total = 0
var prices = []
var quantities = []

for (var i = 0; i < priceItem.length; i++) {
    prices.push(priceItem[i].innerHTML)
    quantities.push(quantityItem[i].value)
    total += parseFloat(prices[i] * quantities[i])
  }

console.log(quantities);
console.log(prices);
console.log(total);

document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2); //sets a p to total

for(var i = 0; i < itemButtonRemove.length; i++){
    var button_remove = itemButtonRemove[i]
    button_remove.setAttribute("data-index", i)
    button_remove.addEventListener("click", function(event){
        var buttonClicked = event.target
        var index = buttonClicked.getAttribute("data-index") // retrieve index from data attribute
        console.log(index);
        updateTotalRemove(index, prices)
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}

function updateTotalRemove (index, prices){
    var price = prices[index]
    var quantity = quantities[index]
    total -= parseFloat(price * quantity)

    document.getElementById("total").innerHTML = "Total: $ " + total.toFixed(2) // updates total to 2nd number after . 
    console.log(price);
    console.log(total);

}
