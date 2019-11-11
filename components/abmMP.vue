<template>
<div id="abmMP" class="container">
  <div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
    <div class="formden_header">
     <h2>
     </h2>
     <p>
      Ingrese Materia Prima
     </p>
    </div>
    <form method="post">
     <div class="form-group ">
      <label class="control-label " for="subject">
       Tipo
      </label>
      <input class="form-control" id="subject" name="subject" placeholder="Ingrese Tipo MP" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select">
       Seleccione Pase
      </label>
      <select class="select form-control" id="select" name="select">
       <option value="Bronce Viejo">
        Bronce Viejo
       </option>
       <option value="Plata Vieja">
        Plata Vieja
       </option>
       <option value="Niquel Brillante">
        Niquel Brillante
       </option>
       <option value="Niquel Satinado">
        Niquel Satinado
       </option>
       <option value="Empavonado">
        Empavonado
       </option>
       <option value="Negro">
        Negro
       </option>
       <option value="Marron">
        Marron
       </option>
       <option value="Suela">
        Suela
       </option>
       <option value="Choco">
        Choco
       </option>
       <option value="Tabaco">
        Tabaco
       </option>
       <option value="Azul">
        Azul
       </option>
       <option value="Blanco">
        Blanco
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="number">
       Cantidad
      </label>
      <input class="form-control" id="number" name="number" placeholder="Ingrese unidades" type="text"/>
     </div>
     <div class="form-group" id="div_radio">
      <label class="control-label requiredField" for="radio">
       Que tipo de unidad ingres&oacute;?
       <span class="asteriskField">
        *
       </span>
      </label>
      <div class="">
       <label class="radio-inline">
        <input name="radio" type="radio" value="Metros"/>
        Metros
       </label>
       <label class="radio-inline">
        <input name="radio" type="radio" value="Unidades"/>
        Unidades
       </label>
      </div>
     </div>
     <div class="form-group">
      <div>
       <button class="btn btn-success " name="submit" type="submit">
        Ingresar
       </button>
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
  name: "abmMP",
  props: {
    msg: String,
    
  }
};
</script>

<style scoped>
#abmMP{
margin-top: 100px;
}

</style>>

</style>