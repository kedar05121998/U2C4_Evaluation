// write js code here corresponding to matches.html

var match=JSON.parse(localStorage.getItem("schedule")) || [];
//console.log(match)
displayMatch(match)



//document.querySelector("#filterVenue").addEventListener("click",filterSpecial)

function filterSpecial () {
    var fil=document.querySelector("#filterVenue").value;
    var select=match.filter(function (el) {
       return el.matchLoc==fil
    
    //  return el.matchLoc==fil;
     
    });
    
   displayMatch(select)
 //console.log(select)
}



var favArr=JSON.parse(localStorage.getItem("favourites")) || []

function displayMatch(data){

    data.forEach(function(el){

        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=el.matchNo

        var td2=document.createElement("td")
        td2.innerText=el.team1

        var td3=document.createElement("td")
        td3.innerText=el.team2

        var td4=document.createElement("td")
        td4.innerText=el.matchDate

        var td5=document.createElement("td")
        td5.innerText=el.matchLoc

        var td6=document.createElement("td")
         td6.innerText="favourites"
         td6.style.color="green"
         td6.style.cursor="pointer"

         td6.addEventListener("click",function(){
           gotoFav(el)
         })
tr.append(td1,td2,td3,td4,td5,td6)
//console.log(tr)
document.querySelector("tbody").appendChild(tr)

        })
}

function gotoFav(el){
favArr.push(el)

localStorage.setItem("favourites",JSON.stringify(favArr))
}