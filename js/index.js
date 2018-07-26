// skrollr初始值-----------------------
var s = skrollr.init();
// 取消 mobile 上的 skrollr 效果
$(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 768) {
    skrollr.init();
  }

  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 768) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    }
  });
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