document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MÚSICA
    // ==========================
    const musica = document.getElementById("musica");
    const btnMusica = document.getElementById("btnMusica");

    if (musica && btnMusica) {

        window.addEventListener("load", () => {
            musica.play().catch(() => {
                console.log("Autoplay bloqueado");
            });
        });

        btnMusica.addEventListener("click", () => {
            if (musica.paused) {
                musica.play();
                btnMusica.innerHTML = "🔊 Música";
            } else {
                musica.pause();
                btnMusica.innerHTML = "🎵 Música";
            }
        });
    }

    // ==========================
    // WHATSAPP
    // ==========================
    const btnWhatsapp = document.getElementById("btnWhatsapp");

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {

            const mensaje = encodeURIComponent(
                "Hola, confirmo mi asistencia a los 15 años de Andrea Carolina."
            );

            window.open(
                `https://wa.me/573154358840?text=${mensaje}`,
                "_blank"
            );
        });
    }

    // ==========================
    // UBICACIÓN
    // ==========================
    const btnUbicacion = document.getElementById("btnUbicacion");

    if (btnUbicacion) {
        btnUbicacion.addEventListener("click", () => {
            window.open(
                "https://maps.google.com/?q=Cra.+39+%2331A-89,+Cartagena",
                "_blank"
            );
        });
    }

    // ==========================
    // CUENTA REGRESIVA
    // ==========================
    const contador = document.getElementById("contador");

    if (contador) {

        const fechaEvento = new Date("2026-07-31T20:00:00").getTime();

        setInterval(() => {

            const ahora = new Date().getTime();
            const diferencia = fechaEvento - ahora;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            contador.innerHTML = `⏳ ${dias} días y ${horas} horas`;

        }, 1000);
    }

    // ==========================
    // INVITADOS
    // ==========================
    const invitados = {
        "ABUE Y PA": 2,
        "FLIA ESPELETA QUINTANA": 4,
        "FLIA JAIME ESPELETA": 3,
        "TIA LILIA": 1,
        "TIA CARMEN": 10,
        "TIA SONIA": 1,
        "TIA YINA": 1,
        "YANDRI, MEMI, BIAN": 2,
        "DANEIBIS": 1,
        "ROGER Y ANGIE": 2,
        "EDILBERTO": 1,
        "ROBERTO Y ROCIO": 2,
        "MARIA TERESA": 1,
        "JUAN Y AMALIA": 2,
        "FELIX Y ADRIANA": 2,
        "GERALDINE": 1,
        "FLIA AHUMADA ESPITIA": 4,
        "JUAN Y MA OLGA": 2,
        "FLIA SANCHEZ MONTEVERDE": 4,
        "JORGE Y MARILYN": 2,
        "WILFER": 1,
        "SUSANA Y MARIANA": 2,
        "CARLOS ARTURO": 1,
        "JESSICA, REY Y LUISA": 3,
        "ANA ISABEL": 1,
        "JULIETA": 1,
        "SOFIA GARAVITO": 1,
        "SARA ANILLO": 1,
        "SARA MAZABUEL": 1,
        "LUISA": 1,
        "MARIANA LAMBIS": 1,
        "MARIANA CERRO": 1,
        "JHOSUA": 1,
        "JUAN CAMILO": 1,
        "ISABELLA Y ELIZABETH": 2,
        "SAUL": 1,
        "THIAGO": 1,
        "MA ISABEL": 1,
        "VALENTINA": 1,
        "ANA LUISA": 1,
        "SHARI": 1,
        "EVELYN": 1,
        "ESTEBAN": 1,
        "MAIC": 1,
        "MARIANGEL": 1,
        "FLIA DE LA CRUZ MOLINA": 4,
        "FLIA BALLESTAS BAENA": 4,
        "DANNA": 1,
        "ASHLY": 1,
        "VALERY": 1,
        "NATALIA": 1,
        "ISABEL": 1,
        "SOFIA": 1,
        "FELIPE": 1
    };

    const parametros = new URLSearchParams(window.location.search);

    const nombre = parametros.get("invitado") || "INVITADO ESPECIAL";

    const cupos = invitados[nombre] || 1;

    const nombreEl = document.getElementById("nombreInvitado");
    const cuposEl = document.getElementById("cuposInvitado");

    if (nombreEl) nombreEl.innerHTML = nombre.toUpperCase();
    if (cuposEl) cuposEl.innerHTML = `${cupos} PERSONA(S)`;

});