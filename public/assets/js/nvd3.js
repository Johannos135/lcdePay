(() => {
    var t;
    (historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                { label: "A", value: 24, color: "#28a3ddc" },
                { label: "B", value: 10, color: "#05c3fb" },
                { label: "C", value: 35, color: "#09ad95" },
                { label: "D", value: 150, color: "#28a3ddc" },
                { label: "E", value: 120, color: "#1170e4" },
                { label: "F", value: 95, color: "#f82649" },
                { label: "G", value: 13, color: "#17a2b8" },
                { label: "H", value: 5, color: "#ecb403" },
            ],
        },
    ]),
        nv.addGraph(function () {
            var t = nv.models
                .discreteBarChart()
                .x(function (t) {
                    return t.label;
                })
                .y(function (t) {
                    return t.value;
                })
                .staggerLabels(!0)
                .showValues(!0)
                .duration(250);
            return (
                d3.select("#nvd3-chart1 svg").datum(historicalBarChart).call(t),
                nv.utils.windowResize(t.update),
                t
            );
        }),
        nv.addGraph(function () {
            return (
                (t = nv.models.historicalBarChart())
                    .margin({ left: 50, bottom: 50 })
                    .useInteractiveGuideline(!0)
                    .duration(250),
                t.xAxis.axisLabel("").tickFormat(d3.format(",.1f")),
                t.yAxis.axisLabel("").tickFormat(d3.format(",.2f")),
                t.showXAxis(!0),
                d3
                    .select("#nvd3-chart2")
                    .datum(
                        (function () {
                            for (var t = [], e = 0; e < 10; e++)
                                t.push({
                                    x: e,
                                    y: Math.sin(e / 10) * Math.random() * 10,
                                });
                            return [
                                {
                                    values: t,
                                    key: "Sine Wave",
                                    color: "#28a3ddc",
                                },
                            ];
                        })()
                    )
                    .transition()
                    .call(t),
                nv.utils.windowResize(t.update),
                t.dispatch.on("stateChange", function (t) {
                    nv.log("New State:", JSON.stringify(t));
                }),
                t
            );
        }),
        nv.addGraph(function () {
            var t = nv.models.lineChart(),
                e = 1;
            function a() {
                var a = 600 * e,
                    r = 300 * e;
                t.width(a).height(r),
                    d3
                        .select("#nvd3-chart3 svg")
                        .attr("viewBox", "0 0 " + a + " " + r)
                        .transition()
                        .duration(500)
                        .call(t);
            }
            function r() {
                var e = d3.select("#nvd3-chart3"),
                    a = e.select("svg"),
                    r = t.width() / t.height(),
                    l = parseInt(e.style("width"));
                a.attr("width", l), a.attr("height", Math.round(l / r));
            }
            return (
                t.useInteractiveGuideline(!0),
                t.xAxis.tickFormat(d3.format(",r")),
                t.lines.dispatch.on("elementClick", function (t) {
                    console.log(t);
                }),
                t.yAxis.axisLabel("Voltage (v)").tickFormat(d3.format(",.2f")),
                d3
                    .select("#nvd3-chart3 svg")
                    .attr("perserveAspectRatio", "xMinYMid")
                    .attr("width", 600)
                    .attr("height", 300)
                    .datum(
                        (function () {
                            for (var t = [], e = [], a = 0; a < 10; a++)
                                t.push({ x: a, y: Math.sin(a / 10) }),
                                    e.push({ x: a, y: 0.5 * Math.cos(a / 10) });
                            return [
                                {
                                    values: t,
                                    key: "Sine Wave",
                                    color: "#28a3ddc",
                                },
                                {
                                    values: e,
                                    key: "Cosine Wave",
                                    color: "#28a3ddc",
                                },
                            ];
                        })()
                    ),
                a(),
                r(),
                nv.utils.windowResize(r),
                d3.select("#zoomIn").on("click", function () {
                    if (e <= 0.5) return;
                    (e -= 0.25), a();
                }),
                d3.select("#zoomOut").on("click", function () {
                    (e += 0.25), a();
                }),
                t
            );
        });
})();
