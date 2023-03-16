var itemButtonRemove = document.getElementsByClassName("btn")
var itemButtonPlus = document.getElementsByClassName("plus")
var itemButtonMinus = document.getElementsByClassName("minus")
var itemName = document.getElementsByClassName("name")
var itemPrice = document.getElementsByClassName("price")

var total = 0
var prices = []
var quantities = []

var item_names = localStorage.getItem('names')
var item_price = localStorage.getItem('prices')

var quantityItem = document.getElementsByClassName('quantity')



if(item_names !== null){
    item_names = item_names.split(',')
    item_price = item_price.split(',')

    for (var i = 0; i < itemName.length; i++) {
        
        if(item_names[i] != undefined){
            itemName[i].innerText = item_names[i]
            itemPrice[i].innerText = item_price[i]
        }
        else{
            itemButtonMinus[i].setAttribute('hidden', true)
            itemButtonPlus[i].setAttribute('hidden', true)
            itemButtonRemove[i].setAttribute('hidden', true)
            quantityItem[i].setAttribute('hidden', true)
        }
        
      }
    
    for (var i = 0; i < item_price.length; i++) {
        prices.push(item_price[i])
        quantities.push(quantityItem[i].value)
        total += parseFloat(prices[i] * quantities[i])
      }
}

console.log(item_names);
console.log(item_price);


document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2); //sets a p to total

for(var i = 0; i < itemButtonRemove.length; i++){
    var button_remove = itemButtonRemove[i]
    var button_plus = itemButtonPlus[i]
    var button_minus = itemButtonMinus[i]
    button_remove.setAttribute("data-index", i)
    button_plus.setAttribute("data-index", i)
    button_minus.setAttribute("data-index", i)

    button_remove.addEventListener("click", function(event){
        var buttonClicked = event.target
        var index = buttonClicked.getAttribute("data-index") // retrieve index from data attribute
        
        updateTotalRemove(index, prices, quantities)
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
    button_plus.addEventListener("click", function(event){
        var plus = event.target
        var index = plus.getAttribute("data-index") // retrieve index from data attribute
        
        updateTotalPlus(index, prices)
    })
    button_minus.addEventListener("click", function(event){
        var minus = event.target
        var index = minus.getAttribute("data-index") // retrieve index from data attribute
        
        updateTotalMinus(index, prices, minus)
    })
}


function updateTotalRemove (index, prices){
    var price = prices[index]
    var quantity = quantities[index]
    total -= parseFloat(price * quantity)

    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2) // updates total to 2nd number after . 
    console.log(price);
    console.log(total);
    checkTotal()

}

function updateTotalPlus (index, prices){
    var price = prices[index]
    total += parseFloat(price)

    var quantities_value = quantities[index]
    quantities_value++;
    quantities[index]++;
    quantityItem[index].value = quantities_value
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2) // updates total to 2nd number after . 

}


function updateTotalMinus (index, prices, buttonClicked){
    var price = prices[index]
    if(quantityItem[index].value > 0){
        total -= parseFloat(price)
        var quantities_value = quantities[index]
        quantities_value--;
        quantities[index]--;
        quantityItem[index].value = quantities_value
        document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2) // updates total to 2nd number after . 

    }
    else{
        console.log("ITS 0");
    }
    checkTotal()

}

function checkTotal() {
    console.log(total);
    var check_button = document.getElementsByClassName('checkout')
    if(total <= 0){
        check_button[0].setAttribute('disabled', true)
    }
    
}