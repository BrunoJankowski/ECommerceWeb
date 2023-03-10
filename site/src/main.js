var removeItem = document.getElementsByClassName('item-btn-remove')
console.log(removeItem);

console.log(removeItem[1]);
for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i]
    button.addEventListener('click' , function() {
        console.log('button')
    }) 
    
}