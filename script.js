function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var time = hours + ':' + minutes + ':' + seconds;
  document.querySelector('.clock').textContent = time;
}

function updateDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var date = now.toLocaleDateString(undefined, options);
  document.querySelector('.date').textContent = date;
}

function updateWeek() {
  var now = new Date();
  var onejan = new Date(now.getFullYear(), 0, 1);
  var week = Math.ceil(((now - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  document.querySelector('.week').textContent = 'Week ' + week;
}

// Rest of the code remains the same


function searchBrave(query) {
  var url = `https://search.brave.com/api?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Handle the search results here
      console.log(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

function initSearch() {
  var searchInput = document.getElementById('search');
  var searchButton = document.getElementById('search-button');

  function performSearch() {
    var query = searchInput.value;
    searchBrave(query);
  }

  searchButton.addEventListener('click', performSearch);

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  });
}



function initSearch() {
  function performSearch() {
    var query = searchInput.value;
    var selectedEngine = searchEngineSelect.value;
  
    var searchEngines = {
      brave: 'https://search.brave.com/search?q=',
      duckduckgo: 'https://duckduckgo.com/?q=',
      startpage: 'https://www.startpage.com/do/dsearch?query=',
      google: 'https://www.google.com/search?q=',
      shodan: 'https://www.shodan.io/search?query='
    };
  
    var searchUrl = searchEngines[selectedEngine] + encodeURIComponent(query);
  
    if (searchUrl) {
      window.location.href = searchUrl;
    }
  }
  
  var searchInput = document.getElementById('search');
  var searchEngineSelect = document.getElementById('search-engine');
  var searchButton = document.getElementById('search-button');
  
  searchButton.addEventListener('click', performSearch);
  
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  });
}




function start() {
  setInterval(updateClock, 1000);
  updateClock();
  updateDate();
  updateWeek();
  initSearch();
  }
  
  start();
