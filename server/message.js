let index_iota = 'TEST_WEB_APP6';

let messageIdsRead = [];
let databaseArray = [];


function getDatabaseArray() {
    return databaseArray;
}

function searchMessage() {
    updateMessageIdsArray();
}

function updateMessageIdsArray() {

    //INDEX for data
    let DATA_INDEX = 0;
    let TIME_INDEX = 1;
    let TEMPERATURE_INDEX = 2;
    let HUMIDITY_INDEX = 3;
    let CO2PPM_INDEX = 4;

    fetch('https://tangle.iotaqubic.us/api/v1/messages?index=' + ascii2hex(index_iota))
    .then(result => result.json())
    .then((messageMatchingIndex) => {

        let messageIdsArray = messageMatchingIndex.data.messageIds;

        for(let i = 0; i < messageIdsArray.length ; i++) {
            
            if( messageIdsRead.indexOf(messageIdsArray[i]) == -1){
                
                messageIdsRead.push(messageIdsArray[i]);
                
                fetch('https://tangle.iotaqubic.us/api/v1/messages/' + messageIdsArray[i])
                .then(result => result.json())
                .then((messages) => {

                    let messageJSONFormat = JSON.parse(hex2ascii(messages.data.payload.data));

                    let messageToArray = [];
                    messageToArray[DATA_INDEX ] = messageJSONFormat.data.sensorData.day;
                    messageToArray[TIME_INDEX] = messageJSONFormat.data.sensorData.time;
                    messageToArray[TEMPERATURE_INDEX] = messageJSONFormat.data.sensorData.temperature;
                    messageToArray[HUMIDITY_INDEX] = messageJSONFormat.data.sensorData.humidity;
                    messageToArray[CO2PPM_INDEX] = messageJSONFormat.data.sensorData.co2_ppm;

                    databaseArray.push(messageToArray);
                    drawChart();

                }).catch(err => console.error(err));
            }
        }

    }).catch(err => console.error(err));

}
