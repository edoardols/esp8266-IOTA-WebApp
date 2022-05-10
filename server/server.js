window.onload = function(){

    setInterval(function() {
        //parte la logica per richiedere e salvare gli indici
        searchMessage();
        drawChart();
    }, 1000);

};

/*
function serverStart() {
    searchMessage();

    let x = getDatabaseArray();
    console.log(x);
    for(let i = 0; i < x.length; i++){
        console.log('x:' ,x[i][3]);
    }
    drawChart();
}
*/


