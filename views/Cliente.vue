<template>
  <div id="abmMP" class="container">
    <div class="bootstrap-iso">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="formden_header">
              <h2>Cliente</h2>
              <input id="id" type="text" style="visibility:hidden">
            </div>
            <form method="post">
              <div class="form-group">
                <label class="control-label" for="subject">Nombre de fantasia</label>
                <input class="form-control" id="nombre" name="subject" placeholder="Ingrese el nombre de fantasía" type="text"/>
              </div>
              <div class="form-group">
                <label class="control-label" for="subject">Razon social</label>
                <input class="form-control" id="razonSocial" name="subject" placeholder="Ingrese la razon social" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="number">CUIT</label>
                <input class="form-control" id="cuit" name="number" placeholder="Ingrese el CUIT" type="text" />
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">Domicilio</label>
                <input class="form-control" id="domicilio" name="subject" placeholder="Ingrese el domicilio" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="number">Telefono</label>
                <input class="form-control" id="telefono" name="number" placeholder="Ingrese el telefono" type="text" />
              </div>
              <div class="form-group">
                <label class="control-label" for="subject">Contacto</label>
                <input class="form-control" id="contacto" name="subject" placeholder="Ingrese NOMBRE CONTACTO" type="text" />
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
    name: "Cliente",
  data:{
    id:0,
    nombre: "",
    razonSocial: "",
    cuit: "",
    domicilio: "",
    telefono: "",
    contacto: ""
  },
enviar: function(){
},
validar: function(){
},
fto: function(){ //Form to object
},
otf: function(){ //Object to form
},
save: function(){
},
update: function(){
},
search: function(){
}
}
</script>