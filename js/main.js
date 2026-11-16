

$("body").append(
    $("<h1>").text("Quiz Show"),
    $("<h1>").text("00:00:00").attr("id","timer"),

    $("<div>").addClass("box-domanda").append(
        $("<h2>").attr("id", "domanda")
    ),

    $("<div>").addClass("risposte").append(
        $("<label>").addClass("opzione").append(
            $("<span>"),
            $("<input>").attr({
                id: "n1",
                type: "radio",
                name: "risposta"
            })
        ),
        $("<label>").addClass("opzione").append(
            $("<span>"),
            $("<input>").attr({
                id: "n2",
                type: "radio",
                name: "risposta"
            })
        ),
        $("<label>").addClass("opzione").append(
            $("<span>"),
            $("<input>").attr({
                id: "n3",
                type: "radio",
                name: "risposta"
            })
        ),
        $("<label>").addClass("opzione").append(
            $("<span>"),
            $("<input>").attr({
                id: "n4",
                type: "radio",
                name: "risposta"
            })
        )
    ),

    $("<br>"),

    $("<button>")
        .attr("id", "con")
        .text("Conferma")
        .on("click", quiz),

    $("<button>")
        .attr("id","nex")
        .text("NEXT")
        .on("click", next)
);
$("#nex").css("display","none")


let cont = sessionStorage.getItem("cont")!=null?sessionStorage.getItem("cont"):0;
let punti = sessionStorage.getItem("punti")!=null?sessionStorage.getItem("punti"):0;
let sec = sessionStorage.getItem("sec")!=null?sessionStorage.getItem("sec"):0;
let interval = null;

let tim = $("#timer")
let textDomanta = $("#domanda")
    textDomanta.text(db[cont].domanda)
let rise = $("span");    
$(rise).each(function(i){
    $(this).text(db[cont].risposte[i])
})
let risp = $("input[name='risposta']")

interval = setInterval(function() {
        sec++;
        sessionStorage.setItem("sec", sec);
        updateTimer();
      }, 1000);


function updateTimer() {
      let hours = Math.floor(sec / 3600);
      let minutes = Math.floor((sec % 3600) / 60);
      let secs = sec % 60;

      tim.text(
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0")
      );
}


function quiz(){
    $("#con").css("display","none")
    $("#nex").css("display","block")
    $(risp).each(function (i) {
        if(risp[i].checked==true)
        {
            disabileOprion(true)
            if(i==db[cont].coretta)
            {
               rise[i].style.color = "#00ff88";
               punti++;
               sessionStorage.setItem("punti",punti);
            }
            else
            {
                rise[i].style.color = "red";
                rise[db[cont].coretta].style.color = "#00ff88";
            }
                  
        }
    })
  

}
function disabileOprion(m){
   $(risp).each(function(){
        $(this).attr("disabled",m)
   })
}
function next(){
    $("#con").css("display","block")
    $("#nex").css("display","none")
    disabileOprion(false);
    cont++
    sessionStorage.setItem("cont", cont)
    if(cont<db.length){
        textDomanta.text(db[cont].domanda)
        $(rise).each(function(i){
            $(this).text(db[cont].risposte[i])
             $(this).css("color","black");
            risp[i].checked=false
        })
    }
    else{
        alert("Finito QUIZ")
        sessionStorage.setItem("cont",0)
        clearInterval(interval);
        interval = null;
        sessionStorage.setItem("sec",0)
        alert("Risposte correte "+punti+" su "+db.length)
        alert("Finito in "+tim.text())
        window.location.reload();
        sessionStorage.setItem("punti",0)
        console.log("Finito")
    }
}


