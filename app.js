var demo = new Vue({

    el: '#main',

    data: {
        nombre: '',
        precio: '',
        cantidad: '',
        cliente: '',
        cantOrden: '',
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
        ordenes: [],
        formActualizarOC: false,
        idActualizarOC: -1,
        clienteActualizarOC: '',
        cantidadActualizarOC: '',

        formActualizarSR: false,
        idActualizarSR: -1,
        nombreActualizarSR: '',
        precioActualizarSR: '',
        cantidadActualizarSR: ''

    },



    methods: {
        // metodos para el manejo de articulos en stock
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
            this.articulos.splice(articulo_id, 1);

        },

        guardarActualizacion: function (articulo_id) {
            // Ocultamos nuestro formulario de actualizar
            this.formActualizar = false;
            this.articulos[articulo_id].nombre = this.nombreActualizar;
            this.articulos[articulo_id].precio = this.precioActualizar;
            this.articulos[articulo_id].cantidad = this.cantidadActualizar;
        },

        //*********************************************/
        //*********************************************/
        //metodos para el manejo de la Orden de Compra
        crearOrden: function () {
            this.ordenes.push({
                cliente: this.cliente,
                id: this.id,
                cantOrden: this.cantOrden

            });
            this.cliente = '';
            this.id = '';
            this.cantOrden = '';
        },

        verFormActualizarOC: function (articulo_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idActualizarOC = articulo_id;
            this.clienteActualizarOC = this.ordenes[articulo_id].cliente;
            this.cantidadActualizarOC = this.ordenes[articulo_id].cantOrden;
            // Mostramos el formulario
            this.formActualizarOC = true;
        },

        borrarArticuloOC: function (articulo_id) {
            //Borramos de la lista
            this.ordenes.splice(articulo_id, 1);

        },

        guardarActualizacionOC: function (articulo_id) {
            // Ocultamos nuestro formulario de actualizar
            this.formActualizarOC = false;
            this.ordenes[articulo_id].cliente = this.clienteActualizarOC;
            this.ordenes[articulo_id].cantOrden = this.cantidadActualizarOC;
        },

        descontarStockArticulos: function (articulo_id, cant) {
            return this.articulos[articulo_id].cantidad -= cant;

        },

        buscarArticulo: function (articulo_id) {
            let artEncontrado = false;
            let art = null;
            let i = 0;
            while (i < articulos.length && !artEncontrado) {
                if (articulos[i].id == articulo_id) {
                    art = articulos[i];
                    artEncontrado = true;
                } else {
                    i++;
                }
            }
            return art
        }


    }
});