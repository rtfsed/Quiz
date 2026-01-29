let domande = [
    "PUPUPU?",
    "Quanto fa 5+3",
    "Capitale d'Italia?"
];
let risposte = [
    ["Yes","no","No","yes"],
    ["5","6","7","8"],
    ["Roma","Cuneo","Torino","Limone"]
]
let rispGu = [2,3,0]
let cont = 0;
let textDomanta = document.getElementById("domanda")
    textDomanta.textContent = domande[0]
let rise = document.getElementsByTagName("span");    
for(let i  = 0;i<4;i++){
    rise[i].textContent = risposte[0][i];
}

function quiz(){

    let risp = document.getElementsByName("risposta")
    

    for(let i = 0;i<4;i++){
        if(risp[i].checked==true)
        {
            if(i==rispGu[cont])
            {
                console.log("yes")
                document.getElementById(i).style.color = "green";
            }
            else
            {
                console.log("no")
                document.getElementById(i).style.color = "red";
                
            }
                risp[i].checked=false
        }
    }
    /*
    cont++
    if(cont<3){
    textDomanta.textContent = domande[cont]
    for(let i  = 0;i<4;i++){
        rise[i].textContent = risposte[cont][i];
    }
    }
    else{
        console.log("Finito")
    }
    */
   
}
function next(){
    for(let i  = 0;i<4;i++){
        rise[i].style.color = "black";
    }
    cont++
    if(cont<3){
    textDomanta.textContent = domande[cont]
    for(let i  = 0;i<4;i++){
        rise[i].textContent = risposte[cont][i];
    }
    }
    else{
        alert("Finito QUIZ")
        console.log("Finito")
    }
}