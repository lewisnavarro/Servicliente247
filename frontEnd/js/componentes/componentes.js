Vue.component('inicio', {
    template: //html
        `<div>
        <p>
        Bienvenido al sistema de peticiones, quejas, reclamos y otros de
        <i><b>Serviclient247</b></i
        >, mediante el cual usted como cliente o usuario puede expresar sus
        solicitudes, inconformidad o felicitaciones relacionadas con
        nuestros servicios.
    </p>
    
    </div>
    `
})

Vue.component('peticion', {
    
    template: //html
        `<div>
    <p><b>Petición:</b> Es una actuación por medio de la cual el usuario, de manera respetuosa, solicita a la empresa cualquier información relacionada con la prestación del servicio. </p>
    
    </div>
    `
})
Vue.component('queja', {
    
    template: //html
        `<div>
    <p><b>Queja:</b> Es la expresión o manifestación que le hace el usuario a la empresa por la inconformidad que le generó la prestación de nuestros servicios. </p>
    
    </div>
    `
})
Vue.component('reclamo', {
    
    template: //html
        `<div>
    <p><b>Reclamo:</b> Es la oposición o contrariedad presentada por el usuario, con el objeto de que la empresa revise y evalúe una actuación relacionada con la prestación del servicio en términos económicos. </p>
    
    </div>
    `
})
Vue.component('felicitar', {
    
    template: //html
        `<div>
    <p><b>Felicitación:</b> Es la manifestación positiva de un usuario acerca de los servicios que le brinda nuestra entidad</p>
    
    </div>
    `
})

Vue.component('formulario', {
    data() {
        return {
            opcion: 0,
            fecha: '',
            estado: '',
            nombre: '',
            email: '',
            detalle: '',
            responsable: '',
            fecha_respuesta: '',
            respuesta: ''
        }
    },
    props: ['tipo'],

    template: //html
        `<div>
               <form class="formulario" >
                   <label for="name">Nombre:</label><input type="text" class="inDat" v-model="nombre">
                   <label>Correo:</label><input type="email" class="inDat" v-model="email">
                   <label>Detalle:</label><textarea class="tarea" name="detalle" id="detalle" cols="30" rows="10" placeholder="Digite aquí su contenido..."></textarea>
                   <input type="submit" class="boton" value="Enviar" @click="guardar()" >
                </form>
           </div>
          
           `
})


new Vue({
    el: "#app",
    data() {
        return {
            opcion: 0,
            tipo:''
        }
    }
})



// Vue.component('cabecera', {
//     template: //html
//         `<header>
//             <img src="images/pqr.jpg" />
//          </header>
//         `
// });

// Vue.component('navegacion', {

//     template: //html
//         `<div>
//     <div class="navegacion">
//         <div class="p">
//             <label>
//             Petición
//                 <input  @click="visibilidad=1"  type="radio" value="1" name="peticion" class="p" />
//             </label>
//         </div>


//         <div class="q">
//             <label>
//                 Queja
//                     <input @click="visibilidad=1"  type="radio" value="queja" name="peticion" class="q" />
//             </label>
//         </div>

//         <div class="r">
//             <label>
//                 Reclamo
//                     <input @click="visibilidad=1"  type="radio" value="reclamo" name="peticion" class="r" />
//             </label>
//         </div>

//         <div class="otr">
//             <label>
//                 Felicitar
//                     <input @click="visibilidad=1"  type="radio" value="feliz" name="peticion" class="otr" />
//             </label>
//         </div>

//     </div>
//     <principal :visible="visibilidad"></principal>
//     <boton :visible="visibilidad"></boton>
//     <formulario :visible="visibilidad"></formulario>
//     </div>`,

//     data() {
//         return {
//             visibilidad: 0
//         }
//     },


// });

// Vue.component('principal', {
//     template: //html
//         `<div>
//           <p>
//             Bienvenido al sistema de peticiones, quejas, reclamos y otros de
//             <i><b>Serviclient247</b></i
//             >, mediante el cual usted como cliente o usuario puede expresar sus
//             solicitudes, inconformidad o felicitaciones relacionadas con
//             nuestros servicios.
//           </p>
//           <p><b>Queja:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
//           <p><b>Petición:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
//           <p><b>Reclamo:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum in molestiae sit tempore recusandae omnis exercitationem nisi dolore eum, quo, expedita velit labore quam non illo. Necessitatibus quasi velit id.</p>
//         </div>

//         `,
//         props: ['visible']
// });

// Vue.component('pie', {
//     template: //html
//         `<footer class="footer">
//             Este es el píe de página
//     </footer>

//     `
// });

// Vue.component('boton', {
//     template: //html
//         `
//     <div v-if="visible==1" class="btn">
//         <div>
//             <input @click="visible=2" type="button" value="Siguiente"  class="boton" />
//         </div>
//     </div>
//     `, 
//     props: ["visible"]
// });

// Vue.component('formulario', {
//     template: //html
//         `
//     <form v-if="visible==2" class="formulario"> 
//         <label for="name">Nombre</label><input type="text" class="inDat" v-model="name">
//         <label>Correo</label><input type="email" class="inDat" v-model="email">
//         <label>Detalle</label><textarea name="detalle" id="detalle" cols="30" rows="10" placeholder="Digite aquí su contenido..."></textarea>
//         <input type="submit" class="boton" value="Enviar" @click="saveClient">
//     </form>
//     `,
//     props: ["visible"]
// });

// new Vue({
//     el: '#app',
// });

