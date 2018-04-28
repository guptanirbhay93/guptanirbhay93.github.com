(function init() {

  router(window.location.pathname)

  function router(path) {
    console.log(path);
    switch (path) {
      case '/':
        loadLandingHTML();
    }
  }

  function loadLandingHTML() {
    const landingRequest = new XMLHttpRequest();
    landingRequest.onreadystatechange = () => {
      console.log(landingRequest.responseText)
      // const rootEl = document.getElementsById('root');
      // rootEl.innerHTML = landingRequest.responseText;
    }
    landingRequest.open('GET', '/landing.html');
    landingRequest.send();
  }
})();


