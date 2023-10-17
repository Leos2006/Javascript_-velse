
function endreTekst() {
    //henter ut verdien til elementet "tekstInput"
    const nyTekst = document.getElementById("tekstInput").value;
    //bytter ut verdien til elementet "utskiftbarTekst" til den ny teksten fra bruker.
    document.getElementById("utskiftbarTekst").innerHTML = nyTekst;
}

function endreBakgrunnsfarge() {
    const farger = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
    // henter ut et tall mellom 0-4 for å velge en tilfeldig farge fra listen
    const tilfeldigFarge = farger[Math.floor(Math.random() * farger.length)];
    //endrer bakgrunnsfargen til body-delen i HTML til den tilfeldige fargen
    document.body.style.backgroundColor = tilfeldigFarge;
}

function storreBilde(){
    var hoyde = document.getElementById("dyrebilde").height;
    var nyHoyde = hoyde + 10;
    //her må du legge til px for å forklare at høyden er målt i pixler
    document.getElementById("dyrebilde").style.height = nyHoyde + "px";
}

function mindreBilde(){
    var hoyde = document.getElementById("dyrebilde").height;
    var nyHoyde = hoyde - 10;
    //her må du legge til px for å forklare at høyden er målt i pixler
    document.getElementById("dyrebilde").style.height = nyHoyde + "px";
}
