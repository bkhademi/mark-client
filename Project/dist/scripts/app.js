"use strict";

(function() {
    angular.module("app.chart.ctrls", []).controller("chartCtrl", [ "$scope", function($scope) {
        return $scope.easypiechart = {
            percent: 65,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: "#674E9E",
                lineCap: "round",
                size: 180,
                lineWidth: 5
            }
        }, $scope.easypiechart2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: "#A3C86D",
                lineCap: "round",
                size: 180,
                lineWidth: 10
            }
        }, $scope.easypiechart3 = {
            percent: 68,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: "#7ACBEE",
                lineCap: "square",
                size: 180,
                lineWidth: 20,
                scaleLength: 0
            }
        }, $scope.gaugeChart1 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 40,
                val: 1375
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#000000"
                },
                limitMax: "false",
                colorStart: "#A3C86D",
                colorStop: "#A3C86D",
                strokeColor: "#E0E0E0",
                generateGradient: !0,
                percentColors: [ [ 0, "#A3C86D" ], [ 1, "#A3C86D" ] ]
            }
        }, $scope.gaugeChart2 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 45,
                val: 1200
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#7ACBEE",
                colorStop: "#7ACBEE",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [ [ 0, "#7ACBEE" ], [ 1, "#7ACBEE" ] ]
            }
        }, $scope.gaugeChart3 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 50,
                val: 1100
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#FF7857",
                colorStop: "#FF7857",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [ [ 0, "#FF7857" ], [ 1, "#FF7857" ] ]
            }
        };
    } ]).controller("morrisChartCtrl", [ "$scope", function($scope) {
        return $scope.mainData = [ {
            month: "2013-01",
            xbox: 294e3,
            will: 136e3,
            playstation: 244e3
        }, {
            month: "2013-02",
            xbox: 228e3,
            will: 335e3,
            playstation: 127e3
        }, {
            month: "2013-03",
            xbox: 199e3,
            will: 159e3,
            playstation: 13e4
        }, {
            month: "2013-04",
            xbox: 174e3,
            will: 16e4,
            playstation: 82e3
        }, {
            month: "2013-05",
            xbox: 255e3,
            will: 318e3,
            playstation: 82e3
        }, {
            month: "2013-06",
            xbox: 298400,
            will: 401800,
            playstation: 98600
        }, {
            month: "2013-07",
            xbox: 37e4,
            will: 225e3,
            playstation: 159e3
        }, {
            month: "2013-08",
            xbox: 376700,
            will: 303600,
            playstation: 13e4
        }, {
            month: "2013-09",
            xbox: 527800,
            will: 301e3,
            playstation: 119400
        } ], $scope.simpleData = [ {
            year: "2008",
            value: 20
        }, {
            year: "2009",
            value: 10
        }, {
            year: "2010",
            value: 5
        }, {
            year: "2011",
            value: 5
        }, {
            year: "2012",
            value: 20
        }, {
            year: "2013",
            value: 19
        } ], $scope.comboData = [ {
            year: "2008",
            a: 20,
            b: 16,
            c: 12
        }, {
            year: "2009",
            a: 10,
            b: 22,
            c: 30
        }, {
            year: "2010",
            a: 5,
            b: 14,
            c: 20
        }, {
            year: "2011",
            a: 5,
            b: 12,
            c: 19
        }, {
            year: "2012",
            a: 20,
            b: 19,
            c: 13
        }, {
            year: "2013",
            a: 28,
            b: 22,
            c: 20
        } ], $scope.donutData = [ {
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }, {
            label: "Online Sales",
            value: 19
        } ];
    } ]).controller("flotChartCtrl", [ "$scope", function($scope) {
        var areaChart, barChart;
        return areaChart = {}, areaChart.data1 = [ [ 2007, 15 ], [ 2008, 20 ], [ 2009, 10 ], [ 2010, 5 ], [ 2011, 5 ], [ 2012, 20 ], [ 2013, 28 ] ], 
        areaChart.data2 = [ [ 2007, 15 ], [ 2008, 16 ], [ 2009, 22 ], [ 2010, 14 ], [ 2011, 12 ], [ 2012, 19 ], [ 2013, 22 ] ], 
        $scope.area = {}, $scope.area.data = [ {
            data: areaChart.data1,
            label: "Value A",
            lines: {
                fill: !0
            }
        }, {
            data: areaChart.data2,
            label: "Value B",
            points: {
                show: !0
            },
            yaxis: 2
        } ], $scope.area.options = {
            series: {
                lines: {
                    show: !0,
                    fill: !1
                },
                points: {
                    show: !0,
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: [ "#A3C86D", "#FF7857" ],
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            xaxis: {
                mode: "time"
            },
            yaxes: [ {}, {
                position: "right"
            } ]
        }, barChart = {}, barChart.data1 = [ [ 2008, 20 ], [ 2009, 10 ], [ 2010, 5 ], [ 2011, 5 ], [ 2012, 20 ], [ 2013, 28 ] ], 
        barChart.data2 = [ [ 2008, 16 ], [ 2009, 22 ], [ 2010, 14 ], [ 2011, 12 ], [ 2012, 19 ], [ 2013, 22 ] ], 
        barChart.data3 = [ [ 2008, 12 ], [ 2009, 30 ], [ 2010, 20 ], [ 2011, 19 ], [ 2012, 13 ], [ 2013, 20 ] ], 
        $scope.barChart = {}, $scope.barChart.data = [ {
            label: "Value A",
            data: barChart.data1
        }, {
            label: "Value B",
            data: barChart.data2
        }, {
            label: "Value C",
            data: barChart.data3
        } ], $scope.barChart.options = {
            series: {
                stack: !0,
                bars: {
                    show: !0,
                    fill: 1,
                    barWidth: .3,
                    align: "center",
                    horizontal: !1,
                    order: 1
                }
            },
            grid: {
                hoverable: !0,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [ "#A3C86D", "#7ACBEE", "#FDD761", "#FF7857" ]
        }, $scope.pieChart = {}, $scope.pieChart.data = [ {
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        } ], $scope.pieChart.options = {
            series: {
                pie: {
                    show: !0
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [ "#A3C86D", "#7ACBEE", "#FDD761", "#FF7857" ],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }, $scope.donutChart = {}, $scope.donutChart.data = [ {
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        } ], $scope.donutChart.options = {
            series: {
                pie: {
                    show: !0,
                    innerRadius: .5
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [ "#A3C86D", "#7ACBEE", "#FDD761", "#FF7857" ],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        };
    } ]).controller("flotChartCtrl.realtime", [ "$scope", function($scope) {} ]).controller("sparklineCtrl", [ "$scope", function($scope) {
        return $scope.demoData1 = {
            data: [ 3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7 ],
            options: {
                type: "line",
                lineColor: "#fff",
                highlightLineColor: "#fff",
                fillColor: "#A3C86D",
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, $scope.simpleChart1 = {
            data: [ 3, 1, 2, 3, 5, 3, 4, 2 ],
            options: {
                type: "line",
                lineColor: "#1FB5AD",
                fillColor: "#bce0df",
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1
            }
        }, $scope.simpleChart2 = {
            data: [ 3, 1, 2, 3, 5, 3, 4, 2 ],
            options: {
                type: "bar",
                barColor: "#1FB5AD"
            }
        }, $scope.simpleChart3 = {
            data: [ 3, 1, 2, 3, 5, 3, 4, 2 ],
            options: {
                type: "pie",
                sliceColors: [ "#1fb5ad", "#95b75d", "#57c8f1", "#8175c7", "#f3c022", "#fa8564" ]
            }
        }, $scope.tristateChart1 = {
            data: [ 1, 2, -3, -5, 3, 1, -4, 2 ],
            options: {
                type: "tristate",
                posBarColor: "#95b75d",
                negBarColor: "#fa8564"
            }
        }, $scope.largeChart1 = {
            data: [ 3, 1, 2, 3, 5, 3, 4, 2 ],
            options: {
                type: "line",
                lineColor: "#674E9E",
                highlightLineColor: "#7ACBEE",
                fillColor: "#927ED1",
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, $scope.largeChart2 = {
            data: [ 3, 1, 2, 3, 5, 3, 4, 2 ],
            options: {
                type: "bar",
                barColor: "#A3C86D",
                barWidth: 10,
                width: "100%",
                height: "150px"
            }
        }, $scope.largeChart3 = {
            data: [ 3, 1, 2, 3, 5 ],
            options: {
                type: "pie",
                sliceColors: [ "#A3C86D", "#7ACBEE", "#927ED1", "#FDD761", "#FF7857", "#674E9E" ],
                width: "150px",
                height: "150px"
            }
        };
    } ]);
}).call(this), function() {
    angular.module("app.chart.directives", []).directive("gaugeChart", [ function() {
        return {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: function(scope, ele, attrs) {
                var data, gauge, options;
                return data = scope.data, options = scope.options, gauge = new Gauge(ele[0]).setOptions(options), 
                gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val);
            }
        };
    } ]).directive("flotChart", [ function() {
        return {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: function(scope, ele, attrs) {
                var data, options, plot;
                return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options);
            }
        };
    } ]).directive("flotChartRealtime", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele, attrs) {
                var data, getRandomData, plot, totalPoints, update, updateInterval;
                return data = [], totalPoints = 300, getRandomData = function() {
                    var i, prev, res, y;
                    for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints; ) prev = data.length > 0 ? data[data.length - 1] : 50, 
                    y = prev + 10 * Math.random() - 5, y < 0 ? y = 0 : y > 100 && (y = 100), data.push(y);
                    for (res = [], i = 0; i < data.length; ) res.push([ i, data[i] ]), ++i;
                    return res;
                }, update = function() {
                    plot.setData([ getRandomData() ]), plot.draw(), setTimeout(update, updateInterval);
                }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [ getRandomData() ], {
                    series: {
                        lines: {
                            show: !0,
                            fill: !0
                        },
                        shadowSize: 0
                    },
                    yaxis: {
                        min: 0,
                        max: 100
                    },
                    xaxis: {
                        show: !1
                    },
                    grid: {
                        hoverable: !0,
                        borderWidth: 1,
                        borderColor: "#eeeeee"
                    },
                    colors: [ "#cadcaf" ]
                }), update();
            }
        };
    } ]).directive("sparkline", [ function() {
        return {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: function(scope, ele, attrs) {
                var data, options, sparkResize, sparklineDraw;
                return data = scope.data, options = scope.options, sparkResize = void 0, sparklineDraw = function() {
                    return ele.sparkline(data, options);
                }, $(window).resize(function(e) {
                    return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200);
                }), sparklineDraw();
            }
        };
    } ]).directive("morrisChart", [ function() {
        return {
            restrict: "A",
            scope: {
                data: "="
            },
            link: function(scope, ele, attrs) {
                var colors, data, func, options;
                switch (data = scope.data, attrs.type) {
                  case "line":
                    return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), 
                    options = {
                        element: ele[0],
                        data: data,
                        xkey: attrs.xkey,
                        ykeys: JSON.parse(attrs.ykeys),
                        labels: JSON.parse(attrs.labels),
                        lineWidth: attrs.lineWidth || 2,
                        lineColors: colors || [ "#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed" ],
                        resize: !0
                    }, new Morris.Line(options);

                  case "area":
                    return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), 
                    options = {
                        element: ele[0],
                        data: data,
                        xkey: attrs.xkey,
                        ykeys: JSON.parse(attrs.ykeys),
                        labels: JSON.parse(attrs.labels),
                        lineWidth: attrs.lineWidth || 2,
                        lineColors: colors || [ "#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed" ],
                        behaveLikeLine: attrs.behaveLikeLine || !1,
                        fillOpacity: attrs.fillOpacity || "auto",
                        pointSize: attrs.pointSize || 4,
                        resize: !0
                    }, new Morris.Area(options);

                  case "bar":
                    return colors = void 0 === attrs.barColors || "" === attrs.barColors ? null : JSON.parse(attrs.barColors), 
                    options = {
                        element: ele[0],
                        data: data,
                        xkey: attrs.xkey,
                        ykeys: JSON.parse(attrs.ykeys),
                        labels: JSON.parse(attrs.labels),
                        barColors: colors || [ "#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed" ],
                        stacked: attrs.stacked || null,
                        resize: !0
                    }, new Morris.Bar(options);

                  case "donut":
                    return colors = void 0 === attrs.colors || "" === attrs.colors ? null : JSON.parse(attrs.colors), 
                    options = {
                        element: ele[0],
                        data: data,
                        colors: colors || [ "#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135" ],
                        resize: !0
                    }, attrs.formatter && (func = new Function("y", "data", attrs.formatter), options.formatter = func), 
                    new Morris.Donut(options);
                }
            }
        };
    } ]);
}.call(this), function() {
    angular.module("app.ui.form.ctrls", []).controller("DatepickerDemoCtrl", [ "$scope", function($scope) {
        return $scope.today = function() {
            return $scope.dt = new Date();
        }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function() {
            return $scope.showWeeks = !$scope.showWeeks;
        }, $scope.clear = function() {
            return $scope.dt = null;
        }, $scope.disabled = function(date, mode) {
            return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
        }, $scope.toggleMin = function() {
            var _ref;
            return $scope.minDate = null != (_ref = $scope.minDate) ? _ref : {
                "null": new Date()
            };
        }, $scope.toggleMin(), $scope.open = function($event) {
            return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
        }, $scope.dateOptions = {
            "year-format": "'yy'",
            "starting-day": 1
        }, $scope.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate" ], $scope.format = $scope.formats[0];
    } ]).controller("TimepickerDemoCtrl", [ "$scope", function($scope) {
        return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        }, $scope.ismeridian = !0, $scope.toggleMode = function() {
            return $scope.ismeridian = !$scope.ismeridian;
        }, $scope.update = function() {
            var d;
            return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
        }, $scope.changed = function() {
            return console.log("Time changed to: " + $scope.mytime);
        }, $scope.clear = function() {
            return $scope.mytime = null;
        };
    } ]).controller("TypeaheadCtrl", [ "$scope", function($scope) {
        return $scope.selected = void 0, $scope.states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ];
    } ]).controller("RatingDemoCtrl", [ "$scope", function($scope) {
        return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function(value) {
            return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
        }, $scope.ratingStates = [ {
            stateOn: "glyphicon-ok-sign",
            stateOff: "glyphicon-ok-circle"
        }, {
            stateOn: "glyphicon-star",
            stateOff: "glyphicon-star-empty"
        }, {
            stateOn: "glyphicon-heart",
            stateOff: "glyphicon-ban-circle"
        }, {
            stateOn: "glyphicon-heart"
        }, {
            stateOff: "glyphicon-off"
        } ];
    } ]);
}.call(this), function() {
    angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [ "$compile", "$log", function($compile, $log) {
        return {
            restrict: "A",
            scope: {
                range: "=?range"
            },
            link: function(scope, ele, attrs) {
                return ele.slider(), scope.range = attrs.sliderValue, ele.change(function(event) {
                    var value;
                    return value = this.defaultValue, scope.range = "[" + value + "]";
                });
            }
        };
    } ]).directive("uiFileUpload", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele) {
                return ele.bootstrapFileInput();
            }
        };
    } ]).directive("uiSpinner", [ function() {
        return {
            restrict: "A",
            compile: function(ele, attrs) {
                return ele.addClass("ui-spinner"), {
                    post: function() {
                        return ele.spinner();
                    }
                };
            }
        };
    } ]).directive("uiWizardForm", [ "$compile", function($compile) {
        return {
            link: function(scope, ele) {
                var steps;
                return ele.wrapInner('<div class="steps-wrapper">'), steps = ele.children(".steps-wrapper").steps(), 
                $compile(steps)(scope);
            }
        };
    } ]);
}.call(this), function() {
    angular.module("app.form.validation", []).controller("wizardFormCtrl", [ "$scope", function($scope) {
        return $scope.wizard = {
            firstName: "some name",
            lastName: "",
            email: "",
            password: "",
            age: "",
            address: ""
        }, $scope.isValidateStep1 = function() {
            return console.log($scope.wizard_step1), console.log("" !== $scope.wizard.firstName), 
            console.log("" === $scope.wizard.lastName), console.log("" !== $scope.wizard.firstName && "" !== $scope.wizard.lastName);
        }, $scope.finishedWizard = function() {
            return console.log("yoo");
        };
    } ]).controller("formConstraintsCtrl", [ "$scope", function($scope) {
        var original;
        return $scope.form = {
            required: "",
            minlength: "",
            maxlength: "",
            length_rage: "",
            type_something: "",
            confirm_type: "",
            foo: "",
            email: "",
            url: "",
            num: "",
            minVal: "",
            maxVal: "",
            valRange: "",
            pattern: ""
        }, original = angular.copy($scope.form), $scope.revert = function() {
            return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
        }, $scope.canRevert = function() {
            return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
        }, $scope.canSubmit = function() {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
        };
    } ]).controller("signinCtrl", [ "$scope", function($scope) {
        var original;
        return $scope.user = {
            email: "",
            password: ""
        }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
            return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
        }, $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
        }, $scope.canSubmit = function() {
            return $scope.form_signin.$valid && !angular.equals($scope.user, original);
        }, $scope.submitForm = function() {
            return $scope.showInfoOnSubmit = !0, $scope.revert();
        };
    } ]).controller("signupCtrl", [ "$scope", function($scope) {
        var original;
        return $scope.user = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: ""
        }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
            return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), 
            $scope.form_signup.confirmPassword.$setPristine();
        }, $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
        }, $scope.canSubmit = function() {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original);
        }, $scope.submitForm = function() {
            return $scope.showInfoOnSubmit = !0, $scope.revert();
        };
    } ]).directive("validateEquals", [ function() {
        return {
            require: "ngModel",
            link: function(scope, ele, attrs, ngModelCtrl) {
                var validateEqual;
                return validateEqual = function(value) {
                    var valid;
                    return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), 
                    "function" == typeof valid ? valid({
                        value: void 0
                    }) : void 0;
                }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), 
                scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
                    if (newValue !== oldValue) return ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
                });
            }
        };
    } ]);
}.call(this), function() {
    angular.module("app.tables", []).controller("tableCtrl", [ "$scope", "$filter", function($scope, $filter) {
        var init;
        return $scope.stores = [ {
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "Eat On Monday Truck",
            price: "$",
            sales: 119,
            rating: 4.3
        }, {
            name: "Tea Era",
            price: "$",
            sales: 874,
            rating: 4
        }, {
            name: "Rogers Deli",
            price: "$",
            sales: 347,
            rating: 4.2
        }, {
            name: "MoBowl",
            price: "$$$",
            sales: 24,
            rating: 4.6
        }, {
            name: "The Milk Pail Market",
            price: "$",
            sales: 543,
            rating: 4.5
        }, {
            name: "Nob Hill Foods",
            price: "$$",
            sales: 874,
            rating: 4
        }, {
            name: "Scratch",
            price: "$$$",
            sales: 643,
            rating: 3.6
        }, {
            name: "Gochi Japanese Fusion Tapas",
            price: "$$$",
            sales: 56,
            rating: 4.1
        }, {
            name: "Cost Plus World Market",
            price: "$$",
            sales: 79,
            rating: 4
        }, {
            name: "Bumble Bee Health Foods",
            price: "$$",
            sales: 43,
            rating: 4.3
        }, {
            name: "Costco",
            price: "$$",
            sales: 219,
            rating: 3.6
        }, {
            name: "Red Rock Coffee Co",
            price: "$",
            sales: 765,
            rating: 4.1
        }, {
            name: "99 Ranch Market",
            price: "$",
            sales: 181,
            rating: 3.4
        }, {
            name: "Mi Pueblo Food Center",
            price: "$",
            sales: 78,
            rating: 4
        }, {
            name: "Cucina Venti",
            price: "$$",
            sales: 163,
            rating: 3.3
        }, {
            name: "Sufi Coffee Shop",
            price: "$",
            sales: 113,
            rating: 3.3
        }, {
            name: "Dana Street Roasting",
            price: "$",
            sales: 316,
            rating: 4.1
        }, {
            name: "Pearl Cafe",
            price: "$",
            sales: 173,
            rating: 3.4
        }, {
            name: "Posh Bagel",
            price: "$",
            sales: 140,
            rating: 4
        }, {
            name: "Artisan Wine Depot",
            price: "$$",
            sales: 26,
            rating: 4.1
        }, {
            name: "Hong Kong Chinese Bakery",
            price: "$",
            sales: 182,
            rating: 3.4
        }, {
            name: "Starbucks",
            price: "$$",
            sales: 97,
            rating: 3.7
        }, {
            name: "Tapioca Express",
            price: "$",
            sales: 301,
            rating: 3
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        } ], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, 
            $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        }, $scope.onFilterChange = function() {
            return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
        }, $scope.onNumPerPageChange = function() {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.onOrderChange = function() {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.search = function() {
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), 
            $scope.onFilterChange();
        }, $scope.order = function(rowName) {
            if ($scope.row !== rowName) return $scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), 
            $scope.onOrderChange();
        }, $scope.numPerPageOpt = [ 3, 5, 10, 20 ], $scope.numPerPage = $scope.numPerPageOpt[2], 
        $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            return $scope.search(), $scope.select($scope.currentPage);
        })();
    } ]);
}.call(this), function() {
    angular.module("app.task", []).factory("taskStorage", function() {
        var DEMO_TASKS, STORAGE_ID;
        return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Play games with friends", "completed": false}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]', 
        {
            get: function() {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
            },
            put: function(tasks) {
                return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
            }
        };
    }).directive("taskFocus", [ "$timeout", function($timeout) {
        return {
            link: function(scope, ele, attrs) {
                return scope.$watch(attrs.taskFocus, function(newVal) {
                    if (newVal) return $timeout(function() {
                        return ele[0].focus();
                    }, 0, !1);
                });
            }
        };
    } ]).controller("taskCtrl", [ "$scope", "taskStorage", "filterFilter", "$rootScope", "logger", function($scope, taskStorage, filterFilter, $rootScope, logger) {
        var tasks;
        return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, {
            completed: !1
        }).length, $scope.editedTask = null, $scope.statusFilter = {
            completed: !1
        }, $scope.filter = function(filter) {
            switch (filter) {
              case "all":
                return $scope.statusFilter = "";

              case "active":
                return $scope.statusFilter = {
                    completed: !1
                };

              case "completed":
                return $scope.statusFilter = {
                    completed: !0
                };
            }
        }, $scope.add = function() {
            var newTask;
            if (newTask = $scope.newTask.trim(), 0 !== newTask.length) return tasks.push({
                title: newTask,
                completed: !1
            }), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), 
            $scope.newTask = "", $scope.remainingCount++;
        }, $scope.edit = function(task) {
            return $scope.editedTask = task;
        }, $scope.doneEditing = function(task) {
            return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), 
            taskStorage.put(tasks);
        }, $scope.remove = function(task) {
            var index;
            return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), 
            $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed");
        }, $scope.completed = function(task) {
            if ($scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed) return $scope.remainingCount > 0 ? 1 === $scope.remainingCount ? logger.log("Almost there! Only " + $scope.remainingCount + " task left") : logger.log("Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)");
        }, $scope.clearCompleted = function() {
            return $scope.tasks = tasks = tasks.filter(function(val) {
                return !val.completed;
            }), taskStorage.put(tasks);
        }, $scope.markAll = function(completed) {
            if (tasks.forEach(function(task) {
                return task.completed = completed;
            }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), 
            completed) return logger.logSuccess("Congrats! All done :)");
        }, $scope.$watch("remainingCount == 0", function(val) {
            return $scope.allChecked = val;
        }), $scope.$watch("remainingCount", function(newVal, oldVal) {
            return $rootScope.$broadcast("taskRemaining:changed", newVal);
        });
    } ]);
}.call(this), function() {
    angular.module("app.ui.ctrls", []).controller("NotifyCtrl", [ "$scope", "logger", function($scope, logger) {
        return $scope.notify = function(type) {
            switch (type) {
              case "info":
                return logger.log("Heads up! This alert needs your attention, but it's not super important.");

              case "success":
                return logger.logSuccess("Well done! You successfully read this important alert message.");

              case "warning":
                return logger.logWarning("Warning! Best check yo self, you're not looking too good.");

              case "error":
                return logger.logError("Oh snap! Change a few things up and try submitting again.");
            }
        };
    } ]).controller("AlertDemoCtrl", [ "$scope", function($scope) {
        return $scope.alerts = [ {
            type: "success",
            msg: "Well done! You successfully read this important alert message."
        }, {
            type: "info",
            msg: "Heads up! This alert needs your attention, but it is not super important."
        }, {
            type: "warning",
            msg: "Warning! Best check yo self, you're not looking too good."
        }, {
            type: "danger",
            msg: "Oh snap! Change a few things up and try submitting again."
        } ], $scope.addAlert = function() {
            var num, type;
            switch (num = Math.ceil(4 * Math.random()), type = void 0, num) {
              case 0:
                type = "info";
                break;

              case 1:
                type = "success";
                break;

              case 2:
                type = "info";
                break;

              case 3:
                type = "warning";
                break;

              case 4:
                type = "danger";
            }
            return $scope.alerts.push({
                type: type,
                msg: "Another alert!"
            });
        }, $scope.closeAlert = function(index) {
            return $scope.alerts.splice(index, 1);
        };
    } ]).controller("ProgressDemoCtrl", [ "$scope", function($scope) {
        return $scope.max = 200, $scope.random = function() {
            var type, value;
            value = Math.floor(100 * Math.random() + 10), type = void 0, type = value < 25 ? "success" : value < 50 ? "info" : value < 75 ? "warning" : "danger", 
            $scope.showWarning = "danger" === type || "warning" === type, $scope.dynamic = value, 
            $scope.type = type;
        }, $scope.random();
    } ]).controller("AccordionDemoCtrl", [ "$scope", function($scope) {
        $scope.oneAtATime = !0, $scope.groups = [ {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        }, {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }, {
            title: "Dynamic Group Header - 3",
            content: "Dynamic Group Body - 3"
        } ], $scope.items = [ "Item 1", "Item 2", "Item 3" ], $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1, $scope.items.push("Item " + newItemNo);
        };
    } ]).controller("CollapseDemoCtrl", [ "$scope", function($scope) {
        return $scope.isCollapsed = !1;
    } ]).controller("ModalDemoCtrl", [ "$scope", "$modal", "$log", function($scope, $modal, $log) {
        $scope.items = [ "item1", "item2", "item3" ], $scope.open = function() {
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalInstanceCtrl",
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            }), modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info("Modal dismissed at: " + new Date());
            });
        };
    } ]).controller("ModalInstanceCtrl", [ "$scope", "$modalInstance", "items", function($scope, $modalInstance, items) {
        $scope.items = items, $scope.selected = {
            item: $scope.items[0]
        }, $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
        }, $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    } ]).controller("PaginationDemoCtrl", [ "$scope", function($scope) {
        return $scope.totalItems = 64, $scope.currentPage = 4, $scope.maxSize = 5, $scope.setPage = function(pageNo) {
            return $scope.currentPage = pageNo;
        }, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1;
    } ]).controller("TabsDemoCtrl", [ "$scope", function($scope) {
        return $scope.tabs = [ {
            title: "Dynamic Title 1",
            content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
        }, {
            title: "Disabled",
            content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
            disabled: !0
        } ], $scope.navType = "pills";
    } ]);
}.call(this), function() {
    angular.module("app.ui.services", []).factory("logger", [ function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3500"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    } ]);
}.call(this), function() {
    angular.module("app", [ "ngRoute", "ngAnimate", "ui.bootstrap", "easypiechart", "mgo-angular-wizard", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.task", "app.localization", "app.chart.ctrls", "app.chart.directives" ]).config([ "$routeProvider", function($routeProvider) {
        return $routeProvider.when("/", {
            redirectTo: "/dashboard"
        }).when("/dashboard", {
            templateUrl: "views/dashboard.html"
        }).when("/ui/typography", {
            templateUrl: "views/ui/typography.html"
        }).when("/ui/buttons", {
            templateUrl: "views/ui/buttons.html"
        }).when("/ui/icons", {
            templateUrl: "views/ui/icons.html"
        }).when("/ui/grids", {
            templateUrl: "views/ui/grids.html"
        }).when("/ui/widgets", {
            templateUrl: "views/ui/widgets.html"
        }).when("/ui/components", {
            templateUrl: "views/ui/components.html"
        }).when("/ui/timeline", {
            templateUrl: "views/ui/timeline.html"
        }).when("/forms/elements", {
            templateUrl: "views/forms/elements.html"
        }).when("/forms/layouts", {
            templateUrl: "views/forms/layouts.html"
        }).when("/forms/validation", {
            templateUrl: "views/forms/validation.html"
        }).when("/forms/wizard", {
            templateUrl: "views/forms/wizard.html"
        }).when("/tables/static", {
            templateUrl: "views/tables/static.html"
        }).when("/tables/responsive", {
            templateUrl: "views/tables/responsive.html"
        }).when("/tables/dynamic", {
            templateUrl: "views/tables/dynamic.html"
        }).when("/charts/others", {
            templateUrl: "views/charts/charts.html"
        }).when("/charts/morris", {
            templateUrl: "views/charts/morris.html"
        }).when("/charts/flot", {
            templateUrl: "views/charts/flot.html"
        }).when("/pages/features", {
            templateUrl: "views/pages/features.html"
        }).when("/pages/signin", {
            templateUrl: "views/pages/signin.html"
        }).when("/pages/signup", {
            templateUrl: "views/pages/signup.html"
        }).when("/pages/profile", {
            templateUrl: "views/pages/profile.html"
        }).when("/404", {
            templateUrl: "views/pages/404.html"
        }).when("/pages/500", {
            templateUrl: "views/pages/500.html"
        }).when("/tasks", {
            templateUrl: "views/tasks/tasks.html"
        }).otherwise({
            redirectTo: "/404"
        });
    } ]);
}.call(this), function() {
    angular.module("app.directives", []).directive("imgHolder", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele, attrs) {
                return Holder.run({
                    images: ele[0]
                });
            }
        };
    } ]).directive("customBackground", function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$location", function($scope, $element, $location) {
                var addBg, path;
                return path = function() {
                    return $location.path();
                }, addBg = function(path) {
                    switch ($element.removeClass("body-home body-special body-tasks"), path) {
                      case "/404":
                      case "/401":
                      case "/500":
                      case "/pages/500":
                      case "/pages/signin":
                      case "/pages/signup":
                      case "/login":
                      case "/signup":
                      case "/getting-started-student":
                      case "/getting-started":
                      case "/student-profile":
                      case "/":
                        return $element.addClass("body-special");

                      case "/tasks":
                        return $element.addClass("body-tasks");
                    }
                }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
                    if (newVal !== oldVal) return addBg($location.path());
                });
            } ]
        };
    }).directive("uiColorSwitch", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele, attrs) {
                return ele.find(".color-option").on("click", function(event) {
                    var $this, hrefUrl, style;
                    if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style) hrefUrl = "styles/main.css", 
                    $('link[href^="styles/main"]').attr("href", hrefUrl); else {
                        if (!style) return !1;
                        style = "-" + style, hrefUrl = "styles/main" + style + ".css", $('link[href^="styles/main"]').attr("href", hrefUrl);
                    }
                    return event.preventDefault();
                });
            }
        };
    } ]).directive("collapseNav", [ function() {
        return {
            restrict: "A",
            compile: function(ele, attrs) {
                var $a, $aRest, $lists, $listsRest;
                return $lists = ele.find("ul").parent("li"), $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>'), 
                $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), 
                $a.on("click", function(event) {
                    var $parent, $this;
                    return $this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), 
                    $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault();
                }), $aRest.on("click", function(event) {
                    return $lists.removeClass("open").find("ul").slideUp();
                });
            }
        };
    } ]).directive("highlightActive", [ function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$attrs", "$location", function($scope, $element, $attrs, $location) {
                var highlightActive, links, path;
                return links = $element.find("a"), path = function() {
                    return $location.path();
                }, highlightActive = function(links, path) {
                    return path = "#" + path, angular.forEach(links, function(link) {
                        var $li, $link, href;
                        if ($link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), 
                        $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href)) return $li.addClass("active");
                    });
                }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
                    if (newVal !== oldVal) return highlightActive(links, $location.path());
                });
            } ]
        };
    } ]).directive("toggleOffCanvas", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele, attrs) {
                return ele.on("click", function() {
                    return $("#app").toggleClass("on-canvas");
                });
            }
        };
    } ]).directive("slimScroll", [ function() {
        return {
            restrict: "A",
            link: function(scope, ele, attrs) {
                return ele.slimScroll({
                    height: "100%"
                });
            }
        };
    } ]).directive("goBack", [ function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$window", function($scope, $element, $window) {
                return $element.on("click", function() {
                    return $window.history.back();
                });
            } ]
        };
    } ]);
}.call(this), function() {
    angular.module("app.localization", []).factory("localize", [ "$http", "$rootScope", "$window", function($http, $rootScope, $window) {
        var localize;
        return localize = {
            language: "",
            url: void 0,
            resourceFileLoaded: !1,
            successCallback: function(data) {
                return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated");
            },
            setLanguage: function(value) {
                return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources();
            },
            setUrl: function(value) {
                return localize.url = value, localize.initLocalizedResources();
            },
            buildUrl: function() {
                return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), 
                localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js";
            },
            initLocalizedResources: function() {
                var url;
                return url = localize.url || localize.buildUrl(), $http({
                    method: "GET",
                    url: url,
                    cache: !1
                }).success(localize.successCallback).error(function() {
                    return $rootScope.$broadcast("localizeResourcesUpdated");
                });
            },
            getLocalizedString: function(value) {
                var result, valueLowerCase;
                return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), 
                result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, 
                result;
            }
        };
    } ]).directive("i18n", [ "localize", function(localize) {
        var i18nDirective;
        return i18nDirective = {
            restrict: "EA",
            updateText: function(ele, input, placeholder) {
                var result;
                return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), 
                ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), 
                ele.text(result)) : void 0;
            },
            link: function(scope, ele, attrs) {
                return scope.$on("localizeResourcesUpdated", function() {
                    return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
                }), attrs.$observe("i18n", function(value) {
                    return i18nDirective.updateText(ele, value, attrs.placeholder);
                });
            }
        };
    } ]).controller("LangCtrl", [ "$scope", "localize", function($scope, localize) {
        return $scope.lang = "English", $scope.setLang = function(lang) {
            switch (lang) {
              case "English":
                localize.setLanguage("EN-US");
                break;

              case "Español":
                localize.setLanguage("ES-ES");
                break;

              case "日本語":
                localize.setLanguage("JA-JP");
                break;

              case "中文":
                localize.setLanguage("ZH-TW");
                break;

              case "Deutsch":
                localize.setLanguage("DE-DE");
                break;

              case "français":
                localize.setLanguage("FR-FR");
                break;

              case "Italiano":
                localize.setLanguage("IT-IT");
                break;

              case "Portugal":
                localize.setLanguage("PT-BR");
                break;

              case "Русский язык":
                localize.setLanguage("RU-RU");
                break;

              case "한국어":
                localize.setLanguage("KO-KR");
            }
            return $scope.lang = lang;
        };
    } ]);
}.call(this), function() {
    angular.module("app.controllers", []).controller("AppCtrl", [ "$scope", "$location", function($scope, $location) {
        return $scope.isSpecificPage = function() {
            var path;
            return path = $location.path(), _.contains([ "/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/login", "/signup", "/getting-started", "/getting-started-student", "/401", "/500", "/" ], path);
        }, $scope.main = {
            brand: "iFlat",
            name: "Lisa Doe"
        };
    } ]).controller("NavCtrl", [ "$scope", "taskStorage", "filterFilter", function($scope, taskStorage, filterFilter) {
        var tasks;
        return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {
            completed: !1
        }).length, $scope.$on("taskRemaining:changed", function(event, count) {
            return $scope.taskRemainingCount = count;
        });
    } ]).controller("DashboardCtrl", [ "$scope", function($scope) {
        return $scope.comboChartData = [ [ "Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average" ], [ "2014/05", 165, 938, 522, 998, 450, 614.6 ], [ "2014/06", 135, 1120, 599, 1268, 288, 682 ], [ "2014/07", 157, 1167, 587, 807, 397, 623 ], [ "2014/08", 139, 1110, 615, 968, 215, 609.4 ], [ "2014/09", 136, 691, 629, 1026, 366, 569.6 ] ], 
        $scope.salesData = [ [ "Year", "Sales", "Expenses" ], [ "2010", 1e3, 400 ], [ "2011", 1170, 460 ], [ "2012", 660, 1120 ], [ "2013", 1030, 540 ] ];
    } ]);
}.call(this), function(root, factory) {
    "function" == typeof define && define.amd ? define([ "angular", "dropzone" ], factory) : factory(root.angular, root.Dropzone);
}(this, function(angular, Dropzone) {
    return angular.module("ngDropzone", []).directive("ngDropzone", function() {
        return {
            restrict: "AE",
            template: "<div ng-transclude></div>",
            transclude: !0,
            scope: {
                dropzone: "=",
                dropzoneConfig: "=",
                eventHandlers: "="
            },
            link: function(scope, element, attrs, ctrls) {
                try {} catch (error) {
                    throw new Error("Dropzone.js not loaded.");
                }
                var dropzone = new Dropzone(element[0], scope.dropzoneConfig);
                scope.eventHandlers && Object.keys(scope.eventHandlers).forEach(function(eventName) {
                    dropzone.on(eventName, scope.eventHandlers[eventName]);
                }), scope.dropzone = dropzone;
            }
        };
    });
}), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory(jQuery);
}(function(jQuery) {
    function Emitter(obj) {
        if (obj) return mixin(obj);
    }
    function mixin(obj) {
        for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
        return obj;
    }
    var module = {
        exports: {}
    };
    return module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[event] = this._callbacks[event] || []).push(fn), 
        this;
    }, Emitter.prototype.once = function(event, fn) {
        function on() {
            self.off(event, on), fn.apply(this, arguments);
        }
        var self = this;
        return this._callbacks = this._callbacks || {}, on.fn = fn, this.on(event, on), 
        this;
    }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
        this;
        var callbacks = this._callbacks[event];
        if (!callbacks) return this;
        if (1 == arguments.length) return delete this._callbacks[event], this;
        for (var cb, i = 0; i < callbacks.length; i++) if (cb = callbacks[i], cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
        return this;
    }, Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) callbacks[i].apply(this, args);
        }
        return this;
    }, Emitter.prototype.listeners = function(event) {
        return this._callbacks = this._callbacks || {}, this._callbacks[event] || [];
    }, Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
    }, function() {
        var Dropzone, Em, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
            function ctor() {
                this.constructor = child;
            }
            for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
            return ctor.prototype = parent.prototype, child.prototype = new ctor(), child.__super__ = parent.prototype, 
            child;
        }, __slice = [].slice;
        Em = "undefined" != typeof Emitter && null !== Emitter ? Emitter : require("emitter"), 
        noop = function() {}, Dropzone = function(_super) {
            function Dropzone(element, options) {
                var elementOptions, fallback, _ref;
                if (this.element = element, this.version = Dropzone.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
                this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
                !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                if (this.element.dropzone) throw new Error("Dropzone already attached.");
                if (Dropzone.instances.push(this), this.element.dropzone = this, elementOptions = null != (_ref = Dropzone.optionsForElement(this.element)) ? _ref : {}, 
                this.options = extend({}, this.defaultOptions, elementOptions, null != options ? options : {}), 
                this.options.forceFallback || !Dropzone.isBrowserSupported()) return this.options.fallback.call(this);
                if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
                !this.options.url) throw new Error("No URL provided.");
                if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
                delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), 
                (fallback = this.getExistingFallback()) && fallback.parentNode && fallback.parentNode.removeChild(fallback), 
                this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), 
                this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [ this.element ] : this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable")), 
                this.init();
            }
            var extend;
            return __extends(Dropzone, _super), Dropzone.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached" ], 
            Dropzone.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                parallelUploads: 2,
                uploadMultiple: !1,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                maxFiles: null,
                params: {},
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                accept: function(file, done) {
                    return done();
                },
                init: function() {
                    return noop;
                },
                forceFallback: !1,
                fallback: function() {
                    var child, messageElement, span, _i, _len, _ref;
                    for (this.element.className = "" + this.element.className + " dz-browser-not-supported", 
                    _ref = this.element.getElementsByTagName("div"), _i = 0, _len = _ref.length; _i < _len; _i++) child = _ref[_i], 
                    /(^| )dz-message($| )/.test(child.className) && (messageElement = child, child.className = "dz-message");
                    return messageElement || (messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>'), 
                    this.element.appendChild(messageElement)), span = messageElement.getElementsByTagName("span")[0], 
                    span && (span.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm());
                },
                resize: function(file) {
                    var info, srcRatio, trgRatio;
                    return info = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: file.width,
                        srcHeight: file.height
                    }, srcRatio = file.width / file.height, info.optWidth = this.options.thumbnailWidth, 
                    info.optHeight = this.options.thumbnailHeight, null == info.optWidth && null == info.optHeight ? (info.optWidth = info.srcWidth, 
                    info.optHeight = info.srcHeight) : null == info.optWidth ? info.optWidth = srcRatio * info.optHeight : null == info.optHeight && (info.optHeight = 1 / srcRatio * info.optWidth), 
                    trgRatio = info.optWidth / info.optHeight, file.height < info.optHeight || file.width < info.optWidth ? (info.trgHeight = info.srcHeight, 
                    info.trgWidth = info.srcWidth) : srcRatio > trgRatio ? (info.srcHeight = file.height, 
                    info.srcWidth = info.srcHeight * trgRatio) : (info.srcWidth = file.width, info.srcHeight = info.srcWidth / trgRatio), 
                    info.srcX = (file.width - info.srcWidth) / 2, info.srcY = (file.height - info.srcHeight) / 2, 
                    info;
                },
                drop: function(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragstart: noop,
                dragend: function(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragenter: function(e) {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragover: function(e) {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragleave: function(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                paste: noop,
                reset: function() {
                    return this.element.classList.remove("dz-started");
                },
                addedfile: function(file) {
                    var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                    this.previewsContainer) {
                        for (file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim()), 
                        file.previewTemplate = file.previewElement, this.previewsContainer.appendChild(file.previewElement), 
                        _ref = file.previewElement.querySelectorAll("[data-dz-name]"), _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], 
                        node.textContent = file.name;
                        for (_ref1 = file.previewElement.querySelectorAll("[data-dz-size]"), _j = 0, _len1 = _ref1.length; _j < _len1; _j++) node = _ref1[_j], 
                        node.innerHTML = this.filesize(file.size);
                        for (this.options.addRemoveLinks && (file._removeLink = Dropzone.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                        file.previewElement.appendChild(file._removeLink)), removeFileEvent = function(_this) {
                            return function(e) {
                                return e.preventDefault(), e.stopPropagation(), file.status === Dropzone.UPLOADING ? Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                                    return _this.removeFile(file);
                                }) : _this.options.dictRemoveFileConfirmation ? Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                                    return _this.removeFile(file);
                                }) : _this.removeFile(file);
                            };
                        }(this), _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]"), _results = [], 
                        _k = 0, _len2 = _ref2.length; _k < _len2; _k++) removeLink = _ref2[_k], _results.push(removeLink.addEventListener("click", removeFileEvent));
                        return _results;
                    }
                },
                removedfile: function(file) {
                    var _ref;
                    return file.previewElement && null != (_ref = file.previewElement) && _ref.parentNode.removeChild(file.previewElement), 
                    this._updateMaxFilesReachedClass();
                },
                thumbnail: function(file, dataUrl) {
                    var thumbnailElement, _i, _len, _ref, _results;
                    if (file.previewElement) {
                        for (file.previewElement.classList.remove("dz-file-preview"), file.previewElement.classList.add("dz-image-preview"), 
                        _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _results = [], 
                        _i = 0, _len = _ref.length; _i < _len; _i++) thumbnailElement = _ref[_i], thumbnailElement.alt = file.name, 
                        _results.push(thumbnailElement.src = dataUrl);
                        return _results;
                    }
                },
                error: function(file, message) {
                    var node, _i, _len, _ref, _results;
                    if (file.previewElement) {
                        for (file.previewElement.classList.add("dz-error"), "String" != typeof message && message.error && (message = message.error), 
                        _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _results = [], 
                        _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], _results.push(node.textContent = message);
                        return _results;
                    }
                },
                errormultiple: noop,
                processing: function(file) {
                    if (file.previewElement && (file.previewElement.classList.add("dz-processing"), 
                    file._removeLink)) return file._removeLink.textContent = this.options.dictCancelUpload;
                },
                processingmultiple: noop,
                uploadprogress: function(file, progress, bytesSent) {
                    var node, _i, _len, _ref, _results;
                    if (file.previewElement) {
                        for (_ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _results = [], 
                        _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], _results.push(node.style.width = "" + progress + "%");
                        return _results;
                    }
                },
                totaluploadprogress: noop,
                sending: noop,
                sendingmultiple: noop,
                success: function(file) {
                    if (file.previewElement) return file.previewElement.classList.add("dz-success");
                },
                successmultiple: noop,
                canceled: function(file) {
                    return this.emit("error", file, "Upload canceled.");
                },
                canceledmultiple: noop,
                complete: function(file) {
                    if (file._removeLink) return file._removeLink.textContent = this.options.dictRemoveFile;
                },
                completemultiple: noop,
                maxfilesexceeded: noop,
                maxfilesreached: noop,
                previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
            }, extend = function() {
                var key, object, objects, target, val, _i, _len;
                for (target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [], 
                _i = 0, _len = objects.length; _i < _len; _i++) {
                    object = objects[_i];
                    for (key in object) val = object[key], target[key] = val;
                }
                return target;
            }, Dropzone.prototype.getAcceptedFiles = function() {
                var file, _i, _len, _ref, _results;
                for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                file.accepted && _results.push(file);
                return _results;
            }, Dropzone.prototype.getRejectedFiles = function() {
                var file, _i, _len, _ref, _results;
                for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                file.accepted || _results.push(file);
                return _results;
            }, Dropzone.prototype.getFilesWithStatus = function(status) {
                var file, _i, _len, _ref, _results;
                for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                file.status === status && _results.push(file);
                return _results;
            }, Dropzone.prototype.getQueuedFiles = function() {
                return this.getFilesWithStatus(Dropzone.QUEUED);
            }, Dropzone.prototype.getUploadingFiles = function() {
                return this.getFilesWithStatus(Dropzone.UPLOADING);
            }, Dropzone.prototype.getActiveFiles = function() {
                var file, _i, _len, _ref, _results;
                for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                file.status !== Dropzone.UPLOADING && file.status !== Dropzone.QUEUED || _results.push(file);
                return _results;
            }, Dropzone.prototype.init = function() {
                var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
                for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
                this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(Dropzone.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
                this.clickableElements.length && (setupHiddenFileInput = function(_this) {
                    return function() {
                        return _this.hiddenFileInput && document.body.removeChild(_this.hiddenFileInput), 
                        _this.hiddenFileInput = document.createElement("input"), _this.hiddenFileInput.setAttribute("type", "file"), 
                        (null == _this.options.maxFiles || _this.options.maxFiles > 1) && _this.hiddenFileInput.setAttribute("multiple", "multiple"), 
                        _this.hiddenFileInput.className = "dz-hidden-input", null != _this.options.acceptedFiles && _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles), 
                        _this.hiddenFileInput.style.visibility = "hidden", _this.hiddenFileInput.style.position = "absolute", 
                        _this.hiddenFileInput.style.top = "0", _this.hiddenFileInput.style.left = "0", _this.hiddenFileInput.style.height = "0", 
                        _this.hiddenFileInput.style.width = "0", document.body.appendChild(_this.hiddenFileInput), 
                        _this.hiddenFileInput.addEventListener("change", function() {
                            var file, files, _i, _len;
                            if (files = _this.hiddenFileInput.files, files.length) for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                            _this.addFile(file);
                            return setupHiddenFileInput();
                        });
                    };
                }(this))(), this.URL = null != (_ref = window.URL) ? _ref : window.webkitURL, _ref1 = this.events, 
                _i = 0, _len = _ref1.length; _i < _len; _i++) eventName = _ref1[_i], this.on(eventName, this.options[eventName]);
                return this.on("uploadprogress", function(_this) {
                    return function() {
                        return _this.updateTotalUploadProgress();
                    };
                }(this)), this.on("removedfile", function(_this) {
                    return function() {
                        return _this.updateTotalUploadProgress();
                    };
                }(this)), this.on("canceled", function(_this) {
                    return function(file) {
                        return _this.emit("complete", file);
                    };
                }(this)), this.on("complete", function(_this) {
                    return function(file) {
                        if (0 === _this.getUploadingFiles().length && 0 === _this.getQueuedFiles().length) return setTimeout(function() {
                            return _this.emit("queuecomplete");
                        }, 0);
                    };
                }(this)), noPropagation = function(e) {
                    return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                }, this.listeners = [ {
                    element: this.element,
                    events: {
                        dragstart: function(_this) {
                            return function(e) {
                                return _this.emit("dragstart", e);
                            };
                        }(this),
                        dragenter: function(_this) {
                            return function(e) {
                                return noPropagation(e), _this.emit("dragenter", e);
                            };
                        }(this),
                        dragover: function(_this) {
                            return function(e) {
                                var efct;
                                try {
                                    efct = e.dataTransfer.effectAllowed;
                                } catch (_error) {}
                                return e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy", 
                                noPropagation(e), _this.emit("dragover", e);
                            };
                        }(this),
                        dragleave: function(_this) {
                            return function(e) {
                                return _this.emit("dragleave", e);
                            };
                        }(this),
                        drop: function(_this) {
                            return function(e) {
                                return noPropagation(e), _this.drop(e);
                            };
                        }(this),
                        dragend: function(_this) {
                            return function(e) {
                                return _this.emit("dragend", e);
                            };
                        }(this)
                    }
                } ], this.clickableElements.forEach(function(_this) {
                    return function(clickableElement) {
                        return _this.listeners.push({
                            element: clickableElement,
                            events: {
                                click: function(evt) {
                                    if (clickableElement !== _this.element || evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message"))) return _this.hiddenFileInput.click();
                                }
                            }
                        });
                    };
                }(this)), this.enable(), this.options.init.call(this);
            }, Dropzone.prototype.destroy = function() {
                var _ref;
                return this.disable(), this.removeAllFiles(!0), (null != (_ref = this.hiddenFileInput) ? _ref.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
                this.hiddenFileInput = null), delete this.element.dropzone, Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
            }, Dropzone.prototype.updateTotalUploadProgress = function() {
                var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
                if (totalBytesSent = 0, totalBytes = 0, activeFiles = this.getActiveFiles(), activeFiles.length) {
                    for (_ref = this.getActiveFiles(), _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    totalBytesSent += file.upload.bytesSent, totalBytes += file.upload.total;
                    totalUploadProgress = 100 * totalBytesSent / totalBytes;
                } else totalUploadProgress = 100;
                return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
            }, Dropzone.prototype._getParamName = function(n) {
                return "function" == typeof this.options.paramName ? this.options.paramName(n) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
            }, Dropzone.prototype.getFallbackForm = function() {
                var existingFallback, fields, fieldsString, form;
                return (existingFallback = this.getExistingFallback()) ? existingFallback : (fieldsString = '<div class="dz-fallback">', 
                this.options.dictFallbackText && (fieldsString += "<p>" + this.options.dictFallbackText + "</p>"), 
                fieldsString += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
                fields = Dropzone.createElement(fieldsString), "FORM" !== this.element.tagName ? (form = Dropzone.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), 
                form.appendChild(fields)) : (this.element.setAttribute("enctype", "multipart/form-data"), 
                this.element.setAttribute("method", this.options.method)), null != form ? form : fields);
            }, Dropzone.prototype.getExistingFallback = function() {
                var fallback, getFallback, tagName, _i, _len, _ref;
                for (getFallback = function(elements) {
                    var el, _i, _len;
                    for (_i = 0, _len = elements.length; _i < _len; _i++) if (el = elements[_i], /(^| )fallback($| )/.test(el.className)) return el;
                }, _ref = [ "div", "form" ], _i = 0, _len = _ref.length; _i < _len; _i++) if (tagName = _ref[_i], 
                fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
            }, Dropzone.prototype.setupEventListeners = function() {
                var elementListeners, event, listener, _i, _len, _ref, _results;
                for (_ref = this.listeners, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) elementListeners = _ref[_i], 
                _results.push(function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events, _results1 = [];
                    for (event in _ref1) listener = _ref1[event], _results1.push(elementListeners.element.addEventListener(event, listener, !1));
                    return _results1;
                }());
                return _results;
            }, Dropzone.prototype.removeEventListeners = function() {
                var elementListeners, event, listener, _i, _len, _ref, _results;
                for (_ref = this.listeners, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) elementListeners = _ref[_i], 
                _results.push(function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events, _results1 = [];
                    for (event in _ref1) listener = _ref1[event], _results1.push(elementListeners.element.removeEventListener(event, listener, !1));
                    return _results1;
                }());
                return _results;
            }, Dropzone.prototype.disable = function() {
                var file, _i, _len, _ref, _results;
                for (this.clickableElements.forEach(function(element) {
                    return element.classList.remove("dz-clickable");
                }), this.removeEventListeners(), _ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                _results.push(this.cancelUpload(file));
                return _results;
            }, Dropzone.prototype.enable = function() {
                return this.clickableElements.forEach(function(element) {
                    return element.classList.add("dz-clickable");
                }), this.setupEventListeners();
            }, Dropzone.prototype.filesize = function(size) {
                var string;
                return size >= 109951162777.6 ? (size /= 109951162777.6, string = "TiB") : size >= 107374182.4 ? (size /= 107374182.4, 
                string = "GiB") : size >= 104857.6 ? (size /= 104857.6, string = "MiB") : size >= 102.4 ? (size /= 102.4, 
                string = "KiB") : (size = 10 * size, string = "b"), "<strong>" + Math.round(size) / 10 + "</strong> " + string;
            }, Dropzone.prototype._updateMaxFilesReachedClass = function() {
                return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
                this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
            }, Dropzone.prototype.drop = function(e) {
                var files, items;
                e.dataTransfer && (this.emit("drop", e), files = e.dataTransfer.files, files.length && (items = e.dataTransfer.items, 
                items && items.length && null != items[0].webkitGetAsEntry ? this._addFilesFromItems(items) : this.handleFiles(files)));
            }, Dropzone.prototype.paste = function(e) {
                var items, _ref;
                if (null != (null != e && null != (_ref = e.clipboardData) ? _ref.items : void 0)) return this.emit("paste", e), 
                items = e.clipboardData.items, items.length ? this._addFilesFromItems(items) : void 0;
            }, Dropzone.prototype.handleFiles = function(files) {
                var file, _i, _len, _results;
                for (_results = [], _i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                _results.push(this.addFile(file));
                return _results;
            }, Dropzone.prototype._addFilesFromItems = function(items) {
                var entry, item, _i, _len, _results;
                for (_results = [], _i = 0, _len = items.length; _i < _len; _i++) item = items[_i], 
                null != item.webkitGetAsEntry && (entry = item.webkitGetAsEntry()) ? entry.isFile ? _results.push(this.addFile(item.getAsFile())) : entry.isDirectory ? _results.push(this._addFilesFromDirectory(entry, entry.name)) : _results.push(void 0) : null != item.getAsFile && (null == item.kind || "file" === item.kind) ? _results.push(this.addFile(item.getAsFile())) : _results.push(void 0);
                return _results;
            }, Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
                var dirReader, entriesReader;
                return dirReader = directory.createReader(), entriesReader = function(_this) {
                    return function(entries) {
                        var entry, _i, _len;
                        for (_i = 0, _len = entries.length; _i < _len; _i++) entry = entries[_i], entry.isFile ? entry.file(function(file) {
                            if (!_this.options.ignoreHiddenFiles || "." !== file.name.substring(0, 1)) return file.fullPath = "" + path + "/" + file.name, 
                            _this.addFile(file);
                        }) : entry.isDirectory && _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                    };
                }(this), dirReader.readEntries(entriesReader, function(error) {
                    return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(error) : void 0;
                });
            }, Dropzone.prototype.accept = function(file, done) {
                return file.size > 1024 * this.options.maxFilesize * 1024 ? done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : Dropzone.isValidFile(file, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
                this.emit("maxfilesexceeded", file)) : this.options.accept.call(this, file, done) : done(this.options.dictInvalidFileType);
            }, Dropzone.prototype.addFile = function(file) {
                return file.upload = {
                    progress: 0,
                    total: file.size,
                    bytesSent: 0
                }, this.files.push(file), file.status = Dropzone.ADDED, this.emit("addedfile", file), 
                this._enqueueThumbnail(file), this.accept(file, function(_this) {
                    return function(error) {
                        return error ? (file.accepted = !1, _this._errorProcessing([ file ], error)) : (file.accepted = !0, 
                        _this.options.autoQueue && _this.enqueueFile(file)), _this._updateMaxFilesReachedClass();
                    };
                }(this));
            }, Dropzone.prototype.enqueueFiles = function(files) {
                var file, _i, _len;
                for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], this.enqueueFile(file);
                return null;
            }, Dropzone.prototype.enqueueFile = function(file) {
                if (file.status !== Dropzone.ADDED || file.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                if (file.status = Dropzone.QUEUED, this.options.autoProcessQueue) return setTimeout(function(_this) {
                    return function() {
                        return _this.processQueue();
                    };
                }(this), 0);
            }, Dropzone.prototype._thumbnailQueue = [], Dropzone.prototype._processingThumbnail = !1, 
            Dropzone.prototype._enqueueThumbnail = function(file) {
                if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(file), 
                setTimeout(function(_this) {
                    return function() {
                        return _this._processThumbnailQueue();
                    };
                }(this), 0);
            }, Dropzone.prototype._processThumbnailQueue = function() {
                if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, 
                this.createThumbnail(this._thumbnailQueue.shift(), function(_this) {
                    return function() {
                        return _this._processingThumbnail = !1, _this._processThumbnailQueue();
                    };
                }(this));
            }, Dropzone.prototype.removeFile = function(file) {
                if (file.status === Dropzone.UPLOADING && this.cancelUpload(file), this.files = without(this.files, file), 
                this.emit("removedfile", file), 0 === this.files.length) return this.emit("reset");
            }, Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
                var file, _i, _len, _ref;
                for (null == cancelIfNecessary && (cancelIfNecessary = !1), _ref = this.files.slice(), 
                _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], (file.status !== Dropzone.UPLOADING || cancelIfNecessary) && this.removeFile(file);
                return null;
            }, Dropzone.prototype.createThumbnail = function(file, callback) {
                var fileReader;
                return fileReader = new FileReader(), fileReader.onload = function(_this) {
                    return function() {
                        var img;
                        return img = document.createElement("img"), img.onload = function() {
                            var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                            if (file.width = img.width, file.height = img.height, resizeInfo = _this.options.resize.call(_this, file), 
                            null == resizeInfo.trgWidth && (resizeInfo.trgWidth = resizeInfo.optWidth), null == resizeInfo.trgHeight && (resizeInfo.trgHeight = resizeInfo.optHeight), 
                            canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), canvas.width = resizeInfo.trgWidth, 
                            canvas.height = resizeInfo.trgHeight, drawImageIOSFix(ctx, img, null != (_ref = resizeInfo.srcX) ? _ref : 0, null != (_ref1 = resizeInfo.srcY) ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, null != (_ref2 = resizeInfo.trgX) ? _ref2 : 0, null != (_ref3 = resizeInfo.trgY) ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight), 
                            thumbnail = canvas.toDataURL("image/png"), _this.emit("thumbnail", file, thumbnail), 
                            null != callback) return callback();
                        }, img.src = fileReader.result;
                    };
                }(this), fileReader.readAsDataURL(file);
            }, Dropzone.prototype.processQueue = function() {
                var i, parallelUploads, processingLength, queuedFiles;
                if (parallelUploads = this.options.parallelUploads, processingLength = this.getUploadingFiles().length, 
                i = processingLength, !(processingLength >= parallelUploads) && (queuedFiles = this.getQueuedFiles(), 
                queuedFiles.length > 0)) {
                    if (this.options.uploadMultiple) return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                    for (;i < parallelUploads; ) {
                        if (!queuedFiles.length) return;
                        this.processFile(queuedFiles.shift()), i++;
                    }
                }
            }, Dropzone.prototype.processFile = function(file) {
                return this.processFiles([ file ]);
            }, Dropzone.prototype.processFiles = function(files) {
                var file, _i, _len;
                for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.processing = !0, 
                file.status = Dropzone.UPLOADING, this.emit("processing", file);
                return this.options.uploadMultiple && this.emit("processingmultiple", files), this.uploadFiles(files);
            }, Dropzone.prototype._getFilesWithXhr = function(xhr) {
                var file, files;
                return files = function() {
                    var _i, _len, _ref, _results;
                    for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    file.xhr === xhr && _results.push(file);
                    return _results;
                }.call(this);
            }, Dropzone.prototype.cancelUpload = function(file) {
                var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
                if (file.status === Dropzone.UPLOADING) {
                    for (groupedFiles = this._getFilesWithXhr(file.xhr), _i = 0, _len = groupedFiles.length; _i < _len; _i++) groupedFile = groupedFiles[_i], 
                    groupedFile.status = Dropzone.CANCELED;
                    for (file.xhr.abort(), _j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) groupedFile = groupedFiles[_j], 
                    this.emit("canceled", groupedFile);
                    this.options.uploadMultiple && this.emit("canceledmultiple", groupedFiles);
                } else (_ref = file.status) !== Dropzone.ADDED && _ref !== Dropzone.QUEUED || (file.status = Dropzone.CANCELED, 
                this.emit("canceled", file), this.options.uploadMultiple && this.emit("canceledmultiple", [ file ]));
                if (this.options.autoProcessQueue) return this.processQueue();
            }, Dropzone.prototype.uploadFile = function(file) {
                return this.uploadFiles([ file ]);
            }, Dropzone.prototype.uploadFiles = function(files) {
                var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, option, progressObj, response, updateProgress, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
                for (xhr = new XMLHttpRequest(), _i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                file.xhr = xhr;
                xhr.open(this.options.method, this.options.url, !0), xhr.withCredentials = !!this.options.withCredentials, 
                response = null, handleError = function(_this) {
                    return function() {
                        var _j, _len1, _results;
                        for (_results = [], _j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], 
                        _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                        return _results;
                    };
                }(this), updateProgress = function(_this) {
                    return function(e) {
                        var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                        if (null != e) for (progress = 100 * e.loaded / e.total, _j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], 
                        file.upload = {
                            progress: progress,
                            total: e.total,
                            bytesSent: e.loaded
                        }; else {
                            for (allFilesFinished = !0, progress = 100, _k = 0, _len2 = files.length; _k < _len2; _k++) file = files[_k], 
                            100 === file.upload.progress && file.upload.bytesSent === file.upload.total || (allFilesFinished = !1), 
                            file.upload.progress = progress, file.upload.bytesSent = file.upload.total;
                            if (allFilesFinished) return;
                        }
                        for (_results = [], _l = 0, _len3 = files.length; _l < _len3; _l++) file = files[_l], 
                        _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                        return _results;
                    };
                }(this), xhr.onload = function(_this) {
                    return function(e) {
                        var _ref;
                        if (files[0].status !== Dropzone.CANCELED && 4 === xhr.readyState) {
                            if (response = xhr.responseText, xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                                response = JSON.parse(response);
                            } catch (_error) {
                                e = _error, response = "Invalid JSON response from server.";
                            }
                            return updateProgress(), 200 <= (_ref = xhr.status) && _ref < 300 ? _this._finished(files, response, e) : handleError();
                        }
                    };
                }(this), xhr.onerror = function(_this) {
                    return function() {
                        if (files[0].status !== Dropzone.CANCELED) return handleError();
                    };
                }(this), progressObj = null != (_ref = xhr.upload) ? _ref : xhr, progressObj.onprogress = updateProgress, 
                headers = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                }, this.options.headers && extend(headers, this.options.headers);
                for (headerName in headers) headerValue = headers[headerName], xhr.setRequestHeader(headerName, headerValue);
                if (formData = new FormData(), this.options.params) {
                    _ref1 = this.options.params;
                    for (key in _ref1) value = _ref1[key], formData.append(key, value);
                }
                for (_j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], this.emit("sending", file, xhr, formData);
                if (this.options.uploadMultiple && this.emit("sendingmultiple", files, xhr, formData), 
                "FORM" === this.element.tagName) for (_ref2 = this.element.querySelectorAll("input, textarea, select, button"), 
                _k = 0, _len2 = _ref2.length; _k < _len2; _k++) if (input = _ref2[_k], inputName = input.getAttribute("name"), 
                inputType = input.getAttribute("type"), "SELECT" === input.tagName && input.hasAttribute("multiple")) for (_ref3 = input.options, 
                _l = 0, _len3 = _ref3.length; _l < _len3; _l++) option = _ref3[_l], option.selected && formData.append(inputName, option.value); else (!inputType || "checkbox" !== (_ref4 = inputType.toLowerCase()) && "radio" !== _ref4 || input.checked) && formData.append(inputName, input.value);
                for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) formData.append(this._getParamName(i), files[i], files[i].name);
                return xhr.send(formData);
            }, Dropzone.prototype._finished = function(files, responseText, e) {
                var file, _i, _len;
                for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.status = Dropzone.SUCCESS, 
                this.emit("success", file, responseText, e), this.emit("complete", file);
                if (this.options.uploadMultiple && (this.emit("successmultiple", files, responseText, e), 
                this.emit("completemultiple", files)), this.options.autoProcessQueue) return this.processQueue();
            }, Dropzone.prototype._errorProcessing = function(files, message, xhr) {
                var file, _i, _len;
                for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.status = Dropzone.ERROR, 
                this.emit("error", file, message, xhr), this.emit("complete", file);
                if (this.options.uploadMultiple && (this.emit("errormultiple", files, message, xhr), 
                this.emit("completemultiple", files)), this.options.autoProcessQueue) return this.processQueue();
            }, Dropzone;
        }(Em), Dropzone.version = "3.10.2", Dropzone.options = {}, Dropzone.optionsForElement = function(element) {
            return element.getAttribute("id") ? Dropzone.options[camelize(element.getAttribute("id"))] : void 0;
        }, Dropzone.instances = [], Dropzone.forElement = function(element) {
            if ("string" == typeof element && (element = document.querySelector(element)), null == (null != element ? element.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            return element.dropzone;
        }, Dropzone.autoDiscover = !0, Dropzone.discover = function() {
            var checkElements, dropzone, dropzones, _i, _len, _results;
            for (document.querySelectorAll ? dropzones = document.querySelectorAll(".dropzone") : (dropzones = [], 
            checkElements = function(elements) {
                var el, _i, _len, _results;
                for (_results = [], _i = 0, _len = elements.length; _i < _len; _i++) el = elements[_i], 
                /(^| )dropzone($| )/.test(el.className) ? _results.push(dropzones.push(el)) : _results.push(void 0);
                return _results;
            }, checkElements(document.getElementsByTagName("div")), checkElements(document.getElementsByTagName("form"))), 
            _results = [], _i = 0, _len = dropzones.length; _i < _len; _i++) dropzone = dropzones[_i], 
            Dropzone.optionsForElement(dropzone) !== !1 ? _results.push(new Dropzone(dropzone)) : _results.push(void 0);
            return _results;
        }, Dropzone.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], Dropzone.isBrowserSupported = function() {
            var capableBrowser, regex, _i, _len, _ref;
            if (capableBrowser = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (_ref = Dropzone.blacklistedBrowsers, 
            _i = 0, _len = _ref.length; _i < _len; _i++) regex = _ref[_i], regex.test(navigator.userAgent) && (capableBrowser = !1); else capableBrowser = !1; else capableBrowser = !1;
            return capableBrowser;
        }, without = function(list, rejectedItem) {
            var item, _i, _len, _results;
            for (_results = [], _i = 0, _len = list.length; _i < _len; _i++) item = list[_i], 
            item !== rejectedItem && _results.push(item);
            return _results;
        }, camelize = function(str) {
            return str.replace(/[\-_](\w)/g, function(match) {
                return match.charAt(1).toUpperCase();
            });
        }, Dropzone.createElement = function(string) {
            var div;
            return div = document.createElement("div"), div.innerHTML = string, div.childNodes[0];
        }, Dropzone.elementInside = function(element, container) {
            if (element === container) return !0;
            for (;element = element.parentNode; ) if (element === container) return !0;
            return !1;
        }, Dropzone.getElement = function(el, name) {
            var element;
            if ("string" == typeof el ? element = document.querySelector(el) : null != el.nodeType && (element = el), 
            null == element) throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
            return element;
        }, Dropzone.getElements = function(els, name) {
            var e, el, elements, _i, _j, _len, _len1, _ref;
            if (els instanceof Array) {
                elements = [];
                try {
                    for (_i = 0, _len = els.length; _i < _len; _i++) el = els[_i], elements.push(this.getElement(el, name));
                } catch (_error) {
                    e = _error, elements = null;
                }
            } else if ("string" == typeof els) for (elements = [], _ref = document.querySelectorAll(els), 
            _j = 0, _len1 = _ref.length; _j < _len1; _j++) el = _ref[_j], elements.push(el); else null != els.nodeType && (elements = [ els ]);
            if (null == elements || !elements.length) throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
            return elements;
        }, Dropzone.confirm = function(question, accepted, rejected) {
            return window.confirm(question) ? accepted() : null != rejected ? rejected() : void 0;
        }, Dropzone.isValidFile = function(file, acceptedFiles) {
            var baseMimeType, mimeType, validType, _i, _len;
            if (!acceptedFiles) return !0;
            for (acceptedFiles = acceptedFiles.split(","), mimeType = file.type, baseMimeType = mimeType.replace(/\/.*$/, ""), 
            _i = 0, _len = acceptedFiles.length; _i < _len; _i++) if (validType = acceptedFiles[_i], 
            validType = validType.trim(), "." === validType.charAt(0)) {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return !0;
            } else if (/\/\*$/.test(validType)) {
                if (baseMimeType === validType.replace(/\/.*$/, "")) return !0;
            } else if (mimeType === validType) return !0;
            return !1;
        }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(options) {
            return this.each(function() {
                return new Dropzone(this, options);
            });
        }), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, 
        Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, 
        Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", 
        Dropzone.ERROR = "error", Dropzone.SUCCESS = "success", detectVerticalSquash = function(img) {
            var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
            for (iw = img.naturalWidth, ih = img.naturalHeight, canvas = document.createElement("canvas"), 
            canvas.width = 1, canvas.height = ih, ctx = canvas.getContext("2d"), ctx.drawImage(img, 0, 0), 
            data = ctx.getImageData(0, 0, 1, ih).data, sy = 0, ey = ih, py = ih; py > sy; ) alpha = data[4 * (py - 1) + 3], 
            0 === alpha ? ey = py : sy = py, py = ey + sy >> 1;
            return ratio = py / ih, 0 === ratio ? 1 : ratio;
        }, drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
            var vertSquashRatio;
            return vertSquashRatio = detectVerticalSquash(img), ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        }, contentLoaded = function(win, fn) {
            var add, doc, done, init, poll, pre, rem, root, top;
            if (done = !1, top = !0, doc = win.document, root = doc.documentElement, add = doc.addEventListener ? "addEventListener" : "attachEvent", 
            rem = doc.addEventListener ? "removeEventListener" : "detachEvent", pre = doc.addEventListener ? "" : "on", 
            init = function(e) {
                if ("readystatechange" !== e.type || "complete" === doc.readyState) return ("load" === e.type ? win : doc)[rem](pre + e.type, init, !1), 
                !done && (done = !0) ? fn.call(win, e.type || e) : void 0;
            }, poll = function() {
                var e;
                try {
                    root.doScroll("left");
                } catch (_error) {
                    return e = _error, void setTimeout(poll, 50);
                }
                return init("poll");
            }, "complete" !== doc.readyState) {
                if (doc.createEventObject && root.doScroll) {
                    try {
                        top = !win.frameElement;
                    } catch (_error) {}
                    top && poll();
                }
                return doc[add](pre + "DOMContentLoaded", init, !1), doc[add](pre + "readystatechange", init, !1), 
                win[add](pre + "load", init, !1);
            }
        }, Dropzone._autoDiscoverFunction = function() {
            if (Dropzone.autoDiscover) return Dropzone.discover();
        }, contentLoaded(window, Dropzone._autoDiscoverFunction);
    }.call(this), module.exports;
}), !function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery);
}(function(a) {
    function b(a) {
        return a ? c(a) : void 0;
    }
    function c(a) {
        for (var c in b.prototype) a[c] = b.prototype[c];
        return a;
    }
    var d = {
        exports: {}
    };
    return d.exports = b, b.prototype.on = b.prototype.addEventListener = function(a, b) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), 
        this;
    }, b.prototype.once = function(a, b) {
        function c() {
            d.off(a, c), b.apply(this, arguments);
        }
        var d = this;
        return this._callbacks = this._callbacks || {}, c.fn = b, this.on(a, c), this;
    }, b.prototype.off = b.prototype.removeListener = b.prototype.removeAllListeners = b.prototype.removeEventListener = function(a, b) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
        this;
        var c = this._callbacks[a];
        if (!c) return this;
        if (1 == arguments.length) return delete this._callbacks[a], this;
        for (var d, e = 0; e < c.length; e++) if (d = c[e], d === b || d.fn === b) {
            c.splice(e, 1);
            break;
        }
        return this;
    }, b.prototype.emit = function(a) {
        this._callbacks = this._callbacks || {};
        var b = [].slice.call(arguments, 1), c = this._callbacks[a];
        if (c) {
            c = c.slice(0);
            for (var d = 0, e = c.length; e > d; ++d) c[d].apply(this, b);
        }
        return this;
    }, b.prototype.listeners = function(a) {
        return this._callbacks = this._callbacks || {}, this._callbacks[a] || [];
    }, b.prototype.hasListeners = function(a) {
        return !!this.listeners(a).length;
    }, function() {
        var c, e, f, g, h, i, j, k, l = {}.hasOwnProperty, m = function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) l.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
            a;
        }, n = [].slice;
        e = "undefined" != typeof b && null !== b ? b : require("emitter"), j = function() {}, 
        c = function(a) {
            function b(a, d) {
                var e, f, g;
                if (this.element = a, this.version = b.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
                this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
                !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                if (this.element.dropzone) throw new Error("Dropzone already attached.");
                if (b.instances.push(this), this.element.dropzone = this, e = null != (g = b.optionsForElement(this.element)) ? g : {}, 
                this.options = c({}, this.defaultOptions, e, null != d ? d : {}), this.options.forceFallback || !b.isBrowserSupported()) return this.options.fallback.call(this);
                if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
                !this.options.url) throw new Error("No URL provided.");
                if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
                delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), 
                (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), 
                this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? b.getElement(this.options.previewsContainer, "previewsContainer") : this.element), 
                this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [ this.element ] : b.getElements(this.options.clickable, "clickable")), 
                this.init();
            }
            var c;
            return m(b, a), b.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached" ], 
            b.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                parallelUploads: 2,
                uploadMultiple: !1,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                maxFiles: null,
                params: {},
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                accept: function(a, b) {
                    return b();
                },
                init: function() {
                    return j;
                },
                forceFallback: !1,
                fallback: function() {
                    var a, c, d, e, f, g;
                    for (this.element.className = "" + this.element.className + " dz-browser-not-supported", 
                    g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], 
                    /(^| )dz-message($| )/.test(a.className) && (c = a, a.className = "dz-message");
                    return c || (c = b.createElement('<div class="dz-message"><span></span></div>'), 
                    this.element.appendChild(c)), d = c.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), 
                    this.element.appendChild(this.getFallbackForm());
                },
                resize: function(a) {
                    var b, c, d;
                    return b = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: a.width,
                        srcHeight: a.height
                    }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, 
                    null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), 
                    d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, 
                    b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, 
                    b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, 
                    b;
                },
                drop: function() {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragstart: j,
                dragend: function() {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragenter: function() {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragover: function() {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragleave: function() {
                    return this.element.classList.remove("dz-drag-hover");
                },
                paste: j,
                reset: function() {
                    return this.element.classList.remove("dz-started");
                },
                addedfile: function(a) {
                    var c, d, e, f, g, h, i, j, k, l, m, n, o;
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                    this.previewsContainer) {
                        for (a.previewElement = b.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, 
                        this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), 
                        f = 0, i = l.length; i > f; f++) c = l[f], c.textContent = a.name;
                        for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) c = m[g], 
                        c.innerHTML = this.filesize(a.size);
                        for (this.options.addRemoveLinks && (a._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                        a.previewElement.appendChild(a._removeLink)), d = function(c) {
                            return function(d) {
                                return d.preventDefault(), d.stopPropagation(), a.status === b.UPLOADING ? b.confirm(c.options.dictCancelUploadConfirmation, function() {
                                    return c.removeFile(a);
                                }) : c.options.dictRemoveFileConfirmation ? b.confirm(c.options.dictRemoveFileConfirmation, function() {
                                    return c.removeFile(a);
                                }) : c.removeFile(a);
                            };
                        }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, 
                        k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                        return o;
                    }
                },
                removedfile: function(a) {
                    var b;
                    return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), 
                    this._updateMaxFilesReachedClass();
                },
                thumbnail: function(a, b) {
                    var c, d, e, f, g;
                    if (a.previewElement) {
                        for (a.previewElement.classList.remove("dz-file-preview"), a.previewElement.classList.add("dz-image-preview"), 
                        f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], 
                        c.alt = a.name, g.push(c.src = b);
                        return g;
                    }
                },
                error: function(a, b) {
                    var c, d, e, f, g;
                    if (a.previewElement) {
                        for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), 
                        f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, 
                        e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                        return g;
                    }
                },
                errormultiple: j,
                processing: function(a) {
                    return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0;
                },
                processingmultiple: j,
                uploadprogress: function(a, b) {
                    var c, d, e, f, g;
                    if (a.previewElement) {
                        for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], 
                        d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.style.width = "" + b + "%");
                        return g;
                    }
                },
                totaluploadprogress: j,
                sending: j,
                sendingmultiple: j,
                success: function(a) {
                    return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0;
                },
                successmultiple: j,
                canceled: function(a) {
                    return this.emit("error", a, "Upload canceled.");
                },
                canceledmultiple: j,
                complete: function(a) {
                    return a._removeLink ? a._removeLink.textContent = this.options.dictRemoveFile : void 0;
                },
                completemultiple: j,
                maxfilesexceeded: j,
                maxfilesreached: j,
                previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
            }, c = function() {
                var a, b, c, d, e, f, g;
                for (d = arguments[0], c = 2 <= arguments.length ? n.call(arguments, 1) : [], f = 0, 
                g = c.length; g > f; f++) {
                    b = c[f];
                    for (a in b) e = b[a], d[a] = e;
                }
                return d;
            }, b.prototype.getAcceptedFiles = function() {
                var a, b, c, d, e;
                for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
                return e;
            }, b.prototype.getRejectedFiles = function() {
                var a, b, c, d, e;
                for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
                return e;
            }, b.prototype.getFilesWithStatus = function(a) {
                var b, c, d, e, f;
                for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
                return f;
            }, b.prototype.getQueuedFiles = function() {
                return this.getFilesWithStatus(b.QUEUED);
            }, b.prototype.getUploadingFiles = function() {
                return this.getFilesWithStatus(b.UPLOADING);
            }, b.prototype.getActiveFiles = function() {
                var a, c, d, e, f;
                for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) a = e[c], (a.status === b.UPLOADING || a.status === b.QUEUED) && f.push(a);
                return f;
            }, b.prototype.init = function() {
                var a, c, d, e, f, g, h;
                for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
                this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
                this.clickableElements.length && (d = function(a) {
                    return function() {
                        return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), 
                        a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), 
                        a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), 
                        a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", 
                        a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", 
                        a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), 
                        a.hiddenFileInput.addEventListener("change", function() {
                            var b, c, e, f;
                            if (c = a.hiddenFileInput.files, c.length) for (e = 0, f = c.length; f > e; e++) b = c[e], 
                            a.addFile(b);
                            return d();
                        });
                    };
                }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, 
                e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
                return this.on("uploadprogress", function(a) {
                    return function() {
                        return a.updateTotalUploadProgress();
                    };
                }(this)), this.on("removedfile", function(a) {
                    return function() {
                        return a.updateTotalUploadProgress();
                    };
                }(this)), this.on("canceled", function(a) {
                    return function(b) {
                        return a.emit("complete", b);
                    };
                }(this)), this.on("complete", function(a) {
                    return function() {
                        return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function() {
                            return a.emit("queuecomplete");
                        }, 0) : void 0;
                    };
                }(this)), c = function(a) {
                    return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                }, this.listeners = [ {
                    element: this.element,
                    events: {
                        dragstart: function(a) {
                            return function(b) {
                                return a.emit("dragstart", b);
                            };
                        }(this),
                        dragenter: function(a) {
                            return function(b) {
                                return c(b), a.emit("dragenter", b);
                            };
                        }(this),
                        dragover: function(a) {
                            return function(b) {
                                var d;
                                try {
                                    d = b.dataTransfer.effectAllowed;
                                } catch (e) {}
                                return b.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", 
                                c(b), a.emit("dragover", b);
                            };
                        }(this),
                        dragleave: function(a) {
                            return function(b) {
                                return a.emit("dragleave", b);
                            };
                        }(this),
                        drop: function(a) {
                            return function(b) {
                                return c(b), a.drop(b);
                            };
                        }(this),
                        dragend: function(a) {
                            return function(b) {
                                return a.emit("dragend", b);
                            };
                        }(this)
                    }
                } ], this.clickableElements.forEach(function(a) {
                    return function(c) {
                        return a.listeners.push({
                            element: c,
                            events: {
                                click: function(d) {
                                    return c !== a.element || d.target === a.element || b.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0;
                                }
                            }
                        });
                    };
                }(this)), this.enable(), this.options.init.call(this);
            }, b.prototype.destroy = function() {
                var a;
                return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
                this.hiddenFileInput = null), delete this.element.dropzone, b.instances.splice(b.instances.indexOf(this), 1);
            }, b.prototype.updateTotalUploadProgress = function() {
                var a, b, c, d, e, f, g, h;
                if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                    for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, 
                    c += b.upload.total;
                    e = 100 * d / c;
                } else e = 100;
                return this.emit("totaluploadprogress", e, c, d);
            }, b.prototype._getParamName = function(a) {
                return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "");
            }, b.prototype.getFallbackForm = function() {
                var a, c, d, e;
                return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', 
                this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), 
                d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
                c = b.createElement(d), "FORM" !== this.element.tagName ? (e = b.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), 
                e.appendChild(c)) : (this.element.setAttribute("enctype", "multipart/form-data"), 
                this.element.setAttribute("method", this.options.method)), null != e ? e : c);
            }, b.prototype.getExistingFallback = function() {
                var a, b, c, d, e, f;
                for (b = function(a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++) if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b;
                }, f = [ "div", "form" ], d = 0, e = f.length; e > d; d++) if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a;
            }, b.prototype.setupEventListeners = function() {
                var a, b, c, d, e, f, g;
                for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                    var d, e;
                    d = a.events, e = [];
                    for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                    return e;
                }());
                return g;
            }, b.prototype.removeEventListeners = function() {
                var a, b, c, d, e, f, g;
                for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                    var d, e;
                    d = a.events, e = [];
                    for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                    return e;
                }());
                return g;
            }, b.prototype.disable = function() {
                var a, b, c, d, e;
                for (this.clickableElements.forEach(function(a) {
                    return a.classList.remove("dz-clickable");
                }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], 
                e.push(this.cancelUpload(a));
                return e;
            }, b.prototype.enable = function() {
                return this.clickableElements.forEach(function(a) {
                    return a.classList.add("dz-clickable");
                }), this.setupEventListeners();
            }, b.prototype.filesize = function(a) {
                var b;
                return a >= 109951162777.6 ? (a /= 109951162777.6, b = "TiB") : a >= 107374182.4 ? (a /= 107374182.4, 
                b = "GiB") : a >= 104857.6 ? (a /= 104857.6, b = "MiB") : a >= 102.4 ? (a /= 102.4, 
                b = "KiB") : (a = 10 * a, b = "b"), "<strong>" + Math.round(a) / 10 + "</strong> " + b;
            }, b.prototype._updateMaxFilesReachedClass = function() {
                return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
                this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
            }, b.prototype.drop = function(a) {
                var b, c;
                a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, 
                c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)));
            }, b.prototype.paste = function(a) {
                var b, c;
                if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), 
                b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0;
            }, b.prototype.handleFiles = function(a) {
                var b, c, d, e;
                for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
                return e;
            }, b.prototype._addFilesFromItems = function(a) {
                var b, c, d, e, f;
                for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile && (null == c.kind || "file" === c.kind) ? this.addFile(c.getAsFile()) : void 0);
                return f;
            }, b.prototype._addFilesFromDirectory = function(a, b) {
                var c, d;
                return c = a.createReader(), d = function(a) {
                    return function(c) {
                        var d, e, f;
                        for (e = 0, f = c.length; f > e; e++) d = c[e], d.isFile ? d.file(function(c) {
                            return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, 
                            a.addFile(c));
                        }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name);
                    };
                }(this), c.readEntries(d, function(a) {
                    return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0;
                });
            }, b.prototype.accept = function(a, c) {
                return a.size > 1024 * this.options.maxFilesize * 1024 ? c(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : b.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
                this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, c) : c(this.options.dictInvalidFileType);
            }, b.prototype.addFile = function(a) {
                return a.upload = {
                    progress: 0,
                    total: a.size,
                    bytesSent: 0
                }, this.files.push(a), a.status = b.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), 
                this.accept(a, function(b) {
                    return function(c) {
                        return c ? (a.accepted = !1, b._errorProcessing([ a ], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), 
                        b._updateMaxFilesReachedClass();
                    };
                }(this));
            }, b.prototype.enqueueFiles = function(a) {
                var b, c, d;
                for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
                return null;
            }, b.prototype.enqueueFile = function(a) {
                if (a.status !== b.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                return a.status = b.QUEUED, this.options.autoProcessQueue ? setTimeout(function(a) {
                    return function() {
                        return a.processQueue();
                    };
                }(this), 0) : void 0;
            }, b.prototype._thumbnailQueue = [], b.prototype._processingThumbnail = !1, b.prototype._enqueueThumbnail = function(a) {
                return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), 
                setTimeout(function(a) {
                    return function() {
                        return a._processThumbnailQueue();
                    };
                }(this), 0)) : void 0;
            }, b.prototype._processThumbnailQueue = function() {
                return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, 
                this.createThumbnail(this._thumbnailQueue.shift(), function(a) {
                    return function() {
                        return a._processingThumbnail = !1, a._processThumbnailQueue();
                    };
                }(this)));
            }, b.prototype.removeFile = function(a) {
                return a.status === b.UPLOADING && this.cancelUpload(a), this.files = k(this.files, a), 
                this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0;
            }, b.prototype.removeAllFiles = function(a) {
                var c, d, e, f;
                for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) c = f[d], 
                (c.status !== b.UPLOADING || a) && this.removeFile(c);
                return null;
            }, b.prototype.createThumbnail = function(a, b) {
                var c;
                return c = new FileReader(), c.onload = function(d) {
                    return function() {
                        var e;
                        return e = document.createElement("img"), e.onload = function() {
                            var c, f, g, h, j, k, l, m;
                            return a.width = e.width, a.height = e.height, g = d.options.resize.call(d, a), 
                            null == g.trgWidth && (g.trgWidth = g.optWidth), null == g.trgHeight && (g.trgHeight = g.optHeight), 
                            c = document.createElement("canvas"), f = c.getContext("2d"), c.width = g.trgWidth, 
                            c.height = g.trgHeight, i(f, e, null != (j = g.srcX) ? j : 0, null != (k = g.srcY) ? k : 0, g.srcWidth, g.srcHeight, null != (l = g.trgX) ? l : 0, null != (m = g.trgY) ? m : 0, g.trgWidth, g.trgHeight), 
                            h = c.toDataURL("image/png"), d.emit("thumbnail", a, h), null != b ? b() : void 0;
                        }, e.src = c.result;
                    };
                }(this), c.readAsDataURL(a);
            }, b.prototype.processQueue = function() {
                var a, b, c, d;
                if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, 
                !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                    if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                    for (;b > a; ) {
                        if (!d.length) return;
                        this.processFile(d.shift()), a++;
                    }
                }
            }, b.prototype.processFile = function(a) {
                return this.processFiles([ a ]);
            }, b.prototype.processFiles = function(a) {
                var c, d, e;
                for (d = 0, e = a.length; e > d; d++) c = a[d], c.processing = !0, c.status = b.UPLOADING, 
                this.emit("processing", c);
                return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a);
            }, b.prototype._getFilesWithXhr = function(a) {
                var b, c;
                return c = function() {
                    var c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                    return f;
                }.call(this);
            }, b.prototype.cancelUpload = function(a) {
                var c, d, e, f, g, h, i;
                if (a.status === b.UPLOADING) {
                    for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) c = d[e], 
                    c.status = b.CANCELED;
                    for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) c = d[f], this.emit("canceled", c);
                    this.options.uploadMultiple && this.emit("canceledmultiple", d);
                } else ((i = a.status) === b.ADDED || i === b.QUEUED) && (a.status = b.CANCELED, 
                this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [ a ]));
                return this.options.autoProcessQueue ? this.processQueue() : void 0;
            }, b.prototype.uploadFile = function(a) {
                return this.uploadFiles([ a ]);
            }, b.prototype.uploadFiles = function(a) {
                var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
                for (t = new XMLHttpRequest(), u = 0, y = a.length; y > u; u++) d = a[u], d.xhr = t;
                t.open(this.options.method, this.options.url, !0), t.withCredentials = !!this.options.withCredentials, 
                q = null, f = function(b) {
                    return function() {
                        var c, e, f;
                        for (f = [], c = 0, e = a.length; e > c; c++) d = a[c], f.push(b._errorProcessing(a, q || b.options.dictResponseError.replace("{{statusCode}}", t.status), t));
                        return f;
                    };
                }(this), r = function(b) {
                    return function(c) {
                        var e, f, g, h, i, j, k, l, m;
                        if (null != c) for (f = 100 * c.loaded / c.total, g = 0, j = a.length; j > g; g++) d = a[g], 
                        d.upload = {
                            progress: f,
                            total: c.total,
                            bytesSent: c.loaded
                        }; else {
                            for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) d = a[h], (100 !== d.upload.progress || d.upload.bytesSent !== d.upload.total) && (e = !1), 
                            d.upload.progress = f, d.upload.bytesSent = d.upload.total;
                            if (e) return;
                        }
                        for (m = [], i = 0, l = a.length; l > i; i++) d = a[i], m.push(b.emit("uploadprogress", d, f, d.upload.bytesSent));
                        return m;
                    };
                }(this), t.onload = function(c) {
                    return function(d) {
                        var e;
                        if (a[0].status !== b.CANCELED && 4 === t.readyState) {
                            if (q = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json")) try {
                                q = JSON.parse(q);
                            } catch (g) {
                                d = g, q = "Invalid JSON response from server.";
                            }
                            return r(), 200 <= (e = t.status) && 300 > e ? c._finished(a, q, d) : f();
                        }
                    };
                }(this), t.onerror = function() {
                    return function() {
                        return a[0].status !== b.CANCELED ? f() : void 0;
                    };
                }(this), p = null != (D = t.upload) ? D : t, p.onprogress = r, i = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                }, this.options.headers && c(i, this.options.headers);
                for (g in i) h = i[g], t.setRequestHeader(g, h);
                if (e = new FormData(), this.options.params) {
                    E = this.options.params;
                    for (n in E) s = E[n], e.append(n, s);
                }
                for (v = 0, z = a.length; z > v; v++) d = a[v], this.emit("sending", d, t, e);
                if (this.options.uploadMultiple && this.emit("sendingmultiple", a, t, e), "FORM" === this.element.tagName) for (F = this.element.querySelectorAll("input, textarea, select, button"), 
                w = 0, A = F.length; A > w; w++) if (k = F[w], l = k.getAttribute("name"), m = k.getAttribute("type"), 
                "SELECT" === k.tagName && k.hasAttribute("multiple")) for (G = k.options, x = 0, 
                B = G.length; B > x; x++) o = G[x], o.selected && e.append(l, o.value); else (!m || "checkbox" !== (H = m.toLowerCase()) && "radio" !== H || k.checked) && e.append(l, k.value);
                for (j = C = 0, I = a.length - 1; I >= 0 ? I >= C : C >= I; j = I >= 0 ? ++C : --C) e.append(this._getParamName(j), a[j], a[j].name);
                return t.send(e);
            }, b.prototype._finished = function(a, c, d) {
                var e, f, g;
                for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = b.SUCCESS, this.emit("success", e, c, d), 
                this.emit("complete", e);
                return this.options.uploadMultiple && (this.emit("successmultiple", a, c, d), this.emit("completemultiple", a)), 
                this.options.autoProcessQueue ? this.processQueue() : void 0;
            }, b.prototype._errorProcessing = function(a, c, d) {
                var e, f, g;
                for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = b.ERROR, this.emit("error", e, c, d), 
                this.emit("complete", e);
                return this.options.uploadMultiple && (this.emit("errormultiple", a, c, d), this.emit("completemultiple", a)), 
                this.options.autoProcessQueue ? this.processQueue() : void 0;
            }, b;
        }(e), c.version = "3.10.2", c.options = {}, c.optionsForElement = function(a) {
            return a.getAttribute("id") ? c.options[f(a.getAttribute("id"))] : void 0;
        }, c.instances = [], c.forElement = function(a) {
            if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            return a.dropzone;
        }, c.autoDiscover = !0, c.discover = function() {
            var a, b, d, e, f, g;
            for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], 
            a = function(a) {
                var b, c, e, f;
                for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                return f;
            }, a(document.getElementsByTagName("div")), a(document.getElementsByTagName("form"))), 
            g = [], e = 0, f = d.length; f > e; e++) b = d[e], g.push(c.optionsForElement(b) !== !1 ? new c(b) : void 0);
            return g;
        }, c.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], c.isBrowserSupported = function() {
            var a, b, d, e, f;
            if (a = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (f = c.blacklistedBrowsers, 
            d = 0, e = f.length; e > d; d++) b = f[d], b.test(navigator.userAgent) && (a = !1); else a = !1; else a = !1;
            return a;
        }, k = function(a, b) {
            var c, d, e, f;
            for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
            return f;
        }, f = function(a) {
            return a.replace(/[\-_](\w)/g, function(a) {
                return a.charAt(1).toUpperCase();
            });
        }, c.createElement = function(a) {
            var b;
            return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0];
        }, c.elementInside = function(a, b) {
            if (a === b) return !0;
            for (;a = a.parentNode; ) if (a === b) return !0;
            return !1;
        }, c.getElement = function(a, b) {
            var c;
            if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), 
            null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
            return c;
        }, c.getElements = function(a, b) {
            var c, d, e, f, g, h, i, j;
            if (a instanceof Array) {
                e = [];
                try {
                    for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b));
                } catch (k) {
                    c = k, e = null;
                }
            } else if ("string" == typeof a) for (e = [], j = document.querySelectorAll(a), 
            g = 0, i = j.length; i > g; g++) d = j[g], e.push(d); else null != a.nodeType && (e = [ a ]);
            if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
            return e;
        }, c.confirm = function(a, b, c) {
            return window.confirm(a) ? b() : null != c ? c() : void 0;
        }, c.isValidFile = function(a, b) {
            var c, d, e, f, g;
            if (!b) return !0;
            for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++) if (e = b[f], 
            e = e.trim(), "." === e.charAt(0)) {
                if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0;
            } else if (/\/\*$/.test(e)) {
                if (c === e.replace(/\/.*$/, "")) return !0;
            } else if (d === e) return !0;
            return !1;
        }, "undefined" != typeof a && null !== a && (a.fn.dropzone = function(a) {
            return this.each(function() {
                return new c(this, a);
            });
        }), "undefined" != typeof d && null !== d ? d.exports = c : window.Dropzone = c, 
        c.ADDED = "added", c.QUEUED = "queued", c.ACCEPTED = c.QUEUED, c.UPLOADING = "uploading", 
        c.PROCESSING = c.UPLOADING, c.CANCELED = "canceled", c.ERROR = "error", c.SUCCESS = "success", 
        h = function(a) {
            var b, c, d, e, f, g, h, i, j, k;
            for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), 
            c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, 
            k = 0, f = g, i = g; i > k; ) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
            return j = i / g, 0 === j ? 1 : j;
        }, i = function(a, b, c, d, e, f, g, i, j, k) {
            var l;
            return l = h(b), a.drawImage(b, c, d, e, f, g, i, j, k / l);
        }, g = function(a, b) {
            var c, d, e, f, g, h, i, j, k;
            if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", 
            i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", 
            f = function(c) {
                return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), 
                !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0;
            }, g = function() {
                var a;
                try {
                    j.doScroll("left");
                } catch (b) {
                    return a = b, void setTimeout(g, 50);
                }
                return f("poll");
            }, "complete" !== d.readyState) {
                if (d.createEventObject && j.doScroll) {
                    try {
                        k = !a.frameElement;
                    } catch (l) {}
                    k && g();
                }
                return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), 
                a[c](h + "load", f, !1);
            }
        }, c._autoDiscoverFunction = function() {
            return c.autoDiscover ? c.discover() : void 0;
        }, g(window, c._autoDiscoverFunction);
    }.call(this), d.exports;
}), function() {
    function require(name) {
        var module = require.modules[name];
        if (!module) throw new Error('failed to require "' + name + '"');
        return "exports" in module || "function" != typeof module.definition || (module.client = module.component = !0, 
        module.definition.call(this, module.exports = {}, module), delete module.definition), 
        module.exports;
    }
    require.modules = {}, require.register = function(name, definition) {
        require.modules[name] = {
            definition: definition
        };
    }, require.define = function(name, exports) {
        require.modules[name] = {
            exports: exports
        };
    }, require.register("component~emitter@1.1.2", function(exports, module) {
        function Emitter(obj) {
            if (obj) return mixin(obj);
        }
        function mixin(obj) {
            for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
            return obj;
        }
        module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[event] = this._callbacks[event] || []).push(fn), 
            this;
        }, Emitter.prototype.once = function(event, fn) {
            function on() {
                self.off(event, on), fn.apply(this, arguments);
            }
            var self = this;
            return this._callbacks = this._callbacks || {}, on.fn = fn, this.on(event, on), 
            this;
        }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
            this;
            var callbacks = this._callbacks[event];
            if (!callbacks) return this;
            if (1 == arguments.length) return delete this._callbacks[event], this;
            for (var cb, i = 0; i < callbacks.length; i++) if (cb = callbacks[i], cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
            return this;
        }, Emitter.prototype.emit = function(event) {
            this._callbacks = this._callbacks || {};
            var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
            if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0, len = callbacks.length; i < len; ++i) callbacks[i].apply(this, args);
            }
            return this;
        }, Emitter.prototype.listeners = function(event) {
            return this._callbacks = this._callbacks || {}, this._callbacks[event] || [];
        }, Emitter.prototype.hasListeners = function(event) {
            return !!this.listeners(event).length;
        };
    }), require.register("dropzone", function(exports, module) {
        module.exports = require("dropzone/lib/dropzone.js");
    }), require.register("dropzone/lib/dropzone.js", function(exports, module) {
        (function() {
            var Dropzone, Em, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
                function ctor() {
                    this.constructor = child;
                }
                for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
                return ctor.prototype = parent.prototype, child.prototype = new ctor(), child.__super__ = parent.prototype, 
                child;
            }, __slice = [].slice;
            Em = "undefined" != typeof Emitter && null !== Emitter ? Emitter : require("component~emitter@1.1.2"), 
            noop = function() {}, Dropzone = function(_super) {
                function Dropzone(element, options) {
                    var elementOptions, fallback, _ref;
                    if (this.element = element, this.version = Dropzone.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
                    this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
                    !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone) throw new Error("Dropzone already attached.");
                    if (Dropzone.instances.push(this), this.element.dropzone = this, elementOptions = null != (_ref = Dropzone.optionsForElement(this.element)) ? _ref : {}, 
                    this.options = extend({}, this.defaultOptions, elementOptions, null != options ? options : {}), 
                    this.options.forceFallback || !Dropzone.isBrowserSupported()) return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
                    !this.options.url) throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
                    delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), 
                    (fallback = this.getExistingFallback()) && fallback.parentNode && fallback.parentNode.removeChild(fallback), 
                    this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), 
                    this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [ this.element ] : this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable")), 
                    this.init();
                }
                var extend;
                return __extends(Dropzone, _super), Dropzone.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached" ], 
                Dropzone.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 100,
                    thumbnailHeight: 100,
                    maxFiles: null,
                    params: {},
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    accept: function(file, done) {
                        return done();
                    },
                    init: function() {
                        return noop;
                    },
                    forceFallback: !1,
                    fallback: function() {
                        var child, messageElement, span, _i, _len, _ref;
                        for (this.element.className = "" + this.element.className + " dz-browser-not-supported", 
                        _ref = this.element.getElementsByTagName("div"), _i = 0, _len = _ref.length; _i < _len; _i++) child = _ref[_i], 
                        /(^| )dz-message($| )/.test(child.className) && (messageElement = child, child.className = "dz-message");
                        return messageElement || (messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>'), 
                        this.element.appendChild(messageElement)), span = messageElement.getElementsByTagName("span")[0], 
                        span && (span.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm());
                    },
                    resize: function(file) {
                        var info, srcRatio, trgRatio;
                        return info = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: file.width,
                            srcHeight: file.height
                        }, srcRatio = file.width / file.height, info.optWidth = this.options.thumbnailWidth, 
                        info.optHeight = this.options.thumbnailHeight, null == info.optWidth && null == info.optHeight ? (info.optWidth = info.srcWidth, 
                        info.optHeight = info.srcHeight) : null == info.optWidth ? info.optWidth = srcRatio * info.optHeight : null == info.optHeight && (info.optHeight = 1 / srcRatio * info.optWidth), 
                        trgRatio = info.optWidth / info.optHeight, file.height < info.optHeight || file.width < info.optWidth ? (info.trgHeight = info.srcHeight, 
                        info.trgWidth = info.srcWidth) : srcRatio > trgRatio ? (info.srcHeight = file.height, 
                        info.srcWidth = info.srcHeight * trgRatio) : (info.srcWidth = file.width, info.srcHeight = info.srcWidth / trgRatio), 
                        info.srcX = (file.width - info.srcWidth) / 2, info.srcY = (file.height - info.srcHeight) / 2, 
                        info;
                    },
                    drop: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragstart: noop,
                    dragend: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragenter: function(e) {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragover: function(e) {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragleave: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    paste: noop,
                    reset: function() {
                        return this.element.classList.remove("dz-started");
                    },
                    addedfile: function(file) {
                        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                        this.previewsContainer) {
                            for (file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim()), 
                            file.previewTemplate = file.previewElement, this.previewsContainer.appendChild(file.previewElement), 
                            _ref = file.previewElement.querySelectorAll("[data-dz-name]"), _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], 
                            node.textContent = file.name;
                            for (_ref1 = file.previewElement.querySelectorAll("[data-dz-size]"), _j = 0, _len1 = _ref1.length; _j < _len1; _j++) node = _ref1[_j], 
                            node.innerHTML = this.filesize(file.size);
                            for (this.options.addRemoveLinks && (file._removeLink = Dropzone.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                            file.previewElement.appendChild(file._removeLink)), removeFileEvent = function(_this) {
                                return function(e) {
                                    return e.preventDefault(), e.stopPropagation(), file.status === Dropzone.UPLOADING ? Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                                        return _this.removeFile(file);
                                    }) : _this.options.dictRemoveFileConfirmation ? Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                                        return _this.removeFile(file);
                                    }) : _this.removeFile(file);
                                };
                            }(this), _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]"), _results = [], 
                            _k = 0, _len2 = _ref2.length; _k < _len2; _k++) removeLink = _ref2[_k], _results.push(removeLink.addEventListener("click", removeFileEvent));
                            return _results;
                        }
                    },
                    removedfile: function(file) {
                        var _ref;
                        return file.previewElement && null != (_ref = file.previewElement) && _ref.parentNode.removeChild(file.previewElement), 
                        this._updateMaxFilesReachedClass();
                    },
                    thumbnail: function(file, dataUrl) {
                        var thumbnailElement, _i, _len, _ref, _results;
                        if (file.previewElement) {
                            for (file.previewElement.classList.remove("dz-file-preview"), file.previewElement.classList.add("dz-image-preview"), 
                            _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _results = [], 
                            _i = 0, _len = _ref.length; _i < _len; _i++) thumbnailElement = _ref[_i], thumbnailElement.alt = file.name, 
                            _results.push(thumbnailElement.src = dataUrl);
                            return _results;
                        }
                    },
                    error: function(file, message) {
                        var node, _i, _len, _ref, _results;
                        if (file.previewElement) {
                            for (file.previewElement.classList.add("dz-error"), "String" != typeof message && message.error && (message = message.error), 
                            _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _results = [], 
                            _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], _results.push(node.textContent = message);
                            return _results;
                        }
                    },
                    errormultiple: noop,
                    processing: function(file) {
                        if (file.previewElement && (file.previewElement.classList.add("dz-processing"), 
                        file._removeLink)) return file._removeLink.textContent = this.options.dictCancelUpload;
                    },
                    processingmultiple: noop,
                    uploadprogress: function(file, progress, bytesSent) {
                        var node, _i, _len, _ref, _results;
                        if (file.previewElement) {
                            for (_ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _results = [], 
                            _i = 0, _len = _ref.length; _i < _len; _i++) node = _ref[_i], _results.push(node.style.width = "" + progress + "%");
                            return _results;
                        }
                    },
                    totaluploadprogress: noop,
                    sending: noop,
                    sendingmultiple: noop,
                    success: function(file) {
                        if (file.previewElement) return file.previewElement.classList.add("dz-success");
                    },
                    successmultiple: noop,
                    canceled: function(file) {
                        return this.emit("error", file, "Upload canceled.");
                    },
                    canceledmultiple: noop,
                    complete: function(file) {
                        if (file._removeLink) return file._removeLink.textContent = this.options.dictRemoveFile;
                    },
                    completemultiple: noop,
                    maxfilesexceeded: noop,
                    maxfilesreached: noop,
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
                }, extend = function() {
                    var key, object, objects, target, val, _i, _len;
                    for (target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [], 
                    _i = 0, _len = objects.length; _i < _len; _i++) {
                        object = objects[_i];
                        for (key in object) val = object[key], target[key] = val;
                    }
                    return target;
                }, Dropzone.prototype.getAcceptedFiles = function() {
                    var file, _i, _len, _ref, _results;
                    for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    file.accepted && _results.push(file);
                    return _results;
                }, Dropzone.prototype.getRejectedFiles = function() {
                    var file, _i, _len, _ref, _results;
                    for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    file.accepted || _results.push(file);
                    return _results;
                }, Dropzone.prototype.getFilesWithStatus = function(status) {
                    var file, _i, _len, _ref, _results;
                    for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    file.status === status && _results.push(file);
                    return _results;
                }, Dropzone.prototype.getQueuedFiles = function() {
                    return this.getFilesWithStatus(Dropzone.QUEUED);
                }, Dropzone.prototype.getUploadingFiles = function() {
                    return this.getFilesWithStatus(Dropzone.UPLOADING);
                }, Dropzone.prototype.getActiveFiles = function() {
                    var file, _i, _len, _ref, _results;
                    for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    file.status !== Dropzone.UPLOADING && file.status !== Dropzone.QUEUED || _results.push(file);
                    return _results;
                }, Dropzone.prototype.init = function() {
                    var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
                    for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
                    this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(Dropzone.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
                    this.clickableElements.length && (setupHiddenFileInput = function(_this) {
                        return function() {
                            return _this.hiddenFileInput && document.body.removeChild(_this.hiddenFileInput), 
                            _this.hiddenFileInput = document.createElement("input"), _this.hiddenFileInput.setAttribute("type", "file"), 
                            (null == _this.options.maxFiles || _this.options.maxFiles > 1) && _this.hiddenFileInput.setAttribute("multiple", "multiple"), 
                            _this.hiddenFileInput.className = "dz-hidden-input", null != _this.options.acceptedFiles && _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles), 
                            _this.hiddenFileInput.style.visibility = "hidden", _this.hiddenFileInput.style.position = "absolute", 
                            _this.hiddenFileInput.style.top = "0", _this.hiddenFileInput.style.left = "0", _this.hiddenFileInput.style.height = "0", 
                            _this.hiddenFileInput.style.width = "0", document.body.appendChild(_this.hiddenFileInput), 
                            _this.hiddenFileInput.addEventListener("change", function() {
                                var file, files, _i, _len;
                                if (files = _this.hiddenFileInput.files, files.length) for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                                _this.addFile(file);
                                return setupHiddenFileInput();
                            });
                        };
                    }(this))(), this.URL = null != (_ref = window.URL) ? _ref : window.webkitURL, _ref1 = this.events, 
                    _i = 0, _len = _ref1.length; _i < _len; _i++) eventName = _ref1[_i], this.on(eventName, this.options[eventName]);
                    return this.on("uploadprogress", function(_this) {
                        return function() {
                            return _this.updateTotalUploadProgress();
                        };
                    }(this)), this.on("removedfile", function(_this) {
                        return function() {
                            return _this.updateTotalUploadProgress();
                        };
                    }(this)), this.on("canceled", function(_this) {
                        return function(file) {
                            return _this.emit("complete", file);
                        };
                    }(this)), this.on("complete", function(_this) {
                        return function(file) {
                            if (0 === _this.getUploadingFiles().length && 0 === _this.getQueuedFiles().length) return setTimeout(function() {
                                return _this.emit("queuecomplete");
                            }, 0);
                        };
                    }(this)), noPropagation = function(e) {
                        return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                    }, this.listeners = [ {
                        element: this.element,
                        events: {
                            dragstart: function(_this) {
                                return function(e) {
                                    return _this.emit("dragstart", e);
                                };
                            }(this),
                            dragenter: function(_this) {
                                return function(e) {
                                    return noPropagation(e), _this.emit("dragenter", e);
                                };
                            }(this),
                            dragover: function(_this) {
                                return function(e) {
                                    var efct;
                                    try {
                                        efct = e.dataTransfer.effectAllowed;
                                    } catch (_error) {}
                                    return e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy", 
                                    noPropagation(e), _this.emit("dragover", e);
                                };
                            }(this),
                            dragleave: function(_this) {
                                return function(e) {
                                    return _this.emit("dragleave", e);
                                };
                            }(this),
                            drop: function(_this) {
                                return function(e) {
                                    return noPropagation(e), _this.drop(e);
                                };
                            }(this),
                            dragend: function(_this) {
                                return function(e) {
                                    return _this.emit("dragend", e);
                                };
                            }(this)
                        }
                    } ], this.clickableElements.forEach(function(_this) {
                        return function(clickableElement) {
                            return _this.listeners.push({
                                element: clickableElement,
                                events: {
                                    click: function(evt) {
                                        if (clickableElement !== _this.element || evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message"))) return _this.hiddenFileInput.click();
                                    }
                                }
                            });
                        };
                    }(this)), this.enable(), this.options.init.call(this);
                }, Dropzone.prototype.destroy = function() {
                    var _ref;
                    return this.disable(), this.removeAllFiles(!0), (null != (_ref = this.hiddenFileInput) ? _ref.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
                    this.hiddenFileInput = null), delete this.element.dropzone, Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
                }, Dropzone.prototype.updateTotalUploadProgress = function() {
                    var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
                    if (totalBytesSent = 0, totalBytes = 0, activeFiles = this.getActiveFiles(), activeFiles.length) {
                        for (_ref = this.getActiveFiles(), _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                        totalBytesSent += file.upload.bytesSent, totalBytes += file.upload.total;
                        totalUploadProgress = 100 * totalBytesSent / totalBytes;
                    } else totalUploadProgress = 100;
                    return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
                }, Dropzone.prototype._getParamName = function(n) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(n) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
                }, Dropzone.prototype.getFallbackForm = function() {
                    var existingFallback, fields, fieldsString, form;
                    return (existingFallback = this.getExistingFallback()) ? existingFallback : (fieldsString = '<div class="dz-fallback">', 
                    this.options.dictFallbackText && (fieldsString += "<p>" + this.options.dictFallbackText + "</p>"), 
                    fieldsString += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
                    fields = Dropzone.createElement(fieldsString), "FORM" !== this.element.tagName ? (form = Dropzone.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), 
                    form.appendChild(fields)) : (this.element.setAttribute("enctype", "multipart/form-data"), 
                    this.element.setAttribute("method", this.options.method)), null != form ? form : fields);
                }, Dropzone.prototype.getExistingFallback = function() {
                    var fallback, getFallback, tagName, _i, _len, _ref;
                    for (getFallback = function(elements) {
                        var el, _i, _len;
                        for (_i = 0, _len = elements.length; _i < _len; _i++) if (el = elements[_i], /(^| )fallback($| )/.test(el.className)) return el;
                    }, _ref = [ "div", "form" ], _i = 0, _len = _ref.length; _i < _len; _i++) if (tagName = _ref[_i], 
                    fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
                }, Dropzone.prototype.setupEventListeners = function() {
                    var elementListeners, event, listener, _i, _len, _ref, _results;
                    for (_ref = this.listeners, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) elementListeners = _ref[_i], 
                    _results.push(function() {
                        var _ref1, _results1;
                        _ref1 = elementListeners.events, _results1 = [];
                        for (event in _ref1) listener = _ref1[event], _results1.push(elementListeners.element.addEventListener(event, listener, !1));
                        return _results1;
                    }());
                    return _results;
                }, Dropzone.prototype.removeEventListeners = function() {
                    var elementListeners, event, listener, _i, _len, _ref, _results;
                    for (_ref = this.listeners, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) elementListeners = _ref[_i], 
                    _results.push(function() {
                        var _ref1, _results1;
                        _ref1 = elementListeners.events, _results1 = [];
                        for (event in _ref1) listener = _ref1[event], _results1.push(elementListeners.element.removeEventListener(event, listener, !1));
                        return _results1;
                    }());
                    return _results;
                }, Dropzone.prototype.disable = function() {
                    var file, _i, _len, _ref, _results;
                    for (this.clickableElements.forEach(function(element) {
                        return element.classList.remove("dz-clickable");
                    }), this.removeEventListeners(), _ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                    _results.push(this.cancelUpload(file));
                    return _results;
                }, Dropzone.prototype.enable = function() {
                    return this.clickableElements.forEach(function(element) {
                        return element.classList.add("dz-clickable");
                    }), this.setupEventListeners();
                }, Dropzone.prototype.filesize = function(size) {
                    var string;
                    return size >= 109951162777.6 ? (size /= 109951162777.6, string = "TiB") : size >= 107374182.4 ? (size /= 107374182.4, 
                    string = "GiB") : size >= 104857.6 ? (size /= 104857.6, string = "MiB") : size >= 102.4 ? (size /= 102.4, 
                    string = "KiB") : (size = 10 * size, string = "b"), "<strong>" + Math.round(size) / 10 + "</strong> " + string;
                }, Dropzone.prototype._updateMaxFilesReachedClass = function() {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
                    this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
                }, Dropzone.prototype.drop = function(e) {
                    var files, items;
                    e.dataTransfer && (this.emit("drop", e), files = e.dataTransfer.files, files.length && (items = e.dataTransfer.items, 
                    items && items.length && null != items[0].webkitGetAsEntry ? this._addFilesFromItems(items) : this.handleFiles(files)));
                }, Dropzone.prototype.paste = function(e) {
                    var items, _ref;
                    if (null != (null != e && null != (_ref = e.clipboardData) ? _ref.items : void 0)) return this.emit("paste", e), 
                    items = e.clipboardData.items, items.length ? this._addFilesFromItems(items) : void 0;
                }, Dropzone.prototype.handleFiles = function(files) {
                    var file, _i, _len, _results;
                    for (_results = [], _i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                    _results.push(this.addFile(file));
                    return _results;
                }, Dropzone.prototype._addFilesFromItems = function(items) {
                    var entry, item, _i, _len, _results;
                    for (_results = [], _i = 0, _len = items.length; _i < _len; _i++) item = items[_i], 
                    null != item.webkitGetAsEntry && (entry = item.webkitGetAsEntry()) ? entry.isFile ? _results.push(this.addFile(item.getAsFile())) : entry.isDirectory ? _results.push(this._addFilesFromDirectory(entry, entry.name)) : _results.push(void 0) : null != item.getAsFile && (null == item.kind || "file" === item.kind) ? _results.push(this.addFile(item.getAsFile())) : _results.push(void 0);
                    return _results;
                }, Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
                    var dirReader, entriesReader;
                    return dirReader = directory.createReader(), entriesReader = function(_this) {
                        return function(entries) {
                            var entry, _i, _len;
                            for (_i = 0, _len = entries.length; _i < _len; _i++) entry = entries[_i], entry.isFile ? entry.file(function(file) {
                                if (!_this.options.ignoreHiddenFiles || "." !== file.name.substring(0, 1)) return file.fullPath = "" + path + "/" + file.name, 
                                _this.addFile(file);
                            }) : entry.isDirectory && _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                        };
                    }(this), dirReader.readEntries(entriesReader, function(error) {
                        return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(error) : void 0;
                    });
                }, Dropzone.prototype.accept = function(file, done) {
                    return file.size > 1024 * this.options.maxFilesize * 1024 ? done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : Dropzone.isValidFile(file, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
                    this.emit("maxfilesexceeded", file)) : this.options.accept.call(this, file, done) : done(this.options.dictInvalidFileType);
                }, Dropzone.prototype.addFile = function(file) {
                    return file.upload = {
                        progress: 0,
                        total: file.size,
                        bytesSent: 0
                    }, this.files.push(file), file.status = Dropzone.ADDED, this.emit("addedfile", file), 
                    this._enqueueThumbnail(file), this.accept(file, function(_this) {
                        return function(error) {
                            return error ? (file.accepted = !1, _this._errorProcessing([ file ], error)) : (file.accepted = !0, 
                            _this.options.autoQueue && _this.enqueueFile(file)), _this._updateMaxFilesReachedClass();
                        };
                    }(this));
                }, Dropzone.prototype.enqueueFiles = function(files) {
                    var file, _i, _len;
                    for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], this.enqueueFile(file);
                    return null;
                }, Dropzone.prototype.enqueueFile = function(file) {
                    if (file.status !== Dropzone.ADDED || file.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    if (file.status = Dropzone.QUEUED, this.options.autoProcessQueue) return setTimeout(function(_this) {
                        return function() {
                            return _this.processQueue();
                        };
                    }(this), 0);
                }, Dropzone.prototype._thumbnailQueue = [], Dropzone.prototype._processingThumbnail = !1, 
                Dropzone.prototype._enqueueThumbnail = function(file) {
                    if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(file), 
                    setTimeout(function(_this) {
                        return function() {
                            return _this._processThumbnailQueue();
                        };
                    }(this), 0);
                }, Dropzone.prototype._processThumbnailQueue = function() {
                    if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, 
                    this.createThumbnail(this._thumbnailQueue.shift(), function(_this) {
                        return function() {
                            return _this._processingThumbnail = !1, _this._processThumbnailQueue();
                        };
                    }(this));
                }, Dropzone.prototype.removeFile = function(file) {
                    if (file.status === Dropzone.UPLOADING && this.cancelUpload(file), this.files = without(this.files, file), 
                    this.emit("removedfile", file), 0 === this.files.length) return this.emit("reset");
                }, Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
                    var file, _i, _len, _ref;
                    for (null == cancelIfNecessary && (cancelIfNecessary = !1), _ref = this.files.slice(), 
                    _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], (file.status !== Dropzone.UPLOADING || cancelIfNecessary) && this.removeFile(file);
                    return null;
                }, Dropzone.prototype.createThumbnail = function(file, callback) {
                    var fileReader;
                    return fileReader = new FileReader(), fileReader.onload = function(_this) {
                        return function() {
                            var img;
                            return img = document.createElement("img"), img.onload = function() {
                                var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                                if (file.width = img.width, file.height = img.height, resizeInfo = _this.options.resize.call(_this, file), 
                                null == resizeInfo.trgWidth && (resizeInfo.trgWidth = resizeInfo.optWidth), null == resizeInfo.trgHeight && (resizeInfo.trgHeight = resizeInfo.optHeight), 
                                canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), canvas.width = resizeInfo.trgWidth, 
                                canvas.height = resizeInfo.trgHeight, drawImageIOSFix(ctx, img, null != (_ref = resizeInfo.srcX) ? _ref : 0, null != (_ref1 = resizeInfo.srcY) ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, null != (_ref2 = resizeInfo.trgX) ? _ref2 : 0, null != (_ref3 = resizeInfo.trgY) ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight), 
                                thumbnail = canvas.toDataURL("image/png"), _this.emit("thumbnail", file, thumbnail), 
                                null != callback) return callback();
                            }, img.src = fileReader.result;
                        };
                    }(this), fileReader.readAsDataURL(file);
                }, Dropzone.prototype.processQueue = function() {
                    var i, parallelUploads, processingLength, queuedFiles;
                    if (parallelUploads = this.options.parallelUploads, processingLength = this.getUploadingFiles().length, 
                    i = processingLength, !(processingLength >= parallelUploads) && (queuedFiles = this.getQueuedFiles(), 
                    queuedFiles.length > 0)) {
                        if (this.options.uploadMultiple) return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                        for (;i < parallelUploads; ) {
                            if (!queuedFiles.length) return;
                            this.processFile(queuedFiles.shift()), i++;
                        }
                    }
                }, Dropzone.prototype.processFile = function(file) {
                    return this.processFiles([ file ]);
                }, Dropzone.prototype.processFiles = function(files) {
                    var file, _i, _len;
                    for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.processing = !0, 
                    file.status = Dropzone.UPLOADING, this.emit("processing", file);
                    return this.options.uploadMultiple && this.emit("processingmultiple", files), this.uploadFiles(files);
                }, Dropzone.prototype._getFilesWithXhr = function(xhr) {
                    var file, files;
                    return files = function() {
                        var _i, _len, _ref, _results;
                        for (_ref = this.files, _results = [], _i = 0, _len = _ref.length; _i < _len; _i++) file = _ref[_i], 
                        file.xhr === xhr && _results.push(file);
                        return _results;
                    }.call(this);
                }, Dropzone.prototype.cancelUpload = function(file) {
                    var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
                    if (file.status === Dropzone.UPLOADING) {
                        for (groupedFiles = this._getFilesWithXhr(file.xhr), _i = 0, _len = groupedFiles.length; _i < _len; _i++) groupedFile = groupedFiles[_i], 
                        groupedFile.status = Dropzone.CANCELED;
                        for (file.xhr.abort(), _j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) groupedFile = groupedFiles[_j], 
                        this.emit("canceled", groupedFile);
                        this.options.uploadMultiple && this.emit("canceledmultiple", groupedFiles);
                    } else (_ref = file.status) !== Dropzone.ADDED && _ref !== Dropzone.QUEUED || (file.status = Dropzone.CANCELED, 
                    this.emit("canceled", file), this.options.uploadMultiple && this.emit("canceledmultiple", [ file ]));
                    if (this.options.autoProcessQueue) return this.processQueue();
                }, Dropzone.prototype.uploadFile = function(file) {
                    return this.uploadFiles([ file ]);
                }, Dropzone.prototype.uploadFiles = function(files) {
                    var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, option, progressObj, response, updateProgress, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
                    for (xhr = new XMLHttpRequest(), _i = 0, _len = files.length; _i < _len; _i++) file = files[_i], 
                    file.xhr = xhr;
                    xhr.open(this.options.method, this.options.url, !0), xhr.withCredentials = !!this.options.withCredentials, 
                    response = null, handleError = function(_this) {
                        return function() {
                            var _j, _len1, _results;
                            for (_results = [], _j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], 
                            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                            return _results;
                        };
                    }(this), updateProgress = function(_this) {
                        return function(e) {
                            var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                            if (null != e) for (progress = 100 * e.loaded / e.total, _j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], 
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded
                            }; else {
                                for (allFilesFinished = !0, progress = 100, _k = 0, _len2 = files.length; _k < _len2; _k++) file = files[_k], 
                                100 === file.upload.progress && file.upload.bytesSent === file.upload.total || (allFilesFinished = !1), 
                                file.upload.progress = progress, file.upload.bytesSent = file.upload.total;
                                if (allFilesFinished) return;
                            }
                            for (_results = [], _l = 0, _len3 = files.length; _l < _len3; _l++) file = files[_l], 
                            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                            return _results;
                        };
                    }(this), xhr.onload = function(_this) {
                        return function(e) {
                            var _ref;
                            if (files[0].status !== Dropzone.CANCELED && 4 === xhr.readyState) {
                                if (response = xhr.responseText, xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                                    response = JSON.parse(response);
                                } catch (_error) {
                                    e = _error, response = "Invalid JSON response from server.";
                                }
                                return updateProgress(), 200 <= (_ref = xhr.status) && _ref < 300 ? _this._finished(files, response, e) : handleError();
                            }
                        };
                    }(this), xhr.onerror = function(_this) {
                        return function() {
                            if (files[0].status !== Dropzone.CANCELED) return handleError();
                        };
                    }(this), progressObj = null != (_ref = xhr.upload) ? _ref : xhr, progressObj.onprogress = updateProgress, 
                    headers = {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    }, this.options.headers && extend(headers, this.options.headers);
                    for (headerName in headers) headerValue = headers[headerName], xhr.setRequestHeader(headerName, headerValue);
                    if (formData = new FormData(), this.options.params) {
                        _ref1 = this.options.params;
                        for (key in _ref1) value = _ref1[key], formData.append(key, value);
                    }
                    for (_j = 0, _len1 = files.length; _j < _len1; _j++) file = files[_j], this.emit("sending", file, xhr, formData);
                    if (this.options.uploadMultiple && this.emit("sendingmultiple", files, xhr, formData), 
                    "FORM" === this.element.tagName) for (_ref2 = this.element.querySelectorAll("input, textarea, select, button"), 
                    _k = 0, _len2 = _ref2.length; _k < _len2; _k++) if (input = _ref2[_k], inputName = input.getAttribute("name"), 
                    inputType = input.getAttribute("type"), "SELECT" === input.tagName && input.hasAttribute("multiple")) for (_ref3 = input.options, 
                    _l = 0, _len3 = _ref3.length; _l < _len3; _l++) option = _ref3[_l], option.selected && formData.append(inputName, option.value); else (!inputType || "checkbox" !== (_ref4 = inputType.toLowerCase()) && "radio" !== _ref4 || input.checked) && formData.append(inputName, input.value);
                    for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) formData.append(this._getParamName(i), files[i], files[i].name);
                    return xhr.send(formData);
                }, Dropzone.prototype._finished = function(files, responseText, e) {
                    var file, _i, _len;
                    for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.status = Dropzone.SUCCESS, 
                    this.emit("success", file, responseText, e), this.emit("complete", file);
                    if (this.options.uploadMultiple && (this.emit("successmultiple", files, responseText, e), 
                    this.emit("completemultiple", files)), this.options.autoProcessQueue) return this.processQueue();
                }, Dropzone.prototype._errorProcessing = function(files, message, xhr) {
                    var file, _i, _len;
                    for (_i = 0, _len = files.length; _i < _len; _i++) file = files[_i], file.status = Dropzone.ERROR, 
                    this.emit("error", file, message, xhr), this.emit("complete", file);
                    if (this.options.uploadMultiple && (this.emit("errormultiple", files, message, xhr), 
                    this.emit("completemultiple", files)), this.options.autoProcessQueue) return this.processQueue();
                }, Dropzone;
            }(Em), Dropzone.version = "3.10.2", Dropzone.options = {}, Dropzone.optionsForElement = function(element) {
                return element.getAttribute("id") ? Dropzone.options[camelize(element.getAttribute("id"))] : void 0;
            }, Dropzone.instances = [], Dropzone.forElement = function(element) {
                if ("string" == typeof element && (element = document.querySelector(element)), null == (null != element ? element.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return element.dropzone;
            }, Dropzone.autoDiscover = !0, Dropzone.discover = function() {
                var checkElements, dropzone, dropzones, _i, _len, _results;
                for (document.querySelectorAll ? dropzones = document.querySelectorAll(".dropzone") : (dropzones = [], 
                checkElements = function(elements) {
                    var el, _i, _len, _results;
                    for (_results = [], _i = 0, _len = elements.length; _i < _len; _i++) el = elements[_i], 
                    /(^| )dropzone($| )/.test(el.className) ? _results.push(dropzones.push(el)) : _results.push(void 0);
                    return _results;
                }, checkElements(document.getElementsByTagName("div")), checkElements(document.getElementsByTagName("form"))), 
                _results = [], _i = 0, _len = dropzones.length; _i < _len; _i++) dropzone = dropzones[_i], 
                Dropzone.optionsForElement(dropzone) !== !1 ? _results.push(new Dropzone(dropzone)) : _results.push(void 0);
                return _results;
            }, Dropzone.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], Dropzone.isBrowserSupported = function() {
                var capableBrowser, regex, _i, _len, _ref;
                if (capableBrowser = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (_ref = Dropzone.blacklistedBrowsers, 
                _i = 0, _len = _ref.length; _i < _len; _i++) regex = _ref[_i], regex.test(navigator.userAgent) && (capableBrowser = !1); else capableBrowser = !1; else capableBrowser = !1;
                return capableBrowser;
            }, without = function(list, rejectedItem) {
                var item, _i, _len, _results;
                for (_results = [], _i = 0, _len = list.length; _i < _len; _i++) item = list[_i], 
                item !== rejectedItem && _results.push(item);
                return _results;
            }, camelize = function(str) {
                return str.replace(/[\-_](\w)/g, function(match) {
                    return match.charAt(1).toUpperCase();
                });
            }, Dropzone.createElement = function(string) {
                var div;
                return div = document.createElement("div"), div.innerHTML = string, div.childNodes[0];
            }, Dropzone.elementInside = function(element, container) {
                if (element === container) return !0;
                for (;element = element.parentNode; ) if (element === container) return !0;
                return !1;
            }, Dropzone.getElement = function(el, name) {
                var element;
                if ("string" == typeof el ? element = document.querySelector(el) : null != el.nodeType && (element = el), 
                null == element) throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
                return element;
            }, Dropzone.getElements = function(els, name) {
                var e, el, elements, _i, _j, _len, _len1, _ref;
                if (els instanceof Array) {
                    elements = [];
                    try {
                        for (_i = 0, _len = els.length; _i < _len; _i++) el = els[_i], elements.push(this.getElement(el, name));
                    } catch (_error) {
                        e = _error, elements = null;
                    }
                } else if ("string" == typeof els) for (elements = [], _ref = document.querySelectorAll(els), 
                _j = 0, _len1 = _ref.length; _j < _len1; _j++) el = _ref[_j], elements.push(el); else null != els.nodeType && (elements = [ els ]);
                if (null == elements || !elements.length) throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                return elements;
            }, Dropzone.confirm = function(question, accepted, rejected) {
                return window.confirm(question) ? accepted() : null != rejected ? rejected() : void 0;
            }, Dropzone.isValidFile = function(file, acceptedFiles) {
                var baseMimeType, mimeType, validType, _i, _len;
                if (!acceptedFiles) return !0;
                for (acceptedFiles = acceptedFiles.split(","), mimeType = file.type, baseMimeType = mimeType.replace(/\/.*$/, ""), 
                _i = 0, _len = acceptedFiles.length; _i < _len; _i++) if (validType = acceptedFiles[_i], 
                validType = validType.trim(), "." === validType.charAt(0)) {
                    if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return !0;
                } else if (/\/\*$/.test(validType)) {
                    if (baseMimeType === validType.replace(/\/.*$/, "")) return !0;
                } else if (mimeType === validType) return !0;
                return !1;
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(options) {
                return this.each(function() {
                    return new Dropzone(this, options);
                });
            }), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, 
            Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, 
            Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", 
            Dropzone.ERROR = "error", Dropzone.SUCCESS = "success", detectVerticalSquash = function(img) {
                var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
                for (iw = img.naturalWidth, ih = img.naturalHeight, canvas = document.createElement("canvas"), 
                canvas.width = 1, canvas.height = ih, ctx = canvas.getContext("2d"), ctx.drawImage(img, 0, 0), 
                data = ctx.getImageData(0, 0, 1, ih).data, sy = 0, ey = ih, py = ih; py > sy; ) alpha = data[4 * (py - 1) + 3], 
                0 === alpha ? ey = py : sy = py, py = ey + sy >> 1;
                return ratio = py / ih, 0 === ratio ? 1 : ratio;
            }, drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
                var vertSquashRatio;
                return vertSquashRatio = detectVerticalSquash(img), ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            }, contentLoaded = function(win, fn) {
                var add, doc, done, init, poll, pre, rem, root, top;
                if (done = !1, top = !0, doc = win.document, root = doc.documentElement, add = doc.addEventListener ? "addEventListener" : "attachEvent", 
                rem = doc.addEventListener ? "removeEventListener" : "detachEvent", pre = doc.addEventListener ? "" : "on", 
                init = function(e) {
                    if ("readystatechange" !== e.type || "complete" === doc.readyState) return ("load" === e.type ? win : doc)[rem](pre + e.type, init, !1), 
                    !done && (done = !0) ? fn.call(win, e.type || e) : void 0;
                }, poll = function() {
                    var e;
                    try {
                        root.doScroll("left");
                    } catch (_error) {
                        return e = _error, void setTimeout(poll, 50);
                    }
                    return init("poll");
                }, "complete" !== doc.readyState) {
                    if (doc.createEventObject && root.doScroll) {
                        try {
                            top = !win.frameElement;
                        } catch (_error) {}
                        top && poll();
                    }
                    return doc[add](pre + "DOMContentLoaded", init, !1), doc[add](pre + "readystatechange", init, !1), 
                    win[add](pre + "load", init, !1);
                }
            }, Dropzone._autoDiscoverFunction = function() {
                if (Dropzone.autoDiscover) return Dropzone.discover();
            }, contentLoaded(window, Dropzone._autoDiscoverFunction);
        }).call(this);
    }), "object" == typeof exports ? module.exports = require("dropzone") : "function" == typeof define && define.amd ? define([], function() {
        return require("dropzone");
    }) : this.Dropzone = require("dropzone");
}(), !function() {
    function a(b) {
        var c = a.modules[b];
        if (!c) throw new Error('failed to require "' + b + '"');
        return "exports" in c || "function" != typeof c.definition || (c.client = c.component = !0, 
        c.definition.call(this, c.exports = {}, c), delete c.definition), c.exports;
    }
    a.modules = {}, a.register = function(b, c) {
        a.modules[b] = {
            definition: c
        };
    }, a.define = function(b, c) {
        a.modules[b] = {
            exports: c
        };
    }, a.register("component~emitter@1.1.2", function(a, b) {
        function c(a) {
            return a ? d(a) : void 0;
        }
        function d(a) {
            for (var b in c.prototype) a[b] = c.prototype[b];
            return a;
        }
        b.exports = c, c.prototype.on = c.prototype.addEventListener = function(a, b) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), 
            this;
        }, c.prototype.once = function(a, b) {
            function c() {
                d.off(a, c), b.apply(this, arguments);
            }
            var d = this;
            return this._callbacks = this._callbacks || {}, c.fn = b, this.on(a, c), this;
        }, c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function(a, b) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
            this;
            var c = this._callbacks[a];
            if (!c) return this;
            if (1 == arguments.length) return delete this._callbacks[a], this;
            for (var d, e = 0; e < c.length; e++) if (d = c[e], d === b || d.fn === b) {
                c.splice(e, 1);
                break;
            }
            return this;
        }, c.prototype.emit = function(a) {
            this._callbacks = this._callbacks || {};
            var b = [].slice.call(arguments, 1), c = this._callbacks[a];
            if (c) {
                c = c.slice(0);
                for (var d = 0, e = c.length; e > d; ++d) c[d].apply(this, b);
            }
            return this;
        }, c.prototype.listeners = function(a) {
            return this._callbacks = this._callbacks || {}, this._callbacks[a] || [];
        }, c.prototype.hasListeners = function(a) {
            return !!this.listeners(a).length;
        };
    }), a.register("dropzone", function(b, c) {
        c.exports = a("dropzone/lib/dropzone.js");
    }), a.register("dropzone/lib/dropzone.js", function(b, c) {
        (function() {
            var b, d, e, f, g, h, i, j, k = {}.hasOwnProperty, l = function(a, b) {
                function c() {
                    this.constructor = a;
                }
                for (var d in b) k.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
                a;
            }, m = [].slice;
            d = "undefined" != typeof Emitter && null !== Emitter ? Emitter : a("component~emitter@1.1.2"), 
            i = function() {}, b = function(a) {
                function b(a, d) {
                    var e, f, g;
                    if (this.element = a, this.version = b.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
                    this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
                    !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone) throw new Error("Dropzone already attached.");
                    if (b.instances.push(this), this.element.dropzone = this, e = null != (g = b.optionsForElement(this.element)) ? g : {}, 
                    this.options = c({}, this.defaultOptions, e, null != d ? d : {}), this.options.forceFallback || !b.isBrowserSupported()) return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
                    !this.options.url) throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
                    delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), 
                    (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), 
                    this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? b.getElement(this.options.previewsContainer, "previewsContainer") : this.element), 
                    this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [ this.element ] : b.getElements(this.options.clickable, "clickable")), 
                    this.init();
                }
                var c;
                return l(b, a), b.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached" ], 
                b.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 100,
                    thumbnailHeight: 100,
                    maxFiles: null,
                    params: {},
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    accept: function(a, b) {
                        return b();
                    },
                    init: function() {
                        return i;
                    },
                    forceFallback: !1,
                    fallback: function() {
                        var a, c, d, e, f, g;
                        for (this.element.className = "" + this.element.className + " dz-browser-not-supported", 
                        g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], 
                        /(^| )dz-message($| )/.test(a.className) && (c = a, a.className = "dz-message");
                        return c || (c = b.createElement('<div class="dz-message"><span></span></div>'), 
                        this.element.appendChild(c)), d = c.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), 
                        this.element.appendChild(this.getFallbackForm());
                    },
                    resize: function(a) {
                        var b, c, d;
                        return b = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: a.width,
                            srcHeight: a.height
                        }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, 
                        null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), 
                        d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, 
                        b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, 
                        b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, 
                        b;
                    },
                    drop: function() {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragstart: i,
                    dragend: function() {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragenter: function() {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragover: function() {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragleave: function() {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    paste: i,
                    reset: function() {
                        return this.element.classList.remove("dz-started");
                    },
                    addedfile: function(a) {
                        var c, d, e, f, g, h, i, j, k, l, m, n, o;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                        this.previewsContainer) {
                            for (a.previewElement = b.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, 
                            this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), 
                            f = 0, i = l.length; i > f; f++) c = l[f], c.textContent = a.name;
                            for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) c = m[g], 
                            c.innerHTML = this.filesize(a.size);
                            for (this.options.addRemoveLinks && (a._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                            a.previewElement.appendChild(a._removeLink)), d = function(c) {
                                return function(d) {
                                    return d.preventDefault(), d.stopPropagation(), a.status === b.UPLOADING ? b.confirm(c.options.dictCancelUploadConfirmation, function() {
                                        return c.removeFile(a);
                                    }) : c.options.dictRemoveFileConfirmation ? b.confirm(c.options.dictRemoveFileConfirmation, function() {
                                        return c.removeFile(a);
                                    }) : c.removeFile(a);
                                };
                            }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, 
                            k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                            return o;
                        }
                    },
                    removedfile: function(a) {
                        var b;
                        return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), 
                        this._updateMaxFilesReachedClass();
                    },
                    thumbnail: function(a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (a.previewElement.classList.remove("dz-file-preview"), a.previewElement.classList.add("dz-image-preview"), 
                            f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], 
                            c.alt = a.name, g.push(c.src = b);
                            return g;
                        }
                    },
                    error: function(a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), 
                            f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, 
                            e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                            return g;
                        }
                    },
                    errormultiple: i,
                    processing: function(a) {
                        return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0;
                    },
                    processingmultiple: i,
                    uploadprogress: function(a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], 
                            d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.style.width = "" + b + "%");
                            return g;
                        }
                    },
                    totaluploadprogress: i,
                    sending: i,
                    sendingmultiple: i,
                    success: function(a) {
                        return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0;
                    },
                    successmultiple: i,
                    canceled: function(a) {
                        return this.emit("error", a, "Upload canceled.");
                    },
                    canceledmultiple: i,
                    complete: function(a) {
                        return a._removeLink ? a._removeLink.textContent = this.options.dictRemoveFile : void 0;
                    },
                    completemultiple: i,
                    maxfilesexceeded: i,
                    maxfilesreached: i,
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
                }, c = function() {
                    var a, b, c, d, e, f, g;
                    for (d = arguments[0], c = 2 <= arguments.length ? m.call(arguments, 1) : [], f = 0, 
                    g = c.length; g > f; f++) {
                        b = c[f];
                        for (a in b) e = b[a], d[a] = e;
                    }
                    return d;
                }, b.prototype.getAcceptedFiles = function() {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
                    return e;
                }, b.prototype.getRejectedFiles = function() {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
                    return e;
                }, b.prototype.getFilesWithStatus = function(a) {
                    var b, c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
                    return f;
                }, b.prototype.getQueuedFiles = function() {
                    return this.getFilesWithStatus(b.QUEUED);
                }, b.prototype.getUploadingFiles = function() {
                    return this.getFilesWithStatus(b.UPLOADING);
                }, b.prototype.getActiveFiles = function() {
                    var a, c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) a = e[c], (a.status === b.UPLOADING || a.status === b.QUEUED) && f.push(a);
                    return f;
                }, b.prototype.init = function() {
                    var a, c, d, e, f, g, h;
                    for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
                    this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
                    this.clickableElements.length && (d = function(a) {
                        return function() {
                            return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), 
                            a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), 
                            a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), 
                            a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", 
                            a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", 
                            a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), 
                            a.hiddenFileInput.addEventListener("change", function() {
                                var b, c, e, f;
                                if (c = a.hiddenFileInput.files, c.length) for (e = 0, f = c.length; f > e; e++) b = c[e], 
                                a.addFile(b);
                                return d();
                            });
                        };
                    }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, 
                    e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
                    return this.on("uploadprogress", function(a) {
                        return function() {
                            return a.updateTotalUploadProgress();
                        };
                    }(this)), this.on("removedfile", function(a) {
                        return function() {
                            return a.updateTotalUploadProgress();
                        };
                    }(this)), this.on("canceled", function(a) {
                        return function(b) {
                            return a.emit("complete", b);
                        };
                    }(this)), this.on("complete", function(a) {
                        return function() {
                            return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function() {
                                return a.emit("queuecomplete");
                            }, 0) : void 0;
                        };
                    }(this)), c = function(a) {
                        return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    }, this.listeners = [ {
                        element: this.element,
                        events: {
                            dragstart: function(a) {
                                return function(b) {
                                    return a.emit("dragstart", b);
                                };
                            }(this),
                            dragenter: function(a) {
                                return function(b) {
                                    return c(b), a.emit("dragenter", b);
                                };
                            }(this),
                            dragover: function(a) {
                                return function(b) {
                                    var d;
                                    try {
                                        d = b.dataTransfer.effectAllowed;
                                    } catch (e) {}
                                    return b.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", 
                                    c(b), a.emit("dragover", b);
                                };
                            }(this),
                            dragleave: function(a) {
                                return function(b) {
                                    return a.emit("dragleave", b);
                                };
                            }(this),
                            drop: function(a) {
                                return function(b) {
                                    return c(b), a.drop(b);
                                };
                            }(this),
                            dragend: function(a) {
                                return function(b) {
                                    return a.emit("dragend", b);
                                };
                            }(this)
                        }
                    } ], this.clickableElements.forEach(function(a) {
                        return function(c) {
                            return a.listeners.push({
                                element: c,
                                events: {
                                    click: function(d) {
                                        return c !== a.element || d.target === a.element || b.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0;
                                    }
                                }
                            });
                        };
                    }(this)), this.enable(), this.options.init.call(this);
                }, b.prototype.destroy = function() {
                    var a;
                    return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
                    this.hiddenFileInput = null), delete this.element.dropzone, b.instances.splice(b.instances.indexOf(this), 1);
                }, b.prototype.updateTotalUploadProgress = function() {
                    var a, b, c, d, e, f, g, h;
                    if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                        for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, 
                        c += b.upload.total;
                        e = 100 * d / c;
                    } else e = 100;
                    return this.emit("totaluploadprogress", e, c, d);
                }, b.prototype._getParamName = function(a) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "");
                }, b.prototype.getFallbackForm = function() {
                    var a, c, d, e;
                    return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', 
                    this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), 
                    d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
                    c = b.createElement(d), "FORM" !== this.element.tagName ? (e = b.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), 
                    e.appendChild(c)) : (this.element.setAttribute("enctype", "multipart/form-data"), 
                    this.element.setAttribute("method", this.options.method)), null != e ? e : c);
                }, b.prototype.getExistingFallback = function() {
                    var a, b, c, d, e, f;
                    for (b = function(a) {
                        var b, c, d;
                        for (c = 0, d = a.length; d > c; c++) if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b;
                    }, f = [ "div", "form" ], d = 0, e = f.length; e > d; d++) if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a;
                }, b.prototype.setupEventListeners = function() {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                        return e;
                    }());
                    return g;
                }, b.prototype.removeEventListeners = function() {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                        return e;
                    }());
                    return g;
                }, b.prototype.disable = function() {
                    var a, b, c, d, e;
                    for (this.clickableElements.forEach(function(a) {
                        return a.classList.remove("dz-clickable");
                    }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], 
                    e.push(this.cancelUpload(a));
                    return e;
                }, b.prototype.enable = function() {
                    return this.clickableElements.forEach(function(a) {
                        return a.classList.add("dz-clickable");
                    }), this.setupEventListeners();
                }, b.prototype.filesize = function(a) {
                    var b;
                    return a >= 109951162777.6 ? (a /= 109951162777.6, b = "TiB") : a >= 107374182.4 ? (a /= 107374182.4, 
                    b = "GiB") : a >= 104857.6 ? (a /= 104857.6, b = "MiB") : a >= 102.4 ? (a /= 102.4, 
                    b = "KiB") : (a = 10 * a, b = "b"), "<strong>" + Math.round(a) / 10 + "</strong> " + b;
                }, b.prototype._updateMaxFilesReachedClass = function() {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
                    this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
                }, b.prototype.drop = function(a) {
                    var b, c;
                    a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, 
                    c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)));
                }, b.prototype.paste = function(a) {
                    var b, c;
                    if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), 
                    b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0;
                }, b.prototype.handleFiles = function(a) {
                    var b, c, d, e;
                    for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
                    return e;
                }, b.prototype._addFilesFromItems = function(a) {
                    var b, c, d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile && (null == c.kind || "file" === c.kind) ? this.addFile(c.getAsFile()) : void 0);
                    return f;
                }, b.prototype._addFilesFromDirectory = function(a, b) {
                    var c, d;
                    return c = a.createReader(), d = function(a) {
                        return function(c) {
                            var d, e, f;
                            for (e = 0, f = c.length; f > e; e++) d = c[e], d.isFile ? d.file(function(c) {
                                return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, 
                                a.addFile(c));
                            }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name);
                        };
                    }(this), c.readEntries(d, function(a) {
                        return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0;
                    });
                }, b.prototype.accept = function(a, c) {
                    return a.size > 1024 * this.options.maxFilesize * 1024 ? c(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : b.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
                    this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, c) : c(this.options.dictInvalidFileType);
                }, b.prototype.addFile = function(a) {
                    return a.upload = {
                        progress: 0,
                        total: a.size,
                        bytesSent: 0
                    }, this.files.push(a), a.status = b.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), 
                    this.accept(a, function(b) {
                        return function(c) {
                            return c ? (a.accepted = !1, b._errorProcessing([ a ], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), 
                            b._updateMaxFilesReachedClass();
                        };
                    }(this));
                }, b.prototype.enqueueFiles = function(a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
                    return null;
                }, b.prototype.enqueueFile = function(a) {
                    if (a.status !== b.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    return a.status = b.QUEUED, this.options.autoProcessQueue ? setTimeout(function(a) {
                        return function() {
                            return a.processQueue();
                        };
                    }(this), 0) : void 0;
                }, b.prototype._thumbnailQueue = [], b.prototype._processingThumbnail = !1, b.prototype._enqueueThumbnail = function(a) {
                    return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), 
                    setTimeout(function(a) {
                        return function() {
                            return a._processThumbnailQueue();
                        };
                    }(this), 0)) : void 0;
                }, b.prototype._processThumbnailQueue = function() {
                    return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, 
                    this.createThumbnail(this._thumbnailQueue.shift(), function(a) {
                        return function() {
                            return a._processingThumbnail = !1, a._processThumbnailQueue();
                        };
                    }(this)));
                }, b.prototype.removeFile = function(a) {
                    return a.status === b.UPLOADING && this.cancelUpload(a), this.files = j(this.files, a), 
                    this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0;
                }, b.prototype.removeAllFiles = function(a) {
                    var c, d, e, f;
                    for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) c = f[d], 
                    (c.status !== b.UPLOADING || a) && this.removeFile(c);
                    return null;
                }, b.prototype.createThumbnail = function(a, b) {
                    var c;
                    return c = new FileReader(), c.onload = function(d) {
                        return function() {
                            var e;
                            return e = document.createElement("img"), e.onload = function() {
                                var c, f, g, i, j, k, l, m;
                                return a.width = e.width, a.height = e.height, g = d.options.resize.call(d, a), 
                                null == g.trgWidth && (g.trgWidth = g.optWidth), null == g.trgHeight && (g.trgHeight = g.optHeight), 
                                c = document.createElement("canvas"), f = c.getContext("2d"), c.width = g.trgWidth, 
                                c.height = g.trgHeight, h(f, e, null != (j = g.srcX) ? j : 0, null != (k = g.srcY) ? k : 0, g.srcWidth, g.srcHeight, null != (l = g.trgX) ? l : 0, null != (m = g.trgY) ? m : 0, g.trgWidth, g.trgHeight), 
                                i = c.toDataURL("image/png"), d.emit("thumbnail", a, i), null != b ? b() : void 0;
                            }, e.src = c.result;
                        };
                    }(this), c.readAsDataURL(a);
                }, b.prototype.processQueue = function() {
                    var a, b, c, d;
                    if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, 
                    !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                        if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                        for (;b > a; ) {
                            if (!d.length) return;
                            this.processFile(d.shift()), a++;
                        }
                    }
                }, b.prototype.processFile = function(a) {
                    return this.processFiles([ a ]);
                }, b.prototype.processFiles = function(a) {
                    var c, d, e;
                    for (d = 0, e = a.length; e > d; d++) c = a[d], c.processing = !0, c.status = b.UPLOADING, 
                    this.emit("processing", c);
                    return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a);
                }, b.prototype._getFilesWithXhr = function(a) {
                    var b, c;
                    return c = function() {
                        var c, d, e, f;
                        for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                        return f;
                    }.call(this);
                }, b.prototype.cancelUpload = function(a) {
                    var c, d, e, f, g, h, i;
                    if (a.status === b.UPLOADING) {
                        for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) c = d[e], 
                        c.status = b.CANCELED;
                        for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) c = d[f], this.emit("canceled", c);
                        this.options.uploadMultiple && this.emit("canceledmultiple", d);
                    } else ((i = a.status) === b.ADDED || i === b.QUEUED) && (a.status = b.CANCELED, 
                    this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [ a ]));
                    return this.options.autoProcessQueue ? this.processQueue() : void 0;
                }, b.prototype.uploadFile = function(a) {
                    return this.uploadFiles([ a ]);
                }, b.prototype.uploadFiles = function(a) {
                    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
                    for (t = new XMLHttpRequest(), u = 0, y = a.length; y > u; u++) d = a[u], d.xhr = t;
                    t.open(this.options.method, this.options.url, !0), t.withCredentials = !!this.options.withCredentials, 
                    q = null, f = function(b) {
                        return function() {
                            var c, e, f;
                            for (f = [], c = 0, e = a.length; e > c; c++) d = a[c], f.push(b._errorProcessing(a, q || b.options.dictResponseError.replace("{{statusCode}}", t.status), t));
                            return f;
                        };
                    }(this), r = function(b) {
                        return function(c) {
                            var e, f, g, h, i, j, k, l, m;
                            if (null != c) for (f = 100 * c.loaded / c.total, g = 0, j = a.length; j > g; g++) d = a[g], 
                            d.upload = {
                                progress: f,
                                total: c.total,
                                bytesSent: c.loaded
                            }; else {
                                for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) d = a[h], (100 !== d.upload.progress || d.upload.bytesSent !== d.upload.total) && (e = !1), 
                                d.upload.progress = f, d.upload.bytesSent = d.upload.total;
                                if (e) return;
                            }
                            for (m = [], i = 0, l = a.length; l > i; i++) d = a[i], m.push(b.emit("uploadprogress", d, f, d.upload.bytesSent));
                            return m;
                        };
                    }(this), t.onload = function(c) {
                        return function(d) {
                            var e;
                            if (a[0].status !== b.CANCELED && 4 === t.readyState) {
                                if (q = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json")) try {
                                    q = JSON.parse(q);
                                } catch (g) {
                                    d = g, q = "Invalid JSON response from server.";
                                }
                                return r(), 200 <= (e = t.status) && 300 > e ? c._finished(a, q, d) : f();
                            }
                        };
                    }(this), t.onerror = function() {
                        return function() {
                            return a[0].status !== b.CANCELED ? f() : void 0;
                        };
                    }(this), p = null != (D = t.upload) ? D : t, p.onprogress = r, i = {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    }, this.options.headers && c(i, this.options.headers);
                    for (g in i) h = i[g], t.setRequestHeader(g, h);
                    if (e = new FormData(), this.options.params) {
                        E = this.options.params;
                        for (n in E) s = E[n], e.append(n, s);
                    }
                    for (v = 0, z = a.length; z > v; v++) d = a[v], this.emit("sending", d, t, e);
                    if (this.options.uploadMultiple && this.emit("sendingmultiple", a, t, e), "FORM" === this.element.tagName) for (F = this.element.querySelectorAll("input, textarea, select, button"), 
                    w = 0, A = F.length; A > w; w++) if (k = F[w], l = k.getAttribute("name"), m = k.getAttribute("type"), 
                    "SELECT" === k.tagName && k.hasAttribute("multiple")) for (G = k.options, x = 0, 
                    B = G.length; B > x; x++) o = G[x], o.selected && e.append(l, o.value); else (!m || "checkbox" !== (H = m.toLowerCase()) && "radio" !== H || k.checked) && e.append(l, k.value);
                    for (j = C = 0, I = a.length - 1; I >= 0 ? I >= C : C >= I; j = I >= 0 ? ++C : --C) e.append(this._getParamName(j), a[j], a[j].name);
                    return t.send(e);
                }, b.prototype._finished = function(a, c, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = b.SUCCESS, this.emit("success", e, c, d), 
                    this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("successmultiple", a, c, d), this.emit("completemultiple", a)), 
                    this.options.autoProcessQueue ? this.processQueue() : void 0;
                }, b.prototype._errorProcessing = function(a, c, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = b.ERROR, this.emit("error", e, c, d), 
                    this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("errormultiple", a, c, d), this.emit("completemultiple", a)), 
                    this.options.autoProcessQueue ? this.processQueue() : void 0;
                }, b;
            }(d), b.version = "3.10.2", b.options = {}, b.optionsForElement = function(a) {
                return a.getAttribute("id") ? b.options[e(a.getAttribute("id"))] : void 0;
            }, b.instances = [], b.forElement = function(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return a.dropzone;
            }, b.autoDiscover = !0, b.discover = function() {
                var a, c, d, e, f, g;
                for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], 
                a = function(a) {
                    var b, c, e, f;
                    for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                    return f;
                }, a(document.getElementsByTagName("div")), a(document.getElementsByTagName("form"))), 
                g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(b.optionsForElement(c) !== !1 ? new b(c) : void 0);
                return g;
            }, b.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], b.isBrowserSupported = function() {
                var a, c, d, e, f;
                if (a = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (f = b.blacklistedBrowsers, 
                d = 0, e = f.length; e > d; d++) c = f[d], c.test(navigator.userAgent) && (a = !1); else a = !1; else a = !1;
                return a;
            }, j = function(a, b) {
                var c, d, e, f;
                for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
                return f;
            }, e = function(a) {
                return a.replace(/[\-_](\w)/g, function(a) {
                    return a.charAt(1).toUpperCase();
                });
            }, b.createElement = function(a) {
                var b;
                return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0];
            }, b.elementInside = function(a, b) {
                if (a === b) return !0;
                for (;a = a.parentNode; ) if (a === b) return !0;
                return !1;
            }, b.getElement = function(a, b) {
                var c;
                if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), 
                null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
                return c;
            }, b.getElements = function(a, b) {
                var c, d, e, f, g, h, i, j;
                if (a instanceof Array) {
                    e = [];
                    try {
                        for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b));
                    } catch (k) {
                        c = k, e = null;
                    }
                } else if ("string" == typeof a) for (e = [], j = document.querySelectorAll(a), 
                g = 0, i = j.length; i > g; g++) d = j[g], e.push(d); else null != a.nodeType && (e = [ a ]);
                if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                return e;
            }, b.confirm = function(a, b, c) {
                return window.confirm(a) ? b() : null != c ? c() : void 0;
            }, b.isValidFile = function(a, b) {
                var c, d, e, f, g;
                if (!b) return !0;
                for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++) if (e = b[f], 
                e = e.trim(), "." === e.charAt(0)) {
                    if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0;
                } else if (/\/\*$/.test(e)) {
                    if (c === e.replace(/\/.*$/, "")) return !0;
                } else if (d === e) return !0;
                return !1;
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(a) {
                return this.each(function() {
                    return new b(this, a);
                });
            }), "undefined" != typeof c && null !== c ? c.exports = b : window.Dropzone = b, 
            b.ADDED = "added", b.QUEUED = "queued", b.ACCEPTED = b.QUEUED, b.UPLOADING = "uploading", 
            b.PROCESSING = b.UPLOADING, b.CANCELED = "canceled", b.ERROR = "error", b.SUCCESS = "success", 
            g = function(a) {
                var b, c, d, e, f, g, h, i, j, k;
                for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), 
                c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, 
                k = 0, f = g, i = g; i > k; ) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
                return j = i / g, 0 === j ? 1 : j;
            }, h = function(a, b, c, d, e, f, h, i, j, k) {
                var l;
                return l = g(b), a.drawImage(b, c, d, e, f, h, i, j, k / l);
            }, f = function(a, b) {
                var c, d, e, f, g, h, i, j, k;
                if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", 
                i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", 
                f = function(c) {
                    return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), 
                    !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0;
                }, g = function() {
                    var a;
                    try {
                        j.doScroll("left");
                    } catch (b) {
                        return a = b, void setTimeout(g, 50);
                    }
                    return f("poll");
                }, "complete" !== d.readyState) {
                    if (d.createEventObject && j.doScroll) {
                        try {
                            k = !a.frameElement;
                        } catch (l) {}
                        k && g();
                    }
                    return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), 
                    a[c](h + "load", f, !1);
                }
            }, b._autoDiscoverFunction = function() {
                return b.autoDiscover ? b.discover() : void 0;
            }, f(window, b._autoDiscoverFunction);
        }).call(this);
    }), "object" == typeof exports ? module.exports = a("dropzone") : "function" == typeof define && define.amd ? define([], function() {
        return a("dropzone");
    }) : this.Dropzone = a("dropzone");
}();

var base = "http://ezgrade-api.ddns.net", api = base + "/api", ezApp = angular.module("ezgrade", [ "ngRoute", "ngSanitize", "ngDropzone", "localytics.directives", "mgo-angular-wizard", "xeditable", "ngAnimate", "chart.js", "app", "satellizer", "ngResource", "ngStorage" ]).config([ "$routeProvider", "$authProvider", function($routeProvider, $authProvider) {
    var skipIfLoggedIn = [ "$q", "$auth", function($q, $auth) {
        var deferred = $q.defer();
        return $auth.isAuthenticated() ? deferred.reject() : deferred.resolve(), deferred.promise;
    } ];
    $routeProvider.when("/login", {
        templateUrl: "views/pages/signin.html",
        controller: "LoginCtrl",
        resolve: {
            skipIfLoggedIn: skipIfLoggedIn
        }
    }).when("/logout", {
        template: "<div></div>",
        controller: "LogoutCtrl"
    }).when("/signup", {
        templateUrl: "views/pages/signup.html",
        controller: "SignupCtrl",
        resolve: {
            skipIfLoggedIn: skipIfLoggedIn
        }
    }).when("/404", {
        templateUrl: "views/pages/404.html"
    }).otherwise({
        redirectTo: "/404"
    }), $authProvider.facebook({
        clientId: "819967938136120"
    }), $authProvider.baseUrl = base, $authProvider.loginUrl = base + "/auth/login", 
    $authProvider.signupUrl = base + "/auth/signup", $authProvider.unlinkUrl = base + "/auth/unlink/";
} ]);

ezApp.factory("AssignmentService", [ "$resource", function($resource) {
    var resource = $resource(api + "/assignments/:id");
    return resource;
} ]), ezApp.factory("ClassService", [ "$resource", "logger", "$log", function($resource, logger, $log) {
    function process_teacher_classes(classes) {
        angular.forEach(classes, function(cs) {
            delete cs.teacher_class.class_id, angular.extend(cs, cs.teacher_class), delete cs.teacher_class, 
            angular.forEach(cs.grade_breakdown, function(gb) {
                delete gb.assignment_category.id, delete gb.assignment_category_id, angular.extend(gb, gb.assignment_category), 
                delete gb.assignment_category;
            });
        }), $log.info(classes);
    }
    function process_student_classes(classes) {}
    function cannot_get_classes_error() {
        logger.logError("Error getting classes, please try again");
    }
    var resource = $resource(api + "/classes/:id");
    return resource.getForTeacher = function() {
        var promise = resource.query(process_teacher_classes, cannot_get_classes_error);
        return promise;
    }, resource.getForStudent = function(student_id) {
        var promise = resource.query(process_student_classes, cannot_get_classes_error);
        return promise;
    }, resource;
} ]), ezApp.factory("Component", [ "$resource", function($resource) {
    var resource = $resource(api + "/grade_breakdowns/:id");
    return resource.remove = function(grade_breakdown) {
        return resource["delete"]({
            id: grade_breakdown.id
        });
    }, resource.edited = function(grade_breakdown) {
        return resource.update({
            id: grade_breakdown.id
        }, {
            grade_breakdown: grade_breakdown
        });
    }, resource.created = function(points, classs) {
        return resource.store({});
    }, resource;
} ]), ezApp.directive("customPopover", function($log) {
    return {
        templateUrl: "views/popover/custom_popover.html",
        replace: !0,
        scope: {
            infoObject: "="
        },
        link: function(scope, elements, attr) {
            elements.find("input").webuiPopover({
                trigger: "hover",
                closeable: !0,
                placement: "top",
                display: "block",
                width: "400px",
                top: "279px",
                left: "639.5px"
            });
        }
    };
}), ezApp.directive("growthDecayGraph", function($log) {
    return {
        templateUrl: "views/barGraphs/grow_decay_graph.html",
        replace: !0,
        scope: {
            infoObject: "="
        }
    };
}), ezApp.directive("imgPreviewPopover", function($log) {
    return {
        templateUrl: "views/popover/img_popover_preview.html",
        replace: !0,
        scope: {
            previewObject: "="
        },
        link: function(scope, elements, attr) {
            elements.find("input").webuiPopover({
                trigger: "hover",
                closeable: !0,
                placement: "top",
                display: "block",
                width: "700px",
                top: "279px",
                left: "639.5px"
            });
        }
    };
}), ezApp.controller("aboutMeController", [ "$scope", "$modalInstance", "$log", function($scope, $modalInstance, $log) {
    $scope.departments = [ {
        type: "Math"
    }, {
        type: "English"
    }, {
        type: "Science"
    }, {
        type: "Social Science"
    }, {
        type: "Computer Science"
    }, {
        type: "Engineering"
    }, {
        type: "Art"
    } ], $scope.aboutYouInfo = {}, $scope.submitForm = function(isValid) {
        isValid && $modalInstance.close($scope.aboutYouInfo);
    };
} ]), ezApp.controller("addDocController", [ "$scope", "$modalInstance", "$log", "$auth", "docsInfo", function($scope, $modalInstance, $log, $auth, docsInfo) {
    function arrayObjectIndexOf(myArray, searchTerm, property) {
        for (var i = 0, len = myArray.length; i < len; i++) if (myArray[i][property] === searchTerm) return i;
        return -1;
    }
    $scope.docs = {
        selectedDocsS: [],
        selectedDocsP: [],
        stampTypeAll: null,
        stampTypeSelected: null,
        points: null,
        stampOption: null,
        pointsOption: null,
        multipleChoice: !1
    }, $scope.docsInfo = docsInfo, $log.info($scope.docsInfo), $scope.stamps = [ "Free Response", "Credit No Credit", "Multiple Choice" ], 
    $scope.applyToAllStamp = function() {
        angular.forEach($scope.docsInfo, function(doc) {
            doc.stampType = $scope.docs.stampTypeAll, "Multiple Choice" === doc.stampType ? $scope.docs.multipleChoice = !0 : "Multiple Choice" !== doc.stampType && ($scope.docs.multipleChoice = !1), 
            "Not Yet Added" !== doc.stampType && "Not Yet Added" !== doc.points ? $scope.dataValid = !0 : $scope.dataValid = !1;
        }), $scope.docs.stampTypeAll = null;
    }, $scope.applyToSelectedStamp = function() {
        angular.forEach($scope.docs.selectedDocsS, function(docs) {
            var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
            $scope.docsInfo[i].stampType = $scope.docs.stampTypeSelected, "Multiple Choice" === docs.stampType ? $scope.docs.multipleChoice = !0 : "Multiple Choice" !== docs.stampType && ($scope.docs.multipleChoice = !1), 
            "Not Yet Added" !== docs.stampType && "Not Yet Added" !== docs.points ? $scope.dataValid = !0 : $scope.dataValid = !1;
        }), $scope.docs.selectedDocsS = [], $scope.docs.stampTypeSelected = null;
    }, $scope.dataValid = !1, $scope.applyToAllPoints = function() {
        angular.forEach($scope.docsInfo, function(doc) {
            doc.points = $scope.docs.points, "Not Yet Added" !== doc.points && "Not Yet Added" !== doc.stampType ? $scope.dataValid = !0 : $scope.dataValid = !1;
        }), $scope.docs.points = null;
    }, $scope.applyToSelectedPoints = function() {
        angular.forEach($scope.docs.selectedDocsP, function(docs) {
            var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
            $scope.docsInfo[i].points = $scope.docs.points, "" !== docs.points && "" !== docs.stampType ? $scope.dataValid = !0 : $scope.dataValid = !1;
        }), $scope.docs.selectedDocsP = [], $scope.docs.points = null;
    }, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("addedDocsController", [ "$scope", "$modalInstance", "$log", "$auth", function($scope, $modalInstance, $log, $auth) {
    function arrayObjectIndexOf(myArray, searchTerm, property) {
        for (var i = 0, len = myArray.length; i < len; i++) if (myArray[i][property] === searchTerm) return i;
        return -1;
    }
    $scope.stampOptions = [ "A to D", "Credit, No Credit", "Numerical" ], $scope.hwDocuments = [], 
    $scope.ponts = {
        selectedDocs: []
    }, $scope.stamp = {
        selectedDocs: []
    }, $scope.aToBStamp = {
        name: "A to D",
        pdfLink: "http://ezgrade-api.ddns.net/images/stamp_abc.png",
        description: "The A-D enables to quickly select the level of credit you want to give for a any document. Giving an A means you give 100% percent of the credit, giving a B means 85% and so on and so forth. EasyGrade will then determine its actual value, and give that score to the student."
    }, $scope.creditNoStamp = {
        name: "Credit No Credit",
        pdfLink: "http://ezgrade-api.ddns.net/images/stamp_credit.png",
        description: "The Credit No Credit stamp serves its name purpose, do you want to give full credit o no credit at all. Giving credit means you give 100% of the points that assignment is worth, and giving no credit, we think you know. EasyGrade determines the value, and give that score to the student"
    }, $scope.numericalStamp = {
        name: "Numerical",
        pdfLink: "http://ezgrade-api.ddns.net/images/stamp_numerical.png",
        description: "Very straight forward! You give determine your own numerical value you want to assign. EasyGrade will assign such value to the student!"
    }, $scope.applyToAllStamp = function() {
        angular.forEach($scope.hwDocuments, function(docs) {
            docs.stampType = $scope.stampForAll;
        }), $scope.stampAdded = !0;
    }, $scope.applyToSelectedStamp = function() {
        angular.forEach($scope.stamp.selectedDocs, function(docs) {
            var i = arrayObjectIndexOf($scope.hwDocuments, docs.docName, "docName");
            $scope.hwDocuments[i].stampType = $scope.stampForSelected;
        }), $scope.stampAdded = !0;
    }, $scope.applyToAll = function() {
        angular.forEach($scope.hwDocuments, function(docs) {
            docs.points = $scope.assignToAllPoints;
        }), $scope.firstTime = !0;
    }, $scope.applyToSelected = function() {
        angular.forEach($scope.stamp.selectedDocs, function(docs) {
            var i = arrayObjectIndexOf($scope.hwDocuments, docs.docName, "docName");
            $scope.hwDocuments[i].points = $scope.assignToSelected;
        }), $scope.firstTime = !0;
    }, $scope.dzAddedFile = function(file) {
        $log.info(file);
        var newHWDoc = {};
        newHWDoc.docName = file.name, newHWDoc.points = "Not Yet Added", newHWDoc.type = "Homework", 
        newHWDoc.stampType = "Not Yet Added", $scope.hwDocuments.push(newHWDoc), $scope.docsAdded = !0, 
        $scope.$apply();
    }, $scope.dzError = function(file, errorMessage) {
        $log.log(errorMessage);
    }, $scope.removedFile = function(file) {
        var i = arrayObjectIndexOf($scope.hwDocuments, file.name, "docName");
        $scope.hwDocuments.splice(i, 1);
    }, $scope.dropzoneConfig = {
        parallelUploads: 1,
        maxFileSize: 10,
        url: api + "/files",
        acceptedFiles: "application/pdf",
        addRemoveLinks: !0,
        headers: {
            Authorization: "Bearer " + $auth.getToken()
        }
    }, $scope.submitForm = function(isValid) {
        isValid && ($log.info($scope.hwDocuments), $modalInstance.close($scope.hwDocuments));
    };
} ]), ezApp.controller("addPointsController", [ "$scope", "$log", "$modalInstance", "$filter", "classInfo", function($scope, $log, $modalInstance, $filter, classInfo) {
    $scope.classInfo = classInfo, $scope.saveInfo = function() {
        $modalInstance.close();
    }, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("classSetUpModalController", [ "$scope", "$log", "$modalInstance", "classInfo", function($scope, $log, $modalInstance, classInfo) {
    $scope.classInfo = classInfo, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("classStudentsModalController", [ "$scope", "$log", "$modalInstance", "$filter", "classInfo", function($scope, $log, $modalInstance, $filter, classInfo) {
    $scope.classInfo = classInfo, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("createClassesController", [ "$scope", "$modalInstance", "$log", function($scope, $modalInstance, $log) {
    function ClassInstance(className, classPeriod, gradeBreakdown, gradeScale) {
        this.className = className, this.classPeriod = classPeriod, this.gradeBreakdown = gradeBreakdown, 
        this.gradeScale = gradeScale;
    }
    $scope.periods = [ {
        value: 1
    }, {
        value: 2
    }, {
        value: 3
    }, {
        value: 4
    }, {
        value: 5
    }, {
        value: 6
    }, {
        value: 7
    }, {
        value: 8
    }, {
        value: 9
    }, {
        value: 10
    } ], $scope.newClass = {}, $scope.potentialComponents = [], $scope.defaultComponents = [ "Test", "Quiz", "Homework", "Final" ], 
    $scope.firstTime = !1;
    var classesInfo = [];
    $scope.addComponent = function(input) {
        $scope.potentialComponents = $scope.potentialComponents || [], $scope.potentialComponents.push(input.componentName), 
        input.componentName = "";
    }, $scope.resetBreakdown = function() {
        $scope.newClass.gradeBreakdown = {}, $scope.defaultComponents = [ "Test", "Quiz", "Homework", "Final" ];
    }, $scope.$watch("newClass.gradeBreakdown", function(newVal, OldVal) {
        $scope.componentsSum = 0, angular.forEach(newVal, function(component) {
            component && ($scope.componentsSum += component);
        });
    }, !0);
    var addClass = function() {
        var className = $scope.newClass.className, classPeriod = $scope.newClass.period.value, gradeBreakdown = $scope.newClass.gradeBreakdown, gradeScale = $scope.newClass.gradeScale, addClass1 = new ClassInstance(className, classPeriod, gradeBreakdown, gradeScale);
        classesInfo.push(addClass1), $scope.newClass.className = "", $scope.newClass.period = "", 
        $scope.addedClasses = classesInfo, $scope.firstTime === !1 && (alert('You added a class as you can see in the table! Scroll to the top again to create a new class and don\'t forget to hit the "Add Class" button'), 
        $scope.firstTime = !0);
    };
    $scope.checkValidity = function() {
        100 === $scope.componentsSum ? addClass() : alert("Ops, looks like your the sum of each of your grade components is not equal to 100!");
    }, $scope.removeRow = function(index, period) {
        $scope.addedClasses.splice(index, 1), classesInfo = $scope.addedClasses, $log.info(classesInfo);
    }, $scope.removeComponent = function($index, name) {
        $scope.potentialComponents.splice($index, 1);
    }, $scope.submitForm = function(isValid) {
        isValid && $modalInstance.close(classesInfo);
    };
} ]), ezApp.controller("missingAssignmentsController", [ "$scope", "$log", "$modalInstance", "$filter", "missingInfo", function($scope, $log, $modalInstance, $filter, missingInfo) {
    $scope.missingInfo = missingInfo, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("overAllGradesController", [ "$scope", "$log", "$modalInstance", "$filter", "avgInfo", function($scope, $log, $modalInstance, $filter, avgInfo) {
    $scope.avgGradesData = avgInfo, $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.controller("reportCardCountdownController", [ "$scope", "$log", "$modalInstance", "$filter", function($scope, $log, $modalInstance, $filter) {
    $scope.closeModal = function() {
        $modalInstance.close();
    };
} ]), ezApp.config([ "$routeProvider", "$authProvider", function($routeProvider, $authProvider) {
    var loginRequired = [ "$q", "$location", "$auth", "$log", function($q, $location, $auth, $log) {
        $log.info("required");
        var deferred = $q.defer();
        return $auth.isAuthenticated() ? deferred.resolve() : $location.path("/login"), 
        deferred.promise;
    } ];
    $routeProvider.when("/user_board", {
        templateUrl: "views/teacher/userboard.html",
        controller: "userBoardController",
        resolve: {
            loginRequired: loginRequired
        }
    }).when("/getting_started", {
        templateUrl: "views/teacher/getting_started.html",
        controller: "getStartedController",
        resolve: {
            loginRequired: loginRequired
        }
    }).when("/easy_box", {
        templateUrl: "views/teacher/easy_box.html",
        controller: "easyBoxController",
        resolve: {
            loginRequired: loginRequired
        }
    }).when("/manage_classes", {
        templateUrl: "views/teacher/manage_classes.html",
        controller: "manageClassesController"
    }).when("/", {
        redirectTo: "user_board"
    });
} ]), ezApp.controller("easyBoxController", [ "$scope", "$modal", "$log", "$location", "$auth", "$filter", "logger", "AssignmentService", function($scope, $modal, $log, $location, $auth, $filter, logger, assignment) {
    $scope.documents = assignment.query(), $scope.api = api, $scope.docsToSend = [], 
    $scope.dzAddedFile = function(file) {
        var newDoc = {};
        newDoc.docName = file.name, newDoc.points = "Not Yet Added", newDoc.type = $scope.dropZone.docType, 
        newDoc.stampType = "Not Yet Added", $scope.docsToSend.push(newDoc);
    }, $scope.dzCompleted = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/add_doc.html",
            controller: "addDocController",
            resolve: {
                docsInfo: function() {
                    return $scope.docsToSend;
                }
            }
        });
    }, $scope.components = [ "Test", "Exam", "Final", "Essay", "Homework" ], $scope.dropZone = {
        docType: []
    }, $scope.dzError = function(file, errorMessage) {
        $log.log(errorMessage);
    }, $scope.removedfile = function(file) {
        var i = arrayObjectIndexOf($scope.hwDocuments, file.name, "docName");
        $scope.hwDocuments.splice(i, 1);
    }, $scope.dropzoneConfig = {
        parallelUploads: 1,
        maxFileSize: 10,
        url: api + "/files",
        acceptedFiles: "application/pdf",
        addRemoveLinks: !0,
        headers: {
            Authorization: "Bearer " + $auth.getToken()
        }
    }, $scope.dropzoneConfigGrade = {
        parallelUploads: 1,
        maxFileSize: 10,
        url: api + "/grading",
        acceptedFiles: "image/*",
        addRemoveLinks: !0,
        headers: {
            Authorization: "Bearer " + $auth.getToken()
        }
    }, $scope.buttonName = "Show All", $scope.isCollapsed = !1, $scope.viewLimit = 3, 
    $scope.showAllDocs = function() {
        $scope.isCollapsed ? ($scope.buttonName = "Show All", $scope.isCollapsed = !1, $scope.viewLimit = 3) : ($scope.buttonName = "Hide", 
        $scope.isCollapsed = !0, $scope.viewLimit = "");
    }, $scope.fileTypes = [ "Homework", "Test", "Quiz" ], $scope.openStampedDocument = function(doc) {
        var url = api + "/files/" + doc.teacher_assignments.id + "?stamped=true&";
        url += "token=" + $auth.getToken(), window.open(url);
    }, $scope.deleteFile = function(doc) {
        assignment["delete"]({
            id: doc.teacher_assignments.id
        }, function(data) {
            logger.logSuccess("file successfully deleted");
            var i = $scope.documents.indexOf(doc);
            $scope.documents.splice(i, 1);
        }, function(err) {
            logger.logError("Error deleting file, please refresh page and try again");
        });
    };
} ]), ezApp.controller("getStartedController", [ "$scope", "$modal", "$log", "$location", "$http", "logger", "$localStorage", function($scope, $modal, $log, $location, $http, logger, $localStorage) {
    $scope.user = $localStorage.user.user_name.split(" ")[1], $scope.notify = function(type) {
        switch (type) {
          case "info":
            return logger.log("Heads up! This alert needs your attention, but it's not super important.");

          case "success":
            return logger.logSuccess("Well done! Info successfully submitted");

          case "warning":
            return logger.logWarning("Warning! Best check yo self, you're not looking too good.");

          case "error":
            return logger.logError("Oh snap! Change a few things up and try submitting again.");
        }
    };
    var wizardData = {};
    $scope.aboutYouHtml = "About Me", $scope.createClassHtml = "Create Classes", $scope.openAboutYou = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/about_me_modal.html",
            controller: "aboutMeController",
            backdrop: "static"
        }), modalInstance.result.then(function(aboutYouInfo) {
            $scope.notify("success"), $scope.aboutYouSuccess = !0, $scope.aboutYouHtml = "<del>About Me </del>", 
            aboutYouInfo.deptSelection = aboutYouInfo.deptSelection.type, wizardData.aboutYouInfo = aboutYouInfo, 
            $log.info(wizardData);
        });
    }, $scope.openCreateClass = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/create_classes_modal.html",
            controller: "createClassesController",
            backdrop: "static"
        }), modalInstance.result.then(function(classesInfo) {
            $scope.notify("success"), $scope.createClassSuccess = !0, $scope.createClassHtml = "<del>Create Classes</del>", 
            wizardData.classesInfo = classesInfo, $scope.stepTwoCompleted = !0, $scope.stepTwo = !0;
        });
    }, $scope.awesome = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/addedDocsModal.html",
            controller: "addedDocsController",
            backdrop: "static"
        }), modalInstance.result.then(function(hwDocuments) {
            $scope.notify("success"), wizardData.homeworkDocsInfo = hwDocuments, $log.info(wizardData), 
            $scope.readyToFinish = !0;
        });
    }, $scope.finalSubmit = function() {
        var promise = $http.post(api + "/initial_info", wizardData);
        promise.then(function(response) {
            $scope.notify("success"), $location.path("/user_board");
        }, function(response) {
            $scope.notify("error");
        });
    };
} ]), ezApp.controller("manageClassesController", [ "$scope", "$modal", "$log", "$filter", "ClassService", function($scope, $modal, $log, $filter, classs) {
    $scope.classesInfo = classs.getForTeacher(), $scope.documents = [ {
        name: "Introduction to Limits",
        type: "Homework",
        id: "1234"
    }, {
        name: "Limits Quiz",
        type: "Quiz",
        id: "4567"
    }, {
        name: "Exam 1",
        type: "Test",
        id: "7897"
    }, {
        name: "Limits to Infinity",
        type: "Homework",
        id: "3574"
    }, {
        name: "Derivatives",
        type: "Quiz",
        id: "1596"
    }, {
        name: "Integrals",
        type: "Quiz",
        id: "9874"
    }, {
        name: "Standard Deviation",
        type: "Quiz",
        id: "5566"
    } ], $scope.classesInfo = [ {
        period: 1,
        name: "AP Calculus A",
        classSize: 27,
        avgGrade: "B",
        avgTestScore: "82",
        avgQuizScore: "93",
        gradeBreakdown: [ {
            name: "Test",
            value: 25
        }, {
            name: "Quiz",
            value: 25
        }, {
            name: "Essay",
            value: 25
        }, {
            name: "Final",
            value: 25
        } ],
        gradeScale: [ {
            name: "aScale",
            min: 90,
            max: 100
        }, {
            name: "bScale",
            min: 80,
            max: 89
        }, {
            name: "cScale",
            min: 70,
            max: 79
        }, {
            name: "aScale",
            min: 60,
            max: 69
        } ],
        studentInfo: [ {
            name: "Brandon Hernandez",
            gradeLevel: "10th",
            id: "350036",
            classGrade: "A"
        }, {
            name: "Adrian Galicia",
            gradeLevel: "10th",
            id: "0721579",
            classGrade: "B"
        }, {
            name: "David Winter",
            gradeLevel: "10th",
            id: "100478",
            classGrade: "B"
        }, {
            name: "Jose Mireles",
            gradeLevel: "11th",
            id: "458973",
            classGrade: "C"
        }, {
            name: "Zlatan Ibrahomovich",
            gradeLevel: "11th",
            id: "582411",
            classGrade: "A"
        } ]
    }, {
        period: 2,
        name: "AP Calculus B",
        classSize: 35,
        avgGrade: "C",
        avgTestScore: "72",
        avgQuizScore: "75",
        gradeBreakdown: [ {
            name: "Test",
            value: 25
        }, {
            name: "Quiz",
            value: 25
        }, {
            name: "Homework",
            value: 25
        }, {
            name: "Final",
            value: 25
        } ],
        gradeScale: [ {
            name: "aScale",
            min: 90,
            max: 100
        }, {
            name: "bScale",
            min: 80,
            max: 89
        }, {
            name: "cScale",
            min: 70,
            max: 79
        }, {
            name: "aScale",
            min: 60,
            max: 69
        } ],
        studentInfo: [ {
            name: "Brandon Hernandez",
            gradeLevel: "10th",
            id: "350036",
            classGrade: "A"
        }, {
            name: "Adrian Galicia",
            gradeLevel: "10th",
            id: "0721579",
            classGrade: "B"
        }, {
            name: "David Winter",
            gradeLevel: "10th",
            id: "100478",
            classGrade: "B"
        }, {
            name: "Jose Mireles",
            gradeLevel: "11th",
            id: "458973",
            classGrade: "C"
        }, {
            name: "Zlatan Ibrahomovich",
            gradeLevel: "11th",
            id: "582411",
            classGrade: "A"
        } ]
    }, {
        period: 3,
        name: "AP Statistics 01",
        classSize: 35,
        avgGrade: "A",
        avgTestScore: "95",
        avgQuizScore: "95",
        gradeBreakdown: [ {
            name: "Test",
            value: 25
        }, {
            name: "Quiz",
            value: 25
        }, {
            name: "Homework",
            value: 25
        }, {
            name: "Final",
            value: 25
        } ],
        gradeScale: [ {
            name: "aScale",
            min: 90,
            max: 100
        }, {
            name: "bScale",
            min: 80,
            max: 89
        }, {
            name: "cScale",
            min: 70,
            max: 79
        }, {
            name: "aScale",
            min: 60,
            max: 69
        } ],
        studentInfo: [ {
            name: "Brandon Hernandez",
            gradeLevel: "10th",
            id: "350036",
            classGrade: "A"
        }, {
            name: "Adrian Galicia",
            gradeLevel: "10th",
            id: "0721579",
            classGrade: "B"
        }, {
            name: "David Winter",
            gradeLevel: "10th",
            id: "100478",
            classGrade: "B"
        }, {
            name: "Jose Mireles",
            gradeLevel: "11th",
            id: "458973",
            classGrade: "C"
        }, {
            name: "Zlatan Ibrahomovich",
            gradeLevel: "11th",
            id: "582411",
            classGrade: "A"
        } ]
    }, {
        period: 4,
        name: "AP Statistics 02",
        classSize: 35,
        avgGrade: "B",
        avgTestScore: "78",
        avgQuizScore: "66",
        gradeBreakdown: [ {
            name: "Test",
            value: 25
        }, {
            name: "Quiz",
            value: 25
        }, {
            name: "Homework",
            value: 25
        }, {
            name: "Final",
            value: 25
        } ],
        gradeScale: [ {
            name: "aScale",
            min: 90,
            max: 100
        }, {
            name: "bScale",
            min: 80,
            max: 89
        }, {
            name: "cScale",
            min: 70,
            max: 79
        }, {
            name: "aScale",
            min: 60,
            max: 69
        } ],
        studentInfo: [ {
            name: "Brandon Hernandez",
            gradeLevel: "10th",
            id: "350036",
            classGrade: "A"
        }, {
            name: "Adrian Galicia",
            gradeLevel: "10th",
            id: "0721579",
            classGrade: "B"
        }, {
            name: "David Winter",
            gradeLevel: "10th",
            id: "100478",
            classGrade: "B"
        }, {
            name: "Jose Mireles",
            gradeLevel: "11th",
            id: "458973",
            classGrade: "C"
        }, {
            name: "Zlatan Ibrahomovich",
            gradeLevel: "11th",
            id: "582411",
            classGrade: "A"
        } ]
    } ], $scope.pointAssign = {
        classId: null,
        directly: !1,
        allStudents: !1,
        selectedDoc: null,
        selectedStudents: [],
        component: null,
        points: null
    }, $scope.setDirectly = function() {
        $scope.pointAssign.directly = !0;
    }, $scope.addPoints = function(selected) {
        selected.pointAssign = $scope.pointAssign;
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/add_points.html",
            controller: "addPointsController",
            resolve: {
                classInfo: function() {
                    return selected;
                }
            }
        });
    }, $scope.classSelected = function(classs) {
        $scope.selectedClassComponents = classs.gradeBreakdown, $scope.selected == classs ? $scope.selected = null : $scope.selected = classs;
    }, $scope.openClassSetUp = function(classs) {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/class_setup_modal.html",
            controller: "classSetUpModalController",
            resolve: {
                classInfo: function() {
                    return classs;
                }
            }
        });
    }, $scope.openClassStudents = function(classs) {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/class_students.html",
            controller: "classStudentsModalController",
            resolve: {
                classInfo: function() {
                    return classs;
                }
            }
        });
    };
} ]), ezApp.controller("userBoardController", [ "$scope", "$log", "$timeout", "$modal", function($scope, $log, $timeout, $modal) {
    $scope.avgGradesData = [ {
        period: "1",
        className: "AP Calculus 01",
        avgGrade: "B",
        averages: [ {
            name: "Test",
            avgScore: 77
        }, {
            name: "Participation",
            avgScore: 0
        }, {
            name: "Quiz",
            avgScore: 91
        } ]
    }, {
        period: "2",
        className: "AP Calculus 02",
        avgGrade: "C",
        averages: [ {
            name: "Exam",
            avgScore: 71
        }, {
            name: "Homework",
            avgScore: 90
        }, {
            name: "Quiz",
            avgScore: 77
        } ]
    }, {
        period: "3",
        className: "AP Statistics 01",
        avgGrade: "A",
        averages: [ {
            name: "Test",
            avgScore: 90
        }, {
            name: "Homework",
            avgScore: 92
        }, {
            name: "Quiz",
            avgScore: 95
        } ]
    }, {
        period: "4",
        className: "AP Statistics 02",
        avgGrade: "B",
        averages: [ {
            name: "Projects",
            avgScore: 66
        }, {
            name: "Homework",
            avgScore: 55
        }, {
            name: "Quiz",
            avgScore: 70
        } ]
    } ], $scope.missingInfo = [ {
        docName: "Limits Quiz",
        type: "Quiz",
        stuList: [ {
            stuName: "Brandon Hernandez",
            className: "AP Calculus,"
        }, {
            stuName: "Adrian Galicia",
            className: "AP Calculus,"
        }, {
            stuName: "Micheal Govea",
            className: "AP Calculus,"
        } ]
    }, {
        docName: "Derivatives",
        type: "Test",
        stuList: [ {
            stuName: "Brandon Hernandez",
            className: "AP Calculus,"
        }, {
            stuName: "Adrian Galicia",
            className: "AP Calculus,"
        }, {
            stuName: "Micheal Govea",
            className: "AP Calculus,"
        } ]
    }, {
        docName: "Related Rates",
        type: "Homework",
        stuList: [ {
            stuName: "Brandon Hernandez",
            className: "AP Calculus,"
        }, {
            stuName: "Adrian Galicia",
            className: "AP Calculus,"
        }, {
            stuName: "Micheal Govea",
            className: "AP Calculus,"
        } ]
    } ], $scope.openOverallGrades = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/over_all_grades.html",
            controller: "overAllGradesController",
            resolve: {
                avgInfo: function() {
                    return $scope.avgGradesData;
                }
            }
        });
    }, $scope.missingAssignments = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/missing_assignments.html",
            controller: "missingAssignmentsController",
            resolve: {
                missingInfo: function() {
                    return $scope.missingInfo;
                }
            }
        });
    }, $scope.reportCardCountdown = function() {
        var modalInstance;
        modalInstance = $modal.open({
            size: "lg",
            templateUrl: "views/teacher/modals/reportCard_countDown.html",
            controller: "reportCardCountdownController"
        });
    }, $scope.growthStudents = [ "Brandon", "Adrian", "Karla", "Ana", "Thomas" ], $scope.growthData = [ [ 10, 5, 12, 6, 7 ] ], 
    $scope.colorsG = [ "#ABCD39" ], $scope.colorsD = [ "#F79023" ], $scope.decayStudents = [ "Ramiro", "Ivan", "Ino", "Ana", "Thomas" ], 
    $scope.decayData = [ [ -5, -7, -1, -3, -6 ] ], $scope.options = {
        scales: {
            yAxes: [ {
                display: !0,
                ticks: {
                    beginAtZero: !0
                }
            } ]
        }
    };
} ]), angular.module("ezgrade").controller("LoginCtrl", [ "$scope", "logger", "$auth", "$location", "$localStorage", "$log", function($scope, logger, $auth, $location, $localStorage, $log) {
    $scope.login = function() {
        $auth.login({
            email: $scope.email,
            password: $scope.password
        }).then(function(response) {
            var data = response.data;
            $scope.$storage = $localStorage, $scope.$storage.user = data.user, logger.logSuccess("You have successfully logged in"), 
            $location.path(data.route);
        })["catch"](function(response) {
            logger.log(response.data.message);
        });
    }, $scope.authenticate = function(provider) {
        $auth.authenticate(provider).then(function(response) {
            var data = response.data;
            $scope.$storage = $localStorage, $scope.$storage.user = data.user, logger.logSuccess("You have successfully logged in"), 
            $location.path(data.route);
        })["catch"](function(response) {
            logger.log(response.data ? response.data.message : response);
        });
    };
} ]), angular.module("ezgrade").controller("LogoutCtrl", [ "$scope", "$location", "$auth", "logger", "$localStorage", function($scope, $location, $auth, logger, $localStorage) {
    return $auth.isAuthenticated() ? void $auth.logout().then(function() {
        $scope.$storage = $localStorage, $scope.$storage.user = null, logger.logSuccess("You have successfully logged Out"), 
        $location.path("/login");
    }, function() {
        logger.logSuccess("error logging out");
    }) : void $location.path("/");
} ]), angular.module("ezgrade").controller("NavbarCtrl", [ "$scope", "$auth", "$localStorage", "$log", function($scope, $auth, $localStorage, $log) {
    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    }, $scope.$storage = $localStorage, $scope.user = $scope.$storage.user.user_name.split(" ")[0], 
    $log.info($scope.user), $scope.logout = function() {
        $auth.isAuthenticated() && $auth.logout().then(function() {
            logger.info("You have been logged out"), $location.path("/");
        });
    };
} ]), angular.module("ezgrade").controller("SignupCtrl", [ "$scope", "logger", "$auth", function($scope, logger, $auth) {
    $scope.signup = function() {
        $auth.signup({
            user_name: $scope.user_name,
            email: $scope.email,
            password: $scope.password
        })["catch"](function(response) {
            "object" == typeof response.data.message ? angular.forEach(response.data.message, function(message) {
                logger.log(message[0]);
            }) : logger.log(response.data.message);
        });
    };
} ]);