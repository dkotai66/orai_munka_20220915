lista = [];

let szam = prompt("Adj meg egy számot: ")

function hozzaad(szam){
    if(szam<0) {
        console.log("Hiba")
    }
    else {
        lista.add(szam);
    }
}


let db= 0;

function atlag(lista){
    for(var i=0;i<lista.length;i++) {
        let atlag = (lista[i]+lista[i])/db;
    }
    
}
