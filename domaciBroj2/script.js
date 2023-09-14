$(document).hover(function () {
    $(".fejdIn").show(1100);
})

$(".formaNewsletter").hover(function () {
    $(".poljeZaUnos").show(1300);
})

var x;

function posalji() {
    x = document.getElementById("poljeZaUnos").value;
    if (x == '') {
        alert("Morate uneti email adresu!");
        return;
    }
    if (! x.includes("@")) 
        alert("Email mora da sadrzi @");
    
    if (! x.includes(".")) 
        alert("Email mora da sadrzi .");
    
    for (let i = 0; i < x.length - 1; i++) {
        if (x[i] == '.' & x[i + 1] == '.') {
            alert("Pogresno unet mejl");
            return;
        }
    }

    var et = x.indexOf("@");
    var tacka = x.lastIndexOf(".");
    if (et > 1 & tacka > et + 2 & x[x.length - 1] != '.') {
        alert("Hvala na dostavljenoj e-mail adresi!");

    } else {
        alert("Pogresno unet mejl");
    }
}


$(function () {
    var gore = $('.vratiGore');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            gore.addClass('aktivan1');
        } else {
            gore.removeClass('aktivan1');
        }
    });
});

$(".vratiGore").click(function () {
    $(document).scrollTop(0);
})


const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("aktivan");
    navBar.classList.toggle("aktivan");
})

document.querySelectorAll(".klasa").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("aktivan");
    navBar.classList.remove("aktivan");
}))














function zatvoriKarticu() {
    if (document.getElementById('radio1')) {
        let poljaKart = document.getElementsByName('poljeZaKarticu');
        for (i = 0; i < poljaKart.length; i ++) {
            let prom = poljaKart[i];
            prom.disabled = true;
        }
    }
}

function otvoriKarticu() {
    if (document.getElementById('radio2')) {
        let poljaKart = document.getElementsByName('poljeZaKarticu');
        for (i = 0; i < poljaKart.length; i ++) {
            let prom = poljaKart[i];
            prom.disabled = false;
        }
    }
}

$("#dugme-naruči").click(function () {

    uslov = document.getElementById("uslovi");
    if (!uslov.checked) {
        alert("Morate prihvatiti uslove korišćenja!")
        return;
    }

    tekstNaruceno = "Naručili ste:\n";
    naruceno = document.querySelectorAll(".cekirani-proizvod input");
    var brojac = 0;
    for (i = 0; i < naruceno.length; i ++) {

        if (naruceno[i].checked) {
            brojac = brojac + 1;
            tekstNaruceno += (brojac) + ". " + naruceno[i].value + "\n";
        }
    }
    tekstNaruceno += '\n';

    popunjenoIme = document.getElementById("ime-id").value;
    popunjenoPrezime = document.getElementById("prezime-id").value;
    tekstImePrezime = "Ime i prezime: " + popunjenoIme + " " + popunjenoPrezime + '\n';

    popunjenoEmail = document.getElementById("email-id").value;
    tekstEmail = "E-mail: " + popunjenoEmail + '\n';

    popunjenoTelefon = document.getElementById("brtel-id").value;
    tekstTelefon = "Telefon: " + popunjenoTelefon + '\n';

    popunjenoAdresa = document.getElementById("adresa-id").value;
    popunjenoStan = document.getElementById("stan-id").value;
    popunjenoGrad = document.getElementById("grad-id").value;
    tekstAdresa = "Adresa\nUlica: " + popunjenoAdresa + "\nStan: " + popunjenoStan + '\nGrad: ' + popunjenoGrad + '\n';

    drzava = document.getElementsByClassName("drzave");
    tekstDrzava = "Drzava: ";
    for (i = 0; i < 5; i ++) {
        if (drzava[i].selected == true) {
            tekstDrzava += drzava[i].value + '\n';
        }
    }

    popunjenoKomentar = document.getElementById("komentar").value;
    if (popunjenoKomentar != "") {
        tekstArea = "Komentar: " + popunjenoKomentar + '\n';
    } else {
        tekstArea = "";
    }

    let promenjiva = document.getElementsByName("dostava");
    if (promenjiva[0].checked) {
        if (brojac == 0) {
            alert("Odaberite proizvode koje želite da naručite!");
        } else if (popunjenoIme != "" && popunjenoPrezime != "" && popunjenoEmail != "" && popunjenoTelefon != "" && popunjenoStan != "" && popunjenoAdresa != "" && popunjenoGrad != "") {
          var samoSlova = /^[A-Za-z\s]*$/;
    if (!popunjenoIme.match(samoSlova)) {
        alert('Molimo Vas upišite svoje ime.');
        return;
    }
    if (!popunjenoPrezime.match(samoSlova)) {
        alert('Molimo Vas upišite svoje prezime.');
        return;
    }
    var samoBrojevi = /^[0-9]*$/;
    if (!popunjenoTelefon.match(samoBrojevi)) {
        alert('Molimo Vas upišite svoj broj telefona.');
        return;
    } 
            tekstPopUp = tekstNaruceno + tekstImePrezime + tekstEmail + tekstTelefon + tekstAdresa + tekstDrzava + tekstArea + "\n\nHVALA NA PORUDŽBINI!";
            alert(tekstPopUp);
        } else {
            alert("Molimo Vas da popunite sva bolja da biste naručili!");
        }
    }
    if (promenjiva[1].checked) {
        popunjenoImeKartica = document.getElementById("imekart-id").value;
        popunjenoBrojKartice = document.getElementById("brkart-id").value;
        popunjenoDatum = document.getElementById("datum-id").value;
        popunjenoCVV = document.getElementById("cvv-id").value;


        if (brojac == 0) {
            alert("Odaberite proizvode koje želite da naručite!");
        } else if (popunjenoIme != "" && popunjenoPrezime != "" && popunjenoEmail != "" && popunjenoTelefon != "" && popunjenoStan != "" && popunjenoAdresa != "" && popunjenoGrad != "" && popunjenoImeKartica != "" && popunjenoBrojKartice != "" && popunjenoDatum != "" && popunjenoCVV != "") {
          var samoSlova = /^[A-Za-z\s]*$/;
    if (!popunjenoIme.match(samoSlova)) {
        alert('Molimo Vas upišite svoje ime.');
        return;
    }
    if (!popunjenoPrezime.match(samoSlova)) {
        alert('Molimo Vas upišite svoje prezime.');
        return;
    }
    var samoBrojevi = /^[0-9]*$/;
    if (!popunjenoTelefon.match(samoBrojevi)) {
        alert('Molimo Vas upišite svoj broj telefona.');
        return;
    }   
          tekstPopUp = tekstNaruceno + tekstImePrezime + tekstEmail + tekstTelefon + tekstAdresa + tekstDrzava + tekstArea + "\n\nHVALA NA PORUDŽBINI!";
            alert(tekstPopUp);
        } else {
            alert("Molimo Vas da popunite sva bolja da biste naručili!");
        }
    }


})

$("#cekirani-proizvod1").hover(function () {
    $("#pokazateljPr1").show(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod2").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").show(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod3").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").show(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod4").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").show(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod5").hover(function () {
    $("#pokazateljPr1 ").hide(0);
    $("#pokazateljPr2 ").hide(0);
    $("#pokazateljPr3 ").hide(0);
    $("#pokazateljPr4 ").hide(0);
    $("#pokazateljPr5 ").show(0);
    $("#pokazateljPr6 ").hide(0);
    $("#pokazateljPr7 ").hide(0);
    $("#pokazateljPr8 ").hide(0);
})
$("#cekirani-proizvod6").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").show(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod7").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").show(0);
    $("#pokazateljPr8").hide(0);
})
$("#cekirani-proizvod8").hover(function () {
    $("#pokazateljPr1").hide(0);
    $("#pokazateljPr2").hide(0);
    $("#pokazateljPr3").hide(0);
    $("#pokazateljPr4").hide(0);
    $("#pokazateljPr5").hide(0);
    $("#pokazateljPr6").hide(0);
    $("#pokazateljPr7").hide(0);
    $("#pokazateljPr8").show(0);
})

vratiDatum();

function vratiDatum() {
    var date = new Date();
    const datum = date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[3];
    document.getElementById("copyright-datum").innerText = "Copyright © " + datum + ". Powered by Jovana Sara Anđela, Beograd";
}

