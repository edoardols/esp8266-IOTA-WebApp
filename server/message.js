let index_iota = 'TEST_WEB_APP1';


// TEMPORANEI
let messageIdsRead = [];
let databaseArray = [];

function getDatabaseArray() {
    return databaseArray;
}

function searchMessage() {
    updateMessageIdsArray();
}

function updateMessageIdsArray() {

    fetch('https://tangle.iotaqubic.us/api/v1/messages?index=' + ascii2hex(index_iota))
    .then(result => result.json())
    .then((messageMatchingIndex) => {

        //console.log('Message Matching Index: ', messageMatchingIndex);

        // messageIds array for that index_iota
        //output.data.messageIds
        let messageIdsArray = messageMatchingIndex.data.messageIds;
        //console.log(messageIdsArray);

        for(let i = 0; i < messageIdsArray.length ; i++) {
            //Array.isArray(variableName) check if that messageIds is already in messageIdsRead
            if( messageIdsRead.indexOf(messageIdsArray[i]) == -1){
                messageIdsRead.push(messageIdsArray[i]);
                //console.log('Added: ', messageIdsArray[i]);

                //make a HTTPS request given that messageIds
                fetch('https://tangle.iotaqubic.us/api/v1/messages/' + messageIdsArray[i])
                .then(result => result.json())
                .then((messages) => {

                    let messageJSONFormat = JSON.parse(hex2ascii(messages.data.payload.data));
                    //console.log('Message: ', messageJSONFormat);

                    let newArray = [messageMatchingIndex.data.messageIds[i], messageJSONFormat.data.sensorData.day, messageJSONFormat.data.sensorData.time, messageJSONFormat.data.sensorData.temperature, messageJSONFormat.data.sensorData.humidity ];

                    //console.log(newArray);

                    //ONLY SENSOR DATA FOR TEST
                    addToDatabase(newArray);

                }).catch(err => console.error(err));
            }
        }

        //console.log('MessageIds Array:', messageIdsRead);

        //console.log('Database Array:', databaseArray);

        //console.log("DEBUG: end fetch");

    }).catch(err => console.error(err));

}

function addToDatabase(arrayToPush) {
    databaseArray.push(arrayToPush);
}


