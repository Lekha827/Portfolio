const skillsData = {
    frontend: [
        { name: 'JavaScript', logo: 'Assets/img/skills/javascript.png' },
        { name: 'Vue.js', logo: 'Assets/img/skills/vue.png' },
        { name: 'React.js', logo: 'Assets/img/skills/react.png' },
        { name: 'HTML', logo: 'Assets/img/skills/html.png' },
        { name: 'CSS', logo: 'Assets/img/skills/css.png' },
        { name: 'Bootstrap', logo: 'Assets/img/skills/bootstrap.png' }
    ],
    backend: [
        { name: 'Python', logo: 'Assets/img/skills/python.png' },
        { name: 'Django', logo: 'Assets/img/skills/django.png' },
        { name: 'Flask', logo: 'Assets/img/skills/flask.png' },
        { name: 'Redis', logo: 'Assets/img/skills/redis.png' },
        { name: 'Celery', logo: 'Assets/img/skills/celery.png' }
    ],
    database: [
        { name: 'MySQL', logo: 'Assets/img/skills/mysql.png' },
        { name: 'Sybase', logo: 'Assets/img/skills/sybase.png' },
        { name: 'MariaDB', logo: 'Assets/img/skills/mariadb.png' },
        { name: 'MongoDB', logo: 'Assets/img/skills/mongodb.png' }
    ],
    ops: [
        { name: 'Docker', logo: 'Assets/img/skills/docker.png' },
        { name: 'AWS', logo: 'Assets/img/skills/aws.png' },
        { name: 'NGINX', logo: 'Assets/img/skills/nginx.png' },
        { name: 'Jenkins', logo: 'Assets/img/skills/jenkins.png' },
        { name: 'Octopus', logo: 'Assets/img/skills/octopus.png' },
        { name: 'CUDA', logo: 'Assets/img/skills/cuda.png' }
    ]
};

function populateSkills(category, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = skillsData[category]
        .map(skill => `
            <div class="col-md-2 text-center skill-card">
                <img src="${skill.logo}" alt="${skill.name}" class="skill-logo">
                <p>${skill.name}</p>
            </div>
        `).join('');
}

populateSkills('frontend', 'frontend-skills');
populateSkills('backend', 'backend-skills');
populateSkills('database', 'database-skills');
populateSkills('ops', 'ops-skills');