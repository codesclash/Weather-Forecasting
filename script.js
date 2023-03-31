
const handleOnMouseMove = (e) =>{
	const{currentTarget : target} = e;
	const rect = target.getBoundingClientRect(),
	x = e.clientX - rect.left,
	y = e.clientY - rect.top;
target.style.setProperty("--mouse-x",`${x}px`);
target.style.setProperty("--mouse-y",`${y}px`);
}
 
 let cards= Array.from(document.querySelectorAll('.card'));
	for(const card of cards ){
		card.onmousemove = (e) => handleOnMouseMove(e);
	}
 
	const options = {
		method: "GET",
		headers: {
		  "X-Api-Key": "0pbi1Mb5qLPz1rK/noNDlw==7RHo14OWhs5GawYa",
		},
		contentType: "application/json",
	  };
	  let city="hyderabad";
	  
	  let getWeather = (city) => {
		const arr = city.split(" ");

		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		
		} 
		const str2 = arr.join(" ");

		cityname.innerHTML=str2;
		fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`,options)
		  .then((response) => response.json())
		  .then((response) => {

			let sunriseGMT = new Date(response.sunrise*1000);
			let sunsetGMT = new Date(response.sunset*1000);
			
		
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			temp.innerHTML = response.temp;
			humidity.innerHTML = response.humidity;
			sunset.innerHTML = sunsetGMT.toLocaleString();
			min_temp.innerHTML = response.min_temp;
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			sunrise.innerHTML = sunriseGMT.toLocaleString();
			max_temp.innerHTML = response.max_temp;
			console.log(response);
			console.log(sunriseGMT.toGMTString());
		  })
		  .catch((err) => console.error(err));
	  };
	   submit.addEventListener('click',(e)=>{
		  e.preventDefault();
		 let c=document.getElementById("city");
		  getWeather(c.value);
	   })
	   
	   getWeather("hyderabad");
	  
