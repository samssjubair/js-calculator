let displayValue=document.getElementById('display').value;
document.getElementById('cal-buttons').addEventListener('click',function(event){
    var resDisplay=document.getElementById('display').value ;
    let target=event.target.innerText;
    let prev=resDisplay[resDisplay.length-1];
    
    if(target==="="){
        let newResult= eval(resDisplay);
        
        document.getElementById('display').value=newResult;
    }
    else if(event.target.innerText==="C"){
    
        document.getElementById('display').value="";
    }
    else if(event.target.id=="root"){
        let sqroot=Math.sqrt(resDisplay);
        
        document.getElementById('display').value=sqroot;
       
    }
    else if(event.target.id=="square"){
        let sq=resDisplay*resDisplay;
        
        document.getElementById('display').value=sq;
       
    }
    else{
        if(prev=="+"||prev=="-"||prev==""||prev=="*"||prev=="/"){   
            if(target=="+"||target=="-"||target=="*"||target=="/"||target=="="){
                document.getElementById('display').value=resDisplay;
            }
            else{
                resDisplay+=event.target.innerText;
                document.getElementById('display').value=resDisplay;
            }
        }
        else{
            resDisplay+=event.target.innerText;
            document.getElementById('display').value=resDisplay;
        }
            
    }
    
});
