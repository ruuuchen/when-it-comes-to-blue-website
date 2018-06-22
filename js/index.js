// skrollr初始值----------------------- 
var s = skrollr.init();

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