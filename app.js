var demo = new Vue({

    el: '#main',

    data: {
        nombre: '',
        precio: '',
        cantInicial: '',
        cantActualizada: '',
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
                cantInicial: this.cantInicial,
                cantActualizada: this.cantInicial
            });
            // Vaciamos el formulario de añadir
            this.nombre = '';
            this.precio = '';
            this.cantInicial = '';

        },

        verFormActualizar: function (articulo_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idActualizar = articulo_id;
            this.nombreActualizar = this.articulos[articulo_id].nombre;
            this.precioActualizar = this.articulos[articulo_id].precio;
            this.cantidadActualizar = this.articulos[articulo_id].cantInicial;
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
            this.articulos[articulo_id].cantInicial = this.cantidadActualizar;
        },

        //*********************************************/
        //*********************************************/
        //metodos para el manejo de la Orden de Compra
        crearOrden: function () {
            this.ordenes.push({
                cliente: this.cliente,
                id: this.id,
                cantOrden: this.cantOrden,

            });
            let idEncontrado = this.articulos.findIndex(x => x.id == this.id);
            this.articulos[idEncontrado].cantActualizada = this.articulos[idEncontrado].cantActualizada - this.cantOrden;

            // let idEncontrado = buscarArticulo(this.id);
            //let idEncontrado = this.articulos.findIndex(id => id == this.id);
            //this.articulos[idEncontrado].cantActualizada = this.articulos[idEncontrado].cantInicial - this.cantOrden;
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
            this.cantActualizada = this.articulos[articulo_id].cantInicial - cant;
            return result;

        },

        buscarArticulo: function (articulo_id) {
            let artEncontrado = false;
            let i = 0;
            while (i < this.articulos.lenght && !artEncontrado) {
                if (this.articulos[i].id == articulo_id) {
                    artEncontrado = true;
                } else {
                    i++;
                }
            }
            return i
        }


    }
});