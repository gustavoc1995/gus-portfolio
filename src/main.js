const skillsLink = document.getElementById("skill-link");
const educationLink = document.getElementById("education-link");
const hobbiesLink = document.getElementById("hobbies-link");
const tabLinks = document.getElementsByClassName("tab-links");
const linkContent = document.getElementsByClassName("link-content");




function openTab(tabname){
    for(link of tabLinks){
        link.classList.remove("active-link");
    }
    for(content of linkContent){
        content.classList.remove("active-content");
        
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
    
}

skillsLink.addEventListener('click', () => {
    openTab('skills')
});
educationLink.addEventListener('click', () => {
    openTab('education')
});
hobbiesLink.addEventListener('click', () => {
    openTab('hobbies')
});