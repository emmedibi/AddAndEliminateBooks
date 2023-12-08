// Initializing variables
// Array for all the values from the form
const bookData = [];
for(let i = 0; i < 10; i++) {
  bookData[i] = [];
  for(let j = 0; j < 2; j++) {
    bookData[i][j] = "";
  }
}
// Other variables
let sumBruto = 0;
let sumTotal = 0;
let budget
let count = 0;

// program
window.addEventListener("load", () => {
  
  // Get the form elements
  const form = document.getElementById("addBook");
  const table = document.getElementById("bookTable");
  var tbl = document.getElementById('bookTable');
  var tblbdy = document.getElementById('tableBody');
  var bruto = document.getElementById("sumBruto");
  var total = document.getElementById("sumTotal");
  var budget = document.getElementById("firstBudget");
  var brutoParagraph = document.createTextNode("");
  var totalParagraph = document.createTextNode("");
  var budgetText = document.createTextNode("");

  function setFirstBudget(firstBudget){
    budgetText.textContent = firstBudget;
    budget.appendChild(budgetText);
  }
  
  // FUNCTION: obtain the data from the forms and put them in the bookData array
  function checkData() {
    console.log("Dati: " + form.children.price.value);
    console.log("Dati testuali: " + form.children.title.value);
    // Extract the values
    price = form.children.price.value;
    title = form.children.title.value;
    bookData[count][0] = title;
    bookData[count][1] =price;
    console.log(bookData);
  }

  function showData() {
    var tblrw = document.createElement('tr');
    console.log("count nel loop: " + count);
    var tbltd = document.createElement('td');
    var tbldata = document.createTextNode(bookData[count][0]);
    tbltd.appendChild(tbldata);
    tblrw.appendChild(tbltd);
    var tbltd = document.createElement('td');
    var tbldata = document.createTextNode(bookData[count][1]);
    tbltd.appendChild(tbldata);
    tblrw.appendChild(tbltd);

    var tbltd = document.createElement('td');
    var newButton = document.createElement('button');
    newButton.id = count; // need unique Ids!
    newButton.innerText = "LETTO";
    tbltd.appendChild(newButton);
    tblrw.appendChild(tbltd);
    tblbdy.appendChild(tblrw);
    tbl.appendChild(tblbdy);
    count ++;
    console.log("count: " + count);
  }

  function uploadTheTotalAndBruto() {
    sumTotal = sumTotal + parseInt(bookData[count-1][1]);
    console.log("Sumtotal: " + sumTotal)
    totalParagraph.textContent = sumTotal;
    total.appendChild(totalParagraph);
    sumBruto = sumBruto + parseInt(bookData[count-1][1]);
    console.log("SumBruto: " + sumBruto);
    brutoParagraph.textContent = sumBruto;
    bruto.appendChild(brutoParagraph);
  }

  function uploadBruto() {
    brutoParagraph.textContent = sumBruto;
    bruto.appendChild(brutoParagraph);
  }

  let firstBudget = prompt("Starting Budget");
  setFirstBudget(firstBudget);
  
  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkData();
    showData();
    uploadTheTotalAndBruto();
   
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
      button.addEventListener("click", function(event) {
        console.log(bookData.toString());
        var index = button.id;
        console.log("Bruto:" + sumBruto);
        console.log("Prezzo:" + bookData[index][1]);
        console.log("Indice bottone: " + index);
        sumBruto = sumBruto - parseInt(bookData[index][1]);
        console.log("SumBruto post sottrazione: " + sumBruto);
        console.log("You clicked a button");
        event.stopImmediatePropagation();
        uploadBruto(index);
      }, {once : true});
    })

  });


});