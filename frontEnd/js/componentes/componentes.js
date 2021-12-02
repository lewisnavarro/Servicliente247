Vue.component('cabecera', {
    template: //html
        `<header>
            <img src="images/pqr.jpg" />
         </header>
        `
});

Vue.component('navegacion', {
    data() {
        return {
            check: 0
        }
    },

    template: //html
        `
    <div>
        <div class="p">
            <label>
            Petición
                <input  v-model="check" @click="check=1"  type="radio" value="peticion" name="peticion" class="p" />
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

    `,

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
          <p><b>Queja:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
          <p><b>Petición:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
          <p><b>Reclamo:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
        </div>`
});

Vue.component('pie', {
    template: //html
        `<footer class="footer">
            
    </footer>
    
    `
});

Vue.component('boton', {
    template: //html
        `
    <div class="btn">
        <div>
            <input type="button" value="Siguiente"  class="boton" />
        </div>
    </div>
    `
});

Vue.component('formulario', {
    template: //html
        `
    <form class="formulario">
        <label for="name">Nombre</label><input type="text" class="inDat" v-model="name">
        <label>Correo</label><input type="email" class="inDat" v-model="email">
        <label>Detalle</label><textarea name="detalle" id="detalle" cols="30" rows="10"></textarea>
        <input type="submit" class="boton" value="Enviar" @click="saveClient">
    </form>
    `
});

new Vue({
    el: '#app',
    data: {
        check: 0,
        ver: 0

    }
});

