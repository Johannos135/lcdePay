(() => {
    function n(n, e) {
        var o =
            ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
            n["@@iterator"];
        if (!o) {
            if (
                Array.isArray(n) ||
                (o = t(n)) ||
                (e && n && "number" == typeof n.length)
            ) {
                o && (n = o);
                var r = 0,
                    c = function () {};
                return {
                    s: c,
                    n: function () {
                        return r >= n.length
                            ? { done: !0 }
                            : { done: !1, value: n[r++] };
                    },
                    e: function (n) {
                        throw n;
                    },
                    f: c,
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        }
        var a,
            l = !0,
            i = !1;
        return {
            s: function () {
                o = o.call(n);
            },
            n: function () {
                var n = o.next();
                return (l = n.done), n;
            },
            e: function (n) {
                (i = !0), (a = n);
            },
            f: function () {
                try {
                    l || null == o.return || o.return();
                } finally {
                    if (i) throw a;
                }
            },
        };
    }
    function e(n, e) {
        return (
            (function (n) {
                if (Array.isArray(n)) return n;
            })(n) ||
            (function (n, e) {
                var t =
                    null == n
                        ? null
                        : ("undefined" != typeof Symbol &&
                              n[Symbol.iterator]) ||
                          n["@@iterator"];
                if (null == t) return;
                var o,
                    r,
                    c = [],
                    a = !0,
                    l = !1;
                try {
                    for (
                        t = t.call(n);
                        !(a = (o = t.next()).done) &&
                        (c.push(o.value), !e || c.length !== e);
                        a = !0
                    );
                } catch (n) {
                    (l = !0), (r = n);
                } finally {
                    try {
                        a || null == t.return || t.return();
                    } finally {
                        if (l) throw r;
                    }
                }
                return c;
            })(n, e) ||
            t(n, e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function t(n, e) {
        if (n) {
            if ("string" == typeof n) return o(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                    ? Array.from(n)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? o(n, e)
                    : void 0
            );
        }
    }
    function o(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t];
        return o;
    }
    for (
        var r = document.querySelector(".pickr-container"),
            c = document.querySelector(".theme-container"),
            a = document.querySelector(".pickr-container1"),
            l = document.querySelector(".theme-container1"),
            i = document.querySelector(".pickr-container2"),
            u = document.querySelector(".theme-container2"),
            s = [],
            f = null,
            g = function () {
                var t = e(h[v], 2),
                    o = t[0],
                    a = t[1],
                    l = document.createElement("button");
                (l.innerHTML = o),
                    s.push(l),
                    l.addEventListener("click", function () {
                        var e = document.createElement("p");
                        r.appendChild(e), f && f.destroyAndRemove();
                        var t,
                            c = n(s);
                        try {
                            for (c.s(); !(t = c.n()).done; ) {
                                var i = t.value;
                                i.classList[i === l ? "add" : "remove"](
                                    "active"
                                );
                            }
                        } catch (n) {
                            c.e(n);
                        } finally {
                            c.f();
                        }
                        (f = new Pickr(
                            Object.assign(
                                { el: e, theme: o, default: "#28a3ddc" },
                                a
                            )
                        ))
                            .on("init", function (n) {
                                console.log('Event: "init"', n);
                            })
                            .on("hide", function (n) {
                                console.log('Event: "hide"', n);
                            })
                            .on("show", function (n, e) {
                                console.log('Event: "show"', n, e);
                            })
                            .on("save", function (n, e) {
                                console.log('Event: "save"', n, e);
                            })
                            .on("clear", function (n) {
                                console.log('Event: "clear"', n);
                            })
                            .on("change", function (n, e, t) {
                                console.log('Event: "change"', n, e, t);
                            })
                            .on("changestop", function (n, e) {
                                console.log('Event: "changestop"', n, e);
                            })
                            .on("cancel", function (n) {
                                console.log(
                                    "cancel",
                                    f.getColor().toRGBA().toString(0)
                                );
                            })
                            .on("swatchselect", function (n, e) {
                                console.log('Event: "swatchselect"', n, e);
                            });
                    }),
                    c.appendChild(l);
            },
            v = 0,
            h = [
                [
                    "classic",
                    {
                        swatches: [
                            "rgba(244, 67, 54, 1)",
                            "rgba(233, 30, 99, 0.95)",
                            "rgba(156, 39, 176, 0.9)",
                            "rgba(103, 58, 183, 0.85)",
                            "rgba(63, 81, 181, 0.8)",
                            "rgba(33, 150, 243, 0.75)",
                            "rgba(3, 169, 244, 0.7)",
                            "rgba(0, 188, 212, 0.7)",
                            "rgba(0, 150, 136, 0.75)",
                            "rgba(76, 175, 80, 0.8)",
                            "rgba(139, 195, 74, 0.85)",
                            "rgba(205, 220, 57, 0.9)",
                            "rgba(255, 235, 59, 0.95)",
                            "rgba(255, 193, 7, 1)",
                        ],
                        components: {
                            preview: !0,
                            opacity: !0,
                            hue: !0,
                            interaction: {
                                hex: !0,
                                rgba: !0,
                                hsva: !0,
                                input: !0,
                                clear: !0,
                                save: !0,
                            },
                        },
                    },
                ],
            ];
        v < h.length;
        v++
    )
        g();
    s[0].click();
    for (
        var d = [],
            b = null,
            p = function () {
                var t = e(y[m], 2),
                    o = t[0],
                    r = t[1],
                    c = document.createElement("button");
                (c.innerHTML = o),
                    d.push(c),
                    c.addEventListener("click", function () {
                        var e = document.createElement("p");
                        a.appendChild(e), b && b.destroyAndRemove();
                        var t,
                            l = n(d);
                        try {
                            for (l.s(); !(t = l.n()).done; ) {
                                var i = t.value;
                                i.classList[i === c ? "add" : "remove"](
                                    "active"
                                );
                            }
                        } catch (n) {
                            l.e(n);
                        } finally {
                            l.f();
                        }
                        (b = new Pickr(
                            Object.assign(
                                { el: e, theme: o, default: "#fc5296" },
                                r
                            )
                        ))
                            .on("init", function (n) {
                                console.log('Event: "init"', n);
                            })
                            .on("hide", function (n) {
                                console.log('Event: "hide"', n);
                            })
                            .on("show", function (n, e) {
                                console.log('Event: "show"', n, e);
                            })
                            .on("save", function (n, e) {
                                console.log('Event: "save"', n, e);
                            })
                            .on("clear", function (n) {
                                console.log('Event: "clear"', n);
                            })
                            .on("change", function (n, e, t) {
                                console.log('Event: "change"', n, e, t);
                            })
                            .on("changestop", function (n, e) {
                                console.log('Event: "changestop"', n, e);
                            })
                            .on("cancel", function (n) {
                                console.log(
                                    "cancel",
                                    b.getColor().toRGBA().toString(0)
                                );
                            })
                            .on("swatchselect", function (n, e) {
                                console.log('Event: "swatchselect"', n, e);
                            });
                    }),
                    l.appendChild(c);
            },
            m = 0,
            y = [
                [
                    "monolith",
                    {
                        swatches: [
                            "rgba(244, 67, 54, 1)",
                            "rgba(233, 30, 99, 0.95)",
                            "rgba(156, 39, 176, 0.9)",
                            "rgba(103, 58, 183, 0.85)",
                            "rgba(63, 81, 181, 0.8)",
                            "rgba(33, 150, 243, 0.75)",
                            "rgba(3, 169, 244, 0.7)",
                        ],
                        defaultRepresentation: "HEXA",
                        components: {
                            preview: !0,
                            opacity: !0,
                            hue: !0,
                            interaction: {
                                hex: !1,
                                rgba: !1,
                                hsva: !1,
                                input: !0,
                                clear: !0,
                                save: !0,
                            },
                        },
                    },
                ],
            ];
        m < y.length;
        m++
    )
        p();
    d[0].click();
    for (
        var E = [],
            w = null,
            S = function () {
                var t = e(k[A], 2),
                    o = t[0],
                    r = t[1],
                    c = document.createElement("button");
                (c.innerHTML = o),
                    E.push(c),
                    c.addEventListener("click", function () {
                        var e = document.createElement("p");
                        i.appendChild(e), w && w.destroyAndRemove();
                        var t,
                            a = n(E);
                        try {
                            for (a.s(); !(t = a.n()).done; ) {
                                var l = t.value;
                                l.classList[l === c ? "add" : "remove"](
                                    "active"
                                );
                            }
                        } catch (n) {
                            a.e(n);
                        } finally {
                            a.f();
                        }
                        (w = new Pickr(
                            Object.assign(
                                { el: e, theme: o, default: "#05c3fb" },
                                r
                            )
                        ))
                            .on("init", function (n) {
                                console.log('Event: "init"', n);
                            })
                            .on("hide", function (n) {
                                console.log('Event: "hide"', n);
                            })
                            .on("show", function (n, e) {
                                console.log('Event: "show"', n, e);
                            })
                            .on("save", function (n, e) {
                                console.log('Event: "save"', n, e);
                            })
                            .on("clear", function (n) {
                                console.log('Event: "clear"', n);
                            })
                            .on("change", function (n, e, t) {
                                console.log('Event: "change"', n, e, t);
                            })
                            .on("changestop", function (n, e) {
                                console.log('Event: "changestop"', n, e);
                            })
                            .on("cancel", function (n) {
                                console.log(
                                    "cancel",
                                    w.getColor().toRGBA().toString(0)
                                );
                            })
                            .on("swatchselect", function (n, e) {
                                console.log('Event: "swatchselect"', n, e);
                            });
                    }),
                    u.appendChild(c);
            },
            A = 0,
            k = [
                [
                    "nano",
                    {
                        swatches: [
                            "rgba(244, 67, 54, 1)",
                            "rgba(233, 30, 99, 0.95)",
                            "rgba(156, 39, 176, 0.9)",
                            "rgba(103, 58, 183, 0.85)",
                            "rgba(63, 81, 181, 0.8)",
                            "rgba(33, 150, 243, 0.75)",
                            "rgba(3, 169, 244, 0.7)",
                        ],
                        defaultRepresentation: "HEXA",
                        components: {
                            preview: !0,
                            opacity: !0,
                            hue: !0,
                            interaction: {
                                hex: !1,
                                rgba: !1,
                                hsva: !1,
                                input: !0,
                                clear: !0,
                                save: !0,
                            },
                        },
                    },
                ],
            ];
        A < k.length;
        A++
    )
        S();
    E[0].click();
})();
