
function generisiSalu() {
    const redovi = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let sjedista = [];

    redovi.forEach(red => {
        for (let i = 1; i <= 10; i++) {
            
            let statusSjedista = Math.random() < 0.3 ? 'zauzeto' : 'slobodno';
            sjedista.push({ red: red, broj: i, status: statusSjedista });
        }
    });
    return sjedista;
}

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