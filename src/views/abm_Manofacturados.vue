<template>
  <div id="abmPT" class="container">
    <div class="bootstrap-iso">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="formden_header">
              <h2>Productos manofacturados</h2>
              <input id="id" type="text" style="visibility:hidden">
            </div>
            <form method="post">
              <div class="form-group">
                <label class="control-label" for="subject">Nombre</label>
                <input class="form-control" id="nombre" name="subject" placeholder="Ingrese el nombre del producto" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="subject">Color</label>
                <input class="form-control" id="color" name="subject" placeholder="Ingrese el color" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="number">Cantidad</label>
                <input class="form-control" id="cantidad" name="number" placeholder="Ingrese la cantidad" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="subject">Origen</label>
                <input class="form-control" id="origen" name="subject" placeholder="Ingrese el origen" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="number">ID_RECETA</label>
                <select class="select form-control" id="receta" name="select">
                  <option value=" ">Seleccione una receta...</option>
                </select>
              </div>

              <div class="form-group">
                <div>
                  <button class="btn btn-success" name="submit" type="submit">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data:{
    id:0,
    nombre: "",
    color: "",
    cantidad: "",
    origen: "",
    receta: 0, 
  },
  methods: {
    enviar: function(){
      if(validar())
      {
        let obj = fto();
        if(obj.id == 0)
        {
          save();
        }
        else{
          update();
        }
      }
    },
    validar: function(){

      let valido = true;
      if(document.getElementById("id").text == "")
        valido = false;

      if(valido && this.nombre == "")
        valido = false;

      if(valido && this.color == "")
        valido = false;

      if(valido && this.cantidad == "")
        valido = false;

      if(valido && this.origen == "")
        valido = false;
      
      if(valido && this.receta == 0)
        valido = false;
    },
    fto: function(){ //Form to object
    },
    otf: function(obj){
    },
    save: function(){
    },
    update: function(){
    },
    search: function(){
    },
    clear: function(){
      let obj = this.data
      this.id = 0;
      this.nombre = "";
      this.color = "";
      this.cantidad= "";
      this.origen= "";
      this.receta = 0;

      otf(obj);
    },
    delete: function(){
    }
  }
}
</script>