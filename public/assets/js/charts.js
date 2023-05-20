!(function (a) {
    "use strict";
    c3.generate({
        bindto: "#chart-employment",
        data: {
            columns: [
                ["data1", 9, 4, 9, 11, 15, 17],
                ["data2", 7, 17, 13, 17, 25, 28],
                ["data3", 18, 19, 22, 21, 32, 28],
            ],
            type: "line",
            colors: { data1: "#28a3ddc", data2: "#05c3fb", data3: "#09ad95" },
            names: { data1: "May", data2: "June", data3: "July" },
        },
        axis: {
            x: {
                type: "category",
                categories: ["2013", "2014", "2015", "2016", "2017", "2018"],
            },
        },
        legend: { show: !1 },
        padding: { bottom: 0, top: 0 },
    }),
        c3.generate({
            bindto: "#chart-temperature",
            data: {
                columns: [
                    [
                        "data1",
                        8,
                        7.9,
                        10.5,
                        15.5,
                        19.4,
                        22.5,
                        26.2,
                        27.5,
                        24.3,
                        19.3,
                        14.9,
                        10.6,
                    ],
                    [
                        "data2",
                        4.9,
                        5.2,
                        6.7,
                        9.5,
                        12.9,
                        16.2,
                        18,
                        17.6,
                        15.2,
                        11.3,
                        7.6,
                        5.8,
                    ],
                ],
                labels: !0,
                type: "line",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "India", data2: "USA" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-area",
            data: {
                columns: [
                    ["data1", 12, 8, 16, 19, 20, 18],
                    ["data2", 12, 5, 6, 8, 10, 13],
                ],
                type: "area",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-area-spline",
            data: {
                columns: [
                    ["data1", 10, 8, 10, 12, 20, 18],
                    ["data2", 8, 12, 8, 20, 10, 13],
                ],
                type: "area-spline",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "data1", data2: "data2" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-area-spline-sracked",
            data: {
                columns: [
                    ["data1", 12, 9, 16, 19, 20, 18],
                    ["data2", 8, 8, 6, 8, 10, 13],
                ],
                type: "area-spline",
                groups: [["data1", "data2"]],
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-sracked",
            data: {
                columns: [["data1", 0, 9, 16, 19, 30, 25, 19, 12, 0]],
                type: "area-spline",
                groups: [["data1", "data2"]],
                colors: { data1: "#28a3ddc" },
                names: { data1: "Maximum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-spline",
            data: {
                columns: [
                    [
                        "data1",
                        0,
                        0,
                        0.2,
                        0.5,
                        0.6,
                        1.2,
                        2.5,
                        2.9,
                        4.5,
                        4.9,
                        5.2,
                        5.8,
                        6.5,
                        6.7,
                        7.4,
                        4.9,
                        6.4,
                        5.4,
                        10.8,
                        6.8,
                        5.2,
                        11.9,
                    ],
                    [
                        "data2",
                        0,
                        0,
                        0,
                        0,
                        0.3,
                        0.2,
                        0.5,
                        0.6,
                        1.5,
                        1.8,
                        1.9,
                        2.5,
                        1.6,
                        3.8,
                        3.9,
                        3.6,
                        1.8,
                        1.8,
                        1.9,
                        2.8,
                        5.4,
                        7.8,
                        10.9,
                    ],
                ],
                labels: !0,
                type: "spline",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "USA", data2: "India" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-spline-rotated",
            data: {
                columns: [
                    ["data1", 12, 7, 8, 6, 8, 9, 12],
                    ["data2", 8, 10, 10, 9, 7, 10, 8],
                ],
                type: "spline",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
                rotated: !0,
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-step",
            data: {
                columns: [
                    ["data1", 10, 15, 10, 18, 19, 15],
                    ["data2", 7, 7, 5, 7, 9, 12],
                ],
                type: "step",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-area-step",
            data: {
                columns: [
                    ["data1", 15, 14, 18, 19, 20, 18],
                    ["data2", 10, 10, 12, 14, 15, 13],
                ],
                type: "area-step",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-bar",
            data: {
                columns: [
                    ["data1", 11, 8, 15, 18, 19, 17],
                    ["data2", 7, 7, 5, 7, 9, 12],
                ],
                type: "bar",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
            },
            bar: { width: 16 },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-monthly",
            data: {
                columns: [
                    ["data1", 11, 8, 35, 18, 19, 17, 33, 39, 48, 57, 39, 63],
                ],
                type: "bar",
                colors: { data1: "#28a3ddc" },
                names: { data1: "Maximum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                },
            },
            bar: { width: 30 },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-bar-rotated",
            data: {
                columns: [
                    ["data1", 11, 8, 15, 18, 19, 17],
                    ["data2", 7, 7, 5, 7, 9, 12],
                ],
                type: "bar",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
                rotated: !0,
            },
            bar: { width: 15 },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-bar-stacked",
            data: {
                columns: [
                    ["data1", 11, 8, 15, 18, 19, 17, 20, 25, 32, 20, 14, 20],
                    ["data2", 7, 7, 5, 7, 9, 12, 4, 6, 2, 5, 2, 8],
                ],
                type: "bar",
                groups: [["data1", "data2"]],
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                },
            },
            bar: { width: 16 },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-pie",
            data: {
                columns: [
                    ["data1", 63],
                    ["data2", 44],
                    ["data3", 12],
                    ["data4", 14],
                ],
                type: "pie",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                },
                names: { data1: "A", data2: "B", data3: "C", data4: "D" },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-pie2",
            data: {
                columns: [
                    ["data1", 63],
                    ["data2", 40],
                    ["data3", 12],
                    ["data4", 14],
                    ["data5", 20],
                    ["data6", 29],
                ],
                type: "pie",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                    data5: "#f82649",
                    data6: "#f7b731",
                },
                names: {
                    data1: "A",
                    data2: "B",
                    data3: "C",
                    data4: "D",
                    data5: "E",
                    data6: "F",
                },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-pie3",
            data: {
                columns: [
                    ["data1", 63],
                    ["data2", 44],
                    ["data3", 28],
                ],
                type: "pie",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                },
                names: { data1: "A", data2: "B", data3: "C" },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-pie4",
            data: {
                columns: [
                    ["data1", 58],
                    ["data2", 45],
                    ["data3", 20],
                    ["data4", 14],
                ],
                type: "pie",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                },
                names: { data1: "A", data2: "B", data3: "C", data4: "D" },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-donut",
            data: {
                columns: [
                    ["data1", 78],
                    ["data2", 95],
                    ["data3", 25],
                ],
                type: "donut",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                },
                names: { data1: "sales1", data2: "sales2", data3: "sales3" },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-donut2",
            data: {
                columns: [
                    ["data1", 78],
                    ["data2", 95],
                    ["data3", 25],
                    ["data4", 45],
                    ["data5", 75],
                    ["data6", 25],
                ],
                type: "donut",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                    data5: "#f82649",
                    data6: "#f7b731",
                },
                names: {
                    data1: "sales1",
                    data2: "sales2",
                    data3: "sales3",
                    data4: "sales4",
                    data5: "sales5",
                    data6: "sales6",
                },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-donut3",
            data: {
                columns: [
                    ["data1", 78],
                    ["data2", 95],
                ],
                type: "donut",
                colors: { data1: "#28a3ddc", data2: "#05c3fb" },
                names: { data1: "sales1", data2: "sales2" },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-donut4",
            data: {
                columns: [
                    ["data1", 78],
                    ["data2", 95],
                    ["data3", 25],
                    ["data4", 45],
                ],
                type: "donut",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                },
                names: {
                    data1: "sales1",
                    data2: "sales2",
                    data3: "sales3",
                    data4: "sales4",
                },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-donut5",
            data: {
                columns: [
                    ["data1", 78],
                    ["data2", 95],
                    ["data3", 25],
                    ["data4", 45],
                ],
                type: "donut",
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                    data4: "#1170e4",
                },
                names: {
                    data1: "USA",
                    data2: "Canada",
                    data3: "India",
                    data4: "France",
                },
            },
            axis: {},
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-scatter",
            data: {
                columns: [
                    ["data1", 11, 8, 15, 18, 19, 17],
                    ["data2", 7, 7, 5, 7, 9, 12],
                ],
                type: "scatter",
                colors: { data1: "green", data2: "red" },
                names: { data1: "Maximum", data2: "Minimum" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["May", "Jun", "July", "Aug", "Sep", "Oct"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-combination",
            data: {
                columns: [
                    ["data1", 100, 130, 150, 240, 130, 220],
                    ["data2", 250, 200, 220, 400, 250, 350],
                    ["data3", 100, 130, 150, 240, 130, 220],
                ],
                type: "bar",
                types: { data1: "line", data2: "spline" },
                groups: [["data3"]],
                colors: {
                    data1: "#28a3ddc",
                    data2: "#05c3fb",
                    data3: "#09ad95",
                },
                color: function (a, t) {
                    return t.id && "data3" === t.id ? d3.rgb(98, 89, 202) : a;
                },
                names: {
                    data1: "Marketing",
                    data2: "Development",
                    data3: "Sales",
                },
            },
            axis: {
                x: {
                    type: "category",
                    categories: [
                        "2007-20082008",
                        "2009-2010",
                        "2011-2012",
                        "2013-2014",
                        "2015-2016",
                        "2017-2018",
                    ],
                },
            },
            bar: { width: 50 },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        }),
        c3.generate({
            bindto: "#chart-wrapper",
            data: {
                columns: [
                    [
                        "data1",
                        7,
                        6.9,
                        9.5,
                        14.5,
                        18.4,
                        21.5,
                        25.2,
                        26.5,
                        23.3,
                        18.3,
                        13.9,
                        9.6,
                    ],
                    [
                        "data2",
                        3.9,
                        4.2,
                        5.7,
                        8.5,
                        11.9,
                        15.2,
                        17,
                        16.6,
                        14.2,
                        10.3,
                        6.6,
                        4.8,
                    ],
                ],
                labels: !0,
                type: "line",
                colors: { data1: "purple", data2: "pink" },
                names: { data1: "Tokyo", data2: "London" },
            },
            axis: {
                x: {
                    type: "category",
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
            },
            legend: { show: !1 },
            padding: { bottom: 0, top: 0 },
        });
})(jQuery);
