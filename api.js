async function submit(){

    var x=document.getElementById("country").value
    var request= new XMLHttpRequest();

    request.open("get","https://restcountries.com/v3.1/name/" +x)
    request.send();

    response=request.addEventListener("load",function(){

        var [data]=JSON.parse(this.response)

document.getElementById("name").innerHTML=data.name.common
document.getElementById("Capital").innerHTML=data.capital
document.getElementById("Region").innerHTML=data.region
document.getElementById("Sub-region").innerHTML=data.subregion
document.getElementById("Area").innerHTML=data.area
document.getElementById("Population").innerHTML=data.population
document.getElementById("flag").src=data.flags.svg
document.getElementById("independent").innerHTML=data.independent
document.getElementById("continents").innerHTML=data.continents
document.getElementById("borders").innerHTML=data.borders




    })
var z=document.getElementById("table")

z.style.opacity="1"
}




   

