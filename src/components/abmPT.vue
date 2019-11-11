<template>
  <div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
    <div class="formden_header">
     <h2>
     </h2>
     <p>
      Ingrese Producto Terminado
     </p>
    </div>
    <form method="post">
     <div class="form-group ">
      <label class="control-label " for="subject">
       # Articulo
      </label>
      <input class="form-control" id="subject" name="subject" placeholder="Ingrese Tipo MP" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select2">
       Pase
      </label>
      <select class="select form-control" id="select2" name="select2">
       <option value="20">
        20
       </option>
       <option value="25">
        25
       </option>
       <option value="30">
        30
       </option>
       <option value="35">
        35
       </option>
       <option value="40">
        40
       </option>
       <option value="45">
        45
       </option>
       <option value="50">
        50
       </option>
       <option value="55">
        55
       </option>
       <option value="60">
        60
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select">
       Color
      </label>
      <select class="select form-control" id="select" name="select">
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
</template>

<script>
export default {

}
</script>

<style scoped>
#abmPT{
margin-top: 100px;
}

</style>>
