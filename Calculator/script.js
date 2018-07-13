var previousResult = 0;

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


function inv(x)
  {
    var tmp = x**-(1);
    return tmp;
  }  

function fact(x)
  {
    if(x == 1 || x == 0)
      return 1;
    else
      return  x*fact(x-1);
  }

function solveInputField()
  {
    var tmp = document.getElementById("input-field").value;
    tmp = tmp.replace("sqrt","Math.sqrt");
    tmp = tmp.replace("ans",previousResult);
    tmp = tmp.replace("^","**");
    tmp = tmp.replace("tan","Math.tan");
    tmp = tmp.replace("e","Math.exp(1)");
    tmp = tmp.replace("log","Math.log10");
    tmp = tmp.replace("cos","Math.cos");
    tmp = tmp.replace("PI","Math.PI");
    tmp = tmp.replace("ln","Math.log");
    tmp = tmp.replace("sin","Math.sin");
    return tmp;
  }


//**********************Adding Event Listener to Buttons**************************************************

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

document.getElementById("inv").addEventListener("click",function(){
  writeInInputField(document.getElementById("inv").value+"(");
})

document.getElementById("x^y").addEventListener("click",function(){
  writeInInputField(document.getElementById("x^y").value);
})

document.getElementById("sqrt").addEventListener("click",function(){
  writeInInputField(document.getElementById("sqrt").value+"(");
})

document.getElementById("exp").addEventListener("click",function(){
  writeInInputField(document.getElementById("exp").value+"(");
})

document.getElementById("tan").addEventListener("click",function(){
  writeInInputField(document.getElementById("tan").value+"(");
})

document.getElementById("e").addEventListener("click",function(){
  writeInInputField(document.getElementById("e").value);
})

document.getElementById("log").addEventListener("click",function(){
  writeInInputField(document.getElementById("log").value+"(");
})

document.getElementById("cos").addEventListener("click",function(){
  writeInInputField(document.getElementById("cos").value+"(");
})

document.getElementById("pi").addEventListener("click",function(){
  writeInInputField(document.getElementById("pi").value);
})

document.getElementById("ln").addEventListener("click",function(){
  writeInInputField(document.getElementById("ln").value+"(");
})

document.getElementById("sin").addEventListener("click",function(){
  writeInInputField(document.getElementById("sin").value+"(");
})

document.getElementById("x!").addEventListener("click",function(){
  writeInInputField(document.getElementById("x!").value+"(");
})

document.getElementById("=").addEventListener("click",function(){
  var simplifiedExp = solveInputField();
  var Result = eval(simplifiedExp);
  document.getElementById("output-field").value = "      ANS :  " + Result;
  writeInInputField(document.getElementById("=").value);
  writeInInputField("ce");
  previousResult = Result
});

document.getElementById("ans").addEventListener("click",function(){
  writeInInputField(document.getElementById("ans").value);
});


document.getElementById("ce").addEventListener("click",function(){
  writeInInputField(document.getElementById("ce").value);
});

//********************************************************************************************