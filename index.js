// Dummy proposal data with posted dates
const proposalData = [
    {
        id: 1,
        name: 'John Doe',
        gender: 'Groom',
        age: 30,
        location: 'New York',
        description: 'Looking for a kind and understanding partner. Family-oriented and enjoys traveling.',
        contact: 'john.doe@example.com',
        postedDate: '2023-06-01'
    },
    {
        id: 2,
        name: 'Jane Smith',
        gender: 'Bride',
        age: 28,
        location: 'Los Angeles',
        description: 'Professional with a love for the arts and outdoor activities. Seeking a supportive and adventurous partner.',
        contact: 'jane.smith@example.com',
        postedDate: '2023-05-20'
    },
    {
        id: 3,
        name: 'Michael Johnson',
        gender: 'Groom',
        age: 32,
        location: 'Chicago',
        description: 'Entrepreneur with a passion for technology and innovation. Looking for someone who shares similar interests.',
        contact: 'michael.johnson@example.com',
        postedDate: '2023-04-15'
    },
    {
        id: 4,
        name: 'Emily Davis',
        gender: 'Bride',
        age: 27,
        location: 'San Francisco',
        description: 'Creative and artistic individual seeking a partner who values communication and mutual respect.',
        contact: 'emily.davis@example.com',
        postedDate: '2023-03-10'
    },
    {
        id: 5,
        name: 'David Wilson',
        gender: 'Groom',
        age: 35,
        location: 'Miami',
        description: 'Sports enthusiast and avid reader. Looking for a life partner who is caring and has a good sense of humor.',
        contact: 'david.wilson@example.com',
        postedDate: '2023-02-25'
    }
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
