<template>
  <div id="app">
  <!--
    <div style="height:288px; background-color:#FF2924;	color:#000000">
        <HelloWorld msg="Bienvendio a Stock - Olmo!" msg2="El mejor sistema para manejar tu stock."/>
    </div>
    -->
    <div id="wrapper" :class="wrapperClass">

      <MenuToggleBtn></MenuToggleBtn>

      <Menu></Menu>

      <ContentOverlay></ContentOverlay>

      <router-view></router-view>

    </div>


  </div>
</template>

<script>
//Antigua bienvenida
//import HelloWorld from './components/HelloWorld.vue';
//Menu viejo
//import dropdown from './components/dropdown.vue';


// Menu nuevo
import MenuToggleBtn from '@/components/MenuToggleBtn.vue'
import Menu from '@/components/Menu.vue'
import ContentOverlay from '@/components/ContentOverlay.vue'


export default {
  name: 'app',
  components: {
    MenuToggleBtn,
    Menu,
    ContentOverlay
  },

  created() {

    window.bus.$on('menu/toggle', () => {
      window.setTimeout(() => {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
      }, 200);
    });

    window.bus.$on('menu/closeMobileMenu', () => {
      this.isOpenMobileMenu = false;
    });

  },


  data() {
    return {
      isOpenMobileMenu: false,
    };
  },

  computed: {
    wrapperClass() {
      return {
        'toggled': this.isOpenMobileMenu === true,
      };
    },
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import 'styles/layout.scss';
@import 'styles/menu-toggle-btn.scss';
@import 'styles/menu.scss';
@import 'styles/content-overlay.scss';
@import 'styles/media-queries.scss';
</style>
