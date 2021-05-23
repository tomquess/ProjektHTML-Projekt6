

var mymap = L.map('mapid').setView([54.443581, 18.556359], 3);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);


var r= new XMLHttpRequest();
r.open('GET','https://jsonplaceholder.typicode.com/users', true);
r.onload=function(e){
	if (this.status == 200)
	{

var data=JSON.parse(r.responseText);

for (var i = 0; i < 10; i++){
	L.marker([data[i].address.geo.lat, data[i].address.geo.lng]).addTo(mymap)
		.bindPopup("Name: " + data[i].name + "<br>Street: " + data[i].address.street + "<br>Suite: " + data[i].address.suite + "<br>City: " + data[i].address.city + "<br>Zipcode: " + data[i].address.zipcode);
	};

}
}
r.send();



