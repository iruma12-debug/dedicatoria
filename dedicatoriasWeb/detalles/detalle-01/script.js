document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTOS
    // ==========================================

    const nombrePersona = document.getElementById("nombrePersona");
    const mensajePersona = document.getElementById("mensajePersona");

    const musicaDetalle = document.getElementById("musicaDetalle");
    const musicaBtn = document.getElementById("musicaBtn");
    const musicaIcono = document.getElementById("musicaIcono");
    const musicaTexto = document.getElementById("musicaTexto");

    const descargarBtn = document.getElementById("descargarBtn");
    const volverBtn = document.getElementById("volverBtn");

    const mensajeDescarga = document.getElementById("mensajeDescarga");
    const cerrarDescarga = document.getElementById("cerrarDescarga");

    const particulas = document.getElementById("particulas");


    // ==========================================
    // DATOS RECIBIDOS DESDE EL CATÁLOGO
    // ==========================================

    const parametros = new URLSearchParams(
        window.location.search
    );

    const nombre =
        parametros.get("nombre")?.trim() ||
        "Alguien especial";

    const mensaje =
        parametros.get("mensaje")?.trim() ||
        "Este detalle fue preparado especialmente para ti.";


    // ==========================================
    // MOSTRAR NOMBRE
    // ==========================================

    if (nombrePersona) {
        nombrePersona.textContent = nombre;
    }


    // ==========================================
    // ESCRIBIR MENSAJE
    // ==========================================

    if (mensajePersona) {

        mensajePersona.textContent = "";

        let posicion = 0;

        function escribirMensaje() {

            if (posicion < mensaje.length) {

                mensajePersona.textContent +=
                    mensaje.charAt(posicion);

                posicion++;

                setTimeout(escribirMensaje, 25);

            }
        }

        escribirMensaje();
    }


    // ==========================================
    // MÚSICA
    // ==========================================

    if (musicaDetalle) {

        musicaDetalle.volume = 0.75;
        musicaDetalle.loop = true;
    }


    // ==========================================
    // ACTUALIZAR BOTÓN DE MÚSICA
    // ==========================================

    function actualizarBotonMusica() {

        if (!musicaDetalle) {
            return;
        }

        if (musicaDetalle.paused) {

            if (musicaIcono) {
                musicaIcono.textContent = "♪";
            }

            if (musicaTexto) {
                musicaTexto.textContent = "Música";
            }

            if (musicaBtn) {
                musicaBtn.classList.remove("activo");
            }

        } else {

            if (musicaIcono) {
                musicaIcono.textContent = "Ⅱ";
            }

            if (musicaTexto) {
                musicaTexto.textContent = "Sonando";
            }

            if (musicaBtn) {
                musicaBtn.classList.add("activo");
            }
        }
    }


    // ==========================================
    // BOTÓN REPRODUCIR / PAUSAR
    // ==========================================

    if (musicaBtn && musicaDetalle) {

        musicaBtn.addEventListener("click", async () => {

            try {

                if (musicaDetalle.paused) {

                    await musicaDetalle.play();

                } else {

                    musicaDetalle.pause();

                }

                actualizarBotonMusica();

            } catch (error) {

                console.error(
                    "Error al reproducir la música:",
                    error
                );

                console.error(
                    "Archivo:",
                    musicaDetalle.currentSrc
                );
            }

        });
    }


    // ==========================================
    // EVENTOS DEL AUDIO
    // ==========================================

    if (musicaDetalle) {

        musicaDetalle.addEventListener(
            "play",
            actualizarBotonMusica
        );

        musicaDetalle.addEventListener(
            "pause",
            actualizarBotonMusica
        );

        musicaDetalle.addEventListener(
            "ended",
            actualizarBotonMusica
        );

        musicaDetalle.addEventListener(
            "loadeddata",
            () => {

                console.log(
                    "Audio cargado correctamente."
                );

                console.log(
                    "Archivo:",
                    musicaDetalle.currentSrc
                );

            }
        );

        musicaDetalle.addEventListener(
            "error",
            () => {

                console.error(
                    "NO SE PUDO CARGAR EL AUDIO."
                );

                console.error(
                    "Ruta:",
                    musicaDetalle.currentSrc
                );

            }
        );
    }


    // ==========================================
    // PARTÍCULAS
    // ==========================================

    if (particulas) {

        for (let i = 0; i < 25; i++) {

            const particula =
                document.createElement("span");

            particula.className = "particula";

            particula.style.left =
                Math.random() * 100 + "%";

            particula.style.animationDuration =
                8 + Math.random() * 8 + "s";

            particula.style.animationDelay =
                Math.random() * 8 + "s";

            const tamaño =
                1 + Math.random() * 3;

            particula.style.width =
                tamaño + "px";

            particula.style.height =
                tamaño + "px";

            particulas.appendChild(particula);
        }
    }


    // ==========================================
    // GUARDAR DETALLE
    // ==========================================

    if (descargarBtn) {

        descargarBtn.addEventListener(
            "click",
            () => {

                if (musicaDetalle) {
                    musicaDetalle.pause();
                }

                actualizarBotonMusica();

                setTimeout(() => {

                    window.print();

                }, 200);

                setTimeout(() => {

                    if (mensajeDescarga) {

                        mensajeDescarga.classList.add(
                            "mostrar"
                        );

                        mensajeDescarga.setAttribute(
                            "aria-hidden",
                            "false"
                        );
                    }

                }, 1000);

            }
        );
    }


    // ==========================================
    // CERRAR VENTANA
    // ==========================================

    function cerrarVentana() {

        if (!mensajeDescarga) {
            return;
        }

        mensajeDescarga.classList.remove(
            "mostrar"
        );

        mensajeDescarga.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    if (cerrarDescarga) {

        cerrarDescarga.addEventListener(
            "click",
            cerrarVentana
        );
    }


    // ==========================================
    // CERRAR HACIENDO CLIC AFUERA
    // ==========================================

    const ventanaOverlay =
        document.querySelector(".ventana-overlay");

    if (ventanaOverlay) {

        ventanaOverlay.addEventListener(
            "click",
            cerrarVentana
        );
    }


    // ==========================================
    // CERRAR CON ESC
    // ==========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                cerrarVentana();

            }

        }
    );


    // ==========================================
    // VOLVER
    // ==========================================

    if (volverBtn) {

        volverBtn.addEventListener(
            "click",
            () => {

                if (window.history.length > 1) {

                    window.history.back();

                } else {

                    window.location.href =
                        "../../index.html";

                }

            }
        );
    }


    // ==========================================
    // ESTADO INICIAL
    // ==========================================

    actualizarBotonMusica();


    console.log(
        "=================================="
    );

    console.log(
        "DETALLE 01 CARGADO"
    );

    console.log(
        "Nombre:",
        nombre
    );

    console.log(
        "Archivo de música:",
        musicaDetalle
            ? musicaDetalle.currentSrc
            : "No encontrado"
    );

    console.log(
        "=================================="
    );

});
