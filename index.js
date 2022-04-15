const planet_nav = document.querySelectorAll('.planet-nav-item');
const pic = document.querySelector('.picture img');
const webp = document.querySelector('.picture source');
const planet_info = document.querySelector('.planet-info');
const planet_name = document.querySelector('.planet-name');
const distance = document.querySelector('.distance');
const time = document.querySelector('.times');

planet_nav.forEach(planet => { 
      planet.addEventListener('click', () => { 
            remove_show()
            planet.classList.add('show')

      })
});
      
function remove_show() {
      planet_nav.forEach(planet => {
            planet.classList.remove('show')
      })
}

let tabsJSONData;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    tabsJSONData = data;
  })

planet_nav[0].addEventListener('click', () => { 
      planet_name.textContent = tabsJSONData.destinations[0]['name'];
      planet_info.textContent = tabsJSONData.destinations[0]['description']
      distance.textContent = tabsJSONData.destinations[0]['distance']
      time.textContent= tabsJSONData.destinations[0]['travel']
      webp.setAttribute('srcset' , 'assets/destination/image-moon.webp')
      pic.setAttribute('src' , 'assets/destination/image-moon.png')
})

planet_nav[1].addEventListener('click', () => { 
      planet_name.textContent = tabsJSONData.destinations[1]['name'];
      planet_info.textContent = tabsJSONData.destinations[1]['description']
      distance.textContent = tabsJSONData.destinations[1]['distance']
      time.textContent= tabsJSONData.destinations[1]['travel']
      webp.setAttribute('srcset' , 'assets/destination/image-mars.webp')
      pic.setAttribute('src' , 'assets/destination/image-mars.png')
})

planet_nav[2].addEventListener('click', () => { 
      planet_name.textContent = tabsJSONData.destinations[2]['name'];
      planet_info.textContent = tabsJSONData.destinations[2]['description']
      distance.textContent = tabsJSONData.destinations[2]['distance']
      time.textContent= tabsJSONData.destinations[2]['travel']
      webp.setAttribute('srcset' , 'assets/destination/image-europa.webp')
      pic.setAttribute('src' , 'assets/destination/image-europa.png')
})

planet_nav[3].addEventListener('click', () => { 
      planet_name.textContent = tabsJSONData.destinations[3]['name'];
      planet_info.textContent = tabsJSONData.destinations[3]['description']
      distance.textContent = tabsJSONData.destinations[3]['distance']
      time.textContent= tabsJSONData.destinations[3]['travel']
      webp.setAttribute('srcset' , 'assets/destination/image-titan.webp')
      pic.setAttribute('src' , 'assets/destination/image-titan.png')
})