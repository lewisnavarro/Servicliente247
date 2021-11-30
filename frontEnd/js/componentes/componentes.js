Vue.component('cabecera', {
    template: //html
        `<header>
            <img src="images/pqr.jpg" />
         </header>
        `
});

Vue.component('navegacion', {
    template: //html
        `
    <div>
        <div class="p">
            <label>
            Petición
                <input type="radio" value="peticion" name="peticion" class="p" />
            </label>
        </div>
    

        <div class="q">
            <label>
                Queja
                    <input type="radio" value="queja" name="peticion" class="q" />
            </label>
        </div>

        <div class="r">
            <label>
                Reclamo
                    <input type="radio" value="reclamo" name="peticion" class="r" />
            </label>
        </div>

        <div class="otr">
            <label>
                Felicitar
                    <input type="radio" value="feliz" name="peticion" class="otr" />
            </label>
        </div>
    </div>

    `
});

Vue.component('principal', {
    template: //html
        `<div>
          <p>
            Bienvenido al sistema de peticiones, quejas, reclamos y otros de
            <i><b>Serviclient247</b></i
            >, mediante el cual usted como cliente o usuario puede expresar sus
            solicitudes, inconformidad o felicitaciones relacionadas con
            nuestros servicios.
          </p>
        </div>`
});

Vue.component('pie', {
    template: //html
        `<footer class="footer">
            <a href="#">¿Qué es una queja?</a>
            <a href="#">¿Qué es una petición?</a>
            <a href="#">¿Qué es un reclamo?</a>
    </footer>
    
    `
});

Vue.component('boton', {
    template: //html
        `
    <div class="btn">
        <div>
            <input type="button" value="Siguiente" class="boton" />
        </div>
    </div>
    `
})

new Vue({
    el: '#app'
});

