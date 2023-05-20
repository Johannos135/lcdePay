(() => {
    "use strict";
    var e = {
            9038: (e, o, r) => {
                r.d(o, { F: () => l });
                var t = r(8057);
                function a(e) {
                    return (
                        (a =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e &&
                                          "function" == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? "symbol"
                                          : typeof e;
                                  }),
                        a(e)
                    );
                }
                function l() {
                    document
                        .querySelector("body")
                        .classList.contains("header-light") &&
                        $("#myonoffswitch6").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("color-header") &&
                            $("#myonoffswitch7").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("gradient-header") &&
                            $("#myonoffswitch20").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("dark-header") &&
                            $("#myonoffswitch8").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("light-menu") &&
                            $("#myonoffswitch3").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("color-menu") &&
                            $("#myonoffswitch4").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("gradient-menu") &&
                            $("#myonoffswitch19").prop("checked", !0),
                        document
                            .querySelector("body")
                            .classList.contains("dark-menu") &&
                            $("#myonoffswitch5").prop("checked", !0);
                }
                !(function (e) {
                    e(window).on("load", function (o) {
                        e("#global-loader").fadeOut("slow");
                    }),
                        e(document).on("click", "a[data-theme]", function () {
                            e("head link#theme").attr(
                                "href",
                                e(this).data("theme")
                            ),
                                e(this)
                                    .toggleClass("active")
                                    .siblings()
                                    .removeClass("active");
                        }),
                        e(document).on(
                            "click",
                            ".fullscreen-button",
                            function () {
                                e(".fullscreen-button").addClass(
                                    "fullscreen-button"
                                ),
                                    (void 0 !== document.fullScreenElement &&
                                        null === document.fullScreenElement) ||
                                    (void 0 !== document.msFullscreenElement &&
                                        null ===
                                            document.msFullscreenElement) ||
                                    (void 0 !== document.mozFullScreen &&
                                        !document.mozFullScreen) ||
                                    (void 0 !== document.webkitIsFullScreen &&
                                        !document.webkitIsFullScreen)
                                        ? document.documentElement
                                              .requestFullScreen
                                            ? document.documentElement.requestFullScreen()
                                            : document.documentElement
                                                  .mozRequestFullScreen
                                            ? document.documentElement.mozRequestFullScreen()
                                            : document.documentElement
                                                  .webkitRequestFullScreen
                                            ? document.documentElement.webkitRequestFullScreen(
                                                  Element.ALLOW_KEYBOARD_INPUT
                                              )
                                            : document.documentElement
                                                  .msRequestFullscreen &&
                                              document.documentElement.msRequestFullscreen()
                                        : (e("html").removeClass(
                                              "fullscreen-button"
                                          ),
                                          document.cancelFullScreen
                                              ? document.cancelFullScreen()
                                              : document.mozCancelFullScreen
                                              ? document.mozCancelFullScreen()
                                              : document.webkitCancelFullScreen
                                              ? document.webkitCancelFullScreen()
                                              : document.msExitFullscreen &&
                                                document.msExitFullscreen());
                            }
                        ),
                        e(window).on("scroll", function (o) {
                            e(this).scrollTop() > 0
                                ? e("#back-to-top").fadeIn("slow")
                                : e("#back-to-top").fadeOut("slow");
                        }),
                        e(document).on("click", "#back-to-top", function (o) {
                            return (
                                e("html, body").animate({ scrollTop: 0 }, 0), !1
                            );
                        }),
                        e(".cover-image").each(function () {
                            var o = e(this).attr("data-bs-image-src");
                            "undefined" !== a(o) &&
                                !1 !== o &&
                                e(this).css(
                                    "background",
                                    "url(" + o + ") center center"
                                );
                        }),
                        e(function () {
                            e(".add").on("click", function () {
                                var o = e(this).closest("div").find(".qty"),
                                    r = parseInt(o.val());
                                isNaN(r) || o.val(r + 1);
                            }),
                                e(".minus").on("click", function () {
                                    var o = e(this).closest("div").find(".qty"),
                                        r = parseInt(o.val());
                                    !isNaN(r) && r > 0 && o.val(r - 1);
                                });
                        }),
                        e(".chart-circle").length &&
                            e(".chart-circle").each(function () {
                                var o = e(this);
                                o.circleProgress({
                                    fill: { color: o.attr("data-bs-color") },
                                    size: o.height(),
                                    startAngle: (-Math.PI / 4) * 2,
                                    emptyFill: "#edf0f5",
                                    lineCap: "round",
                                });
                            }),
                        e(".modal-effect").on("click", function (o) {
                            o.preventDefault();
                            var r = e(this).attr("data-bs-effect");
                            e("#modaldemo8").addClass(r);
                        }),
                        e("#modaldemo8").on("hidden.bs.modal", function (o) {
                            e(this).removeClass(function (e, o) {
                                return (
                                    o.match(/(^|\s)effect-\S+/g) || []
                                ).join(" ");
                            });
                        });
                    var o = "div.card";
                    [].slice
                        .call(
                            document.querySelectorAll(
                                '[data-bs-toggle="tooltip"]'
                            )
                        )
                        .map(function (e) {
                            return new bootstrap.Tooltip(e);
                        }),
                        [].slice
                            .call(document.querySelectorAll(".toast"))
                            .map(function (e) {
                                return new bootstrap.Toast(e);
                            });
                    e("#liveToastBtn").click(function () {
                        e(".toast").toast("show");
                    }),
                        e(document).on(
                            "click",
                            '[data-bs-toggle="card-remove"]',
                            function (r) {
                                return (
                                    e(this).closest(o).remove(),
                                    r.preventDefault(),
                                    !1
                                );
                            }
                        ),
                        e(document).on(
                            "click",
                            '[data-bs-toggle="card-collapse"]',
                            function (r) {
                                return (
                                    e(this)
                                        .closest(o)
                                        .toggleClass("card-collapsed"),
                                    r.preventDefault(),
                                    !1
                                );
                            }
                        ),
                        e(document).on(
                            "click",
                            '[data-bs-toggle="card-fullscreen"]',
                            function (r) {
                                return (
                                    e(this)
                                        .closest(o)
                                        .toggleClass("card-fullscreen")
                                        .removeClass("card-collapsed"),
                                    r.preventDefault(),
                                    !1
                                );
                            }
                        ),
                        e(document).on(
                            "change",
                            ".file-browserinput",
                            function () {
                                var o = e(this),
                                    r = o.get(0).files
                                        ? o.get(0).files.length
                                        : 1,
                                    t = o
                                        .val()
                                        .replace(/\\/g, "/")
                                        .replace(/.*\//, "");
                                o.trigger("fileselect", [r, t]);
                            }
                        ),
                        e(".file-browserinput").on(
                            "fileselect",
                            function (o, r, t) {
                                var a = e(this)
                                        .parents(".input-group")
                                        .find(":text"),
                                    l = r > 1 ? r + " files selected" : t;
                                a.length ? a.val(l) : l && alert(l);
                            }
                        ),
                        e(document).on("click", "#myonoffswitch1", function () {
                            this.checked
                                ? (e("body").addClass("light-mode"),
                                  e("#myonoffswitch3").prop("checked", !0),
                                  e("#myonoffswitch6").prop("checked", !0),
                                  e("body").removeClass("transparent-mode"),
                                  e("body").removeClass("dark-mode"),
                                  localStorage.removeItem("darkPrimary"),
                                  localStorage.removeItem("primaryColor"),
                                  localStorage.removeItem("primaryHoverColor"),
                                  localStorage.removeItem("primaryBorderColor"),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-color",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-hover",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-border",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--dark-primary",
                                          localStorage.darkPrimary
                                      ),
                                  localStorage.removeItem("darkPrimary"),
                                  localStorage.removeItem("transparentBgColor"),
                                  localStorage.removeItem(
                                      "transparentThemeColor"
                                  ),
                                  localStorage.removeItem("transparentPrimary"),
                                  localStorage.removeItem(
                                      "darkprimaryTransparent"
                                  ),
                                  e("#myonoffswitch1").prop("checked", !0),
                                  e("#myonoffswitch2").prop("checked", !1),
                                  e("#myonoffswitchTransparent").prop(
                                      "checked",
                                      !1
                                  ),
                                  localStorage.removeItem(
                                      "transparentBgImgPrimary"
                                  ),
                                  localStorage.removeItem(
                                      "transparentBgImgprimaryTransparent"
                                  ),
                                  l(),
                                  (document.querySelector(":root").style = ""),
                                  (0, t.R)())
                                : (e("body").removeClass("light-mode"),
                                  localStorage.removeItem("light-mode"));
                            (0, t._)();
                        }),
                        e(document).on("click", "#myonoffswitch2", function () {
                            this.checked
                                ? (e("body").addClass("dark-mode"),
                                  e("#myonoffswitch5").prop("checked", !0),
                                  e("#myonoffswitch8").prop("checked", !0),
                                  e("body").removeClass("light-mode"),
                                  e("body").removeClass("transparent-mode"),
                                  localStorage.removeItem("primaryColor"),
                                  localStorage.removeItem("primaryHoverColor"),
                                  localStorage.removeItem("primaryBorderColor"),
                                  localStorage.removeItem("darkPrimary"),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-color",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-hover",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--primary-bg-border",
                                          localStorage.darkPrimary
                                      ),
                                  document
                                      .querySelector("html")
                                      .style.removeProperty(
                                          "--dark-primary",
                                          localStorage.darkPrimary
                                      ),
                                  localStorage.removeItem("primaryColor"),
                                  localStorage.removeItem("primaryHoverColor"),
                                  localStorage.removeItem("primaryBorderColor"),
                                  localStorage.removeItem("primaryTransparent"),
                                  e("#myonoffswitch1").prop("checked", !1),
                                  e("#myonoffswitch2").prop("checked", !0),
                                  e("#myonoffswitchTransparent").prop(
                                      "checked",
                                      !1
                                  ),
                                  l(),
                                  localStorage.removeItem("transparentBgColor"),
                                  localStorage.removeItem(
                                      "transparentThemeColor"
                                  ),
                                  localStorage.removeItem("transparentPrimary"),
                                  localStorage.removeItem(
                                      "transparentBgImgPrimary"
                                  ),
                                  localStorage.removeItem(
                                      "transparentBgImgprimaryTransparent"
                                  ),
                                  (document.querySelector(":root").style = ""),
                                  (0, t.R)())
                                : (e("body").removeClass("dark-mode"),
                                  localStorage.removeItem("dark-mode"));
                            (0, t._)();
                        }),
                        e(document).on(
                            "click",
                            "#myonoffswitchTransparent",
                            function () {
                                this.checked
                                    ? (e("body").addClass("transparent-mode"),
                                      e("#myonoffswitch3").prop("checked", !1),
                                      e("#myonoffswitch6").prop("checked", !1),
                                      e("#myonoffswitch5").prop("checked", !1),
                                      e("#myonoffswitch8").prop("checked", !1),
                                      e("body").removeClass("dark-mode"),
                                      e("body").removeClass("light-mode"),
                                      localStorage.removeItem("primaryColor"),
                                      localStorage.removeItem(
                                          "primaryHoverColor"
                                      ),
                                      localStorage.removeItem(
                                          "primaryBorderColor"
                                      ),
                                      localStorage.removeItem("darkPrimary"),
                                      localStorage.removeItem("primaryColor"),
                                      localStorage.removeItem(
                                          "primaryHoverColor"
                                      ),
                                      localStorage.removeItem(
                                          "primaryBorderColor"
                                      ),
                                      localStorage.removeItem(
                                          "primaryTransparent"
                                      ),
                                      localStorage.removeItem(
                                          "transparentPrimary"
                                      ),
                                      localStorage.removeItem(
                                          "darkprimaryTransparent"
                                      ),
                                      localStorage.removeItem(
                                          "transparentBgImgPrimary"
                                      ),
                                      localStorage.removeItem(
                                          "transparentBgImgprimaryTransparent"
                                      ),
                                      e("#myonoffswitch2").prop("checked", !1),
                                      e("#myonoffswitch1").prop("checked", !1),
                                      e("#myonoffswitchTransparent").prop(
                                          "checked",
                                          !0
                                      ),
                                      l(),
                                      (document.querySelector(":root").style =
                                          ""),
                                      (0, t.R)())
                                    : (e("body").removeClass(
                                          "transparent-mode"
                                      ),
                                      localStorage.removeItem(
                                          "transparent-mode"
                                      ));
                                (0, t._)(),
                                    e("body").removeClass("bg-img1"),
                                    e("body").removeClass("bg-img2"),
                                    e("body").removeClass("bg-img3"),
                                    e("body").removeClass("bg-img4");
                            }
                        ),
                        e(document).on("click", "#bgimage1", function () {
                            e("body").addClass("bg-img1"),
                                e("body").removeClass("bg-img2"),
                                e("body").removeClass("bg-img3"),
                                e("body").removeClass("bg-img4"),
                                document
                                    .querySelector("body")
                                    .classList.add("transparent-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("light-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("dark-mode"),
                                e("#myonoffswitch2").prop("checked", !1),
                                e("#myonoffswitch1").prop("checked", !1),
                                e("#myonoffswitchTransparent").prop(
                                    "checked",
                                    !0
                                ),
                                l();
                        }),
                        e(document).on("click", "#bgimage2", function () {
                            e("body").addClass("bg-img2"),
                                e("body").removeClass("bg-img1"),
                                e("body").removeClass("bg-img3"),
                                e("body").removeClass("bg-img4"),
                                document
                                    .querySelector("body")
                                    .classList.add("transparent-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("light-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("dark-mode"),
                                e("#myonoffswitch2").prop("checked", !1),
                                e("#myonoffswitch1").prop("checked", !1),
                                e("#myonoffswitchTransparent").prop(
                                    "checked",
                                    !0
                                ),
                                l();
                        }),
                        e(document).on("click", "#bgimage3", function () {
                            e("body").addClass("bg-img3"),
                                e("body").removeClass("bg-img1"),
                                e("body").removeClass("bg-img2"),
                                e("body").removeClass("bg-img4"),
                                document
                                    .querySelector("body")
                                    .classList.add("transparent-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("light-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("dark-mode"),
                                e("#myonoffswitch2").prop("checked", !1),
                                e("#myonoffswitch1").prop("checked", !1),
                                e("#myonoffswitchTransparent").prop(
                                    "checked",
                                    !0
                                ),
                                l();
                        }),
                        e(document).on("click", "#bgimage4", function () {
                            e("body").addClass("bg-img4"),
                                e("body").removeClass("bg-img1"),
                                e("body").removeClass("bg-img2"),
                                e("body").removeClass("bg-img3"),
                                document
                                    .querySelector("body")
                                    .classList.add("transparent-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("light-mode"),
                                document
                                    .querySelector("body")
                                    .classList.remove("dark-mode"),
                                e("#myonoffswitch2").prop("checked", !1),
                                e("#myonoffswitch1").prop("checked", !1),
                                e("#myonoffswitchTransparent").prop(
                                    "checked",
                                    !0
                                ),
                                l();
                        }),
                        e(document).on("click", "#myonoffswitch3", function () {
                            this.checked
                                ? (e("body").addClass("light-menu"),
                                  e("body").removeClass("color-menu"),
                                  e("body").removeClass("dark-menu"),
                                  e("body").removeClass("gradient-menu"))
                                : e("body").removeClass("light-menu");
                        }),
                        e(document).on("click", "#myonoffswitch4", function () {
                            this.checked
                                ? (e("body").addClass("color-menu"),
                                  e("body").removeClass("light-menu"),
                                  e("body").removeClass("dark-menu"),
                                  e("body").removeClass("gradient-menu"))
                                : e("body").removeClass("color-menu");
                        }),
                        e(document).on("click", "#myonoffswitch5", function () {
                            this.checked
                                ? (e("body").addClass("dark-menu"),
                                  e("body").removeClass("color-menu"),
                                  e("body").removeClass("light-menu"),
                                  e("body").removeClass("gradient-menu"))
                                : e("body").removeClass("dark-menu");
                        }),
                        e(document).on(
                            "click",
                            "#myonoffswitch19",
                            function () {
                                this.checked
                                    ? (e("body").addClass("gradient-menu"),
                                      e("body").removeClass("color-menu"),
                                      e("body").removeClass("light-menu"),
                                      e("body").removeClass("dark-menu"))
                                    : e("body").removeClass("gradient-menu");
                            }
                        ),
                        e(document).on("click", "#myonoffswitch6", function () {
                            this.checked
                                ? (e("body").addClass("header-light"),
                                  e("body").removeClass("color-header"),
                                  e("body").removeClass("dark-header"),
                                  e("body").removeClass("gradient-header"))
                                : e("body").removeClass("header-light");
                        }),
                        e(document).on("click", "#myonoffswitch7", function () {
                            this.checked
                                ? (e("body").addClass("color-header"),
                                  e("body").removeClass("header-light"),
                                  e("body").removeClass("dark-header"),
                                  e("body").removeClass("gradient-header"))
                                : e("body").removeClass("color-header");
                        }),
                        e(document).on("click", "#myonoffswitch8", function () {
                            this.checked
                                ? (e("body").addClass("dark-header"),
                                  e("body").removeClass("color-header"),
                                  e("body").removeClass("header-light"),
                                  e("body").removeClass("gradient-header"))
                                : e("body").removeClass("dark-header");
                        }),
                        e(document).on(
                            "click",
                            "#myonoffswitch20",
                            function () {
                                this.checked
                                    ? (e("body").addClass("gradient-header"),
                                      e("body").removeClass("color-header"),
                                      e("body").removeClass("header-light"),
                                      e("body").removeClass("dark-header"))
                                    : e("body").removeClass("gradient-header");
                            }
                        ),
                        e(document).on("click", "#myonoffswitch9", function () {
                            this.checked
                                ? (e("body").addClass("layout-fullwidth"),
                                  e("body").removeClass("layout-boxed"))
                                : e("body").removeClass("layout-fullwidth");
                        }),
                        e(document).on(
                            "click",
                            "#myonoffswitch10",
                            function () {
                                this.checked
                                    ? (e("body").addClass("layout-boxed"),
                                      e("#slide-left").removeClass("d-none"),
                                      e("#slide-right").removeClass("d-none"),
                                      e("body").removeClass("layout-fullwidth"))
                                    : e("body").removeClass("layout-boxed");
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch11",
                            function () {
                                this.checked
                                    ? (e("body").addClass("fixed-layout"),
                                      e("body").removeClass(
                                          "scrollable-layout"
                                      ))
                                    : e("body").removeClass("fixed-layout");
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch12",
                            function () {
                                this.checked
                                    ? (e("body").addClass("scrollable-layout"),
                                      e("body").removeClass("fixed-layout"))
                                    : e("body").removeClass(
                                          "scrollable-layout"
                                      );
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch13",
                            function () {
                                this.checked
                                    ? (e("body").addClass("default-menu"),
                                      e("body").removeClass("sidenav-toggled"),
                                      hovermenu(),
                                      e("body").removeClass("icontext-menu"),
                                      e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("hover-submenu"),
                                      e("body").removeClass("hover-submenu1"))
                                    : e("body").removeClass("default-menu");
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch15",
                            function () {
                                this.checked
                                    ? (e("body").addClass("icon-overlay"),
                                      hovermenu(),
                                      e("body").addClass("sidenav-toggled"),
                                      e("body").removeClass("hover-submenu1"),
                                      e("body").removeClass("default-menu"),
                                      e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("hover-submenu"),
                                      e("body").removeClass("icontext-menu"))
                                    : (e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("sidenav-toggled"));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch14",
                            function () {
                                this.checked
                                    ? (e("body").addClass("icontext-menu"),
                                      icontext(),
                                      e("body").addClass("sidenav-toggled"),
                                      e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("hover-submenu1"),
                                      e("body").removeClass("default-menu"),
                                      e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("hover-submenu"))
                                    : (e("body").removeClass("icontext-menu"),
                                      e("body").removeClass("sidenav-toggled"));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch16",
                            function () {
                                this.checked
                                    ? (e("body").addClass("closed-leftmenu"),
                                      e("body").addClass("sidenav-toggled"),
                                      e("body").removeClass("default-menu"),
                                      e("body").removeClass("hover-submenu1"),
                                      e("body").removeClass("hover-submenu"),
                                      e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("icontext-menu"))
                                    : (e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("sidenav-toggled"),
                                      e("body").addClass("default-menu"));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch17",
                            function () {
                                this.checked
                                    ? (e("body").addClass("hover-submenu"),
                                      hovermenu(),
                                      e("body").addClass("sidenav-toggled"),
                                      e("body").removeClass("hover-submenu1"),
                                      e("body").removeClass("default-menu"),
                                      e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("icontext-menu"))
                                    : (e("body").removeClass("hover-submenu"),
                                      e("body").removeClass("sidenav-toggled"));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch18",
                            function () {
                                this.checked
                                    ? (e("body").addClass("hover-submenu1"),
                                      hovermenu(),
                                      e("body").addClass("sidenav-toggled"),
                                      e("body").removeClass("hover-submenu"),
                                      e("body").removeClass("default-menu"),
                                      e("body").removeClass("closed-leftmenu"),
                                      e("body").removeClass("icon-overlay"),
                                      e("body").removeClass("icontext-menu"))
                                    : (e("body").removeClass("hover-submenu1"),
                                      e("body").removeClass("sidenav-toggled"));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch21",
                            function () {
                                this.checked
                                    ? (e("body").addClass("default-horizontal"),
                                      e("body").removeClass(
                                          "centerlogo-horizontal"
                                      ),
                                      localStorage.setItem(
                                          "default-horizontal",
                                          "True"
                                      ))
                                    : (e("body").removeClass(
                                          "default-horizontal"
                                      ),
                                      localStorage.setItem(
                                          "default-horizontal",
                                          "false"
                                      ));
                            }
                        ),
                        e(document).on(
                            "click",
                            "#myonoffswitch22",
                            function () {
                                this.checked
                                    ? (e("body").addClass(
                                          "centerlogo-horizontal"
                                      ),
                                      e("body").removeClass(
                                          "default-horizontal"
                                      ),
                                      localStorage.setItem(
                                          "centerlogo-horizontal",
                                          "True"
                                      ))
                                    : (e("body").removeClass(
                                          "centerlogo-horizontal"
                                      ),
                                      localStorage.setItem(
                                          "centerlogo-horizontal",
                                          "false"
                                      ));
                            }
                        ),
                        e(document).on(
                            "click",
                            '[data-bs-toggle="collapse"]',
                            function () {
                                e(this)
                                    .toggleClass("active")
                                    .siblings()
                                    .removeClass("active");
                            }
                        );
                })(jQuery),
                    (function () {
                        var e = document.querySelectorAll(".reply a"),
                            o = document.createElement("div");
                        o.setAttribute("class", "comment mt-5 d-grid");
                        var r = document.createElement("textarea");
                        r.setAttribute("class", "form-control"),
                            r.setAttribute("rows", "5"),
                            (r.innerText = "Your Comment");
                        var t = document.createElement("button");
                        t.setAttribute("class", "btn btn-danger"),
                            (t.innerText = "Cancel");
                        var a = document.createElement("div");
                        a.setAttribute("class", "btn-list ms-auto mt-2");
                        var l = document.createElement("button");
                        l.setAttribute("class", "btn btn-success ms-3"),
                            (l.innerText = "Submit"),
                            o.append(r),
                            o.append(a),
                            a.append(t),
                            a.append(l),
                            e.forEach(function (e) {
                                e.addEventListener("click", function () {
                                    $(e).parent().append(o),
                                        t.addEventListener(
                                            "click",
                                            function () {
                                                o.remove();
                                            }
                                        );
                                });
                            });
                    })(),
                    document.querySelectorAll(".like").forEach(function (e) {
                        e.addEventListener("click", function () {
                            $(e).children();
                        });
                    }),
                    jQuery(document).ready(function (e) {
                        e(".clickable-row").click(function () {
                            window.location = e(this).data("href");
                        });
                    }),
                    $(".off-canvas").on("click", function () {
                        $("body").addClass("overflow-y-scroll"),
                            $("body").addClass("pe-0");
                    }),
                    $("#myonoffswitch24").click(function () {
                        if (this.checked) {
                            $("body").addClass("rtl"),
                                $("html[lang=en]").attr("dir", "rtl"),
                                $("body").removeClass("ltr"),
                                localStorage.setItem("rtl", "True"),
                                $("head link#style").attr("href", $(this)),
                                document
                                    .getElementById("style")
                                    .setAttribute(
                                        "href",
                                        "http://127.0.0.1:8000/assets/plugins/bootstrap/css/bootstrap.rtl.min.css"
                                    );
                            var e = $(".owl-carousel");
                            $.each(e, function (e, o) {
                                var r = $(o).data("owl.carousel");
                                (r.settings.rtl = !0),
                                    (r.options.rtl = !0),
                                    $(o).trigger("refresh.owl.carousel");
                            });
                        } else
                            $("body").removeClass("rtl"),
                                $("body").addClass("ltr"),
                                localStorage.setItem("rtl", "false"),
                                $("head link#style").attr("href", $(this)),
                                document
                                    .getElementById("style")
                                    .setAttribute(
                                        "href",
                                        "http://127.0.0.1:8000/assets/plugins/bootstrap/css/bootstrap.min.css"
                                    );
                    }),
                    $("#myonoffswitch23").click(function () {
                        if (this.checked) {
                            $("body").addClass("ltr"),
                                $("html[lang=en]").attr("dir", "ltr"),
                                $("body").removeClass("rtl"),
                                localStorage.setItem("ltr", "True"),
                                $("head link#style").attr("href", $(this)),
                                document
                                    .getElementById("style")
                                    .setAttribute(
                                        "href",
                                        "http://127.0.0.1:8000/assets/plugins/bootstrap/css/bootstrap.min.css"
                                    );
                            var e = $(".owl-carousel");
                            $.each(e, function (e, o) {
                                var r = $(o).data("owl.carousel");
                                (r.settings.rtl = !1),
                                    (r.options.rtl = !1),
                                    $(o).trigger("refresh.owl.carousel");
                            });
                        } else
                            $("body").removeClass("ltr"),
                                $("body").addClass("rtl"),
                                localStorage.setItem("ltr", "false"),
                                $("head link#style").attr("href", $(this)),
                                document
                                    .getElementById("style")
                                    .setAttribute(
                                        "href",
                                        "http://127.0.0.1:8000/assets/plugins/bootstrap/css/bootstrap.rtl.min.css"
                                    );
                    }),
                    $("#myonoffswitch34").click(function () {
                        this.checked
                            ? ($("body").removeClass("horizontal"),
                              $("body").removeClass("horizontal-hover"),
                              $(".main-content").removeClass("hor-content"),
                              $(".main-content").addClass("app-content"),
                              $(".main-container").removeClass("container"),
                              $(".main-container").addClass("container-fluid"),
                              $(".app-header").removeClass("hor-header"),
                              $(".hor-header").addClass("app-header"),
                              $(".app-sidebar").removeClass("horizontal-main"),
                              $(".main-sidemenu").removeClass("container"),
                              $("#slide-left").removeClass("d-none"),
                              $("#slide-right").removeClass("d-none"),
                              $("body").addClass("sidebar-mini"),
                              localStorage.setItem("sidebar-mini", "True"),
                              menuClick())
                            : ($("body").removeClass("sidebar-mini"),
                              localStorage.setItem("sidebar-mini", "False"));
                    }),
                    $("#myonoffswitch35").click(function () {
                        this.checked
                            ? ($("body").addClass("horizontal"),
                              $(".main-content").addClass("hor-content"),
                              $(".main-content").removeClass("app-content"),
                              $(".main-container").addClass("container"),
                              $(".main-container").removeClass(
                                  "container-fluid"
                              ),
                              $(".app-header").addClass("hor-header"),
                              $(".hor-header").removeClass("app-header"),
                              $(".app-sidebar").addClass("horizontal-main"),
                              $(".main-sidemenu").addClass("container"),
                              $("body").removeClass("sidebar-mini"),
                              $("body").removeClass("sidenav-toggled"),
                              $("#slide-left").removeClass("d-none"),
                              $("#slide-right").removeClass("d-none"),
                              $("body").removeClass("horizontal-hover"),
                              $("body").removeClass("default-menu"),
                              $("body").removeClass("icontext-menu"),
                              $("body").removeClass("icon-overlay"),
                              $("body").removeClass("closed-leftmenu"),
                              $("body").removeClass("hover-submenu"),
                              $("body").removeClass("hover-submenu1"),
                              localStorage.setItem("horizantal", "True"),
                              (document.querySelector(
                                  ".horizontal .side-menu"
                              ).style.flexWrap = "nowrap"),
                              menuClick(),
                              checkHoriMenu())
                            : ($("body").removeClass("horizontal"),
                              localStorage.setItem("horizontal", "False"));
                    }),
                    $("#myonoffswitch111").click(function () {
                        if (this.checked) {
                            document
                                .querySelectorAll(".side-menu li")
                                .forEach(function (e, o) {
                                    e.classList.remove("is-expanded");
                                });
                            $("[data-bs-toggle='sub-slide']")
                                .parents("ul")
                                .find("ul:visible")
                                .slideUp(300)
                                .removeClass("open"),
                                $("[data-bs-toggle='sub-slide2']")
                                    .parents("ul")
                                    .find("ul:visible")
                                    .slideUp(300)
                                    .removeClass("open"),
                                $("body").addClass("horizontal-hover"),
                                $("body").addClass("horizontal"),
                                (document.querySelector(
                                    ".horizontal .side-menu"
                                ).style.flexWrap = "nowrap"),
                                $("#slide-left").removeClass("d-none"),
                                $("#slide-right").removeClass("d-none"),
                                $(".main-content").addClass("hor-content"),
                                $(".main-content").removeClass("app-content"),
                                $(".main-container").addClass("container"),
                                $(".main-container").removeClass(
                                    "container-fluid"
                                ),
                                $(".app-header").addClass("hor-header"),
                                $(".app-header").removeClass("app-header"),
                                $(".app-sidebar").addClass("horizontal-main"),
                                $(".main-sidemenu").addClass("container"),
                                $("body").removeClass("sidebar-mini"),
                                $("body").removeClass("sidenav-toggled"),
                                $("body").removeClass("default-menu"),
                                $("body").removeClass("icontext-menu"),
                                $("body").removeClass("icon-overlay"),
                                $("body").removeClass("closed-leftmenu"),
                                $("body").removeClass("hover-submenu"),
                                $("body").removeClass("hover-submenu1"),
                                HorizontalHovermenu(),
                                checkHoriMenu();
                        } else $("body").removeClass("horizontal-hover"), localStorage.setItem("horizontal-hover", "False");
                    }),
                    $(document).ready(function () {
                        document
                            .querySelector("body")
                            .classList.contains("light-mode") &&
                            ($("#myonoffswitch3").prop("checked", !0),
                            $("#myonoffswitch6").prop("checked", !0));
                    });
            },
            2137: (e, o, r) => {
                function t(e, o, r, t) {
                    var a = document.getElementById("transactions");
                    a.height = "330";
                    var l = a.getContext("2d"),
                        n = l.createLinearGradient(0, 80, 0, 280);
                    n.addColorStop(0, e || "rgba(108, 95, 252, 0.8)"),
                        n.addColorStop(1, o || "rgba(108, 95, 252, 0.2) ");
                    var c = l.createLinearGradient(0, 80, 0, 280);
                    c.addColorStop(0, r || "rgba(5, 195, 251, 0.8)"),
                        c.addColorStop(1, r || "rgba(5, 195, 251, 0.2) ");
                    new Chart(a, {
                        type: "line",
                        data: {
                            labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "June",
                                "July",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec",
                            ],
                            type: "line",
                            datasets: [
                                {
                                    label: "Total Sales",
                                    data: [
                                        100, 210, 180, 454, 454, 230, 230, 656,
                                        656, 350, 350, 210,
                                    ],
                                    backgroundColor: n,
                                    borderColor: t || "#28a3ddc",
                                    pointBackgroundColor: "#fff",
                                    pointHoverBackgroundColor: n,
                                    pointBorderColor: t || "#28a3ddc",
                                    pointHoverBorderColor: n,
                                    pointBorderWidth: 0,
                                    pointRadius: 0,
                                    pointHoverRadius: 0,
                                    borderWidth: 3,
                                    fill: "origin",
                                },
                                {
                                    label: "Total Orders",
                                    data: [
                                        200, 530, 110, 110, 480, 520, 780, 435,
                                        475, 738, 454, 454,
                                    ],
                                    backgroundColor: "transparent",
                                    borderColor: "#05c3fb",
                                    pointBackgroundColor: "#fff",
                                    pointHoverBackgroundColor: c,
                                    pointBorderColor: "#05c3fb",
                                    pointHoverBorderColor: c,
                                    pointBorderWidth: 0,
                                    pointRadius: 0,
                                    pointHoverRadius: 0,
                                    borderWidth: 3,
                                    fill: "origin",
                                },
                            ],
                        },
                        options: {
                            responsive: !0,
                            maintainAspectRatio: !1,
                            tooltips: { enabled: !1 },
                            legend: {
                                display: !1,
                                labels: { usePointStyle: !1 },
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: !0,
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1,
                                            color: "rgba(119, 119, 142, 0.08)",
                                        },
                                        ticks: {
                                            fontColor: "#b0bac9",
                                            autoSkip: !0,
                                        },
                                        scaleLabel: {
                                            display: !1,
                                            labelString: "Month",
                                            fontColor: "transparent",
                                        },
                                    },
                                ],
                                yAxes: [
                                    {
                                        ticks: {
                                            min: 0,
                                            max: 1050,
                                            stepSize: 150,
                                            fontColor: "#b0bac9",
                                        },
                                        display: !0,
                                        gridLines: {
                                            display: !0,
                                            drawBorder: !1,
                                            zeroLineColor:
                                                "rgba(142, 156, 173,0.1)",
                                            color: "rgba(142, 156, 173,0.1)",
                                        },
                                        scaleLabel: {
                                            display: !1,
                                            labelString: "sales",
                                            fontColor: "transparent",
                                        },
                                    },
                                ],
                            },
                            title: { display: !1, text: "Normal Legend" },
                        },
                    });
                }
                r.d(o, { K: () => t });
            },
            8057: (e, o, r) => {
                r.d(o, { _: () => v, R: () => q });
                var t = r(9038),
                    a = r(2137);
                function l(e, o) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })(e) ||
                        (function (e, o) {
                            var r =
                                null == e
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                          e[Symbol.iterator]) ||
                                      e["@@iterator"];
                            if (null == r) return;
                            var t,
                                a,
                                l = [],
                                n = !0,
                                c = !1;
                            try {
                                for (
                                    r = r.call(e);
                                    !(n = (t = r.next()).done) &&
                                    (l.push(t.value), !o || l.length !== o);
                                    n = !0
                                );
                            } catch (e) {
                                (c = !0), (a = e);
                            } finally {
                                try {
                                    n || null == r.return || r.return();
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        })(e, o) ||
                        (function (e, o) {
                            if (!e) return;
                            if ("string" == typeof e) return n(e, o);
                            var r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            "Object" === r &&
                                e.constructor &&
                                (r = e.constructor.name);
                            if ("Map" === r || "Set" === r)
                                return Array.from(e);
                            if (
                                "Arguments" === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                )
                            )
                                return n(e, o);
                        })(e, o) ||
                        (function () {
                            throw new TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                        })()
                    );
                }
                function n(e, o) {
                    (null == o || o > e.length) && (o = e.length);
                    for (var r = 0, t = new Array(o); r < o; r++) t[r] = e[r];
                    return t;
                }
                function c(e, o, r) {
                    return (
                        o in e
                            ? Object.defineProperty(e, o, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[o] = r),
                        e
                    );
                }
                var s = document.querySelector(".color-primary-light");
                null == s ||
                    s.addEventListener("input", function () {
                        $("#myonoffswitch3").prop("checked", !0),
                            $("#myonoffswitch6").prop("checked", !0),
                            (0, t.F)();
                        var e = document.getElementById("colorID").value;
                        localStorage.setItem("primaryColor", e),
                            localStorage.setItem("primaryHoverColor", e + 95),
                            localStorage.setItem("primaryBorderColor", e),
                            localStorage.setItem("primaryTransparent", e + 20),
                            localStorage.removeItem("darkPrimary"),
                            localStorage.removeItem("transparentBgColor"),
                            localStorage.removeItem("transparentThemeColor"),
                            localStorage.removeItem("transparentPrimary"),
                            localStorage.removeItem("transparentBgImgPrimary"),
                            localStorage.removeItem(
                                "transparentBgImgprimaryTransparent"
                            ),
                            localStorage.removeItem("darkprimaryTransparent"),
                            document
                                .querySelector("body")
                                .classList.add("light-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("transparent-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("dark-mode"),
                            localStorage.removeItem("BgImage"),
                            $("#myonoffswitch1").prop("checked", !0),
                            q();
                    });
                var m = document.querySelector(".color-primary-dark");
                null == m ||
                    m.addEventListener("input", function () {
                        var e =
                            document.getElementById("darkPrimaryColorID").value;
                        localStorage.setItem("darkPrimary", e),
                            localStorage.setItem(
                                "darkprimaryTransparent",
                                e + 20
                            ),
                            $("#myonoffswitch5").prop("checked", !0),
                            $("#myonoffswitch8").prop("checked", !0),
                            (0, t.F)(),
                            localStorage.removeItem("primaryColor"),
                            localStorage.removeItem("primaryHoverColor"),
                            localStorage.removeItem("primaryBorderColor"),
                            localStorage.removeItem("primaryTransparent"),
                            localStorage.removeItem("transparentBgImgPrimary"),
                            localStorage.removeItem(
                                "transparentBgImgprimaryTransparent"
                            ),
                            localStorage.removeItem("transparentBgColor"),
                            localStorage.removeItem("transparentThemeColor"),
                            localStorage.removeItem("transparentPrimary"),
                            localStorage.removeItem("BgImage"),
                            document
                                .querySelector("body")
                                .classList.add("dark-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("light-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("transparent-mode"),
                            $("#myonoffswitch2").prop("checked", !0),
                            q();
                    });
                var d = document.querySelector(".color-primary-transparent");
                null == d ||
                    d.addEventListener("input", function () {
                        var e, o, r, a;
                        $("#myonoffswitch3").prop("checked", !1),
                            $("#myonoffswitch6").prop("checked", !1),
                            $("#myonoffswitch5").prop("checked", !1),
                            $("#myonoffswitch8").prop("checked", !1);
                        var l = document.getElementById(
                            "transparentPrimaryColorID"
                        ).value;
                        localStorage.setItem("transparentPrimary", l),
                            localStorage.setItem(
                                "transparentprimaryTransparent",
                                l + 20
                            ),
                            localStorage.removeItem("darkPrimary"),
                            localStorage.removeItem("primaryColor"),
                            localStorage.removeItem("primaryHoverColor"),
                            localStorage.removeItem("primaryBorderColor"),
                            localStorage.removeItem("primaryTransparent"),
                            localStorage.removeItem("transparentBgImgPrimary"),
                            localStorage.removeItem(
                                "transparentBgImgprimaryTransparent"
                            ),
                            document
                                .querySelector("body")
                                .classList.add("transparent-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("light-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("dark-mode"),
                            localStorage.removeItem("BgImage"),
                            null === (e = document.querySelector("body")) ||
                                void 0 === e ||
                                e.classList.remove("bg-img1"),
                            null === (o = document.querySelector("body")) ||
                                void 0 === o ||
                                o.classList.remove("bg-img2"),
                            null === (r = document.querySelector("body")) ||
                                void 0 === r ||
                                r.classList.remove("bg-img3"),
                            null === (a = document.querySelector("body")) ||
                                void 0 === a ||
                                a.classList.remove("bg-img4"),
                            $("#myonoffswitchTransparent").prop("checked", !0),
                            (0, t.F)(),
                            q();
                    });
                var i = document.querySelector(".color-bg-transparent");
                null == i ||
                    i.addEventListener("input", function () {
                        var e, o, r, a;
                        $("#myonoffswitch3").prop("checked", !1),
                            $("#myonoffswitch6").prop("checked", !1),
                            $("#myonoffswitch5").prop("checked", !1),
                            $("#myonoffswitch8").prop("checked", !1);
                        var l = document.getElementById(
                            "transparentBgColorID"
                        ).value;
                        localStorage.setItem("transparentBgColor", l),
                            localStorage.setItem(
                                "transparentThemeColor",
                                l + 95
                            ),
                            localStorage.setItem(
                                "transparentprimaryTransparent",
                                l + 20
                            ),
                            localStorage.removeItem("transparentBgImgPrimary"),
                            localStorage.removeItem(
                                "transparentBgImgprimaryTransparent"
                            ),
                            localStorage.removeItem("darkPrimary"),
                            localStorage.removeItem("primaryColor"),
                            localStorage.removeItem("primaryHoverColor"),
                            localStorage.removeItem("primaryBorderColor"),
                            localStorage.removeItem("primaryTransparent"),
                            localStorage.removeItem("BgImage"),
                            document
                                .querySelector("body")
                                .classList.add("transparent-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("light-mode"),
                            document
                                .querySelector("body")
                                .classList.remove("dark-mode"),
                            null === (e = document.querySelector("body")) ||
                                void 0 === e ||
                                e.classList.remove("bg-img1"),
                            null === (o = document.querySelector("body")) ||
                                void 0 === o ||
                                o.classList.remove("bg-img2"),
                            null === (r = document.querySelector("body")) ||
                                void 0 === r ||
                                r.classList.remove("bg-img3"),
                            null === (a = document.querySelector("body")) ||
                                void 0 === a ||
                                a.classList.remove("bg-img4"),
                            $("#myonoffswitchTransparent").prop("checked", !0),
                            (0, t.F)();
                    }),
                    document
                        .querySelectorAll(".bg-img")
                        .forEach(function (e, o) {
                            e.addEventListener("click", function (e) {
                                !(function (e) {
                                    var o, r;
                                    $("#myonoffswitch3").prop("checked", !1),
                                        $("#myonoffswitch6").prop(
                                            "checked",
                                            !1
                                        ),
                                        $("#myonoffswitch5").prop(
                                            "checked",
                                            !1
                                        ),
                                        $("#myonoffswitch8").prop(
                                            "checked",
                                            !1
                                        );
                                    var a = e.getAttribute("class");
                                    localStorage.setItem("BgImage", a),
                                        localStorage.removeItem("darkPrimary"),
                                        localStorage.removeItem("primaryColor"),
                                        localStorage.removeItem(
                                            "transparentBgColor"
                                        ),
                                        localStorage.removeItem(
                                            "transparentThemeColor"
                                        ),
                                        localStorage.removeItem(
                                            "transparentprimaryTransparent"
                                        ),
                                        document
                                            .querySelector("body")
                                            .classList.add("transparent-mode"),
                                        null ===
                                            (o =
                                                document.querySelector(
                                                    "body"
                                                )) ||
                                            void 0 === o ||
                                            o.classList.remove("light-mode"),
                                        null ===
                                            (r =
                                                document.querySelector(
                                                    "body"
                                                )) ||
                                            void 0 === r ||
                                            r.classList.remove("dark-mode"),
                                        $("#myonoffswitchTransparent").prop(
                                            "checked",
                                            !0
                                        ),
                                        (0, t.F)();
                                })(this);
                            });
                        });
                var u = document.querySelector(
                    "#transparentBgImgPrimaryColorID"
                );
                null == u ||
                    u.addEventListener("input", function () {
                        var e, o, r, a, l, n;
                        $("#myonoffswitch3").prop("checked", !1),
                            $("#myonoffswitch6").prop("checked", !1),
                            $("#myonoffswitch5").prop("checked", !1),
                            $("#myonoffswitch8").prop("checked", !1);
                        var c = document.getElementById(
                            "transparentBgImgPrimaryColorID"
                        ).value;
                        if (
                            (localStorage.setItem("transparentBgImgPrimary", c),
                            localStorage.setItem(
                                "transparentBgImgprimaryTransparent",
                                c + 20
                            ),
                            0 ==
                                (null ===
                                    (e = document.querySelector("body")) ||
                                void 0 === e
                                    ? void 0
                                    : e.classList.contains("bg-img1")) &&
                                0 ==
                                    (null ===
                                        (o = document.querySelector("body")) ||
                                    void 0 === o
                                        ? void 0
                                        : o.classList.contains("bg-img2")) &&
                                0 ==
                                    (null ===
                                        (r = document.querySelector("body")) ||
                                    void 0 === r
                                        ? void 0
                                        : r.classList.contains("bg-img3")) &&
                                0 ==
                                    (null ===
                                        (a = document.querySelector("body")) ||
                                    void 0 === a
                                        ? void 0
                                        : a.classList.contains("bg-img4")))
                        ) {
                            var s;
                            null === (s = document.querySelector("body")) ||
                                void 0 === s ||
                                s.classList.add("bg-img1"),
                                localStorage.setItem("BgImage", "bg-img1");
                        }
                        localStorage.removeItem("darkPrimary"),
                            localStorage.removeItem("primaryColor"),
                            localStorage.removeItem("primaryHoverColor"),
                            localStorage.removeItem("primaryBorderColor"),
                            localStorage.removeItem("primaryTransparent"),
                            localStorage.removeItem("darkprimaryTransparent"),
                            localStorage.removeItem("transparentPrimary"),
                            localStorage.removeItem(
                                "transparentprimaryTransparent"
                            ),
                            document
                                .querySelector("body")
                                .classList.add("transparent-mode"),
                            null === (l = document.querySelector("body")) ||
                                void 0 === l ||
                                l.classList.remove("light-mode"),
                            null === (n = document.querySelector("body")) ||
                                void 0 === n ||
                                n.classList.remove("dark-mode"),
                            $("#myonoffswitchTransparent").prop("checked", !0),
                            (0, t.F)(),
                            q();
                    });
                var y = function (e) {
                    var o = document.querySelector(":root");
                    Object.keys(e).forEach(function (r) {
                        o.style.setProperty(r, e[r]);
                    });
                };
                function p(e) {
                    e.forEach(function (e) {
                        e.addEventListener("click", function (e) {
                            var o = e.target.getAttribute("data-bg-color"),
                                r = e.target.getAttribute("data-bg-hover"),
                                t = e.target.getAttribute("data-bg-border"),
                                a = e.target.getAttribute(
                                    "data-bg-transparent"
                                ),
                                l = e.target.getAttribute("data-primary"),
                                n = e.target.getAttribute(
                                    "data-bg-darktransparent"
                                ),
                                c = e.target.getAttribute("data-primary"),
                                s = e.target.getAttribute("data-body"),
                                m = e.target.getAttribute("data-theme"),
                                d = e.target.getAttribute(
                                    "data-transparentcolor"
                                );
                            y({
                                "--primary-bg-color": o,
                                "--primary-bg-hover": r,
                                "--primary-bg-border": t,
                                "--primary-transparentcolor": a,
                                "--dark-primary": l,
                                "--darkprimary-transparentcolor": n,
                                "--transparent-primary": c,
                                "--transparent-body": s,
                                "--transparent-mode": m,
                                "--transparentprimary-transparentcolor": d,
                            }),
                                $(
                                    "input.input-color-picker[data-id='bg-color']"
                                ).val(o),
                                $(
                                    "input.input-color-picker[data-id1='bg-hover']"
                                ).val(o),
                                $(
                                    "input.input-color-picker[data-id2='bg-border']"
                                ).val(o),
                                $(
                                    "input.input-color-picker[data-id7='transparentcolor']"
                                ).val(o),
                                $(
                                    "input.input-color-picker[data-id3='primary']"
                                ).val(l),
                                $(
                                    "input.input-color-picker[data-id8='transparentcolor']"
                                ).val(l),
                                $(
                                    "input.input-color-picker[data-id4='primary']"
                                ).val(c),
                                $(
                                    "input.input-color-picker[data-id5='body']"
                                ).val(s),
                                $(
                                    "input.input-color-picker[data-id6='theme']"
                                ).val(m),
                                $(
                                    "input.input-color-picker[data-id9='transparentcolor']"
                                ).val(c);
                        });
                    });
                }
                function g(e) {
                    e.forEach(function (e) {
                        null == e ||
                            e.addEventListener("input", function (e) {
                                var o,
                                    r = "--primary-".concat(
                                        e.target.getAttribute("data-id")
                                    ),
                                    t = "--primary-".concat(
                                        e.target.getAttribute("data-id1")
                                    ),
                                    a = "--primary-".concat(
                                        e.target.getAttribute("data-id2")
                                    ),
                                    l = "--primary-".concat(
                                        e.target.getAttribute("data-id7")
                                    ),
                                    n = "--darkprimary-".concat(
                                        e.target.getAttribute("data-id8")
                                    ),
                                    s = "--dark-".concat(
                                        e.target.getAttribute("data-id3")
                                    ),
                                    m = "--transparent-".concat(
                                        e.target.getAttribute("data-id4")
                                    ),
                                    d = "--transparent-".concat(
                                        e.target.getAttribute("data-id5")
                                    ),
                                    i = "--transparent-".concat(
                                        e.target.getAttribute("data-id6")
                                    ),
                                    u = "--transparentprimary-".concat(
                                        e.target.getAttribute("data-id9")
                                    );
                                y(
                                    (c((o = {}), r, e.target.value),
                                    c(o, t, e.target.value + 95),
                                    c(o, a, e.target.value),
                                    c(o, s, e.target.value),
                                    c(o, m, e.target.value),
                                    c(o, d, e.target.value),
                                    c(o, i, e.target.value + 95),
                                    c(o, l, e.target.value + 20),
                                    c(o, n, e.target.value + 20),
                                    c(o, u, e.target.value + 20),
                                    o)
                                );
                            });
                    });
                }
                function v() {
                    var e, o, r, t, a, l, n;
                    (localStorage.primaryColor &&
                        (document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-color",
                                localStorage.primaryColor
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-hover",
                                localStorage.primaryHoverColor
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-border",
                                localStorage.primaryBorderColor
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-transparentcolor",
                                localStorage.primaryTransparent
                            ),
                        document
                            .querySelector("body")
                            .setAttribute(
                                "class",
                                "app sidebar-mini light-mode"
                            ),
                        $("#myonoffswitch3").prop("checked", !0),
                        $("#myonoffswitch6").prop("checked", !0),
                        $("#myonoffswitch1").prop("checked", !0)),
                    localStorage.darkPrimary &&
                        (document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-color",
                                localStorage.darkPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-hover",
                                localStorage.darkPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-border",
                                localStorage.darkPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--dark-primary",
                                localStorage.darkPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--darkprimary-transparentcolor",
                                localStorage.darkprimaryTransparent
                            ),
                        document
                            .querySelector("body")
                            .setAttribute(
                                "class",
                                "app sidebar-mini dark-mode"
                            ),
                        $("#myonoffswitch2").prop("checked", !0)),
                    localStorage.transparentPrimary &&
                        (document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-color",
                                localStorage.transparentPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-hover",
                                localStorage.transparentPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-border",
                                localStorage.transparentPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparent-primary",
                                localStorage.transparentPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparentprimary-transparentcolor",
                                localStorage.transparentprimaryTransparent
                            ),
                        document
                            .querySelector("body")
                            .setAttribute(
                                "class",
                                "app sidebar-mini transparent-mode"
                            ),
                        $("#myonoffswitchTransparent").prop("checked", !0)),
                    localStorage.transparentBgImgPrimary) &&
                        (document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-color",
                                localStorage.transparentBgImgPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-hover",
                                localStorage.transparentBgImgPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--primary-bg-border",
                                localStorage.transparentBgImgPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparent-primary",
                                localStorage.transparentBgImgPrimary
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparentprimary-transparentcolor",
                                localStorage.transparentBgImgprimaryTransparent
                            ),
                        null === (e = document.querySelector("body")) ||
                            void 0 === e ||
                            e.classList.add("transparent-mode"),
                        null === (o = document.querySelector("body")) ||
                            void 0 === o ||
                            o.classList.remove("dark-mode"),
                        null === (r = document.querySelector("body")) ||
                            void 0 === r ||
                            r.classList.remove("light-mode"),
                        $("#myonoffswitchTransparent").prop("checked", !0));
                    (localStorage.transparentBgColor &&
                        (document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparent-body",
                                localStorage.transparentBgColor
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparent-mode",
                                localStorage.transparentThemeColor
                            ),
                        document
                            .querySelector("html")
                            .style.setProperty(
                                "--transparentprimary-transparentcolor",
                                localStorage.transparentprimaryTransparent
                            ),
                        document
                            .querySelector("body")
                            .classList.add("transparent-mode"),
                        document
                            .querySelector("body")
                            .classList.remove("dark-mode"),
                        document
                            .querySelector("body")
                            .classList.remove("light-mode"),
                        $("#myonoffswitchTransparent").prop("checked", !0)),
                    localStorage.BgImage) &&
                        (null === (t = document.querySelector("body")) ||
                            void 0 === t ||
                            t.classList.add("transparent-mode"),
                        null === (a = document.querySelector("body")) ||
                            void 0 === a ||
                            a.classList.add(localStorage.BgImage.split(" ")[0]),
                        null === (l = document.querySelector("body")) ||
                            void 0 === l ||
                            l.classList.remove("dark-mode"),
                        null === (n = document.querySelector("body")) ||
                            void 0 === n ||
                            n.classList.remove("light-mode"),
                        $("#myonoffswitchTransparent").prop("checked", !0));
                }
                $(document).ready(function () {
                    var e = document.querySelectorAll(
                            ".light-mode .switch_section span"
                        ),
                        o = document.querySelectorAll(
                            "input.color-primary-light"
                        );
                    p(e), g(o);
                    var r = document.querySelectorAll(
                            ".dark-mode .switch_section span"
                        ),
                        t = document.querySelectorAll(
                            "input.color-primary-dark"
                        );
                    p(r), g(t);
                    var a = document.querySelectorAll(
                            ".transparent-mode .switch_section span"
                        ),
                        l = document.querySelectorAll(
                            "input.color-primary-transparent"
                        );
                    p(a), g(l);
                    var n = document.querySelectorAll(
                            ".transparent-mode .switch_section span"
                        ),
                        c = document.querySelectorAll(
                            "input.color-bg-transparent"
                        );
                    p(n),
                        g(c),
                        v(),
                        $("#myonoffswitch1").on("click", function () {
                            var e, o, r, t, a, l;
                            null === (e = document.querySelector("body")) ||
                                void 0 === e ||
                                e.classList.remove("dark-mode"),
                                null === (o = document.querySelector("body")) ||
                                    void 0 === o ||
                                    o.classList.remove("transparent-mode"),
                                null === (r = document.querySelector("body")) ||
                                    void 0 === r ||
                                    r.classList.remove("bg-img1"),
                                null === (t = document.querySelector("body")) ||
                                    void 0 === t ||
                                    t.classList.remove("bg-img2"),
                                null === (a = document.querySelector("body")) ||
                                    void 0 === a ||
                                    a.classList.remove("bg-img3"),
                                null === (l = document.querySelector("body")) ||
                                    void 0 === l ||
                                    l.classList.remove("bg-img4"),
                                localStorage.removeItem("BgImage"),
                                $("#myonoffswitch1").prop("checked", !0);
                        }),
                        $("#myonoffswitch2").on("click", function () {
                            var e, o, r, t, a, l;
                            null === (e = document.querySelector("body")) ||
                                void 0 === e ||
                                e.classList.remove("light-mode"),
                                null === (o = document.querySelector("body")) ||
                                    void 0 === o ||
                                    o.classList.remove("transparent-mode"),
                                null === (r = document.querySelector("body")) ||
                                    void 0 === r ||
                                    r.classList.remove("bg-img1"),
                                null === (t = document.querySelector("body")) ||
                                    void 0 === t ||
                                    t.classList.remove("bg-img2"),
                                null === (a = document.querySelector("body")) ||
                                    void 0 === a ||
                                    a.classList.remove("bg-img3"),
                                null === (l = document.querySelector("body")) ||
                                    void 0 === l ||
                                    l.classList.remove("bg-img4"),
                                localStorage.removeItem("BgImage"),
                                $("#myonoffswitch2").prop("checked", !0);
                        }),
                        $("#myonoffswitchTransparent").on("click", function () {
                            var e, o, r, t, a, l;
                            null === (e = document.querySelector("body")) ||
                                void 0 === e ||
                                e.classList.remove("dark-mode"),
                                null === (o = document.querySelector("body")) ||
                                    void 0 === o ||
                                    o.classList.remove("light-mode"),
                                null === (r = document.querySelector("body")) ||
                                    void 0 === r ||
                                    r.classList.remove("bg-img1"),
                                null === (t = document.querySelector("body")) ||
                                    void 0 === t ||
                                    t.classList.remove("bg-img2"),
                                null === (a = document.querySelector("body")) ||
                                    void 0 === a ||
                                    a.classList.remove("bg-img3"),
                                null === (l = document.querySelector("body")) ||
                                    void 0 === l ||
                                    l.classList.remove("bg-img4"),
                                localStorage.removeItem("BgImage"),
                                $("#myonoffswitchTransparent").prop(
                                    "checked",
                                    !0
                                );
                        });
                });
                var h = function (e) {
                    return parseInt(e.repeat(2 / e.length), 16);
                };
                function b(e, o) {
                    if (
                        !(function (e) {
                            return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e);
                        })(e)
                    )
                        return null;
                    var r = Math.floor((e.length - 1) / 3),
                        t = (function (e, o) {
                            return e.match(
                                new RegExp(".{".concat(o, "}"), "g")
                            );
                        })(e.slice(1), r),
                        a = l(t.map(h), 4),
                        n = a[0],
                        c = a[1],
                        s = a[2],
                        m = a[3];
                    return "rgba("
                        .concat(n, ", ")
                        .concat(c, ", ")
                        .concat(s, ", ")
                        .concat(
                            (function (e, o) {
                                return void 0 !== e
                                    ? e / 255
                                    : "number" != typeof o || o < 0 || o > 1
                                    ? 1
                                    : o;
                            })(m, o),
                            ")"
                        );
                }
                var f,
                    S,
                    C,
                    k,
                    I,
                    w = document.querySelector(".resetCustomStyles");
                function q() {
                    (f =
                        localStorage.getItem("primaryColor") ||
                        localStorage.getItem("darkPrimary") ||
                        localStorage.getItem("transparentPrimary") ||
                        localStorage.getItem("transparentBgImgPrimary") ||
                        "#28a3ddc"),
                        (S =
                            localStorage.getItem("primaryColor") ||
                            localStorage.getItem("darkPrimary") ||
                            localStorage.getItem("transparentPrimary") ||
                            localStorage.getItem("transparentBgImgPrimary") ||
                            "#05c3fb"),
                        localStorage.getItem("primaryColor") ||
                            localStorage.getItem("darkPrimary") ||
                            localStorage.getItem("transparentPrimary") ||
                            localStorage.getItem("transparentBgImgPrimary") ||
                            null,
                        localStorage.getItem("primaryColor") ||
                            localStorage.getItem("darkPrimary") ||
                            localStorage.getItem("transparentPrimary") ||
                            localStorage.getItem("transparentBgImgPrimary") ||
                            null,
                        (C = b(f, 0.8)),
                        (k = b(f, 0.2)),
                        (I = b(S, 0.8)),
                        null !== document.querySelector("#transactions") &&
                            (0, a.K)(C, k, I, f);
                    var e = b(f || "#28a3ddc", 0.1);
                    document
                        .querySelector("html")
                        .style.setProperty("--primary01", e);
                    var o = b(f || "#28a3ddc", 0.2);
                    document
                        .querySelector("html")
                        .style.setProperty("--primary02", o);
                    var r = b(f || "#28a3ddc", 0.3);
                    document
                        .querySelector("html")
                        .style.setProperty("--primary03", r);
                    var t = b(f || "#28a3ddc", 0.6);
                    document
                        .querySelector("html")
                        .style.setProperty("--primary06", t);
                    var l = b(f || "#28a3ddc", 0.9);
                    document
                        .querySelector("html")
                        .style.setProperty("--primary09", l);
                }
                null == w ||
                    w.addEventListener("click", function () {
                        var e,
                            o,
                            r,
                            t,
                            a,
                            l,
                            n,
                            c,
                            s,
                            m,
                            d,
                            i,
                            u,
                            y,
                            p,
                            g,
                            v,
                            h,
                            b,
                            f;
                        localStorage.clear(),
                            (document.querySelector("html").style = ""),
                            q(),
                            null === (e = $("body")) ||
                                void 0 === e ||
                                e.removeClass("bg-img4"),
                            null === (o = $("body")) ||
                                void 0 === o ||
                                o.removeClass("bg-img1"),
                            null === (r = $("body")) ||
                                void 0 === r ||
                                r.removeClass("bg-img2"),
                            null === (t = $("body")) ||
                                void 0 === t ||
                                t.removeClass("bg-img3"),
                            null === (a = $("body")) ||
                                void 0 === a ||
                                a.removeClass("transparent-mode"),
                            null === (l = $("body")) ||
                                void 0 === l ||
                                l.removeClass("dark-mode"),
                            null === (n = $("body")) ||
                                void 0 === n ||
                                n.removeClass("dark-menu"),
                            null === (c = $("body")) ||
                                void 0 === c ||
                                c.removeClass("color-menu"),
                            null === (s = $("body")) ||
                                void 0 === s ||
                                s.removeClass("gradient-menu"),
                            null === (m = $("body")) ||
                                void 0 === m ||
                                m.removeClass("dark-header"),
                            null === (d = $("body")) ||
                                void 0 === d ||
                                d.removeClass("color-header"),
                            null === (i = $("body")) ||
                                void 0 === i ||
                                i.removeClass("gradient-header"),
                            null === (u = $("body")) ||
                                void 0 === u ||
                                u.removeClass("layout-boxed"),
                            null === (y = $("body")) ||
                                void 0 === y ||
                                y.removeClass("icontext-menu"),
                            null === (p = $("body")) ||
                                void 0 === p ||
                                p.removeClass("icon-overlay"),
                            null === (g = $("body")) ||
                                void 0 === g ||
                                g.removeClass("closed-leftmenu"),
                            null === (v = $("body")) ||
                                void 0 === v ||
                                v.removeClass("hover-submenu"),
                            null === (h = $("body")) ||
                                void 0 === h ||
                                h.removeClass("hover-submenu1"),
                            null === (b = $("body")) ||
                                void 0 === b ||
                                b.removeClass("sidenav-toggled"),
                            null === (f = $("body")) ||
                                void 0 === f ||
                                f.removeClass("scrollable-layout"),
                            $("body").addClass("light-mode"),
                            $("#myonoffswitch3").prop("checked", !0),
                            $("#myonoffswitch6").prop("checked", !0),
                            $("#myonoffswitch1").prop("checked", !0),
                            $("#myonoffswitch9").prop("checked", !0),
                            $("#myonoffswitch10").prop("checked", !1),
                            $("#myonoffswitch11").prop("checked", !0),
                            $("#myonoffswitch12").prop("checked", !1),
                            $("#myonoffswitch13").prop("checked", !0),
                            $("#myonoffswitch14").prop("checked", !1),
                            $("#myonoffswitch15").prop("checked", !1),
                            $("#myonoffswitch16").prop("checked", !1),
                            $("#myonoffswitch17").prop("checked", !1),
                            $("#myonoffswitch18").prop("checked", !1),
                            $("#myonoffswitchTransparent").prop("checked", !1);
                    }),
                    q();
            },
        },
        o = {};
    function r(t) {
        var a = o[t];
        if (void 0 !== a) return a.exports;
        var l = (o[t] = { exports: {} });
        return e[t](l, l.exports, r), l.exports;
    }
    (r.d = (e, o) => {
        for (var t in o)
            r.o(o, t) &&
                !r.o(e, t) &&
                Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
        (r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o));
    r(8057);
})();
