const body=document.querySelector('body');
const gallery = document.getElementById('gallery');
const searchCont = document.querySelector('.search-container');

//-----------------------------
//FETCH FUNCTIONS
//-----------------------------

fetch('https://randomuser.me/api/?results=12&nat=br&lego')
    .then(response => response.json())
    .then(data => {
        generateProfile(data.results)// Extract just the results from response         
        
    }); 
   
    
//-----------------------------
//HELPER FUNCTIONS
//-----------------------------

/**
 * Generate the 12 profiles cards and listen for clicks on the cards 
 * @param {object} data 
 */
function generateProfile(data){

    const profiles = data.map( profile =>`
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
    ` ).join('');    
    
    gallery.insertAdjacentHTML('beforeend', profiles);
    
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', (e) => {
            //console.log(cards[i],i);
            //console.log(data[i]);
            showModal(data[i]);
        })
    }
}
/**
 * Create the modal card with the profile clicked
 * @param {object} data - from fetch
 */

function showModal(data){
    console.log(typeof(data));

    console.log(data.dob.date);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    
    const date = new Date (`${data.dob.date}`);
    const month = date.getMonth()+1; // (January gives 0 so we need to add +1)
    const day = date.getDate();
    const year = date.getFullYear();
    const birthday = `${month}/${day}/${year}`;

    let modal=`
        <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data.picture.large}" alt="profile picture"> 
                <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last} </h3>
                    <p class="modal-text">${data.location.city}</p> 
                    <p class="modal-text cap"> ${data.phone}</p>  <hr>
                    <p class="modal-text">${data.location.street.number} ${data.location.street.name} ${data.location.city} </p>
                    <p class="modal-text">${data.location.state} ${data.location.postcode} </p>
                    <p class="modal-text"> Birth date: ${birthday} </p>
            </div>
        </div>
        `;
    body.insertAdjacentHTML('beforeend', modal);
    //event listener for the close btn of the modal
    const closeBtn = document.querySelector('#modal-close-btn');
    closeBtn.addEventListener('click', (e)=>{
        console.log("close  btn");
    });

}

