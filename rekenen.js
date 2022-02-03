let invoer1 = document.getElementById("invoer1"); 
let invoer2 = document.getElementById("invoer2"); 
let uitkomst = document.getElementById("uitkomst");
let operator = document.getElementById("operator"); 
let berekenen = document.getElementById("berekenen")

berekenen.addEventListener("click", () => {
    if(operator.value === "+") {
        uitkomst.innerHTML = Number(invoer1.value) + Number(invoer2.value)
    }
    else if(operator.value === "-") {
        uitkomst.innerHTML = Number(invoer1.value) - Number(invoer2.value)
    }
    else if(operator.value === "x" || operator.value === "*") {
        uitkomst.innerHTML = Number(invoer1.value) * Number(invoer2.value)
    }
    else if(operator.value === ":" || operator.value === "/" ) {
        uitkomst.innerHTML = Number(invoer1.value) / Number(invoer2.value)
    } 
    else { 
        alert("Vul cijfers in en x, +, -, : in")
    }
})

let wissen = document.getElementById("wis");

wissen.addEventListener("click", () => { 
    invoer1.value = ""
    invoer2.value = ""
    uitkomst.innerHTML = ""
    operator.value = ""
}) 

let lengte = document.getElementById("lengte");
let breedte = document.getElementById("breedte");
let oppervlakteUitkomstKnop = document.getElementById("oppervlakteUitkomst")
let oppervlakte = document.getElementById("oppervlakte");

oppervlakteUitkomstKnop.addEventListener("click", () => {

    oppervlakte.innerHTML = "Oppervlakte: " + lengte.value * breedte.value + "m2"
})


let wissenOppervlakte = document.getElementById("wisOppervlakte");

wissenOppervlakte.addEventListener("click", () => {

    oppervlakte.innerHTML = "";
    lengte.value = "";
    breedte.value = "";
})

let wisOppervlakteCirkel = document.getElementById("wisOppervlakteCirkel");

wisOppervlakteCirkel.addEventListener("click", () => {

    cirkel.innerHTML = "";
    straal.value = "";
})

let straal = document.getElementById("straal");
let oppervlakteCirkel = document.getElementById("oppervlakteCirkel");
let cirkel = document.getElementById("cirkel");

oppervlakteCirkel.addEventListener("click", () => {

    cirkel.innerHTML = (Number(straal.value) * Number(straal.value))  *3.14
})

let omtrekCirkel = document.getElementById("omtrekCirkel");

omtrekCirkel.addEventListener("click", () => {

    cirkel.innerHTML = (Number(straal.value) + Number(straal.value)) * 3.14
})



//bart_klumperman@live.nl