/*global $*/
/*
      function initMap() {
        var location = {lat: 40.689, lng: -74.0440};
        var location = {lat: 40.714, lng: -74.005};
        var location = {lat: 40.734, lng: -74.002};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16, center: location
        });
        var marker = new google.maps.Marker({
          position: location, map: map
        });
      }
  /*    
      function initMap() {
        var location = {lat: 40.714, lng: -74.005};
        var mapp = new google.maps.Map(document.getElementById('mapp'), {
          zoom: 16, center: location
        });
        var marker = new google.maps.Marker({
          position: location, map: map
        });
      }
/*      
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}  */    
      //code for site generator//
$(document).ready(function(){
  $('#findSite').click(function() {
  var sites, randomNumber, showSite;
  sites =[
  'Alabama: Birmingham Civil Rights ' + '<a href="https://www.nps.gov/bicr/index.htm">More Info</a>',
  'Alabama: Freedom Riders ' + '<a href="https://www.nps.gov/frri/index.htm">More Info</a>',
  'Alaska: Cape Krusenstern ' + '<a href="https://www.nps.gov/cakr/index.htm">More Info</a>',
  'Arizona: Chiricahua ' + '<a href="https://www.nps.gov/chir/index.htm">More Info</a>',
  'California: César E. Chávez ' + '<a href="https://www.nps.gov/cech/index.htm">More Info</a>',
  'California: Muir Woods ' + '<a href="https://www.nps.gov/muwo/index.htm">More Info</a>',
  'District of Columbia: Belmont-Paul Women\’s Equality ' + '<a href="https://www.nps.gov/bepa/learn/womens-suffrage.htm">More Info</a>',
  'Missouri: George Washington Carver ' + '<a href="https://www.nps.gov/gwca/index.htm">More Info</a>',
  'New Mexico: White Sands ' + '<a href="https://www.nps.gov/whsa/index.htm">More Info</a>',
  'Texas: Waco Mammoth ' + '<a href="https://www.nps.gov/waco/index.htm">More Info</a>',
  'Virginia: Booker T. Washington ' + '<a href="https://www.nps.gov/bowa/index.htm">More Info</a>'];
  randomNumber = Math.floor(Math.random() * (sites.length));
  showSite = sites[randomNumber];
  $('#siteDisplay').hide(); //just in case
  $('#siteDisplay').html(showSite); //sites[randomNumber]
  $('#siteDisplay').fadeIn(2000);
  });
});
