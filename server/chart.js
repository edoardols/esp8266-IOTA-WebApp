
let series = [];

function drawChart() {
  let DATA_INDEX = 0;
  let TIME_INDEX = 1;
  let TEMPERATURE_INDEX = 2;
  let HUMIDITY_INDEX = 3;
  let CO2PPM_INDEX = 4;

    let databaseArray = getDatabaseArray().sort();

    let temperature_series = [];
    let humidity_series = [];
    let co2_ppm_seires = [];

    for(let i = 0; i < databaseArray.length; i++) {
      
      temperature_series.push({x: databaseArray[i][DATA_INDEX] + " " + databaseArray[i][TIME_INDEX], y: Number(databaseArray[i][TEMPERATURE_INDEX])});
      humidity_series.push({x: databaseArray[i][DATA_INDEX] + " " + databaseArray[i][TIME_INDEX], y: Number(databaseArray[i][HUMIDITY_INDEX])});
      co2_ppm_seires.push({x: databaseArray[i][DATA_INDEX] + " " + databaseArray[i][TIME_INDEX], y: Number(databaseArray[i][CO2PPM_INDEX])});
    }

    series = [
		  {name: 'Temperature', points: temperature_series},
		  {name: 'Humidity', points: humidity_series},
      {name: 'CO2 PPM', points: co2_ppm_seires}
	  ];

    renderChart();
}

function renderChart() {

    JSC.Chart('chartDivTemperature', {
      type: 'line',
            title_label_text: 'Temperature',
            palette: 'yellow', 
            legend_visible: false,
            xAxis_crosshair_enabled: true,
            defaultPoint_tooltip: '%seriesName <b>%yValue</b>°C',
            series: [series[0]] 
        });

    JSC.Chart('chartDivHumidity', {
            title_label_text: 'Humidity',
            legend_visible: false,
            xAxis_crosshair_enabled: true,
            defaultPoint_tooltip: '%seriesName <b>%yValue</b>%',
            series: [series[1]] 
        });

        JSC.Chart('chartDivCo2', {
          type: 'line',
                title_label_text: 'CO2',
                palette: 'yellow', 
                legend_visible: false,
                xAxis_crosshair_enabled: true,
                defaultPoint_tooltip: '%seriesName <b>%yValue</b> PPM',
                series: [series[2]] 
            });

}
