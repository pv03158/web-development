console.log("HelloWorld");

var operand = [];

function writeInInputField(x)
  {
    var tmp = document.getElementById("input-field").value ;
    var writingText = tmp + x;
    if(x === "ce")
      {
        document.getElementById("input-field").value="";
      }
    else
       {
         document.getElementById("input-field").value = writingText;
       }
  }

function concatenateNumber(x,y)
  {
    var tmp;
    x = String(x);
    y = String(y);
    tmp = x+y;
    tmp = Number(tmp);
    return tmp;
  }

function segregateInputField()
 {
   var floatingPointCaught = 0;
   operand = [];
   var tmp = 0;
   var holdingString = document.getElementById("input-field").value;
  for(var i = 0;i < holdingString.length; i++)
    {
      if(holdingString[i] == '+' || holdingString[i] == '-' || holdingString[i] == '*' || holdingString[i] == '/' || holdingString[i] == '%' || holdingString[i] == '('  || holdingString[i] == ')')
        {
          if(holdingString[i-1] != '+' && holdingString[i-1] != '-' && holdingString[i-1] != '*' && holdingString[i-1] != '/' && holdingString[i-1] != '%' && holdingString[i-1] != '('  && holdingString[i-1] != ')')
            {
              operand.push(tmp);
            }
          tmp = 0;
          floatingPointCaught = 0;
          operand.push(holdingString[i]);
        }

      else if(holdingString[i] == '=')
        {
          if(holdingString[i-1] != '+' && holdingString[i-1] != '-' && holdingString[i-1] != '*' && holdingString[i-1] != '/' && holdingString[i-1] != '%' && holdingString[i-1] != '('  && holdingString[i-1] != ')')
            {
              operand.push(tmp);
            }
          tmp = 0;
          floatingPointCaught = 0;
          console.log(operand);
        }

      else
         {
           if(floatingPointCaught != 0)
             {
               tmp = concatenateNumber(tmp,"0."+holdingString[i]);
               floatingPointCaught = 0;
             }
           else
            {
              tmp = concatenateNumber(tmp,holdingString[i]);
            }

           if(holdingString[i] == '.')
              {
                floatingPointCaught++;
              }
         }

    }
 }


document.getElementById("rad").addEventListener("click",function(){
  writeInInputField(document.getElementById("rad").value);
});

document.getElementById("7").addEventListener("click",function(){
  writeInInputField(document.getElementById("7").value);
});

document.getElementById(".").addEventListener("click",function(){
  writeInInputField(document.getElementById(".").value);
});

document.getElementById("8").addEventListener("click",function(){
  writeInInputField(document.getElementById("8").value);
});

document.getElementById("9").addEventListener("click",function(){
  writeInInputField(document.getElementById("9").value);
});

document.getElementById("6").addEventListener("click",function(){
  writeInInputField(document.getElementById("6").value);
});

document.getElementById("5").addEventListener("click",function(){
  writeInInputField(document.getElementById("5").value);
});

document.getElementById("4").addEventListener("click",function(){
  writeInInputField(document.getElementById("4").value);
});

document.getElementById("3").addEventListener("click",function(){
  writeInInputField(document.getElementById("3").value);
});

document.getElementById("2").addEventListener("click",function(){
  writeInInputField(document.getElementById("2").value);
});

document.getElementById("1").addEventListener("click",function(){
  writeInInputField(document.getElementById("1").value);
});

document.getElementById("0").addEventListener("click",function(){
  writeInInputField(document.getElementById("0").value);
});

document.getElementById("+").addEventListener("click",function(){
  writeInInputField(document.getElementById("+").value);
});

document.getElementById("-").addEventListener("click",function(){
  writeInInputField(document.getElementById("-").value);
});

document.getElementById("*").addEventListener("click",function(){
  writeInInputField(document.getElementById("*").value);
});

document.getElementById("/").addEventListener("click",function(){
  writeInInputField(document.getElementById("/").value);
});

document.getElementById("%").addEventListener("click",function(){
  writeInInputField(document.getElementById("%").value);
});

document.getElementById("(").addEventListener("click",function(){
  writeInInputField(document.getElementById("(").value);
});

document.getElementById(")").addEventListener("click",function(){
  writeInInputField(document.getElementById(")").value);
});

document.getElementById("=").addEventListener("click",function(){
  document.getElementById("output-field").value = "      ANS :  " + eval(document.getElementById("input-field").value);
  writeInInputField(document.getElementById("=").value);
  segregateInputField();
  writeInInputField("ce");
});

document.getElementById("ans").addEventListener("click",function(){
  writeInInputField(document.getElementById("ans").value);
});


document.getElementById("ce").addEventListener("click",function(){
  writeInInputField(document.getElementById("ce").value);
});
