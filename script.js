console.log("here");
const gallery = document.getElementById('gallery');
const searchCont = document.querySelector('.search-container');

//-----------------------------
//FETCH FUNCTIONS
//-----------------------------

//const link = 'https://randomuser.me/api/?results=12&nat=br&lego';

fetch('https://randomuser.me/api/?results=12&nat=br&lego')
    .then(response => response.json())
    .then(data => generateImage(data));
    //.then(data => console.log(data.results[0].gender));
    

//-----------------------------
//HELPER FUNCTIONS
//-----------------------------

function generateImage(data){
    const html =`
    <img src='${data.results[0].picture.medium}' alt>
    <p> CLick to view ${data.results[0].name.first} ${data.results[0].name.last}</p>
    `;
    gallery.innerHTML = html;
}