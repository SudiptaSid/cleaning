$(document).ready(function() {
	var n, e = function() {
		$("#sparkline1").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
			type: "line",
			width: "100%",
			height: "220",
			chartRangeMax: 50,
			lineColor: "#00acc1",
			fillColor: "rgba(0, 172, 193, 0.2)",
			highlightLineColor: "rgba(0,0,0,.1)",
			highlightSpotColor: "rgba(0,0,0,.2)",
			maxSpotColor: !1,
			minSpotColor: !1,
			spotColor: !1,
			lineWidth: 1
		}), $("#sparkline1").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
			type: "line",
			width: "100%",
			height: "200",
			chartRangeMax: 40,
			lineColor: "#f1556c",
			fillColor: "rgba(229, 43, 76, 0.3)",
			composite: !0,
			highlightLineColor: "rgba(0,0,0,.1)",
			highlightSpotColor: "rgba(0,0,0,.2)",
			maxSpotColor: !1,
			minSpotColor: !1,
			spotColor: !1,
			lineWidth: 1
		}), $("#sparkline2").sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
			type: "bar",
			height: "220",
			barWidth: "10",
			barSpacing: "3",
			barColor: "#00acc1"
		}), $("#sparkline3").sparkline([20, 40, 30, 10], {
			type: "pie",
			width: "220",
			height: "220",
			sliceColors: ["#00acc1", "#4b88e4", "#525e6b", "#fd7e14"]
		})
	};
	e(), $(window).resize(function(a) {
		clearTimeout(n), n = setTimeout(function() {
			e()
		}, 300)
	})
})