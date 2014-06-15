// google maps code
function initialize() {
    var myLatlng = new google.maps.LatLng(42.241624, -83.588372),
        map_canvas = document.getElementById("map"),
        map_options = {
            center: myLatlng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(map_canvas, map_options),
        marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });;
}
google.maps.event.addDomListener(window, 'load', initialize);

(function ($) {
    "use strict";

    $(".nav-link").click(function (e) {
        e.preventDefault();

        var loc = e.target.href.split("#")[1];
        $('html, body').animate({
            scrollTop: $("#" + loc).offset().top - 20
        }, 1200);
    });

})($);