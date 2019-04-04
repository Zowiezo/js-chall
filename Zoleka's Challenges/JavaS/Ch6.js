function convertNumber(num) {
  var num = document.getElementById("conNum").value
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + 'hr' + ' ' + minutes + 'min'
};

console.log(convertNumber(65));
console.log(convertNumber(133));
console.log(convertNumber(1441));

/*  

I name my function convert number because its simple
and goes to the point. 

i used the math.floor function(find correct name) bcz
my formula is num / 60(the are 60mins in a hour)
and num % 60 because the left over(remainder) are
the mins left over.
math.floor means to round off to the nearst integer. 

*/