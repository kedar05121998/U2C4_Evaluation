// write js code here corresponding to favourites.html

var favArr=JSON.parse(localStorage.getItem("favourites")) || []
//console.log(favArr)
displayFav(favArr)

function displayFav(data){
    data.forEach(function(el,index){

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
        td6.innerText="Delete";
        td6.setAttribute("class","deleteTxt");
        td6.style.color="red";
        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){
            fav_delete(el,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

    })

}

function fav_delete(el,index){
    favArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload()
}

