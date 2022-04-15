const crew_nav = document.querySelectorAll('.nav-crew');
const crew_name = document.querySelector('.crew-name');
const crew_job = document.querySelector('.jobs');
const crew_about = document.querySelector('.crew-about');
const crew_pic = document.querySelector('.crew-img img');
const crew_webp = document.querySelector('.crew-img source');

let tabsJSONData;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
        tabsJSONData = data;
        console.log(tabsJSONData.crew[2].images.png);
  })

crew_nav.forEach(e => { 
      e.addEventListener('click', () => { 
            remove_bold()
            e.classList.add('bold')
      })
});

function remove_bold() {
      crew_nav.forEach(a => {
            a.classList.remove('bold')
      })
}


crew_nav[0].addEventListener('click', () => {
      crew_job.textContent = tabsJSONData.crew[0]['role'];
      crew_name.innerHTML = tabsJSONData.crew[0]['name'];
      crew_about.textContent = tabsJSONData.crew[0]['bio']
      crew_pic.setAttribute('src', tabsJSONData.crew[0].images.png);
      crew_webp.setAttribute('srcset', tabsJSONData.crew[0].images.webp);
})    

crew_nav[1].addEventListener('click', () => {
      crew_job.textContent = tabsJSONData.crew[1]['role'];
      crew_name.textContent = tabsJSONData.crew[1]['name'];
      crew_about.textContent = tabsJSONData.crew[1]['bio'];
      crew_pic.setAttribute('src', tabsJSONData.crew[1].images.png);
      crew_webp.setAttribute('srcset', tabsJSONData.crew[1].images.webp);
}) 

crew_nav[2].addEventListener('click', () => {
      crew_job.textContent = tabsJSONData.crew[2]['role'];
      crew_name.textContent = tabsJSONData.crew[2]['name'];
      crew_about.textContent = tabsJSONData.crew[2]['bio'];
      crew_pic.setAttribute('src', tabsJSONData.crew[2].images.png);
      crew_webp.setAttribute('srcset', tabsJSONData.crew[2].images.webp);
}) 

crew_nav[3].addEventListener('click', () => {
      crew_job.textContent = tabsJSONData.crew[3]['role'];
      crew_name.textContent = tabsJSONData.crew[3]['name'];
      crew_about.textContent = tabsJSONData.crew[3]['bio'];
      crew_pic.setAttribute('src', tabsJSONData.crew[3].images.png);
      crew_webp.setAttribute('srcset', tabsJSONData.crew[3].images.webp);
}) 