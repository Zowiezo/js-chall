function startWord() {
    var k = prompt("Insert Sentence"); //prompt shows the dialog box that wants user to input
    var z = k.startsWith('Java'); //it is case sensetive 
  }
  
  console.log(startWord("JavaScript"));
  console.log(startWord("Java"));
  console.log(startWord("JvaZoleka"));