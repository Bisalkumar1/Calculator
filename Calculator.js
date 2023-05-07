let display=document.querySelector("#display");

document.querySelectorAll('button').forEach(element => {
  element.addEventListener("click", function(){
let value =this.textContent;

if(value=="AC"){
display.innerHTML="";
}
else if(value=="DE"){
display.innerHTML=display.innerHTML.slice(0,-1);
}
else if(value=="="){
if(display.innerHTML==""){
alert("please input the data first");
}
else{
display.innerHTML=eval(display.innerHTML);
}
}
else{
display.innerHTML+=value;
}
  })
});
