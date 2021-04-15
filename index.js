console.log("This is Index.js");
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add=function(book) {
    console.log("Hi")
    tableBody=document.getElementById("tableBody")
    let uiString=`<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += uiString;                  
}

Display.prototype.validate=function () {
    if(book.name.length<2 || book.author.length<2){
        return false;
    }else
    return true;
    
}

Display.prototype.show= function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML=`
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message</strong> ${displaymessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`

    setTimeout(()=>{
        message.innerHTML=" ";
    },2000);
}

Display.prototype.clear=function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let Engineering = document.getElementById('Engineering');
    let PhD = document.getElementById('PhD');
    let exams = document.getElementById('exams');
    let type;

    if (Engineering.checked) {
        type = Engineering.value;
    } else if (PhD.checked) {
        type = PhD.value;
    } else if (exams.checked) {
        type = exams.value;
    }

    let book = new Book(name, author, type)
    e.preventDefault();
    let display = new Display();
    
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('Success','Successfuly addd book');

    }else{
        display.show("Error!!"," Sorry you cannot add this book")
    }


}