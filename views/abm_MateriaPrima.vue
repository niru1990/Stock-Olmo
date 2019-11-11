<template>
  <div id="abmMP" class="container">
    <div class="bootstrap-iso">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="formden_header">
              <h2></h2>
              <p>Ingrese Materia Prima</p>
            </div>
            <form method="post">
              <div class="form-group">
                <label class="control-label" for="subject">ART_MP</label>
                <input
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Ingrese ARTICULO MATERIA PRIMA"
                  type="text"
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">COLOR</label>
                <input
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Ingrese COLOR"
                  type="text"
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="number">PASE</label>
                <input
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Ingrese PASE"
                  type="text"
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="number">CANT</label>
                <input
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Ingrese CANTIDAD"
                  type="text"
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="subject">ORIGEN</label>
                <input
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Ingrese ORIGEN"
                  type="text"
                />
              </div>
              <div class="form-group">
                <label class="control-label" for="number">PRECIO</label>
                <input
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Ingrese PRECIO"
                  type="text"
                />
              </div>
              <div class="form-group">
                <label class="control-label" for="subject">PROVEEDOR</label>
                <input
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Ingrese PROVEEDOR"
                  type="text"
                />
              </div>

              <div class="form-group">
                <div>
                  <button class="btn btn-success" name="submit" type="submit">AGREGAR MATERIA PRIMA</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

