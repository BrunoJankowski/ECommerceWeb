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
    console.log("Hello worlds");
}
