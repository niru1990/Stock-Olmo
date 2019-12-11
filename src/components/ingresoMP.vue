<template>
  <div class="ingresoMP">
    <!-- COMIENZA FORMULARIO DE INGRESO DE ORDEN DE COMPRA -->
    <div>
      <h4>Ingrese Orden de Compra</h4>
      <section class="form-control">
        <form action class="text-center">
          <input
            v-model="cliente"
            @keyup.enter="crearOrden"
            type="text"
            name="cliente"
            placeholder="Cliente"
            class="form-control"
          />
          <input
            v-model="id"
            @keyup.enter="crearOrden"
            type="number"
            name="id"
            placeholder="id"
            class="form-control"
          />
          <input
            v-model="cantOrden"
            @keyup.enter="crearOrden"
            type="number"
            name="cantOrden"
            placeholder="Cantidad"
            class="form-control"
          />
          <!-- Botón para agregar -->
          <br />
          <input
            @click="crearOrden"
            type="button"
            value="Agregar artticulo a Orden"
            class="btn btn-success"
          />
        </form>
      </section>
    </div>
    <br />
    <div class="container">
      <section class="data">
        <h4>Listado Ordenes de Compra</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cliente</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(orden, indice) in ordenes" v-bind:key="orden">
              <td>{{ orden.id }}</td>
              <td>
                <span v-if="formActualizarOC && idActualizarOC == indice">
                  <input v-model="clienteActualizarOC" class="form-control" />
                </span>
                <span v-else>{{ orden.cliente }}</span>
              </td>
              <td>
                <span v-if="formActualizarOC && idActualizarOC == indice">
                  <input v-model="cantidadActualizarOC" class="form-control" />
                </span>
                <span v-else>{{ orden.cantOrden }}</span>
              </td>
              <td>
                <!-- Botón para guardar la información actualizada -->
                <span v-if="formActualizarOC && idActualizarOC == indice">
                  <button
                    @click="guardarActualizacionOC(indice)"
                    class="btn btn-success"
                  >Guardar articulo de OC</button>
                </span>
                <span v-else>
                  <!-- Botón para mostrar el formulario de actualizar -->
                  <button
                    @click="verFormActualizarOC(indice)"
                    class="btn btn-warning"
                  >Actualizar articulo OC</button>
                  <!-- Botón para borrar -->
                  <button
                    @click="borrarArticuloOC(indice)"
                    class="btn btn-danger"
                  >Borrar articulo de OC</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "ingresoMP",
  Data: {
    nombre: "",
    precio: "",
    cantInicial: "",
    cantActualizada: "",
    cliente: "",
    cantOrden: "",
    // Ver o no ver el formulario de actualizar
    formActualizar: false,
    // La posición de tu lista donde te gustaría actualizar
    idActualizar: -1,
    // Input nombre dentro del formulario de actualizar
    nombreActualizar: "",
    // Input precio dentro del formulario de actualizar
    precioActualizar: "",
    // Input cantidad dentro del formulario de actualizar
    cantidadActualizar: "",
    // Lista de articulos
    articulos: [],
    ordenes: [],
    formActualizarOC: false,
    idActualizarOC: -1,
    clienteActualizarOC: "",
    cantidadActualizarOC: "",

    formActualizarSR: false,
    idActualizarSR: -1,
    nombreActualizarSR: "",
    precioActualizarSR: "",
    cantidadActualizarSR: ""
  },

  methods: {
    // metodos para el manejo de articulos en stock
    crearArticulo: function() {
      if (this.articulos == undefined) this.articulos = new Array();

      this.articulos.push({
        id: +new Date(),
        nombre: this.nombre,
        precio: this.precio,
        cantInicial: this.cantInicial,
        cantActualizada: this.cantInicial
      });
      // Vaciamos el formulario de añadir
      this.nombre = "";
      this.precio = "";
      this.cantInicial = "";
    },

    verFormActualizar: function(articulo_id) {
      // Antes de mostrar el formulario de actualizar, rellenamos sus campos
      this.idActualizar = articulo_id;
      this.nombreActualizar = this.articulos[articulo_id].nombre;
      this.precioActualizar = this.articulos[articulo_id].precio;
      this.cantidadActualizar = this.articulos[articulo_id].cantInicial;
      // Mostramos el formulario
      this.formActualizar = true;
    },

    borrarArticulo: function(articulo_id) {
      //Borramos de la lista
      this.articulos.splice(articulo_id, 1);
    },

    guardarActualizacion: function(articulo_id) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;
      this.articulos[articulo_id].nombre = this.nombreActualizar;
      this.articulos[articulo_id].precio = this.precioActualizar;
      this.articulos[articulo_id].cantInicial = this.cantidadActualizar;
      this.articulos[articulo_id].cantActualizada = this.cantidadActualizar;
    },

    //*********************************************/
    //*********************************************/
    //metodos para el manejo de la Orden de Compra
    crearOrden: function() {
      if (this.ordenes == undefined) this.ordenes = new Array();

      this.ordenes.push({
        cliente: this.cliente,
        id: this.id,
        cantOrden: this.cantOrden
      });
      let idEncontrado = this.articulos.findIndex(x => x.id == this.id);
      this.articulos[idEncontrado].cantActualizada =
        this.articulos[idEncontrado].cantActualizada - this.cantOrden;

      // let idEncontrado = buscarArticulo(this.id);
      //let idEncontrado = this.articulos.findIndex(id => id == this.id);
      //this.articulos[idEncontrado].cantActualizada = this.articulos[idEncontrado].cantInicial - this.cantOrden;
      this.cliente = "";
      this.id = "";
      this.cantOrden = "";
    },

    verFormActualizarOC: function(articulo_id) {
      // Antes de mostrar el formulario de actualizar, rellenamos sus campos
      this.idActualizarOC = articulo_id;
      this.clienteActualizarOC = this.ordenes[articulo_id].cliente;
      this.cantidadActualizarOC = this.ordenes[articulo_id].cantOrden;
      // Mostramos el formulario
      this.formActualizarOC = true;
    },

    borrarArticuloOC: function(articulo_id) {
      //Borramos de la lista
      this.articulos[articulo_id].cantActualizada =
        parseInt(this.articulos[articulo_id].cantActualizada, 10) +
        parseInt(this.ordenes[articulo_id].cantOrden, 10);
      this.ordenes.splice(articulo_id, 1);
    },

    guardarActualizacionOC: function(articulo_id) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizarOC = false;
      this.ordenes[articulo_id].cliente = this.clienteActualizarOC;
      let diferencia =
        this.ordenes[articulo_id].cantOrden - this.cantidadActualizarOC;
      this.ordenes[articulo_id].cantOrden = this.cantidadActualizarOC;
      this.articulos[articulo_id].cantActualizada =
        this.articulos[articulo_id].cantActualizada + diferencia;
    },

    descontarStockArticulos: function(articulo_id, cant) {
      this.cantActualizada = this.articulos[articulo_id].cantInicial - cant;
    },

    buscarArticulo: function(articulo_id) {
      let artEncontrado = false;
      let i = 0;
      while (i < this.articulos.lenght && !artEncontrado) {
        if (this.articulos[i].id == articulo_id) artEncontrado = true;
        else i++;
      }
      return i;
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>