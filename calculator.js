
alert("Welcome to Joaqui's Calculator!")

let op = false;
function setValue(val, type=Number)
{
  if(type===Number)
  {
    document.querySelector(".inp").value+=val;
    op=false;
  }
  if(type==="operator" && op===false)
  {
    document.querySelector(".inp").value+=val;
    op=true;
  }
}
function calculate()
{
  let data = document.querySelector(".inp").value;
  let answer = eval(data);
  document.querySelector(".inp").value=answer;
}
function backSpace()
{
  let data=document.querySelector(".inp").value;
  let newData = data.substring(0,data.length-1);
  document.querySelector(".inp").value=newData;
}
function clearAll()
{
  document.querySelector(".inp").value="";
}
function squreRoot()
{
  let data = document.querySelector(".inp").value;
  let answer = Math.sqrt(data);
  document.querySelector(".inp").value=answer;
}

