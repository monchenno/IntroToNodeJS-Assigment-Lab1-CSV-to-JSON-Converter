var csvjson = require('csvjson');
var fs = require('fs');

var data = fs.readFileSync( 'customer-data.csv', 'utf8');
var options = {
  delimiter : ',', 
  quote     : '"' 
};

var myJSON = csvjson.toObject( data, options )

fs.writeFileSync( 'costumer-data.json', JSON.stringify( myJSON , null, 2 )  , 'utf8', function(err) {
    if ( err ) throw err;
    console.log('Complete');
    });

//console.log(myJSON);

