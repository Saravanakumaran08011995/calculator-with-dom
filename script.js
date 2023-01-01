const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.append(container);

const content= document.createElement('div');
content.setAttribute('id', 'content-box');
container.append(content);

const header= document.createElement('h1');
header.setAttribute('id', 'title');
header.textContent = 'Calculator';
content.append(header)


const result = document.createElement('div');
result.setAttribute('id', 'result-box');
container.append(result);

const screen = document.createElement('input');
screen.setAttribute('id', 'result');
screen.setAttribute('type', 'text');
screen.setAttribute('placeholder', '0');
result.append(screen);
 
const button = document.createElement('div');
 button.setAttribute('id', 'button-box');
 container.append(button);

const number = document.createElement('div');
 number.setAttribute('id', 'numbers');
button.append(number);

const btnclear = document.createElement('button');
btnclear.setAttribute('id', 'clear');
btnclear.setAttribute('onclick', 'Clear()');
btnclear.textContent= "Clear";

const btnback = document.createElement('button');
btnback.setAttribute('onclick', 'back()');
btnback.textContent= "Back";

const btnmod = document.createElement('button');
btnmod.setAttribute('onclick', 'numeric("%")');
btnmod.textContent= "%";

const btndiv = document.createElement('button');
btndiv.setAttribute('onclick', 'numeric("/")');
btndiv.textContent= "/";

const btnseven = document.createElement('button');
btnseven.setAttribute('onclick', 'numeric("7")');
btnseven.textContent= "7";

const btneight = document.createElement('button');
btneight.setAttribute('onclick', 'numeric("8")');
btneight.textContent= "8";

  const btnnine = document.createElement('button');
  btnnine.setAttribute('onclick', "numeric('9')");
  btnnine.textContent= "9";

  const btnmul = document.createElement('button');
  btnmul.setAttribute('onclick', 'numeric("*")');
  btnmul.textContent= "*";
  
  const btnfour = document.createElement('button');
btnfour.setAttribute('onclick', 'numeric("4")');
btnfour.textContent= "4";

const btnfive = document.createElement('button');
btnfive.setAttribute('onclick', 'numeric("5")');
btnfive.textContent= "5";

  const btnsix = document.createElement('button');
btnsix.setAttribute('onclick', 'numeric("6")');
btnsix.textContent= "6";

  const btnsub = document.createElement('button');
  btnsub.setAttribute('id', 'subtract');
  btnsub.setAttribute('onclick', 'numeric("-")');
  btnsub.textContent= "-";
  
  const btnone = document.createElement('button');
  btnone.setAttribute('id', '1');
  btnone.setAttribute('onclick', 'numeric("1")');
  btnone.textContent= "1";

const btntwo = document.createElement('button');
btntwo.setAttribute('id', '2');
btntwo.setAttribute('onclick', 'numeric("2")');
btntwo.textContent= "2";

  const btnthree = document.createElement('button');
  btnthree.setAttribute('id', '3');
  btnthree.setAttribute('onclick', 'numeric("3")');
  btnthree.textContent= "3";

  const btnadd = document.createElement('button');
  btnadd.setAttribute('id', 'add');
  btnadd.setAttribute('onclick', 'numeric("+")');
  btnadd.textContent= "+";

  const btnzero = document.createElement('button');
  btnzero.setAttribute('onclick', 'numeric("0")');
btnzero.textContent= "0";

const btnddzero = document.createElement('button');
btnddzero.setAttribute('onclick', 'numeric("00")');
btnddzero.textContent= "00";

  const btndot = document.createElement('button');
  btndot.setAttribute('onclick', 'numeric(".")');
  btndot.textContent= ".";

  const btnequal = document.createElement('button');
  btnequal.setAttribute('id', 'equal');
  btnequal.setAttribute('onclick', 'equal()');
  btnequal.textContent= "=";
 
  number.append(btnclear,btnback,btnmod,btndiv,btnseven,btneight,btnnine,btnmul,btnfour,btnfive,btnsix);
 
  number.append(btnsub,btnone,btntwo,btnthree,btnadd,btnzero,btnddzero,btndot,btnequal)

  const answer =document.getElementById("result")

 function numeric(x){
    answer.value =   answer.value + x
 }
  function Clear(){
      answer.value =  ""
  }
  function back(){
      answer.value = answer.value.slice(0,-1);
  }
  function equal(){
    try{
      answer.value = eval(answer.value)
    }
    catch(error){
          alert('Please enter a valid number')
    }
  }
