let displayValue=document.getElementById('display').value;
document.getElementById('cal-buttons').addEventListener('click',function(event){
    var resDisplay=document.getElementById('display').value ;
    console.log(event.target.innerText);
    if(event.target.innerText==="="){
        let newResult= eval(resDisplay);
        
        document.getElementById('display').value=newResult;
    }
    else if(event.target.innerText==="C"){
        
        
        document.getElementById('display').value="";
    }
    else{
        resDisplay+=event.target.innerText;
        document.getElementById('display').value=resDisplay;    
    }
    
});
