var chartData_Sell = {
	labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	datasets: [
		{
			type: "line",
			borderColor: "#fdaa7a",
			borderWidth: 3,
			fill: false,
			yAxisID: "sellNum",
			data: [29, 40, 17, 83, 150, 53, 82]
		},
	],
};
var Data = document.getElementById("sell").getContext("2d");
var myChart = new Chart(Data, {
	type: "line",
	data: chartData_Sell,
	barPercentage: 1,
	categoryPercentage: 1,
	options: {
		responsive: true,
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					type: "linear",
					display: true,
					position: "left",
					id: "sellNum",
					ticks: {
						min: 0,
						max: 150,
						stepSize: 30,
						fontColor: "#4d4d4d",
						fontSize: 12,
						padding: 10,
					},
					gridLines: {
						borderDash: [5, 3],
						drawBorder: 0,
						lineWidth: 1,
						zeroLineWidth: 3,
						zeroLineColor: "#E3E4E4",
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		elements: {
			point: {
				radius: 0,
				hoverRadius: 10,
				backgroundColor: "rgba(255,255,255,1)",
				hoverBorderWidth: 2,
				borderColor: "#77D8DE",
			},
		},
	},
});
$("#data")
	.children(".btn-box")
	.children(".day-btn")
	.click(function dayData() {
		myChart.data.labels = [
			"0:00",
			"4:00",
			"8:00",
			"12:00",
			"16:00",
			"20:00",
			"23:59",
		];
		myChart.data.datasets[0].data = [0, 5, 10, 39, 28, 5, 3];
		myChart.options.scales.yAxes[0].ticks.min = 0;
		myChart.options.scales.yAxes[0].ticks.max = 40;
		myChart.options.scales.yAxes[0].ticks.stepSize = 10;
		myChart.update();
	});

$("#data")
	.children(".btn-box")
	.children(".week-btn")
	.click(function weekData() {
		myChart.data.labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		myChart.data.datasets[0].data = [29, 40, 17, 83, 150, 53, 82];
		myChart.options.scales.yAxes[0].ticks.min = 0;
		myChart.options.scales.yAxes[0].ticks.max = 150;
		myChart.options.scales.yAxes[0].ticks.stepSize = 30;
		myChart.update();
	});

$("#data")
	.children(".btn-box")
	.children(".month-btn")
	.click(function monthData() {
		myChart.data.labels = [
			"11/1-11/7",
			"11/8-11/14",
			"11/15-11/21",
			"11/22-11/28",
			"11/29-12/5",
		];
		myChart.data.datasets[0].data = [284, 501, 492, 359, 524];
		myChart.options.scales.yAxes[0].ticks.min = 250;
		myChart.options.scales.yAxes[0].ticks.max = 550;
		myChart.options.scales.yAxes[0].ticks.stepSize = 50;
		myChart.update();
	});

$("#data")
	.children(".btn-box")
	.children(".btn")
	.click(function () {
		if (!$(this).hasClass("active")) {
			$("#data").children(".btn-box").children(".btn").removeClass("active");
			$(this).addClass("active");
		}
	});
