var locations = {
	"places": [
			{
				"title": "Brooklyn Bridge" ,
				"lat": 40.7030827,
				"long": -73.9951502,
				"keyWords": ["bridge", "brooklyn", "historic", "monument"],
				"street": "Brooklyn Bridge", 
				"city": "New York, NY" 
			},
			{
				"title": "Pier 1 Playground",
				"lat": 40.7007388,
				"long": -73.9947489,
				"keyWords": ["park", "water", "hudson", "oudoors"],
				"street": "102 Furman Street", 
				"city": "Brooklyn, NY" 
			},
			{
				"title": "Pier 2 Roller Rink",
				"lat": 40.6994094,
				"long": -73.9974218,
				"keyWords": ["sports", "water", "hudson", "skating"],
				"street": "150 Furman Street", 
				"city": "Brooklyn, NY" 
			},
			{
				"title": "Jane's Carousel",
				"lat": 40.7013773,
				"long": -73.9972716,
				"keyWords": ["social", "outdoors", "game"],
				"street": "Dock Street", 
				"city": "Brooklyn, NY"
			}
		]
};

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 40.7035, lng: -73.9939},
	    zoom: 13
	});

	var viewModel = function(){
	this.items = ko.observableArray();
		for(var i = 0; i < locations.places.length; i++){
			this.items.push(locations.places[i].title);
			var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(locations.places[i].lat, locations.places[i].long),
	    	map: map,
	    	title:"Hello World!"
	    	});
		}
		this.searchParam = ko.observable("");
	};
	ko.applyBindings(new viewModel());
};













