const skillsData = {
    frontend: [
        { name: 'JavaScript', logo: 'assets/img/skills/javascript.png' },
        { name: 'Vue.js', logo: 'assets/img/skills/vue.png' },
        { name: 'React.js', logo: 'assets/img/skills/react.png' },
        { name: 'HTML', logo: 'assets/img/skills/html.png' },
        { name: 'CSS', logo: 'assets/img/skills/css.png' },
        { name: 'Bootstrap', logo: 'assets/img/skills/bootstrap.png' }
    ],
    backend: [
        { name: 'Python', logo: 'assets/img/skills/python.png' },
        { name: 'Django', logo: 'assets/img/skills/django.png' },
        { name: 'Flask', logo: 'assets/img/skills/flask.png' },
        { name: 'Redis', logo: 'assets/img/skills/redis.png' },
        { name: 'Celery', logo: 'assets/img/skills/celery.png' }
    ],
    database: [
        { name: 'MySQL', logo: 'assets/img/skills/mysql.png' },
        { name: 'Sybase', logo: 'assets/img/skills/sybase.png' },
        { name: 'MariaDB', logo: 'assets/img/skills/mariadb.png' },
        { name: 'MongoDB', logo: 'assets/img/skills/mongodb.png' }
    ],
    ops: [
        { name: 'Docker', logo: 'assets/img/skills/docker.png' },
        { name: 'AWS', logo: 'assets/img/skills/aws.png' },
        { name: 'NGINX', logo: 'assets/img/skills/nginx.png' },
        { name: 'Jenkins', logo: 'assets/img/skills/jenkins.png' },
        { name: 'Octopus', logo: 'assets/img/skills/octopus.png' },
        { name: 'CUDA', logo: 'assets/img/skills/cuda.png' }
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