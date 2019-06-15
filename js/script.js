var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class and Constructor for Location 
var Loc = /** @class */ (function () {
    function Loc(city, address, zipCode, img) {
        this.city = "";
        this.address = "";
        this.zipCode = "";
        this.img = "";
        this.city = city;
        this.address = address;
        this.zipCode = zipCode;
        this.img = img;
    }
    //Function to Display properties of Location in HTML
    Loc.prototype.display = function () {
        return "<div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-11 m-3 shadow\">\n       \t\t\t<h4 class=\"font-weight-light\"> " + this.city + " </h4>\n       \t\t\t<p class=\"text-nowrap font-weight-light\"> " + this.address + " , " + this.zipCode + " <br><br><br><p/>\n       \t\t\t<img src='" + this.img + "' class='blogpicture rounded'></img>\n       \t\t\t</div>";
    };
    return Loc;
}());
//Class Extension to Location and Constructor   
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, address, zipCode, img, restaurantName, telephone, type, webAddress) {
        var _this = _super.call(this, city, address, zipCode, img) || this;
        _this.restaurantName = restaurantName;
        _this.telephone = telephone;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    //Function to Display properties of Restaurant in HTML 
    Restaurant.prototype.display = function () {
        return "<div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-12 m-3 shadow\">\n       \t\t\t<h4 class=\"font-weight-light\"> Restaurants </h4>\n       \t\t\t<p class=\"text-nowrap font-weight-light\">" + this.restaurantName + ", " + this.type + ", <br> " + this.address + " , " + this.zipCode + " <br> " + this.telephone + " , " + this.webAddress + " <p/>\n       \t\t\t<img src='" + this.img + "' class='blogpicture rounded'></img>\n       \t\t\t</div>";
    };
    return Restaurant;
}(Loc));
//Class Extension to Location and Constructor 
var LocEvent = /** @class */ (function (_super) {
    __extends(LocEvent, _super);
    function LocEvent(city, address, zipCode, img, eventName, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, city, address, zipCode, img) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    //Function to Display properties of Event in HTML
    LocEvent.prototype.display = function () {
        return " <div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-12 m-3 shadow\">\n       \t\t\t<h4 class=\"font-weight-light\"> Events </h4>\n       \t\t\t<p class=\"text-nowrap font-weight-light\"> " + this.eventName + ", " + this.address + " , " + this.zipCode + " <br> " + this.eventDate + " " + this.eventTime + " <br> Ticket price : " + this.ticketPrice + " <p/>\n       \t\t\t<img src='" + this.img + "' class='blogpicture rounded'></img>\n       \t\t\t</div>";
    };
    return LocEvent;
}(Loc));
//Variables for Santorini , restaurant and event
var santorini = new Loc("Thira", "Santorini", "84700", "img/santorini.jpg");
var mario = new Restaurant(santorini.city, "Monolithos", santorini.zipCode, "img/Mario.jpg", "Taverna Mario", "+30 2286 032000", "Greek Tavern", "http://www.santorinirestaurant.gr/");
var volcanoTour = new LocEvent(santorini.city, "Palea Kameni", santorini.zipCode, "img/volcano-tour.jpg", "Volcano & Natural hot Springs Tour", "Everyday", "from 9:00AM to 6:00PM", "39€");
//Variables for Schoenbrunn , restaurant and event
var brunn = new Loc("Vienna", "Schönbrunn", "1130", "img/sb.jpg");
var stockl = new Restaurant(brunn.city, brunn.address, brunn.zipCode, "img/stockl.jpg", "Schönbrunner Stöckl & Dinnertheater", "+43 660 6363200", "Austrian", "http://dinnertheater.wien/en/home/");
var tiergarten = new LocEvent(brunn.city, brunn.address, brunn.zipCode, "img/tiergarten.jpg", "Schönbrunner Zoo", "Everyday ", "from 9:00AM to 6:30PM", "20€");
var locArray = [santorini, mario, volcanoTour, brunn, stockl, tiergarten];
locArray.forEach(function (value) {
    var inject = document.getElementById('inject');
    inject.innerHTML = inject.innerHTML + value.display();
});
