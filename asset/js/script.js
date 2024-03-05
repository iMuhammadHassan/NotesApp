
const  container = document.querySelector(".container");
let createbtn = document.querySelector("#createbtn");

createbtn.addEventListener("click", ()=> {
    var noteItem = document.createElement("div");
    let noteParagraph = document.createElement("p");
    var noteImage = document.createElement("img");

    
    noteItem.classList.add("input-box");

    noteParagraph.setAttribute("contenteditable", "true");
    
    noteParagraph.classList.add("input-text");
    noteImage.classList.add("delete-image");

    noteImage.src = "./asset/Images/delete.png";


    noteItem.appendChild(noteParagraph);
    noteParagraph.appendChild(noteImage);
    noteParagraph.innerHTML+="Enter your content here..."

    container.appendChild(noteItem);

});


container.addEventListener("click",function(evt){
     if(evt.target.tagName==="IMG"){
        evt.target.parentElement.parentElement.remove();
     }
});









