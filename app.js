var demo = new Vue({

    el: '#main',

    data: {
        nombre: '',
        precio: '',
        cantidad: '',
        // Ver o no ver el formulario de actualizar
        formActualizar: false,
        // La posición de tu lista donde te gustaría actualizar 
        idActualizar: -1,
        // Input nombre dentro del formulario de actualizar
        nombreActualizar: '',
        // Input precio dentro del formulario de actualizar
        precioActualizar: '',
        // Input cantidad dentro del formulario de actualizar
        cantidadActualizar: '',
        // Lista de articulos
        articulos: [],
        ordenes: []
    },

    methods: {
        crearArticulo: function () {
            this.articulos.push({
                id: + new Date(),
                nombre: this.nombre,
                precio: this.precio,
                cantidad: this.cantidad
            });
            // Vaciamos el formulario de añadir
            this.nombre = '';
            this.precio = '';
            this.cantidad = '';
        },
        verFormActualizar: function (articulo_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idActualizar = articulo_id;
            this.nombreActualizar = this.articulos[articulo_id].nombre;
            this.precioActualizar = this.articulos[articulo_id].precio;
            this.cantidadActualizar = this.articulos[articulo_id].cantidad;
            // Mostramos el formulario
            this.formActualizar = true;
        },
        borrarArticulo: function (articulo_id) {
            //Borramos de la lista
            console.log(articulo_id)

            this.articulos.splice(articulo_id, 1);
            this.formActualizar = false;

        },

        guardarActualizacion: function (articulo_id) {
            // Ocultamos nuestro formulario de actualizar
            console.log(articulo_id)

            this.formActualizar = false;
            this.articulos[articulo_id].nombre = this.nombreActualizar;
            this.articulos[articulo_id].precio = this.precioActualizar;
            this.articulos[articulo_id].cantidad = this.cantidadActualizar;
        }
    }
});