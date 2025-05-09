import "./styles.css";

console.log("testing");

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.dataId = crypto.randomUUID();
    }
}

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
        this.dataId = crypto.randomUUID();
    }
}

const todoListLogic = function() {

    return {};
}();


// First worry about getting projects to work and show on display, then to-do's
const projectsLogic = function() {
    const newProject = function(projectName) {
        const project = new Project(projectName);
        return project;
    }
    return {newProject};
}();

const displayProjects = function() {
    const projectsContainer = document.querySelector(".projectsContainer");
    const addProject = function(project) {
        const newProject = document.createElement("div");
        newProject.setAttribute("class", project.dataId);
        newProject.setAttribute("class", ".project")
        newProject.textContent = project.projectName;
        projectsContainer.appendChild(newProject);
    } 
    return {addProject};
} ();

const displayTodoLists = function() {

} ();


displayProjects.addProject("Testing title");