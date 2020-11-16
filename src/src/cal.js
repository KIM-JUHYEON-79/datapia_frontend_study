
window.addEventListener("load", function(){
 var number1 = document.getElementById("number1");
 var number2 = document.getElementById("number2");
 const btnad = document.getElementById("btnad");
 var number3 = document.getElementById("number3");

 var number4 = document.getElementById("number4");
 var number5 = document.getElementById("number5");
 const btnmi = document.getElementById("btnmi");
 var number6 = document.getElementById("number6");

 btnad.onclick = function() {
   var x = parseInt(number1.value);
   var y = parseInt(number2.value);

   number3.value = x+y;
 };

 btnmi.onclick = function(){
  var x = parseInt(number4.value);
  var y = parseInt(number5.value);

  number6.value = x-y;
};

});