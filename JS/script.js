!function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).fullpage = n()
}(this, function () {
    "use strict";
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function (e) {
            if (null == this)
                throw TypeError('"this" is null or not defined');
            var n = Object(this)
                , t = n.length >>> 0;
            if ("function" != typeof e)
                throw TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; o < t;) {
                var r = n[o];
                if (e.call(i, r, o, n))
                    return r;
                o++
            }
        }
    }),
        Array.from || (Array.from = (nx = Object.prototype.toString,
            nL = function (e) {
                return "function" == typeof e || "[object Function]" === nx.call(e)
            }
            ,
            nE = 9007199254740991,
            nA = function (e) {
                var n, t;
                return Math.min(Math.max(isNaN(t = Number(n = e)) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t, 0), nE)
            }
            ,
            function (e) {
                var n = Object(e);
                if (null == e)
                    throw TypeError("Array.from requires an array-like object - not null or undefined");
                var t, i = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== i) {
                    if (!nL(i))
                        throw TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (t = arguments[2])
                }
                for (var o, r = nA(n.length), l = nL(this) ? Object(new this(r)) : Array(r), a = 0; a < r;)
                    o = n[a],
                        l[a] = i ? void 0 === t ? i(o, a) : i.call(t, o, a) : o,
                        a += 1;
                return l.length = r,
                    l
            }
        ));
    var e, n, t = window, i = document, o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), r = /(Mac|iPhone|iPod|iPad)/i.test(t.navigator.userAgent), l = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, a = !!window.MSInputMethodContext && !!document.documentMode, c = {
        test: {},
        shared: {}
    };
    function s(e, n) {
        t.console && t.console[e] && t.console[e]("fullPage: " + n)
    }
    function u(e) {
        return "none" !== t.getComputedStyle(e).display
    }
    function f(e) {
        return Array.from(e).filter(function (e) {
            return u(e)
        })
    }
    function d(e, n) {
        return (n = arguments.length > 1 ? n : document) ? n.querySelectorAll(e) : null
    }
    function v(e) {
        e = e || {};
        for (var n = 1, t = arguments.length; n < t; ++n) {
            var i = arguments[n];
            if (i)
                for (var o in i)
                    i.hasOwnProperty(o) && "__proto__" != o && "constructor" != o && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? e[o] = i[o] : e[o] = v(e[o], i[o]))
        }
        return e
    }
    function p(e, n) {
        return null != e && e.classList.contains(n)
    }
    function h() {
        return "innerHeight" in t ? t.innerHeight : i.documentElement.offsetHeight
    }
    function g() {
        return t.innerWidth
    }
    function m(e, n) {
        var t;
        for (t in e = b(e),
            n)
            if (n.hasOwnProperty(t) && null !== t)
                for (var i = 0; i < e.length; i++)
                    e[i].style[t] = n[t];
        return e
    }
    function $(e, n) {
        if (!e)
            return null;
        if (null == n)
            return e.previousElementSibling;
        var t = $(e);
        return t && Z(t, n) ? t : null
    }
    function S(e, n) {
        if (!e)
            return null;
        if (null == n)
            return e.nextElementSibling;
        var t = S(e);
        return t && Z(t, n) ? t : null
    }
    function _(e) {
        return e[e.length - 1]
    }
    function y(e, n) {
        e = L(e) ? e[0] : e;
        for (var t = null != n ? d(n, e.parentNode) : e.parentNode.childNodes, i = 0, o = 0; o < t.length; o++) {
            if (t[o] == e)
                return i;
            1 == t[o].nodeType && i++
        }
        return -1
    }
    function b(e) {
        return L(e) ? e : [e]
    }
    function w(e) {
        e = b(e);
        for (var n = 0; n < e.length; n++)
            e[n].style.display = "none";
        return e
    }
    function x(e) {
        e = b(e);
        for (var n = 0; n < e.length; n++)
            e[n].style.display = "block";
        return e
    }
    function L(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }
    function E(e, n) {
        e = b(e);
        for (var t = 0; t < e.length; t++)
            e[t].classList.add(n);
        return e
    }
    function A(e, n) {
        e = b(e);
        for (var t = n.split(" "), i = 0; i < t.length; i++) {
            n = t[i];
            for (var o = 0; o < e.length; o++)
                e[o].classList.remove(n)
        }
        return e
    }
    function P(e, n) {
        n.appendChild(e)
    }
    function C(e, n, t) {
        var o;
        n = n || i.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var l = e[r];
            (!t || r) && t || (o = n.cloneNode(!0),
                l.parentNode.insertBefore(o, l)),
                o.appendChild(l)
        }
        return e
    }
    function R(e, n) {
        C(e, n, !0)
    }
    function T(e, n) {
        for ("string" == typeof n && (n = U(n)),
            e.appendChild(n); e.firstChild !== n;)
            n.appendChild(e.firstChild)
    }
    function M(e) {
        for (var n = i.createDocumentFragment(); e.firstChild;)
            n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e)
    }
    function N(e, n) {
        return e && 1 === e.nodeType ? Z(e, n) ? e : N(e.parentNode, n) : null
    }
    function k(e, n) {
        H(e, e.nextSibling, n)
    }
    function O(e, n) {
        H(e, e, n)
    }
    function H(e, n, t) {
        L(t) || ("string" == typeof t && (t = U(t)),
            t = [t]);
        for (var i = 0; i < t.length; i++)
            e.parentNode.insertBefore(t[i], n)
    }
    function B() {
        var e = i.documentElement;
        return (t.pageYOffset || e.scrollTop) - (e.clientTop || 0)
    }
    function z(e) {
        return Array.prototype.filter.call(e.parentNode.children, function (n) {
            return n !== e
        })
    }
    function I(e) {
        e.preventDefault()
    }
    function Y(e, n) {
        return e.getAttribute(n)
    }
    function W(e, n, t) {
        i.addEventListener(e, n, "undefined" === t ? null : t)
    }
    function V(e, n, i) {
        t.addEventListener(e, n, "undefined" === i ? null : i)
    }
    function D(e, n, t) {
        i.removeEventListener(e, n, "undefined" === t ? null : t)
    }
    function j(e, n, i) {
        t.removeEventListener(e, n, "undefined" === i ? null : i)
    }
    function F(e) {
        if ("function" == typeof e)
            return !0;
        var n = Object.prototype.toString.call(e);
        return "[object Function]" === n || "[object GeneratorFunction]" === n
    }
    function X(e, n, o) {
        var r;
        o = void 0 === o ? {} : o,
            "function" == typeof t.CustomEvent ? r = new CustomEvent(n, {
                detail: o
            }) : (r = i.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, o),
            e.dispatchEvent(r)
    }
    function Z(e, n) {
        return (e.matches || e.t || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, n)
    }
    function G(e, n) {
        if ("boolean" == typeof n)
            for (var t = 0; t < e.length; t++)
                e[t].style.display = n ? "block" : "none";
        return e
    }
    function U(e) {
        var n = i.createElement("div");
        return n.innerHTML = e.trim(),
            n.firstChild
    }
    function K(e) {
        e = b(e);
        for (var n = 0; n < e.length; n++) {
            var t = e[n];
            t && t.parentElement && t.parentNode.removeChild(t)
        }
    }
    function q(e, n) {
        Array.prototype.filter.call(e, n)
    }
    function Q(e, n, t) {
        for (var i = e[t], o = []; i;)
            (Z(i, n) || null == n) && o.push(i),
                i = i[t];
        return o
    }
    function J(e, n) {
        return Q(e, n, "nextElementSibling")
    }
    function ee(e, n) {
        return Q(e, n, "previousElementSibling")
    }
    function en(e) {
        return Object.keys(e).map(function (n) {
            return e[n]
        })
    }
    function et(e) {
        return e[e.length - 1]
    }
    function ei(e, n) {
        for (var t = 0, i = e.slice(Math.max(e.length - n, 1)), o = 0; o < i.length; o++)
            t += i[o];
        return Math.ceil(t / n)
    }
    function eo(e, n) {
        e.setAttribute(n, Y(e, "data-" + n)),
            e.removeAttribute("data-" + n)
    }
    function er(e, n) {
        var t = [e];
        do
            e = e.parentNode,
                t.push(e);
        while (!Z(e, n));
        return t
    }
    function el() {
        var e = i.activeElement;
        return Z(e, "textarea") || Z(e, "input") || Z(e, "select") || "true" == Y(e, "contentEditable") || "" == Y(e, "contentEditable")
    }
    t.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, n) {
        n = n || window;
        for (var t = 0; t < this.length; t++)
            e.call(n, this[t], t, this)
    }
    ),
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (e, n) {
                if (null == e)
                    throw TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), i = 1; i < arguments.length; i++) {
                    var o = arguments[i];
                    if (null != o)
                        for (var r in o)
                            Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r])
                }
                return t
            },
            writable: !0,
            i: !0
        }),
        window.fp_utils = {
            $: d,
            deepExtend: v,
            hasClass: p,
            getWindowHeight: h,
            css: m,
            prev: $,
            next: S,
            last: _,
            index: y,
            getList: b,
            hide: w,
            show: x,
            isArrayOrList: L,
            addClass: E,
            removeClass: A,
            appendTo: P,
            wrap: C,
            wrapAll: R,
            wrapInner: T,
            unwrap: M,
            closest: N,
            after: k,
            before: O,
            insertBefore: H,
            getScrollTop: B,
            siblings: z,
            preventDefault: I,
            isFunction: F,
            trigger: X,
            matches: Z,
            toggle: G,
            createElementFromHTML: U,
            remove: K,
            filter: q,
            untilAll: Q,
            nextAll: J,
            prevAll: ee,
            showError: s
        };
    var ea = Object.freeze({
        __proto__: null,
        showError: s,
        isVisible: u,
        getVisible: f,
        $: d,
        deepExtend: v,
        hasClass: p,
        getWindowHeight: h,
        o: g,
        css: m,
        prev: $,
        next: S,
        last: _,
        index: y,
        getList: b,
        hide: w,
        show: x,
        isArrayOrList: L,
        addClass: E,
        removeClass: A,
        appendTo: P,
        wrap: C,
        wrapAll: R,
        wrapInner: T,
        unwrap: M,
        closest: N,
        after: k,
        before: O,
        insertBefore: H,
        getScrollTop: B,
        siblings: z,
        preventDefault: I,
        l: Y,
        u: W,
        v: V,
        p: D,
        h: j,
        isFunction: F,
        trigger: X,
        matches: Z,
        toggle: G,
        createElementFromHTML: U,
        remove: K,
        filter: q,
        untilAll: Q,
        nextAll: J,
        prevAll: ee,
        toArray: en,
        g: et,
        S: ei,
        M: eo,
        T: er,
        A: el
    });
    function ec(e) {
        return (ec = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        )(e)
    }
    var es = {
        O: {},
        R: function (e, n) {
            var t = this;
            return "object" !== ec(this.O[e]) && (this.O[e] = []),
                this.O[e].push(n),
                function () {
                    return t.removeListener(e, n)
                }
        },
        removeListener: function (e, n) {
            if ("object" === ec(this.O[e])) {
                var t = this.O[e].indexOf(n);
                t > -1 && this.O[e].splice(t, 1)
            }
        },
        L: function (e) {
            for (var n = this, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                i[o - 1] = arguments[o];
            "object" === ec(this.O[e]) && this.O[e].forEach(function (e) {
                return e.apply(n, i)
            })
        },
        once: function (e, n) {
            var t = this
                , i = this.R(e, function () {
                    i();
                    for (var e = arguments.length, o = Array(e), r = 0; r < e; r++)
                        o[r] = arguments[r];
                    n.apply(t, o)
                })
        }
    }
        , eu = {
            j: 0,
            D: 0,
            slides: [],
            N: [],
            P: null,
            H: null,
            C: !1,
            I: !1,
            W: !1,
            F: !1,
            V: !1,
            Z: void 0,
            B: void 0,
            G: !1,
            canScroll: !0,
            Y: "none",
            U: "none",
            X: !1,
            _: !1,
            J: !0,
            K: 0,
            q: h(),
            nn: !1,
            tn: {}
        };
    function ef(e) {
        Object.assign(eu, e)
    }
    function ed() {
        return eu
    }
    t.state = eu;
    var ev = "onAfterRenderNoAnchor"
        , ep = "onClickOrTouch"
        , eh = "moveSlideLeft"
        , eg = "moveSlideRight"
        , em = "onInitialise"
        , e$ = "bindEvents"
        , eS = "onDestroy"
        , e_ = "contentChanged"
        , ey = "onScrollOverflowScrolled"
        , eb = "onScrollPageAndSlide"
        , ew = "onKeyDown"
        , ex = "onMenuClick"
        , eL = "scrollPage"
        , eE = "landscapeScroll"
        , eA = "scrollBeyondFullpage"
        , eP = "onPerformMovement"
        , eC = "onSlideLeave"
        , eR = "onLeave"
        , eT = "afterSectionLoads"
        , eM = "afterSlideLoads";
    function eN(e) {
        es.L(ep, {
            e: e,
            target: e.target
        })
    }
    function ek() {
        ["click", "touchstart"].forEach(function (e) {
            D(e, eN, {
                passive: !1
            })
        })
    }
    function eO() {
        ef({
            J: !0
        })
    }
    es.R(e$, function () {
        ["click", "touchstart"].forEach(function (e) {
            W(e, eN, {
                passive: !1
            })
        }),
            V("focus", eO),
            es.R(eS, ek)
    });
    var eH = "fullpage-wrapper"
        , e0 = "." + eH
        , eB = "fp-responsive"
        , e1 = "fp-notransition"
        , ez = "fp-destroyed"
        , eI = "fp-enabled"
        , eY = "active"
        , eW = ".active"
        , eV = "fp-completely"
        , eD = "fp-section"
        , ej = "." + eD
        , eF = "#fp-nav"
        , eX = "fp-slide"
        , eZ = "." + eX
        , e8 = ".fp-slide.active"
        , eG = "fp-slides"
        , e7 = ".fp-slides"
        , e2 = "fp-slidesContainer"
        , e3 = "." + e2
        , e4 = "fp-table"
        , eU = "fp-overflow"
        , e5 = "." + eU
        , eK = "fp-is-overflow"
        , eq = ".fp-slidesNav"
        , eQ = ".fp-slidesNav a"
        , eJ = "fp-controlArrow"
        , e6 = "." + eJ
        , e9 = "fp-prev"
        , ne = ".fp-controlArrow.fp-prev"
        , nn = ".fp-controlArrow.fp-next"
        , nt = {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            licenseKey: "",
            credits: {
                enabled: !0,
                label: "Made with fullPage.js",
                position: "right"
            },
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            en: 600,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !0,
            scrollOverflowReset: !1,
            touchSensitivity: 5,
            touchWrapper: null,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            allowCorrectDirection: !1,
            scrollOverflowMacStyle: !0,
            controlArrows: !0,
            controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>',],
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            cards: !1,
            cardsOptions: {
                perspective: 100,
                fadeContent: !0,
                fadeBackground: !0
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            beforeLeave: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            onScrollOverflow: null,
            lazyLoading: !0,
            observer: !0
        }
        , ni = null
        , no = !1
        , nr = v({}, nt)
        , nl = null;
    function na(e) {
        return ni
    }
    function nc() {
        return nl || nt
    }
    function ns() {
        return nr
    }
    function nu(e, n, t) {
        nl[e] = n,
            "internal" !== t && (nr[e] = n)
    }
    function nf() {
        if (!nc().anchors.length) {
            var e = d(nc().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", ni);
            e.length && e.length === d(nc().sectionSelector, ni).length && (no = !0,
                e.forEach(function (e) {
                    nc().anchors.push(Y(e, "data-anchor").toString())
                }))
        }
        if (!nc().navigationTooltips.length) {
            var n = d(nc().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", ni);
            n.length && n.forEach(function (e) {
                nc().navigationTooltips.push(Y(e, "data-tooltip").toString())
            })
        }
    }
    function nd(e) {
        return void 0 !== window["fp_" + e + "Extension"]
    }
    function nv(e) {
        var n = nc();
        return null !== n[e] && "[object Array]" === Object.prototype.toString.call(n[e]) ? n[e].length && c[e] : n[e] && c[e]
    }
    function np(e, n, t) {
        if (nv(e))
            return F(c[e][n]) ? c[e][n](t) : c[e][n]
    }
    function nh() {
        return np("dragAndMove", "isAnimating")
    }
    function ng() {
        return np("dragAndMove", "isGrabbing")
    }
    function nm(e) {
        if (nc().offsetSections && c.offsetSections) {
            var n = np("offsetSections", "getWindowHeight", e);
            return "" !== n ? Math.round(n) + "px" : n
        }
        return h() + "px"
    }
    function n$(e, n) {
        e.insertBefore(n, e.firstChild)
    }
    function nS(e) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function t(e) {
            var t, i, o, r, l, a, c = "", s = 0;
            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;)
                t = n.indexOf(e.charAt(s++)) << 2 | (r = n.indexOf(e.charAt(s++))) >> 4,
                    i = (15 & r) << 4 | (l = n.indexOf(e.charAt(s++))) >> 2,
                    o = (3 & l) << 6 | (a = n.indexOf(e.charAt(s++))),
                    c += String.fromCharCode(t),
                    64 != l && (c += String.fromCharCode(i)),
                    64 != a && (c += String.fromCharCode(o));
            return function (e) {
                for (var n, t = "", i = 0, o = 0, r = 0; i < e.length;)
                    (o = e.charCodeAt(i)) < 128 ? (t += String.fromCharCode(o),
                        i++) : o > 191 && o < 224 ? (t += String.fromCharCode((31 & o) << 6 | 63 & (r = e.charCodeAt(i + 1))),
                            i += 2) : (t += String.fromCharCode((15 & o) << 12 | (63 & (r = e.charCodeAt(i + 1))) << 6 | 63 & (n = e.charCodeAt(i + 2))),
                                i += 3);
                return t
            }(c)
        }
        function i(e) {
            return e.slice(3).slice(0, -3)
        }
        return function (e) {
            var n = e.split("_");
            if (n.length > 1) {
                var o = n[1];
                return t(e.replace(i(n[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + t(o.slice(3).slice(0, -3))
            }
            return i(e)
        }(t(e))
    }
    t.fp_utils = t.fp_utils || {},
        Object.assign(t.fp_utils, {
            prependTo: n$,
            toggleClass: function (e, n, t) {
                if (e.classList && null == t)
                    e.classList.toggle(n);
                else {
                    var i = p(e, n);
                    i && null == t || !t ? A(e, n) : (!i && null == t || t) && E(e, n)
                }
            }
        });
    var n_ = function (e) {
        this.anchor = e.anchor,
            this.item = e.item,
            this.index = e.index(),
            this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1,
            this.isFirst = !this.index,
            this.isActive = e.isActive
    }
        , ny = function (e, n) {
            this.parent = this.parent || null,
                this.selector = n,
                this.anchor = Y(e, "data-anchor") || nc().anchors[y(e, nc().sectionSelector)],
                this.item = e,
                this.isVisible = u(e),
                this.isActive = p(e, eY),
                this.on = p(e, eU) || null != d(e5, e)[0],
                this.rn = n === nc().sectionSelector,
                this.container = N(e, e3) || N(e, e0),
                this.index = function () {
                    return this.siblings().indexOf(this)
                }
        };
    function nb(e) {
        return e.map(function (e) {
            return e.item
        })
    }
    function nw(e, n) {
        return e.find(function (e) {
            return e.item === n
        })
    }
    ny.prototype.siblings = function () {
        return this.rn ? this.isVisible ? eu.N : eu.an : this.parent ? this.parent.slides : 0
    }
        ,
        ny.prototype.prev = function () {
            var e = this.siblings()
                , n = (this.rn ? e.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
            return n >= 0 ? e[n] : null
        }
        ,
        ny.prototype.next = function () {
            var e = this.siblings()
                , n = (this.rn ? e.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
            return n < e.length ? e[n] : null
        }
        ,
        ny.prototype.prevPanel = function () {
            return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null)
        }
        ,
        ny.prototype.nextPanel = function () {
            return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null)
        }
        ,
        ny.prototype.ln = function () {
            return this.rn ? eu.N : eu.un
        }
        ;
    var nx, nL, nE, nA, nP, nC = function (e) {
        n_.call(this, e)
    }, nR = function (e) {
        n_.call(this, e)
    };
    function nT(e) {
        var n = d(e8, e);
        return n.length && (e = n[0]),
            e
    }
    function nM(e) {
        return e ? e.activeSlide ? e.activeSlide : e : null
    }
    function nN(e) {
        var n, t, i = nc();
        return i.autoScrolling && !i.scrollBar ? (n = -e,
            t = d(e0)[0]) : (n = e,
                t = window),
        {
            options: n,
            element: t
        }
    }
    function nk(e, n) {
        !nc().autoScrolling || nc().scrollBar || e.self != window && p(e, eG) ? e.self != window && p(e, eG) ? e.scrollLeft = n : e.scrollTo(0, n) : e.style.top = n + "px"
    }
    function nO(e) {
        var n = "transform " + nc().scrollingSpeed + "ms " + nc().easingcss3;
        return A(e, e1),
            m(e, {
                "-webkit-transition": n,
                transition: n
            })
    }
    function nH(e, n) {
        var t = e.index()
            , i = y(n, ej);
        return t == i ? "none" : t > i ? "up" : "down"
    }
    function n0(e) {
        return E(e, e1)
    }
    function nB(e) {
        return {
            "-webkit-transform": e,
            "-moz-transform": e,
            "-ms-transform": e,
            transform: e
        }
    }
    function n1(e, n) {
        n ? nO(ni) : n0(ni),
            clearTimeout(nP),
            m(ni, nB(e)),
            c.test.cn = e,
            nP = setTimeout(function () {
                A(ni, e1)
            }, 10)
    }
    function nz(e) {
        var n = Math.round(e);
        if (nc().css3 && nc().autoScrolling && !nc().scrollBar)
            n1("translate3d(0px, -" + n + "px, 0px)", !1);
        else if (nc().autoScrolling && !nc().scrollBar)
            m(ni, {
                top: -n + "px"
            }),
                c.test.top = -n + "px";
        else {
            var t = nN(n);
            nk(t.element, t.options)
        }
    }
    function nI(e, n) {
        "internal" !== n && np("fadingEffect", "update", e),
            np("cards", "update_", e),
            nu("scrollingSpeed", e, n)
    }
    c.setScrollingSpeed = nI;
    var nY, nW = null, nV = null, nD = null;
    function nj(e, n, i, o) {
        var r, l, a = (r = e).self != t && p(r, eG) ? r.scrollLeft : !nc().autoScrolling || nc().scrollBar ? B() : r.offsetTop, c = n - a, s = !1, u = eu.G;
        ef({
            G: !0
        }),
            nY && window.cancelAnimationFrame(nY),
            nY = function (r) {
                l || (l = r);
                var f = Math.floor(r - l);
                if (eu.G) {
                    var d = n;
                    i && (d = t.fp_easings[nc().easing](f, a, c, i)),
                        f <= i && nk(e, d),
                        f < i ? window.requestAnimationFrame(nY) : void 0 === o || s || (o(),
                            ef({
                                G: !1
                            }),
                            s = !0)
                } else
                    s || u || (o(),
                        ef({
                            G: !1
                        }),
                        s = !0)
            }
            ,
            window.requestAnimationFrame(nY)
    }
    function nF(e) {
        return e && !e.item ? new nC(new tX(e)) : e ? new nC(e) : null
    }
    function nX(e) {
        return e ? new nR(e) : null
    }
    function nZ(e, n) {
        var t, i, o, r = (t = e,
            i = n,
            (o = {
                afterRender: function () {
                    return {
                        section: nF(eu.P),
                        sn: nX(eu.P.activeSlide)
                    }
                },
                onLeave: function () {
                    return {
                        origin: nF(i.items.origin),
                        destination: nF(i.items.destination),
                        direction: i.direction,
                        trigger: eu.H
                    }
                },
                afterLoad: function () {
                    return o.onLeave()
                },
                afterSlideLoad: function () {
                    return {
                        section: nF(i.items.section),
                        origin: nF(i.items.origin),
                        destination: nF(i.items.destination),
                        direction: i.direction,
                        trigger: eu.H
                    }
                },
                onSlideLeave: function () {
                    return o.afterSlideLoad()
                },
                beforeLeave: function () {
                    return o.onLeave()
                },
                onScrollOverflow: function () {
                    return {
                        section: nF(eu.P),
                        sn: nX(eu.P.activeSlide),
                        position: i.position,
                        direction: i.direction
                    }
                }
            })[t]());
        return X(ni, e, r),
            !1 !== nc()[e].apply(r[Object.keys(r)[0]], en(r))
    }
    function n8(e) {
        var n = nT(e);
        d("video, audio", n).forEach(function (e) {
            e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
        }),
            d('iframe[src*="youtube.com/embed/"]', n).forEach(function (e) {
                e.hasAttribute("data-autoplay") && nG(e),
                    e.onload = function () {
                        e.hasAttribute("data-autoplay") && nG(e)
                    }
            })
    }
    function nG(e) {
        e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }
    function n7(e) {
        var n = nT(e);
        d("video, audio", n).forEach(function (e) {
            e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
        }),
            d('iframe[src*="youtube.com/embed/"]', n).forEach(function (e) {
                /youtube\.com\/embed\//.test(Y(e, "src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
    }
    function n2(e) {
        nc().lazyLoading && d("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", nT(e)).forEach(function (e) {
            if (["src", "srcset"].forEach(function (n) {
                var t = Y(e, "data-" + n);
                null != t && t && (eo(e, n),
                    e.addEventListener("load", function () { }))
            }),
                Z(e, "source")) {
                var n = N(e, "video, audio");
                n && (n.load(),
                    n.onloadeddata = function () { }
                )
            }
        })
    }
    function n3() {
        var e = eu.P.item
            , n = eu.P.activeSlide
            , t = n4(e)
            , i = String(t);
        n && (i = i + "-" + n4(n.item)),
            i = i.replace("/", "-").replace("#", "");
        var o = RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
        nW.className = nW.className.replace(o, ""),
            E(nW, "fp-viewing-" + i)
    }
    function n4(e) {
        if (!e)
            return null;
        var n = Y(e, "data-anchor")
            , t = y(e);
        return null == n && (n = t),
            n
    }
    function nU(e, n, t) {
        var i = "";
        nc().anchors.length && !nc().lockAnchors && (e ? (null != t && (i = t),
            null == n && (n = e),
            ef({
                B: n
            }),
            n5(i + "/" + n)) : (null != e && ef({
                B: n
            }),
                n5(t))),
            n3()
    }
    function n5(e) {
        if (nc().recordHistory)
            location.hash = e;
        else if (o || l)
            t.history.replaceState(void 0, void 0, "#" + e);
        else {
            var n = t.location.href.split("#")[0];
            t.location.replace(n + "#" + e)
        }
    }
    function nK(e, n, t) {
        var i = "Section" === n ? nc().anchors[e] : Y(t, "data-anchor");
        return encodeURI(nc().navigationTooltips[e] || i || n + " " + (e + 1))
    }
    function nq(e) {
        e.cancelable && I(e),
            ef({
                H: "horizontalNav"
            });
        var n = N(this, ej)
            , t = d(e7, N(this, ej))[0]
            , i = nw(eu.N, n).slides[y(N(this, "li"))];
        es.L(eE, {
            slides: t,
            destination: i.item
        })
    }
    function nQ(e, n) {
        nc().slidesNavigation && null != e && (A(d(eW, e), eY),
            E(d("a", d("li", e)[n]), eY))
    }
    var nJ, n6 = {};
    function n9(e, n, t) {
        "all" !== n ? n6[t][n] = e : Object.keys(n6[t]).forEach(function (n) {
            n6[t][n] = e
        })
    }
    function te() {
        return n6
    }
    function tn() {
        var e = N(this, ej);
        p(this, e9) ? n6.m.left && (ef({
            H: "slideArrow"
        }),
            es.L(eh, {
                section: e
            })) : n6.m.right && (ef({
                H: "slideArrow"
            }),
                es.L(eg, {
                    section: e
                }))
    }
    function tt(e) {
        !nc().loopHorizontal && nc().controlArrows && (G(d(ne, e.section), 0 !== e.slideIndex),
            G(d(nn, e.section), null != S(e.destiny)))
    }
    function ti() {
        clearTimeout(nJ),
            ef({
                W: !1
            })
    }
    function to(e, n, t) {
        var i = N(e, ej)
            , o = eu.N.filter(function (e) {
                return e.item == i
            })[0]
            , r = o.slides.filter(function (e) {
                return e.item == n
            })[0]
            , l = {
                slides: e,
                destiny: n,
                direction: t,
                destinyPos: {
                    left: n.offsetLeft
                },
                slideIndex: r.index(),
                section: i,
                sectionIndex: o.index(),
                anchorLink: o.anchor,
                slidesNav: d(eq, i)[0],
                slideAnchor: r.anchor,
                prevSlide: o.activeSlide.item,
                prevSlideIndex: o.activeSlide.index(),
                items: {
                    section: o,
                    origin: o.activeSlide,
                    destination: r
                },
                localIsResizing: eu.F
            };
        l.xMovement = tl(l.prevSlideIndex, l.slideIndex),
            l.direction = l.direction ? l.direction : l.xMovement,
            l.localIsResizing || ef({
                canScroll: !1
            }),
            np("parallax", "applyHorizontal", l),
            np("cards", "apply", l),
            np("dropEffect", "apply", l),
            np("waterEffect", "apply", l),
            nc().onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && F(nc().onSlideLeave) && !1 === nZ("onSlideLeave", l) ? ef({
                W: !1
            }) : (nv("dropEffect") && nc().dropEffect || (E(n, eY),
                A(z(n), eY)),
                tV(),
                l.localIsResizing || (n7(l.prevSlide),
                    n2(n)),
                tt(l),
                o.isActive && !l.localIsResizing && nU(l.slideIndex, l.slideAnchor, l.anchorLink),
                np("continuousHorizontal", "apply", l),
                es.L(eC, l),
                ng() ? tc(l) : tr(e, l, !0),
                nc().interlockedSlides && c.interlockedSlides && (nv("continuousHorizontal") && void 0 !== t && t !== l.xMovement || np("interlockedSlides", "apply", l)))
    }
    function tr(e, n, t) {
        var i = n.destinyPos;
        if (nQ(n.slidesNav, n.slideIndex),
            ef({
                scrollX: Math.round(i.left)
            }),
            nc().css3) {
            var o = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)";
            c.test.dn[n.sectionIndex] = o,
                nv("dragAndMove") && void 0 !== n.vn || nO(d(e3, e)),
                m(d(e3, e), nB(o)),
                nv("interlockedSlides") || clearTimeout(nJ),
                nJ = setTimeout(function () {
                    t && tc(n)
                }, nc().scrollingSpeed)
        } else
            c.test.left[n.sectionIndex] = Math.round(i.left),
                nj(e, Math.round(i.left), nc().scrollingSpeed, function () {
                    t && tc(n)
                })
    }
    function tl(e, n) {
        return e == n ? "none" : e > n ? "left" : "right"
    }
    function ta() {
        clearTimeout(nJ)
    }
    function tc(e) {
        np("continuousHorizontal", "afterSlideLoads", e),
            np("dragAndMove", "afterSlideLoads", e),
            e.localIsResizing || (np("parallax", "afterSlideLoads"),
                np("scrollOverflowReset", "setPrevious", e.prevSlide),
                np("scrollOverflowReset", "reset"),
                F(nc().afterSlideLoad) && nZ("afterSlideLoad", e),
                ef({
                    canScroll: !0
                }),
                n8(e.destiny),
                es.L(eM, e)),
            ef({
                W: !1
            }),
            np("interlockedSlides", "interlockedSlides", e)
    }
    function ts(e, n) {
        nI(0, "internal"),
            void 0 !== n && ef({
                F: !0
            }),
            to(N(e, e7), e),
            void 0 !== n && ef({
                F: !1
            }),
            nI(nr.scrollingSpeed, "internal")
    }
    function tu(e, n) {
        nu("recordHistory", e, n)
    }
    function tf(e, n) {
        e || nz(0),
            nu("autoScrolling", e, n);
        var t = eu.P.item;
        if (nc().autoScrolling && !nc().scrollBar)
            m(nD, {
                overflow: "hidden",
                height: "100%"
            }),
                A(nW, "fp-scrollable"),
                tu(nr.recordHistory, "internal"),
                m(ni, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }),
                null != t && nz(t.offsetTop);
        else if (m(nD, {
            overflow: "visible",
            height: "initial"
        }),
            E(nW, "fp-scrollable"),
            tu(!!nc().autoScrolling && nr.recordHistory, "internal"),
            m(ni, {
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            n0(ni),
            null != t) {
            var i = nN(t.offsetTop);
            i.element.scrollTo(0, i.options)
        }
        X(ni, "setAutoScrolling", e)
    }
    function td() {
        for (var e = d(e8), n = 0; n < e.length; n++)
            ts(e[n], "internal")
    }
    function tv() {
        var e = d(".fp-auto-height")[0] || tN() && d(".fp-auto-height-responsive")[0];
        nc().lazyLoading && e && d(".fp-section:not(.active)").forEach(function (e) {
            var n, t, i, o, r;
            t = (n = e.getBoundingClientRect()).top,
                i = n.bottom,
                o = t + 2 < eu.q && t > 0,
                r = i > 2 && i < eu.q,
                (o || r) && n2(e)
        })
    }
    function tp() {
        X($(this), "click")
    }
    function th() {
        K(d(eF));
        var e = i.createElement("div");
        e.setAttribute("id", "fp-nav");
        var n = i.createElement("ul");
        e.appendChild(n),
            P(e, nW);
        var t = d(eF)[0];
        E(t, "fp-" + nc().navigationPosition),
            nc().showActiveTooltip && E(t, "fp-show-active");
        for (var o = "", r = 0; r < eu.N.length; r++) {
            var l = eu.N[r]
                , a = "";
            nc().anchors.length && (a = l.anchor),
                o += '<li><a href="index.html#' + encodeURI(a) + '"><span class="fp-sr-only">' + nK(l.index(), "Section") + "</span><span></span></a>";
            var c = nc().navigationTooltips[l.index()];
            void 0 !== c && "" !== c && (o += '<div class="fp-tooltip fp-' + nc().navigationPosition + '">' + c + "</div>"),
                o += "</li>"
        }
        d("ul", t)[0].innerHTML = o;
        var s = d("li", d(eF)[0])[eu.P.index()];
        E(d("a", s), eY)
    }
    function tg(e) {
        e.preventDefault && I(e),
            ef({
                H: "verticalNav"
            });
        var n = y(N(this, "#fp-nav li"));
        es.L(eL, {
            destination: eu.N[n]
        })
    }
    function tm(e, n) {
        var t, i, o, r;
        t = e,
            nc().menu && nc().menu.length && d(nc().menu).forEach(function (e) {
                null != e && (A(d(eW, e), eY),
                    E(d('[data-menuanchor="' + t + '"]', e), eY))
            }),
            i = e,
            o = n,
            r = d(eF)[0],
            nc().navigation && null != r && "none" !== r.style.display && (A(d(eW, r), eY),
                E(i ? d('a[href="#' + i + '"]', r) : d("a", d("li", r)[o]), eY))
    }
    n6.m = {
        up: !0,
        down: !0,
        left: !0,
        right: !0
    },
        n6.k = v({}, n6.m),
        es.R(ep, function (e) {
            var n = e.target;
            (Z(n, e6) || N(n, e6)) && tn.call(n, e)
        }),
        c.landscapeScroll = to,
        es.R(e$, function () {
            es.R(eP, ti)
        }),
        c.setRecordHistory = tu,
        c.setAutoScrolling = tf,
        c.test.setAutoScrolling = tf,
        new Date().getTime();
    var t$, tS, t_, ty, tb, tw, tx = (tS = !0,
        t_ = new Date().getTime(),
        ty = !t.fullpage_api,
        function (e, n) {
            var i = new Date().getTime()
                , o = "wheel" === e ? nc().scrollingSpeed : 100;
            return tS = ty || i - t_ >= o,
                ty = !t.fullpage_api,
                tS && (t$ = n(),
                    t_ = i),
                void 0 === t$ || t$
        }
    );
    function tL(e, n) {
        if (F(nc().beforeLeave))
            return tx(eu.H, function () {
                return nZ(e, n)
            })
    }
    function tE(e, n, t) {
        var i = e.item;
        if (null != i) {
            var o, r, l = {
                element: i,
                callback: n,
                isMovementUp: t,
                dtop: tA(i),
                yMovement: nH(eu.P, i),
                anchorLink: e.anchor,
                sectionIndex: e.index(),
                activeSlide: e.activeSlide ? e.activeSlide.item : null,
                leavingSection: eu.P.index() + 1,
                localIsResizing: eu.F,
                items: {
                    origin: eu.P,
                    destination: e
                },
                direction: null
            };
            if (!(eu.P.item == i && !eu.F || nc().scrollBar && B() === l.dtop && !p(i, "fp-auto-height"))) {
                if (null != l.activeSlide && (o = Y(l.activeSlide, "data-anchor"),
                    r = y(l.activeSlide, null)),
                    !l.localIsResizing) {
                    var a, s, u, f = l.yMovement;
                    if (void 0 !== t && (f = t ? "up" : "down"),
                        l.direction = f,
                        nd("dropEffect") && c.dropEffect.onLeave_(l),
                        nd("waterEffect") && c.waterEffect.onLeave_(l),
                        F(nc().beforeLeave) && !1 === tL("beforeLeave", l) || F(nc().onLeave) && !nZ("onLeave", l))
                        return
                }
                np("parallax", "apply", l),
                    np("cards", "apply", l),
                    np("dropEffect", "apply", l),
                    np("waterEffect", "apply", l),
                    nc().autoScrolling && nc().continuousVertical && void 0 !== l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = (a = l,
                        ef({
                            nn: !0
                        }),
                        s = eu.P.item,
                        a.isMovementUp ? O(s, J(s, ej)) : k(s, ee(s, ej).reverse()),
                        nz(eu.P.item.offsetTop),
                        td(),
                        a.pn = s,
                        a.dtop = a.element.offsetTop,
                        a.yMovement = nH(eu.P, a.element),
                        a.leavingSection = a.items.origin.index() + 1,
                        a.sectionIndex = a.items.destination.index(),
                        X(ni, "onContinuousVertical", a),
                        a)),
                    np("scrollOverflowReset", "setPrevious", eu.P.item),
                    l.localIsResizing || n7(eu.P.item),
                    nv("dropEffect") && nc().dropEffect || (E(i, eY),
                        A(z(i), eY)),
                    tV(),
                    n2(i),
                    ef({
                        canScroll: c.test.hn
                    }),
                    nU(r, o, l.anchorLink),
                    es.L(eR, l),
                    function (e) {
                        var n = nc().scrollingSpeed < 700
                            , t = n ? 700 : nc().scrollingSpeed;
                        if (ef({
                            Y: "none",
                            scrollY: Math.round(e.dtop)
                        }),
                            es.L(eP),
                            nc().css3 && nc().autoScrolling && !nc().scrollBar)
                            n1("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0),
                                nv("waterEffect") && td(),
                                nc().scrollingSpeed ? (clearTimeout(tb),
                                    tb = setTimeout(function () {
                                        tP(e),
                                            ef({
                                                canScroll: !n || c.test.hn
                                            })
                                    }, nc().scrollingSpeed)) : tP(e);
                        else {
                            var i = nN(e.dtop);
                            c.test.top = -e.dtop + "px",
                                clearTimeout(tb),
                                nj(i.element, i.options, nc().scrollingSpeed, function () {
                                    nc().scrollBar ? tb = setTimeout(function () {
                                        tP(e)
                                    }, 30) : (tP(e),
                                        ef({
                                            canScroll: !n || c.test.hn
                                        }))
                                })
                        }
                        n && (clearTimeout(tw),
                            tw = setTimeout(function () {
                                ef({
                                    canScroll: !0
                                })
                            }, t))
                    }(l),
                    ef({
                        Z: l.anchorLink
                    }),
                    tm(l.anchorLink, null != (u = l).pn ? u.isMovementUp ? eu.j - 1 : 0 : u.sectionIndex)
            }
        }
    }
    function tA(e) {
        var n = e.offsetHeight
            , t = e.offsetTop
            , i = t
            , o = nv("dragAndMove") && np("dragAndMove", "isGrabbing") ? np("dragAndMove", "isScrollingDown") : t > eu.K
            , r = i - h() + n
            , l = nc().bigSectionsDestination;
        return n > h() ? (o || l) && "bottom" !== l || (i = r) : (o || eu.F && null == S(e)) && (i = r),
            nv("offsetSections") && (i = c.offsetSections.getSectionPosition_(o, i, e)),
            ef({
                K: i
            }),
            i
    }
    function tP(e) {
        var n;
        ef({
            C: !1
        }),
            null != (n = e).pn && (n.isMovementUp ? O(d(ej)[0], n.pn) : k(d(ej)[eu.N.length - 1], n.pn),
                nz(eu.P.item.offsetTop),
                function () {
                    for (var e = d(e8), n = 0; n < e.length; n++)
                        ts(e[n], "internal")
                }(),
                n.sectionIndex = n.items.destination.index(),
                n.leavingSection = n.items.origin.index() + 1,
                ef({
                    nn: !1
                })),
            F(nc().afterLoad) && !e.localIsResizing && nZ("afterLoad", e),
            np("parallax", "afterLoad"),
            np("waterEffect", "afterLoad"),
            np("dropEffect", "afterLoad"),
            np("scrollOverflowReset", "reset"),
            np("resetSliders", "apply", e),
            tV(),
            e.localIsResizing || n8(e.element),
            E(e.element, eV),
            A(z(e.element), eV),
            tv(),
            ef({
                canScroll: !0
            }),
            es.L(eT, e),
            F(e.callback) && e.callback()
    }
    function tC(e, n) {
        nu("fitToSection", e, n)
    }
    function tR() {
        eu.canScroll && (ef({
            F: !0
        }),
            tE(eu.P),
            ef({
                F: !1
            }))
    }
    function tT() {
        var e = nc().responsive || nc().responsiveWidth
            , n = nc().responsiveHeight
            , i = e && t.innerWidth < e
            , o = n && t.innerHeight < n;
        e && n ? tM(i || o) : e ? tM(i) : n && tM(o)
    }
    function tM(e) {
        var n = tN();
        e ? n || (tf(!1, "internal"),
            tC(!1, "internal"),
            w(d(eF)),
            E(nW, eB),
            F(nc().afterResponsive) && nc().afterResponsive.call(ni, e),
            np("responsiveSlides", "toSections"),
            X(ni, "afterResponsive", e)) : n && (tf(nr.autoScrolling, "internal"),
                tC(nr.autoScrolling, "internal"),
                x(d(eF)),
                A(nW, eB),
                F(nc().afterResponsive) && nc().afterResponsive.call(ni, e),
                np("responsiveSlides", "toSlides"),
                X(ni, "afterResponsive", e))
    }
    function tN() {
        return p(nW, eB)
    }
    function tk(e) {
        nc().verticalCentered && (!nc().scrollOverflow && tI.gn(e.item) || tI.mn(e) || p(e.item, e4) || E(e.item, e4))
    }
    c.moveTo = moveTo,
        c.getScrollY = function () {
            return eu.scrollY
        }
        ,
        es.R(eS, function () {
            clearTimeout(tb),
                clearTimeout(tw)
        }),
        c.setFitToSection = tC,
        c.fitToSection = tR,
        c.setResponsive = tM;
    var tO, tH = null;
    function t0(e) {
        var n = e.item
            , t = e.wn.length
            , i = e.index();
        !eu.P && e.isVisible && (E(n, eY),
            tV(),
            tH = eu.P.item),
            nv("offsetSections") && m(n, {
                height: nm(n)
            }),
            nc().paddingTop && m(n, {
                "padding-top": nc().paddingTop
            }),
            nc().paddingBottom && m(n, {
                "padding-bottom": nc().paddingBottom
            }),
            void 0 !== nc().sectionsColor[i] && m(n, {
                "background-color": nc().sectionsColor[i]
            }),
            void 0 !== nc().anchors[i] && n.setAttribute("data-anchor", e.anchor),
            t || tk(e)
    }
    function tB() {
        nc().scrollOverflow && !nc().scrollBar && (tI.bn(),
            tI.Sn())
    }
    function t1() {
        es.removeListener(ev, tB),
            D("keyup", tI.yn)
    }
    c.getActiveSection = function () {
        return eu.P
    }
        ,
        es.R(e$, function () {
            es.R(ev, tB),
                es.R(eR, tI.onLeave),
                es.R(eC, tI.onLeave),
                es.R(eM, tI.afterLoad),
                es.R(eT, tI.afterLoad),
                es.R(eS, t1),
                W("keyup", tI.yn)
        });
    var tz, tI = {
        Mn: null,
        Tn: !0,
        An: !0,
        xn: null,
        On: null,
        kn: function (e) {
            if (!eu.canScroll)
                return I(e),
                    !1
        },
        En: function (e) {
            if (!el() && nc().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !tI.An)
                return I(e),
                    !1
        },
        yn: function () {
            tI.Tn = eu.canScroll
        },
        onLeave: function () {
            clearTimeout(tO),
                tI.An = !1
        },
        afterLoad: function () {
            tI.An = !1,
                clearTimeout(tO),
                tO = setTimeout(function () {
                    tI.Tn = eu.canScroll
                }, 200)
        },
        Rn: function () {
            i.activeElement === this.Mn && (this.Mn.blur(),
                tI.An = !1)
        },
        Sn: function () {
            if (nc().scrollOverflow && tI.Tn) {
                tI.Rn();
                var e = tI.Ln(eu.P.item);
                !e || o || l || (this.Mn = e,
                    requestAnimationFrame(function () {
                        e.focus(),
                            tI.An = !0
                    })),
                    tI.Tn = !1
            }
        },
        bn: function () {
            nc().scrollOverflowMacStyle && !r && E(nW, "fp-scroll-mac"),
                eu.un.forEach(function (e) {
                    if (!(e.slides && e.slides.length || p(e.item, "fp-auto-height-responsive") && tN())) {
                        var n, t = nT(e.item), i = tI.gn(e.item), o = (n = e).rn ? n : n.parent;
                        if (a) {
                            var r = i ? "addClass" : "removeClass";
                            ea[r](o.item, eK),
                                ea[r](e.item, eK)
                        } else
                            E(o.item, eK),
                                E(e.item, eK);
                        e.on || (tI.jn(t),
                            tI.zn(t)),
                            e.on = !0
                    }
                })
        },
        zn: function (e) {
            tI.Ln(e).addEventListener("scroll", tI.Dn),
                e.addEventListener("wheel", tI.kn, {
                    passive: !1
                }),
                e.addEventListener("keydown", tI.En, {
                    passive: !1
                })
        },
        jn: function (e) {
            var n = document.createElement("div");
            n.className = eU,
                T(e, n),
                n.setAttribute("tabindex", "-1")
        },
        Nn: function (e) {
            var n = d(e5, e)[0];
            n && (M(n),
                e.removeAttribute("tabindex"))
        },
        Ln: function (e) {
            var n = nT(e);
            return d(e5, n)[0] || n
        },
        on: function (e) {
            return p(e, eU) || null != d(e5, e)[0]
        },
        mn: function (e) {
            return e.rn && e.activeSlide ? e.activeSlide.on : e.on
        },
        gn: function (e) {
            return tI.Ln(e).scrollHeight > t.innerHeight
        },
        Pn: function (e, n) {
            if (!eu.canScroll)
                return !1;
            if (nc().scrollBar)
                return !0;
            var t = tI.Ln(n);
            if (!nc().scrollOverflow || !p(t, eU) || p(n, "fp-noscroll") || p(nT(n), "fp-noscroll"))
                return !0;
            var i = t.scrollTop
                , o = "down" === e && t.scrollHeight <= Math.ceil(t.offsetHeight + i) + (a ? 1 : 0)
                , r = "up" === e && i <= 0 || o;
            return r || (this.xn = new Date().getTime()),
                r
        },
        Hn: function () {
            this.On = new Date().getTime();
            var e = this.On - tI.xn
                , n = (o || l) && eu.X
                , t = eu._ && e > 600;
            return n && e > 400 || t
        },
        Dn: (tz = 0,
            function (e) {
                var n = e.target.scrollTop
                    , t = "none" !== eu.Y ? eu.Y : tz < n ? "down" : "up";
                tz = n,
                    F(nc().onScrollOverflow) && nZ("onScrollOverflow", {
                        position: n,
                        direction: t
                    }),
                    p(e.target, eU) && eu.canScroll && tI.Pn(t, e.target) && tI.Hn() && tI.gn(eu.P.item) && es.L(ey, {
                        direction: t
                    })
            }
        )
    }, tY = null, tW = null;
    function tV() {
        eu.P = null,
            eu.N.map(function (e) {
                var n = p(e.item, eY);
                e.isActive = n,
                    e.on = tI.on(e.item),
                    n && (eu.P = e),
                    e.slides.length && (e.activeSlide = null,
                        e.slides.map(function (n) {
                            var t = p(n.item, eY);
                            n.on = tI.on(e.item),
                                n.isActive = t,
                                t && (e.activeSlide = n)
                        }))
            }),
            function () {
                var e = eu.P
                    , n = !!eu.P && eu.P.slides.length
                    , t = eu.P ? eu.P.activeSlide : null;
                if (!e && eu.N.length && !eu.C) {
                    if (tY) {
                        var i = tF(tY, eu.N);
                        i && (eu.P = i,
                            eu.P.isActive = !0,
                            E(eu.P.item, eY)),
                            eu.P && nz(eu.P.item.offsetTop)
                    }
                    if (n && !t && tW) {
                        var o = tF(tW, eu.P.slides);
                        o && (eu.P.activeSlide = o,
                            eu.P.activeSlide.isActive = !0,
                            E(eu.P.activeSlide.item, eY)),
                            eu.P.activeSlide && ts(eu.P.activeSlide.item, "internal")
                    }
                }
            }(),
            X(ni, "onUpdateStateDone")
    }
    function tD() {
        var e = d(nc().sectionSelector + ", " + ej, ni)
            , n = f(e)
            , t = Array.from(e).map(function (e) {
                return new tX(e)
            })
            , i = t.filter(function (e) {
                return e.isVisible
            })
            , o = i.reduce(function (e, n) {
                return e.concat(n.slides)
            }, []);
        tY = tj(eu.P),
            tW = tj(eu.P ? eu.P.activeSlide : null),
            eu.j = n.length,
            eu.D = i.reduce(function (e, n) {
                return e + n.slides.length
            }, 0),
            eu.N = i,
            eu.an = t,
            eu.slides = o,
            eu.un = eu.N.concat(eu.slides)
    }
    function tj(e) {
        if (!e)
            return null;
        var n = e ? e.item : null
            , t = e.rn ? eu.an : eu.P.Cn;
        if (n) {
            var i = nw(t, n);
            return i ? i.index() : null
        }
        return null
    }
    function tF(e, n) {
        var t, i = e - 1, o = e;
        do {
            if (t = n[i] || n[o])
                break;
            i -= 1,
                o += 1
        } while (i >= 0 || o < n.length);
        return t
    }
    var tX = function (e) {
        var n = this;
        [].push.call(arguments, nc().sectionSelector),
            ny.apply(this, arguments),
            this.wn = d(nc().slideSelector, e),
            this.Cn = Array.from(this.wn).map(function (e) {
                return new t8(e, n)
            }),
            this.slides = this.Cn.filter(function (e) {
                return e.isVisible
            }),
            this.activeSlide = this.slides.length ? this.slides.filter(function (e) {
                return e.isActive
            })[0] || this.slides[0] : null
    };
    tX.prototype = ny.prototype,
        tX.prototype.constructor = tX;
    var tZ, t8 = function (e, n) {
        this.parent = n,
            ny.call(this, e, nc().slideSelector)
    };
    function tG() {
        E(d(nc().sectionSelector, ni), eD),
            E(d(nc().slideSelector, ni), eX)
    }
    function t7(e) {
        var n, t, o, r = e.slides.length, l = e.wn, a = e.slides, c = 100 / r;
        if (!d(e7, e.item)[0]) {
            var s = i.createElement("div");
            s.className = eG,
                R(l, s);
            var u = i.createElement("div");
            u.className = e2,
                R(l, u)
        }
        m(d(e3, e.item), {
            width: 100 * r + "%"
        }),
            r > 1 && (nc().controlArrows && (t = (n = e).item,
                o = [U(nc().controlArrowsHTML[0]), U(nc().controlArrowsHTML[1])],
                k(d(e7, t)[0], o),
                E(o, eJ),
                E(o[0], e9),
                E(o[1], "fp-next"),
                "#fff" !== nc().controlArrowColor && (m(d(nn, t), {
                    "border-color": "transparent transparent transparent " + nc().controlArrowColor
                }),
                    m(d(ne, t), {
                        "border-color": "transparent " + nc().controlArrowColor + " transparent transparent"
                    })),
                nc().loopHorizontal || w(d(ne, t))),
                nc().slidesNavigation && function (e) {
                    var n = e.item
                        , t = e.slides.length;
                    P(U('<div class="fp-slidesNav"><ul></ul></div>'), n);
                    var i = d(eq, n)[0];
                    E(i, "fp-" + nc().slidesNavPosition);
                    for (var o = 0; o < t; o++)
                        P(U('<li><a href="index.html#"><span class="fp-sr-only">' + nK(o, "Slide", d(eZ, n)[o]) + "</span><span></span></a></li>"), d("ul", i)[0]);
                    m(i, {
                        "margin-left": "-" + i.innerWidth / 2 + "px"
                    });
                    var r = e.activeSlide ? e.activeSlide.index() : 0;
                    E(d("a", d("li", i)[r]), eY)
                }(e)),
            a.forEach(function (e) {
                m(e.item, {
                    width: c + "%"
                }),
                    nc().verticalCentered && tk(e)
            });
        var f = nv("responsiveSlides") ? null : e.activeSlide || null;
        null != f && eu.P && (0 !== eu.P.index() || 0 === eu.P.index() && 0 !== f.index()) ? (ts(f.item, "internal"),
            E(f.item, "fp-initial")) : E(l[0], eY)
    }
    t8.prototype = ny.prototype,
        t8.prototype.constructor = tX;
    var t2 = {
        attributes: !1,
        subtree: !0,
        childList: !0,
        characterData: !0
    };
    function t3() {
        return np("responsiveSlides", "isResponsiveSlidesChanging") || f(d(nc().slideSelector, ni)).length !== eu.D
    }
    function t4(e) {
        var n = t3();
        (t3() || np("responsiveSlides", "isResponsiveSlidesChanging") || f(d(nc().sectionSelector, ni)).length !== eu.j) && !eu.nn && (nc().observer && tZ && tZ.disconnect(),
            tD(),
            tV(),
            nc().anchors = [],
            K(d(eF)),
            np("responsiveSlides", "isResponsiveSlidesChanging") || tG(),
            nf(),
            nc().navigation && th(),
            n && (K(d(eq)),
                K(d(e6))),
            eu.N.forEach(function (e) {
                e.slides.length ? n && t7(e) : t0(e)
            })),
            nc().observer && tZ && d(e0)[0] && tZ.observe(d(e0)[0], t2)
    }
    es.R(e$, function () {
        var e, n, t;
        nc().observer && "MutationObserver" in window && d(e0)[0] && (e = d(e0)[0],
            n = t2,
            (t = new MutationObserver(t4)).observe(e, n),
            tZ = t),
            es.R(e_, t4)
    }),
        c.render = t4;
    var tU = function () {
        var e = !1;
        try {
            var n = Object.defineProperty({}, "passive", {
                get: function () {
                    e = !0
                }
            });
            V("testPassive", null, n),
                j("testPassive", null, n)
        } catch (t) { }
        return function () {
            return e
        }
    }();
    function t5() {
        return !!tU() && {
            passive: !1
        }
    }
    var tK, tq, tQ, tJ, t6 = (tQ = new Date().getTime(),
        tJ = [],
    {
        In: function (e) {
            var n = (e = e || t.event).wheelDelta || -e.deltaY || -e.detail
                , i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX;
            tK = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
            var o = new Date().getTime();
            tq = 0 > Math.max(-1, Math.min(1, n)) ? "down" : "up",
                tJ.length > 149 && tJ.shift(),
                tJ.push(Math.abs(n));
            var r = o - tQ;
            tQ = o,
                r > 200 && (tJ = [])
        },
        Wn: function () {
            var e = ei(tJ, 10) >= ei(tJ, 70);
            return !!tJ.length && e && tK
        },
        Fn: function () {
            return tq
        }
    });
    function t9() {
        var e = nc().css3 ? B() + h() : et(eu.N).item.offsetTop + et(eu.N).item.offsetHeight
            , n = nN(e);
        c.test.top = -e + "px",
            ef({
                canScroll: !1
            }),
            nj(n.element, n.options, nc().scrollingSpeed, function () {
                setTimeout(function () {
                    ef({
                        C: !0
                    }),
                        ef({
                            canScroll: !0
                        })
                }, 30)
            })
    }
    function ie() {
        ni.getBoundingClientRect().bottom >= 0 && it()
    }
    function it() {
        var e = nN(et(eu.N).item.offsetTop);
        ef({
            canScroll: !1
        }),
            nj(e.element, e.options, nc().scrollingSpeed, function () {
                ef({
                    canScroll: !0
                }),
                    ef({
                        C: !1
                    }),
                    ef({
                        Vn: !1
                    })
            })
    }
    var ii, io, ir, il = (ii = !1,
        io = {},
        ir = {},
        function (e, n, t) {
            switch (e) {
                case "set":
                    io[n] = new Date().getTime(),
                        ir[n] = t;
                    break;
                case "isNewKeyframe":
                    ii = new Date().getTime() - io[n] > ir[n]
            }
            return ii
        }
    );
    function ia() {
        var e = eu.P.next();
        !e && (nc().loopBottom || nc().continuousVertical) && (e = eu.N[0]),
            null != e ? tE(e, null, !1) : ni.scrollHeight < nW.scrollHeight && nc().scrollBar && nc().Zn && es.L(eA)
    }
    function ic() {
        var e = eu.P.prev();
        !e && (nc().loopTop || nc().continuousVertical) && (e = et(eu.N)),
            null != e && tE(e, null, !0)
    }
    c.moveSectionDown = ia,
        c.moveSectionUp = ic;
    var is = 0;
    function iu(e) {
        nc().autoScrolling && (eu.canScroll && (e.pageY < is && n6.m.up ? ic() : e.pageY > is && n6.m.down && ia()),
            is = e.pageY)
    }
    function id(e) {
        if (n6.m[e]) {
            var n = "down" === e ? ia : ic;
            nv("scrollHorizontally") && (n = np("scrollHorizontally", "getScrollSection", {
                type: e,
                scrollSection: n
            })),
                nc().scrollOverflow && tI.mn(eu.P) ? tI.Pn(e, eu.P.item) && tI.Hn() && n() : n()
        }
    }
    var iv, ip, ih, ig = 0, im = 0, i$ = 0, iS = 0, i_ = iA(), iy = {
        Bn: "ontouchmove" in window ? "touchmove" : i_ ? i_.move : null,
        Gn: "ontouchstart" in window ? "touchstart" : i_ ? i_.down : null
    };
    function ib(e) {
        var n = N(e.target, ej) || eu.P.item
            , i = tI.mn(eu.P);
        if (iw(e)) {
            ef({
                X: !0,
                _: !1
            }),
                nc().autoScrolling && (i && !eu.canScroll || nc().scrollBar) && I(e);
            var o = iE(e);
            i$ = o.y,
                iS = o.x;
            var r = Math.abs(ig - i$) > t.innerHeight / 100 * nc().touchSensitivity
                , l = Math.abs(im - iS) > g() / 100 * nc().touchSensitivity
                , a = d(e7, n).length && Math.abs(im - iS) > Math.abs(ig - i$)
                , c = ig > i$ ? "down" : "up";
            ef({
                Y: a ? im > iS ? "right" : "left" : c
            }),
                a ? !eu.W && l && (im > iS ? n6.m.right && es.L(eg, {
                    section: n
                }) : n6.m.left && es.L(eh, {
                    section: n
                })) : nc().autoScrolling && eu.canScroll && r && id(c)
        }
    }
    function iw(e) {
        return void 0 === e.pointerType || "mouse" != e.pointerType
    }
    function ix(e) {
        if (nc().fitToSection && ef({
            G: !1
        }),
            iw(e)) {
            var n = iE(e);
            ig = n.y,
                im = n.x
        }
        V("touchend", iL)
    }
    function iL() {
        j("touchend", iL),
            ef({
                X: !1
            })
    }
    function iE(e) {
        var n = {};
        return n.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            n.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            l && iw(e) && nc().scrollBar && void 0 !== e.touches && (n.y = e.touches[0].pageY,
                n.x = e.touches[0].pageX),
            n
    }
    function iA() {
        var e;
        return t.PointerEvent && (e = {
            down: "pointerdown",
            move: "pointermove"
        }),
            e
    }
    function iP(e) {
        nc().autoScrolling && iw(e) && n6.m.up && (eu.canScroll || I(e))
    }
    function iC(e, n) {
        var t = null == n ? eu.P.item : n
            , i = nw(eu.N, t)
            , o = d(e7, t)[0];
        if (!(null == o || nh() || eu.W || i.slides.length < 2)) {
            var r = i.activeSlide
                , l = "left" === e ? r.prev() : r.next();
            if (!l) {
                if (!nc().loopHorizontal)
                    return;
                l = "left" === e ? et(i.slides) : i.slides[0]
            }
            ef({
                W: !c.test.hn
            }),
                to(o, l.item, e)
        }
    }
    function iR(e) {
        iC("left", e)
    }
    function iT(e) {
        iC("right", e)
    }
    function iM(e) {
        var n = eu.N.filter(function (n) {
            return n.anchor === e
        })[0];
        return n || (n = eu.N[void 0 !== e ? e - 1 : 0]),
            n
    }
    function iN(e) {
        null != e && to(N(e, e7), e)
    }
    function ik(e, n) {
        var t = iM(e);
        if (null != t) {
            var i, o, r, l = (i = n,
                null == (r = (o = t).slides.filter(function (e) {
                    return e.anchor === i
                })[0]) && (i = void 0 !== i ? i : 0,
                    r = o.slides[i]),
                r ? r.item : null);
            t.anchor && t.anchor === eu.Z || p(t.item, eY) ? iN(l) : tE(t, function () {
                iN(l)
            })
        }
    }
    function iO(e, n) {
        var t = iM(e);
        void 0 !== n ? ik(e, n) : null != t && tE(t)
    }
    function iH() {
        clearTimeout(ip),
            D("keydown", i0),
            D("keyup", iB)
    }
    function i0(e) {
        clearTimeout(ip);
        var n = e.keyCode
            , t = [37, 39].indexOf(n) > -1
            , o = nc().autoScrolling || nc().fitToSection || t;
        9 === n ? function (e) {
            var n, t, o, r, l, a, c = e.shiftKey, s = i.activeElement, u = iW(nT(eu.P.item));
            function f(e) {
                return I(e),
                    u[0] ? u[0].focus() : null
            }
            if (eu.canScroll) {
                if (n = e,
                    o = (t = iW(i)).indexOf(i.activeElement),
                    l = N(r = t[n.shiftKey ? o - 1 : o + 1], eZ),
                    a = N(r, ej),
                    l || a) {
                    s ? null == N(s, ".fp-section.active,.fp-section.active .fp-slide.active") && (s = f(e)) : f(e);
                    var d = s == u[0]
                        , v = s == u[u.length - 1]
                        , p = c && d;
                    if (p || !c && v) {
                        I(e);
                        var h = function (e) {
                            var n, t = e ? "prevPanel" : "nextPanel", i = [], o = nM((eu.P && eu.P.activeSlide ? eu.P.activeSlide : eu.P)[t]());
                            do
                                (i = iW(o.item)).length && (n = {
                                    Yn: o,
                                    Un: i[e ? i.length - 1 : 0]
                                }),
                                    o = nM(o[t]());
                            while (o && 0 === i.length);
                            return n
                        }(p)
                            , g = h ? h.Yn : null;
                        if (g) {
                            var m = g.rn ? g : g.parent;
                            es.L(eb, {
                                Xn: m.index() + 1,
                                slideAnchor: g.rn ? 0 : g.index()
                            }),
                                ih = h.Un,
                                I(e)
                        }
                    }
                }
            } else
                I(e)
        }(e) : !el() && nc().keyboardScrolling && o && (iv = e.ctrlKey,
            ip = setTimeout(function () {
                !function (e) {
                    var n, t, o = e.shiftKey, r = i.activeElement, l = Z(r, "video") || Z(r, "audio"), a = tI.Pn("up", eu.P.item), c = tI.Pn("down", eu.P.item), s = [37, 39].indexOf(e.keyCode) > -1;
                    if (!([40, 38, 32, 33, 34].indexOf((t = n = e).keyCode) > -1) || eu.C || N(n.target, e5) || n.preventDefault(),
                        eu.canScroll || s)
                        switch (ef({
                            H: "keydown"
                        }),
                        e.keyCode) {
                            case 38:
                            case 33:
                                n6.k.up && a ? eu.C ? es.L(ew, {
                                    e: e
                                }) : ic() : tI.Sn();
                                break;
                            case 32:
                                if (o && n6.k.up && !l && a) {
                                    ic();
                                    break
                                }
                            case 40:
                            case 34:
                                if (n6.k.down && c) {
                                    if (eu.C)
                                        return;
                                    32 === e.keyCode && l || ia()
                                } else
                                    tI.Sn();
                                break;
                            case 36:
                                n6.k.up && iO(1);
                                break;
                            case 35:
                                n6.k.down && iO(eu.N.length);
                                break;
                            case 37:
                                n6.k.left && iR();
                                break;
                            case 39:
                                n6.k.right && iT()
                        }
                }(e)
            }, 0))
    }
    function iB(e) {
        eu.J && (iv = e.ctrlKey)
    }
    function i1() {
        ef({
            J: !1
        }),
            iv = !1
    }
    function iz(e) {
        iY()
    }
    function iI(e) {
        N(ih, eZ) && !N(ih, e8) || iY()
    }
    function iY() {
        ih && (ih.focus(),
            ih = null)
    }
    function iW(e) {
        return [].slice.call(d('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e)).filter(function (e) {
            return "-1" !== Y(e, "tabindex") && null !== e.offsetParent
        })
    }
    c.moveSlideLeft = iR,
        c.moveSlideRight = iT,
        c.moveTo = iO,
        es.R(e$, function () {
            V("blur", i1),
                W("keydown", i0),
                W("keyup", iB),
                es.R(eS, iH),
                es.R(eM, iz),
                es.R(eT, iI)
        });
    var iV = new Date().getTime()
        , iD = [];
    function ij(e) {
        var n, o, r, l;
        e ? (o = "",
            t.addEventListener ? n = "addEventListener" : (n = "attachEvent",
                o = "on"),
            r = "onwheel" in i.createElement("div") ? "wheel" : void 0 !== i.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            l = t5(),
            "DOMMouseScroll" == r ? i[n](o + "MozMousePixelScroll", iF, l) : i[n](o + r, iF, l),
            ni.addEventListener("mousedown", iX),
            ni.addEventListener("mouseup", iZ)) : (i.addEventListener ? (D("mousewheel", iF, !1),
                D("wheel", iF, !1),
                D("MozMousePixelScroll", iF, !1)) : i.detachEvent("onmousewheel", iF),
                ni.removeEventListener("mousedown", iX),
                ni.removeEventListener("mouseup", iZ))
    }
    function iF(e) {
        var n = new Date().getTime()
            , i = p(d(".fp-completely")[0], "fp-normal-scroll")
            , o = function (e, n) {
                new Date().getTime();
                var t, i = eu.C && e.getBoundingClientRect().bottom >= 0 && "up" === t6.Fn(), o = eu.Vn;
                if (o)
                    return I(n),
                        !1;
                if (eu.C) {
                    if (i) {
                        if (!(o || il("isNewKeyframe", "beyondFullpage") && t6.Wn()))
                            return (t = nN(et(eu.N).item.offsetTop + et(eu.N).item.offsetHeight)).element.scrollTo(0, t.options),
                                ef({
                                    Vn: !1
                                }),
                                I(n),
                                !1;
                        if (t6.Wn())
                            return i = !1,
                                ef({
                                    Vn: !0
                                }),
                                ef({
                                    H: "wheel"
                                }),
                                it(),
                                I(n),
                                !1
                    } else
                        il("set", "beyondFullpage", 1e3);
                    if (!o && !i)
                        return !0
                }
            }(ni, e);
        if (eu._ || ef({
            X: !1,
            _: !0,
            Y: "none"
        }),
            !n6.m.down && !n6.m.up)
            return I(e),
                !1;
        if (o)
            return !0;
        if (!1 === o)
            return I(e),
                !1;
        if (nc().autoScrolling && !iv && !i) {
            var r = (e = e || t.event).wheelDelta || -e.deltaY || -e.detail
                , l = Math.max(-1, Math.min(1, r))
                , a = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX
                , c = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !a;
            iD.length > 149 && iD.shift(),
                iD.push(Math.abs(r)),
                nc().scrollBar && I(e);
            var s = n - iV;
            return iV = n,
                s > 200 && (iD = []),
                ef({
                    U: l < 0 ? "down" : l > 0 ? "up" : "none"
                }),
                eu.canScroll && !nh() && ei(iD, 10) >= ei(iD, 70) && c && (ef({
                    H: "wheel"
                }),
                    id(l < 0 ? "down" : "up")),
                !1
        }
        nc().fitToSection && ef({
            G: !1
        })
    }
    function iX(e) {
        var n;
        2 == e.which && (is = n = e.pageY,
            ni.addEventListener("mousemove", iu))
    }
    function iZ(e) {
        2 == e.which && ni.removeEventListener("mousemove", iu)
    }
    function i8(e) {
        e ? (ij(!0),
            function () {
                if (iy.Bn && (o || l) && (!nv("dragAndMove") || "mouseonly" === nc().dragAndMove)) {
                    nc().autoScrolling && (nW.removeEventListener(iy.Bn, iP, {
                        passive: !1
                    }),
                        nW.addEventListener(iy.Bn, iP, {
                            passive: !1
                        }));
                    var e = nc().touchWrapper;
                    e.removeEventListener(iy.Gn, ix),
                        e.removeEventListener(iy.Bn, ib, {
                            passive: !1
                        }),
                        e.addEventListener(iy.Gn, ix),
                        e.addEventListener(iy.Bn, ib, {
                            passive: !1
                        })
                }
            }()) : (ij(!1),
                function () {
                    if (iy.Bn && (o || l)) {
                        nc().autoScrolling && (nW.removeEventListener(iy.Bn, ib, {
                            passive: !1
                        }),
                            nW.removeEventListener(iy.Bn, iP, {
                                passive: !1
                            }));
                        var e = nc().touchWrapper;
                        e.removeEventListener(iy.Gn, ix),
                            e.removeEventListener(iy.Bn, ib, {
                                passive: !1
                            })
                    }
                }())
    }
    c.setMouseWheelScrolling = ij;
    var iG = !0;
    function i7() {
        ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
            D(e, i3, !0)
        })
    }
    function i2(e, n) {
        document["fp_" + e] = n,
            W(e, i3, !0)
    }
    function i3(e) {
        var n = e.type
            , t = !1
            , i = "mouseleave" === n ? e.toElement || e.relatedTarget : e.target;
        i != document && i ? ("touchend" === n && (iG = !1,
            setTimeout(function () {
                iG = !0
            }, 800)),
            ("mouseenter" !== n || iG) && (nc().normalScrollElements.split(",").forEach(function (e) {
                if (!t) {
                    var n = Z(i, e)
                        , o = N(i, e);
                    (n || o) && (c.shared._n || i8(!1),
                        c.shared._n = !0,
                        t = !0)
                }
            }),
                !t && c.shared._n && (i8(!0),
                    c.shared._n = !1))) : i8(!0)
    }
    function i4(e, n) {
        nI(0, "internal"),
            iO(e, n),
            nI(nr.scrollingSpeed, "internal")
    }
    es.R(e$, function () {
        nc().normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
            i2(e, !1)
        }),
            ["mouseleave", "touchend"].forEach(function (e) {
                i2(e, !0)
            })),
            es.R(eS, i7)
    }),
        c.silentMoveTo = i4;
    var iU, i5, iK = h(), iq = g(), iQ = !1;
    function iJ() {
        clearTimeout(iU),
            clearTimeout(i5),
            j("resize", i6)
    }
    function i6() {
        iQ || (!nc().autoScrolling || nc().scrollBar) && nc().fitToSection || oe(h()),
            function () {
                if (o)
                    for (var e = 0; e < 4; e++)
                        i5 = setTimeout(function () {
                            window.requestAnimationFrame(function () {
                                nc().autoScrolling && !nc().scrollBar && (ef({
                                    F: !0
                                }),
                                    i4(eu.P.index() + 1),
                                    ef({
                                        F: !1
                                    }))
                            })
                        }, 200 * e)
            }(),
            iQ = !0,
            clearTimeout(iU),
            iU = setTimeout(function () {
                (function () {
                    if (ef({
                        F: !0
                    }),
                        oe(""),
                        X(ni, "onResize"),
                        nc().autoScrolling || eu.C || function () {
                            if (!nc().autoScrolling || nc().scrollBar) {
                                var e = .01 * t.innerHeight;
                                i.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                            }
                        }(),
                        es.L(e_),
                        tV(),
                        tT(),
                        o) {
                        var e, n, r = i.activeElement;
                        if (!Z(r, "textarea") && !Z(r, "input") && !Z(r, "select")) {
                            var l = h();
                            Math.abs(l - iK) > 20 * Math.max(iK, l) / 100 && (i9(!0),
                                iK = l)
                        }
                    } else
                        e = h(),
                            n = g(),
                            eu.q === e && iq === n || (ef({
                                q: e
                            }),
                                iq = n,
                                i9(!0));
                    X(ni, "onResizeEnds"),
                        ef({
                            F: !1
                        })
                }
                )(),
                    iQ = !1
            }, 400)
    }
    function i9(e) {
        if (!p(ni, ez)) {
            ef({
                F: !0,
                q: h(),
                Qn: g()
            });
            for (var n = eu.N, i = 0; i < n.length; ++i) {
                var o = n[i]
                    , r = d(e7, o.item)[0]
                    , l = o.slides;
                nv("offsetSections") && m(o.item, {
                    height: nm(o.item)
                }),
                    l.length > 1 && to(r, o.activeSlide.item)
            }
            nc().scrollOverflow && tI.bn();
            var a = eu.P.index();
            eu.C || !a || nv("fadingEffect") || nv("dropEffect") || nv("waterEffect") || i4(a + 1),
                ef({
                    F: !1
                }),
                F(nc().afterResize) && e && nc().afterResize.call(ni, t.innerWidth, t.innerHeight),
                F(nc().afterReBuild) && !e && nc().afterReBuild.call(ni),
                X(ni, "afterRebuild")
        }
    }
    function oe(e) {
        eu.N.forEach(function (n) {
            var t = "" !== e || nv("offsetSections") ? nm(n.item) : "";
            m(n.item, {
                height: t
            })
        })
    }
    function on() {
        var e, n, i = t.location.hash;
        if (i.length) {
            var o = i.replace("#", "").split("/")
                , r = i.indexOf("#/") > -1;
            e = r ? "/" + o[1] : decodeURIComponent(o[0]);
            var l = r ? o[2] : o[1];
            l && l.length && (n = decodeURIComponent(l))
        }
        return {
            section: e,
            sn: n
        }
    }
    function ot() {
        j("hashchange", oi)
    }
    function oi() {
        if (!eu.V && !nc().lockAnchors) {
            var e = on()
                , n = e.section
                , t = e.sn
                , i = void 0 === eu.Z
                , o = void 0 === eu.Z && void 0 === t && !eu.W;
            n && n.length && (n && n !== eu.Z && !i || o && !nh() || !eu.W && eu.B != t && !nh()) && es.L(eb, {
                Xn: n,
                slideAnchor: t
            })
        }
    }
    function oo(e) {
        var n = e.target;
        N(n, nc().menu + " [data-menuanchor]") && or.call(n, e)
    }
    function or(e) {
        ef({
            H: "menu"
        }),
            d(nc().menu)[0] && (nc().lockAnchors || !nc().anchors.length) && (I(e),
                es.L(ex, {
                    anchor: Y(this, "data-menuanchor")
                }))
    }
    function ol(e) {
        var n = e.target;
        n && N(n, "#fp-nav a") ? tg.call(n, e.e) : Z(n, ".fp-tooltip") ? tp.call(n) : (Z(n, eQ) || null != N(n, eQ)) && nq.call(n, e.e)
    }
    c.reBuild = i9,
        es.R(e$, function () {
            i6(),
                V("resize", i6),
                es.R(eS, iJ)
        }),
        c.setLockAnchors = function (e) {
            nc().lockAnchors = e
        }
        ,
        es.R(e$, function () {
            V("hashchange", oi),
                es.R(eS, ot)
        }),
        es.R(e$, function () {
            W("wheel", t6.In, t5()),
                es.R(eA, t9),
                es.R(ew, ie)
        }),
        es.R(e$, function () {
            es.R(ep, oo)
        }),
        es.R(e$, function () {
            es.R(ep, ol)
        });
    var oa, oc, os = 0;
    function ou(e) {
        var n, t, i, o, r;
        if (X(ni, "onScroll"),
            !eu.F && eu.P && (et(eu.N),
                !eu.C && !eu.Vn && (!nc().autoScrolling || nc().scrollBar || nv("dragAndMove")) && !ng())) {
            var l, a, c = nv("dragAndMove") ? Math.abs(np("dragAndMove", "getCurrentScroll")) : B(), s = (a = (l = c) > os ? "down" : "up",
                os = l,
                ef({
                    K: l
                }),
                a), u = 0, f = c + h() / 2, d = (nv("dragAndMove") ? np("dragAndMove", "getDocumentHeight") : nW.scrollHeight - h()) === c, v = eu.N;
            if (ef({
                scrollY: c
            }),
                d)
                u = v.length - 1;
            else if (c)
                for (var g = 0; g < v.length; ++g)
                    (N(v[g].item, ej) || v[g].item).offsetTop <= f && (u = g);
            else
                u = 0;
            if (i = s,
                r = (o = eu.P.item.offsetTop) + h(),
                ("up" == i ? r >= B() + h() : o <= B()) && (p(eu.P.item, eV) || (E(eu.P.item, eV),
                    A(z(eu.P.item), eV))),
                t = (n = v[u]).item,
                !n.isActive) {
                ef({
                    V: !0
                });
                var m, $, S = eu.P.item, _ = eu.P.index() + 1, y = nH(eu.P, t), b = n.anchor, w = n.index() + 1, x = n.activeSlide, L = {
                    P: S,
                    sectionIndex: w - 1,
                    anchorLink: b,
                    element: t,
                    leavingSection: _,
                    direction: y,
                    items: {
                        origin: eu.P,
                        destination: n
                    }
                };
                x && ($ = x.anchor,
                    m = x.index()),
                    eu.canScroll && (A(v.filter(function (e) {
                        return e.index() !== n.index()
                    }).map(function (e) {
                        return e.item
                    }), eY),
                        E(t, eY),
                        np("parallax", "afterLoad"),
                        F(nc().beforeLeave) && tL("beforeLeave", L),
                        F(nc().onLeave) && nZ("onLeave", L),
                        F(nc().afterLoad) && nZ("afterLoad", L),
                        np("resetSliders", "apply", {
                            localIsResizing: eu.F,
                            leavingSection: _
                        }),
                        n7(S),
                        n2(t),
                        n8(t),
                        tm(b, w - 1),
                        nc().anchors.length && ef({
                            Z: b
                        }),
                        tV(),
                        nU(m, $, b)),
                    clearTimeout(oa),
                    oa = setTimeout(function () {
                        ef({
                            V: !1
                        })
                    }, 100)
            }
            nc().fitToSection && eu.canScroll && (clearTimeout(oc),
                oc = setTimeout(function () {
                    eu.N.filter(function (e) {
                        var n = e.item.getBoundingClientRect();
                        return Math.round(n.bottom) === Math.round(h()) || 0 === Math.round(n.top)
                    }).length || tR()
                }, nc().en))
        }
    }
    function of(e, n) {
        void 0 !== n ? (n = n.replace(/ /g, "").split(",")).forEach(function (n) {
            n9(e, n, "k")
        }) : (n9(e, "all", "k"),
            nc().keyboardScrolling = e)
    }
    function od(e) {
        var n = e.index();
        void 0 !== nc().anchors[n] && e.isActive && tm(nc().anchors[n], n),
            nc().menu && nc().css3 && null != N(d(nc().menu)[0], e0) && d(nc().menu).forEach(function (e) {
                nW.appendChild(e)
            })
    }
    function ov() {
        var e, n, t = eu.P, i = eu.P.item;
        E(i, eV),
            n2(i),
            tv(),
            n8(i),
            n = iM((e = on()).section),
            e.section && n && (void 0 === n || n.index() !== y(tH)) || !F(nc().afterLoad) || nZ("afterLoad", {
                P: i,
                element: i,
                direction: null,
                anchorLink: t.anchor,
                sectionIndex: t.index(),
                items: {
                    origin: eu.P,
                    destination: eu.P
                }
            }),
            F(nc().afterRender) && nZ("afterRender"),
            X(ni, "afterRender")
    }
    function op(e, n) {
        void 0 !== n ? (n = n.replace(/ /g, "").split(",")).forEach(function (n) {
            n9(e, n, "m")
        }) : n9(e, "all", "m"),
            X(ni, "setAllowScrolling", {
                value: e,
                Jn: n
            })
    }
    function oh() {
        var e = on()
            , n = e.section
            , t = e.sn;
        n ? nc().animateAnchor ? ik(n, t) : i4(n, t) : es.L(ev, null)
    }
    es.R(eS, function () {
        clearTimeout(oa),
            clearTimeout(oc)
    }),
        es.R(e$, function () {
            V("scroll", ou),
                i.body.addEventListener("scroll", ou),
                es.R(eb, function (e) {
                    ik(e.Xn, e.slideAnchor)
                }),
                es.R(ex, function (e) {
                    iO(e.anchor, void 0)
                }),
                es.R(ey, function (e) {
                    ("down" === e.direction ? ia : ic)()
                }),
                es.R(eL, function (e) {
                    tE(e.destination)
                })
        }),
        es.R(eS, function () {
            j("scroll", ou)
        }),
        c.getActiveSlide = function () {
            return nX(eu.P.activeSlide)
        }
        ,
        c.getScrollX = function () {
            return eu.scrollX
        }
        ,
        es.R(e$, function () {
            es.R(eS, ta),
                es.R(eE, function (e) {
                    to(e.slides, e.destination)
                }),
                es.R(eg, function (e) {
                    iT(e.section)
                }),
                es.R(eh, function (e) {
                    iR(e.section)
                })
        }),
        es.R(e$, function () {
            if (nc().credits.enabled) {
                var e = nc().credits.position
                    , n = ["left", "right"].indexOf(e) > -1 ? "".concat(e, ": 0;") : ""
                    , t = '\n        <div class="fp-watermark" style="'.concat(n, '">\n            <a href="https://website.ddevi.com" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(nc().credits.label, "\n            </a>\n        </div>\n    ")
                    , i = et(eu.N)
                    , o = !eu.Kn || nc().credits.enabled;
                i && i.item && o && i.item.insertAdjacentHTML("beforeend", t)
            }
        }),
        function () {
            es.R(em, function () {
                var n, a, c, s, u;
                ef({
                    Kn: (nc().licenseKey,
                        a = function (n) {
                            var t = parseInt("514").toString(16);
                            if (!n || n.length < 29 || 4 === n.split(e[0]).length)
                                return null;
                            var i = ["Each", "for"][o()]().join("")
                                , a = n[["split"]]("-")
                                , c = [];
                            a[i](function (e, n) {
                                if (n < 4) {
                                    var i, l, a, s, u = (l = (i = e)[i.length - 1],
                                        a = ["NaN", "is"][o()]().join(""),
                                        window[a](l) ? r(l) : (s = l) - eY.length);
                                    c.push(u);
                                    var f = r(e[u]);
                                    1 === n && (f = f.toString().padStart(2, "0")),
                                        t += f,
                                        0 !== n && 1 !== n || (t += "-")
                                }
                            });
                            var s = 0
                                , u = "";
                            return n.split("-").forEach(function (e, n) {
                                if (n < 4) {
                                    for (var t = 0, i = 0; i < 4; i++)
                                        i !== c[n] && (t += Math.abs(r(e[i])),
                                            isNaN(e[i]) || s++);
                                    u += l(t)
                                }
                            }),
                                u += l(s),
                            {
                                qn: new Date(t + "T00:00"),
                                $n: t.split("-")[2] === 8 * (eY.length - 2) + "",
                                nt: u
                            }
                        }(n = nc().licenseKey),
                        c = (s = n,
                            u = i[o()]().join(""),
                            s && 0 === u.indexOf(s) && s.length === u.length),
                        (a || c) && (a && t <= a.qn && a.nt === n.split(e[0])[4] || c || a.$n) || !1)
                })
            });
            var e = ["-"]
                , n = "2023-4-29".split("-")
                , t = new Date(n[0], n[1], n[2])
                , i = ["se", "licen", "-", "v3", "l", "gp"];
            function o() {
                return "reverse"
            }
            function r(e) {
                return e ? isNaN(e) ? e.charCodeAt(0) - 72 : e : ""
            }
            function l(e) {
                var n = 72 + e;
                return n > 90 && n < 97 && (n += 15),
                    String.fromCharCode(n).toUpperCase()
            }
        }(),
        c.setKeyboardScrolling = of,
        c.shared.tt = ov,
        c.setAllowScrolling = op;
    var og = {};
    function om() {
        return og
    }
    var o$, oS, o_, oy, ob = !p(nW, nS("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function ow(e) {
        var n, t, o, r;
        if (oS = i.createElement("div"),
            o$ = nS("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),
            ob || (o$ = o$.replace("extensions/", "").replace("Extension", "")),
            oS.innerHTML = o$,
            oS = oS.firstChild,
            "MutationObserver" in window && new MutationObserver(oL).observe(i.body, {
                childList: !0,
                subtree: !1
            }),
            (!ob || nv(e) && c[e]) && (t = void 0 !== og[n = e] && og[n].length,
                o = [],
                r = !1,
                L(og[n]) ? o = og[n] : o.push(og[n]),
                o.forEach(function (e) {
                    var o = function () {
                        if (i.domain.length) {
                            for (var e = i.domain.replace(/^(www\.)/, "").split("."); e.length > 2;)
                                e.shift();
                            return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                        }
                        return ""
                    }()
                        , l = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng==",]
                        , a = nS(l[0])
                        , c = nS(l[1])
                        , s = nS(l[2])
                        , u = nS(l[6])
                        , f = nS(l[3])
                        , d = nS(l[4])
                        , v = nS(l[5])
                        , p = void 0 !== nc()[d + v];
                    t = t || p;
                    var h = 0 > [a, c, s, u].indexOf(o) && 0 !== o.length;
                    if (!t && !p && h)
                        return !1;
                    var g = t ? nS(e) : ""
                        , m = (g = g.split("_")).length > 1 && g[1].indexOf(n, g[1].length - n.length) > -1
                        , $ = g.length > 1 && g[1].toLowerCase().indexOf(d) > -1
                        , S = 0 > g[0].indexOf(o, g[0].length - o.length);
                    r = r || !(S && h && f != g[0]) && (m || $) || !h
                }),
                !r || !ob)) {
            ox();
            var l = nS("MzQ1c2V0SW50ZXJ2YWwxMjM=");
            window[l](ox, 2e3)
        }
    }
    function ox() {
        oS && (oy || (.5 > Math.random() ? n$(nW, oS) : P(oS, nW),
            oy = !0),
            oS.setAttribute("style", nS("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, nS("MTIzICFpbXBvcnRhbnQ7MzQ1"))))
    }
    function oL(e) {
        e.forEach(function (e) {
            if (e.removedNodes[0] && e.removedNodes[0].isEqualNode(oS)) {
                clearTimeout(o_);
                var n = nS("bDIwc2V0VGltZW91dDAzbA==");
                o_ = window[n](oE, 900)
            }
        })
    }
    function oE() {
        oy = !1
    }
    function oA() {
        p(nV, eI) ? s("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (nc().continuousVertical && (nc().loopTop || nc().loopBottom) && (nc().continuousVertical = !1,
            s("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            nc().scrollOverflow && (nc().scrollBar || !nc().autoScrolling) && s("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
            nc().continuousVertical && (nc().scrollBar || !nc().autoScrolling) && (nc().continuousVertical = !1,
                s("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            nc().anchors.forEach(function (e) {
                var n = [].slice.call(d("[name]")).filter(function (n) {
                    return Y(n, "name") && Y(n, "name").toLowerCase() == e.toLowerCase()
                })
                    , t = [].slice.call(d("[id]")).filter(function (n) {
                        return Y(n, "id") && Y(n, "id").toLowerCase() == e.toLowerCase()
                    });
                if (t.length || n.length) {
                    s("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                    var i = t.length ? "id" : "name";
                    (t.length || n.length) && s("error", '"' + e + '" is is being used by another element `' + i + "` property")
                }
            }))
    }
    function oP() {
        return {
            options: nc(),
            internals: {
                container: ni,
                canScroll: eu.canScroll,
                isScrollAllowed: n6,
                getDestinationPosition: tA,
                isTouch: l,
                c: ow,
                getXmovement: tl,
                removeAnimation: n0,
                getTransforms: nB,
                lazyLoad: n2,
                addAnimation: nO,
                performHorizontalMove: tr,
                landscapeScroll: to,
                silentLandscapeScroll: ts,
                keepSlidesPosition: td,
                silentScroll: nz,
                styleSlides: t7,
                styleSection: t0,
                scrollHandler: ou,
                getEventsPage: iE,
                getMSPointer: iA,
                isReallyTouch: iw,
                usingExtension: nv,
                toggleControlArrows: tt,
                touchStartHandler: ix,
                touchMoveHandler: ib,
                nullOrSection: nF,
                items: {
                    SectionPanel: tX,
                    SlidePanel: t8,
                    Item: ny
                },
                getVisible: f,
                getState: ed,
                updateState: tV,
                updateStructuralState: tD,
                activeSlidesNavigation: nQ,
                getPanels: function () {
                    return eu.un
                },
                getSections: function () {
                    return eu.N
                },
                setActiveSection: function (e) {
                    eu.P = e
                }
            }
        }
    }
    function oC(e) {
        var n = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"]
            , t = nS(n[0])
            , i = nS(n[1])
            , o = void 0 !== nc()[t + i]
            , r = "fp_" + e + "Extension";
        og[e] = o ? nc()[t + i] : nc()[e + i],
            c[e] = void 0 !== window[r] ? new window[r] : null,
            c[e] && c[e].c(e)
    }
    function oR(e, n) {
        var o, r, l;
        if (nW = d("body")[0],
            nV = d("html")[0],
            nD = d("html, body"),
            !p(nV, eI))
            return o = "string" == typeof e ? d(e)[0] : e,
                nt.touchWrapper = o,
                nr = Object.assign({}, nl = v({}, nt, n)),
                ni = "string" == typeof e ? d(e)[0] : e,
                es.L(em),
                oA(),
                c.getFullpageData = oP,
                c.version = "4.0.20",
                c.test = Object.assign(c.test, {
                    top: "0px",
                    cn: "translate3d(0px, 0px, 0px)",
                    dn: function () {
                        for (var e = [], n = 0; n < d(nc().sectionSelector, ni).length; n++)
                            e.push("translate3d(0px, 0px, 0px)");
                        return e
                    }(),
                    left: function () {
                        for (var e = [], n = 0; n < d(nc().sectionSelector, ni).length; n++)
                            e.push(0);
                        return e
                    }(),
                    options: nc(),
                    setAutoScrolling: null
                }),
                c.shared = Object.assign(c.shared, {
                    tt: null,
                    _n: !1
                }),
                t.fullpage_api = c,
                t.fullpage_extensions = !0,
                ni && (es.L("beforeInit"),
                    oC("continuousHorizontal"),
                    oC("scrollHorizontally"),
                    oC("resetSliders"),
                    oC("interlockedSlides"),
                    oC("responsiveSlides"),
                    oC("fadingEffect"),
                    oC("dragAndMove"),
                    oC("offsetSections"),
                    oC("scrollOverflowReset"),
                    oC("parallax"),
                    oC("cards"),
                    oC("dropEffect"),
                    oC("waterEffect"),
                    np("dragAndMove", "init"),
                    np("responsiveSlides", "init"),
                    tD(),
                    tV(),
                    nc().scrollBar = nc().scrollBar || nc().hybrid,
                    nf(),
                    function () {
                        m(er(ni, "body"), {
                            height: "100%",
                            position: "relative"
                        }),
                            E(ni, eH),
                            E(nV, eI),
                            ef({
                                q: h()
                            }),
                            A(ni, ez),
                            tG(),
                            np("parallax", "init");
                        for (var e = eu.an, n = 0; n < e.length; n++) {
                            var t = e[n]
                                , i = t.wn
                                , o = Y(t.item, "style");
                            o && t.item.setAttribute("data-fp-styles", o),
                                t0(t),
                                od(t),
                                i.length > 0 && t7(t)
                        }
                        nc().fixedElements && nc().css3 && d(nc().fixedElements).forEach(function (e) {
                            nW.appendChild(e)
                        }),
                            nc().navigation && th(),
                            d('iframe[src*="youtube.com/embed/"]', ni).forEach(function (e) {
                                var n, t;
                                t = Y(n = e, "src"),
                                    n.setAttribute("src", t + (/\?/.test(t) ? "&" : "?") + "enablejsapi=1")
                            }),
                            np("fadingEffect", "apply"),
                            np("waterEffect", "init"),
                            np("dropEffect", "init"),
                            np("cards", "init"),
                            nc().scrollOverflow && tI.bn()
                    }(),
                    op(!0),
                    i8(!0),
                    tf(nc().autoScrolling, "internal"),
                    tT(),
                    n3(),
                    "complete" === i.readyState && oh(),
                    V("load", oh),
                    ov(),
                    ob || ow("l"),
                    tD(),
                    tV(),
                    es.L(e$),
                    np("dragAndMove", "turnOffTouch")),
                t.fullpage_api;
        oA()
    }
    return c.destroy = function (e) {
        X(ni, "destroy", e),
            tf(!1, "internal"),
            op(!0),
            i8(!1),
            of(!1),
            E(ni, ez),
            es.L(eS),
            np("dragAndMove", "destroy"),
            e && (nz(0),
                d("img[data-src], source[data-src], audio[data-src], iframe[data-src]", ni).forEach(function (e) {
                    eo(e, "src")
                }),
                d("img[data-srcset]").forEach(function (e) {
                    eo(e, "srcset")
                }),
                K(d("#fp-nav, .fp-slidesNav, .fp-controlArrow")),
                m(nb(eu.N), {
                    height: "",
                    "background-color": "",
                    padding: ""
                }),
                m(nb(eu.slides), {
                    width: ""
                }),
                m(ni, {
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }),
                m(nD, {
                    overflow: "",
                    height: ""
                }),
                A(nV, eI),
                A(nW, eB + " fp-scrollable"),
                nW.className.split(/\s+/).forEach(function (e) {
                    0 === e.indexOf("fp-viewing") && A(nW, e)
                }),
                nb(eu.un).forEach(function (e) {
                    nc().scrollOverflow && tI.Nn(e),
                        A(e, "fp-table active fp-completely " + eK);
                    var n = Y(e, "data-fp-styles");
                    n && e.setAttribute("style", n),
                        p(e, eD) && !no && e.removeAttribute("data-anchor")
                }),
                n0(ni),
                [".fp-tableCell", e3, e7].forEach(function (e) {
                    d(e, ni).forEach(function (e) {
                        M(e)
                    })
                }),
                m(ni, {
                    "-webkit-transition": "none",
                    transition: "none"
                }),
                A(ni, eH),
                t.scrollTo(0, 0),
                [eD, eX, e2].forEach(function (e) {
                    A(d("." + e), e)
                }))
    }
        ,
        t.fp_easings = v(t.fp_easings, {
            easeInOutCubic: function (e, n, t, i) {
                return (e /= i / 2) < 1 ? t / 2 * e * e * e + n : t / 2 * ((e -= 2) * e * e + 2) + n
            }
        }),
        t.jQuery && (e = t.jQuery,
            n = oR,
            e && n ? e.fn.fullpage = function (t) {
                t = e.extend({}, t, {
                    $: e
                }),
                    new n(this[0], t),
                    Object.keys(c).forEach(function (e) {
                        nc().$.fn.fullpage[e] = c[e]
                    })
            }
                : s("error", "jQuery is required to use the jQuery fullpage adapter!")),
        oR
});

document.addEventListener("DOMContentLoaded", (function () {
    document.body.style.display = "block";
    const e = [];
    document.querySelectorAll(".section").forEach((t => {
        e.push({
            id: t.dataset.sectionid,
            name: t.dataset.sectionname,
            type: t.dataset.sectiontype
        })
    }
    ));
    const t = {
        scrollHorizontally: !0,
        slidesNavPosition: "bottom",
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: e.map((e => e.id)),
        credits: {
            enabled: !1,
            label: "Made with Devi"
        }
    };
    !isMobile() && document.querySelector("header") && (t.menu = "header",
        t.onLeave = (e, t, o, n) => {
            try {
                const e = t.item.dataset.color;
                document.querySelector("header").style.color = e
            } catch (e) { }
        }
    ),
        t.afterLoad = (e, t, o, n) => {
            try {
                t.item.querySelectorAll("video").forEach((e => {
                    e.paused && e.play()
                }
                ))
            } catch (e) { }
        }
        ,
        new fullpage("#fullpage", t);
    document.querySelectorAll(".faqitem").forEach((e => {
        const t = e.querySelector(".faqitem__question")
            , o = e.querySelector(".faqitem__answer")
            , n = e.querySelector(".faqitem__icon");
        o.style.display = "none",
            n.style.transform = "rotate(0deg)",
            t.style.borderBottomLeftRadius = "0.75rem",
            t.style.borderBottomRightRadius = "0.75rem",
            e.addEventListener("click", (() => {
                "true" === e.dataset.expanded ? (o.style.display = "none",
                    e.dataset.expanded = "false",
                    t.style.borderBottomLeftRadius = "0.75rem",
                    t.style.borderBottomRightRadius = "0.75rem",
                    n.style.transform = "rotate(0deg)") : (o.style.display = "block",
                        e.dataset.expanded = "true",
                        t.style.borderBottomLeftRadius = "0",
                        t.style.borderBottomRightRadius = "0",
                        n.style.transform = "rotate(180deg)")
            }
            ))
    }
    ));
    document.querySelectorAll("[data-scrollablegallary]").forEach((e => {
        const t = Array.from(e.children);
        let o, n = 0;
        const r = () => {
            !o && t.length > 2 && (o = setInterval((() => {
                0 === n ? e.scrollLeft += 1 : e.scrollLeft -= 1,
                    0 === e.scrollLeft ? n = 0 : e.scrollLeft > e.scrollWidth - e.clientWidth - 2 && (n = 1)
            }
            ), 10))
        }
            , a = () => {
                o && (clearInterval(o),
                    o = null)
            }
            ;
        r(),
            t.forEach((e => {
                e.addEventListener("mouseover", a),
                    e.addEventListener("mouseout", r)
            }
            ))
    }
    ));
    document.querySelectorAll("[data-newsletter]").forEach((e => {
        const t = e.querySelector("input[type=email]")
            , o = e.querySelector("input[type=text]")
            , n = e.querySelector("button")
            , r = e.querySelector("input[type=checkbox]");
        e.addEventListener("submit", (async a => {
            a.preventDefault();
            const l = t.value
                , d = o.value;
            if (l && d) {
                if (!r.checked)
                    return void alert("Please agree whether you want to receive our newsletter or not.");
                n.disabled = !0,
                    n.innerText = "Subscribing...",
                    n.style.cursor = "not-allowed",
                    n.style.opacity = "0.5",
                    t.disabled = !0,
                    t.style.cursor = "not-allowed",
                    t.style.opacity = "0.5",
                    o.disabled = !0,
                    o.style.cursor = "not-allowed",
                    o.style.opacity = "0.5";
                try {
                    if (!(await fetch("https://website.ddevi.com/api/website/66fa3a3b6f4b6c05b1e89782/newsletter-email", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: d,
                            email: l,
                            payload: ""
                        })
                    })).ok)
                        throw new Error("Something went wrong");
                    e.innerHTML = "<b>You're subscribed!</b>",
                        window.newsletterSubscribe && window.newsletterSubscribe()
                } catch (e) {
                    alert("Something went wrong"),
                        n.innerHTML = "Subscribe",
                        n.disabled = !1,
                        n.style.cursor = "pointer",
                        n.style.opacity = "1",
                        t.disabled = !1,
                        t.style.cursor = "text",
                        t.style.opacity = "1",
                        o.disabled = !1,
                        o.style.cursor = "text",
                        o.style.opacity = "1"
                }
            }
        }
        ))
    }
    ));
    document.querySelectorAll("[data-form]").forEach((e => {
        e.addEventListener("submit", (async t => {
            t.preventDefault();
            const o = e.querySelector("button")
                , n = o.innerHTML
                , r = Object.fromEntries(new FormData(t.target).entries());
            let a = {};
            e.querySelectorAll("input, textarea").forEach((e => {
                a[e.dataset.label] = e.value
            }
            )),
                o.disabled = !0,
                o.innerHTML = "Sending...",
                o.style.cursor = "not-allowed",
                o.style.opacity = "0.5";
            try {
                if (!(await fetch("https://website.ddevi.com/api/website/66fa3a3b6f4b6c05b1e89782/form", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: e.dataset.form,
                        values: r,
                        labelValues: a,
                        payload: ""
                    })
                })).ok)
                    throw new Error("Something went wrong");
                o.innerHTML = "<b>Sent, Thank you!</b>"
            } catch (e) {
                alert("Something went wrong"),
                    o.innerHTML = n,
                    o.disabled = !1,
                    o.style.cursor = "pointer",
                    o.style.opacity = "1"
            }
        }
        ))
    }
    ));
    document.querySelectorAll("[data-termstoggle]").forEach((e => {
        e.addEventListener("click", (e => {
            e.preventDefault();
            const t = document.querySelector("[data-termscontent]");
            t && openModal({
                title: "Terms & Privacy",
                id: "terms-modal",
                content: t ? t.innerHTML : "No terms and privacy found."
            })
        }
        ))
    }
    ))
}
));
const menuToggleButtons = document.querySelectorAll("[data-menutoggle]");
function isMobile() {
    return window.innerWidth < 768
}
function openModal({ title: e, id: t, content: o }) {
    const n = document.createElement("div");
    n.setAttribute("id", t),
        n.classList.add("modal");
    const r = document.createElement("div");
    r.classList.add("content");
    const a = document.createElement("div");
    a.classList.add("header");
    const l = document.createElement("h2");
    l.innerHTML = e,
        a.appendChild(l);
    const d = document.createElement("button");
    d.innerHTML = "&times;",
        d.classList.add("close"),
        d.addEventListener("click", (() => {
            document.body.removeChild(n)
        }
        )),
        a.appendChild(d),
        r.appendChild(a);
    const s = document.createElement("div");
    s.classList.add("children"),
        s.innerHTML = o,
        r.appendChild(s),
        n.appendChild(r),
        document.body.appendChild(n),
        window.onclick = function (e) {
            e.target == n && document.body.removeChild(n)
        }
}
menuToggleButtons.forEach((e => {
    e.addEventListener("click", (t => {
        t.stopPropagation();
        const o = e.dataset.menutoggle
            , n = document.querySelector(`[data-menutogglemenu="${o}"]`);
        n.classList.remove("hidden"),
            n.classList.add("flex"),
            e.classList.remove("block"),
            e.classList.add("hidden"),
            e.dataset.menuexpanded = "true"
    }
    ))
}
)),
    addEventListener("click", (e => {
        const t = document.querySelectorAll("[data-menuexpanded]");
        if (t.length > 0 && t.forEach((e => {
            const t = e.dataset.menutoggle
                , o = document.querySelector(`[data-menutogglemenu="${t}"]`);
            o.classList.remove("flex"),
                o.classList.add("hidden"),
                e.classList.remove("hidden"),
                e.classList.add("block"),
                e.dataset.menuexpanded = "false"
        }
        )),
            e.target.dataset.scrollhandler)
            try {
                let t = document.querySelector(`[data-scrollcontainer="${e.target.dataset.scrollhandler}"]`)
                    , o = e.target.dataset.scrolldirection
                    , n = window.innerWidth / 2;
                "left" === o && (t.scrollLeft -= n),
                    "right" === o && (t.scrollLeft += n)
            } catch (e) {
                console.log("Error: Scroll err0r.", e)
            }
    }
    ))


const ball = document.querySelector('.ball');
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const lag = 0.1;  // Ajusta este valor para más o menos lag

function updateBallPosition() {
    const dx = mouseX - ballX;
    const dy = mouseY - ballY;

    ballX += dx * lag;
    ballY += dy * lag;

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

    requestAnimationFrame(updateBallPosition);
}

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

updateBallPosition();

// Función para crear la animación onLook
function createOnLookAnimation() {
    // Seleccionamos todos los elementos que queremos animar
    const elements = document.querySelectorAll('.animate-onlook');

    // Configuración del Intersection Observer
    const options = {
        root: null, // usa el viewport
        rootMargin: '0px',
        threshold: 0.5 // cuando el elemento es 50% visible
    };

    // Callback que se ejecuta cuando el elemento es visible
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase que activa la animación
                entry.target.classList.add('scale-active');
                // Opcional: dejar de observar después de animar
                // observer.unobserve(entry.target);
            } else {
                // Opcional: remover la clase cuando no está visible
                entry.target.classList.remove('scale-active');
            }
        });
    };

    // Crear el observer
    const observer = new IntersectionObserver(callback, options);

    // Observar cada elemento
    elements.forEach(element => {
        observer.observe(element);
    });
}

// CSS necesario (añádelo a tu archivo CSS)
const styles = `
    .animate-onlook {
        transform: scale(0.8);
        opacity: 0;
        transition: all 0.5s ease-out;
    }

    .scale-active {
        transform: scale(1);
        opacity: 1;
    }
`;

// Crear elemento de estilo y añadirlo al head
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', createOnLookAnimation);