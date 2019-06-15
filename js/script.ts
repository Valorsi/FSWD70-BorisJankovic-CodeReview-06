//Class and Constructor for Location 
class Loc { 
   city = ""; 
   address = "";
   zipCode = "";
   img = "";    
constructor(city, address, zipCode, img) { 
       this.city = city;
       this.address = address;
       this.zipCode = zipCode;
       this.img = img;
   }

   //Function to Display properties of Location in HTML
   display() { 
       return `<div class="col-xl-3 col-lg-3 col-md-5 col-sm-11 m-3 shadow">
       			<h4 class="font-weight-light"> ${this.city} </h4>
       			<p class="text-nowrap font-weight-light"> ${this.address} , ${this.zipCode} <br><br><br><p/>
       			<img src=\'${this.img}\' class='blogpicture rounded'></img>
       			</div>`;
    }
}

	//Class Extension to Location and Constructor   
    class Restaurant extends Loc {
    	restaurantName;
    	telephone ;
    	type ;
    	webAddress ;
   constructor(city,address,zipCode,img,restaurantName,telephone,type,webAddress){
   	super(city,address,zipCode,img);
   	this.restaurantName = restaurantName;
   	this.telephone = telephone;
   	this.type = type;
   	this.webAddress = webAddress;
   }

   //Function to Display properties of Restaurant in HTML 
   display() { 
       return `<div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 m-3 shadow">
       			<h4 class="font-weight-light"> Restaurants </h4>
       			<p class="text-nowrap font-weight-light">${this.restaurantName}, ${this.type}, <br> ${this.address} , ${this.zipCode} <br> ${this.telephone} , ${this.webAddress} <p/>
       			<img src=\'${this.img}\' class='blogpicture rounded'></img>
       			</div>`;
    }
    }
	//Class Extension to Location and Constructor 
    class LocEvent extends Loc {
    	eventName ;
    	eventDate ;
    	eventTime ;
    	ticketPrice ;
    	constructor(city,address,zipCode,img,eventName,eventDate,eventTime,ticketPrice){
    		super(city,address,zipCode,img);
    		this.eventName = eventName;
    		this.eventDate = eventDate;
    		this.eventTime = eventTime;
    		this.ticketPrice = ticketPrice;
    	}
    	//Function to Display properties of Event in HTML
    	display() { 
       return ` <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 m-3 shadow">
       			<h4 class="font-weight-light"> Events </h4>
       			<p class="text-nowrap font-weight-light"> ${this.eventName}, ${this.address} , ${this.zipCode} <br> ${this.eventDate} ${this.eventTime} <br> Ticket price : ${this.ticketPrice} <p/>
       			<img src=\'${this.img}\' class='blogpicture rounded'></img>
       			</div>`;
    }
    }

    //Variables for Santorini , restaurant and event
    var santorini = new Loc("Thira","Santorini","84700","img/santorini.jpg");
    var mario = new Restaurant(santorini.city,"Monolithos",santorini.zipCode,"img/Mario.jpg","Taverna Mario", "+30 2286 032000","Greek Tavern","http://www.santorinirestaurant.gr/");
    var volcanoTour = new LocEvent(santorini.city,"Palea Kameni",santorini.zipCode,"img/volcano-tour.jpg","Volcano & Natural hot Springs Tour", "Everyday","from 9:00AM to 6:00PM","39€");

    //Variables for Schoenbrunn , restaurant and event
    var brunn = new Loc("Vienna","Schönbrunn","1130","img/sb.jpg");
    var stockl = new Restaurant(brunn.city,brunn.address,brunn.zipCode,"img/stockl.jpg","Schönbrunner Stöckl & Dinnertheater","+43 660 6363200","Austrian","http://dinnertheater.wien/en/home/");
    var tiergarten = new LocEvent(brunn.city,brunn.address,brunn.zipCode,"img/tiergarten.jpg", "Schönbrunner Zoo", "Everyday ","from 9:00AM to 6:30PM","20€");

    var locArray :Array<any> = [santorini,mario,volcanoTour,brunn,stockl,tiergarten];
    	

locArray.forEach(function(value: any) {
	
	
let inject = document.getElementById('inject');
inject.innerHTML = inject.innerHTML + value.display();
	
	    
});
