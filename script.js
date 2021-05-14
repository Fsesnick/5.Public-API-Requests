console.log("here");
const gallery = document.getElementById('gallery');
const searchCont = document.querySelector('.search-container');

//-----------------------------
//FETCH FUNCTIONS
//-----------------------------

//const link = 'https://randomuser.me/api/?results=12&nat=br&lego';

fetch('https://randomuser.me/api/?results=12&nat=br&lego')
    .then(response => response.json())
    .then(data => console.log(data.results));