var itemButton = document.getElementsByClassName("btn")
var priceItem = document.getElementsByClassName('price')
var quantityItem = document.getElementsByClassName('quantity')
var prices = []
var quantities = []
var total = 0
for (var i = 0; i < priceItem.length; i++) {
    prices.push(priceItem[i].innerHTML)
    quantities.push(quantityItem[i].value)
    total += parseFloat(prices[i] * quantities[i])
  }

console.log(quantities);
console.log(prices);
console.log(total);

document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2); //sets a p to total

for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    button.setAttribute("data-index", i)
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        var index = buttonClicked.getAttribute("data-index") // retrieve index from data attribute
        console.log(index);
        updateTotal(index, prices)
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}

function updateTotal (index, prices){
    var price = prices[index]
    total -= parseFloat(price)
    document.getElementById("total").innerHTML = "Total: $ " + total.toFixed(2) // updates total to 2nd number after . 
    console.log(price);
    console.log(total);

}
