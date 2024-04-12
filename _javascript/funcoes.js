function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function calc_total() {
    let idQtd = document.getElementById("cQtd");
    let qtd = parseInt(idQtd.value);
    let valorGoogleGlass = 1500;
    let qtdTotal = qtd * valorGoogleGlass;
    document.getElementById("cTot").value = qtdTotal;
}