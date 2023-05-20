$(function (e) {
    "use strict";
    var t = [
            { name: "sales", type: "bar", data: [10, 15, 9, 18, 10, 15] },
            {
                name: "profit",
                type: "line",
                smooth: !0,
                data: [8, 5, 25, 10, 10],
            },
            { name: "growth", type: "bar", data: [10, 14, 10, 15, 9, 25] },
        ],
        i = document.getElementById("echart1"),
        a = {
            grid: { top: "6", right: "0", bottom: "17", left: "25" },
            xAxis: {
                data: ["2014", "2015", "2016", "2017", "2018"],
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            tooltip: {
                show: !0,
                showContent: !0,
                alwaysShowContent: !0,
                triggerOn: "mousemove",
                trigger: "axis",
                axisPointer: { label: { show: !1 } },
            },
            yAxis: {
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: t,
            color: ["#28a3ddc", "#09ad95", "#05c3fb"],
        };
    echarts.init(i).setOption(a);
    var o = [
            {
                name: "sales",
                type: "line",
                smooth: !0,
                data: [12, 25, 12, 35, 12, 38],
                color: ["#28a3ddc"],
            },
            {
                name: "Profit",
                type: "line",
                smooth: !0,
                size: 10,
                data: [8, 12, 28, 10, 10, 12],
                color: ["#05c3fb"],
            },
        ],
        l = document.getElementById("echart2"),
        r = {
            grid: { top: "6", right: "0", bottom: "17", left: "25" },
            xAxis: {
                data: ["2014", "2015", "2016", "2017", "2018"],
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: o,
        };
    echarts.init(l).setOption(r);
    var n = {
            grid: { top: "6", right: "0", bottom: "17", left: "32" },
            xAxis: {
                type: "value",
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                type: "category",
                data: ["2014", "2015", "2016", "2017", "2018"],
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "#c0dfd8" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: t,
            color: ["#28a3ddc", "#09ad95", "#05c3fb"],
        },
        s = document.getElementById("echart3");
    echarts.init(s).setOption(n);
    var c = {
            grid: { top: "6", right: "0", bottom: "17", left: "32" },
            xAxis: {
                type: "value",
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                type: "category",
                data: ["2014", "2015", "2016", "2017", "2018"],
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: o,
            color: ["#1170e4", "#d43f8d", "#09ad95"],
        },
        b = document.getElementById("echart4");
    echarts.init(b).setOption(c);
    var y = [
            {
                name: "sales",
                type: "bar",
                stack: "Stack",
                data: [14, 18, 20, 14, 29, 21, 25, 14, 24],
            },
            {
                name: "Profit",
                type: "bar",
                stack: "Stack",
                data: [12, 14, 15, 50, 24, 24, 10, 20, 30],
            },
        ],
        x = {
            grid: { top: "6", right: "0", bottom: "17", left: "25" },
            xAxis: {
                data: [
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                ],
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: y,
            color: ["#28a3ddc", "#05c3fb"],
        },
        g = document.getElementById("echart5");
    echarts.init(g).setOption(x);
    var d = {
            grid: { top: "6", right: "10", bottom: "17", left: "32" },
            xAxis: {
                type: "value",
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                type: "category",
                data: [
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                ],
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: y,
            color: ["#28a3ddc", "#05c3fb"],
        },
        f = document.getElementById("echart6");
    echarts.init(f).setOption(d);
    var S = {
            grid: { top: "6", right: "0", bottom: "17", left: "25" },
            xAxis: {
                data: [
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                ],
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: [
                {
                    name: "data",
                    type: "line",
                    data: [20, 20, 36, 18, 15, 20, 25, 20],
                },
            ],
            color: ["#28a3ddc"],
        },
        p = document.getElementById("echart7");
    echarts.init(p).setOption(S);
    var L = {
            grid: { top: "6", right: "0", bottom: "17", left: "25" },
            xAxis: {
                data: [
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                ],
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            yAxis: {
                splitLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLine: { lineStyle: { color: "rgba(119, 119, 142, 0.2)" } },
                axisLabel: { fontSize: 10, color: "#9ba6b5" },
            },
            series: [
                {
                    name: "data",
                    type: "line",
                    smooth: !0,
                    data: [20, 20, 36, 18, 15, 20, 25, 20],
                },
            ],
            color: ["#05c3fb"],
        },
        m = document.getElementById("echart8");
    echarts.init(m).setOption(L);
});
