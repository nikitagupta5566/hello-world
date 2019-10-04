console.log("Hello World");

// example of a callback function
var getWeather = (latitude,longitude,callback) => {
	request({
		url: `https://api.darksky.net/forecast/9c52ecb782321b2075eadf597b731342/${latitude},${longitude}`,
		json: true
	},(error, response, body) => {
		if(!error && response.statusCode === 200){
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
				});
		}
		else{
			callback("Unable to fetch weather information");
		}
	})	
}


// async basics

console.log('Starting app');

setTimeout(() => {
	console.log("Inside of callback");
},2000)

setTimeout(() => {
	console.log("Second timeout");
},0);

console.log('Finishing app');

