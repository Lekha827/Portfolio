const experiences = [
    {
        company: "University of Michigan",
        role: "Research Assistant",
        location: "Dearborn, MI",
        duration: "2024 - 2021",
        description: "Research deepfake audio detection, focusing on generating synthetic speech using neural-based audio codecs and analyzing spectrograms for differences from original audio."
    },    
    {
        company: "TransUnion",
        role: "Senior Developer",
        location: "Hyderabad, India",
        duration: "2021 - 2024",
        description: "Led the development and maintenance of the Warden application for monitoring and managing data flows in the TLOxp application using Django and Vue.js."
    },
    {
        company: "Bank of America",
        role: "Software Engineer",
        location: "Chennai, India",
        duration: "2016 - 2021",
        description: "Worked on the SPARCK project in the Counterparty Credit Risk team, developing automated batch processes for exposure calculations using Monte Carlo simulations."
    },
];

function loadExperiences() {
    const container = document.getElementById("experience-list");
    container.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="experience-info">
                <h3>${exp.role}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
            </div>
            <div class="experience-meta">
                <p>${exp.location}</p>
                <p>${exp.duration}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", loadExperiences);
