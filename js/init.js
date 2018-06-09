(function() {
  var bodyEl = document.querySelector("body");
  document.addEventListener(
    "scroll",
    function(event) {
      const pos = bodyEl.getBoundingClientRect();
      document.querySelector("#fader").style.opacity =
        1 + pos.y / (0.7 * pos.height);
    },
    { passive: true }
  );
})();
