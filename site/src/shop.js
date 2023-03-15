var itemButtonAdd = document.getElementsByClassName("add-btn")
var itemName = document.getElementsByClassName('item-name')
var itemPrice = document.getElementsByClassName('item-price')

var names = []
var prices = []
console.log(itemButtonAdd);
console.log(itemName);


for(var i = 0; i < itemButtonAdd.length; i++){
    var button_add = itemButtonAdd[i]

    button_add.setAttribute("data-index", i)

    button_add.addEventListener("click", function(event){
        var buttonClicked = event.target
        var index = buttonClicked.getAttribute('data-index')
        var item_name = itemName[index].innerText
        var item_price = itemPrice[index].innerText
        buttonClicked.setAttribute('value', '    Added    ')
        buttonClicked.setAttribute('disabled', true)
        names.push(item_name)
        prices.push(item_price)
        console.log(names);
        console.log(prices);
        localStorage.setItem('names', names)
        localStorage.setItem('prices', prices)
    })
}
