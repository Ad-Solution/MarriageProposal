// Dummy proposal data with posted dates
const proposalData = [
    {
        id: 1,
        name: '',
        gender: '',
        age: ,
        location: '',
        description: '',
        contact: '',
        postedDate: ''
    },
    
    
    
   
];

let filteredProposals = [...proposalData];

function handleSearch() {
    const gender = document.getElementById('gender').value;
    const minAge = document.getElementById('minAge').value;
    const maxAge = document.getElementById('maxAge').value;
    const location = document.getElementById('location').value;

    filteredProposals = proposalData.filter(proposal => {
        return (!gender || proposal.gender.toLowerCase() === gender.toLowerCase()) &&
            (!minAge || proposal.age >= parseInt(minAge)) &&
            (!maxAge || proposal.age <= parseInt(maxAge)) &&
            (!location || proposal.location.toLowerCase().includes(location.toLowerCase()));
    });

    displayProposals();
}

function displayProposals() {
    const proposalContainer = document.getElementById('proposalContainer');
    proposalContainer.innerHTML = '';

    filteredProposals.forEach(proposal => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card mb-4 proposal-card home-garden-card">
                <div class="card-body">
                    <h5 class="card-title">${proposal.name}</h5>
                    <p class="card-text">Gender: ${proposal.gender}</p>
                    <p class="card-text">Age: ${proposal.age}</p>
                    <p class="card-text">Location: ${proposal.location}</p>
                    <p class="card-text">Posted Date: ${proposal.postedDate}</p>
                    <p class="card-text">${proposal.description.substring(0, 100)}...</p>
                    <button class="btn btn-primary" onclick="handleViewDetails(${proposal.id})">View More</button>
                </div>
            </div>`;
        proposalContainer.appendChild(card);
    });
}

function handleViewDetails(id) {
    const proposal = filteredProposals.find(p => p.id === id);
    const modal = new bootstrap.Modal(document.getElementById('proposalModal'));

    document.getElementById('proposalModalLabel').innerText = proposal.name;
    document.getElementById('modalName').innerText = `Name: ${proposal.name}`;
    document.getElementById('modalGender').innerText = `Gender: ${proposal.gender}`;
    document.getElementById('modalAge').innerText = `Age: ${proposal.age}`;
    document.getElementById('modalLocation').innerText = `Location: ${proposal.location}`;
    document.getElementById('modalDescription').innerText = `Description: ${proposal.description}`;
    document.getElementById('modalContact').innerText = `Contact: ${proposal.contact}`;
    document.getElementById('modalPostedDate').innerText = `Posted Date: ${proposal.postedDate}`;

    modal.show();
}

// Back to Top button functionality
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', () => {
    displayProposals();
});
