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
    textDomanta.textContent = domande[cont]
let rise = document.getElementsByTagName("span");    
for(let i  = 0;i<4;i++){
    rise[i].textContent = risposte[0][i];
}
let risp = document.getElementsByName("risposta")
function quiz(){
  for(let i = 0;i<4;i++){
        if(risp[i].checked==true)
        {
            if(i==rispGu[cont])
            {
                console.log("yes")
               rise[i].style.color = "#00ff88";
            }
            else
            {
                console.log("no")
                rise[i].style.color = "red";
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
    if(cont<3){
        textDomanta.textContent = domande[cont]
        for(let i  = 0;i<4;i++)
            rise[i].textContent = risposte[cont][i];
    }
    else{
        alert("Finito QUIZ")
        console.log("Finito")
    }
}

