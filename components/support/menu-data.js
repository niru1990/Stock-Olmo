export default {

    // home is a section without childs, set as an empty array
    home: [],

    products: [

        {
            type: 'title',
            txt: 'Products',
            icon: 'fa fa-tag context-menu__title-icon',
        },
        {
            type: 'link',
            txt: 'Materia prima',
            link: '/prod',
        },
        {
            type: 'link',
            txt: 'Manofacturado',
            link: '/productos',
        },
        {
            type: 'link',
            txt: 'Recetas',
            link: '/recetas',
        },
    ],

    ordenes: [

        {
            type: 'title',
            txt: 'Ordenes',
            icon: 'fa fa-tag context-menu__title-icon',
        },
        {
            type: 'link',
            txt: 'Orden de Compra',
            link: '/OC',
        },
        {
            type: 'link',
            txt: 'Orden de Producción',
            link: '/OPr',
        },
        {
            type: 'link',
            txt: 'Orden de Pedido',
            link: '/OP',
        },
    ],

    clientes: [

        {
            type: 'title',
            txt: 'Clientes',
            icon: 'fa fa-tag context-menu__title-icon',
        },
        {
            type: 'link',
            txt: 'Gestor de clientes',
            link: '/clientes',
        },
    ],

    proveedores: [

        {
            type: 'title',
            txt: 'Proveedores',
            icon: 'fa fa-tag context-menu__title-icon',
        },
        {
            type: 'link',
            txt: 'Gestor de proveedores',
            link: '/proveedores',
        },
    ],


};