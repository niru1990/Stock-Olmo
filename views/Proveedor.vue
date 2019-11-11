<template>
  <div id="abmMP" class="container">
    <div class="bootstrap-iso">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="formden_header">
              <h2>PROVEEDOR</h2>
              <input id="id" type="text" style="visibility:hidden">
            </div>
            <form method="post">
              <div class="form-group">
                <label class="control-label" for="subject">Nombre de fantasia</label>
                <input class="form-control" id="NFantasia" name="subject" placeholder="nombre del fantasia" type="text"/>
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">Razón social</label>
                <input class="form-control" id="razonSocial" name="subject" placeholder="Razon social" type="text" />
              </div>

              <div class="form-group">
                <label class="control-label" for="number">CUIT</label>
                <input class="form-control" id="cuit" name="number" placeholder="CUIT" type="text" s/>
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">Domicilio</label>
                <input class="form-control" id="domicilio" name="subject" placeholder="Domicilio" type="text" />
              </div>

              <div class="form-group">
                <label class="control-label" for="number">Telefonos</label>
                <input class="form-control" id="telefono" name="number" placeholder="Telefono" type="text" />
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">Contacto</label>
                <input class="form-control" id="subject" name="subject" placeholder="Contacto" type="text"/>
              </div>

              <div class="form-group">
                  <button class="btn btn-success" name="submit" type="submit">Guardar</button>&nbsp
                  <button class="btn btn-danger" name="submit" type="submit">Eliminar</button>&nbsp
                  <input  class="btn btn-secondary" type="button" id="clear" @click="clear" value="Limpiar"/>
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
  name: 'proveedor',
  data:
  {
    id: 0,
    nombreFantasia: "",
    razonSocial :"",
    cuit : "",
    domicilio : "",
    telefonos : [],
    contacto : ""
  },
  methods: {
   enviar: function(){

     if(validar())
     {
        fto();
        if(thid.id == 0)
          this.save();
        else
          this.update();
     }

    },
    validar: function(){
      let valido = true;

      if(document.getElementById("NFantasia").text == "")
        valido = false;
      
      if(valido && document.getElementById("razonSocial").text == "")
        valido = false;
      
      if(valido && document.getElementById("cuit").text == "")
        valido = false;

      if(valido && document.getElementById("domicilio").text == "")
        valido = false;

      if(valido && this.telefonos.length == 0)
        valido = false;

      if(valido && document.getElementById("contacto").text == "")
        valido = false;
      
      return valido;
    },
    fto: function(){ //Form to object
      this.id = document.getElementById("id").text;
      this.nombreFantasia = document.getElementById("NFantasia").text;
      this.razonSocial = document.getElementById("razonSocial").text;
      this.cuit = document.getElementById("cuit").text;
      this.domicilio = document.getElementById("domicilio").text;
      this.contacto = document.getElementById("contacto").text;
    },
    otf: function(obj){ //Object to form
    debugger;
      document.getElementById("id").text = obj.id;
      document.getElementById("NFantasia").text = obj.nombreFantasia;
      document.getElementById("razonSocial").text = obj.razonSocial;
      document.getElementById("cuit").text  = obj.cuit;
      document.getElementById("domicilio").text = obj.domicilio;
      document.getElementById("contacto").text = obj.contacto;
    },
    save: function(){
    },
    update: function(){
    },
    search: function(){
    },
    clear: function(){
      debugger;
      this.id = 0;
      this.nombreFantasia = "";
      this.razonSocial = "";
      this.cuit = "";
      this.domicilio = "";
      this.contacto = "";
      this.telefonos = [];
      //this.otf(obj);
    },
    delete: function(){
    }
    }
}

</script>