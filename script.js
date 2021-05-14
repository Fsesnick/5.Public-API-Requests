console.log("here");
const gallery = document.getElementById('gallery');
const searchCont = document.querySelector('.search-container');

//-----------------------------
//FETCH FUNCTIONS
//-----------------------------

//const link = 'https://randomuser.me/api/?results=12&nat=br&lego';

fetch('https://randomuser.me/api/?results=12&nat=br&lego')
    .then(response => response.json())
    .then(data => generateProfile(data.results));
    //.then(data => console.log(data.results[0].gender));
    

//-----------------------------
//HELPER FUNCTIONS
//-----------------------------

function generateProfile(data){

    const cards = data.map( profile =>`
    <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${profile.picture.medium}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${profile.name.first} ${profile.name.last}</h3>
        <p class="card-text">${profile.email}</p>
        <p class="card-text cap">${profile.location.city}, ${profile.location.state}</p>
    </div>
</div>
    ` );
    
    gallery.innerHTML = cards;
}