<template>
  <div id="pedido">
    <input
      class="rk-eCncstH"
      value
      placeholder="Ingrese Cliente"
      overflow="hidden"
      text-overflow="ellipsis"
    />
    <span class="r1flC3qiFH">Orden de Pedido #</span>
    <mdc-button class="B1QeAh5sFr" raised>Buscar</mdc-button>
    <span class="BkNgA39jtH">9208</span>
    <div class="r1Be02qoYB">
      <mdc-fab class="HyUgAnqjtH" icon="add"></mdc-fab>

      <input
        class="HkveR3qiFS"
        value="# Articulo"
        placeholder="Articulo #"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="HJ_eCh5oKr"
        value="Color"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="rJKx0ncoFS"
        value="Pase"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="B15x03ciYr"
        value="Estilo"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="BJjgAnqoFB"
        value="Cant"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <mdc-button class="HkhgR39jYS" raised>Buscar Articulo</mdc-button>

      <input
        class="Hk6gR39str"
        value="Descripcion"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />
    </div>
    <mdc-list class="BJ0gR2ciFH" dense bordered>
      <mdc-list-item class="BkJelAhcsKS">List item A</mdc-list-item>

      <mdc-list-item class="SylglAhqsKH">List item B</mdc-list-item>

      <mdc-list-item class="rJ-lxR2cotH">List item C</mdc-list-item>
    </mdc-list>
    <mdc-button class="rJfelAn9jtS" raised>Confirmar OC</mdc-button>
    <mdc-button class="B17xgA39itS" raised outlined>Editar</mdc-button>
    <mdc-button class="BJExeRnqsFH" raised>Eliminar</mdc-button>
  </div>
</template>

<script>
export default {
  name: "pedido"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#SklgC35sFr {
  --mdc-theme-primary: rgb(69, 217, 229);
  --mdc-theme-secondary: #f44336;
  --mdc-theme-background: #ffffff;
  position: relative;
  margin: auto;
  background-color: #ffffff;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.r1flC3qiFH {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 150px;
  height: 25px;
  top: 77px;
  left: 77px;
}

.B1QeAh5sFr {
  opacity: 1;
  position: absolute;
  width: 120px;
  height: 36px;
  top: 106px;
  left: 392px;
}

.BkNgA39jtH {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 150px;
  height: 24px;
  top: 77px;
  left: 226px;
}

.HkveR3qiFS {
  text-align: center;
  font-weight: bold;
  position: absolute;
  width: 138px;
  height: 40px;
  top: 23px;
  left: 13px;
}

.HJ_eCh5oKr {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(241, 239, 145);
  position: absolute;
  width: 119px;
  height: 40px;
  top: 77px;
  left: 364px;
}

.rJKx0ncoFS {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(241, 239, 145);
  position: absolute;
  width: 67px;
  height: 40px;
  top: 77px;
  left: 492px;
}

.B15x03ciYr {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(241, 239, 145);
  position: absolute;
  width: 107px;
  height: 40px;
  top: 77px;
  left: 567px;
}

.BJjgAnqoFB {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(241, 239, 145);
  position: absolute;
  width: 92px;
  height: 40px;
  top: 76px;
  left: 682px;
}

.Hk6gR39str {
  background-color: rgb(241, 239, 145);
  text-align: center;
  position: absolute;
  width: 341px;
  height: 40px;
  top: 77px;
  left: 15px;
}

.r1Be02qoYB {
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  position: absolute;
  width: 842px;
  height: 244px;
  top: 175px;
  left: 78px;
}

.BJ0gR2ciFH {
  overflow: hidden;
  position: absolute;
  width: 839px;
  height: 163px;
  top: 436px;
  left: 78px;
}
</style>
