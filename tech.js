const tech_nav = document.querySelectorAll('.tech-nav')
const tech_name = document.querySelector('.tech-name') 
const tech_detail = document.querySelector('.tech-name-detail')
const portrait = document.querySelector('.portrait')
const landscape = document.querySelector('.landscape')

tech_nav.forEach(active => {
      active.addEventListener('click', () => {
            remove_active()
            active.classList.add('active-for-tech')
      })
})

function remove_active() {
      tech_nav.forEach(e => {
            e.classList.remove('active-for-tech')
      })
}

let tabsJSONData;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
        tabsJSONData = data;
        console.log(tabsJSONData.crew[2].images.png);
  })

  tech_nav[0].addEventListener('click', () => {
      tech_name.textContent = tabsJSONData.technology[0]['name'];
      tech_detail.textContent = tabsJSONData.technology[0]['description'];
      portrait.setAttribute('src', tabsJSONData.technology[0].images.portrait)
      landscape.setAttribute('src', tabsJSONData.technology[0].images.landscape)
  }) 

  tech_nav[1].addEventListener('click', () => {
      tech_name.textContent = tabsJSONData.technology[1]['name'];
      tech_detail.textContent = tabsJSONData.technology[1]['description'];
      portrait.setAttribute('src', tabsJSONData.technology[1].images.portrait)
      landscape.setAttribute('src', tabsJSONData.technology[1].images.landscape)
      
  }) 

  tech_nav[2].addEventListener('click', () => {
      tech_name.textContent = tabsJSONData.technology[2]['name'];
      tech_detail.textContent = tabsJSONData.technology[2]['description'];
      portrait.setAttribute('src', tabsJSONData.technology[2].images.portrait)
      landscape.setAttribute('src', tabsJSONData.technology[2].images.landscape)
      
  }) 