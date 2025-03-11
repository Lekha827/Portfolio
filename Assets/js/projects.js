const projects = [
    {
        title: "CourtMetrics",
        tools: "Python Flask, React.js, MongoDB, GitHub",
        description: "CourtMetrics is a web app for NBA analytics, providing real-time updates, game summaries, and win probability predictions based on past data. Users can track teams, view stats, and place reward-based bets on match outcomes."
    },
    {
        title: "Audio Codec Deepfake Generation",
        tools: "Python, CUDA, Scikit-learn, PyTorch, NumPy, Pandas",
        description: "Generated synthetic (fake) audio using different codec methodologies to test deepfake detection models against state-of-the-art codec-generated deepfake audios."
    },
    {
        title: "Hand Gesture Recognition",
        tools: "Python, CNN, PyTorch, NumPy, Pandas, KNN",
        description: "Developed a deep learning model to classify hand gestures from a dataset of 24,000 images, aiming to improve applications in sign language translation, virtual reality, robotics, and assistive technologies."
    }
];

function loadProjects() {
    const container = document.getElementById("projects-list");
    container.innerHTML = projects.map(project => `
        <div class="col-lg-4 col-md-6 project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tools">${project.tools}</p>
            <p class="project-description">${project.description}</p>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", loadProjects);