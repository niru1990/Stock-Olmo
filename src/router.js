import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [

        // loads Home component
        {
            path: '/',
            name: 'home',
            component: Home
        },
        //Productos
        {
            path: '/prod/:sectionSlug',
            name: 'Materia Prima',
            component: () =>
                import ('./views/abm_MateriaPrima.vue')
        },
        {
            path: '/productos/:sectionSlug',
            name: 'Manofacturados',
            component: () =>
                import ('./views/abm_Manofacturados.vue')
        },
        {
            path: '/recetas/:sectionSlug',
            name: 'Recetas',
            component: () =>
                import ('./views/Receta.vue')
        },
        //Ordenes
        {
            path: '/OC/:sectionSlug',
            name: 'OC',
            component: () =>
                import ('./views/Compra.vue')
        },
        {
            path: '/OPr/:sectionSlug',
            name: 'OPr',
            component: () =>
                import ('./views/Produccion.vue')
        },
        {
            path: '/OP/:sectionSlug',
            name: 'OP',
            component: () =>
                import ('./views/Pedido.vue')
        },
        //Clientes
        {
            path: '/clientes/:sectionSlug',
            name: 'clientes',
            component: () =>
                import ('./views/Cliente.vue')
        },
        //Proveedores
        {
            path: '/proveedores/:sectionSlug',
            name: 'proveedores',
            component: () =>
                import ('./views/Proveedor.vue')
        },
        //Dinamico
        {
            path: '/page/:sectionSlug',
            name: 'dynamicContent',
            // route level code-splitting
            // this generates a separate chunk (dynamicContent.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "dynamicContent" */ './views/DynamicContent.vue')
        },

    ]
})