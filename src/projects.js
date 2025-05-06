'use strict';

// filter projects
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category; // data-category (custom property)
    if (filter == null) { 
        // when margin/container is clicked it may return undefined
        return;
    }   
    handleActiveSelection(event.target);
    filterProjects(filter);
})

// reset active (currently selected) menu
const handleActiveSelection = (target) => {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

// project filtering
const filterProjects = (filter) => {
    projects.forEach(project => {
        if (filter === 'all' || filter === project.dataset.type) { // data-type (custom property)
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    })
    // animation: all the project items scale in and out
    projectsContainer.classList.add('anim-out');  
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');  
    }, 250);
}