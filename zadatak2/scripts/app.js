// Pomoćna funkcija koja automatski pravi 8 redova sa po 10 sjedišta
function generisiSalu() {
    const redovi = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let sjedista = [];

    redovi.forEach(red => {
        for (let i = 1; i <= 10; i++) {
            // Nasumično ćemo staviti da je oko 30% sjedišta već "zauzeto" (crveno), ostala su slobodna (zeleno)
            // Ovo daje realističan izgled sali
            let statusSjedista = Math.random() < 0.3 ? 'zauzeto' : 'slobodno';
            sjedista.push({ red: red, broj: i, status: statusSjedista });
        }
    });
    return sjedista;
}

// Ovdje su svi tvoji filmovi iz film.html
const pocetniPodaci = {
    "projekcije": [
        { "film": "John Wick", "vrijeme": "18:00", "sjedista": generisiSalu() },
        { "film": "Mad Max", "vrijeme": "20:15", "sjedista": generisiSalu() },
        { "film": "Umri muški", "vrijeme": "22:30", "sjedista": generisiSalu() },
        { "film": "Avengers", "vrijeme": "17:00", "sjedista": generisiSalu() },
        { "film": "Brzi i žestoki", "vrijeme": "19:45", "sjedista": generisiSalu() },
        { "film": "Iskupljenje u Shawshanku", "vrijeme": "18:30", "sjedista": generisiSalu() },
        { "film": "Forrest Gump", "vrijeme": "21:00", "sjedista": generisiSalu() },
        { "film": "Kum", "vrijeme": "20:00", "sjedista": generisiSalu() },
        { "film": "Mamurluk", "vrijeme": "19:00", "sjedista": generisiSalu() },
        { "film": "Beskrajan dan", "vrijeme": "16:30", "sjedista": generisiSalu() },
        { "film": "Priča o igračkama", "vrijeme": "15:00", "sjedista": generisiSalu() },
        { "film": "Snježno kraljevstvo", "vrijeme": "17:15", "sjedista": generisiSalu() }
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    Kino.inicijalizuj("sala", pocetniPodaci);
});