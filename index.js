
let buttons = document.querySelectorAll("button");
let rad_or_deg = document.getElementById("rad_or_deg");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");

let expression = ""
let output = document.getElementById("output");
rad_or_deg.addEventListener("click",()=>{
    rad_or_deg.innerHTML==="rad"?rad_or_deg.innerHTML="Deg":rad_or_deg.innerHTML="rad";
})


buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerText==="sin"){
            output.innerText+="sin("
            expression+="Math.sin("
     
        }
        else if(button.innerText==="tan"){
            output.innerText += "tan("
            expression+="Math.cos("

        }
        else if(button.innerText=="rad"| button.innerText=="Deg"){
            {}
        }
        else if( button.innerText==="cos"){
            output.innerText += "cos("

        }
        else if(button.innerText==="2nd"){
            sin.innerText = "Sin-1 "
            cos.innerText = "cos-1"
            tan.innerText = "tan-1"

        }
        else if(button.innerText==="AC"){
            output.innerText="";
        }
        else if(button.innerText===")"){
            output.innerText+=")";
            expression+=")";
        }
        else if(button.innerText==="<-"){
            output.innerText= output.innerText.slice(0,-1);
            expression =expression.replace(expression[expression.length-1],"");

        }
        
        else if(button.innerText==="="){
            output.innerText=Math.round(eval(expression));
            expression="";
        }

        else{
            output.innerText+=button.innerText;
            expression+=button.innerText;
        }
        
    })
})

