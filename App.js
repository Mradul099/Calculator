var buttons=document.getElementsByClassName('button');
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;



for(var i=0;i<buttons.length;i++){
    
    buttons[i].addEventListener('click',function(){
          var value= this.getAttribute('data-value');
          if(display.innerText=="" && value=='-'){
              display.innerText= "-";
          }
        else  if(value=='+'){
              operator='+';
               operand1=parseFloat(display.textContent);
               display.innerText="";
        }
      else  if(value=='-'){
            operator='-';
             operand1=parseFloat(display.textContent);
             display.innerText="";
      }


     else if(value=='*'){
        operator='*';
         operand1=parseFloat(display.textContent);
         display.innerText="";
  }
         
     else if(value=='/'){
        operator='/';
         operand1=parseFloat(display.textContent);
         display.innerText="";
  }
          else if(value=='='){
            operand2=parseFloat(display.textContent);  
             var ans=eval(operand1 + " "  +operator + " " +operand2); 
             display.innerText=ans;
          }
          else if(value=='AC'){
              display.innerText="";
          }
          else if(value=='%'){
            operator='%';
            operand1=parseFloat(display.textContent);
            // operand2=100
            var ans=operand1/100;
            display.innerText=ans;
            // display.innerText="";
          }
          else if(value=='+/-'){
              var x=parseFloat(display.textContent);
              x=-x;
              display.innerText=x;
          }
          else{
              display.innerText+=value;
          }
    });


}
