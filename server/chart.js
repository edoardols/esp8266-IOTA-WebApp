
let series = [];

function drawChart() {

    //messageId = 0
    //day = 1
    //time = 2
    //temperature = 3
    //humidity = 4
    let databaseArray = getDatabaseArray();

    let temperature_array = [];
    let humidity_array = [];

    for(let i = 0; i < databaseArray.length; i++){
        // x: day/time
        // y: value

        //DEBUG TIME
        let time = databaseArray[i][2];
        //temperature_array.push({x: time, y: databaseArray[i][3]});
        //humidity_array.push({x: time, y: databaseArray[i][4]});


        temperature_array.push({x: time, y: databaseArray[i][3]});
        humidity_array.push({x: time, y: databaseArray[i][4]});
    }

    series = [
		{name: 'Temperature', points: temperature_array},
		{name: 'Humidity', points: humidity_array}
	];

    //console.log(series[0]);

    //let test1 = [series[0]];
    //let test2 = [series[1]];
    //console.log(series);
    //console.log(test);
    
	//renderChart1(test1);
    //renderChart2(test2);
    renderChart();
}

//function convertTimeStringTo
/*
function renderChart1(seriePassed) {
	JSC.Chart('chartDiv1', {
		title_label_text: 'Temperature and Humidity',
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
		series: seriePassed
	});
}

function renderChart2(seriePassed) {
	JSC.Chart('chartDiv2', {
		title_label_text: 'Temperature and Humidity',
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
		series: seriePassed
	});
}
*/
/*
// JS MULTIPLE CHART
var chartA = { 
    debug: true, 
    type: 'column', 
    title_label_text: 'Chart A', 
    xAxis_scale_type: 'time', 
    series: [series[0]] 
}; 
    
var chartB = { 
    debug: true, 
    palette: 'fiveColor2', 
    type: 'column', 
    title_label_text: 'Chart B', 
    xAxis_scale_type: 'time', 
    series: [series[1]] 
};
*/
/* GOOOD
function renderChart() {

    JSC.Chart('chartDiv', { 
        debug: true, 
        type: 'line', 
        title_label_text: 'Chart A', 
        xAxis_scale_type: 'time', 
        series: [series[0]] 
    });

    JSC.Chart('chartDiv2', { 
        debug: true, 
        palette: 'fiveColor2', 
        type: 'line', 
        title_label_text: 'Chart B', 
        xAxis_scale_type: 'time', 
        series: [series[1]] 
    }); 

}
*/

function renderChart() {

    JSC.Chart('chartDiv', {
            title_label_text: 'Temperature',
            //annotations: [{
            //    label_text: 'Source: National Center for Health Statistics',
            //    position: 'bottom left'
            //}],
            legend_visible: false,
            xAxis_crosshair_enabled: true,
            //defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
            defaultPoint_tooltip: '%seriesName <b>%yValue</b>°C',
            series: [series[0]] 
        });

    JSC.Chart('chartDiv2', {
            title_label_text: 'Humidity',
            //annotations: [{
            //    label_text: 'Source: National Center for Health Statistics',
            //    position: 'bottom left'
            //}],
            legend_visible: false,
            xAxis_crosshair_enabled: true,
            //defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
            defaultPoint_tooltip: '%seriesName <b>%yValue</b>%',
            series: [series[1]] 
        }); 

}

    //var chart1 = new JSC.Chart('chartDiv', chartA); 
    //var chart2 = new JSC.Chart('chartDiv2', chartB); 

/*
var chart = JSC.chart('chartDiv', {
    debug: true,
    type: 'line',
    title_label_text: 'Line Series Types',
    legend_position: 'inside bottom right',
    toolbar_items: {
      'Line Type': {
        type: 'select',
        label_style_fontSize: 13,
        margin: 5,
        items: 'Line,Step,Spline',
        events_change: function(val) {
          chart.series().options({ type: val });
        }
      }
    },
    xAxis: { scale_type: 'time' },
    series: [
      {
        name: 'Purchases',
        points: [
          ['1/1/2020', 29.9],
          ['1/2/2020', 71.5],
          ['1/3/2020', 106.4],
          ['1/6/2020', 129.2],
          ['1/7/2020', 144.0],
          ['1/8/2020', 176.0]
        ]
      }
    ]
  });
*/

