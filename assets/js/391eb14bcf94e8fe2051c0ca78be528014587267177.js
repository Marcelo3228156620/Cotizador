/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) { return "function" == typeof t && "number" != typeof t.nodeType },
        y = function e(t) { return null != t && t === t.window },
        v = { type: !0, src: !0, noModule: !0 };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e }
    var b = "3.3.1",
        w = function(e, t) { return new w.fn.init(e, t) },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() { return o.call(this) },
        get: function(e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = w.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return w.each(this, e) },
        map: function(e) { return this.pushStack(w.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(o.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e) { m(e) },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(T, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : u.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]); return i },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { l["[object " + t + "]"] = t.toLowerCase() });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) { return e === t && (f = !0), 0 },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            re = function() { p() },
            ie = me(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) {
            L = {
                apply: A.length ? function(e, t) { q.apply(e, H.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try { return L.apply(r, m.querySelectorAll(v)), r } catch (e) {} finally { c === b && t.removeAttribute("id") }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i }
            return t
        }

        function se(e) { return e[b] = !0, e }

        function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function pe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function de(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        n = oe.support = {}, o = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function(e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }, r.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]") }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W) }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function(e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) { return (e + "").replace(te, ne) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) }
            return c = null, e
        }, i = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, t, n) { return function(r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) { return i(e, 0, n) }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: se(function(e) { return function(t) { return oe(e, t).length > 0 } }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                        function(t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === h },
                focus: function(e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !r.pseudos.empty(e) },
                header: function(e) { return Y.test(e.nodeName) },
                input: function(e) { return G.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: he(function() { return [0] }),
                last: he(function(e, t) { return [t - 1] }),
                eq: he(function(e, t, n) { return [n < 0 ? n + t : n] }),
                even: he(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                odd: he(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                lt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r); return e }),
                gt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) { n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length)); for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) { for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n); return n }

        function we(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) { l = we(v, d), r(l, [], s, u), c = l.length; while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f)) }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) { return e === t }, s, !0), f = me(function(e) { return O(t, e) > -1 }, s, !0), p = [function(e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) { u.push(f); break }
                            c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) { if (l = u[o], r.relative[c = l.type]) break; if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n; break } }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function(e) { return null == e.getAttribute("disabled") }) || le(P, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        D = w.expr.match.needsContext;

    function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) { return g(t) ? w.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? w.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? w.grep(e, function(e) { return u.call(t, e) > -1 !== n }) : w.filter(t, e, n) }
    w.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) { return 1 === e.nodeType })) }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    });

    function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    w.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return S((e.parentNode || {}).firstChild, e) }, children: function(e) { return S(e.firstChild) }, contents: function(e) { return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes)) } }, function(e, t) { w.fn[e] = function(n, r) { var i = w.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) { var t = {}; return w.each(e.match(M) || [], function(e, n) { t[n] = !0 }), t }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) { n = a.shift(); while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1) }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = { add: function() { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { w.each(n, function(n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function() { return w.each(arguments, function(e, t) { var n; while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s-- }), this }, has: function(e) { return e ? w.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return i = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return i = a = [], n || t || (o = n = ""), this }, locked: function() { return !!i }, fireWith: function(e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!r } };
        return l
    };

    function I(e) { return e }

    function W(e) { throw e }

    function $(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() { return r },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    "catch": function(e) { return i.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() { try { l() } catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) { n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W)) }).promise()
                    },
                    promise: function(e) { return null != e ? w.extend(e, i) : i }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, w.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var F = w.Deferred();
    w.fn.ready = function(e) { return F.then(e)["catch"](function(e) { w.readyException(e) }), this }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() { r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready() }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) { i = !0; for (s in n) z(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(w(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) { return t.toUpperCase() }

    function G(e) { return e.replace(X, "ms-").replace(U, V) }
    var Y = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function Q() { this.expando = w.expando + Q.uid++ }
    Q.uid = 1, Q.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length; while (n--) delete r[t[n]] }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !w.isEmptyObject(t) }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = te(n) } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({ hasData: function(e) { return K.hasData(e) || J.hasData(e) }, data: function(e, t, n) { return K.access(e, t, n) }, removeData: function(e, t) { K.remove(e, t) }, _data: function(e, t, n) { return J.access(e, t, n) }, _removeData: function(e, t) { J.remove(e, t) } }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() { K.set(this, e) }) : z(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = K.get(o, e))) return n; if (void 0 !== (n = ne(o, e))) return n } else this.each(function() { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { K.remove(this, e) }) }
    }), w.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function() { w.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function() { J.remove(e, [t + "queue", n]) }) }) }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { w.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display") },
        se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return w.css(e, t, "") },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }
    w.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? w(this).show() : w(this).hide() }) } });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n }

    function ve(e, t) { for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")) }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() { return !0 }

    function ke() { return !1 }

    function Se() { try { return r.activeElement } catch (e) {} }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) De(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return w().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), e.each(function() { w.event.add(this, t, i, r, n) })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e); if (y) { n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) { return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(M) || [""]).length; while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) { s = w.event.handlers.call(this, t, l), n = 0; while ((o = s[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem, r = 0; while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, t), t.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[w.expando] ? e : new w.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function(e) { return N(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, w.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({ on: function(e, t, n, r) { return De(this, e, t, n, r) }, one: function(e, t, n, r) { return De(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() { w.event.remove(this, e, n, t) }) } });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e }

    function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) { for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e }
    w.extend({
        htmlPrefilter: function(e) { return e.replace(Ne, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) { return Ie(this, e, !0) },
        remove: function(e) { return Ie(this, e) },
        text: function(e) { return z(this, function(e) { return void 0 === e ? w.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Re(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e) }) },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return w.clone(this, e, t) }) },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { w.fn[e] = function(e) { for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
        Be = new RegExp(oe.join("|"), "i");
    ! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) { return Math.round(parseFloat(e)) }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function() { return t(), o }, pixelBoxStyles: function() { return t(), s }, pixelPosition: function() { return t(), i }, reliableMarginLeft: function() { return t(), u }, scrollboxSize: function() { return t(), a } }))
    }();

    function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) { var t = w.cssProps[e]; return t || (t = w.cssProps[e] = Qe(e) || e), t }

    function Ke(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = G(t); return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) { if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() { return et(e, t, r) }) },
            set: function(e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function(e, t) { w.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (w.cssHooks[e + t].set = Ke) }), w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r); return o }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) { return new tt.prototype.init(e, t, n, r, i) }
    w.Tween = tt, tt.prototype = { constructor: tt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function() { var e = tt.propHooks[this.prop]; return e && e.get ? e.get(this) : tt.propHooks._default.get(this) }, run: function(e) { var t, n = tt.propHooks[this.prop]; return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit) } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, w.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() { rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick()) }

    function st() { return e.setTimeout(function() { nt = void 0 }), nt = Date.now() }

    function ut(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, w.queue(e, "fx").length || a.empty.fire() }) }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() { g || fe([e]), J.remove(e, "fxshow"); for (r in d) w.style(e, r, d[r]) })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l
    }
    w.Animation = w.extend(pt, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return ue(n.elem, e, ie.exec(t), n), n }] }, tweener: function(e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [ct], prefilter: function(e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), w.speed = function(e, t, n) { var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue) }, r }, w.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function() {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i) }
        }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { w.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function(e) { w.timers.push(e), w.fx.start() }, w.fx.interval = 13, w.fx.start = function() { rt || (rt = !0, at()) }, w.fx.stop = function() { rt = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function(t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({ attr: function(e, t) { return z(this, w.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { w.removeAttr(this, e) }) } }), w.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = { set: function(e, t, n) { return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({ prop: function(e, t) { return z(this, w.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[w.propFix[e] || e] }) } }), w.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = w.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { w.propFix[this.toLowerCase()] = this });

    function vt(e) { return (e.match(M) || []).join(" ") }

    function mt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function xt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [] }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) { w(this).addClass(e.call(this, t, mt(this))) });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) { w(this).removeClass(e.call(this, t, mt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) { w(this).toggleClass(e.call(this, n, mt(this), t), t) }) : this.each(function() { var t, i, o, a; if (r) { i = 0, o = w(this), a = xt(e); while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) { return null == e ? "" : e + "" })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: { get: function(e) { var t = w.find.attr(e, "value"); return null != t ? t : vt(w.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() { w.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1 } }, h.checkOn || (w.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) { e.stopPropagation() };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({ trigger: function(e, t) { return this.each(function() { w.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return w.event.trigger(e, t, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { w.event.simulate(t, e.target, w.event.fix(e)) };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({ serialize: function() { return w.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = w.prop(this, "elements"); return e ? w.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function(e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) { var u; return i[s] = !0, w.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) { var n, r, i = w.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && w.extend(!0, e, r), e }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) { u.unshift(i); break }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
            if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
        }
        return { state: "success", data: t }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e) },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s) { s = {}; while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2] }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return c ? a : null },
                    setRequestHeader: function(e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this },
                    overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || C; return i && i.abort(t), k(0, t), this }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { E.abort("timeout") }, h.timeout));
                try { c = !1, i.send(b, k) } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) { return w.get(e, t, n, "json") },
        getScript: function(e, t) { return w.get(e, void 0, t, "script") }
    }), w.each(["get", "post"], function(e, t) { w[t] = function(e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e)) } }), w._evalUrl = function(e) { return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, w.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) { w(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = g(e); return this.each(function(n) { w(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { w(this).replaceWith(this.childNodes) }), this }
    }), w.expr.pseudos.hidden = function(e) { return !w.expr.pseudos.visible(e) }, w.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, w.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
            },
            abort: function() { n && n() }
        }
    }), w.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return w.globalEval(e), e } } }), w.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), w.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, o) { t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Yt.pop() || w.expando + "_" + Et++; return this[e] = !0, e } }), w.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || w.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = function() { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), w.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, o, a; return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)) }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { w.fn[t] = function(e) { return this.on(t, e) } }), w.expr.pseudos.animated = function(e) { return w.grep(w.timers, function(t) { return e === t.elem }).length }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { w.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === w.css(e, "position")) e = e.offsetParent; return e || be }) }
    }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) { w.cssHooks[t] = _e(h.pixelPosition, function(e, n) { if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function(e, t) {
        w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) { var o; return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s) }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { w.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), w.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), w.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), w.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() { return e.apply(t || this, r.concat(o.call(arguments))) }, i.guid = e.guid = e.guid || w.guid++, i }, w.holdReady = function(e) { e ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) { var t = w.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return w });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) { return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w }, t || (e.jQuery = e.$ = w), w
});
/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery) }(this, function(e, t) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) { return Object.getOwnPropertyDescriptor(o, e).enumerable }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function(i) {
            var t = "transitionend";

            function e(e) {
                var t = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(t) }, e), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try { return document.querySelector(t) ? t : null } catch (e) { return null }
                },
                getTransitionDurationFromElement: function(e) { if (!e) return 0; var t = i(e).css("transition-duration"); return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0 },
                reflow: function(e) { return e.offsetHeight },
                triggerTransitionEnd: function(e) { i(e).trigger(t) },
                supportsTransitionEnd: function() { return Boolean(t) },
                isElement: function(e) { return (e[0] || e).nodeType },
                typeCheckConfig: function(e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = t[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = { bindType: t, delegateType: t, handle: function(e) { if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }, l
        }(t = t && t.hasOwnProperty("default") ? t.default : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", h = "fade", d = "show", p = function() {
            function i(e) { this._element = e }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() { r.removeData(this._element, o), this._element = null }, e._getRootElement = function(e) {
                var t = we.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n
            }, e._triggerCloseEvent = function(e) { var t = r.Event(u.CLOSE); return r(e).trigger(t), t }, e._removeElement = function(t) {
                var n = this;
                if (r(t).removeClass(d), r(t).hasClass(h)) {
                    var e = we.getTransitionDurationFromElement(t);
                    r(t).one(we.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) { r(e).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = r(this),
                        t = e.data(o);
                    t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function() { return r.fn[n] = c, p._jQueryInterface }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = { CLICK_DATA_API: "click" + v + y, FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y }, N = function() {
            function n(e) { this._element = e }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = m(this._element).closest(S)[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var r = n.querySelector(A);
                                r && m(r).removeClass(b)
                            }
                        if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(b), m(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b)
            }, e.dispose = function() { m.removeData(this._element, _), this._element = null }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = m(this).data(_);
                    e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), n
        }(), m(document).on(O.CLICK_DATA_API, T, function(e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, T, function(e) {
            var t = m(e.target).closest(I)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function() { return m.fn[g] = E, N._jQueryInterface }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", R = "prev", U = "left", B = "right", q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + j, CLICK_DATA_API: "click" + L + j }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function() {
            function o(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners() }
            var e = o.prototype;
            return e.next = function() { this._isSliding || this._slide(W) }, e.nextWhenVisible = function() {!document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide(R) }, e.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(X);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) k(this._element).one(q.SLID, function() { return t.to(e) });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? W : R;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function() { k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(e) { return e = l({}, M, e), we.typeCheckConfig(x, e, F), e }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && k(this._element).on(q.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function(e) { return t.pause(e) }).on(q.MOUSELEAVE, function(e) { return t.cycle(e) }), "ontouchstart" in document.documentElement && k(this._element).on(q.TOUCHEND, function() { t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, 500 + t._config.interval) }))
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e) }, e._getItemByDirection = function(e, t) {
                var n = e === W,
                    i = e === R,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === R ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(X)),
                    r = k.Event(q.SLIDE, { relatedTarget: e, direction: t, from: i, to: n });
                return k(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    k(t).removeClass(Q);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && k(n).addClass(Q)
                }
            }, e._slide = function(e, t) {
                var n, i, r, o = this,
                    s = this._element.querySelector(X),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var f = k.Event(q.SLID, { relatedTarget: l, direction: r, from: a, to: c });
                    if (k(this._element).hasClass(Y)) {
                        k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
                        var h = we.getTransitionDurationFromElement(s);
                        k(s).one(we.TRANSITION_END, function() { k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function() { return k(o._element).trigger(f) }, 0) }).emulateTransitionEnd(h)
                    } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);
                    u && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = k(this).data(P),
                        t = l({}, M, k(this).data());
                    "object" == typeof i && (t = l({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) {
                var t = we.getSelectorFromElement(this);
                if (t) {
                    var n = k(t)[0];
                    if (n && k(n).hasClass(K)) {
                        var i = l({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault()
                    }
                }
            }, s(o, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return M } }]), o
        }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
                var i = k(e[t]);
                re._jQueryInterface.call(i, i.data())
            }
        }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function() { return k.fn[x] = H, re._jQueryInterface }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = { toggle: !0, parent: "" }, fe = { toggle: "boolean", parent: "(string|element)" }, he = { SHOW: "show" + le, SHOWN: "shown" + le, HIDE: "hide" + le, HIDDEN: "hidden" + le, CLICK_DATA_API: "click" + le + ".data-api" }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = we.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) { return e === t });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() { oe(this._element).hasClass(de) ? this.hide() : this.show() }, e.show = function() {
                var e, t, n = this;
                if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function(e) { return e.getAttribute("data-parent") === n._config.parent })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
                    var i = oe.Event(he.SHOW);
                    if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null));
                        var r = this._getDimension();
                        oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() { oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN) }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                    var t = oe.Event(he.HIDE);
                    if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = we.getSelectorFromElement(o);
                                if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() { e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN) }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(e) { this._isTransitioning = e }, e.dispose = function() { oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(e) { return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e }, e._getDimension = function() { return oe(this._element).hasClass(_e) ? _e : ve }, e._getParent = function() {
                var n = this,
                    e = null;
                we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return oe(i).each(function(e, t) { n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]) }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                if (e) {
                    var n = oe(e).hasClass(de);
                    t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(e) { var t = we.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = oe(this),
                        t = e.data(ae),
                        n = l({}, ue, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) {
                        if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return ue } }]), a
        }(), oe(document).on(he.CLICK_DATA_API, Ee, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = oe(this),
                t = we.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            oe(i).each(function() {
                var e = oe(this),
                    t = e.data(ae) ? "toggle" : n.data();
                be._jQueryInterface.call(e, t)
            })
        }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function() { return oe.fn[se] = ce, be._jQueryInterface }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) { Oe = 1; break }
    var ke = Ae && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, Oe)) } };

    function xe(e) { return e && "[object Function]" === {}.toString.call(e) }

    function Pe(e, t) { if (1 !== e.nodeType) return []; var n = getComputedStyle(e, null); return t ? n[t] : n }

    function Le(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

    function je(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = Pe(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e))
    }
    var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
        Me = Ae && /MSIE 10/.test(navigator.userAgent);

    function Fe(e) { return 11 === e ? He : 10 === e ? Me : He || Me }

    function We(e) { if (!e) return document.documentElement; for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function Re(e) { return null !== e.parentNode ? Re(e.parentNode) : e }

    function Ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
        var c = Re(e);
        return c.host ? Ue(c.host, t) : Ue(e, Re(t).host)
    }

    function Be(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) { var i = e.ownerDocument.documentElement; return (e.ownerDocument.scrollingElement || i)[t] }
        return e[t]
    }

    function qe(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function Ke(e, t, n, i) { return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0) }

    function Qe() {
        var e = document.body,
            t = document.documentElement,
            n = Fe(10) && getComputedStyle(t);
        return { height: Ke("Height", e, t, n), width: Ke("Width", e, t, n) }
    }
    var Ye = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }
        }(),
        Ve = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        ze = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e };

    function Ge(e) { return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function Je(e) {
        var t = {};
        try {
            if (Fe(10)) {
                t = e.getBoundingClientRect();
                var n = Be(e, "top"),
                    i = Be(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            o = "HTML" === e.nodeName ? Qe() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = Pe(e);
            l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c
        }
        return Ge(r)
    }

    function Ze(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Fe(10),
            r = "HTML" === t.nodeName,
            o = Je(e),
            s = Je(t),
            a = je(e),
            l = Pe(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Ge({ top: o.top - s.top - c, left: o.left - s.left - u, width: o.width, height: o.height });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Be(t, "top"),
                r = Be(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function Xe(e) { if (!e || !e.parentElement || Fe()) return document.documentElement; for (var t = e.parentElement; t && "none" === Pe(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function $e(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? Xe(e) : Ue(e, t);
        if ("viewport" === i) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = Ze(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : Be(n),
                a = t ? 0 : Be(n, "left");
            return Ge({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ze(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) { var n = t.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t))) }(s)) o = l;
            else {
                var c = Qe(),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function et(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = $e(i, n, o, r),
            a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(e) { return ze({ key: e }, a[e], { area: (t = a[e], t.width * t.height) }); var t }).sort(function(e, t) { return t.area - e.area }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function tt(e, t, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return Ze(n, i ? Xe(t) : Ue(t, n), i) }

    function nt(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return { width: e.offsetWidth + i, height: e.offsetHeight + n }
    }

    function it(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function rt(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r
    }

    function ot(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = ot(e, function(e) { return e[t] === n }); return e.indexOf(i) }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e))
        }), n
    }

    function at(e, n) { return e.some(function(e) { var t = e.name; return e.enabled && t === n }) }

    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function ct(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function ut(e, t, n, i) {
        n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, { passive: !0 });
        var r = je(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, { passive: !0 }), o || e(je(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function ft() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function ht(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function dt(n, i) { Object.keys(i).forEach(function(e) { var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t }) }

    function pt(e, t, n) {
        var i = ot(e, function(e) { return e.name === t }),
            r = !!i && e.some(function(e) { return e.name === n && e.enabled && e.order < i.order });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        gt = mt.slice(3);

    function _t(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = gt.indexOf(e),
            i = gt.slice(n + 1).concat(gt.slice(0, n));
        return t ? i.reverse() : i
    }
    var vt = "flip",
        yt = "clockwise",
        Et = "counterclockwise";

    function bt(e, r, o, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            i = n.indexOf(ot(n, function(e) { return -1 !== e.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t) }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Ge(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, n, r, o)
            })
        })).forEach(function(n, i) { n.forEach(function(e, t) { ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1)) }) }), s
    }
    var wt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = { start: Ve({}, l, o[l]), end: Ve({}, l, o[l] + o[c] - s[c]) };
                            e.offsets.popper = ze({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || We(e.instance.popper);
                        e.instance.reference === t && (t = We(t));
                        var n = lt("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function(e) { var t = u[e]; return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t) },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = ze({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) { if (!(i = e.instance.popper.querySelector(i))) return e } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);
                        var m = a[f] + a[c] / 2 - p / 2,
                            g = Pe(e.instance.popper),
                            _ = parseFloat(g["margin" + u], 10),
                            v = parseFloat(g["border" + u + "Width"], 10),
                            y = m - e.offsets.popper[f] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, m) {
                        if (at(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = it(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (m.behavior) {
                            case vt:
                                E = [_, v];
                                break;
                            case yt:
                                E = _t(_);
                                break;
                            case Et:
                                E = _t(_, !0);
                                break;
                            default:
                                E = m.behavior
                        }
                        return E.forEach(function(e, t) {
                            if (_ !== e || E.length === t + 1) return p;
                            _ = p.placement.split("-")[0], v = it(_);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(g.left),
                                l = o(i.right) > o(g.right),
                                c = o(i.top) < o(g.top),
                                u = o(i.bottom) > o(g.bottom),
                                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                                h = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = ot(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = ot(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : t.gpuAcceleration,
                            a = Je(We(e.instance.popper)),
                            l = { position: r.position },
                            c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            h = lt("transform"),
                            d = void 0,
                            p = void 0;
                        if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";
                        else {
                            var m = "bottom" === u ? -1 : 1,
                                g = "right" === f ? -1 : 1;
                            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f
                        }
                        var _ = { "x-placement": e.placement };
                        return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) { var t, n; return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e) }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e },
                    onLoad: function(e, t, n, i, r) {
                        var o = tt(r, t, e, n.positionFixed),
                            s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), dt(t, { position: n.positionFixed ? "fixed" : "absolute" }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ct = function() {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) { n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return ze({ name: e }, n.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(e) { e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state) }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Ye(o, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return ft.call(this) } }]), o
        }();
    Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;
    var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + It, KEYDOWN_DATA_API: "keydown" + At + It, KEYUP_DATA_API: "keyup" + At + It }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Xt = function() {
            function c(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var e = c.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
                    var e = c._getParentFromElement(this._element),
                        t = Tt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !t) {
                        var n = { relatedTarget: this._element },
                            i = Tt.Event(kt.SHOW, n);
                        if (Tt(e).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n)) }
                    }
                }
            }, e.dispose = function() { Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() {
                var t = this;
                Tt(this._element).on(kt.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })
            }, e._getConfig = function(e) { return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ut))
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = Tt(this._element.parentNode),
                    t = Yt;
                return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t
            }, e._detectNavbar = function() { return 0 < Tt(this._element).closest(".navbar").length }, e._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e } : e.offset = this._config.offset;
                var n = { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n
            }, c._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = Tt(this).data(Dt);
                    if (e || (e = new c(this, "object" == typeof t ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, c._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
                        var r = c._getParentFromElement(t[n]),
                            o = Tt(t[n]).data(Dt),
                            s = { relatedTarget: t[n] };
                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
                                var l = Tt.Event(kt.HIDE, s);
                                Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(e) { var t, n = we.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, c._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
                    var t = c._getParentFromElement(this),
                        n = Tt(t).hasClass(Pt);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(qt));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t.querySelector(Wt);
                            Tt(o).trigger("focus")
                        }
                        Tt(this).trigger("click")
                    }
                }
            }, s(c, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return Jt } }, { key: "DefaultType", get: function() { return Zt } }]), c
        }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function(e) { e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle") }).on(kt.CLICK_DATA_API, Rt, function(e) { e.stopPropagation() }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function() { return Tt.fn[St] = Ot, Xt._jQueryInterface }, Xt),
        qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, sn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, an = { HIDE: "hide" + nn, HIDDEN: "hidden" + nn, SHOW: "show" + nn, SHOWN: "shown" + nn, FOCUSIN: "focusin" + nn, RESIZE: "resize" + nn, CLICK_DISMISS: "click.dismiss" + nn, KEYDOWN_DISMISS: "keydown.dismiss" + nn, MOUSEUP_DISMISS: "mouseup.dismiss" + nn, MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn, CLICK_DATA_API: "click" + nn + ".data-api" }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function() {
            function r(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 }
            var e = r.prototype;
            return e.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, e.show = function(e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
                    var n = $t.Event(an.SHOW, { relatedTarget: e });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function(e) { return t.hide(e) }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function() { $t(t._element).one(an.MOUSEUP_DISMISS, function(e) { $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return t._showElement(e) }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(an.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(fn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
                            var r = we.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(we.TRANSITION_END, function(e) { return t._hideModal(e) }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() { $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(e) { return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e }, e._showElement = function(e) {
                var t = this,
                    n = $t(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();
                var i = $t.Event(an.SHOWN, { relatedTarget: e }),
                    r = function() { t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i) };
                if (n) {
                    var o = we.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, e._enforceFocus = function() {
                var t = this;
                $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function(e) { document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus() })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function(e) { 27 === e.which && (e.preventDefault(), t.hide()) }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? $t(window).on(an.RESIZE, function(e) { return t.handleUpdate(e) }) : $t(window).off(an.RESIZE)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN) })
            }, e._removeBackdrop = function() { this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) {
                var t = this,
                    n = $t(this._element).hasClass(fn) ? fn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function(e) { t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide()) }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return;
                    if (!n) return void e();
                    var i = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(hn);
                    var r = function() { t._removeBackdrop(), e && e() };
                    if ($t(this._element).hasClass(fn)) {
                        var o = we.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(gn)),
                        t = [].slice.call(document.querySelectorAll(_n));
                    $t(e).each(function(e, t) {
                        var n = t.style.paddingRight,
                            i = $t(t).css("padding-right");
                        $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $t(t).each(function(e, t) {
                        var n = t.style.marginRight,
                            i = $t(t).css("margin-right");
                        $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(gn));
                $t(e).each(function(e, t) {
                    var n = $t(t).data("padding-right");
                    $t(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + _n));
                $t(t).each(function(e, t) { var n = $t(t).data("margin-right"); "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right") });
                var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = ln, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = $t(this).data(tn),
                        t = l({}, on, $t(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(r, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return on } }]), r
        }(), $t(document).on(an.CLICK_DATA_API, pn, function(e) {
            var t, n = this,
                i = we.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var o = $t(t).one(an.SHOW, function(e) { e.isDefaultPrevented() || o.one(an.HIDDEN, function() { $t(n).is(":visible") && n.focus() }) });
            vn._jQueryInterface.call($t(t), r, this)
        }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function() { return $t.fn[en] = rn, vn._jQueryInterface }, vn),
        Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(An = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Dn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, Nn = "out", kn = { HIDE: "hide" + wn, HIDDEN: "hidden" + wn, SHOW: (On = "show") + wn, SHOWN: "shown" + wn, INSERTED: "inserted" + wn, CLICK: "click" + wn, FOCUSIN: "focusin" + wn, FOCUSOUT: "focusout" + wn, MOUSEENTER: "mouseenter" + wn, MOUSELEAVE: "mouseleave" + wn }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function() {
            function i(e, t) {
                if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = yn(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() { clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() {
                var t = this;
                if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = yn.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    yn(this.element).trigger(e);
                    var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = we.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                    yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: jn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { t._handlePopperPlacementChange(e) } }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);
                    var l = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t)
                    };
                    if (yn(this.tip).hasClass(xn)) {
                        var c = we.getTransitionDurationFromElement(this.tip);
                        yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, e.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    i = yn.Event(this.constructor.Event.HIDE),
                    r = function() { t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e() };
                if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
                        var o = we.getTransitionDurationFromElement(n);
                        yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { yn(this.getTipElement()).addClass(Tn + "-" + e) }, e.getTipElement = function() { return this.tip = this.tip || yn(this.config.template)[0], this.tip }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn)
            }, e.setElementContent = function(e, t) { var n = this.config.html; "object" == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t) }, e.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e }, e._getAttachment = function(e) { return An[e.toUpperCase()] }, e._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) { return i.toggle(e) });
                    else if (e !== Wn) {
                        var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        yn(i.element).on(t, i.config.selector, function(e) { return i._enter(e) }).on(n, i.config.selector, function(e) { return i._leave(e) })
                    }
                    yn(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() })
                }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() { t._hoverState === On && t.show() }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() { t._hoverState === Nn && t.hide() }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) { return "number" == typeof(e = l({}, this.constructor.Default, yn(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = yn(this.getTipElement()),
                    t = e.attr("class").match(Sn);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = yn(this).data(bn),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return In } }, { key: "NAME", get: function() { return En } }, { key: "DATA_KEY", get: function() { return bn } }, { key: "Event", get: function() { return kn } }, { key: "EVENT_KEY", get: function() { return wn } }, { key: "DefaultType", get: function() { return Dn } }]), i
        }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function() { return yn.fn[En] = Cn, Rn._jQueryInterface }, Rn),
        Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Gn = l({}, Ki.DefaultType, { content: "(string|element|function)" }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = { HIDE: "hide" + Kn, HIDDEN: "hidden" + Kn, SHOW: (Zn = "show") + Kn, SHOWN: "shown" + Kn, INSERTED: "inserted" + Kn, CLICK: "click" + Kn, FOCUSIN: "focusin" + Kn, FOCUSOUT: "focusout" + Kn, MOUSEENTER: "mouseenter" + Kn, MOUSELEAVE: "mouseleave" + Kn }, ti = function(e) {
            var t, n;

            function i() { return e.apply(this, arguments) || this }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(e) { Un(this.getTipElement()).addClass(Yn + "-" + e) }, r.getTipElement = function() { return this.tip = this.tip || Un(this.config.template)[0], this.tip }, r.setContent = function() {
                var e = Un(this.getTipElement());
                this.setElementContent(e.find(Xn), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn)
            }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() {
                var e = Un(this.getTipElement()),
                    t = e.attr("class").match(Vn);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = Un(this).data(qn),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return zn } }, { key: "NAME", get: function() { return Bn } }, { key: "DATA_KEY", get: function() { return qn } }, { key: "Event", get: function() { return ei } }, { key: "EVENT_KEY", get: function() { return Kn } }, { key: "DefaultType", get: function() { return Gn } }]), i
        }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function() { return Un.fn[Bn] = Qn, ti._jQueryInterface }, ti),
        Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = { offset: 10, method: "auto", target: "" }, li = { offset: "number", method: "string", target: "(string|element)" }, ci = { ACTIVATE: "activate" + oi, SCROLL: "scroll" + oi, LOAD_DATA_API: "load" + oi + ".data-api" }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function(e) { return n._process(e) }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? bi : wi,
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = r === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var t, n = we.getSelectorFromElement(e); if (n && (t = document.querySelector(n)), t) { var i = t.getBoundingClientRect(); if (i.width || i.height) return [ni(t)[r]().top + o, n] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })
            }, e.dispose = function() { ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) {
                if ("string" != typeof(e = l({}, ai, "object" == typeof e && e ? e : {})).target) {
                    var t = ni(e.target).attr("id");
                    t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t
                }
                return we.typeCheckConfig(ii, e, li), e
            }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]) } }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' });
                var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, { relatedTarget: t })
            }, e._clear = function() {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                ni(e).filter(di).removeClass(fi)
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = ni(this).data(ri);
                    if (e || (e = new n(this, "object" == typeof t && t), ni(this).data(ri, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return ai } }]), n
        }(), ni(window).on(ci.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
                var n = ni(e[t]);
                Ci._jQueryInterface.call(n, n.data())
            }
        }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function() { return ni.fn[ii] = si, Ci._jQueryInterface }, Ci),
        Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = { HIDE: "hide" + Di, HIDDEN: "hidden" + Di, SHOW: "show" + Di, SHOWN: "shown" + Di, CLICK_DATA_API: "click" + Di + ".data-api" }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function() {
            function i(e) { this._element = e }
            var e = i.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
                    var e, i, t = Ti(this._element).closest(ji)[0],
                        r = we.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName ? Mi : Hi;
                        i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1]
                    }
                    var s = Ti.Event(Ii.HIDE, { relatedTarget: this._element }),
                        a = Ti.Event(Ii.SHOW, { relatedTarget: i });
                    if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function() {
                            var e = Ti.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                                t = Ti.Event(Ii.SHOWN, { relatedTarget: i });
                            Ti(i).trigger(e), Ti(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() { Ti.removeData(this._element, Si), this._element = null }, e._activate = function(e, t, n) {
                var i = this,
                    r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
                    o = n && r && Ti(r).hasClass(xi),
                    s = function() { return i._transitionComplete(e, r, n) };
                if (r && o) {
                    var a = we.getTransitionDurationFromElement(r);
                    Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    Ti(t).removeClass(Pi + " " + Ni);
                    var i = Ti(t.parentNode).find(Ri)[0];
                    i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
                    var r = Ti(e).closest(Li)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wi));
                        Ti(o).addClass(Ni)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = Ti(this),
                        t = e.data(Si);
                    if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), i
        }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function(e) { e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show") }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function() { return Ti.fn.tab = Ai, Ui._jQueryInterface }, Ui);
    ! function(e) { if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", { value: !0 })
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
! function(t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) { if ("string" == typeof t) { var e = n.call(arguments, 1); return u(this, t, e) } return h(this, t), this }, o(a))
    }

    function o(t) {!t || t && t.bridget || (t.bridget = i) }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) { s.error(t) };
    return o(e || t.jQuery), i
}),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var o = i.indexOf(e); return o != -1 && i.splice(o, 1), this } }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() { delete this._events, delete this._onceEvents }, t
}),
function(t, e) { "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                I = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) { return e[t](i) }
}),
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e };
    var o = Array.prototype.slice;
    i.makeArray = function(t) { if (Array.isArray(t)) return t; if (null === t || void 0 === t) return []; var e = "object" == typeof t && "number" == typeof t.length; return e ? o.call(t) : [t] }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() { o.apply(s, e), delete s[n] }, i)
        }
    }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try { i = s && JSON.parse(s) } catch (a) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) {
    "use strict";

    function i(t) { for (var e in t) return !1; return e = null, !0 }

    function o(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

    function n(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() { this.size = e(this.element) }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
        var s = t - i,
            r = e - o,
            a = {};
        a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, d._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, d.onotransitionend = function(t) { this.ontransitionend(t) };
    var f = { "-webkit-transform": "transform" };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
    return d.removeTransitionStyles = function() { this.css(c) }, d.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
    }, d.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function() {
        this.isHidden = !0, this.css({ display: "" });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
    }, d.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, o
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) { return e(t, i, o, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() { t.apply(this, arguments) }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) { o.extend(this.options, t) }, c._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() { this.items = this._itemize(this.element.children) }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) { return o.filterFindElements(t, this.options.itemSelector) }, c.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() { this.getSize() }, c.getSize = function() { this.size = i(this.element) }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, c._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, c._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, c.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, c._positionItem = function(t, e, i, o, n) { o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i)) }, c._postLayout = function() { this.resizeContainer() }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() { n.dispatchEvent(t + "Complete", null, [e]) }

        function o() { r++, r == s && i() }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) { e.once(t, o) })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, c.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { o.removeFrom(this.stamps, t), this.unignore(t) }, this) }, c._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t) }, c._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, c.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, c.onresize = function() { this.resize() }, o.debounceMethod(s, "onresize", 100), c.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.reveal() })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.hide() })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), o.removeFrom(this.items, t) }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) { t = o.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function(t, e) { var i = r(s); return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i };
    var m = { ms: 1, s: 1e3 };
    return s.Item = n, s
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
    "use strict";

    function e() { t.Item.apply(this, arguments) }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, o.call(this), this.sortData = {} }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() { n.apply(this, arguments), this.css({ display: "" }) }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) {
    "use strict";

    function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) { o[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, o.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, o.getRowHeight = function() { this.getSegmentSize("row", "Height") }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, o.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, o.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
        function n() { i.apply(this, arguments) }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i }
    }, o._getTopColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t); return e }, o._getColGroupY = function(t, e) { if (e < 2) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, o._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) };
    var a = o._getOption;
    return o._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = { x: this.x, y: this.y };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() { return { height: this.maxY } }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;
    return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, { x: e, y: i }
    }, i._getContainerSize = function() { return { height: this.y } }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) { return e(t, i, o, n, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, l.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() { e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) }
        var e, i, o, n = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { o = !0, t() })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return { matches: i, needReveal: o, needHide: n }
    }, l._getFilterTest = function(t) { return u && this.options.isJQueryFiltering ? function(e) { return u(e.element).is(t); } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return o(e.element, t) } }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) { return t && a(r(t)) } : function(t) { return t && r(t) }
        }

        function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } }
        return t
    }();
    d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, l._manageStamp = function(t) { this._mode()._manageStamp(t) }, l._getContainerSize = function() { return this._mode()._getContainerSize() }, l.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, d
});
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var s = 0, n = e.length; n > s; s++) e[s][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.Context.refreshAll(); for (var e in i) i[e].enabled = !0; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(s) { this.element = s, this.Adapter = o.Adapter, this.adapter = new this.Adapter(s), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, s.waypointContextKey = this.key, i[s.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var e = 0,
        i = {},
        o = window.Waypoint,
        s = window.onload;
    t.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, t.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            o = this.element == this.element.window;
        t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 }
        var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, o.requestAnimationFrame(t)) })
    }, t.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, t.prototype.handleResize = function() { o.Context.refreshAll() }, t.prototype.handleScroll = function() {
        var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var i in e) {
            var o = e[i],
                s = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var n in this.waypoints[i]) {
                var r = this.waypoints[i][n];
                if (null !== r.triggerPoint) {
                    var a = o.oldScroll < r.triggerPoint,
                        h = o.newScroll >= r.triggerPoint;
                    (a && h || !a && !h) && (r.queueTrigger(s), t[r.group.id] = r.group)
                }
            }
        }
        for (var l in t) t[l].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, t.prototype.innerHeight = function() { return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight() }, t.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, t.prototype.innerWidth = function() { return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth() }, t.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, s = t.length; s > o; o++) t[o].destroy()
    }, t.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            s = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var n in t) {
            var r = t[n];
            for (var a in this.waypoints[n]) {
                var h, l, p, c, d, u = this.waypoints[n][a],
                    m = u.options.offset,
                    f = u.triggerPoint,
                    g = 0,
                    w = null == f;
                u.element !== u.element.window && (g = u.adapter.offset()[r.offsetProp]), "function" == typeof m ? m = m.apply(u) : "string" == typeof m && (m = parseFloat(m), u.options.offset.indexOf("%") > -1 && (m = Math.ceil(r.contextDimension * m / 100))), h = r.contextScroll - r.contextOffset, u.triggerPoint = Math.floor(g + h - m), l = f < r.oldScroll, p = u.triggerPoint >= r.oldScroll, c = l && p, d = !l && !p, !w && c ? (u.queueTrigger(r.backward), s[u.group.id] = u.group) : !w && d ? (u.queueTrigger(r.forward), s[u.group.id] = u.group) : w && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), s[u.group.id] = u.group)
            }
        }
        return o.requestAnimationFrame(function() { for (var t in s) s[t].flushTriggers() }), this
    }, t.findOrCreateByElement = function(e) { return t.findByElement(e) || new t(e) }, t.refreshAll = function() { for (var t in i) i[t].refresh() }, t.findByElement = function(t) { return i[t.waypointContextKey] }, window.onload = function() { s && s(), t.refreshAll() }, o.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) }).call(window, t)
    }, o.Context = t
}(),
function() {
    "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this }
    var o = { vertical: {}, horizontal: {} },
        s = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                s = "up" === i || "left" === i;
            o.sort(s ? e : t);
            for (var n = 0, r = o.length; r > n; n += 1) {
                var a = o[n];
                (a.options.continuous || n === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) { this.waypoints.sort(t); var i = s.Adapter.inArray(e, this.waypoints); return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1] }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = s.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, s.Group = i
}(),
function() {
    "use strict";

    function t(t) { this.$element = e(t) }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var s = t.extend({}, o, { element: this }); "string" == typeof s.context && (s.context = t(this).closest(s.context)[0]), i.push(new e(s)) }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function(t) {
    t.fn.hoverIntent = function(e, i, o) {
        var s = { interval: 100, sensitivity: 7, timeout: 0 };
        s = "object" == typeof e ? t.extend(s, e) : t.isFunction(i) ? t.extend(s, { over: e, out: i, selector: o }) : t.extend(s, { over: e, out: e, selector: i });
        var n, r, a, h, l = function(t) { n = t.pageX, r = t.pageY },
            p = function(e, i) {
                if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(a - n) + Math.abs(h - r) < s.sensitivity) return t(i).off("mousemove.hoverIntent", l), i.hoverIntent_s = 1, s.over.apply(i, [e]);
                a = n, h = r, i.hoverIntent_t = setTimeout(function() { p(e, i) }, s.interval)
            },
            c = function(e) {
                var i = jQuery.extend({}, e),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == e.type ? (a = i.pageX, h = i.pageY, t(o).on("mousemove.hoverIntent", l), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() { p(i, o) }, s.interval))) : (t(o).off("mousemove.hoverIntent", l), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {! function(t, e) { e.hoverIntent_t = clearTimeout(e.hoverIntent_t), e.hoverIntent_s = 0, s.out.apply(e, [t]) }(i, o) }, s.timeout)))
            };
        return this.on({ "mouseenter.hoverIntent": c, "mouseleave.hoverIntent": c }, s.selector)
    }
}(jQuery),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, i) { return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i } : t(jQuery) }(function(t) {
    "use strict";
    var e = 0;
    t.fn.TouchSpin = function(i) {
        var o = { min: 0, max: 100, initval: "", replacementval: "", step: 1, decimals: 0, stepinterval: 100, forcestepdivisibility: "round", stepintervaldelay: 500, verticalbuttons: !1, verticalup: "+", verticaldown: "-", verticalupclass: "", verticaldownclass: "", prefix: "", postfix: "", prefix_extraclass: "", postfix_extraclass: "", booster: !0, boostat: 10, maxboostedstep: !1, mousewheel: !0, buttondown_class: "btn btn-primary", buttonup_class: "btn btn-primary", buttondown_txt: "-", buttonup_txt: "+", callback_before_calculation: function(t) { return t }, callback_after_calculation: function(t) { return t } },
            s = { min: "min", max: "max", initval: "init-val", replacementval: "replacement-val", step: "step", decimals: "decimals", stepinterval: "step-interval", verticalbuttons: "vertical-buttons", verticalupclass: "vertical-up-class", verticaldownclass: "vertical-down-class", forcestepdivisibility: "force-step-divisibility", stepintervaldelay: "step-interval-delay", prefix: "prefix", postfix: "postfix", prefix_extraclass: "prefix-extra-class", postfix_extraclass: "postfix-extra-class", booster: "booster", boostat: "boostat", maxboostedstep: "max-boosted-step", mousewheel: "mouse-wheel", buttondown_class: "button-down-class", buttonup_class: "button-up-class", buttondown_txt: "button-down-txt", buttonup_txt: "button-up-txt" };
        return this.each(function() {
            function n() { "" === u.prefix && (m = w.prefix.detach()), "" === u.postfix && (f = w.postfix.detach()) }

            function r() {
                var t, e, i;
                "" !== (t = u.callback_before_calculation(b.val())) ? 0 < u.decimals && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== u.replacementval ? u.replacementval : 0), (i = e).toString() !== t && (i = e), null !== u.min && e < u.min && (i = u.min), null !== u.max && e > u.max && (i = u.max), i = function(t) {
                    switch (u.forcestepdivisibility) {
                        case "round":
                            return (Math.round(t / u.step) * u.step).toFixed(u.decimals);
                        case "floor":
                            return (Math.floor(t / u.step) * u.step).toFixed(u.decimals);
                        case "ceil":
                            return (Math.ceil(t / u.step) * u.step).toFixed(u.decimals);
                        default:
                            return t
                    }
                }(i), Number(t).toString() !== i.toString() && (b.val(i), b.trigger("change"))): "" !== u.replacementval && (b.val(u.replacementval), b.trigger("change"))
            }

            function a() { if (u.booster) { var t = Math.pow(2, Math.floor(T / u.boostat)) * u.step; return u.maxboostedstep && t > u.maxboostedstep && (t = u.maxboostedstep, v = Math.round(v / t) * t), Math.max(u.step, t) } return u.step }

            function h() {
                r(), v = parseFloat(u.callback_before_calculation(w.input.val())), isNaN(v) && (v = 0);
                var t = v,
                    e = a();
                v += e, null !== u.max && v > u.max && (v = u.max, b.trigger("touchspin.on.max"), d()), w.input.val(u.callback_after_calculation(Number(v).toFixed(u.decimals))), t !== v && b.trigger("change")
            }

            function l() {
                r(), v = parseFloat(u.callback_before_calculation(w.input.val())), isNaN(v) && (v = 0);
                var t = v,
                    e = a();
                v -= e, null !== u.min && v < u.min && (v = u.min, b.trigger("touchspin.on.min"), d()), w.input.val(u.callback_after_calculation(Number(v).toFixed(u.decimals))), t !== v && b.trigger("change")
            }

            function p() { d(), T = 0, W = "down", b.trigger("touchspin.on.startspin"), b.trigger("touchspin.on.startdownspin"), x = setTimeout(function() { y = setInterval(function() { T++, l() }, u.stepinterval) }, u.stepintervaldelay) }

            function c() { d(), T = 0, W = "up", b.trigger("touchspin.on.startspin"), b.trigger("touchspin.on.startupspin"), _ = setTimeout(function() { z = setInterval(function() { T++, h() }, u.stepinterval) }, u.stepintervaldelay) }

            function d() {
                switch (clearTimeout(x), clearTimeout(_), clearInterval(y), clearInterval(z), W) {
                    case "up":
                        b.trigger("touchspin.on.stopupspin"), b.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        b.trigger("touchspin.on.stopdownspin"), b.trigger("touchspin.on.stopspin")
                }
                T = 0, W = !1
            }
            var u, m, f, g, w, v, y, z, x, _, b = t(this),
                C = b.data(),
                T = 0,
                W = !1;
            ! function() {
                if (!b.data("alreadyinitialized")) {
                    if (b.data("alreadyinitialized", !0), e += 1, b.data("spinnerid", e), !b.is("input")) return console.log("Must be an input.");
                    "" !== (u = t.extend({}, o, C, (a = {}, t.each(s, function(t, e) {
                        var i = "bts-" + e;
                        b.is("[data-" + i + "]") && (a[t] = b.data(i))
                    }), a), i)).initval && "" === b.val() && b.val(u.initval), r(),
                        function() {
                            var e = b.val(),
                                i = b.parent();
                            "" !== e && (e = u.callback_after_calculation(Number(e).toFixed(u.decimals))), b.data("initvalue", e).val(e), b.addClass("form-control"), i.hasClass("input-group") ? function(e) {
                                e.addClass("bootstrap-touchspin");
                                var i, o, s = b.prev(),
                                    n = b.next(),
                                    r = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + u.prefix + "</span></span>",
                                    a = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + u.postfix + "</span></span>";
                                s.hasClass("input-group-btn") || s.hasClass("input-group-prepend") ? (i = '<button class="' + u.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + u.buttondown_txt + "</button>", s.append(i)) : (i = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + u.buttondown_class + ' bootstrap-touchspin-down" type="button">' + u.buttondown_txt + "</button></span>", t(i).insertBefore(b)), n.hasClass("input-group-btn") || n.hasClass("input-group-append") ? (o = '<button class="' + u.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + u.buttonup_txt + "</button>", n.prepend(o)) : (o = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + u.buttonup_class + ' bootstrap-touchspin-up" type="button">' + u.buttonup_txt + "</button></span>", t(o).insertAfter(b)), t(r).insertBefore(b), t(a).insertAfter(b), g = e
                            }(i) : function() {
                                var e, i = "";
                                b.hasClass("input-sm") && (i = "input-group-sm"), b.hasClass("input-lg") && (i = "input-group-lg"), e = u.verticalbuttons ? '<div class="input-group ' + i + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + u.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + u.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + u.buttondown_class + " bootstrap-touchspin-up " + u.verticalupclass + '" type="button">' + u.verticalup + '</button><button class="' + u.buttonup_class + " bootstrap-touchspin-down " + u.verticaldownclass + '" type="button">' + u.verticaldown + "</button></span></div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + u.buttondown_class + ' bootstrap-touchspin-down" type="button">' + u.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + u.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + u.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + u.buttonup_class + ' bootstrap-touchspin-up" type="button">' + u.buttonup_txt + "</button></span></div>", g = t(e).insertBefore(b), t(".bootstrap-touchspin-prefix", g).after(b), b.hasClass("input-sm") ? g.addClass("input-group-sm") : b.hasClass("input-lg") && g.addClass("input-group-lg")
                            }()
                        }(), w = { down: t(".bootstrap-touchspin-down", g), up: t(".bootstrap-touchspin-up", g), input: t("input", g), prefix: t(".bootstrap-touchspin-prefix", g).addClass(u.prefix_extraclass), postfix: t(".bootstrap-touchspin-postfix", g).addClass(u.postfix_extraclass) }, n(), b.on("keydown.touchspin", function(t) {
                            var e = t.keyCode || t.which;
                            38 === e ? ("up" !== W && (h(), c()), t.preventDefault()) : 40 === e && ("down" !== W && (l(), p()), t.preventDefault())
                        }), b.on("keyup.touchspin", function(t) {
                            var e = t.keyCode || t.which;
                            38 === e ? d() : 40 === e && d()
                        }), b.on("blur.touchspin", function() { r(), b.val(u.callback_after_calculation(b.val())) }), w.down.on("keydown", function(t) {
                            var e = t.keyCode || t.which;
                            32 !== e && 13 !== e || ("down" !== W && (l(), p()), t.preventDefault())
                        }), w.down.on("keyup.touchspin", function(t) {
                            var e = t.keyCode || t.which;
                            32 !== e && 13 !== e || d()
                        }), w.up.on("keydown.touchspin", function(t) {
                            var e = t.keyCode || t.which;
                            32 !== e && 13 !== e || ("up" !== W && (h(), c()), t.preventDefault())
                        }), w.up.on("keyup.touchspin", function(t) {
                            var e = t.keyCode || t.which;
                            32 !== e && 13 !== e || d()
                        }), w.down.on("mousedown.touchspin", function(t) { w.down.off("touchstart.touchspin"), b.is(":disabled") || (l(), p(), t.preventDefault(), t.stopPropagation()) }), w.down.on("touchstart.touchspin", function(t) { w.down.off("mousedown.touchspin"), b.is(":disabled") || (l(), p(), t.preventDefault(), t.stopPropagation()) }), w.up.on("mousedown.touchspin", function(t) { w.up.off("touchstart.touchspin"), b.is(":disabled") || (h(), c(), t.preventDefault(), t.stopPropagation()) }), w.up.on("touchstart.touchspin", function(t) { w.up.off("mousedown.touchspin"), b.is(":disabled") || (h(), c(), t.preventDefault(), t.stopPropagation()) }), w.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) { W && (t.stopPropagation(), d()) }), w.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) { W && (t.stopPropagation(), d()) }), w.down.on("mousemove.touchspin touchmove.touchspin", function(t) { W && (t.stopPropagation(), t.preventDefault()) }), w.up.on("mousemove.touchspin touchmove.touchspin", function(t) { W && (t.stopPropagation(), t.preventDefault()) }), b.on("mousewheel.touchspin DOMMouseScroll.touchspin", function(t) {
                            if (u.mousewheel && b.is(":focus")) {
                                var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                                t.stopPropagation(), t.preventDefault(), e < 0 ? l() : h()
                            }
                        }), b.on("touchspin.destroy", function() {
                            var e;
                            e = b.parent(), d(), b.off(".touchspin"), e.hasClass("bootstrap-touchspin-injected") ? (b.siblings().remove(), b.unwrap()) : (t(".bootstrap-touchspin-injected", e).remove(), e.removeClass("bootstrap-touchspin")), b.data("alreadyinitialized", !1)
                        }), b.on("touchspin.uponce", function() { d(), h() }), b.on("touchspin.downonce", function() { d(), l() }), b.on("touchspin.startupspin", function() { c() }), b.on("touchspin.startdownspin", function() { p() }), b.on("touchspin.stopspin", function() { d() }), b.on("touchspin.updatesettings", function(e, i) {
                            ! function(e) {
                                (function(e) {
                                    if (u = t.extend({}, u, e), e.postfix) { 0 === b.parent().find(".bootstrap-touchspin-postfix").length && f.insertAfter(b), b.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix) }
                                    if (e.prefix) { 0 === b.parent().find(".bootstrap-touchspin-prefix").length && m.insertBefore(b), b.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix) }
                                    n()
                                })(e), r();
                                var i = w.input.val();
                                "" !== i && (i = Number(u.callback_before_calculation(w.input.val())), w.input.val(u.callback_after_calculation(Number(i).toFixed(u.decimals))))
                            }(i)
                        });
                    var a
                }
            }()
        })
    }
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(t) {
    var e = function(i, o) { this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, this.dataOptions(), o), this.init() };
    e.DEFAULTS = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: function(t, e) { return t.toFixed(e.decimals) }, onUpdate: null, onComplete: null }, e.prototype.init = function() { this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops }, e.prototype.dataOptions = function() {
        var t = { from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals") },
            e = Object.keys(t);
        for (var i in e) {
            var o = e[i];
            void 0 === t[o] && delete t[o]
        }
        return t
    }, e.prototype.update = function() { this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value)) }, e.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, e.prototype.restart = function() { this.stop(), this.init(), this.start() }, e.prototype.start = function() { this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval) }, e.prototype.stop = function() { this.interval && clearInterval(this.interval) }, e.prototype.toggle = function() { this.interval ? this.stop() : this.start() }, t.fn.countTo = function(i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("countTo"),
                n = "object" == typeof i ? i : {},
                r = "string" == typeof i ? i : "start";
            (!s || "object" == typeof i) && (s && s.stop(), o.data("countTo", s = new e(this, n))), s[r].call(s)
        })
    }
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
    var e, i, o, s, n, r, a = "Close",
        h = "BeforeClose",
        l = "MarkupParse",
        p = "Open",
        c = "Change",
        d = "mfp",
        u = "." + d,
        m = "mfp-ready",
        f = "mfp-removing",
        g = "mfp-prevent-close",
        w = function() {},
        v = !!window.jQuery,
        y = t(window),
        z = function(t, i) { e.ev.on(d + t + u, i) },
        x = function(e, i, o, s) { var n = document.createElement("div"); return n.className = "mfp-" + e, o && (n.innerHTML = o), s ? i && i.appendChild(n) : (n = t(n), i && n.appendTo(i)), n },
        _ = function(i, o) { e.ev.triggerHandler(d + i, o), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o])) },
        b = function(i) { return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn },
        C = function() { t.magnificPopup.instance || ((e = new w).init(), t.magnificPopup.instance = e) };
    w.prototype = {
        constructor: w,
        init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
        },
        open: function(i) {
            var s;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(), e.index = 0;
                var r, a = i.items;
                for (s = 0; s < a.length; s++)
                    if ((r = a[s]).parsed && (r = r.el[0]), r === i.el[0]) { e.index = s; break }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0; {
                if (!e.isOpen) {
                    e.types = [], n = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = x("bg").on("click" + u, function() { e.close() }), e.wrap = x("wrap").attr("tabindex", -1).on("click" + u, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = x("container", e.wrap)), e.contentContainer = x("content"), e.st.preloader && (e.preloader = x("preloader", e.container, e.st.tLoading));
                    var h = t.magnificPopup.modules;
                    for (s = 0; s < h.length; s++) {
                        var c = h[s];
                        c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                    }
                    _("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (z(l, function(t, e, i, o) { i.close_replaceWith = b(o.type) }), n += " mfp-close-btn-in") : e.wrap.append(b())), e.st.alignTop && (n += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: y.scrollTop(), position: "absolute" }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: o.height(), position: "absolute" }), e.st.enableEscapeKey && o.on("keyup" + u, function(t) { 27 === t.keyCode && e.close() }), y.on("resize" + u, function() { e.updateSize() }), e.st.closeOnContentClick || (n += " mfp-auto-cursor"), n && e.wrap.addClass(n);
                    var d = e.wH = y.height(),
                        f = {};
                    if (e.fixedContentPos && e._hasScrollBar(d)) {
                        var g = e._getScrollbarSize();
                        g && (f.marginRight = g)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                    var w = e.st.mainClass;
                    return e.isIE7 && (w += " mfp-ie7"), w && e._addClassToMFP(w), e.updateItemHTML(), _("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), o.on("focusin" + u, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(d), _(p), i
                }
                e.updateItemHTML()
            }
        },
        close: function() { e.isOpen && (_(h), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(f), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) },
        _close: function() {
            _(a);
            var i = f + " " + m + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var s = { marginRight: "" };
                e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
            }
            o.off("keyup.mfp focusin" + u), e.ev.off(u), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, _("AfterClose")
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    o = window.innerHeight * i;
                e.wrap.css("height", o), e.wH = o
            } else e.wH = t || y.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), _("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var o = i.type;
            if (_("BeforeChange", [e.currItem ? e.currItem.type : "", o]), e.currItem = i, !e.currTemplate[o]) {
                var n = !!e.st[o] && e.st[o].markup;
                _("FirstMarkupParse", n), e.currTemplate[o] = !n || t(n)
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var r = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, e.currTemplate[o]);
            e.appendContent(r, o), i.preloaded = !0, _(c, i), s = i.type, e.container.prepend(e.contentContainer), _("AfterChange")
        },
        appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(b()) : e.content = t : e.content = "", _("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) },
        parseEl: function(i) {
            var o, s = e.items[i];
            if (s.tagName ? s = { el: t(s) } : (o = s.type, s = { data: s, src: s.src }), s.el) {
                for (var n = e.types, r = 0; r < n.length; r++)
                    if (s.el.hasClass("mfp-" + n[r])) { o = n[r]; break }
                s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
            }
            return s.type = o || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, _("ElementParse", s), e.items[i]
        },
        addGroup: function(t, i) {
            var o = function(o) { o.mfpEl = this, e._openClick(o, t, i) };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, o)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, o) : (i.items = t, t.off(s).on(s, o)))
        },
        _openClick: function(i, o, s) {
            if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var n = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                if (n)
                    if (t.isFunction(n)) { if (!n.call(e)) return !0 } else if (y.width() < n) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = o.find(s.delegate)), e.open(s)
            }
        },
        updateStatus: function(t, o) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), o || "loading" !== t || (o = e.st.tLoading);
                var s = { status: t, text: o };
                _("UpdateStatus", s), t = s.status, o = s.text, e.preloader.html(o), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(g)) {
                var o = e.st.closeOnContentClick,
                    s = e.st.closeOnBgClick;
                if (o && s) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) { if (o) return !0 } else if (s && t.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) },
        _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) },
        _hasScrollBar: function(t) { return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || y.height()) },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) { return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) },
        _parseMarkup: function(e, i, o) {
            var s;
            o.data && (i = t.extend(o.data, i)), _(l, [e, i, o]), t.each(i, function(i, o) { if (void 0 === o || !1 === o) return !0; if ((s = i.split("_")).length > 1) { var n = e.find(u + "-" + s[0]); if (n.length > 0) { var r = s[1]; "replaceWith" === r ? n[0] !== o[0] && n.replaceWith(o) : "img" === r ? n.is("img") ? n.attr("src", o) : n.replaceWith(t("<img>").attr("src", o).attr("class", n.attr("class"))) : n.attr(s[1], o) } } else e.find(u + "-" + i).html(o) })
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function(e, i) { return C(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() { return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function(i) {
        C();
        var o = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var s, n = v ? o.data("magnificPopup") : o[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                n.items ? s = n.items[r] : (s = o, n.delegate && (s = s.find(n.delegate)), s = s.eq(r)), e._openClick({ mfpEl: s }, o, n)
            } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), v ? o.data("magnificPopup", i) : o[0].magnificPopup = i, e.addGroup(o, i);
        return o
    };
    var T, W, S, L = "inline",
        k = function() { S && (W.after(S.addClass(T)).detach(), S = null) };
    t.magnificPopup.registerModule(L, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { e.types.push(L), z(a + "." + L, function() { k() }) },
            getInline: function(i, o) {
                if (k(), i.src) {
                    var s = e.st.inline,
                        n = t(i.src);
                    if (n.length) {
                        var r = n[0].parentNode;
                        r && r.tagName && (W || (T = s.hiddenClass, W = x(T), T = "mfp-" + T), S = n.after(W).detach().removeClass(T)), e.updateStatus("ready")
                    } else e.updateStatus("error", s.tNotFound), n = t("<div>");
                    return i.inlineElement = n, n
                }
                return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o
            }
        }
    });
    var H, I = "ajax",
        O = function() { H && t(document.body).removeClass(H) },
        P = function() { O(), e.req && e.req.abort() };
    t.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { e.types.push(I), H = e.st.ajax.cursor, z(a + "." + I, P), z("BeforeChange." + I, P) },
            getAjax: function(i) {
                H && t(document.body).addClass(H), e.updateStatus("loading");
                var o = t.extend({
                    url: i.src,
                    success: function(o, s, n) {
                        var r = { data: o, xhr: n };
                        _("ParseAjax", r), e.appendContent(t(r.data), I), i.finished = !0, O(), e._setFocus(), setTimeout(function() { e.wrap.addClass(m) }, 16), e.updateStatus("ready"), _("AjaxContentAdded")
                    },
                    error: function() { O(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) }
                }, e.st.ajax.settings);
                return e.req = t.ajax(o), ""
            }
        }
    });
    var $;
    t.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var i = e.st.image,
                    o = ".image";
                e.types.push("image"), z(p + o, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), z(a + o, function() { i.cursor && t(document.body).removeClass(i.cursor), y.off("resize" + u) }), z("Resize" + o, e.resizeImage), e.isLowIE && z("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) { t.img && (t.hasSize = !0, $ && clearInterval($), t.isCheckingImgSize = !1, _("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) },
            findImageSize: function(t) {
                var i = 0,
                    o = t.img[0],
                    s = function(n) { $ && clearInterval($), $ = setInterval(function() { return o.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval($), void(3 === ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500))) }, n) };
                s(1)
            },
            getImage: function(i, o) {
                var s = 0,
                    n = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, _("ImageLoadComplete")) : 200 > ++s ? setTimeout(n, 100) : r()) },
                    r = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                    a = e.st.image,
                    h = o.find(".mfp-img");
                if (h.length) {
                    var l = document.createElement("img");
                    l.className = "mfp-img", i.el && i.el.find("img").length && (l.alt = i.el.find("img").attr("alt")), i.img = t(l).on("load.mfploader", n).on("error.mfploader", r), l.src = i.src, h.is("img") && (i.img = i.img.clone()), (l = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : l.width || (i.hasSize = !1)
                }
                return e._parseMarkup(o, { title: function(i) { if (i.data && void 0 !== i.data.title) return i.data.title; var o = e.st.image.titleSrc; if (o) { if (t.isFunction(o)) return o.call(e, i); if (i.el) return i.el.attr(o) || "" } return "" }(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? ($ && clearInterval($), i.loadError ? (o.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), e.updateStatus("ready")), o) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), e.findImageSize(i)), o)
            }
        }
    });
    var E;
    t.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) { return t.is("img") ? t : t.find("img") } },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom,
                    o = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, n, r = i.duration,
                        l = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                o = "all " + i.duration / 1e3 + "s " + i.easing,
                                s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                n = "transition";
                            return s["-webkit-" + n] = s["-moz-" + n] = s["-o-" + n] = s[n] = o, e.css(s), e
                        },
                        p = function() { e.content.css("visibility", "visible") };
                    z("BuildControls" + o, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void p();
                            (n = l(t)).css(e._getOffset()), e.wrap.append(n), s = setTimeout(function() { n.css(e._getOffset(!0)), s = setTimeout(function() { p(), setTimeout(function() { n.remove(), t = n = null, _("ZoomAnimationEnded") }, 16) }, r) }, 16)
                        }
                    }), z(h + o, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = r, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                n = l(t)
                            }
                            n.css(e._getOffset(!0)), e.wrap.append(n), e.content.css("visibility", "hidden"), setTimeout(function() { n.css(e._getOffset()) }, 16)
                        }
                    }), z(a + o, function() { e._allowZoom() && (p(), n && n.remove(), t = null) })
                }
            },
            _allowZoom: function() { return "image" === e.currItem.type },
            _getItemToZoom: function() { return !!e.currItem.hasSize && e.currItem.img },
            _getOffset: function(i) {
                var o, s = (o = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                    n = parseInt(o.css("padding-top"), 10),
                    r = parseInt(o.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - n;
                var a = { width: o.width(), height: (v ? o.innerHeight() : o[0].offsetHeight) - r - n };
                return void 0 === E && (E = void 0 !== document.createElement("p").style.MozTransform), E ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left, a.top = s.top), a
            }
        }
    });
    var A = "iframe",
        M = function(t) {
            if (e.currTemplate[A]) {
                var i = e.currTemplate[A].find("iframe");
                i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
    t.magnificPopup.registerModule(A, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { e.types.push(A), z("BeforeChange", function(t, e, i) { e !== i && (e === A ? M() : i === A && M(!0)) }), z(a + "." + A, function() { M() }) },
            getIframe: function(i, o) {
                var s = i.src,
                    n = e.st.iframe;
                t.each(n.patterns, function() { return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0 });
                var r = {};
                return n.srcAction && (r[n.srcAction] = s), e._parseMarkup(o, r, i), e.updateStatus("ready"), o
            }
        }
    });
    var j = function(t) { var i = e.items.length; return t > i - 1 ? t - i : 0 > t ? i + t : t },
        B = function(t, e, i) { return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
    t.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var i = e.st.gallery,
                    s = ".mfp-gallery";
                return e.direction = !0, !(!i || !i.enabled) && (n += " mfp-gallery", z(p + s, function() { i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() { return e.items.length > 1 ? (e.next(), !1) : void 0 }), o.on("keydown" + s, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), z("UpdateStatus" + s, function(t, i) { i.text && (i.text = B(i.text, e.currItem.index, e.items.length)) }), z(l + s, function(t, o, s, n) {
                    var r = e.items.length;
                    s.counter = r > 1 ? B(i.tCounter, n.index, r) : ""
                }), z("BuildControls" + s, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var o = i.arrowMarkup,
                            s = e.arrowLeft = t(o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                            n = e.arrowRight = t(o.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                        s.click(function() { e.prev() }), n.click(function() { e.next() }), e.container.append(s.add(n))
                    }
                }), z(c + s, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void z(a + s, function() { o.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null }))
            },
            next: function() { e.direction = !0, e.index = j(e.index + 1), e.updateItemHTML() },
            prev: function() { e.direction = !1, e.index = j(e.index - 1), e.updateItemHTML() },
            goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                    o = Math.min(i[0], e.items.length),
                    s = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? s : o); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? o : s); t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = j(i), !e.items[i].preloaded) {
                    var o = e.items[i];
                    o.parsed || (o = e.parseEl(i)), _("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function() { o.hasSize = !0 }).on("error.mfploader", function() { o.hasSize = !0, o.loadError = !0, _("LazyLoadError", o) }).attr("src", o.src)), o.preloaded = !0
                }
            }
        }
    });
    var D = "retina";
    t.magnificPopup.registerModule(D, {
        options: { replaceSrc: function(t) { return t.src.replace(/\.\w+$/, function(t) { return "@2x" + t }) }, ratio: 1 },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                        i = t.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (z("ImageHasSize." + D, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), z("ElementParse." + D, function(e, o) { o.src = t.replaceSrc(o, i) }))
                }
            }
        }
    }), C()
}),
function(t, e, i, o) {
    function s(e, i) { this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) { this._handlers[i] = t.proxy(this[i], this) }, this)), t.each(s.Plugins, t.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(s.Workers, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }
    s.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, s.Width = { Default: "default", Inner: "inner", Outer: "outer" }, s.Type = { Event: "event", State: "state" }, s.Plugins = {}, s.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                o = this.settings.rtl,
                s = { width: "auto", "margin-left": o ? e : "", "margin-right": o ? "" : e };
            !i && this.$stage.children().css(s), t.css = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                o = this._items.length,
                s = !this.settings.autoWidth,
                n = [];
            for (t.items = { merge: !1, width: e }; o--;) i = this._mergers[o], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, n[o] = s ? e * i : this._items[o].width();
            this._widths = n
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                o = this.settings,
                s = Math.max(2 * o.items, 4),
                n = 2 * Math.ceil(i.length / 2),
                r = o.loop && i.length ? o.rewind ? s : Math.max(s, n) : 0,
                a = "",
                h = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, o = 0, s = 0, n = []; ++i < e;) o = n[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, n.push(o + s * t);
            this._coordinates = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                o = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], o.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, o.css(t.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, o, s = this.settings.rtl ? 1 : -1,
                n = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + n,
                a = r + this.width() * s,
                h = [];
            for (i = 0, o = this._coordinates.length; i < o; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + n * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(t("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, s.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) { return t(e) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, e, i;
            t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, s.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            o = -1,
            s = null;
        i ? (t.each(i, function(t) { t <= e && t > o && (o = Number(t)) }), "function" == typeof(s = t.extend({}, this.options, i[o])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + o))) : s = t.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: s } }), this._breakpoint = o, this.settings = s, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, s.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, s.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, s.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, o = t.proxy(function(t) { return this[t] }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, o).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function(t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, s.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, s.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) }, s.prototype.registerEventHandlers = function() { t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this))) }, s.prototype.onDragStart = function(e) {
        var o = null;
        3 !== e.which && (t.support.transform ? (o = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), o = { x: o[16 === o.length ? 12 : 4], y: o[16 === o.length ? 13 : 5] }) : (o = this.$stage.position(), o = { x: this.settings.rtl ? o.left + this.$stage.width() - this.width() + this.settings.margin : o.left, y: o.top }), this.is("animating") && (t.support.transform ? this.animate(o.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = o, this._drag.stage.current = o, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var o = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(o.x) < Math.abs(o.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            o = null,
            s = this.difference(this._drag.pointer, this.pointer(t)),
            n = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, n.x = ((n.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), o = this.settings.pullDrag ? -1 * s.x / 5 : 0, n.x = Math.max(Math.min(n.x, e + o), i + o)), this._drag.stage.current = n, this.animate(n.x))
    }, s.prototype.onDragEnd = function(e) {
        var o = this.difference(this._drag.pointer, this.pointer(e)),
            s = this._drag.stage.current,
            n = o.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== o.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== o.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (Math.abs(o.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function(e, i) {
        var s = -1,
            n = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) { return "left" === i && e > a - 30 && e < a + 30 ? s = t : "right" === i && e > a - n - 30 && e < a - n + 30 ? s = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== o ? r[t + 1] : a - n) && (s = "left" === i ? t + 1 : t), -1 === s }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())), s
    }, s.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : i ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: e + "px" })
    }, s.prototype.is = function(t) { return this._states.current[t] && this._states.current[t] > 0 }, s.prototype.current = function(t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", { property: { name: "position", value: t } });
            e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, s.prototype.invalidate = function(e) { return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) { return e }) }, s.prototype.reset = function(t) {
        (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, s.prototype.maximum = function(t) {
        var e, i, o, s = this.settings,
            n = this._coordinates.length;
        if (s.loop) n = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), o = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > o););
            n = e + 1
        } else n = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (n -= this._clones.length / 2), Math.max(n, 0)
    }, s.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, s.prototype.items = function(t) { return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, s.prototype.mergers = function(t) { return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, s.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            n = function(t) { return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2 };
        return e === o ? t.map(this._clones, function(t, e) { return n(e) }) : t.map(this._clones, function(t, i) { return t === e ? n(i) : null })
    }, s.prototype.speed = function(t) { return t !== o && (this._speed = t), this._speed }, s.prototype.coordinates = function(e) {
        var i, s = 1,
            n = e - 1;
        return e === o ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, n = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[n] || 0)) / 2 * s) : i = this._coordinates[n] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function(t, e, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, s.prototype.to = function(t, e) {
        var i = this.current(),
            o = null,
            s = t - this.relative(i),
            n = (s > 0) - (s < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * n * r), t = i + s, (o = ((t - a) % r + r) % r + a) !== t && o - s <= h && o - s > 0 && (i = o - s, t = o, this.reset(i))) : this.settings.rewind ? (h += 1, t = (t % h + h) % h) : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, s.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, s.prototype.onTransitionEnd = function(t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function() { var o; return this.options.responsiveBaseElement !== e ? o = t(this.options.responsiveBaseElement).width() : e.innerWidth ? o = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? o = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), o }, s.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, s.prototype.add = function(e, i) {
        var s = this.relative(this._current);
        i = i === o ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", { content: e, position: i }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", { content: e, position: i })
    }, s.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== o && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
    }, s.prototype.preloadAutoWidthImages = function(e) { e.each(t.proxy(function(e, i) { this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) { i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")) }, this)) }, s.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var o in this._plugins) this._plugins[o].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function(t, e, i) {
        var o = this.settings.rtl;
        switch (e) {
            case "<":
                return o ? t > i : t < i;
            case ">":
                return o ? t < i : t > i;
            case ">=":
                return o ? t <= i : t >= i;
            case "<=":
                return o ? t >= i : t <= i
        }
    }, s.prototype.on = function(t, e, i, o) { t.addEventListener ? t.addEventListener(e, i, o) : t.attachEvent && t.attachEvent("on" + e, i) }, s.prototype.off = function(t, e, i, o) { t.removeEventListener ? t.removeEventListener(e, i, o) : t.detachEvent && t.detachEvent("on" + e, i) }, s.prototype.trigger = function(e, i, o, n, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
            h = t.camelCase(t.grep(["on", e, o], function(t) { return t }).join("-").toLowerCase()),
            l = t.Event([e, "owl", o || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(l) }), this.register({ type: s.Type.Event, name: e }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l
    }, s.prototype.enter = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, s.prototype.leave = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e]-- }, this)) }, s.prototype.register = function(e) {
        if (e.type === s.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) { return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments) }, t.event.special[e.name].owl = !0
            }
        } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, o) { return t.inArray(i, this._states.tags[e.name]) === o }, this)))
    }, s.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, s.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, s.prototype.pointer = function(t) { var i = { x: null, y: null }; return t = t.originalEvent || t || e.event, (t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i }, s.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, s.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var o = t(this),
                n = o.data("owl.carousel");
            n || (n = new s(this, "object" == typeof e && e), o.data("owl.carousel", n), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) { n.register({ type: s.Type.Event, name: i }), n.$element.on(i + ".owl.carousel.core", t.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([i]), n[i].apply(this, [].slice.call(arguments, 1)), this.release([i])) }, n)) })), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(e) { this._core = e, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, s.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, s.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, s.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings,
                        o = i.center && Math.ceil(i.items / 2) || i.items,
                        s = i.center && -1 * o || 0,
                        n = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
                        r = this._core.clones().length,
                        a = t.proxy(function(t, e) { this.load(e) }, this);
                    for (i.lazyLoadEager > 0 && (o += i.lazyLoadEager, i.loop && (n -= i.lazyLoadEager, o++)); s++ < o;) this.load(r / 2 + this._core.relative(n)), r && t.each(this._core.clones(this._core.relative(n)), a), n++
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, s.prototype.load = function(i) {
        var o = this._core.$stage.children().eq(i),
            s = o && o.find(".owl-lazy");
        !s || t.inArray(o.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, o) {
            var s, n = t(o),
                r = e.devicePixelRatio > 1 && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
            this._core.trigger("load", { element: n, url: r }, "lazy"), n.is("img") ? n.one("load.owl.lazy", t.proxy(function() { n.css("opacity", 1), this._core.trigger("loaded", { element: n, url: r }, "lazy") }, this)).attr("src", r) : n.is("source") ? n.one("load.owl.lazy", t.proxy(function() { this._core.trigger("loaded", { element: n, url: r }, "lazy") }, this)).attr("srcset", r) : (s = new Image, s.onload = t.proxy(function() { n.css({ "background-image": 'url("' + r + '")', opacity: "1" }), this._core.trigger("loaded", { element: n, url: r }, "lazy") }, this), s.src = r)
        }, this)), this._loaded.push(o.get(0)))
    }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(i) {
        this._core = i, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var o = this;
        t(e).on("load", function() { o._core.settings.autoHeight && o.update() }), t(e).resize(function() { o._core.settings.autoHeight && (null != o._intervalId && clearTimeout(o._intervalId), o._intervalId = setTimeout(function() { o.update() }, 250)) })
    };
    s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, s.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            o = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(e, i),
            n = [],
            r = 0;
        t.each(s, function(e, i) { n.push(t(i).height()) }), (r = Math.max.apply(null, n)) <= 1 && o && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }, this),
            "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this))
    };
    s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            o = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            n = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((o = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (o[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(o[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        o = o[6], this._videos[r] = { type: i, id: o, width: s, height: n }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function(e, i) {
        var o, s, n, r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"),
            h = "src",
            l = "",
            p = this._core.settings,
            c = function(i) { s = '<div class="owl-video-play-icon"></div>', o = p.lazyLoad ? t("<div/>", { class: "owl-video-tn " + l, srcType: i }) : t("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")" }), e.after(o), e.after(s) };
        if (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: r })), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length) return c(a.attr(h)), a.remove(), !1;
        "youtube" === i.type ? (n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(n)) : "vimeo" === i.type ? t.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { n = t[0].thumbnail_large, c(n) } }) : "vzaar" === i.type && t.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { n = t.framegrab_url, c(n) } })
    }, s.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, s.prototype.play = function(e) {
        var i, o = t(e.target).closest("." + this._core.settings.itemClass),
            s = this._videos[o.attr("data-video")],
            n = s.width || "100%",
            r = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", n), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function() { var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return e && t(e).parent().hasClass("owl-video-frame") }, s.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(e) { this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = o, this.next = o, this.handlers = { "change.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { t.namespace && (this.swapping = "translated" == t.type) }, this), "translate.owl.carousel": t.proxy(function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    s.Defaults = { animateOut: !1, animateIn: !1 }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                o = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                n = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), o.one(t.support.animation.end, i).css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r)), n && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(n))
        }
    }, s.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    var s = function(e) { this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": t.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { t.namespace && this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options) };
    s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, s.prototype._next = function(o) { this._call = e.setTimeout(t.proxy(this._next, this, o), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed) }, s.prototype.read = function() { return (new Date).getTime() - this._time }, s.prototype.play = function(i, o) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, o), i - s)
    }, s.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating")) }, s.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call)) }, s.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    "use strict";
    var s = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers) };
    s.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, s.prototype.initialize = function() {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) { this.prev(i.navSpeed) }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) { this.next(i.navSpeed) }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
            var o = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(o, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, s.prototype.destroy = function() {
        var t, e, i, o, s;
        s = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (o in this.overides) this._core[o] = this._overrides[o];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            o = i + this._core.items().length,
            s = this._core.maximum(!0),
            n = this._core.settings,
            r = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < o; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({ start: Math.min(s, t - i), end: t - i + r - 1 }), Math.min(s, t - i) === s) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, s.prototype.draw = function() {
        var e, i = this._core.settings,
            o = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()),
            n = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || o), i.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || o), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) }
    }, s.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, t.proxy(function(t, i) { return t.start <= e && t.end >= e }, this)).pop() }, s.prototype.getPosition = function(e) { var i, o, s = this._core.settings; return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), o = this._pages.length, e ? ++i : --i, i = this._pages[(i % o + o) % o].start) : (i = this._core.relative(this._core.current()), o = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i }, s.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, s.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, s.prototype.to = function(e, i, o) { var s;!o && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    "use strict";
    var s = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) { i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var o = this._core.items(this._core.relative(this._core.current())),
                        s = t.map(this._hashes, function(t, e) { return t === o ? e : null }).join();
                    if (!s || e.location.hash.slice(1) === s) return;
                    e.location.hash = s
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                o = this._core.$stage.children(),
                s = this._hashes[i] && o.index(this._hashes[i]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    s.Defaults = { URLhashListener: !1 }, s.prototype.destroy = function() {
        var i, o;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (o in Object.getOwnPropertyNames(this)) "function" != typeof this[o] && (this[o] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, o) {
    function s(e, i) {
        var s = !1,
            n = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(n + " ") + n).split(" "), function(t, e) { if (r[e] !== o) return s = !i || e, !1 }), s
    }

    function n(t) { return s(t, !0) }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        l = { csstransforms: function() { return !!s("transform") }, csstransforms3d: function() { return !!s("perspective") }, csstransitions: function() { return !!s("transition") }, cssanimations: function() { return !!s("animation") } };
    l.csstransitions() && (t.support.transition = new String(n("transition")), t.support.transition.end = h.transition.end[t.support.transition]), l.cssanimations() && (t.support.animation = new String(n("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l.csstransforms() && (t.support.transform = new String(n("transform")), t.support.transform3d = l.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function() {
        var i = { bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows" },
            o = function() { var e = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent); return e && t("html").css("cursor", "pointer").on("click", t.noop), e }(),
            s = function() { var t = document.documentElement.style; return "behavior" in t && "fill" in t && /iemobile/i.test(navigator.userAgent) }(),
            n = !!e.PointerEvent,
            r = function(t, e, o) {
                var s = i.menuClass;
                e.cssArrows && (s += " " + i.menuArrowClass), t[o ? "addClass" : "removeClass"](s)
            },
            a = function(t, e) {
                var o = e ? "addClass" : "removeClass";
                t.children("a")[o](i.anchorClass)
            },
            h = function(t) {
                var e = t.css("ms-touch-action"),
                    i = t.css("touch-action");
                i = "pan-y" === (i = i || e) ? "auto" : "pan-y", t.css({ "ms-touch-action": i, "touch-action": i })
            },
            l = function(t) { return t.closest("." + i.menuClass) },
            p = function(t) { return l(t).data("sfOptions") },
            c = function() {
                var e = t(this),
                    i = p(e);
                clearTimeout(i.sfTimer), e.siblings().superfish("hide").end().superfish("show")
            },
            d = function(e) { e.retainPath = t.inArray(this[0], e.$path) > -1, this.superfish("hide"), this.parents("." + e.hoverClass).length || (e.onIdle.call(l(this)), e.$path.length && t.proxy(c, e.$path)()) },
            u = function() {
                var e = t(this),
                    i = p(e);
                o ? t.proxy(d, e, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(t.proxy(d, e, i), i.delay))
            },
            m = function(e) {
                var i = t(this),
                    o = p(i),
                    s = i.siblings(e.data.popUpSelector);
                return !1 === o.onHandleTouch.call(s) ? this : void(s.length > 0 && s.is(":hidden") && (i.one("click.superfish", !1), "MSPointerDown" === e.type || "pointerdown" === e.type ? i.trigger("focus") : t.proxy(c, i.parent("li"))()))
            },
            f = function(e, i) {
                var r = "li:has(" + i.popUpSelector + ")";
                t.fn.hoverIntent && !i.disableHI ? e.hoverIntent(c, u, r) : e.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, u);
                var a = "MSPointerDown.superfish";
                n && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), s && (a += " mousedown.superfish"), e.on("focusin.superfish", "li", c).on("focusout.superfish", "li", u).on(a, "a", i, m)
            };
        return {
            hide: function(e) {
                if (this.length) {
                    var i = p(this);
                    if (!i) return this;
                    var o = !0 === i.retainPath ? i.$path : "",
                        s = this.find("li." + i.hoverClass).add(this).not(o).removeClass(i.hoverClass).children(i.popUpSelector),
                        n = i.speedOut;
                    if (e && (s.show(), n = 0), i.retainPath = !1, !1 === i.onBeforeHide.call(s)) return this;
                    s.stop(!0, !0).animate(i.animationOut, n, function() {
                        var e = t(this);
                        i.onHide.call(e)
                    })
                }
                return this
            },
            show: function() { var t = p(this); if (!t) return this; var e = this.addClass(t.hoverClass).children(t.popUpSelector); return !1 === t.onBeforeShow.call(e) ? this : (e.stop(!0, !0).animate(t.animation, t.speed, function() { t.onShow.call(e) }), this) },
            destroy: function() {
                return this.each(function() {
                    var e, o = t(this),
                        s = o.data("sfOptions");
                    return !!s && (e = o.find(s.popUpSelector).parent("li"), clearTimeout(s.sfTimer), r(o, s), a(e), h(o), o.off(".superfish").off(".hoverIntent"), e.children(s.popUpSelector).attr("style", function(t, e) { if (void 0 !== e) return e.replace(/display[^;]+;?/g, "") }), s.$path.removeClass(s.hoverClass + " " + i.bcClass).addClass(s.pathClass), o.find("." + s.hoverClass).removeClass(s.hoverClass), s.onDestroy.call(o), void o.removeData("sfOptions"))
                })
            },
            init: function(e) {
                return this.each(function() {
                    var o = t(this);
                    if (o.data("sfOptions")) return !1;
                    var s = t.extend({}, t.fn.superfish.defaults, e),
                        n = o.find(s.popUpSelector).parent("li");
                    s.$path = function(e, o) { return e.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + i.bcClass).filter(function() { return t(this).children(o.popUpSelector).hide().show().length }).removeClass(o.pathClass) }(o, s), o.data("sfOptions", s), r(o, s, !0), a(n, !0), h(o), f(o, s), n.not("." + i.bcClass).superfish("hide", !0), s.onInit.call(this)
                })
            }
        }
    }();
    t.fn.superfish = function(e, o) { return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? t.error("Method " + e + " does not exist on jQuery.fn.superfish") : i.init.apply(this, arguments) }, t.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: t.noop, onBeforeShow: t.noop, onShow: t.noop, onBeforeHide: t.noop, onHide: t.noop, onIdle: t.noop, onDestroy: t.noop, onHandleTouch: t.noop }
}(jQuery, window), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i, o) {
        var s = {
            init: function(e, i) {
                var o = this;
                o.elem = i, o.$elem = t(i), o.imageSrc = o.$elem.data("zoom-image") ? o.$elem.data("zoom-image") : o.$elem.attr("src"), o.options = t.extend({}, t.fn.elevateZoom.options, e), o.options.tint && (o.options.lensColour = "none", o.options.lensOpacity = "1"), "inner" == o.options.zoomType && (o.options.showLens = !1), o.options.zoomContainer ? o.$container = t(o.options.zoomContainer) : o.$container = t("body"), o.$elem.parent().removeAttr("title").removeAttr("alt"), o.zoomImage = o.imageSrc, o.refresh(1), t("#" + o.options.gallery + " a").click(function(e) { return o.options.galleryActiveClass && (t("#" + o.options.gallery + " a").removeClass(o.options.galleryActiveClass), t(this).addClass(o.options.galleryActiveClass)), e.preventDefault(), t(this).data("zoom-image") ? o.zoomImagePre = t(this).data("zoom-image") : o.zoomImagePre = t(this).data("image"), o.swaptheimage(t(this).data("image"), o.zoomImagePre), !1 })
            },
            refresh: function(t) {
                var e = this;
                setTimeout(function() { e.fetch(e.imageSrc) }, t || e.options.refresh)
            },
            fetch: function(t) {
                var e = this,
                    i = new Image;
                i.onload = function() { e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem) }, i.src = t
            },
            startZoom: function() {
                var e = this;
                if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.ctOffset = e.$container.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
                    var i = e.$elem.css("border-left-width");
                    e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
                }
                "window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), void 0 !== e.ctOffset && (e.zoomContainer = t('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + (e.nzOffset.left - e.ctOffset.left) + "px;top:" + (e.nzOffset.top - e.ctOffset.top) + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), e.$container.append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = t("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() { e.$elem.trigger("click") }), e.options.tint && (e.tintContainer = t("<div/>").addClass("tintContainer"), e.zoomTint = t("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = t('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function() { e.$elem.trigger("click") }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() { e.$elem.trigger("click") }) : e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() { e.$elem.trigger("click") }), e.zoomWindowContainer = t("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "window" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "inner" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), e.$elem.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchmove", function(t) {
                    "inner" == e.options.zoomType && e.showHideWindow("show"), t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") }), e.$elem.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") }), e.options.showLens && (e.zoomLens.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomLens.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") })), e.$elem.bind("mousemove", function(t) { 0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.zoomContainer.bind("mousemove", function(t) { 0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.zoomContainer.add(e.$elem).mouseenter(function() { 0 == e.overWindow && e.setElements("show") }).mouseleave(function() { e.scrollLock || (e.setElements("hide"), e.options.onDestroy(e.$elem)) }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function() { e.overWindow = !0, e.setElements("hide") }).mouseleave(function() { e.overWindow = !1 }), e.options.zoomLevel, e.options.minZoomLevel ? e.minZoomLevel = e.options.minZoomLevel : e.minZoomLevel = 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(i) { e.scrollLock = !0, clearTimeout(t.data(this, "timer")), t.data(this, "timer", setTimeout(function() { e.scrollLock = !1 }, 250)); var o = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail; return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), o / 120 > 0 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1 }))
            },
            setElements: function(t) { if (!this.options.zoomEnabled) return !1; "show" == t && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show")), "hide" == t && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide")) },
            setPosition: function(t) {
                if (!this.options.zoomEnabled) return !1;
                this.nzHeight = this.$elem.height(), this.nzWidth = this.$elem.width(), this.nzOffset = this.$elem.offset(), this.ctOffset = this.$container.offset(), this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 })), this.options.responsive && !this.options.scrollZoom && this.options.showLens && (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? lensHeight = this.nzHeight : lensHeight = String(this.options.zoomWindowHeight / this.heightRatio), this.largeWidth < this.options.zoomWindowWidth ? lensWidth = this.nzWidth : lensWidth = this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? lensHeight = this.nzHeight : lensHeight = String(this.options.zoomWindowHeight / this.heightRatio), this.nzWidth < this.options.zoomWindowHeight / this.heightRatio ? lensWidth = this.nzWidth : lensWidth = String(this.options.zoomWindowWidth / this.widthRatio), this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({ width: String(this.options.lensSize) + "px", height: String(this.options.lensSize) + "px" })), this.zoomContainer.css({ top: this.nzOffset.top - this.ctOffset.top }), this.zoomContainer.css({ left: this.nzOffset.left - this.ctOffset.left }), this.mouseLeft = parseInt(t.pageX - this.nzOffset.left), this.mouseTop = parseInt(t.pageY - this.nzOffset.top), "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize), "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize), this.mouseLeft < 0 || this.mouseTop < 0 || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(Math.floor(this.mouseLeft - this.zoomLens.width() / 2)), this.lensTopPos = String(Math.floor(this.mouseTop - this.zoomLens.height() / 2))), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.windowLeftPos = 0, this.lensLeftPos = 0, this.tintpos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((t.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((t.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({ backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px" }), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({ "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px" }), this.zoomWindow.css({ "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px" })) : ("lens" == this.options.zoomType && this.zoomLens.css({ "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px" }), this.zoomWindow.css({ "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px" })), this.changeBgSize = !1), this.setWindowPostition(t)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(t), "window" == this.options.zoomType && this.setWindowPostition(t), "inner" == this.options.zoomType && this.setWindowPostition(t), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({ left: this.lensLeftPos + "px", top: this.lensTopPos + "px" })))
            },
            showHideWindow: function(t) { var e = this; "show" == t && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(), e.isWindowActive = !0)), "hide" == t && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function() { e.loop && (clearInterval(e.loop), e.loop = !1) }) : e.zoomWindow.hide(), e.isWindowActive = !1) },
            showHideLens: function(t) { "show" == t && (this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0)), "hide" == t && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1) },
            showHideTint: function(t) { "show" == t && (this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({ opacity: this.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(), this.zoomTint.show()), this.isTintActive = !0)), "hide" == t && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1) },
            setLensPostition: function(t) {},
            setWindowPostition: function(e) {
                var i = this;
                if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = t("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left;
                else switch (i.options.zoomWindowPosition) {
                    case 1:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;
                        break;
                    case 2:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = i.nzWidth);
                        break;
                    case 3:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 4:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 5:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 6:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                        break;
                    case 7:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;
                        break;
                    case 8:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 9:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 10:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize));
                        break;
                    case 11:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 12:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 13:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = 0;
                        break;
                    case 14:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                        break;
                    case 15:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 16:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth;
                        break;
                    default:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth
                }
                i.isWindowSet = !0, i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety, i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx, i.zoomWindow.css({ top: i.windowOffsetTop }), i.zoomWindow.css({ left: i.windowOffsetLeft }), "inner" == i.options.zoomType && (i.zoomWindow.css({ top: 0 }), i.zoomWindow.css({ left: 0 })), i.windowLeftPos = String(-1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2)), i.windowTopPos = String(-1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2)), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = -1 * (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height())), i.Eroppos && (i.windowLeftPos = -1 * (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width())), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), "window" != i.options.zoomType && "inner" != i.options.zoomType || (1 == i.zoomLock && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), "window" == i.options.zoomType && (i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0)), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function() { i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = -1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2), i.yp = -1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2), i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.scrollingLock = !1, i.loop = !1) : Math.round(Math.abs(i.xp - i.windowLeftPos) + Math.abs(i.yp - i.windowTopPos)) < 1 ? (clearInterval(i.loop), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.xp + "px " + i.yp + "px" })) }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }) : i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" })))
            },
            setTintPosition: function(t) { this.nzOffset = this.$elem.offset(), this.tintpos = String(-1 * (t.pageX - this.nzOffset.left - this.zoomLens.width() / 2)), this.tintposy = String(-1 * (t.pageY - this.nzOffset.top - this.zoomLens.height() / 2)), this.Etoppos && (this.tintposy = 0), this.Eloppos && (this.tintpos = 0), this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize)), this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({ left: this.tintpos + "px" }), this.zoomTintImage.css({ top: this.tintposy + "px" })) },
            swaptheimage: function(e, i) {
                var o = this,
                    s = new Image;
                o.options.loadingIcon && (o.spinner = t("<div style=\"background: url('" + o.options.loadingIcon + "') no-repeat center;height:" + o.nzHeight + "px;width:" + o.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), o.$elem.after(o.spinner)), o.options.onImageSwap(o.$elem), s.onload = function() { o.largeWidth = s.width, o.largeHeight = s.height, o.zoomImage = i, o.zoomWindow.css({ "background-size": o.largeWidth + "px " + o.largeHeight + "px" }), o.swapAction(e, i) }, s.src = i
            },
            swapAction: function(e, i) {
                var o = this,
                    s = new Image;
                if (s.onload = function() { o.nzHeight = s.height, o.nzWidth = s.width, o.options.onImageSwapComplete(o.$elem), o.doneCallback() }, s.src = e, o.currentZoomLevel = o.options.zoomLevel, o.options.maxZoomLevel = !1, "lens" == o.options.zoomType && o.zoomLens.css({ backgroundImage: "url('" + i + "')" }), "window" == o.options.zoomType && o.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), "inner" == o.options.zoomType && o.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), o.currentImage = i, o.options.imageCrossfade) {
                    var n = o.$elem,
                        r = n.clone();
                    if (o.$elem.attr("src", e), o.$elem.after(r), r.stop(!0).fadeOut(o.options.imageCrossfade, function() { t(this).remove() }), o.$elem.width("auto").removeAttr("width"), o.$elem.height("auto").removeAttr("height"), n.fadeIn(o.options.imageCrossfade), o.options.tint && "inner" != o.options.zoomType) {
                        var a = o.zoomTintImage,
                            h = a.clone();
                        o.zoomTintImage.attr("src", i), o.zoomTintImage.after(h), h.stop(!0).fadeOut(o.options.imageCrossfade, function() { t(this).remove() }), a.fadeIn(o.options.imageCrossfade), o.zoomTint.css({ height: o.$elem.height() }), o.zoomTint.css({ width: o.$elem.width() })
                    }
                    o.zoomContainer.css("height", o.$elem.height()), o.zoomContainer.css("width", o.$elem.width()), "inner" == o.options.zoomType && (o.options.constrainType || (o.zoomWrap.parent().css("height", o.$elem.height()), o.zoomWrap.parent().css("width", o.$elem.width()), o.zoomWindow.css("height", o.$elem.height()), o.zoomWindow.css("width", o.$elem.width()))), o.options.imageCrossfade && (o.zoomWrap.css("height", o.$elem.height()), o.zoomWrap.css("width", o.$elem.width()))
                } else o.$elem.attr("src", e), o.options.tint && (o.zoomTintImage.attr("src", i), o.zoomTintImage.attr("height", o.$elem.height()), o.zoomTintImage.css({ height: o.$elem.height() }), o.zoomTint.css({ height: o.$elem.height() })), o.zoomContainer.css("height", o.$elem.height()), o.zoomContainer.css("width", o.$elem.width()), o.options.imageCrossfade && (o.zoomWrap.css("height", o.$elem.height()), o.zoomWrap.css("width", o.$elem.width()));
                o.options.constrainType && ("height" == o.options.constrainType && (o.zoomContainer.css("height", o.options.constrainSize), o.zoomContainer.css("width", "auto"), o.options.imageCrossfade ? (o.zoomWrap.css("height", o.options.constrainSize), o.zoomWrap.css("width", "auto"), o.constwidth = o.zoomWrap.width()) : (o.$elem.css("height", o.options.constrainSize), o.$elem.css("width", "auto"), o.constwidth = o.$elem.width()), "inner" == o.options.zoomType && (o.zoomWrap.parent().css("height", o.options.constrainSize), o.zoomWrap.parent().css("width", o.constwidth), o.zoomWindow.css("height", o.options.constrainSize), o.zoomWindow.css("width", o.constwidth)), o.options.tint && (o.tintContainer.css("height", o.options.constrainSize), o.tintContainer.css("width", o.constwidth), o.zoomTint.css("height", o.options.constrainSize), o.zoomTint.css("width", o.constwidth), o.zoomTintImage.css("height", o.options.constrainSize), o.zoomTintImage.css("width", o.constwidth))), "width" == o.options.constrainType && (o.zoomContainer.css("height", "auto"), o.zoomContainer.css("width", o.options.constrainSize), o.options.imageCrossfade ? (o.zoomWrap.css("height", "auto"), o.zoomWrap.css("width", o.options.constrainSize), o.constheight = o.zoomWrap.height()) : (o.$elem.css("height", "auto"), o.$elem.css("width", o.options.constrainSize), o.constheight = o.$elem.height()), "inner" == o.options.zoomType && (o.zoomWrap.parent().css("height", o.constheight), o.zoomWrap.parent().css("width", o.options.constrainSize), o.zoomWindow.css("height", o.constheight), o.zoomWindow.css("width", o.options.constrainSize)), o.options.tint && (o.tintContainer.css("height", o.constheight), o.tintContainer.css("width", o.options.constrainSize), o.zoomTint.css("height", o.constheight), o.zoomTint.css("width", o.options.constrainSize), o.zoomTintImage.css("height", o.constheight), o.zoomTintImage.css("width", o.options.constrainSize))))
            },
            doneCallback: function() { this.options.loadingIcon && this.spinner.hide(), this.nzOffset = this.$elem.offset(), this.nzWidth = this.$elem.width(), this.nzHeight = this.$elem.height(), this.currentZoomLevel = this.options.zoomLevel, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "window" == this.options.zoomType && (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? lensHeight = this.nzHeight : lensHeight = String(this.options.zoomWindowHeight / this.heightRatio), this.options.zoomWindowWidth < this.options.zoomWindowWidth ? lensWidth = this.nzWidth : lensWidth = this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight))) },
            getCurrentImage: function() { return this.zoomImage },
            getGalleryList: function() {
                var e = this;
                return e.gallerylist = [], e.options.gallery ? t("#" + e.options.gallery + " a").each(function() {
                    var i = "";
                    t(this).data("zoom-image") ? i = t(this).data("zoom-image") : t(this).data("image") && (i = t(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({ href: "" + i, title: t(this).find("img").attr("title") }) : e.gallerylist.push({ href: "" + i, title: t(this).find("img").attr("title") })
                }) : e.gallerylist.push({ href: "" + e.zoomImage, title: t(this).find("img").attr("title") }), e.gallerylist
            },
            changeZoomLevel: function(t) { this.scrollingLock = !0, this.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight), maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth), "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1))), "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, newvalue > maxheightnewvalue ? this.newvalueheight = maxheightnewvalue : this.newvalueheight = newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, newvalue > maxheightnewvalue ? this.newvalueheight = maxheightnewvalue : this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, newvalue > maxwidthtnewvalue ? this.newvaluewidth = maxwidthtnewvalue : this.newvaluewidth = newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)), scrcontinue = !1, "inner" == this.options.zoomType && (this.nzWidth >= this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullheight = !0, this.fullwidth = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullheight = !0, this.fullwidth = !0))), "inner" != this.options.zoomType && (scrcontinue = !0), scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({ height: String(this.options.zoomWindowHeight / this.heightRatio) + "px" })), "lens" != this.options.zoomType && "inner" != this.options.zoomType || (this.changeBgSize = !0)), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({ width: String(this.options.zoomWindowWidth / this.widthRatio) + "px" })), "lens" != this.options.zoomType && "inner" != this.options.zoomType || (this.changeBgSize = !0)), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth))), this.setPosition(this.currentLoc) },
            closeAll: function() { self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide() },
            changeState: function(t) { "enable" == t && (this.options.zoomEnabled = !0), "disable" == t && (this.options.zoomEnabled = !1) }
        };
        t.fn.elevateZoom = function(e) {
            return this.each(function() {
                var i = Object.create(s);
                i.init(e, this), t.data(this, "elevateZoom", i)
            })
        }, t.fn.elevateZoom.options = { zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: .1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200, zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: .4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: .4, gallery: !1, galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", responsive: !0, onComplete: t.noop, onDestroy: function() {}, onZoomedImageLoaded: function() {}, onImageSwap: t.noop, onImageSwapComplete: t.noop }
    }(jQuery, window, document),
    function(t, e) {
        "use strict";
        jQuery.fn[e] = function(t) {
            return t ? this.bind("resize", function(t, e, i) {
                var o;
                return function() {
                    var s = this,
                        n = arguments;
                    o ? clearTimeout(o) : i && t.apply(s, n), o = setTimeout(function() { i || t.apply(s, n), o = null }, e || 100)
                }
            }(t)) : this.trigger(e)
        }
    }(jQuery, "smartresize"),
    function(t) {
        "use strict";
        t.fn.themePin = function(e) {
            var i = 0,
                o = 0,
                s = [],
                n = !1,
                r = t(window),
                a = [],
                h = [],
                l = [];
            e = e || {};
            var p = function() {
                    for (var i = 0, o = s.length; i < o; i++) {
                        var a = s[i];
                        if (e.minWidth && r.width() <= e.minWidth) a.parent().is(".pin-wrapper") && a.unwrap(), a.css({ width: "", left: "", top: "", position: "" }), n = !0;
                        else {
                            n = !1;
                            var h = e.containerSelector ? a.closest(e.containerSelector).length ? a.closest(e.containerSelector) : t(e.containerSelector) : t(document.body),
                                l = a.offset(),
                                p = h.offset();
                            if (void 0 !== p) {
                                var c = a.parent().offset();
                                a.parent().is(".pin-wrapper") || a.wrap("<div class='pin-wrapper'>");
                                var d = t.extend({ top: 0, bottom: 0 }, e.padding || {}),
                                    u = parseInt(a.parent().parent().css("padding-top")),
                                    m = parseInt(a.parent().parent().css("padding-bottom"));
                                void 0 !== e.paddingOffsetTop ? d.top += parseInt(e.paddingOffsetTop, 10) : d.top += 18, void 0 !== e.paddingOffsetBottom ? d.bottom = parseInt(e.paddingOffsetBottom, 10) : d.bottom = 0;
                                var f = a.css("border-bottom"),
                                    g = a.outerHeight();
                                a.css("border-bottom", "1px solid transparent");
                                var w = a.outerHeight() - g - 1;
                                a.css("border-bottom", f), a.css({ width: a.outerWidth() <= a.parent().width() ? a.outerWidth() : a.parent().width() }), a.parent().css("height", a.outerHeight() + w), a.outerHeight() <= r.height() ? a.data("themePin", { pad: d, from: (e.containerSelector ? p.top : l.top) - d.top + u, pb: m, parentTop: c.top - u, offset: w }) : a.data("themePin", { pad: d, fromFitTop: (e.containerSelector ? p.top : l.top) - d.top + u, from: (e.containerSelector ? p.top : l.top) + a.outerHeight() - t(window).height() + u, pb: m, parentTop: c.top - u, offset: w })
                            }
                        }
                    }
                },
                c = function() {
                    if (!n) {
                        i = r.scrollTop();
                        for (var p = window.innerHeight || r.height(), c = 0, d = s.length; c < d; c++) {
                            var u, m = t(s[c]),
                                f = m.data("themePin");
                            if (f) {
                                var g = e.containerSelector ? m.closest(e.containerSelector).length ? m.closest(e.containerSelector) : t(e.containerSelector) : t(document.body),
                                    w = m.outerHeight() + f.pad.top <= p;
                                if (f.end = g.offset().top + g.height(), w ? f.to = g.offset().top + g.height() - m.outerHeight() - f.pad.bottom - f.pb : (f.to = g.offset().top + g.height() - p - f.pb, f.to2 = g.height() - m.outerHeight() - f.pad.bottom - f.pb), 0 === l[c] && (l[c] = f.to), l[c] != f.to && h[c] && m.height() + m.offset().top + f.pad.bottom < i + p && (h[c] = !1), w) {
                                    var v = f.from - f.pad.bottom,
                                        y = f.to - f.pad.top - f.offset;
                                    if (void 0 !== f.fromFitTop && f.fromFitTop && (v = f.fromFitTop - f.pad.bottom), v + m.outerHeight() > f.end || v >= y) { m.css({ position: "", top: "", left: "" }), e.activeClass && m.removeClass(e.activeClass); continue }
                                    i > v && i < y ? (!("fixed" == m.css("position")) && m.css({ left: m.offset().left, top: f.pad.top }).css("position", "fixed"), e.activeClass && m.addClass(e.activeClass)) : i >= y ? (m.css({ left: "", top: y - f.parentTop + f.pad.top }).css("position", "absolute"), e.activeClass && m.addClass(e.activeClass)) : (m.css({ position: "", top: "", left: "" }), e.activeClass && m.removeClass(e.activeClass))
                                } else if (m.height() + f.pad.top + f.pad.bottom > p || a[c] || h[c]) {
                                    var z = parseInt(m.parent().parent().css("padding-top"));
                                    i + f.pad.top - z <= f.parentTop ? (m.css({ position: "", top: "", bottom: "", left: "" }), a[c] = h[c] = !1) : i >= f.to ? (m.css({ left: "", top: f.to2, bottom: "" }).css("position", "absolute"), e.activeClass && m.addClass(e.activeClass)) : i >= o ? a[c] ? (a[c] = !1, u = m.offset().top - f.parentTop, m.css({ left: "", top: u, bottom: "" }).css("position", "absolute"), e.activeClass && m.addClass(e.activeClass)) : !h[c] && m.height() + m.offset().top + f.pad.bottom < i + p && (h[c] = !0, !("fixed" == m.css("position")) && m.css({ left: m.offset().left, bottom: f.pad.bottom, top: "" }).css("position", "fixed"), e.activeClass && m.addClass(e.activeClass)) : i < o && (h[c] ? (h[c] = !1, u = m.offset().top - f.parentTop, m.css({ left: "", top: u, bottom: "" }).css("position", "absolute"), e.activeClass && m.addClass(e.activeClass)) : !a[c] && m.offset().top >= i + f.pad.top && (a[c] = !0, !("fixed" == m.css("position")) && m.css({ left: m.offset().left, top: f.pad.top, bottom: "" }).css("position", "fixed"), e.activeClass && m.addClass(e.activeClass)))
                                } else i >= f.parentTop - f.pad.top ? m.css({ position: "fixed", top: f.pad.top }) : m.css({ position: "", top: "", bottom: "", left: "" }), a[c] = h[c] = !1;
                                l[c] = f.to
                            }
                        }
                        o = i
                    }
                },
                d = function() { p(), c() };
            return this.each(function() {
                var e = t(this),
                    i = t(this).data("themePin") || {};
                i && i.update || (s.push(e), t("img", this).one("load", p), i.update = d, t(this).data("themePin", i), a.push(!1), h.push(!1), l.push(0))
            }), r.on("touchmove scroll", c), p(), r.on("load", d), t(this).on("recalc.pin", function() { p(), c() }), this
        };
        var e = function(t, e) { return this.initialize(t, e) };
        e.defaults = { autoInit: !1, minWidth: 767, padding: { top: 0, bottom: 0 }, offsetTop: 0, offsetBottom: 0 }, e.prototype = {
            initialize: function(t, e) { return t.data("__sticky") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) },
            setData: function() { return this.$el.data("__sticky", this), this },
            setOptions: function(i) { return this.options = t.extend(!0, {}, e.defaults, i, { wrapper: this.$el }), this },
            build: function() {
                if (!t.isFunction(t.fn.themePin)) return this;
                var e, i = this.options.wrapper;
                return i.themePin(this.options), t(window).smartresize(function() {
                    e && clearTimeout(e), e = setTimeout(function() { i.trigger("recalc.pin") }, 800);
                    var t = i.parent();
                    i.outerWidth(t.width()), "fixed" == i.css("position") && i.css("left", t.offset().left)
                }), this
            }
        }, t.fn.themeSticky = function(i) { return this.map(function() { var o = t(this); return o.data("__sticky") ? (o.trigger("recalc.pin"), setTimeout(function() { o.trigger("recalc.pin") }, 800), o.data("__sticky")) : new e(o, i) }) }
    }.apply(this, [jQuery]);
(function($) {
    'use strict';
    var Porto = {
        initialised: false,
        mobile: false,
        init: function() {
            if (!this.initialised) { this.initialised = true; } else { return; }
            this.checkMobile();
            this.stickyHeader();
            this.headerSearchToggle();
            this.mMenuIcons();
            this.mMenuToggle();
            this.mobileMenu();
            this.scrollToTop();
            this.quantityInputs();
            this.countTo();
            this.tooltip();
            this.popover();
            this.changePassToggle();
            this.changeBillToggle();
            this.catAccordion();
            this.ajaxLoadProduct();
            this.toggleFilter();
            this.toggleSidebar();
            this.productTabSroll();
            this.scrollToElement();
            this.loginPopup();
            this.modalView();
            this.productManage();
            this.ratingTooltip();
            this.windowClick();
            this.popupMenu();
            this.topNotice();
            this.ratingForm();
            this.parallax();
            this.sideMenu();
            if ($.fn.superfish) { this.menuInit(); }
            if ($.fn.owlCarousel) { this.owlCarousels(); }
            if (typeof noUiSlider === 'object') { this.filterSlider(); }
            if ($.fn.themeSticky) { this.stickySidebar(); }
            if ($.fn.magnificPopup) { this.lightBox(); }
            if ($.fn.Morphext) { this.wordRotate(); }
            if ($.fn.isotope) { this.isotopes(); }
            if ($.fn.elevateZoom) { this.zoomImage(); }
        },
        checkMobile: function() { if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { this.mobile = true; } else { this.mobile = false; } },
        menuInit: function() {
            $('.menu:not(.menu-vertical)').superfish({ popUpSelector: 'ul, .megamenu', hoverClass: 'show', delay: 0, speed: 80, speedOut: 80, autoArrows: true });
            $('.menu.menu-vertical').superfish({ popUpSelector: 'ul, .megamenu', hoverClass: 'show', delay: 0, speed: 200, speedOut: 200, autoArrows: true, animation: { left: "100%", opacity: "show" }, animationOut: { left: "90%", opacity: "hide" } });
            var calculateMegaMenuPosition = function() {
                $('.menu:not(.menu-vertical) .megamenu-fixed-width').each(function() {
                    var $menu = $(this),
                        $left = $menu.parent().offset().left - 15,
                        $width = $menu.outerWidth(),
                        $right_max = $(window).width() - 45,
                        $right_space = $right_max - $left - $width;
                    if ($right_space < 0) { $menu.css('left', $right_space + 'px'); } else { $menu.css('left', '-15px'); }
                });
            }
            calculateMegaMenuPosition();
            $.fn.smartresize ? $(window).smartresize(calculateMegaMenuPosition) : $(window).on('resize', calculateMegaMenuPosition);
        },
        stickyHeader: function() {
            var isInitialised = false;
            var objectsArray = null;
            var optionsArray = null;
            var fixStickyHeader = function($stickyHeader, options, stickyOffset) {
                if ($stickyHeader.hasClass('fixed')) { return; }
                $stickyHeader.parent().css('min-height', options.height);
                options.move && options.move.forEach(function(moveOption) {
                    if (moveOption.clone) { $stickyHeader.find(moveOption.item).show(); } else {
                        var moveTo = $stickyHeader.find(options.moveTo),
                            moveIndex = 0;
                        $(moveOption.item).each(function() {
                            var moveItem = $(this);
                            moveItem.wrap('<div class="sticky-placeholder" style="' + 'width:' + moveItem.outerWidth() + 'px;' + 'height:' + moveItem.outerHeight() + 'px;' + 'margin:' + moveItem.css('margin') + ';" data-sticky-placeholder="' + (moveOption.indexStart + (++moveIndex)) + '"></div>');
                            'end' == moveOption.position ? moveItem.appendTo(moveTo) : moveItem.prependTo(moveTo);
                        });
                    }
                });
                options.changes && options.changes.forEach(function(change) {
                    change.removeClass && $stickyHeader.find(change.item).removeClass(change.removeClass);
                    change.addClass && $stickyHeader.find(change.item).addClass(change.addClass);
                });
                $stickyHeader.addClass('fixed').css('top', -options.height).animate({ top: stickyOffset });
            };
            var unfixStickyHeader = function($stickyHeader, options) {
                if (!$stickyHeader.hasClass('fixed')) { return; }
                $stickyHeader.removeClass('fixed');
                $stickyHeader.css('top', '');
                options.changes && options.changes.forEach(function(change) {
                    change.removeClass && $stickyHeader.find(change.item).addClass(change.removeClass);
                    change.addClass && $stickyHeader.find(change.item).removeClass(change.addClass);
                });
                options.move && options.move.forEach(function(moveOption) {
                    if (moveOption.clone) { $stickyHeader.find(moveOption.item).hide(); } else {
                        var moveIndex = 0;
                        $stickyHeader.find(moveOption.item).each(function() { $('.sticky-placeholder[data-sticky-placeholder="' + (moveOption.indexStart + (++moveIndex)) + '"]').replaceWith($(this)); });
                    }
                });
                $stickyHeader.parent().css('min-height', '');
            };
            var setupStickyHeader = function() {
                var moveCount = 0;
                optionsArray = [];
                objectsArray = $('.sticky-header').each(function() {
                    var $this = $(this),
                        userOptions = $this.data('sticky-options'),
                        options = {};
                    if (userOptions) { options = JSON.parse(userOptions.replace(/'/g, '"').replace(';', '')); }
                    options.move && options.move.forEach(function(moveOption) {
                        if (!moveOption.clone) {
                            moveOption.indexStart = moveCount;
                            moveCount += $(moveOption.item).length;
                        }
                    });
                    options.height = $this.outerHeight();
                    options.offset = $this.offset().top;
                    options.paddingTop = parseInt($this.css('padding-top'));
                    optionsArray.push(options);
                    $this.wrap('<div class="sticky-wrapper"></div>');
                });
                isInitialised = true;
            };
            var buildStickyHeader = function() {
                if (992 > $(window).width()) { if (isInitialised) { objectsArray.each(function(index) { unfixStickyHeader($(this), optionsArray[index]); }); } } else {
                    isInitialised || setupStickyHeader();
                    var scrollTop = $(window).scrollTop();
                    var stickyOffset = 0;
                    objectsArray.each(function(index) {
                        var $this = $(this),
                            options = optionsArray[index];
                        if (scrollTop + stickyOffset >= options.offset + options.paddingTop) {
                            $this.hasClass('fixed') || fixStickyHeader($this, options, stickyOffset);
                            stickyOffset += $this.outerHeight();
                        } else if ($this.hasClass('fixed') || !isInitialised) { unfixStickyHeader($this, options); }
                    });
                }
            }
            setTimeout(buildStickyHeader, 500);
            $(window).smartresize(buildStickyHeader);
            $(window).on('scroll', buildStickyHeader);
        },
        headerSearchToggle: function() {
            $('.header-search').length && $('body').on('click', '.header-search', function(e) { e.stopPropagation(); }).on('click', '.search-toggle', function(e) {
                var $headerSearch = $(this).closest('.header-search');
                $headerSearch.toggleClass('show');
                $('.header-search-wrapper').toggleClass('show');
                $headerSearch.hasClass('show') && $headerSearch.find('input.form-control').focus();
                e.preventDefault();
            }).on('click', function(e) {
                $('.header-search').removeClass('show');
                $('.header-search-wrapper').removeClass('show');
                $('body').removeClass('is-search-active');
            });
            var calcHeaderSearchPosition = function() {
                $('.header-search').each(function() {
                    var $this = $(this);
                    $this.find('.header-search-wrapper').css($(window).width() < 576 ? { left: 15 - $this.offset().left + 'px', right: 15 + $this.offset().left + $this.width() - $(window).width() + 'px' } : { left: '', right: '' });
                });
            };
            calcHeaderSearchPosition();
            $.fn.smartresize ? $(window).smartresize(calcHeaderSearchPosition) : $(window).on('resize', calcHeaderSearchPosition);
        },
        mMenuToggle: function() {
            $('.mobile-menu-toggler').on('click', function(e) {
                $('body').toggleClass('mmenu-active');
                $(this).toggleClass('active');
                e.preventDefault();
            });
            $('.menu-toggler').on('click', function(e) {
                if ($(window).width() >= 992) { $('.main-dropdown-menu').toggleClass('show'); } else { $('body').toggleClass('mmenu-active'); }
                e.preventDefault();
            });
            $('.mobile-menu-overlay, .mobile-menu-close').on('click', function(e) {
                $('body').removeClass('mmenu-active');
                $('.menu-toggler').removeClass('active');
                e.preventDefault();
            });
        },
        mMenuIcons: function() { $('.mobile-menu').find('li').each(function() { var $this = $(this); if ($this.find('ul').length) { $('<span/>', { 'class': 'mmenu-btn' }).appendTo($this.children('a')); } }); },
        mobileMenu: function() {
            $('.mmenu-btn').on('click', function(e) {
                var $parent = $(this).closest('li'),
                    $targetUl = $parent.find('ul').eq(0);
                if (!$parent.hasClass('open')) { $targetUl.slideDown(300, function() { $parent.addClass('open'); }); } else { $targetUl.slideUp(300, function() { $parent.removeClass('open'); }); }
                e.stopPropagation();
                e.preventDefault();
            });
        },
        owlCarousels: function() {
            var sliderDefaultOptions = { loop: true, margin: 0, responsiveClass: true, nav: false, navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'], dots: true, autoplay: true, autoplayTimeout: 15000, items: 1, };
            var sliderInit = function($slider, sliderCustomOptions) {
                var newSliderOptions;
                if (sliderCustomOptions) { newSliderOptions = $.extend(true, {}, sliderDefaultOptions, sliderCustomOptions); } else { newSliderOptions = sliderDefaultOptions; }
                $slider.hasClass('nav-thin') && (newSliderOptions.navText = ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']);
                var userOptions = $slider.data('owl-options');
                if (typeof userOptions == 'string') {
                    userOptions = JSON.parse(userOptions.replace(/'/g, '"').replace(';', ''));
                    newSliderOptions = $.extend(true, {}, newSliderOptions, userOptions);
                }
                $slider.owlCarousel(newSliderOptions);
            }
            var sliderCustomOptionsArray = {
                '.home-slider': { lazyLoad: true, autoplay: false, dots: false, nav: true, autoplayTimeout: 12000, animateOut: 'fadeOut', navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'], loop: true },
                '.testimonials-carousel': { lazyLoad: true, autoHeight: true, responsive: { 992: { items: 2 } } },
                '.featured-products': { loop: false, margin: 30, autoplay: false, responsive: { 0: { items: 2 }, 700: { items: 3, margin: 15 }, 1200: { items: 4 } } },
                '.cats-slider': { loop: false, margin: 20, autoplay: false, nav: true, dots: false, items: 2, responsive: { 576: { items: 3 }, 992: { items: 4, }, 1200: { items: 5, }, 1400: { items: 6 } } },
                '.products-slider': { loop: false, margin: 20, autoplay: false, dots: true, items: 2, responsive: { 576: { items: 3 }, 992: { items: 4, } } },
                '.categories-slider': { loop: false, margin: 20, autoplay: false, nav: true, dots: false, items: 2, responsive: { 576: { items: 3 }, 992: { items: 5, } } },
                '.quantity-inputs': { items: 2, margin: 20, dots: false, nav: true, responsive: { 992: { items: 4 }, 768: { items: 3 } }, onInitialized: function() { this.$element.find('.horizontal-quantity').val(1); } },
                '.banners-slider': { dots: true, loop: false, margin: 20, responsive: { 576: { items: 2 }, 992: { items: 3 } } },
                '.brands-slider': { loop: false, margin: 20, autoHeight: true, autoplay: false, dots: false, nav: true, items: 2, responsive: { 576: { items: 4 }, 768: { items: 6 } } },
                '.widget-featured-products': { lazyLoad: true, nav: true, navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'], dots: false, autoHeight: true },
                '.entry-slider': { margin: 2, lazyLoad: true, },
                '.related-posts-carousel': { loop: false, margin: 30, autoplay: false, responsive: { 480: { items: 2 }, 1200: { items: 3 } } },
                '.boxed-slider': { lazyLoad: true, autoplayTimeout: 20000, animateOut: 'fadeOut', dots: false },
                '.about-slider': { margin: 2, lazyLoad: true, },
                '.product-single-default .product-single-carousel': {
                    nav: true,
                    dotsContainer: '#carousel-custom-dots',
                    autoplay: false,
                    onInitialized: function() {
                        var $source = this.$element;
                        if ($.fn.elevateZoom) {
                            $source.find('img').each(function() {
                                var $this = $(this),
                                    zoomConfig = { responsive: true, zoomWindowFadeIn: 350, zoomWindowFadeOut: 200, borderSize: 0, zoomContainer: $this.parent(), zoomType: 'inner', cursor: 'grab' };
                                $this.elevateZoom(zoomConfig);
                            });
                        }
                    },
                },
                '.product-single-extended .product-single-carousel': { dots: false, autoplay: false, center: true, items: 1, responsive: { 768: { items: 3 } } }
            };
            var selectors = Object.keys(sliderCustomOptionsArray);
            selectors.forEach(function(selector) { $(selector).each(function() { sliderInit($(this), sliderCustomOptionsArray[selector]); }); });
            $('.owl-carousel').each(function() {
                if (!$(this).data('owl.carousel'))
                    sliderInit($(this), sliderInit);
            });
            $('.home-slider').on('loaded.owl.lazy', function(event) {
                $(event.element).closest('.home-slide').addClass('loaded');
                $(event.element).closest('.home-slider').addClass('loaded');
            });
            $('.boxed-slider').on('loaded.owl.lazy', function(event) { $(event.element).closest('.category-slide').addClass('loaded'); });
            $('.about-slider').on('loaded.owl.lazy', function(event) { $(event.element).closest('div').addClass('loaded'); });
            $('#carousel-custom-dots .owl-dot').click(function() { $('.product-single-carousel').trigger('to.owl.carousel', [$(this).index(), 300]); });
        },
        filterSlider: function() {
            var priceSlider = document.getElementById('price-slider'),
                currencyVar = '$';
            if (priceSlider == null) return;
            noUiSlider.create(priceSlider, { start: [200, 700], connect: true, step: 100, margin: 100, range: { 'min': 0, 'max': 1000 } });
            priceSlider.noUiSlider.on('update', function(values, handle) {
                var values = values.map(function(value) { return currencyVar + value; })
                $('#filter-price-range').text(values.join(' - '));
            });
        },
        stickySidebar: function() {
            var paddingOffsetTop = 10;
            $('.header .sticky-header').each(function() { paddingOffsetTop += $(this).height(); });
            $(".sidebar-wrapper, .sticky-slider").themeSticky({ autoInit: true, minWidth: 991, containerSelector: '.row, .container', paddingOffsetBottom: 10, paddingOffsetTop: paddingOffsetTop });
        },
        countTo: function() {
            if ($.fn.countTo) { if ($.fn.waypoint) { $('.count').waypoint(function() { $(this.element).countTo(); }, { offset: '90%', triggerOnce: true }); } else { $('.count').countTo(); } } else {
                $('.count').each(function() {
                    var $this = $(this),
                        countValue = $this.data('to');
                    $this.text(countValue);
                });
            }
        },
        tooltip: function() { if ($.fn.tooltip) { $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover focus' }); } },
        popover: function() { if ($.fn.popover) { $('[data-toggle="popover"]').popover({ trigger: 'focus' }); } },
        changePassToggle: function() { $('#change-pass-checkbox').on('change', function() { $('#account-chage-pass').toggleClass('show'); }); },
        changeBillToggle: function() {
            $('#change-bill-address').on('change', function() {
                $('#checkout-shipping-address').toggleClass('show');
                $('#new-checkout-address').toggleClass('show');
            });
        },
        catAccordion: function() { $('.catAccordion').on('shown.bs.collapse', function(item) { var parent = $(item.target).closest('li'); if (!parent.hasClass('open')) { parent.addClass('open'); } }).on('hidden.bs.collapse', function(item) { var parent = $(item.target).closest('li'); if (parent.hasClass('open')) { parent.removeClass('open'); } }); },
        scrollBtnAppear: function() { if ($(window).scrollTop() >= 400) { $('#scroll-top').addClass('fixed'); } else { $('#scroll-top').removeClass('fixed'); } },
        scrollToTop: function() {
            $('#scroll-top').on('click', function(e) {
                $('html, body').animate({ 'scrollTop': 0 }, 1200);
                e.preventDefault();
            });
        },
        newsletterPopup: function() {
            $.magnificPopup.open({
                items: { src: '#newsletter-popup-form' },
                type: 'inline',
                mainClass: 'mfp-newsletter',
                removalDelay: 350,
                callbacks: {
                    open: function() {
                        if ($('.sticky-header.fixed').css('margin-right')) {
                            var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';
                            $('.sticky-header.fixed').css('margin-right', newMargin);
                            $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                            $('#scroll-top').css('margin-right', newMargin);
                        }
                    },
                    afterClose: function() {
                        if ($('.sticky-header.fixed').css('margin-right')) {
                            var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';
                            $('.sticky-header.fixed').css('margin-right', newMargin);
                            $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                            $('#scroll-top').css('margin-right', newMargin);
                        }
                    }
                },
            });
        },
        lightBox: function() {
            if (document.getElementById('newsletter-popup-form')) {
                setTimeout(function() {
                    var mpInstance = $.magnificPopup.instance;
                    if (mpInstance.isOpen) {
                        mpInstance.close();
                        setTimeout(function() { Porto.newsletterPopup(); }, 360);
                    } else { Porto.newsletterPopup(); }
                }, 10000);
            }
            var links = [];
            var $productSliderImages = $('.product-single-carousel .owl-item:not(.cloned) img').length === 0 ? $('.product-single-gallery img') : $('.product-single-carousel .owl-item:not(.cloned) img');
            $productSliderImages.each(function() { links.push({ 'src': $(this).attr('data-zoom-image') }); });
            $(".prod-full-screen").click(function(e) {
                var currentIndex;
                if (e.currentTarget.closest(".product-slider-container")) { currentIndex = ($('.product-single-carousel').data('owl.carousel').current() + $productSliderImages.length - Math.ceil($productSliderImages.length / 2)) % $productSliderImages.length; } else { currentIndex = $(e.currentTarget).closest(".product-item").index(); }
                $.magnificPopup.open({ items: links, navigateByImgClick: true, type: 'image', gallery: { enabled: true }, }, currentIndex);
            });
            $('body').on('click', 'a.btn-quickview', function(e) {
                e.preventDefault();
                Porto.ajaxLoading();
                var ajaxUrl = $(this).attr('href');
                setTimeout(function() {
                    $.magnificPopup.open({
                        type: 'ajax',
                        mainClass: "mfp-ajax-product",
                        tLoading: '',
                        preloader: false,
                        removalDelay: 350,
                        items: { src: ajaxUrl },
                        callbacks: {
                            open: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';
                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            },
                            ajaxContentAdded: function() {
                                Porto.owlCarousels();
                                Porto.quantityInputs();
                                if (typeof addthis !== 'undefined') { addthis.layers.refresh(); } else { $.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b927288a03dbde6"); }
                            },
                            beforeClose: function() { $('.ajax-overlay').remove(); },
                            afterClose: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';
                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            }
                        },
                        ajax: { tError: '', }
                    });
                }, 500);
            });
        },
        productTabSroll: function() {
            $('.rating-link').on('click', function(e) {
                if ($('.product-single-tabs').length) { $('#product-tab-reviews').tab('show'); } else if ($('.product-single-collapse').length) { $('#product-reviews-content').collapse('show'); } else { return; }
                if ($('#product-reviews-content').length) {
                    setTimeout(function() {
                        var scrollTabPos = $('#product-reviews-content').offset().top - 60;
                        $('html, body').stop().animate({ 'scrollTop': scrollTabPos }, 800);
                    }, 250);
                }
                e.preventDefault();
            });
        },
        quantityInputs: function() {
            if ($.fn.TouchSpin) {
                $('.vertical-quantity').TouchSpin({ verticalbuttons: true, verticalup: '', verticaldown: '', verticalupclass: 'icon-up-dir', verticaldownclass: 'icon-down-dir', buttondown_class: 'btn btn-outline', buttonup_class: 'btn btn-outline', initval: 1, min: 1 });
                $('.horizontal-quantity').TouchSpin({ verticalbuttons: false, buttonup_txt: '', buttondown_txt: '', buttondown_class: 'btn btn-outline btn-down-icon', buttonup_class: 'btn btn-outline btn-up-icon', initval: 1, min: 1 });
            }
        },
        ajaxLoading: function() { $('body').append("<div class='ajax-overlay'><i class='porto-loading-icon'></i></div>"); },
        wordRotate: function() { $('.word-rotater').each(function() { $(this).Morphext({ animation: 'bounceIn', separator: ',', speed: 2000 }); }); },
        ajaxLoadProduct: function() {
            var loadCount = 0;
            $loadButton.click(function(e) {
                e.preventDefault();
                $(this).text('Loading ...');
                $.ajax({
                    url: "ajax/category-ajax-products.html",
                    success: function(result) {
                        var grid = $('.product-ajax-grid');
                        var className = grid.find('.product-default').parent().attr('class');
                        var $newItems = $(result);
                        $newItems.find('.product-default').each(function() { $(this).parent().attr('class', className); });
                        setTimeout(function() {
                            $newItems.hide().appendTo(grid).fadeIn();
                            $loadButton.text('Load More');
                            ++loadCount >= 2 && $loadButton.hide();
                        }, 350);
                    },
                    failure: function() { $loadButton.text("Sorry something went wrong."); }
                });
            });
        },
        toggleFilter: function() {
            $('.filter-toggle a').click(function(e) {
                e.preventDefault();
                $('.filter-toggle').toggleClass('opened');
                $('main').toggleClass('sidebar-opened');
            });
            $('.sidebar-overlay').click(function(e) {
                $('.filter-toggle').removeClass('opened');
                $('main').removeClass('sidebar-opened');
            });
            $('.sort-menu-trigger').click(function(e) {
                e.preventDefault();
                $('.select-custom').removeClass('opened');
                $(e.target).closest('.select-custom').toggleClass('opened');
            });
        },
        toggleSidebar: function() { $('.sidebar-toggle').click(function() { $('main').toggleClass('sidebar-opened'); }); },
        scrollToElement: function() {
            $('.scrolling-box a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({ scrollTop: target.offset().top - 90 }, 700);
                }
            });
        },
        loginPopup: function() {
            $('.login-link').click(function(e) {
                e.preventDefault();
                Porto.ajaxLoading();
                var ajaxUrl = "ajax/login-popup.html";
                setTimeout(function() {
                    $.magnificPopup.open({
                        type: 'ajax',
                        mainClass: "login-popup",
                        tLoading: '',
                        preloader: false,
                        removalDelay: 350,
                        items: { src: ajaxUrl },
                        callbacks: {
                            open: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';
                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            },
                            beforeClose: function() { $('.ajax-overlay').remove(); },
                            afterClose: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';
                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            }
                        },
                        ajax: { tError: '', }
                    });
                }, 1500);
            });
        },
        modalView: function() {
            $('body').on('click', '.btn-add-cart', function(e) {
                $('.add-cart-box #productImage').attr('src', $(this).parents('.product-default').find('figure img').attr('src'));
                $('.add-cart-box #productTitle').text($(this).parents('.product-default').find('.product-title').text());
                if ($('.sticky-header.fixed').css('margin-right')) {
                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';
                    $('.sticky-header.fixed').css('margin-right', newMargin);
                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                    $('#scroll-top').css('margin-right', newMargin);
                }
            });
            $('.modal#addCartModal').on('hidden.bs.modal', function(e) {
                if ($('.sticky-header.fixed').css('margin-right')) {
                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';
                    $('.sticky-header.fixed').css('margin-right', newMargin);
                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                    $('#scroll-top').css('margin-right', newMargin);
                }
            })
        },
        productManage: function() {
            $('.product-select').click(function(e) {
                $(this).parents('.product-default').find('figure img').attr('src', $(this).data('src'));
                $(this).addClass('checked').siblings().removeClass('checked');
            });
        },
        ratingTooltip: function() {
            $('body').on('mouseenter touchstart', '.product-ratings', function(e) {
                var ratingsRes = $(this).find('.ratings').width() / $(this).width() * 5;
                $(this).find('.tooltiptext').text(ratingsRes ? ratingsRes.toFixed(2) : ratingsRes);
            });
        },
        windowClick: function() { $(document).click(function(e) { if (!$(e.target).closest('.toolbox-item.select-custom').length) { $('.select-custom').removeClass('opened'); } }); },
        popupMenu: function() {
            if ($('.popup-menu').length <= 0) { return; }
            var $popup_menu_ul = $('.popup-menu-ul');
            var scroll_bar_size = $popup_menu_ul.parent().width() - $popup_menu_ul.children().width();
            scroll_bar_size >= 0 && $popup_menu_ul.css('margin-right', '-' + scroll_bar_size + 'px'), $popup_menu_ul.css('margin-top', scroll_bar_size + 'px');
            $('.popup-menu-toggler').on('click', function(e) {
                e.preventDefault();
                $(this).siblings('.popup-menu').addClass('open');
                $(document).on('keydown.popup-menu', function(e) {
                    if (e.which == 27) {
                        $('.popup-menu').removeClass('open');
                        $(document).off('keydown.popup-menu');
                    }
                });
            });
            $('body').on('click', '.popup-menu-close', function(e) {
                $('.popup-menu').removeClass('open');
                $(document).off('keydown.popup-menu');
                e.preventDefault();
            });
            $('body').on('click', '.popup-menu a', function(e) {
                var $ul = $(this).siblings('ul');
                $ul.length && $ul.toggleClass('open'), e.preventDefault();
            });
        },
        topNotice: function() {
            if ($('.top-notice .mfp-close').length) {
                $('body').on('click', '.top-notice .mfp-close', function() {
                    var topNoticeHeight = $(this).height();
                    $(this).closest('.top-notice').fadeOut(function() { $(this).addClass('closed'); });
                });
            }
        },
        ratingForm: function() {
            $('body').on('click', '.rating-form .rating-stars > a', function(e) {
                var $star = $(this);
                $star.addClass('active').siblings().removeClass('active');
                $star.parent().addClass('selected');
                $star.closest('.rating-form').find('select').val($star.text());
                e.preventDefault();
            });
        },
        parallax: function() {
            var wrappers = $('[data-parallax]'),
                defaultOptions = { speed: 1.5, horizontalPosition: '50%', offset: 0, enableOnMobile: true };
            if (!wrappers.length) { return; }
            wrappers.each(function() {
                var wrapper = $(this),
                    opts = wrapper.data('parallax');
                if (opts) { opts = JSON.parse(opts.replace(/'/g, '"').replace(';', '')); }
                var options = $.extend(true, {}, defaultOptions, opts),
                    $window = $(window),
                    offset, yPos, plxPos, background;
                background = $('<div class="parallax-background"></div>');
                var bg = wrapper.data('image-src') ? 'url(' + wrapper.data('image-src') + ')' : wrapper.css('background-image');
                background.css({ 'background-image': bg, 'background-size': 'cover', 'background-position': '50% 0%', 'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': options.speed * 100 + '%' });
                wrapper.prepend(background);
                wrapper.css({ 'position': 'relative', 'overflow': 'hidden' });
                if (!Porto.mobile || options.enableOnMobile) {
                    var moveParallax = function() {
                        offset = wrapper.offset();
                        yPos = -($window.scrollTop() - (offset.top - 100)) / ((options.speed + 2));
                        plxPos = (yPos < 0) ? Math.abs(yPos) : -Math.abs(yPos);
                        background.css({ 'transform': 'translate3d(0, ' + ((plxPos - 50) + (options.offset)) + 'px, 0)', 'background-position-x': options.horizontalPosition });
                    };
                    $(window).on('scroll resize', moveParallax);
                    moveParallax();
                } else { wrapper.addClass('parallax-disabled'); }
            });
        },
        isotopes: function() {
            var defaultOptions = { itemsSelector: '.grid-item', masonry: { columnWidth: '.grid-col-sizer' }, percentPosition: true, sortBy: 'original-order', getSortData: { 'md-order': '[data-md-order] parseInt' }, sortReorder: false };
            $('.grid').each(function() {
                var $this = $(this),
                    userOptions = $this.data('grid-options');
                if (userOptions) { userOptions = JSON.parse(userOptions.replace(/'/g, '"').replace(';', '')); }
                var options = $.extend(true, {}, defaultOptions, userOptions);
                var gridIns = $this.isotope(options);
                if (options.sortReorder) {
                    var reorderGrid = function() {
                        var windowWidth = $(window).width();
                        gridIns.isotope({ sortBy: (windowWidth < 768 && windowWidth > 400) ? 'md-order' : 'original-order' });
                    };
                    $.fn.smartresize ? $(window).smartresize(reorderGrid) : $(window).on('resize', reorderGrid);
                }
            });
        },
        zoomImage: function() {
            $('.product-single-grid .product-single-gallery img').each(function() {
                var $this = $(this),
                    zoomConfig = { responsive: true, zoomWindowFadeIn: 350, zoomWindowFadeOut: 200, borderSize: 0, zoomContainer: $this.parent(), zoomType: 'inner', cursor: 'grab' };
                $this.elevateZoom(zoomConfig);
            });
        },
        sideMenu: function() {
            $('.side-menu').length && $('body').on('click', '.side-menu-toggle', function(e) {
                $(this).siblings('ul').slideToggle('fast');
                $(this).parent().toggleClass('show');
                e.stopPropagation();
            });
        }
    };
    $('body').prepend('<div class="loading-overlay"><div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');
    var $loadButton = $('.loadmore');
    jQuery(document).ready(function() { Porto.init(); });
    $(window).on('load', function() {
        $('body').addClass("loaded");
        Porto.scrollBtnAppear();
    });
    $(window).on('scroll', function() { Porto.scrollBtnAppear(); });
})(jQuery);
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e() }(this, function() {
    "use strict";

    function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function a(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

    function s() { return (s = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]) } return t }).apply(this, arguments) }

    function u(t) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function l(t, e) { return (l = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }

    function i(t, e, n) {
        return (i = d() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && l(i, n.prototype), i
        }).apply(null, arguments)
    }

    function p(t, e) { return !e || "object" != typeof e && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function f(t, e, n) { return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) { var o = function(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));); return t }(t, e); if (o) { var i = Object.getOwnPropertyDescriptor(o, e); return i.get ? i.get.call(n) : i.value } })(t, e, n || t) }

    function m(e) { return Object.keys(e).map(function(t) { return e[t] }) }

    function h(t) { return Array.prototype.slice.call(t) }

    function g(t, e) {
        var n;
        n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === _.indexOf(n) && (_.push(n), N(n))
    }

    function v(t) { return t && Promise.resolve(t) === t }

    function b(t) { return t instanceof Element || "object" === r(e = t) && e.jquery; var e }

    function t(t) { var e = {}; for (var n in t) e[t[n]] = "swal2-" + t[n]; return e }

    function y(t) { var e = Y(); return e ? e.querySelector(t) : null }

    function e(t) { return y(".".concat(t)) }

    function n() { var t = Z(); return h(t.querySelectorAll(".".concat(W.icon))) }

    function w() { var t = n().filter(function(t) { return ht(t) }); return t.length ? t[0] : null }

    function C() { return e(W.title) }

    function k() { return e(W.content) }

    function x() { return e(W.image) }

    function P() { return e(W["progress-steps"]) }

    function A() { return e(W["validation-message"]) }

    function E() { return y(".".concat(W.actions, " .").concat(W.confirm)) }

    function B() { return y(".".concat(W.actions, " .").concat(W.cancel)) }

    function S() { return e(W.actions) }

    function O() { return e(W.header) }

    function T() { return e(W.footer) }

    function L() { return e(W["timer-progress-bar"]) }

    function j() { return e(W.close) }

    function q() {
        var t = h(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) { return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0 }),
            e = h(Z().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t) { return "-1" !== t.getAttribute("tabindex") });
        return function(t) { for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]); return e }(t.concat(e)).filter(function(t) { return ht(t) })
    }

    function I() { return !Q() && !document.body.classList.contains(W["no-backdrop"]) }

    function M() { return Z().hasAttribute("data-loading") }

    function V(e, t) {
        var n;
        e.textContent = "", t && (n = (new DOMParser).parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function(t) { e.appendChild(t) }), h(n.querySelector("body").childNodes).forEach(function(t) { e.appendChild(t) }))
    }

    function R(t, e) {
        if (e) {
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
                if (!t.classList.contains(n[o])) return;
            return 1
        }
    }

    function H(t, e, n) {
        var o, i;
        if (i = e, h((o = t).classList).forEach(function(t) {-1 === m(W).indexOf(t) && -1 === m(K).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t) }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return N("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            pt(t, e.customClass[n])
        }
    }
    var D = "SweetAlert2:",
        N = function(t) { console.warn("".concat(D, " ").concat(t)) },
        U = function(t) { console.error("".concat(D, " ").concat(t)) },
        _ = [],
        F = function(t) { return "function" == typeof t ? t() : t },
        z = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
        W = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        K = t(["success", "warning", "info", "question", "error"]),
        Y = function() { return document.body.querySelector(".".concat(W.container)) },
        Z = function() { return e(W.popup) },
        Q = function() { return document.body.classList.contains(W["toast-shown"]) },
        $ = { previousBodyPadding: null };

    function J(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return mt(t, W[e]);
            case "checkbox":
                return t.querySelector(".".concat(W.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat(W.radio, " input:checked")) || t.querySelector(".".concat(W.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat(W.range, " input"));
            default:
                return mt(t, W.input)
        }
    }

    function X(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function G(t, e, n) { t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) { t.forEach ? t.forEach(function(t) { n ? t.classList.add(e) : t.classList.remove(e) }) : n ? t.classList.add(e) : t.classList.remove(e) })) }

    function tt(t, e, n) { n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e) }

    function et(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n
    }

    function nt(t) { t.style.opacity = "", t.style.display = "none" }

    function ot(t, e, n) { e ? et(t, n) : nt(t) }

    function it(t) { return !!(t.scrollHeight > t.clientHeight) }

    function rt(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function at(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
            o = L();
        ht(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function() { o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%" }, 10))
    }

    function ct() { return "undefined" == typeof window || "undefined" == typeof document }

    function st(t) { rn.isVisible() && dt !== t.target.value && rn.resetValidationMessage(), dt = t.target.value }

    function ut(t, e) { t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? bt(t, e) : t && V(e, t) }

    function lt(t, e) {
        var n = S(),
            o = E(),
            i = B();
        e.showConfirmButton || e.showCancelButton || nt(n), H(n, e, "actions"), Ct(o, "confirm", e), Ct(i, "cancel", e), e.buttonsStyling ? function(t, e, n) {
            pt([t, e], W.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor); {
                var o;
                M() || (o = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = o, t.style.borderRightColor = o)
            }
        }(o, i, e) : (ft([o, i], W.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o)
    }
    var dt, pt = function(t, e) { G(t, e, !0) },
        ft = function(t, e) { G(t, e, !1) },
        mt = function(t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (R(t.childNodes[n], e)) return t.childNodes[n]
        },
        ht = function(t) { return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) },
        gt = '\n <div aria-labelledby="'.concat(W.title, '" aria-describedby="').concat(W.content, '" class="').concat(W.popup, '" tabindex="-1">\n   <div class="').concat(W.header, '">\n     <ul class="').concat(W["progress-steps"], '"></ul>\n     <div class="').concat(W.icon, " ").concat(K.error, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.question, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.warning, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.info, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.success, '"></div>\n     <img class="').concat(W.image, '" />\n     <h2 class="').concat(W.title, '" id="').concat(W.title, '"></h2>\n     <button type="button" class="').concat(W.close, '"></button>\n   </div>\n   <div class="').concat(W.content, '">\n     <div id="').concat(W.content, '" class="').concat(W["html-container"], '"></div>\n     <input class="').concat(W.input, '" />\n     <input type="file" class="').concat(W.file, '" />\n     <div class="').concat(W.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(W.select, '"></select>\n     <div class="').concat(W.radio, '"></div>\n     <label for="').concat(W.checkbox, '" class="').concat(W.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(W.label, '"></span>\n     </label>\n     <textarea class="').concat(W.textarea, '"></textarea>\n     <div class="').concat(W["validation-message"], '" id="').concat(W["validation-message"], '"></div>\n   </div>\n   <div class="').concat(W.actions, '">\n     <button type="button" class="').concat(W.confirm, '">OK</button>\n     <button type="button" class="').concat(W.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(W.footer, '"></div>\n   <div class="').concat(W["timer-progress-bar-container"], '">\n     <div class="').concat(W["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        vt = function(t) {
            var e, n, o, i, r, a, c, s, u, l, d, p, f, m, h, g = !!(e = Y()) && (e.parentNode.removeChild(e), ft([document.documentElement, document.body], [W["no-backdrop"], W["toast-shown"], W["has-column"]]), !0);
            ct() ? U("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = W.container, g && pt(n, W["no-transition"]), V(n, gt), (o = "string" == typeof(i = t.target) ? document.querySelector(i) : i).appendChild(n), r = t, (a = Z()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), c = o, "rtl" === window.getComputedStyle(c).direction && pt(Y(), W.rtl), s = k(), u = mt(s, W.input), l = mt(s, W.file), d = s.querySelector(".".concat(W.range, " input")), p = s.querySelector(".".concat(W.range, " output")), f = mt(s, W.select), m = s.querySelector(".".concat(W.checkbox, " input")), h = mt(s, W.textarea), u.oninput = st, l.onchange = st, f.onchange = st, m.onchange = st, h.oninput = st, d.oninput = function(t) { st(t), p.value = d.value }, d.onchange = function(t) { st(t), d.nextSibling.value = d.value })
        },
        bt = function(t, e) { t.jquery ? yt(e, t) : V(e, t.toString()) },
        yt = function(t, e) {
            if (t.textContent = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        wt = function() {
            if (ct()) return !1;
            var t = document.createElement("div"),
                e = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function Ct(t, e, n) {
        var o;
        ot(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), V(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = W[e], H(t, n, "".concat(e, "Button")), pt(t, n["".concat(e, "ButtonClass")])
    }

    function kt(t, e) {
        var n, o, i, r, a, c, s, u, l = Y();
        l && (n = l, "string" == typeof(o = e.backdrop) ? n.style.background = o : o || pt([document.documentElement, document.body], W["no-backdrop"]), !e.backdrop && e.allowOutsideClick && N('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), i = l, (r = e.position) in W ? pt(i, W[r]) : (N('The "position" parameter is not valid, defaulting to "center"'), pt(i, W.center)), a = l, !(c = e.grow) || "string" != typeof c || (s = "grow-".concat(c)) in W && pt(a, W[s]), H(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")))
    }

    function xt(t, e) { t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder) }
    var Pt = { promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap },
        At = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Et = function(t) {
            if (!Tt[t.input]) return U('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = Ot(t.input),
                n = Tt[t.input](e, t);
            et(n), setTimeout(function() { X(n) })
        },
        Bt = function(t, e) {
            var n = J(k(), t);
            if (n)
                for (var o in ! function(t) { for (var e = 0; e < t.attributes.length; e++) { var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n) } }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        St = function(t) {
            var e = Ot(t.input);
            t.customClass && pt(e, t.customClass.input)
        },
        Ot = function(t) { var e = W[t] ? W[t] : W.input; return mt(k(), e) },
        Tt = {};
    Tt.text = Tt.email = Tt.password = Tt.number = Tt.tel = Tt.url = function(t, e) { return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : v(e.inputValue) || N('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), xt(t, e), t.type = e.input, t }, Tt.file = function(t, e) { return xt(t, e), t }, Tt.range = function(t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t
    }, Tt.select = function(t, e) { var n; return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), V(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t }, Tt.radio = function(t) { return t.textContent = "", t }, Tt.checkbox = function(t, e) {
        var n = J(k(), "checkbox");
        n.value = 1, n.id = W.checkbox, n.checked = Boolean(e.inputValue);
        var o = t.querySelector("span");
        return V(o, e.inputPlaceholder), t
    }, Tt.textarea = function(e, t) {
        var n, o;
        return e.value = t.inputValue, xt(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle(Z()).width), o = parseInt(window.getComputedStyle(Z()).paddingLeft) + parseInt(window.getComputedStyle(Z()).paddingRight), new MutationObserver(function() {
            var t = e.offsetWidth + o;
            Z().style.width = n < t ? "".concat(t, "px") : null
        }).observe(e, { attributes: !0, attributeFilter: ["style"] })), e
    };

    function Lt(t, e) {
        var n, o, i, r, a, c = k().querySelector("#".concat(W.content));
        e.html ? (ut(e.html, c), et(c, "block")) : e.text ? (c.textContent = e.text, et(c, "block")) : nt(c), n = t, o = e, i = k(), r = Pt.innerParams.get(n), a = !r || o.input !== r.input, At.forEach(function(t) {
            var e = W[t],
                n = mt(i, e);
            Bt(t, o.inputAttributes), n.className = e, a && nt(n)
        }), o.input && (a && Et(o), St(o)), H(k(), e, "content")
    }

    function jt() { return Y() && Y().getAttribute("data-queue-step") }

    function qt(t, s) {
        var u = P();
        if (!s.progressSteps || 0 === s.progressSteps.length) return nt(u), 0;
        et(u), u.textContent = "";
        var l = parseInt(void 0 === s.currentProgressStep ? jt() : s.currentProgressStep);
        l >= s.progressSteps.length && N("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function(t, e) {
            var n, o, i, r, a, c = (n = t, o = document.createElement("li"), pt(o, W["progress-step"]), V(o, n), o);
            u.appendChild(c), e === l && pt(c, W["active-progress-step"]), e !== s.progressSteps.length - 1 && (r = t, a = document.createElement("li"), pt(a, W["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), i = a, u.appendChild(i))
        })
    }

    function It(t, e) {
        var n, o, i, r, a, c, s, u, l = O();
        H(l, e, "header"), qt(0, e), n = t, o = e, (r = Pt.innerParams.get(n)) && o.icon === r.icon && w() ? H(w(), o, "icon") : (Rt(), o.icon && (-1 !== Object.keys(K).indexOf(o.icon) ? (i = y(".".concat(W.icon, ".").concat(K[o.icon])), et(i), Dt(i, o), Ht(), H(i, o, "icon"), pt(i, o.showClass.icon)) : U('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))),
            function(t) {
                var e = x();
                if (!t.imageUrl) return nt(e);
                et(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), tt(e, "width", t.imageWidth), tt(e, "height", t.imageHeight), e.className = W.image, H(e, t, "image")
            }(e), a = e, c = C(), ot(c, a.title || a.titleText), a.title && ut(a.title, c), a.titleText && (c.innerText = a.titleText), H(c, a, "title"), s = e, u = j(), V(u, s.closeButtonHtml), H(u, s, "closeButton"), ot(u, s.showCloseButton), u.setAttribute("aria-label", s.closeButtonAriaLabel)
    }

    function Mt(t, e) {
        var n, o, i, r;
        n = e, o = Z(), tt(o, "width", n.width), tt(o, "padding", n.padding), n.background && (o.style.background = n.background), _t(o, n), kt(0, e), It(t, e), Lt(t, e), lt(0, e), i = e, r = T(), ot(r, i.footer), i.footer && ut(i.footer, r), H(r, i, "footer"), "function" == typeof e.onRender && e.onRender(Z())
    }

    function Vt() { return E() && E().click() }
    var Rt = function() { for (var t = n(), e = 0; e < t.length; e++) nt(t[e]) },
        Ht = function() { for (var t = Z(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e },
        Dt = function(t, e) { t.textContent = "", e.iconHtml ? V(t, Nt(e.iconHtml)) : "success" === e.icon ? V(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? V(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : V(t, Nt({ question: "?", warning: "!", info: "i" }[e.icon])) },
        Nt = function(t) { return '<div class="'.concat(W["icon-content"], '">').concat(t, "</div>") },
        Ut = [],
        _t = function(t, e) { t.className = "".concat(W.popup, " ").concat(ht(t) ? e.showClass.popup : ""), e.toast ? (pt([document.documentElement, document.body], W["toast-shown"]), pt(t, W.toast)) : pt(t, W.modal), H(t, e, "popup"), "string" == typeof e.customClass && pt(t, e.customClass), e.icon && pt(t, W["icon-".concat(e.icon)]) };

    function Ft() {
        var t = Z();
        t || rn.fire(), t = Z();
        var e = S(),
            n = E();
        et(e), et(n, "inline-block"), pt([t, e], W.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function zt() {
        return new Promise(function(t) {
            var e = window.scrollX,
                n = window.scrollY;
            $t.restoreFocusTimeout = setTimeout(function() { $t.previousActiveElement && $t.previousActiveElement.focus ? ($t.previousActiveElement.focus(), $t.previousActiveElement = null) : document.body && document.body.focus(), t() }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Wt() {
        if ($t.timeout) return function() {
            var t = L(),
                e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width),
                o = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(o, "%")
        }(), $t.timeout.stop()
    }

    function Kt() { if ($t.timeout) { var t = $t.timeout.start(); return at(t), t } }

    function Yt(t) { return Object.prototype.hasOwnProperty.call(Jt, t) }

    function Zt(t) { return Gt[t] }

    function Qt(t) { for (var e in t) Yt(i = e) || N('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== te.indexOf(o) && N('The parameter "'.concat(o, '" is incompatible with toasts'))), Zt(n = e) && g(n, Zt(n)); var n, o, i }
    var $t = {},
        Jt = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconHtml: void 0, toast: !1, animation: !0, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: void 0, target: "body", backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showCancelButton: !1, preConfirm: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, onBeforeOpen: void 0, onOpen: void 0, onRender: void 0, onClose: void 0, onAfterClose: void 0, onDestroy: void 0, scrollbarPadding: !0 },
        Xt = ["title", "titleText", "text", "html", "footer", "icon", "hideClass", "customClass", "allowOutsideClick", "allowEscapeKey", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep", "onClose", "onAfterClose", "onDestroy"],
        Gt = { animation: 'showClass" and "hideClass' },
        te = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        ee = Object.freeze({
            isValidParameter: Yt,
            isUpdatableParameter: function(t) { return -1 !== Xt.indexOf(t) },
            isDeprecatedParameter: Zt,
            argsToParams: function(o) { var i = {}; return "object" !== r(o[0]) || b(o[0]) ? ["title", "html", "icon"].forEach(function(t, e) { var n = o[e]; "string" == typeof n || b(n) ? i[t] = n : void 0 !== n && U("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n))) }) : s(i, o[0]), i },
            isVisible: function() { return ht(Z()) },
            clickConfirm: Vt,
            clickCancel: function() { return B() && B().click() },
            getContainer: Y,
            getPopup: Z,
            getTitle: C,
            getContent: k,
            getHtmlContainer: function() { return e(W["html-container"]) },
            getImage: x,
            getIcon: w,
            getIcons: n,
            getCloseButton: j,
            getActions: S,
            getConfirmButton: E,
            getCancelButton: B,
            getHeader: O,
            getFooter: T,
            getTimerProgressBar: L,
            getFocusableElements: q,
            getValidationMessage: A,
            isLoading: M,
            fire: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return i(this, e) },
            mixin: function(r) {
                return function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && l(t, e)
                    }(i, t);
                    var n, o, e = (n = i, o = d(), function() { var t, e = u(n); return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments)) });

                    function i() { return a(this, i), e.apply(this, arguments) }
                    return c(i, [{ key: "_main", value: function(t) { return f(u(i.prototype), "_main", this).call(this, s({}, r, t)) } }]), i
                }(this)
            },
            queue: function(t) {
                var r = this;
                Ut = t;

                function a(t, e) { Ut = [], t(e) }
                var c = [];
                return new Promise(function(i) {! function e(n, o) { n < Ut.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Ut[n]).then(function(t) { void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, { dismiss: t.dismiss }) })) : a(i, { value: c }) }(0) })
            },
            getQueueStep: jt,
            insertQueueStep: function(t, e) { return e && e < Ut.length ? Ut.splice(e, 0, t) : Ut.push(t) },
            deleteQueueStep: function(t) { void 0 !== Ut[t] && Ut.splice(t, 1) },
            showLoading: Ft,
            enableLoading: Ft,
            getTimerLeft: function() { return $t.timeout && $t.timeout.getTimerLeft() },
            stopTimer: Wt,
            resumeTimer: Kt,
            toggleTimer: function() { var t = $t.timeout; return t && (t.running ? Wt : Kt)() },
            increaseTimer: function(t) { if ($t.timeout) { var e = $t.timeout.increase(t); return at(e, !0), e } },
            isTimerRunning: function() { return $t.timeout && $t.timeout.isRunning() }
        });

    function ne() {
        var t, e = Pt.innerParams.get(this);
        e && (t = Pt.domCache.get(this), e.showConfirmButton || (nt(t.confirmButton), e.showCancelButton || nt(t.actions)), ft([t.popup, t.actions], W.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1)
    }

    function oe() {
        null === $.previousBodyPadding && document.body.scrollHeight > window.innerHeight && ($.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat($.previousBodyPadding + function() {
            var t = document.createElement("div");
            t.className = W["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function ie() { return !!window.MSInputMethodContext && !!document.documentMode }

    function re() {
        var t = Y(),
            e = Z();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var ae = function() {
            var e, t = Y();
            t.ontouchstart = function(t) { e = ce(t.target) }, t.ontouchmove = function(t) { e && (t.preventDefault(), t.stopPropagation()) }
        },
        ce = function(t) { var e = Y(); return t === e || !(it(e) || "INPUT" === t.tagName || it(k()) && k().contains(t)) },
        se = { swalPromiseResolve: new WeakMap };

    function ue(t, e, n, o) {
        var i;
        n ? pe(t, o) : (zt().then(function() { return pe(t, o) }), $t.keydownTarget.removeEventListener("keydown", $t.keydownHandler, { capture: $t.keydownListenerCapture }), $t.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), I() && (null !== $.previousBodyPadding && (document.body.style.paddingRight = "".concat($.previousBodyPadding, "px"), $.previousBodyPadding = null), R(document.body, W.iosfix) && (i = parseInt(document.body.style.top, 10), ft(document.body, W.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * i), "undefined" != typeof window && ie() && window.removeEventListener("resize", re), h(document.body.children).forEach(function(t) { t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden") })), ft([document.documentElement, document.body], [W.shown, W["height-auto"], W["no-backdrop"], W["toast-shown"], W["toast-column"]])
    }

    function le(t) {
        var e, n, o, i = Z();
        i && (e = Pt.innerParams.get(this)) && !R(i, e.hideClass.popup) && (n = se.swalPromiseResolve.get(this), ft(i, e.showClass.popup), pt(i, e.hideClass.popup), o = Y(), ft(o, e.showClass.backdrop), pt(o, e.hideClass.backdrop), function(t, e, n) {
            var o = Y(),
                i = wt && rt(e),
                r = n.onClose,
                a = n.onAfterClose;
            if (r !== null && typeof r === "function") { r(e) }
            if (i) { de(t, e, o, a) } else { ue(t, o, Q(), a) }
        }(this, i, e), void 0 !== t ? (t.isDismissed = void 0 !== t.dismiss, t.isConfirmed = void 0 === t.dismiss) : t = { isDismissed: !0, isConfirmed: !1 }, n(t || {}))
    }
    var de = function(t, e, n, o) { $t.swalCloseEventFinishedCallback = ue.bind(null, t, n, Q(), o), e.addEventListener(wt, function(t) { t.target === e && ($t.swalCloseEventFinishedCallback(), delete $t.swalCloseEventFinishedCallback) }) },
        pe = function(t, e) { setTimeout(function() { "function" == typeof e && e(), t._destroy() }) };

    function fe(t, e, n) {
        var o = Pt.domCache.get(t);
        e.forEach(function(t) { o[t].disabled = n })
    }

    function me(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var he = function() {
            function n(t, e) { a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start() }
            return c(n, [{ key: "start", value: function() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining } }, { key: "stop", value: function() { return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining } }, { key: "increase", value: function(t) { var e = this.running; return e && this.stop(), this.remaining += t, e && this.start(), this.remaining } }, { key: "getTimerLeft", value: function() { return this.running && (this.stop(), this.start()), this.remaining } }, { key: "isRunning", value: function() { return this.running } }]), n
        }(),
        ge = { email: function(t, e) { return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address") }, url: function(t, e) { return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL") } };

    function ve(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(ge).forEach(function(t) { e.input === t && (e.inputValidator = ge[t]) }), t.showLoaderOnConfirm && !t.preConfirm && N("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = F(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (N('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), vt(t)
    }

    function be(t) {
        var e = Y(),
            n = Z();
        "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), Oe(e, n, t), Be(e, n), I() && Se(e, t.scrollbarPadding), Q() || $t.previousActiveElement || ($t.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function() { return t.onOpen(n) }), ft(e, W["no-transition"])
    }

    function ye(t) {
        var e, n = Z();
        t.target === n && (e = Y(), n.removeEventListener(wt, ye), e.style.overflowY = "auto")
    }

    function we(t, e) { "select" === e.input || "radio" === e.input ? qe(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && v(e.inputValue) && Ie(t, e) }

    function Ce(t, e) { t.disableButtons(), e.input ? Re(t, e) : He(t, e, !0) }

    function ke(t, e) { t.disableButtons(), e(z.cancel) }

    function xe(t, e) { t.closePopup({ value: e }) }

    function Pe(e, t, n, o) { t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function(t) { return Ue(e, t, o) }, t.keydownTarget = n.keydownListenerCapture ? window : Z(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !0) }

    function Ae(t, e, n) {
        var o = q(),
            i = 0;
        if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        Z().focus()
    }

    function Ee(t, e, n) { Pt.innerParams.get(t).toast ? Ke(t, e, n) : (Ze(e), Qe(e), $e(t, e, n)) }
    var Be = function(t, e) { wt && rt(e) ? (t.style.overflowY = "hidden", e.addEventListener(wt, ye)) : t.style.overflowY = "auto" },
        Se = function(t, e) {
            var n;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !R(document.body, W.iosfix) && (n = document.body.scrollTop, document.body.style.top = "".concat(-1 * n, "px"), pt(document.body, W.iosfix), ae()), "undefined" != typeof window && ie() && (re(), window.addEventListener("resize", re)), h(document.body.children).forEach(function(t) { t === Y() || function(t, e) { if ("function" == typeof t.contains) return t.contains(e) }(t, Y()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true")) }), e && oe(), setTimeout(function() { t.scrollTop = 0 })
        },
        Oe = function(t, e, n) { pt(t, n.showClass.backdrop), et(e), pt(e, n.showClass.popup), pt([document.documentElement, document.body], W.shown), n.heightAuto && n.backdrop && !n.toast && pt([document.documentElement, document.body], W["height-auto"]) },
        Te = function(t) { return t.checked ? 1 : 0 },
        Le = function(t) { return t.checked ? t.value : null },
        je = function(t) { return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null },
        qe = function(e, n) {
            function o(t) { return Me[n.input](i, Ve(t), n) }
            var i = k();
            v(n.inputOptions) ? (Ft(), n.inputOptions.then(function(t) { e.hideLoading(), o(t) })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : U("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        Ie = function(e, n) {
            var o = e.getInput();
            nt(o), n.inputValue.then(function(t) { o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), et(o), o.focus(), e.hideLoading() }).catch(function(t) { U("Error in inputValue promise: ".concat(t)), o.value = "", et(o), o.focus(), e.hideLoading() })
        },
        Me = {
            select: function(t, e, i) {
                function r(t, e, n) {
                    var o = document.createElement("option");
                    o.value = n, V(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o)
                }
                var a = mt(t, W.select);
                e.forEach(function(t) {
                    var e, n = t[0],
                        o = t[1];
                    Array.isArray(o) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, a.appendChild(e), o.forEach(function(t) { return r(e, t[1], t[0]) })) : r(a, o, n)
                }), a.focus()
            },
            radio: function(t, e, a) {
                var c = mt(t, W.radio);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        i = document.createElement("label");
                    o.type = "radio", o.name = W.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                    var r = document.createElement("span");
                    V(r, n), r.className = W.label, i.appendChild(o), i.appendChild(r), c.appendChild(i)
                });
                var n = c.querySelectorAll("input");
                n.length && n[0].focus()
            }
        },
        Ve = function o(n) { var i = []; return "undefined" != typeof Map && n instanceof Map ? n.forEach(function(t, e) { var n = t; "object" === r(n) && (n = o(n)), i.push([e, n]) }) : Object.keys(n).forEach(function(t) { var e = n[t]; "object" === r(e) && (e = o(e)), i.push([t, e]) }), i },
        Re = function(e, n) {
            var o = function(t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case "checkbox":
                        return Te(n);
                    case "radio":
                        return Le(n);
                    case "file":
                        return je(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(e, n);
            n.inputValidator ? (e.disableInput(), Promise.resolve().then(function() { return n.inputValidator(o, n.validationMessage) }).then(function(t) { e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : He(e, n, o) })) : e.getInput().checkValidity() ? He(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        },
        He = function(e, t, n) { t.showLoaderOnConfirm && Ft(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function() { return t.preConfirm(n, t.validationMessage) }).then(function(t) { ht(A()) || !1 === t ? e.hideLoading() : xe(e, void 0 === t ? n : t) })) : xe(e, n) },
        De = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
        Ne = ["Escape", "Esc"],
        Ue = function(t, e, n) {
            var o = Pt.innerParams.get(t);
            o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? _e(t, e, o) : "Tab" === e.key ? Fe(e, o) : -1 !== De.indexOf(e.key) ? ze() : -1 !== Ne.indexOf(e.key) && We(e, o, n)
        },
        _e = function(t, e, n) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Vt(), e.preventDefault()
            }
        },
        Fe = function(t) {
            for (var e = t.target, n = q(), o = -1, i = 0; i < n.length; i++)
                if (e === n[i]) { o = i; break }
            t.shiftKey ? Ae(0, o, -1) : Ae(0, o, 1), t.stopPropagation(), t.preventDefault()
        },
        ze = function() {
            var t = E(),
                e = B();
            document.activeElement === t && ht(e) ? e.focus() : document.activeElement === e && ht(t) && t.focus()
        },
        We = function(t, e, n) { F(e.allowEscapeKey) && (t.preventDefault(), n(z.esc)) },
        Ke = function(e, t, n) {
            t.popup.onclick = function() {
                var t = Pt.innerParams.get(e);
                t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(z.close)
            }
        },
        Ye = !1,
        Ze = function(e) { e.popup.onmousedown = function() { e.container.onmouseup = function(t) { e.container.onmouseup = void 0, t.target === e.container && (Ye = !0) } } },
        Qe = function(e) { e.container.onmousedown = function() { e.popup.onmouseup = function(t) { e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (Ye = !0) } } },
        $e = function(n, o, i) {
            o.container.onclick = function(t) {
                var e = Pt.innerParams.get(n);
                Ye ? Ye = !1 : t.target === o.container && F(e.allowOutsideClick) && i(z.backdrop)
            }
        };
    var Je = function(t, e, n) {
            var o = L();
            nt(o), e.timer && (t.timeout = new he(function() { n("timer"), delete t.timeout }, e.timer), e.timerProgressBar && (et(o), setTimeout(function() { t.timeout.running && at(e.timer) })))
        },
        Xe = function(t, e) { if (!e.toast) return F(e.allowEnterKey) ? e.focusCancel && ht(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && ht(t.confirmButton) ? t.confirmButton.focus() : void Ae(0, -1, 1) : Ge() },
        Ge = function() { document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur() };
    var tn, en = function(t) { for (var e in t) t[e] = new WeakMap },
        nn = Object.freeze({
            hideLoading: ne,
            disableLoading: ne,
            getInput: function(t) {
                var e = Pt.innerParams.get(t || this),
                    n = Pt.domCache.get(t || this);
                return n ? J(n.content, e.input) : null
            },
            close: le,
            closePopup: le,
            closeModal: le,
            closeToast: le,
            enableButtons: function() { fe(this, ["confirmButton", "cancelButton"], !1) },
            disableButtons: function() { fe(this, ["confirmButton", "cancelButton"], !0) },
            enableInput: function() { return me(this.getInput(), !1) },
            disableInput: function() { return me(this.getInput(), !0) },
            showValidationMessage: function(t) {
                var e = Pt.domCache.get(this);
                V(e.validationMessage, t);
                var n = window.getComputedStyle(e.popup);
                e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), et(e.validationMessage);
                var o = this.getInput();
                o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", W["validation-message"]), X(o), pt(o, W.inputerror))
            },
            resetValidationMessage: function() {
                var t = Pt.domCache.get(this);
                t.validationMessage && nt(t.validationMessage);
                var e = this.getInput();
                e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ft(e, W.inputerror))
            },
            getProgressSteps: function() { return Pt.domCache.get(this).progressSteps },
            _main: function(t) {
                Qt(t), $t.currentInstance && $t.currentInstance._destroy(), $t.currentInstance = this;
                var e = function(t) {
                    var e = s({}, Jt.showClass, t.showClass),
                        n = s({}, Jt.hideClass, t.hideClass),
                        o = s({}, Jt, t);
                    if (o.showClass = e, o.hideClass = n, t.animation === false) {
                        o.showClass = { popup: "swal2-noanimation", backdrop: "swal2-noanimation" };
                        o.hideClass = {}
                    }
                    return o
                }(t);
                ve(e), Object.freeze(e), $t.timeout && ($t.timeout.stop(), delete $t.timeout), clearTimeout($t.restoreFocusTimeout);
                var n = function(t) { var e = { popup: Z(), container: Y(), content: k(), actions: S(), confirmButton: E(), cancelButton: B(), closeButton: j(), validationMessage: A(), progressSteps: P() }; return Pt.domCache.set(t, e), e }(this);
                return Mt(this, e), Pt.innerParams.set(this, e),
                    function(n, o, i) {
                        return new Promise(function(t) {
                            var e = function t(e) { n.closePopup({ dismiss: e }) };
                            se.swalPromiseResolve.set(n, t);
                            o.confirmButton.onclick = function() { return Ce(n, i) };
                            o.cancelButton.onclick = function() { return ke(n, e) };
                            o.closeButton.onclick = function() { return e(z.close) };
                            Ee(n, o, e);
                            Pe(n, $t, i, e);
                            if (i.toast && (i.input || i.footer || i.showCloseButton)) { pt(document.body, W["toast-column"]) } else { ft(document.body, W["toast-column"]) }
                            we(n, i);
                            be(i);
                            Je($t, i, e);
                            Xe(o, i);
                            setTimeout(function() { o.container.scrollTop = 0 })
                        })
                    }(this, n, e)
            },
            update: function(e) {
                var t = Z(),
                    n = Pt.innerParams.get(this);
                if (!t || R(t, n.hideClass.popup)) return N("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                var o = {};
                Object.keys(e).forEach(function(t) { rn.isUpdatableParameter(t) ? o[t] = e[t] : N('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js')) });
                var i = s({}, n, o);
                Mt(this, i), Pt.innerParams.set(this, i), Object.defineProperties(this, { params: { value: s({}, this.params, e), writable: !1, enumerable: !0 } })
            },
            _destroy: function() {
                var t = Pt.domCache.get(this),
                    e = Pt.innerParams.get(this);
                e && (t.popup && $t.swalCloseEventFinishedCallback && ($t.swalCloseEventFinishedCallback(), delete $t.swalCloseEventFinishedCallback), $t.deferDisposalTimer && (clearTimeout($t.deferDisposalTimer), delete $t.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete $t.keydownHandler, delete $t.keydownTarget, en(Pt), en(se))
            }
        }),
        on = function() {
            function r() {
                if (a(this, r), "undefined" != typeof window) {
                    "undefined" == typeof Promise && U("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), tn = this;
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(e));
                    Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0, configurable: !0 } });
                    var i = this._main(this.params);
                    Pt.promise.set(this, i)
                }
            }
            return c(r, [{ key: "then", value: function(t) { return Pt.promise.get(this).then(t) } }, { key: "finally", value: function(t) { return Pt.promise.get(this).finally(t) } }]), r
        }();
    s(on.prototype, nn), s(on, ee), Object.keys(nn).forEach(function(t) { on[t] = function() { if (tn) return tn[t].apply(tn, arguments) } }), on.DismissReason = z, on.version = "9.14.0";
    var rn = on;
    return rn.default = rn
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try { n.innerHTML = t } catch (e) { n.innerText = t }
}(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : (t = t || self).parsley = e(t.jQuery) }(this, function(h) {
    "use strict";

    function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function l() { return (l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]) } return t }).apply(this, arguments) }

    function o(t, e) {
        return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var i = [],
                r = !0,
                n = !1,
                s = void 0;
            try { for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); r = !0); } catch (t) { n = !0, s = t } finally { try { r || null == o.return || o.return() } finally { if (n) throw s } }
            return i
        }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
    }

    function u(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }
    var t = 1,
        e = {},
        d = {
            attr: function(t, e, i) {
                var r, n, s, a = new RegExp("^" + e, "i");
                if (void 0 === i) i = {};
                else
                    for (r in i) i.hasOwnProperty(r) && delete i[r];
                if (!t) return i;
                for (r = (s = t.attributes).length; r--;)(n = s[r]) && n.specified && a.test(n.name) && (i[this.camelize(n.name.slice(e.length))] = this.deserializeValue(n.value));
                return i
            },
            checkAttr: function(t, e, i) { return t.hasAttribute(e + i) },
            setAttr: function(t, e, i, r) { t.setAttribute(this.dasherize(e + i), String(r)) },
            getType: function(t) { return t.getAttribute("type") || "text" },
            generateID: function() { return "" + t++ },
            deserializeValue: function(e) { var t; try { return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e } catch (t) { return e } },
            camelize: function(t) { return t.replace(/-+(.)?/g, function(t, e) { return e ? e.toUpperCase() : "" }) },
            dasherize: function(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() },
            warn: function() {
                var t;
                window.console && "function" == typeof window.console.warn && (t = window.console).warn.apply(t, arguments)
            },
            warnOnce: function(t) { e[t] || (e[t] = !0, this.warn.apply(this, arguments)) },
            _resetWarnings: function() { e = {} },
            trimString: function(t) { return t.replace(/^\s+|\s+$/g, "") },
            parse: {
                date: function(t) {
                    var e = t.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                    if (!e) return null;
                    var i = o(e.map(function(t) { return parseInt(t, 10) }), 4),
                        r = (i[0], i[1]),
                        n = i[2],
                        s = i[3],
                        a = new Date(r, n - 1, s);
                    return a.getFullYear() !== r || a.getMonth() + 1 !== n || a.getDate() !== s ? null : a
                },
                string: function(t) { return t },
                integer: function(t) { return isNaN(t) ? null : parseInt(t, 10) },
                number: function(t) { if (isNaN(t)) throw null; return parseFloat(t) },
                boolean: function(t) { return !/^\s*false\s*$/i.test(t) },
                object: function(t) { return d.deserializeValue(t) },
                regexp: function(t) { var e = ""; return t = /^\/.*\/(?:[gimy]*)$/.test(t) ? (e = t.replace(/.*\/([gimy]*)$/, "$1"), t.replace(new RegExp("^/(.*?)/" + e + "$"), "$1")) : "^" + t + "$", new RegExp(t, e) }
            },
            parseRequirement: function(t, e) { var i = this.parse[t || "string"]; if (!i) throw 'Unknown requirement specification: "' + t + '"'; var r = i(e); if (null === r) throw "Requirement is not a ".concat(t, ': "').concat(e, '"'); return r },
            namespaceEvents: function(t, e) { return (t = this.trimString(t || "").split(/\s+/))[0] ? h.map(t, function(t) { return "".concat(t, ".").concat(e) }).join(" ") : "" },
            difference: function(t, i) { var r = []; return h.each(t, function(t, e) {-1 == i.indexOf(e) && r.push(e) }), r },
            all: function(t) { return h.when.apply(h, u(t).concat([42, 42])) },
            objectCreate: Object.create || function(t) {
                if (1 < arguments.length) throw Error("Second argument not supported");
                if ("object" != n(t)) throw TypeError("Argument must be an object");
                i.prototype = t;
                var e = new i;
                return i.prototype = null, e
            },
            _SubmitSelector: 'input[type="submit"], button:submit'
        };

    function i() {}

    function r() { this.__id__ = d.generateID() }
    var s = { namespace: "data-parsley-", inputs: "input, textarea, select", excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]", priorityEnabled: !0, multiple: null, group: null, uiEnabled: !0, validationThreshold: 3, focus: "first", trigger: !1, triggerAfterFailure: "input", errorClass: "parsley-error", successClass: "parsley-success", classHandler: function() {}, errorsContainer: function() {}, errorsWrapper: '<ul class="parsley-errors-list"></ul>', errorTemplate: "<li></li>" };
    r.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function() {
            function t() { var t = h.Deferred(); return !0 !== e.validationResult && t.reject(), t.resolve().promise() }
            var e = this;
            return [t, t]
        },
        actualizeOptions: function() { return d.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this },
        _resetOptions: function(t) {
            for (var e in this.domOptions = d.objectCreate(this.parent.options), this.options = d.objectCreate(this.domOptions), t) t.hasOwnProperty(e) && (this.options[e] = t[e]);
            this.actualizeOptions()
        },
        _listeners: null,
        on: function(t, e) { return this._listeners = this._listeners || {}, (this._listeners[t] = this._listeners[t] || []).push(e), this },
        subscribe: function(t, e) { h.listenTo(this, t.toLowerCase(), e) },
        off: function(t, e) {
            var i = this._listeners && this._listeners[t];
            if (i)
                if (e)
                    for (var r = i.length; r--;) i[r] === e && i.splice(r, 1);
                else delete this._listeners[t];
            return this
        },
        unsubscribe: function(t) { h.unsubscribeTo(this, t.toLowerCase()) },
        trigger: function(t, e, i) {
            e = e || this;
            var r, n = this._listeners && this._listeners[t];
            if (n)
                for (var s = n.length; s--;)
                    if (!1 === (r = n[s].call(e, e, i))) return r;
            return !this.parent || this.parent.trigger(t, e, i)
        },
        asyncIsValid: function(t, e) { return d.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({ group: t, force: e }) },
        _findRelated: function() { return this.options.multiple ? h(this.parent.element.querySelectorAll("[".concat(this.options.namespace, 'multiple="').concat(this.options.multiple, '"]'))) : this.$element }
    };

    function c(t) { h.extend(!0, this, t) }
    c.prototype = {
        validate: function(t, e) { if (this.fn) return 3 < arguments.length && (e = [].slice.call(arguments, 1, -1)), this.fn(t, e); if (Array.isArray(t)) { if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values"; return this.validateMultiple.apply(this, arguments) } var i = arguments[arguments.length - 1]; if (this.validateDate && i._isDateInput()) return arguments[0] = d.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments); if (this.validateNumber) return !t || !isNaN(t) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments)); if (this.validateString) return this.validateString.apply(this, arguments); throw "Validator `" + this.name + "` only handles multiple values" },
        parseRequirements: function(t, e) {
            if ("string" != typeof t) return Array.isArray(t) ? t : [t];
            var i = this.requirementType;
            if (Array.isArray(i)) { for (var r = function(t, e) { var i = t.match(/^\s*\[(.*)\]\s*$/); if (!i) throw 'Requirement is not an array: "' + t + '"'; var r = i[1].split(",").map(d.trimString); if (r.length !== e) throw "Requirement has " + r.length + " values when " + e + " are needed"; return r }(t, i.length), n = 0; n < r.length; n++) r[n] = d.parseRequirement(i[n], r[n]); return r }
            return h.isPlainObject(i) ? function(t, e, i) {
                var r = null,
                    n = {};
                for (var s in t)
                    if (s) { var a = i(s); "string" == typeof a && (a = d.parseRequirement(t[s], a)), n[s] = a } else r = d.parseRequirement(t[s], e);
                return [r, n]
            }(i, t, e) : [d.parseRequirement(i, t)]
        },
        requirementType: "string",
        priority: 2
    };

    function a(t, e) { this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(t || {}, e || {}) }
    var p = { email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))$/, number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i, integer: /^-?\d+$/, digits: /^\d+$/, alphanum: /^\w+$/i, date: { test: function(t) { return null !== d.parse.date(t) } }, url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$") };
    p.range = p.number;

    function f(t) { var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/); return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0 }

    function m(s, a) { return function(t) { for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r]; return i.pop(), a.apply(void 0, [t].concat(u((n = s, i.map(d.parse[n]))))); var n } }

    function g(t) { return { validateDate: m("date", t), validateNumber: m("number", t), requirementType: t.length <= 2 ? "string" : ["string", "string"], priority: 30 } }
    a.prototype = {
        init: function(t, e) {
            for (var i in this.catalog = e, this.validators = l({}, this.validators), t) this.addValidator(i, t[i].fn, t[i].priority);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(t) { if (void 0 === this.catalog[t]) throw new Error(t + " is not available in the catalog"); return this.locale = t, this },
        addCatalog: function(t, e, i) { return "object" === n(e) && (this.catalog[t] = e), !0 === i ? this.setLocale(t) : this },
        addMessage: function(t, e, i) { return void 0 === this.catalog[t] && (this.catalog[t] = {}), this.catalog[t][e] = i, this },
        addMessages: function(t, e) { for (var i in e) this.addMessage(t, i, e[i]); return this },
        addValidator: function(t, e, i) {
            if (this.validators[t]) d.warn('Validator "' + t + '" is already defined.');
            else if (s.hasOwnProperty(t)) return void d.warn('"' + t + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        },
        hasValidator: function(t) { return !!this.validators[t] },
        updateValidator: function(t, e, i) { return this.validators[t] ? this._setValidator.apply(this, arguments) : (d.warn('Validator "' + t + '" is not already defined.'), this.addValidator.apply(this, arguments)) },
        removeValidator: function(t) { return this.validators[t] || d.warn('Validator "' + t + '" is not defined.'), delete this.validators[t], this },
        _setValidator: function(t, e, i) { for (var r in "object" !== n(e) && (e = { fn: e, priority: i }), e.validate || (e = new c(e)), (this.validators[t] = e).messages || {}) this.addMessage(r, t, e.messages[r]); return this },
        getErrorMessage: function(t) { var e; "type" === t.name ? e = (this.catalog[this.locale][t.name] || {})[t.requirements] : e = this.formatMessage(this.catalog[this.locale][t.name], t.requirements); return e || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage },
        formatMessage: function(t, e) { if ("object" !== n(e)) return "string" == typeof t ? t.replace(/%s/i, e) : ""; for (var i in e) t = this.formatMessage(t, e[i]); return t },
        validators: {
            notblank: { validateString: function(t) { return /\S/.test(t) }, priority: 2 },
            required: { validateMultiple: function(t) { return 0 < t.length }, validateString: function(t) { return /\S/.test(t) }, priority: 512 },
            type: {
                validateString: function(t, e, i) {
                    var r = 2 < arguments.length && void 0 !== i ? i : {},
                        n = r.step,
                        s = void 0 === n ? "any" : n,
                        a = r.base,
                        o = void 0 === a ? 0 : a,
                        l = p[e];
                    if (!l) throw new Error("validator type `" + e + "` is not supported");
                    if (!t) return !0;
                    if (!l.test(t)) return !1;
                    if ("number" === e && !/^any$/i.test(s || "")) {
                        var u = Number(t),
                            d = Math.max(f(s), f(o));
                        if (f(u) > d) return !1;
                        var h = function(t) { return Math.round(t * Math.pow(10, d)) };
                        if ((h(u) - h(o)) % h(s) != 0) return !1
                    }
                    return !0
                },
                requirementType: { "": "string", step: "string", base: "number" },
                priority: 256
            },
            pattern: { validateString: function(t, e) { return !t || e.test(t) }, requirementType: "regexp", priority: 64 },
            minlength: { validateString: function(t, e) { return !t || t.length >= e }, requirementType: "integer", priority: 30 },
            maxlength: { validateString: function(t, e) { return t.length <= e }, requirementType: "integer", priority: 30 },
            length: { validateString: function(t, e, i) { return !t || t.length >= e && t.length <= i }, requirementType: ["integer", "integer"], priority: 30 },
            mincheck: { validateMultiple: function(t, e) { return t.length >= e }, requirementType: "integer", priority: 30 },
            maxcheck: { validateMultiple: function(t, e) { return t.length <= e }, requirementType: "integer", priority: 30 },
            check: { validateMultiple: function(t, e, i) { return t.length >= e && t.length <= i }, requirementType: ["integer", "integer"], priority: 30 },
            min: g(function(t, e) { return e <= t }),
            max: g(function(t, e) { return t <= e }),
            range: g(function(t, e, i) { return e <= t && t <= i }),
            equalto: { validateString: function(t, e) { if (!t) return !0; var i = h(e); return i.length ? t === i.val() : t === e }, priority: 256 },
            euvatin: { validateString: function(t) { if (!t) return !0; return /^[A-Z][A-Z][A-Za-z0-9-]{2,}$/.test(t) }, priority: 30 }
        }
    };
    var v = {};
    v.Form = {
        _actualizeTriggers: function() {
            var e = this;
            this.$element.on("submit.Parsley", function(t) { e.onSubmitValidate(t) }), this.$element.on("click.Parsley", d._SubmitSelector, function(t) { e.onSubmitButton(t) }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
        },
        focus: function() { if (!(this._focusedField = null) === this.validationResult || "none" === this.options.focus) return null; for (var t = 0; t < this.fields.length; t++) { var e = this.fields[t]; if (!0 !== e.validationResult && 0 < e.validationResult.length && void 0 === e.options.noFocus && (this._focusedField = e.$element, "first" === this.options.focus)) break } return null === this._focusedField ? null : this._focusedField.focus() },
        _destroyUI: function() { this.$element.off(".Parsley") }
    }, v.Field = {
        _reflowUI: function() {
            if (this._buildUI(), this._ui) {
                var t = function t(e, i, r) {
                    for (var n = [], s = [], a = 0; a < e.length; a++) {
                        for (var o = !1, l = 0; l < i.length; l++)
                            if (e[a].assert.name === i[l].assert.name) { o = !0; break }
                        o ? s.push(e[a]) : n.push(e[a])
                    }
                    return { kept: s, added: n, removed: r ? [] : t(i, e, !0).added }
                }(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(t), this._actualizeTriggers(), !t.kept.length && !t.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
            }
        },
        getErrorsMessages: function() { if (!0 === this.validationResult) return []; for (var t = [], e = 0; e < this.validationResult.length; e++) t.push(this.validationResult[e].errorMessage || this._getErrorMessage(this.validationResult[e].assert)); return t },
        addError: function(t, e) {
            var i = 1 < arguments.length && void 0 !== e ? e : {},
                r = i.message,
                n = i.assert,
                s = i.updateClass,
                a = void 0 === s || s;
            this._buildUI(), this._addError(t, { message: r, assert: n }), a && this._errorClass()
        },
        updateError: function(t, e) {
            var i = 1 < arguments.length && void 0 !== e ? e : {},
                r = i.message,
                n = i.assert,
                s = i.updateClass,
                a = void 0 === s || s;
            this._buildUI(), this._updateError(t, { message: r, assert: n }), a && this._errorClass()
        },
        removeError: function(t, e) {
            var i = (1 < arguments.length && void 0 !== e ? e : {}).updateClass,
                r = void 0 === i || i;
            this._buildUI(), this._removeError(t), r && this._manageStatusClass()
        },
        _manageStatusClass: function() { this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : 0 < this.validationResult.length ? this._errorClass() : this._resetClass() },
        _manageErrorsMessages: function(t) { if (void 0 === this.options.errorsMessagesDisabled) { if (void 0 !== this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(h(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId), this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").find(".parsley-custom-error-message").html(this.options.errorMessage)) : (this._ui.$errorClassHandler.removeAttr("aria-describedby"), this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-custom-error-message").remove()); for (var e = 0; e < t.removed.length; e++) this._removeError(t.removed[e].assert.name); for (e = 0; e < t.added.length; e++) this._addError(t.added[e].assert.name, { message: t.added[e].errorMessage, assert: t.added[e].assert }); for (e = 0; e < t.kept.length; e++) this._updateError(t.kept[e].assert.name, { message: t.kept[e].errorMessage, assert: t.kept[e].assert }) } },
        _addError: function(t, e) {
            var i = e.message,
                r = e.assert;
            this._insertErrorWrapper(), this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId), this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").append(h(this.options.errorTemplate).addClass("parsley-" + t).html(i || this._getErrorMessage(r)))
        },
        _updateError: function(t, e) {
            var i = e.message,
                r = e.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + t).html(i || this._getErrorMessage(r))
        },
        _removeError: function(t) { this._ui.$errorClassHandler.removeAttr("aria-describedby"), this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-" + t).remove() },
        _getErrorMessage: function(t) { var e = t.name + "Message"; return void 0 !== this.options[e] ? window.Parsley.formatMessage(this.options[e], t.requirements) : window.Parsley.getErrorMessage(t) },
        _buildUI: function() {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var t = {};
                this.element.setAttribute(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = h(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
            }
        },
        _manageClassHandler: function() {
            if ("string" == typeof this.options.classHandler && h(this.options.classHandler).length) return h(this.options.classHandler);
            var t = this.options.classHandler;
            if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t) { var e = t.call(this, this); if (void 0 !== e && e.length) return e } else {
                if ("object" === n(t) && t instanceof jQuery && t.length) return t;
                t && d.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function")
            }
            return this._inputHolder()
        },
        _inputHolder: function() { return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element },
        _insertErrorWrapper: function() { var t = this.options.errorsContainer; if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent(); if ("string" == typeof t) { if (h(t).length) return h(t).append(this._ui.$errorsWrapper); "function" == typeof window[t] ? t = window[t] : d.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function") } return "function" == typeof t && (t = t.call(this, this)), "object" === n(t) && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper) },
        _actualizeTriggers: function() {
            var t, e = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(d.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() { e._validateIfNeeded() }) : (t = d.namespaceEvents(this.options.trigger, "Parsley")) && i.on(t, function(t) { e._validateIfNeeded(t) })
        },
        _validateIfNeeded: function(t) {
            var e = this;
            t && /key|input/.test(t.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() { return e.validate() }, this.options.debounce)) : this.validate())
        },
        _resetUI: function() { this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1) },
        _destroyUI: function() { this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui },
        _successClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass) },
        _errorClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass) },
        _resetClass: function() { this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass) }
    };

    function y(t, e, i) { this.__class__ = "Form", this.element = t, this.$element = h(t), this.domOptions = e, this.options = i, this.parent = window.Parsley, this.fields = [], this.validationResult = null }
    var _ = { pending: null, resolved: !0, rejected: !1 };
    y.prototype = {
        onSubmitValidate: function(t) { var e = this; if (!0 !== t.parsley) { var i = this._submitSource || this.$element.find(d._SubmitSelector)[0]; if (this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i || null === i.getAttribute("formnovalidate")) { window.Parsley._remoteCache = {}; var r = this.whenValidate({ event: t }); "resolved" === r.state() && !1 !== this._trigger("submit") || (t.stopImmediatePropagation(), t.preventDefault(), "pending" === r.state() && r.done(function() { e._submit(i) })) } } },
        onSubmitButton: function(t) { this._submitSource = t.currentTarget },
        _submit: function(t) {
            if (!1 !== this._trigger("submit")) {
                if (t) {
                    var e = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === e.length && (e = h('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), e.attr({ name: t.getAttribute("name"), value: t.getAttribute("value") })
                }
                this.$element.trigger(l(h.Event("submit"), { parsley: !0 }))
            }
        },
        validate: function(t) {
            if (1 <= arguments.length && !h.isPlainObject(t)) {
                d.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var e = Array.prototype.slice.call(arguments);
                t = { group: e[0], force: e[1], event: e[2] }
            }
            return _[this.whenValidate(t).state()]
        },
        whenValidate: function(t) {
            var e, i = this,
                r = 0 < arguments.length && void 0 !== t ? t : {},
                n = r.group,
                s = r.force,
                a = r.event;
            (this.submitEvent = a) && (this.submitEvent = l({}, a, { preventDefault: function() { d.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1 } })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            var o = this._withoutReactualizingFormOptions(function() { return h.map(i.fields, function(t) { return t.whenValidate({ force: s, group: n }) }) });
            return (e = d.all(o).done(function() { i._trigger("success") }).fail(function() { i.validationResult = !1, i.focus(), i._trigger("error") }).always(function() { i._trigger("validated") })).pipe.apply(e, u(this._pipeAccordingToValidationResult()))
        },
        isValid: function(t) {
            if (1 <= arguments.length && !h.isPlainObject(t)) {
                d.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var e = Array.prototype.slice.call(arguments);
                t = { group: e[0], force: e[1] }
            }
            return _[this.whenValid(t).state()]
        },
        whenValid: function(t) {
            var e = this,
                i = 0 < arguments.length && void 0 !== t ? t : {},
                r = i.group,
                n = i.force;
            this._refreshFields();
            var s = this._withoutReactualizingFormOptions(function() { return h.map(e.fields, function(t) { return t.whenValid({ group: r, force: n }) }) });
            return d.all(s)
        },
        refresh: function() { return this._refreshFields(), this },
        reset: function() {
            for (var t = 0; t < this.fields.length; t++) this.fields[t].reset();
            this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI();
            for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy")
        },
        _refreshFields: function() { return this.actualizeOptions()._bindFields() },
        _bindFields: function() {
            var n = this,
                t = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                n.$element.find(n.options.inputs).not(n.options.excluded).not("[".concat(n.options.namespace, "excluded=true]")).each(function(t, e) {
                    var i = new window.Parsley.Factory(e, {}, n);
                    if ("Field" === i.__class__ || "FieldMultiple" === i.__class__) {
                        var r = i.__class__ + "-" + i.__id__;
                        void 0 === n.fieldsMappedById[r] && (n.fieldsMappedById[r] = i, n.fields.push(i))
                    }
                }), h.each(d.difference(t, n.fields), function(t, e) { e.reset() })
            }), this
        },
        _withoutReactualizingFormOptions: function(t) {
            var e = this.actualizeOptions;
            this.actualizeOptions = function() { return this };
            var i = t();
            return this.actualizeOptions = e, i
        },
        _trigger: function(t) { return this.trigger("form:" + t) }
    };

    function b(t, e, i, r, n) {
        var s = window.Parsley._validatorRegistry.validators[e],
            a = new c(s);
        l(this, { validator: a, name: e, requirements: i, priority: r = r || t.options[e + "Priority"] || a.priority, isDomConstraint: n = !0 === n }), this._parseRequirements(t.options)
    }

    function w(t, e, i, r) { this.__class__ = "Field", this.element = t, this.$element = h(t), void 0 !== r && (this.parent = r), this.options = i, this.domOptions = e, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints() }
    var F = {
        pending: null,
        resolved: !0,
        rejected: !(b.prototype = {
            validate: function(t, e) { var i; return (i = this.validator).validate.apply(i, [t].concat(u(this.requirementList), [e])) },
            _parseRequirements: function(i) {
                var r = this;
                this.requirementList = this.validator.parseRequirements(this.requirements, function(t) { return i[r.name + ((e = t)[0].toUpperCase() + e.slice(1))]; var e })
            }
        })
    };
    w.prototype = {
        validate: function(t) {
            1 <= arguments.length && !h.isPlainObject(t) && (d.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = { options: t });
            var e = this.whenValidate(t);
            if (!e) return !0;
            switch (e.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult
            }
        },
        whenValidate: function(t) {
            var e, i = this,
                r = 0 < arguments.length && void 0 !== t ? t : {},
                n = r.force,
                s = r.group;
            if (this.refresh(), !s || this._isInGroup(s)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({ force: n, value: this.value, _refreshed: !0 }).always(function() { i._reflowUI() }).done(function() { i._trigger("success") }).fail(function() { i._trigger("error") }).always(function() { i._trigger("validated") })).pipe.apply(e, u(this._pipeAccordingToValidationResult()))
        },
        hasConstraints: function() { return 0 !== this.constraints.length },
        needsValidation: function(t) { return void 0 === t && (t = this.getValue()), !(!t.length && !this._isRequired() && void 0 === this.options.validateIfEmpty) },
        _isInGroup: function(t) { return Array.isArray(this.options.group) ? -1 !== h.inArray(t, this.options.group) : this.options.group === t },
        isValid: function(t) {
            if (1 <= arguments.length && !h.isPlainObject(t)) {
                d.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var e = Array.prototype.slice.call(arguments);
                t = { force: e[0], value: e[1] }
            }
            var i = this.whenValid(t);
            return !i || F[i.state()]
        },
        whenValid: function(t) {
            var r = this,
                e = 0 < arguments.length && void 0 !== t ? t : {},
                i = e.force,
                n = void 0 !== i && i,
                s = e.value,
                a = e.group;
            if (e._refreshed || this.refresh(), !a || this._isInGroup(a)) {
                if (this.validationResult = !0, !this.hasConstraints()) return h.when();
                if (null == s && (s = this.getValue()), !this.needsValidation(s) && !0 !== n) return h.when();
                var o = this._getGroupedConstraints(),
                    l = [];
                return h.each(o, function(t, e) { var i = d.all(h.map(e, function(t) { return r._validateConstraint(s, t) })); if (l.push(i), "rejected" === i.state()) return !1 }), d.all(l)
            }
        },
        _validateConstraint: function(t, e) {
            var i = this,
                r = e.validate(t, this);
            return !1 === r && (r = h.Deferred().reject()), d.all([r]).fail(function(t) { i.validationResult instanceof Array || (i.validationResult = []), i.validationResult.push({ assert: e, errorMessage: "string" == typeof t && t }) })
        },
        getValue: function() { var t; return null == (t = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val()) ? "" : this._handleWhitespace(t) },
        reset: function() { return this._resetUI(), this._trigger("reset") },
        destroy: function() { this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy") },
        refresh: function() { return this._refreshConstraints(), this },
        _refreshConstraints: function() { return this.actualizeOptions()._bindConstraints() },
        refreshConstraints: function() { return d.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh() },
        addConstraint: function(t, e, i, r) { if (window.Parsley._validatorRegistry.validators[t]) { var n = new b(this, t, e, i, r); "undefined" !== this.constraintsByName[n.name] && this.removeConstraint(n.name), this.constraints.push(n), this.constraintsByName[n.name] = n } return this },
        removeConstraint: function(t) {
            for (var e = 0; e < this.constraints.length; e++)
                if (t === this.constraints[e].name) { this.constraints.splice(e, 1); break }
            return delete this.constraintsByName[t], this
        },
        updateConstraint: function(t, e, i) { return this.removeConstraint(t).addConstraint(t, e, i) },
        _bindConstraints: function() { for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (t.push(this.constraints[i]), e[this.constraints[i].name] = this.constraints[i]); for (var r in this.constraints = t, this.constraintsByName = e, this.options) this.addConstraint(r, this.options[r], void 0, !0); return this._bindHtml5Constraints() },
        _bindHtml5Constraints: function() {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var t = this.element.getAttribute("min"),
                e = this.element.getAttribute("max");
            null !== t && null !== e ? this.addConstraint("range", [t, e], void 0, !0) : null !== t ? this.addConstraint("min", t, void 0, !0) : null !== e && this.addConstraint("max", e, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var i = d.getType(this.element);
            return "number" === i ? this.addConstraint("type", ["number", { step: this.element.getAttribute("step") || "1", base: t || this.element.getAttribute("value") }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
        },
        _isRequired: function() { return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements },
        _trigger: function(t) { return this.trigger("field:" + t) },
        _handleWhitespace: function(t) { return !0 === this.options.trimValue && d.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (t = t.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (t = d.trimString(t)), t },
        _isDateInput: function() { var t = this.constraintsByName.type; return t && "date" === t.requirements },
        _getGroupedConstraints: function() {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) {
                var r = this.constraints[i].priority;
                e[r] || t.push(e[r] = []), e[r].push(this.constraints[i])
            }
            return t.sort(function(t, e) { return e[0].priority - t[0].priority }), t
        }
    };

    function C() { this.__class__ = "FieldMultiple" }
    C.prototype = {
        addElement: function(t) { return this.$elements.push(t), this },
        _refreshConstraints: function() {
            var t;
            if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this;
            for (var e = 0; e < this.$elements.length; e++)
                if (h("html").has(this.$elements[e]).length) { t = this.$elements[e].data("FieldMultiple")._refreshConstraints().constraints; for (var i = 0; i < t.length; i++) this.addConstraint(t[i].name, t[i].requirements, t[i].priority, t[i].isDomConstraint) } else this.$elements.splice(e, 1);
            return this
        },
        getValue: function() { if ("function" == typeof this.options.value) return this.options.value(this); if (void 0 !== this.options.value) return this.options.value; if ("INPUT" === this.element.nodeName) { var t = d.getType(this.element); if ("radio" === t) return this._findRelated().filter(":checked").val() || ""; if ("checkbox" === t) { var e = []; return this._findRelated().filter(":checked").each(function() { e.push(h(this).val()) }), e } } return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val() },
        _init: function() { return this.$elements = [this.$element], this }
    };

    function A(t, e, i) { this.element = t, this.$element = h(t); var r = this.$element.data("Parsley"); if (r) return void 0 !== i && r.parent === window.Parsley && (r.parent = i, r._resetOptions(r.options)), "object" === n(e) && l(r.options, e), r; if (!this.$element.length) throw new Error("You must bind Parsley on an existing element."); if (void 0 !== i && "Form" !== i.__class__) throw new Error("Parent instance must be a Form instance"); return this.parent = i || window.Parsley, this.init(e) }
    A.prototype = {
        init: function(t) { return this.__class__ = "Parsley", this.__version__ = "2.9.2", this.__id__ = d.generateID(), this._resetOptions(t), "FORM" === this.element.nodeName || d.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField") },
        isMultiple: function() { var t = d.getType(this.element); return "radio" === t || "checkbox" === t || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple") },
        handleMultiple: function() {
            var t, e, r = this;
            if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return d.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && h('input[name="' + t + '"]').each(function(t, e) { var i = d.getType(e); "radio" !== i && "checkbox" !== i || e.setAttribute(r.options.namespace + "multiple", r.options.multiple) });
            for (var i = this._findRelated(), n = 0; n < i.length; n++)
                if (void 0 !== (e = h(i.get(n)).data("Parsley"))) { this.$element.data("FieldMultiple") || e.addElement(this.$element); break }
            return this.bind("parsleyField", !0), e || this.bind("parsleyFieldMultiple")
        },
        bind: function(t, e) {
            var i;
            switch (t) {
                case "parsleyForm":
                    i = h.extend(new y(this.element, this.domOptions, this.options), new r, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    i = h.extend(new w(this.element, this.domOptions, this.options, this.parent), new r, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    i = h.extend(new w(this.element, this.domOptions, this.options, this.parent), new C, new r, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type")
            }
            return this.options.multiple && d.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), void 0 !== e ? this.$element.data("FieldMultiple", i) : (this.$element.data("Parsley", i), i._actualizeTriggers(), i._trigger("init")), i
        }
    };
    var E = h.fn.jquery.split(".");
    if (parseInt(E[0]) <= 1 && parseInt(E[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    E.forEach || d.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var x = l(new r, { element: document, $element: h(document), actualizeOptions: null, _resetOptions: null, Factory: A, version: "2.9.2" });
    l(w.prototype, v.Field, r.prototype), l(y.prototype, v.Form, r.prototype), l(A.prototype, r.prototype), h.fn.parsley = h.fn.psly = function(t) { if (1 < this.length) { var e = []; return this.each(function() { e.push(h(this).parsley(t)) }), e } if (0 != this.length) return new A(this[0], t) }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), x.options = l(d.objectCreate(s), window.ParsleyConfig), window.ParsleyConfig = x.options, window.Parsley = window.psly = x, x.Utils = d, window.ParsleyUtils = {}, h.each(d, function(t, e) { "function" == typeof e && (window.ParsleyUtils[t] = function() { return d.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), d[t].apply(d, arguments) }) });
    var $ = window.Parsley._validatorRegistry = new a(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, h.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(t, e) { window.Parsley[e] = function() { return $[e].apply($, arguments) }, window.ParsleyValidator[e] = function() { var t; return d.warnOnce("Accessing the method '".concat(e, "' through Validator is deprecated. Simply call 'window.Parsley.").concat(e, "(...)'")), (t = window.Parsley)[e].apply(t, arguments) } }), window.Parsley.UI = v, window.ParsleyUI = { removeError: function(t, e, i) { var r = !0 !== i; return d.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), t.removeError(e, { updateClass: r }) }, getErrorsMessages: function(t) { return d.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), t.getErrorsMessages() } }, h.each("addError updateError".split(" "), function(t, a) { window.ParsleyUI[a] = function(t, e, i, r, n) { var s = !0 !== n; return d.warnOnce("Accessing UI is deprecated. Call '".concat(a, "' on the instance directly. Please comment in issue 1073 as to your need to call this method.")), t[a](e, { message: i, assert: r, updateClass: s }) } }), !1 !== window.ParsleyConfig.autoBind && h(function() { h("[data-parsley-validate]").length && h("[data-parsley-validate]").parsley() });

    function V() { d.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley") }
    var P = h({});

    function O(e, i) {
        return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            t.unshift(this), e.apply(i || P, t)
        }), e.parsleyAdaptedCallback
    }
    var T = "parsley:";

    function M(t) { return 0 === t.lastIndexOf(T, 0) ? t.substr(T.length) : t }
    return h.listen = function(t, e) {
        var i;
        if (V(), "object" === n(arguments[1]) && "function" == typeof arguments[2] && (i = arguments[1], e = arguments[2]), "function" != typeof e) throw new Error("Wrong parameters");
        window.Parsley.on(M(t), O(e, i))
    }, h.listenTo = function(t, e, i) {
        if (V(), !(t instanceof w || t instanceof y)) throw new Error("Must give Parsley instance");
        if ("string" != typeof e || "function" != typeof i) throw new Error("Wrong parameters");
        t.on(M(e), O(i))
    }, h.unsubscribe = function(t, e) {
        if (V(), "string" != typeof t || "function" != typeof e) throw new Error("Wrong arguments");
        window.Parsley.off(M(t), e.parsleyAdaptedCallback)
    }, h.unsubscribeTo = function(t, e) {
        if (V(), !(t instanceof w || t instanceof y)) throw new Error("Must give Parsley instance");
        t.off(M(e))
    }, h.unsubscribeAll = function(e) {
        V(), window.Parsley.off(M(e)), h("form,input,textarea,select").each(function() {
            var t = h(this).data("Parsley");
            t && t.off(M(e))
        })
    }, h.emit = function(t, e) {
        V();
        var i = e instanceof w || e instanceof y,
            r = Array.prototype.slice.call(arguments, i ? 2 : 1);
        r.unshift(M(t)), i || (e = window.Parsley), e.trigger.apply(e, u(r))
    }, h.extend(!0, x, { asyncValidators: { default: { fn: function(t) { return 200 <= t.status && t.status < 300 }, url: !1 }, reverse: { fn: function(t) { return t.status < 200 || 300 <= t.status }, url: !1 } }, addAsyncValidator: function(t, e, i, r) { return x.asyncValidators[t] = { fn: e, url: i || !1, options: r || {} }, this } }), x.addValidator("remote", {
        requirementType: { "": "string", validator: "string", reverse: "boolean", options: "object" },
        validateString: function(t, e, i, r) {
            var n, s, a = {},
                o = i.validator || (!0 === i.reverse ? "reverse" : "default");
            if (void 0 === x.asyncValidators[o]) throw new Error("Calling an undefined async validator: `" + o + "`"); - 1 < (e = x.asyncValidators[o].url || e).indexOf("{value}") ? e = e.replace("{value}", encodeURIComponent(t)) : a[r.element.getAttribute("name") || r.element.getAttribute("id")] = t;
            var l = h.extend(!0, i.options || {}, x.asyncValidators[o].options);
            n = h.extend(!0, {}, { url: e, data: a, type: "GET" }, l), r.trigger("field:ajaxoptions", r, n), s = h.param(n), void 0 === x._remoteCache && (x._remoteCache = {});

            function u() { var t = x.asyncValidators[o].fn.call(r, d, e, i); return t = t || h.Deferred().reject(), h.when(t) }
            var d = x._remoteCache[s] = x._remoteCache[s] || h.ajax(n);
            return d.then(u, u)
        },
        priority: -1
    }), x.on("form:submit", function() { x._remoteCache = {} }), r.prototype.addAsyncValidator = function() { return d.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), x.addAsyncValidator.apply(x, arguments) }, x.addMessages("en", { defaultMessage: "This value seems to be invalid.", type: { email: "This value should be a valid email.", url: "This value should be a valid url.", number: "This value should be a valid number.", integer: "This value should be a valid integer.", digits: "This value should be digits.", alphanum: "This value should be alphanumeric." }, notblank: "This value should not be blank.", required: "This value is required.", pattern: "This value seems to be invalid.", min: "This value should be greater than or equal to %s.", max: "This value should be lower than or equal to %s.", range: "This value should be between %s and %s.", minlength: "This value is too short. It should have %s characters or more.", maxlength: "This value is too long. It should have %s characters or fewer.", length: "This value length is invalid. It should be between %s and %s characters long.", mincheck: "You must select at least %s choices.", maxcheck: "You must select %s choices or fewer.", check: "You must select between %s and %s choices.", equalto: "This value should be the same.", euvatin: "It's not a valid VAT Identification Number." }), x.setLocale("en"), (new function() {
        var r = this,
            n = window || global;
        l(this, {
            isNativeEvent: function(t) { return t.originalEvent && !1 !== t.originalEvent.isTrusted },
            fakeInputEvent: function(t) { r.isNativeEvent(t) && h(t.target).trigger("input") },
            misbehaves: function(t) { r.isNativeEvent(t) && (r.behavesOk(t), h(document).on("change.inputevent", t.data.selector, r.fakeInputEvent), r.fakeInputEvent(t)) },
            behavesOk: function(t) { r.isNativeEvent(t) && h(document).off("input.inputevent", t.data.selector, r.behavesOk).off("change.inputevent", t.data.selector, r.misbehaves) },
            install: function() {
                if (!n.inputEventPatched) {
                    n.inputEventPatched = "0.0.3";
                    for (var t = 0, e = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]']; t < e.length; t++) {
                        var i = e[t];
                        h(document).on("input.inputevent", i, { selector: i }, r.behavesOk).on("change.inputevent", i, { selector: i }, r.misbehaves)
                    }
                }
            },
            uninstall: function() { delete n.inputEventPatched, h(document).off(".inputevent") }
        })
    }).install(), x
});;
(function(factory) { 'use strict'; if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof module !== 'undefined' && module.exports) { module.exports = factory(require('jquery')); } else { factory(jQuery); } })(function($) {
    var _previousResizeWidth = -1,
        _updateTimeout = -1;
    var _parse = function(value) { return parseFloat(value) || 0; };
    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];
        $elements.each(function() {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
            if (lastRow === null) { rows.push($that); } else { if (Math.floor(Math.abs(lastTop - top)) <= tolerance) { rows[rows.length - 1] = lastRow.add($that); } else { rows.push($that); } }
            lastTop = top;
        });
        return rows;
    };
    var _parseOptions = function(options) {
        var opts = { byRow: true, property: 'height', target: null, remove: false };
        if (typeof options === 'object') { return $.extend(opts, options); }
        if (typeof options === 'boolean') { opts.byRow = options; } else if (options === 'remove') { opts.remove = true; }
        return opts;
    };
    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);
        if (opts.remove) {
            var that = this;
            this.css(opts.property, '');
            $.each(matchHeight._groups, function(key, group) { group.elements = group.elements.not(that); });
            return this;
        }
        if (this.length <= 1 && !opts.target) { return this; }
        matchHeight._groups.push({ elements: this, options: opts });
        matchHeight._apply(this, opts);
        return this;
    };
    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;
    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);
        var $hiddenParents = $elements.parents().filter(':hidden');
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });
        $hiddenParents.css('display', 'block');
        if (opts.byRow && !opts.target) {
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') { display = 'block'; }
                $that.data('style-cache', $that.attr('style'));
                $that.css({ 'display': display, 'padding-top': '0', 'padding-bottom': '0', 'margin-top': '0', 'margin-bottom': '0', 'border-top-width': '0', 'border-bottom-width': '0', 'height': '100px', 'overflow': 'hidden' });
            });
            rows = _rows($elements);
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }
        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;
            if (!opts.target) {
                if (opts.byRow && $row.length <= 1) { $row.css(opts.property, ''); return; }
                $row.each(function() {
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') { display = 'block'; }
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);
                    if ($that.outerHeight(false) > targetHeight) { targetHeight = $that.outerHeight(false); }
                    if (style) { $that.attr('style', style); } else { $that.css('display', ''); }
                });
            } else { targetHeight = opts.target.outerHeight(false); }
            $row.each(function() {
                var $that = $(this),
                    verticalPadding = 0;
                if (opts.target && $that.is(opts.target)) { return; }
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });
        if (matchHeight._maintainScroll) { $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true)); }
        return this;
    };
    matchHeight._applyDataApi = function() {
        var groups = {};
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');
            if (groupId in groups) { groups[groupId] = groups[groupId].add($this); } else { groups[groupId] = $this; }
        });
        $.each(groups, function() { this.matchHeight(true); });
    };
    var _update = function(event) {
        if (matchHeight._beforeUpdate) { matchHeight._beforeUpdate(event, matchHeight._groups); }
        $.each(matchHeight._groups, function() { matchHeight._apply(this.elements, this.options); });
        if (matchHeight._afterUpdate) { matchHeight._afterUpdate(event, matchHeight._groups); }
    };
    matchHeight._update = function(throttle, event) {
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) { return; }
            _previousResizeWidth = windowWidth;
        }
        if (!throttle) { _update(event); } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };
    $(matchHeight._applyDataApi);
    var on = $.fn.on ? 'on' : 'bind';
    $(window)[on]('load', function(event) { matchHeight._update(false, event); });
    $(window)[on]('resize orientationchange', function(event) { matchHeight._update(true, event); });
});
/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t, e, i) {
    function n(i, n, o) { var r = e.createElement(i); return n && (r.id = Z + n), o && (r.style.cssText = o), t(r) }

    function o() { return i.innerHeight ? i.innerHeight : t(i).height() }

    function r(e, i) { i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) { var n; return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e] }, this.get = function(e) { var i = this.value(e); return t.isFunction(i) ? i.call(this.el, this) : i } }

    function h(t) {
        var e = W.length,
            i = (A + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) { return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10)) }

    function s(t, e) { return t.get("photo") || t.get("photoRegex").test(e) }

    function l(t, e) { return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e }

    function d(t) { "contains" in x[0] && !x[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), x.focus()) }

    function c(t) { c.str !== t && (x.add(v).removeClass(c.str).addClass(t), c.str = t) }

    function g(e) {
        A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function() {
            var i = t.data(this, Y),
                n = new r(this, i);
            return n.get("rel") === e
        }), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el)
    }

    function u(i) { t(e).trigger(i), ae.triggerHandler(i) }

    function f(i) {
        var o;
        if (!G) {
            if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
                $ = q = !0, c(_.get("className")), x.css({ visibility: "hidden", display: "block", opacity: "" }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({ width: "", height: "" }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);
                var h = a(_.get("initialWidth"), "x"),
                    s = a(_.get("initialHeight"), "y"),
                    l = _.get("maxWidth"),
                    f = _.get("maxHeight");
                _.w = Math.max((l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, 0), _.h = Math.max((f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, 0), I.css({ width: "", height: _.h }), J.position(), u(ee), _.get("onOpen"), O.add(F).hide(), x.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function() { e.removeEventListener("focus", d, !0) })), _.get("returnFocus") && ae.one(re, function() { t(_.el).focus() })
            }
            var p = parseFloat(_.get("opacity"));
            v.css({ opacity: p === p ? p : "", cursor: _.get("overlayClose") ? "pointer" : "", visibility: "visible" }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
        }
    }

    function p() { x || (V = !1, E = t(i), x = n(se).attr({ id: Y, "class": t.support.opacity === !1 ? Z + "IE" : "", role: "dialog", tabindex: "-1" }).hide(), v = n(se, "Overlay").hide(), L = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), y = n(se, "Wrapper"), b = n(se, "Content").append(F = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({ id: Z + "Previous" }), K = t('<button type="button"/>').attr({ id: Z + "Next" }), S = n("button", "Slideshow"), L), B = t('<button type="button"/>').attr({ id: Z + "Close" }), y.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({ "float": "left" }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(S)), e.body && !x.parent().length && t(e.body).append(v, x.append(y, M)) }

    function m() {
        function i(t) { t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this)) }
        return x ? (V || (V = !0, K.click(function() { J.next() }), P.click(function() { J.prev() }), B.click(function() { J.close() }), v.click(function() { _.get("overlayClose") && J.close() }), t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            $ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }

    function w() {
        var e, o, r, h = J.prep,
            d = ++le;
        if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function() { L.show() }, 100), _.get("inline")) {
            var c = t(e);
            r = t("<div>").hide().insertBefore(c), ae.one(he, function() { r.replaceWith(c) }), h(c)
        } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = _.get("createImg"), t(U).addClass(Z + "Photo").bind("error." + Z, function() { h(n(se, "Error").html(_.get("imgError"))) }).one("load", function() {
            d === le && setTimeout(function() {
                var e;
                _.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function() { U.height -= U.height * e, U.width -= U.width * e }, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (U.style.cursor = "pointer", t(U).bind("click." + Z, function() { J.next() })), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
            }, 1)
        }), U.src = e) : e && M.load(e, _.get("data"), function(e, i) { d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents()) })
    }
    var v, x, y, b, T, C, H, k, W, E, I, M, L, F, R, S, K, P, B, O, _, j, D, N, z, A, U, $, q, G, Q, J, V, X = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() { return this.rel },
            href: function() { return t(this).attr("href") },
            title: function() { return this.title },
            createImg: function() {
                var e = new Image,
                    i = t(this).data("cbox-img-attrs");
                return "object" == typeof i && t.each(i, function(t, i) { e[t] = i }), e
            },
            createIframe: function() {
                var i = e.createElement("iframe"),
                    n = t(this).data("cbox-iframe-attrs");
                return "object" == typeof n && t.each(n, function(t, e) { i[t] = e }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
            }
        },
        Y = "colorbox",
        Z = "cbox",
        te = Z + "Element",
        ee = Z + "_open",
        ie = Z + "_load",
        ne = Z + "_complete",
        oe = Z + "_cleanup",
        re = Z + "_closed",
        he = Z + "_purge",
        ae = t("<a/>"),
        se = "div",
        le = 0,
        de = {},
        ce = function() {
            function t() { clearTimeout(h) }

            function e() {
                (_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
            }

            function i() { S.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), x.removeClass(a + "off").addClass(a + "on") }

            function n() { t(), ae.unbind(ne, e).unbind(ie, t), S.html(_.get("slideshowStart")).unbind(s).one(s, function() { J.next(), i() }), x.removeClass(a + "on").addClass(a + "off") }

            function o() { r = !1, S.hide(), t(), ae.unbind(ne, e).unbind(ie, t), x.removeClass(a + "off " + a + "on") }
            var r, h, a = Z + "Slideshow_",
                s = "click." + Z;
            return function() { r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), S.show()) }
        }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function(e, i) {
        var n, o = this;
        return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function() {
            var i = t.data(this, Y) || {};
            t.data(this, Y, t.extend(i, e))
        }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function(e, i) {
        function n() { T[0].style.width = k[0].style.width = b[0].style.width = parseInt(x[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(x[0].style.height, 10) - j + "px" }
        var r, h, s, l = 0,
            d = 0,
            c = x.offset();
        if (E.unbind("resize." + Z), x.css({ top: -9e4, left: -9e4 }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, x.css({ position: "fixed" })) : (l = h, d = s, x.css({ position: "absolute" })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), x.css({ top: c.top, left: c.left, visibility: "visible" }), y[0].style.width = y[0].style.height = "9999px", r = { width: _.w + z + D, height: _.h + N + j, top: l, left: d }, e) {
            var g = 0;
            t.each(r, function(t) { return r[t] !== de[t] ? (g = e, void 0) : void 0 }), e = g
        }
        de = r, e || x.css(r), x.dequeue().animate(r, { duration: e || 0, complete: function() { n(), q = !1, y[0].style.width = _.w + z + D + "px", y[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function() { E.bind("resize." + Z, J.position) }, 1), t.isFunction(i) && i() }, step: n })
    }, J.resize = function(t) {
        var e;
        $ && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({ width: _.w }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({ height: "auto" }), _.h = I.height()), I.css({ height: _.h }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function(i) {
        function o() { return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w }

        function a() { return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h }
        if ($) {
            var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
            I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(M.show()).css({ width: o(), overflow: _.get("scrolling") ? "auto" : "hidden" }).css({ height: a() }).prependTo(b), M.hide(), t(U).css({ "float": "none" }), c(_.get("className")), d = function() {
                function i() { t.support.opacity === !1 && x[0].style.removeAttribute("filter") }
                var n, o, a = W.length;
                $ && (o = function() { clearTimeout(Q), L.hide(), u(ne), _.get("onComplete") }, F.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function() {
                    var i, n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                    h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
                })) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({ src: _.get("href"), "class": Z + "Iframe" }).one("load", o).appendTo(I), ae.one(he, function() { n.src = "//about:blank" }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? x.fadeTo(g, 1, i) : i())
            }, "fade" === _.get("transition") ? x.fadeTo(g, 0, function() { J.position(0, d) }) : J.position(g, d)
        }
    }, J.next = function() {!q && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A])) }, J.prev = function() {!q && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A])) }, J.close = function() { $ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), x.stop().fadeTo(_.get("fadeOut") || 0, 0, function() { x.hide(), v.hide(), u(he), I.remove(), setTimeout(function() { G = !1, u(re), _.get("onClosed") }, 1) })) }, J.remove = function() { x && (x.stop(), t[Y].close(), x.stop(!1, !0).remove(), v.remove(), G = !1, x = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z)) }, J.element = function() { return t(_.el) }, J.settings = X)
})(jQuery, document, window);
jQuery.event.special.touchstart = { setup: function(_, ns, handle) { this.addEventListener("touchstart", handle, { passive: true }); } };
var registroStep = 1;
$(function() {
    Parsley.on('field:validated', function(fieldInstance) {
        if (fieldInstance.$element.is(":hidden")) {
            fieldInstance._ui.$errorsWrapper.css('display', 'none');
            fieldInstance.validationResult = true;
            return true;
        }
    });
    window.ParsleyValidator.addValidator('checkemail', { validateString: function(value) { return $.ajax({ url: '/registro', method: "POST", data: { checkemail: value }, dataType: "json", success: function(data) { return true; } }); } });

    $("form").parsley();
    if ($('#frmcontacto').length > 0) {
        $('#frmcontacto').parsley();
        $('#frmcontacto').submit(function(e) {
            $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
            e.preventDefault();
            if ($(this).parsley().isValid()) { $.post("/contacto", $(this).serialize(), function() { Swal.fire({ title: "Gracias!", text: "Hemos recibido su mensaje", icon: "success", showCancelButton: false, closeOnConfirm: true, }, function() {}); }); }
        });
    }
    if ($('#frmforgot').length > 0) {
        $('#frmforgot').parsley();
        $('#frmforgot').submit(function(e) { e.preventDefault(); if ($(this).parsley().isValid()) { $.post("/forgot", $(this).serialize(), function() { Swal.fire({ title: "Hecho!", text: "Por favor revise su email", type: "success", showCancelButton: false, closeOnConfirm: true, }, function() { document.location = '/' }); }); } });
    }
    if ($('#frmchange').length > 0) {
        $('#frmchange').parsley();
        $('#frmchange').submit(function(e) { e.preventDefault(); if ($(this).parsley().isValid()) { $.post("/changePass/c", $(this).serialize(), function() { Swal.fire({ title: "Hecho", text: "Ha cambiado su contrase??a", type: "success", showCancelButton: false, closeOnConfirm: true, }, function() { document.location = '/' }); }); } });
    }
    if ($('#frmLogin').length > 0) {
        $('#frmLogin').parsley();
        $('#frmLogin').submit(function(e) {
            $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
            e.preventDefault();
            if ($(this).parsley().isValid()) { $.post("/registro", $(this).serialize()).done(function(data) { if (parseInt(data) == 1) { document.location = '/subastas' } else { Swal.fire({ text: "El usuario no existe o no ha sido activado", icon: "error", showCancelButton: false, closeOnConfirm: true, }); } }).fail(function() { Swal.fire({ text: "El usuario no existe o no ha sido activado", icon: "error", showCancelButton: false, closeOnConfirm: true, }); }) }
        });
    }
    $(".caxsalls a").click(function(e) {
        e.preventDefault();
        $(".caxsalls a").not(this).removeClass("active")
        $(this).addClass("active")
        $(".caxsa").hide();
        $("#caxsa" + $(this).attr('data-id')).show()
        console.log("#caxsa" + $(this).attr('data-id'))
    });
    $(".pvideo").click(function(e) {
        e.preventDefault();
        $.colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 })
    });
});
window.mobileCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
$(window).on('load', function() {
    if (typeof(ga) !== 'undefined') {
        ga('create', G_UA, 'auto');
        ga(function(tracker) { $("#g_clientID").val(tracker.get('clientId')) });
    }
});

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i) { indexed_array[n['name']] = n['value']; });
    return indexed_array;
}