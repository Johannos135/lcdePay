(() => {
    function a(a, e, o) {
        return (
            e in a
                ? Object.defineProperty(a, e, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (a[e] = o),
            a
        );
    }
    $(function () {
        var e,
            o,
            r,
            t = document.getElementById("chartLine").getContext("2d"),
            n =
                (new Chart(t, {
                    type: "line",
                    data: {
                        labels: [
                            "Sun",
                            "Mon",
                            "Tus",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                        ],
                        datasets: [
                            ((e = {
                                label: "Profits",
                                data: [100, 420, 210, 420, 210, 320, 350],
                                borderWidth: 2,
                                backgroundColor: "transparent",
                                borderColor: "#28a3ddc",
                            }),
                            a(e, "borderWidth", 3),
                            a(e, "pointBackgroundColor", "#ffffff"),
                            a(e, "pointRadius", 2),
                            e),
                            ((o = {
                                label: "Expenses",
                                data: [450, 200, 350, 250, 480, 200, 400],
                                borderWidth: 2,
                                backgroundColor: "transparent",
                                borderColor: "#05c3fb",
                            }),
                            a(o, "borderWidth", 3),
                            a(o, "pointBackgroundColor", "#ffffff"),
                            a(o, "pointRadius", 2),
                            o),
                        ],
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            xAxes: [
                                {
                                    ticks: { fontColor: "#9ba6b5" },
                                    display: !0,
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: { fontColor: "#9ba6b5" },
                                    display: !0,
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                    scaleLabel: {
                                        display: !1,
                                        labelString: "Thousands",
                                        fontColor: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                        },
                        legend: { labels: { fontColor: "#9ba6b5" } },
                    },
                }),
                (t = document.getElementById("chartBar1").getContext("2d")),
                new Chart(t, {
                    type: "bar",
                    data: {
                        labels: [
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
                        datasets: [
                            ((r = {
                                label: "Sales",
                                data: [
                                    200, 450, 290, 367, 256, 543, 345, 290, 367,
                                ],
                                borderWidth: 2,
                                backgroundColor: "#28a3ddc",
                                borderColor: "#28a3ddc",
                            }),
                            a(r, "borderWidth", 2),
                            a(r, "pointBackgroundColor", "#ffffff"),
                            r),
                        ],
                    },
                    options: a(
                        {
                            responsive: !0,
                            maintainAspectRatio: !1,
                            legend: { display: !0 },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: !0,
                                            stepSize: 150,
                                            fontColor: "#9ba6b5",
                                        },
                                        gridLines: {
                                            color: "rgba(119, 119, 142, 0.2)",
                                        },
                                    },
                                ],
                                xAxes: [
                                    {
                                        barPercentage: 0.4,
                                        barValueSpacing: 0,
                                        barDatasetSpacing: 0,
                                        barRadius: 0,
                                        ticks: {
                                            display: !0,
                                            fontColor: "#9ba6b5",
                                        },
                                        gridLines: {
                                            display: !1,
                                            color: "rgba(119, 119, 142, 0.2)",
                                        },
                                    },
                                ],
                            },
                        },
                        "legend",
                        { labels: { fontColor: "#9ba6b5" } }
                    ),
                }),
                (t = document.getElementById("chartBar2")),
                new Chart(t, {
                    type: "bar",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                        ],
                        datasets: [
                            {
                                label: "Data1",
                                data: [65, 59, 80, 81, 56, 55, 40],
                                borderColor: "#28a3ddc",
                                borderWidth: "0",
                                backgroundColor: "#28a3ddc",
                            },
                            {
                                label: "Data2",
                                data: [28, 48, 40, 19, 86, 27, 90],
                                borderColor: "#05c3fb",
                                borderWidth: "0",
                                backgroundColor: "#05c3fb",
                            },
                        ],
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            xAxes: [
                                {
                                    barPercentage: 0.4,
                                    barValueSpacing: 0,
                                    barDatasetSpacing: 0,
                                    barRadius: 0,
                                    ticks: { fontColor: "#9ba6b5" },
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: !0,
                                        fontColor: "#9ba6b5",
                                    },
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                        },
                        legend: { labels: { fontColor: "#9ba6b5" } },
                    },
                }),
                (t = document.getElementById("chartArea")),
                new Chart(t, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                        ],
                        datasets: [
                            {
                                label: "Data1",
                                borderColor: "#28a3ddc",
                                borderWidth: "3",
                                backgroundColor: "rgba(108, 95, 252, .1)",
                                data: [22, 44, 67, 43, 76, 45, 12],
                            },
                            {
                                label: "Data2",
                                borderColor: "rgba(5, 195, 251 ,0.9)",
                                borderWidth: "3",
                                backgroundColor: "rgba(\t5, 195, 251, 0.7)",
                                pointHighlightStroke: "rgba(5, 195, 251 ,1)",
                                data: [16, 32, 18, 26, 42, 33, 44],
                            },
                        ],
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        tooltips: { mode: "index", intersect: !1 },
                        hover: { mode: "nearest", intersect: !0 },
                        scales: {
                            xAxes: [
                                {
                                    ticks: { fontColor: "#9ba6b5" },
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: !0,
                                        fontColor: "#9ba6b5",
                                    },
                                    gridLines: {
                                        color: "rgba(119, 119, 142, 0.2)",
                                    },
                                },
                            ],
                        },
                        legend: { labels: { fontColor: "#9ba6b5" } },
                    },
                }),
                {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                        {
                            data: [20, 20, 30, 5, 25],
                            backgroundColor: [
                                "#28a3ddc",
                                "#05c3fb",
                                "#09ad95",
                                "#1170e4",
                                "#e82646",
                            ],
                        },
                    ],
                }),
            l = {
                maintainAspectRatio: !1,
                responsive: !0,
                legend: { display: !1 },
                animation: { animateScale: !0, animateRotate: !0 },
            },
            i = document.getElementById("chartPie"),
            d =
                (new Chart(i, { type: "doughnut", data: n, options: l }),
                document.getElementById("chartDonut"));
        new Chart(d, { type: "pie", data: n, options: l }),
            (t = document.getElementById("chartRadar")),
            new Chart(t, {
                type: "radar",
                data: {
                    labels: [
                        ["Eating", "Dinner"],
                        ["Drinking", "Water"],
                        "Sleeping",
                        ["Designing", "Graphics"],
                        "Coding",
                        "Cycling",
                        "Running",
                    ],
                    datasets: [
                        {
                            label: "Data1",
                            data: [65, 59, 66, 45, 56, 55, 40],
                            borderColor: "rgba(108, 95, 252, .8)",
                            borderWidth: "1",
                            backgroundColor: "rgba(108, 95, 252, .4)",
                        },
                        {
                            label: "Data2",
                            data: [28, 12, 40, 19, 63, 27, 87],
                            borderColor: "rgba(5, 195, 251,0.8)",
                            borderWidth: "1",
                            backgroundColor: "rgba(5, 195, 251,0.4)",
                        },
                    ],
                },
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: { display: !1 },
                    scale: {
                        angleLines: { color: "#9ba6b5" },
                        gridLines: { color: "rgba(119, 119, 142, 0.2)" },
                        ticks: { beginAtZero: !0 },
                        pointLabels: { fontColor: "#9ba6b5" },
                    },
                },
            }),
            (t = document.getElementById("chartPolar")),
            new Chart(t, {
                type: "polarArea",
                data: {
                    datasets: [
                        {
                            data: [18, 15, 9, 6, 19],
                            backgroundColor: [
                                "#28a3ddc",
                                "#05c3fb",
                                "#09ad95",
                                "#1170e4",
                                "#e82646",
                            ],
                            hoverBackgroundColor: [
                                "#28a3ddc",
                                "#05c3fb",
                                "#09ad95",
                                "#1170e4",
                                "#e82646",
                            ],
                            borderColor: "transparent",
                        },
                    ],
                    labels: ["Data1", "Data2", "Data3", "Data4"],
                },
                options: {
                    scale: { gridLines: { color: "rgba(119, 119, 142, 0.2)" } },
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: { labels: { fontColor: "#9ba6b5" } },
                },
            });
    });
})();
