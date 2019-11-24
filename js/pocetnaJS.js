function startujVreme() {
    var d = new Date();
    var sati = d.getHours();
    var minuti = d.getMinutes();
    var sekunde = d.getSeconds();
    var satiIspis;
    var minutiIspis;
    var sekundeIspis;

    if (sati < 10)
        satiIspis = sati;
    else
        satiIspis = sati;

    if (minuti < 10)
        minutiIspis = "0" + minuti;
    else
        minutiIspis = minuti;

    if (sekunde < 10)
        sekundeIspis = "0" + sekunde;
    else
        sekundeIspis = sekunde;

    document.getElementById("vreme").innerHTML = satiIspis + ":" + minutiIspis + ":" + sekundeIspis;

    
}

function rotirajSliku() {
    
}

function glavnaFunkcija() {
    setInterval("startujVreme()", 100);


}

