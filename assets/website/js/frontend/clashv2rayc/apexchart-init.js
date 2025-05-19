// Bar Chart
var barchartOptionsOne = {
	chart: {
	  type: 'bar',
	},
	series: [
		{
			name: 'Net Profit',
			data: [50, 40, 57, 35, 60]
		},
		{
			name: 'Revenue',
			data: [45, 23, 60, 27, 55]
		}
	],
    labels: ['2018', '2019', '2020', '2021', '2022'],
	yaxis: {
		title: {
		  text: '$ (Thousand)'
		}
	},
	plotOptions: {
		bar: {
		  horizontal: false,
		  columnWidth: '50%',
		},
	},
}
  
var barchartOne = new ApexCharts(document.querySelector("#barChart1"), barchartOptionsOne);
barchartOne.render();