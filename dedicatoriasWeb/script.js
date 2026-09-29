// ============================================
// DETALLES DEL CORAZÓN
// By Iru Ventxs
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------
    // DATOS DE LOS 20 DETALLES
    // --------------------------------------------

    const detalles = {
        1: {
            categoria: "Carta especial",
            titulo: "Una carta para ti",
            subtitulo: "Hay algo que quiero decirte",
            descripcion: "Un pequeño espacio para escribir aquello que llevas dentro."
        },

        2: {
            categoria: "Para alguien especial",
            titulo: "Para alguien especial",
            subtitulo: "Porque tú lo mereces",
            descripcion: "Un detalle creado especialmente para esa persona que significa mucho."
        },

        3: {
            categoria: "Pequeño detalle",
            titulo: "Un pequeño detalle",
            subtitulo: "Pero hecho con mucho cariño",
            descripcion: "A veces los detalles más sencillos son los que más significan."
        },

        4: {
            categoria: "Solo para ti",
            titulo: "Solo para ti",
            subtitulo: "Este momento es tuyo",
            descripcion: "Un espacio privado para dedicar unas palabras especiales."
        },

        5: {
            categoria: "Pensamientos",
            titulo: "Pensando en ti",
            subtitulo: "Hay personas que siempre están presentes",
            descripcion: "Un detalle para esa persona que aparece constantemente en tus pensamientos."
        },

        6: {
            categoria: "Bajo las estrellas",
            titulo: "Bajo las estrellas",
            subtitulo: "Un momento para recordar",
            descripcion: "Un detalle inspirado en esos momentos que parecen detener el tiempo."
        },

        7: {
            categoria: "Algo especial",
            titulo: "Eres especial",
            subtitulo: "Y quería que lo supieras",
            descripcion: "Porque algunas personas simplemente tienen un lugar diferente en nuestra vida."
        },

        8: {
            categoria: "Una sonrisa",
            titulo: "Para hacerte sonreír",
            subtitulo: "Solo necesito unos segundos de tu atención",
            descripcion: "Un pequeño detalle pensado para regalarte un momento bonito."
        },

        9: {
            categoria: "Desde el corazón",
            titulo: "Desde el corazón",
            subtitulo: "Sin filtros, sin complicaciones",
            descripcion: "Palabras sinceras escritas desde lo más profundo."
        },

        10: {
            categoria: "Con cariño",
            titulo: "Para ti, con cariño",
            subtitulo: "Porque quería dedicarte algo",
            descripcion: "Un detalle sencillo, elegante y completamente personal."
        },

        11: {
            categoria: "Tengo algo que decirte",
            titulo: "Tengo algo que decirte",
            subtitulo: "Solo tienes que abrirlo",
            descripcion: "Quizás estas palabras sean justo las que necesitabas leer."
        },

        12: {
            categoria: "Un momento",
            titulo: "Un momento para ti",
            subtitulo: "Detente un instante",
            descripcion: "Deja todo por un momento y disfruta de estas palabras."
        },

        13: {
            categoria: "Siempre tú",
            titulo: "Siempre tú",
            subtitulo: "Entre tantas personas",
            descripcion: "Hay alguien que sigue destacando por encima de todos."
        },

        14: {
            categoria: "Sorpresa",
            titulo: "Una sorpresa para ti",
            subtitulo: "No mires hacia otro lado",
            descripcion: "Un pequeño detalle que estaba esperando el momento adecuado."
        },

        15: {
            categoria: "Algo bonito",
            titulo: "Algo bonito para ti",
            subtitulo: "Porque sí",
            descripcion: "No siempre hace falta una razón para tener un bonito detalle."
        },

        16: {
            categoria: "Abre este detalle",
            titulo: "Abre este detalle",
            subtitulo: "Confía en mí",
            descripcion: "Lo que encontrarás aquí fue preparado especialmente para ti."
        },

        17: {
            categoria: "Alguien increíble",
            titulo: "Para alguien increíble",
            subtitulo: "Esto es para ti",
            descripcion: "Un detalle para reconocer lo especial que puede ser una persona."
        },

        18: {
            categoria: "Una confesión",
            titulo: "Solo quería decirte...",
            subtitulo: "Antes de que cierres esto",
            descripcion: "Hay palabras que merecen ser dichas aunque sea una sola vez."
        },

        19: {
            categoria: "Inesperado",
            titulo: "Un detalle inesperado",
            subtitulo: "No estabas esperando esto",
            descripcion: "Una pequeña sorpresa preparada especialmente para este momento."
        },

        20: {
            categoria: "Hecho para ti",
            titulo: "Hecho para ti",
            subtitulo: "Desde el primer detalle hasta el último",
            descripcion: "Una experiencia creada para que puedas expresar exactamente lo que sientes."
        }
    };


    // --------------------------------------------
    // MÚSICAS DISPONIBLES
    // --------------------------------------------
    // Para agregar otra canción, simplemente añade
    // otro objeto dentro de este arreglo.
    //
    // El archivo debe estar dentro de:
    // DedicatoriasWeb/audio/
    // --------------------------------------------

    const musicas = [
        {
            nombre: "Amapolas - Leo Rizzi",
            archivo: "audio/amapolas-leo-rizzi-oficial.mp3"
        }
    ];


    // --------------------------------------------
    // CREAR MODAL
    // --------------------------------------------

    const modal = document.createElement("div");

    modal.className = "detail-modal";

    modal.innerHTML = `
        <div class="modal-overlay"></div>

        <div class="modal-window">

            <button
                class="modal-close"
                type="button"
                aria-label="Cerrar"
            >
                ×
            </button>

            <div class="modal-top-line"></div>

            <div class="modal-content">

                <div class="modal-category"></div>

                <div class="modal-number"></div>

                <h2 class="modal-title"></h2>

                <p class="modal-subtitle"></p>

                <div class="modal-divider"></div>

                <p class="modal-description"></p>


                <!-- MÚSICA -->

                <div class="form-group">

                    <label for="musicaSeleccionada">
                        Elige una música
                    </label>

                    <select id="musicaSeleccionada">
                    </select>

                </div>


                <!-- NOMBRE -->

                <div class="form-group">

                    <label for="nombrePersona">
                        ¿Para quién es este detalle?
                    </label>

                    <input
                        type="text"
                        id="nombrePersona"
                        maxlength="40"
                        placeholder="Escribe su nombre..."
                        autocomplete="off"
                    >

                </div>


                <!-- MENSAJE -->

                <div class="form-group">

                    <div class="message-label">

                        <label for="mensajePersona">
                            Escribe tu mensaje
                        </label>

                        <span id="contadorCaracteres">
                            0 / 2000
                        </span>

                    </div>

                    <textarea
                        id="mensajePersona"
                        maxlength="2000"
                        placeholder="Escribe aquí lo que quieres decir..."
                    ></textarea>

                </div>


                <!-- VISTA PREVIA -->

                <div class="preview-box">

                    <span class="preview-label">
                        VISTA PREVIA
                    </span>

                    <p class="preview-name">
                        Tu persona especial
                    </p>

                    <p class="preview-message">
                        Tu mensaje aparecerá aquí...
                    </p>

                </div>


                <!-- CREAR -->

                <button
                    class="create-detail-button"
                    type="button"
                    id="crearDetalleBtn"
                >
                    <span>Crear mi detalle</span>
                    <strong>→</strong>
                </button>


                <p class="modal-footer-text">
                    Hecho con cuidado por
                    <strong>Iru Ventxs</strong>
                </p>

            </div>

        </div>
    `;

    document.body.appendChild(modal);


    // --------------------------------------------
    // ELEMENTOS DEL MODAL
    // --------------------------------------------

    const overlay =
        modal.querySelector(".modal-overlay");

    const closeButton =
        modal.querySelector(".modal-close");

    const categoryElement =
        modal.querySelector(".modal-category");

    const numberElement =
        modal.querySelector(".modal-number");

    const titleElement =
        modal.querySelector(".modal-title");

    const subtitleElement =
        modal.querySelector(".modal-subtitle");

    const descriptionElement =
        modal.querySelector(".modal-description");

    const musicSelect =
        modal.querySelector("#musicaSeleccionada");

    const nameInput =
        modal.querySelector("#nombrePersona");

    const messageInput =
        modal.querySelector("#mensajePersona");

    const characterCounter =
        modal.querySelector("#contadorCaracteres");

    const previewName =
        modal.querySelector(".preview-name");

    const previewMessage =
        modal.querySelector(".preview-message");

    const createButton =
        modal.querySelector("#crearDetalleBtn");


    let detalleActual = 1;


    // --------------------------------------------
    // CARGAR MÚSICAS EN EL SELECTOR
    // --------------------------------------------

    function cargarMusicas() {

        musicSelect.innerHTML = "";

        if (musicas.length === 0) {

            const opcion =
                document.createElement("option");

            opcion.value = "";

            opcion.textContent =
                "No hay músicas disponibles";

            opcion.disabled = true;

            opcion.selected = true;

            musicSelect.appendChild(opcion);

            return;
        }


        musicas.forEach(function (musica, index) {

            const opcion =
                document.createElement("option");

            opcion.value = index;

            opcion.textContent =
                musica.nombre;

            musicSelect.appendChild(opcion);

        });

    }


    cargarMusicas();


    // --------------------------------------------
    // ABRIR DETALLE
    // --------------------------------------------

    window.abrirDetalle = function (numero) {

        if (!detalles[numero]) {

            console.warn(
                "No existe el detalle número:",
                numero
            );

            return;
        }


        detalleActual = numero;

        const detalle =
            detalles[numero];


        categoryElement.textContent =
            detalle.categoria;


        numberElement.textContent =
            String(numero).padStart(2, "0");


        titleElement.textContent =
            detalle.titulo;


        subtitleElement.textContent =
            detalle.subtitulo;


        descriptionElement.textContent =
            detalle.descripcion;


        // Reiniciar formulario

        nameInput.value = "";

        messageInput.value = "";


        previewName.textContent =
            "Tu persona especial";


        previewMessage.textContent =
            "Tu mensaje aparecerá aquí...";


        characterCounter.textContent =
            "0 / 500";


        // Seleccionar primera música

        if (musicas.length > 0) {
            musicSelect.value = "0";
        }


        modal.classList.add("active");

        document.body.classList.add("modal-open");


        setTimeout(function () {

            nameInput.focus();

        }, 300);

    };


    // --------------------------------------------
    // CERRAR MODAL
    // --------------------------------------------

    function cerrarModal() {

        modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    window.cerrarModal =
        cerrarModal;


    closeButton.addEventListener(
        "click",
        cerrarModal
    );


    overlay.addEventListener(
        "click",
        cerrarModal
    );


    // --------------------------------------------
    // ESC PARA CERRAR
    // --------------------------------------------

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                cerrarModal();

            }

        }
    );


    // --------------------------------------------
    // NOMBRE EN VISTA PREVIA
    // --------------------------------------------

    nameInput.addEventListener(
        "input",
        function () {

            const nombre =
                nameInput.value.trim();


            if (nombre === "") {

                previewName.textContent =
                    "Tu persona especial";

            } else {

                previewName.textContent =
                    nombre;

            }

        }
    );


    // --------------------------------------------
    // MENSAJE EN VISTA PREVIA
    // --------------------------------------------

    messageInput.addEventListener(
        "input",
        function () {

            const mensaje =
                messageInput.value;


            characterCounter.textContent =
                mensaje.length + " / 500";


            if (mensaje.trim() === "") {

                previewMessage.textContent =
                    "Tu mensaje aparecerá aquí...";

            } else {

                previewMessage.textContent =
                    mensaje;

            }

        }
    );


    // --------------------------------------------
    // CREAR EXPERIENCIA
    // --------------------------------------------

    createButton.addEventListener(
        "click",
        function () {

            const nombre =
                nameInput.value.trim();


            const mensaje =
                messageInput.value.trim();


            if (nombre === "") {

                mostrarError(
                    nameInput,
                    "Escribe un nombre primero."
                );

                return;
            }


            if (mensaje === "") {

                mostrarError(
                    messageInput,
                    "Escribe un mensaje primero."
                );

                return;
            }


            crearExperiencia(
                detalleActual,
                nombre,
                mensaje
            );

        }
    );


    // --------------------------------------------
    // MOSTRAR ERROR
    // --------------------------------------------

    function mostrarError(
        elemento,
        texto
    ) {

        elemento.classList.add(
            "input-error"
        );


        elemento.focus();


        setTimeout(function () {

            elemento.classList.remove(
                "input-error"
            );

        }, 1500);


        console.warn(texto);

    }


    // --------------------------------------------
    // CREAR EXPERIENCIA FINAL
    // --------------------------------------------
    //
    // Aquí ya NO se crea una experiencia genérica.
    // Se abre el HTML independiente del detalle.
    // --------------------------------------------

    function crearExperiencia(
        numero,
        nombre,
        mensaje
    ) {

        // Por ahora el detalle 01 es el único
        // que está conectado.

        if (numero !== 1) {

            alert(
                "Este detalle estará disponible próximamente."
            );

            return;
        }


        // Obtener música seleccionada

        const musicaIndex =
            musicSelect.value;


        const musicaSeleccionada =
            musicas[musicaIndex];


        // Crear parámetros

        const parametros =
            new URLSearchParams();


        parametros.set(
            "nombre",
            nombre
        );


        parametros.set(
            "mensaje",
            mensaje
        );


        // Enviar música

        if (musicaSeleccionada) {

            parametros.set(
                "musica",
                musicaSeleccionada.archivo
            );

        }


        // Cerrar modal antes de cambiar

        cerrarModal();


        // Abrir detalle 01

        window.location.href =
            `detalles/detalle-01/index.html?${parametros.toString()}`;

    }


    // --------------------------------------------
    // PROTEGER TEXTO DEL USUARIO
    // --------------------------------------------

    function escaparHTML(texto) {

        return texto
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    // --------------------------------------------
    // EFECTO 3D EN TARJETAS
    // --------------------------------------------

    const tarjetas =
        document.querySelectorAll(".detail-card");


    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth < 900) {

                    return;

                }


                const rect =
                    tarjeta.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centroX =
                    rect.width / 2;


                const centroY =
                    rect.height / 2;


                const rotateX =
                    ((y - centroY) /
                        centroY) * -2;


                const rotateY =
                    ((x - centroX) /
                        centroX) * 2;


                tarjeta.style.transform =
                    "perspective(800px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg) " +
                    "translateY(-6px)";

            }
        );


        tarjeta.addEventListener(
            "mouseleave",
            function () {

                tarjeta.style.transform = "";

            }
        );

    });


    // --------------------------------------------
    // APARICIÓN DE TARJETAS
    // --------------------------------------------

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "card-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        tarjetas.forEach(
            function (tarjeta) {

                observer.observe(
                    tarjeta
                );

            }
        );

    } else {

        tarjetas.forEach(
            function (tarjeta) {

                tarjeta.classList.add(
                    "card-visible"
                );

            }
        );

    }


    // --------------------------------------------
    // EVITAR SCROLL DEL FONDO CUANDO EL MODAL
    // ESTÁ ABIERTO
    // --------------------------------------------

    document.addEventListener(
        "touchmove",
        function (event) {

            if (
                modal.classList.contains(
                    "active"
                )
            ) {

                if (
                    !event.target.closest(
                        ".modal-window"
                    )
                ) {

                    event.preventDefault();

                }

            }

        },
        {
            passive: false
        }
    );


    // --------------------------------------------
    // LISTO
    // --------------------------------------------

    console.log(
        "Detalles del Corazón | By Iru Ventxs"
    );

});