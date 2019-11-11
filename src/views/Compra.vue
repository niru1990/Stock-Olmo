<template>
  <div id="compra">
    <input
      class="S1-y-O98KS"
      value
      placeholder="Ingrese Proveedor"
      overflow="hidden"
      text-overflow="ellipsis"
    />
    <span class="BkzyZO9UFS">Orden de Compra #</span>
    <mdc-button class="Hkm1-_5IYH" raised>Buscar</mdc-button>
    <span class="SyNk-_cLYB">1346</span>
    <div class="BkSJWuqLFB" label="MDC Radio" name="Unidades">
      <mdc-fab class="BJI1W_c8YH" icon="add"></mdc-fab>

      <input
        class="SJwJb_9LKH"
        value="# Articulo"
        placeholder="Articulo #"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="Byd1Z_cUKr"
        value="Color/Baño"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="SJskbOcItH"
        value="Cant"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <input
        class="S161Zu9UYH"
        value="Descripcion"
        placeholder="placeholder"
        overflow="hidden"
        text-overflow="ellipsis"
      />

      <mdc-radio class="r11uOqItB" label="Metros" name="default-mdc-group" disabled></mdc-radio>

      <mdc-radio class="ryCZK5UFB" label="Unidades" name></mdc-radio>
    </div>
    <mdc-list class="ry0yZdqUFB" dense bordered>
      <mdc-list-item class="r11gyZdqIKH">List item A</mdc-list-item>

      <mdc-list-item class="S1elkbuc8KB">List item B</mdc-list-item>

      <mdc-list-item class="BkZlkZd5LKH">List item C</mdc-list-item>
    </mdc-list>
    <mdc-button class="HkMe1Z_9UFS" raised>Confirmar Compra</mdc-button>
    <mdc-button class="B1Qgkb_58FH" raised outlined>Editar</mdc-button>
    <mdc-button class="S14gk-u9LFS" raised>Eliminar</mdc-button>
  </div>
</template>

<script>
export default {
  name: "compra"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ryeybu5ItH {
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

.BkzyZO9UFS {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 150px;
  height: 25px;
  top: 77px;
  left: 77px;
}

.Hkm1-_5IYH {
  opacity: 1;
  position: absolute;
  width: 120px;
  height: 36px;
  top: 106px;
  left: 392px;
}

.SyNk-_cLYB {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 150px;
  height: 24px;
  top: 77px;
  left: 226px;
}

.SJwJb_9LKH {
  text-align: center;
  font-weight: inherit;
  position: absolute;
  width: 138px;
  height: 40px;
  top: 73px;
  left: 18px;
}

.Byd1Z_cUKr {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 119px;
  height: 40px;
  top: 73px;
  left: 505px;
}

.SJskbOcItH {
  text-align: center;
  font-weight: inherit;
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 92px;
  height: 40px;
  top: 128px;
  left: 523px;
}

.S161Zu9UYH {
  background-color: rgb(255, 255, 255);
  text-align: center;
  position: absolute;
  width: 341px;
  height: 40px;
  top: 73px;
  left: 162px;
}

.BkSJWuqLFB {
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

.ry0yZdqUFB {
  overflow: hidden;
  position: absolute;
  width: 839px;
  height: 163px;
  top: 436px;
  left: 78px;
}
</style>
