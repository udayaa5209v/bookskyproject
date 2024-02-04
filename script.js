//selecting popup box, popup overlay, button 

var overlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbtn = document.getElementById("add-popup-button")

popupbtn.addEventListener("click", function(){
    overlay.style.display="block"
    popupbox.style.display="block"
});

//selecting cancel button

var cancelbtn = document.getElementById("cancel-popup")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container, book-title-input, book-author-input, add-pop, book-description
//creating book container

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var title = document.getElementById("book-title-input")
var author = document.getElementById("book-author-input")
var discription = document.getElementById("book-description")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${discription.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

//deleting the container

function del(event){
    event.target.parentElement.remove();
}