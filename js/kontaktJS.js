function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var poruka = document.getElementById('message').value;
    var tipVozila = document.getElementById('tipVozila').value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    console.log(name.length)
    if (name.length == 0) {
        alert('Niste uneli ime!');
        return false;
    }
    if (tipVozila == "izaberi") {
        alert('Niste izabrali tip vozila!');
        return false;
    }

    if (poruka.length == 0) {
        alert('Niste uneli poruku!');
        return false;
    }

    if (!inputText.value.match(mailformat)) {
        alert('Neispravan format e-maila!')
        return false;
    }

    alert('Poruka uspesno poslata');
    return true;
}