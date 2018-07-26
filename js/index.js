// skrollr初始值-----------------------
$(document).ready(function(){
      if ($(window).width() > 1000) {
          var s = skrollr.init();
      }
    });


// 訂閱按鈕-----------------------
$("button.btn").click(function(){
  $("button.btn").text("成功"+" :)");
  $("button.btn").addClass("btn-success");
  $("input").val("");

  setTimeout(function(){
    $("button.btn").text("✓ "+"訂閱");
    $("button.btn").removeClass("btn-success");
  },1500);
});

// 地圖-----------------------
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 25.013192, lng: 121.541061},
    zoom: 14,
  });
  var marker = new google.maps.Marker({
    position: {lat: 25.013192, lng: 121.541061},
    map: map
  });
}
