// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myFun);

var match=JSON.parse(localStorage.getItem("schedule")) || [];

function myFun(){
    event.preventDefault();
    var objMatch={
        matchNo:masaiForm.matchNum.value,
        team1:masaiForm.teamA.value,
        team2:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchLoc:masaiForm.venue.value,
       
    };// console.log(objMatch)
   match.push(objMatch) 
   localStorage.setItem("schedule",JSON.stringify(match))
   window.location.href="matches.html"
}
