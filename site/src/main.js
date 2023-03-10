var removeItem = document.getElementsByClassName('item-btn-remove')

for (var index = 0; index < removeItem.length; index++) {
    var button = removeItem[index]
    button.addEventListener('click' , function() {
        console.log('clicked')
    }) 
    
}