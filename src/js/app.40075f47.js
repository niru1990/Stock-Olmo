(function(t) {
    function e(e) {
        for (var o, r, s = e[0], u = e[1], c = e[2], l = 0, p = []; l < s.length; l++) r = s[l], i[r] && p.push(i[r][0]), i[r] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
        f && f(e);
        while (p.length) p.shift()();
        return a.push.apply(a, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], o = !0, r = 1; r < n.length; r++) {
                var u = n[r];
                0 !== i[u] && (o = !1)
            }
            o && (a.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }
    var o = {},
        i = { app: 0 },
        a = [];

    function r(t) { return s.p + "js/" + ({ dynamicContent: "dynamicContent" }[t] || t) + "." + { dynamicContent: "6af4e7b3" }[t] + ".js" }

    function s(e) { if (o[e]) return o[e].exports; var n = o[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports }
    s.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise(function(e, o) { n = i[t] = [e, o] });
                e.push(n[2] = o);
                var a, u = document.getElementsByTagName("head")[0],
                    c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = r(t), a = function(e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                a = e && e.target && e.target.src,
                                r = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + a + ")");
                            r.type = o, r.request = a, n[1](r)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout(function() { a({ type: "timeout", target: c }) }, 12e4);
                c.onerror = c.onload = a, u.appendChild(c)
            }
        return Promise.all(e)
    }, s.m = t, s.c = o, s.d = function(t, e, n) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, s.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var o in t) s.d(n, o, function(e) { return t[e] }.bind(null, o));
        return n
    }, s.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return s.d(e, "a", e), e }, s.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = "/", s.oe = function(t) { throw console.error(t), t };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var l = 0; l < u.length; l++) e(u[l]);
    var f = c;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) { t.exports = n("56d7") },
    "106f": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c");
        var o = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { class: t.wrapperClass, attrs: { id: "wrapper" } }, [n("MenuToggleBtn"), n("Menu"), n("ContentOverlay"), n("router-view")], 1)
            },
            a = [],
            r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a", { staticClass: "btn menu-toggle-btn", attrs: { href: "#" }, on: { click: function(e) { return e.preventDefault(), t.toggleMenu(e) } } }, [n("i", { staticClass: "fa fa-bars", attrs: { "aria-hidden": "true" } })])
            },
            s = [],
            u = { methods: { toggleMenu: function() { window.bus.$emit("menu/toggle") } } },
            c = u,
            l = n("2877"),
            f = Object(l["a"])(c, r, s, !1, null, null, null),
            p = f.exports,
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "menu-container" }, [n("ul", { staticClass: "menu" }, [n("li", { staticClass: "menu__top" }, [n("router-link", { staticClass: "menu__logo", attrs: { to: "/" } }, [n("img", { attrs: { src: "/icon-32.png", alt: "icon" } })]), n("a", { staticClass: "menu__title", attrs: { href: "#" }, on: { click: function(e) { return e.preventDefault(), t.openProjectLink(e) } } }, [t._v("\n        Project Name...\n      ")])], 1), n("li", [n("a", { class: t.highlightSection("home"), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.updateMenu("home") } } }, [n("i", { staticClass: "fa fa-home menu__icon", attrs: { "aria-hidden": "true" } }), t._v("\n          Home\n      ")])]), n("li", [n("a", { class: t.highlightSection("products"), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.updateMenu("products") } } }, [n("i", { staticClass: "fa fa-tag menu__icon", attrs: { "aria-hidden": "true" } }), t._v("\n        Products\n        "), n("i", { staticClass: "fa fa-chevron-right menu__arrow-icon", attrs: { "aria-hidden": "true" } })])]), n("li", [n("a", { class: t.highlightSection("customers"), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.updateMenu("customers") } } }, [n("i", { staticClass: "fa fa-users menu__icon", attrs: { "aria-hidden": "true" } }), t._v("\n        Customers\n        "), n("i", { staticClass: "fa fa-chevron-right menu__arrow-icon", attrs: { "aria-hidden": "true" } })])]), n("li", [n("a", { class: t.highlightSection("account"), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.updateMenu("account") } } }, [n("i", { staticClass: "fa fa-user menu__icon", attrs: { "aria-hidden": "true" } }), t._v("\n        Account\n        "), n("i", { staticClass: "fa fa-chevron-right menu__arrow-icon", attrs: { "aria-hidden": "true" } })])])]), n("transition", { attrs: { name: "slide-fade" } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: t.showContextMenu, expression: "showContextMenu" }], staticClass: "context-menu-container" }, [n("ul", { staticClass: "context-menu" }, t._l(t.menuItens, function(e, o) { return n("li", { key: o }, ["title" === e.type ? n("h5", { staticClass: "context-menu__title" }, [n("i", { class: e.icon, attrs: { "aria-hidden": "true" } }), t._v("\n\n            " + t._s(e.txt) + "\n\n            "), 0 === o ? n("a", { staticClass: "context-menu__btn-close", attrs: { href: "#" }, on: { click: function(e) { return e.preventDefault(), t.closeContextMenu(e) } } }, [n("i", { staticClass: "fa fa-window-close", attrs: { "aria-hidden": "true" } })]) : t._e()]) : n("a", { class: t.subMenuClass(e.txt), attrs: { href: "#" }, on: { click: function(n) { n.preventDefault(), t.openSection(e) } } }, [t._v("\n            " + t._s(e.txt) + "\n          ")])]) }))])])], 1)
            },
            m = [],
            d = (n("b54a"), { home: [], products: [{ type: "title", txt: "Products", icon: "fa fa-tag context-menu__title-icon" }, { type: "link", txt: "List Products", link: "/page" }, { type: "link", txt: "Add New Product", link: "/page" }, { type: "link", txt: "Manage Categories", link: "/page" }], customers: [{ type: "title", txt: "Customers", icon: "fa fa-users context-menu__title-icon" }, { type: "link", txt: "List Customers", link: "/page" }, { type: "link", txt: "List Contacts", link: "/page" }, { type: "link", txt: "List Newsletters", link: "/page" }], account: [{ type: "title", txt: "My Account", icon: "fa fa-user context-menu__title-icon" }, { type: "link", txt: "Change Password", link: "/page" }, { type: "link", txt: "Change Settings", link: "/page" }, { type: "link", txt: "Logout", link: "/page" }, { type: "title", txt: "Change Subscription", icon: "fa fa-credit-card context-menu__title-icon" }, { type: "link", txt: "Plans", link: "/page" }, { type: "link", txt: "Payment Settings", link: "/page" }, { type: "link", txt: "Payment History", link: "/page" }] }),
            v = n("375a"),
            g = n.n(v),
            _ = { name: "Menu", data: function() { return { contextSection: "", menuItens: [], menuData: d, activeSubMenu: "" } }, methods: { openProjectLink: function() { alert("You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)") }, updateMenu: function(t) { this.contextSection = t, this.menuItens = this.menuData[t], "home" === t && (this.$router.push("/"), window.bus.$emit("menu/closeMobileMenu")) }, highlightSection: function(t) { return { menu__link: !0, "menu__link--active": t === this.contextSection } }, subMenuClass: function(t) { return { "context-menu__link": !0, "context-menu__link--active": this.activeSubMenu === t } }, closeContextMenu: function() { this.contextSection = "", this.menuItens = [] }, openSection: function(t) { this.activeSubMenu = t.txt, this.$router.push(this.getUrl(t)), window.bus.$emit("menu/closeMobileMenu") }, getUrl: function(t) { var e = g()(t.txt); return "".concat(t.link, "/").concat(e) } }, computed: { showContextMenu: function() { return this.menuItens.length } } },
            b = _,
            y = Object(l["a"])(b, h, m, !1, null, null, null),
            w = y.exports,
            x = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "content-overlay", on: { click: function(e) { return e.preventDefault(), t.closeMobileMenu(e) } } })
            },
            M = [],
            C = { methods: { closeMobileMenu: function() { window.bus.$emit("menu/toggle") } } },
            k = C,
            j = Object(l["a"])(k, x, M, !1, null, null, null),
            S = j.exports,
            O = {
                components: { MenuToggleBtn: p, Menu: w, ContentOverlay: S },
                created: function() {
                    var t = this;
                    window.bus.$on("menu/toggle", function() { window.setTimeout(function() { t.isOpenMobileMenu = !t.isOpenMobileMenu }, 200) }), window.bus.$on("menu/closeMobileMenu", function() { t.isOpenMobileMenu = !1 })
                },
                data: function() { return { isOpenMobileMenu: !1 } },
                computed: { wrapperClass: function() { return { toggled: !0 === this.isOpenMobileMenu } } }
            },
            P = O,
            $ = (n("5c0b"), Object(l["a"])(P, i, a, !1, null, null, null)),
            D = $.exports,
            T = n("8c4f"),
            E = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            L = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "main-content" }, [n("div", { staticClass: "main-content__top" }, [n("h1", { staticClass: "main-content__title" }, [t._v("\n          Home\n      ")])]), n("div", { staticClass: "main-content__body" }, [n("p", [t._v("\n      Hi! This is a simplified version of the responsive menu I implemented in the\n      Admin Panel of a project some time ago. Maybe it can help newcomers to\n      "), n("a", { attrs: { href: "https://vuejs.org/" } }, [t._v("Vue.js")]), t._v(" and "), n("a", { attrs: { href: "https://router.vuejs.org/" } }, [t._v("Vue Router")]), t._v("\n      to have some ideas of how to start puting the framework, router, styles\n      and other concepts together.\n    ")]), n("p", [t._v("\n      You can find the Github Repository of this menu\n      "), n("a", { attrs: { href: "https://github.com/daniel-cintra/vue-menu" } }, [t._v("here")]), t._v(".\n    ")]), n("p", [t._v("\n      The menu can be easily customized changing:\n    ")]), n("ol", [n("li", [n("strong", [t._v("src/components/Menu.vue")]), t._v("\n        where the root level itens can be found.\n      ")]), n("li", [n("strong", [t._v("src/components/support/menu-data.js")]), t._v("\n        where the childs of root level itens can be found.\n      ")]), n("li", [n("strong", [t._v("src/router.js")]), t._v("\n        where each route can be mapped to load the correspondent component.\n        For the sake of simplicity, with exception of the "), n("strong", [t._v("home route")]), t._v(", the\n        sections are loaded dynamically in this example.\n      ")])])])])
            }],
            I = { name: "home" },
            A = I,
            N = Object(l["a"])(A, E, L, !1, null, null, null),
            H = N.exports;
        o["a"].use(T["a"]);
        var B = new T["a"]({ mode: "history", routes: [{ path: "/", name: "home", component: H }, { path: "/page/:sectionSlug", name: "dynamicContent", component: function() { return n.e("dynamicContent").then(n.bind(null, "cf45")) } }] });
        o["a"].config.productionTip = !1, window.bus = new o["a"], new o["a"]({ router: B, render: function(t) { return t(D) } }).$mount("#app")
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var o = n("106f"),
            i = n.n(o);
        i.a
    }
});
//# sourceMappingURL=app.40075f47.js.map