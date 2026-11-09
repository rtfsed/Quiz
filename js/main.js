
let cont = 0;

cont = sessionStorage.getItem("cont")!=null?sessionStorage.getItem("cont"):0

let textDomanta = document.getElementById("domanda")
    textDomanta.textContent = db[cont].domanda
let rise = document.getElementsByTagName("span");    
for(let i  = 0;i<4;i++){
    rise[i].textContent = db[cont].risposte[i];
}
let risp = document.getElementsByName("risposta")
function quiz(){
  for(let i = 0;i<4;i++){
        if(risp[i].checked==true)
        {
            if(i==db[cont].coretta)
            {
                console.log("yes")
               rise[i].style.color = "#00ff88";
            }
            else
            {
                console.log("no")
                rise[i].style.color = "red";
                rise[db[cont].coretta].style.color = "#00ff88";
            }
                  
        }
    }

}
function next(){
    for(let i  = 0;i<4;i++){
        rise[i].style.color = "black";
        risp[i].checked=false
    }
    cont++
    sessionStorage.setItem("cont", cont)
    if(cont<db.length){
        textDomanta.textContent = db[cont].domanda
        for(let i  = 0;i<4;i++)
            rise[i].textContent = db[cont].risposte[i];
    }
    else{
        alert("Finito QUIZ")
        sessionStorage.setItem("cont",0)
        console.log("Finito")
    }
}

