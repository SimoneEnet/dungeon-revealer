require(["common"], function(common) {
  console.log("player-app.js running");
  require(["player-listener"]);

  require(["jquery"], function(jquery) {
    var $ = jquery;
    const formatAsPercentage = x => `${Math.round(x * 100)}%`;
    function changeScale(add) {
      var oldMap = document.querySelector(".map");
      var width = parseFloat(oldMap.style.width) / 100.0;
      var newWidth = add ? width + 0.1 : width - 0.1;
      var bothMaps = document.querySelectorAll(".map");
      bothMaps.forEach(node => {
        node.style.width = formatAsPercentage(newWidth);
      });
    }
    $("#btn-zoom-in").click(function() {
      changeScale(true);
    });
    $("#btn-zoom-out").click(function() {
      changeScale(false);
    });
  });
});
