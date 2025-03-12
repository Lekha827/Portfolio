const projects = [
    {
        title: "CourtMetrics",
        tools: "Python Flask, React.js, MongoDB, GitHub",
        description: "CourtMetrics is a web app for NBA analytics, providing real-time updates, game summaries, and win probability predictions based on past data. Users can track teams, view stats, and place reward-based bets on match outcomes.",
        repoLink: "https://github.com/Lekha-umich/CourtMetrics"
    },
    {
        title: "Audio Codec Deepfake Generation",
        tools: "Python, CUDA, Scikit-learn, PyTorch, NumPy, Pandas",
        description: "Generated synthetic (fake) audio using different codec methodologies to test deepfake detection models against state-of-the-art codec-generated deepfake audios.",
        repoLink: "https://github.com/Lekha827/AudioDeepfake"
    },
    {
        title: "Hand Gesture Recognition",
        tools: "Python, CNN, PyTorch, NumPy, Pandas, KNN",
        description: "Developed a deep learning model to classify hand gestures from a dataset of 24,000 images, aiming to improve applications in sign language translation, virtual reality, robotics, and assistive technologies.",
        repoLink: "https://github.com/HarshithK13/Hand-Gesture-Recognition"
    }
];

function loadProjects() {
    const container = document.getElementById("projects-list");
    container.innerHTML = projects.map(project => `
        <div class="col-lg-4 col-md-6 project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tools">${project.tools}</p>
            <p class="project-description">${project.description}</p>
            <a href="${project.repoLink}" target="_blank" class="github-link">
                <img src="Assets/img/github.png" alt="GitHub Repo"> View on GitHub
            </a>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", loadProjects);