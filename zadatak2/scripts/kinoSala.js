const Kino = {
    kontejner: null,
    podaci: null,
    trenutniIndex: 0,

    inicijalizuj: function(idKontejnera, pocetniPodaci) {
        this.kontejner = document.getElementById(idKontejnera);
        
        // Koristimo novi naziv u memoriji da pregazimo stare greške
        const sacuvaniPodaci = localStorage.getItem('kinoProjekcijeV2');
        
        if (sacuvaniPodaci) {
            this.podaci = JSON.parse(sacuvaniPodaci);
        } else {
            this.podaci = pocetniPodaci;
            this.sacuvajUPamcenje();
        }

        this.trenutniIndex = 0;
        this.iscrtaj();
    },

    sacuvajUPamcenje: function() {
        localStorage.setItem('kinoProjekcijeV2', JSON.stringify(this.podaci));
    },

    iscrtaj: function() {
        this.kontejner.innerHTML = "";
        const projekcija = this.podaci.projekcije[this.trenutniIndex];

        this.kontejner.innerHTML = `
            <div class="info-projekcije" style="text-align:center; margin-bottom: 20px;">
                <h2>${projekcija.film}</h2>
                <p>Vrijeme projekcije: <strong>${projekcija.vrijeme}</strong></p>
            </div>
            <div class="platno" style="background:#555; color:white; text-align:center; padding:10px; margin:0 auto 30px auto; max-width:400px; font-weight:bold; border-radius:5px;">PLATNO</div>
            <div class="sala-grid" id="mreza-sjedista"></div>
        `;

        const mrezaSjedista = document.getElementById("mreza-sjedista");
        let trenutniRed = "";

        projekcija.sjedista.forEach((sjediste) => {
            // Dodavanje slova za red
            if (sjediste.red !== trenutniRed) {
                trenutniRed = sjediste.red;
                let oznaka = document.createElement("div");
                oznaka.className = "oznaka-reda";
                oznaka.innerText = trenutniRed;
                mrezaSjedista.appendChild(oznaka);
            }

            // Dodavanje kvadratića za sjedište
            let div = document.createElement("div");
            div.className = `sjediste ${sjediste.status}`;

            // KLIK: Logika za rezervaciju i ODrezervaciju
            div.addEventListener("click", () => {
                if (sjediste.status === "slobodno") {
                    sjediste.status = "rezervisano";
                    this.sacuvajUPamcenje();
                    this.iscrtaj(); 
                } else if (sjediste.status === "rezervisano") {
                    // Vraćanje iz rezervisano u slobodno
                    sjediste.status = "slobodno";
                    this.sacuvajUPamcenje();
                    this.iscrtaj();
                }
                // Ako je "zauzeto" (crveno), klik neće raditi ništa
            });

            mrezaSjedista.appendChild(div);
        });

        this.dodajNavigaciju();
    },

    dodajNavigaciju: function() {
        let nav = document.createElement("div");
        nav.style.display = "flex";
        nav.style.justifyContent = "center";
        nav.style.gap = "20px";
        nav.style.marginTop = "30px";

        let btnNazad = document.createElement("button");
        btnNazad.innerText = "Prethodna projekcija";
        btnNazad.disabled = this.trenutniIndex === 0;
        btnNazad.style.padding = "10px";
        btnNazad.onclick = () => { this.trenutniIndex--; this.iscrtaj(); };

        let btnNaprijed = document.createElement("button");
        btnNaprijed.innerText = "Sljedeća projekcija";
        btnNaprijed.disabled = this.trenutniIndex === this.podaci.projekcije.length - 1;
        btnNaprijed.style.padding = "10px";
        btnNaprijed.onclick = () => { this.trenutniIndex++; this.iscrtaj(); };

        nav.appendChild(btnNazad);
        nav.appendChild(btnNaprijed);
        this.kontejner.appendChild(nav);
    }
};