window.addEventListener("load", ()=>{
const englishBtn = document.querySelector("#english");
const spanishBtn = document.querySelector("#spanish");
const skillTab = document.querySelector("#skills");
const experienceTab = document.querySelector("#experience");
const educationTab = document.querySelector("#education");
const skillSelect = document.querySelector("#skill-link");
const experienceSelect = document.querySelector("#experience-link");
const educationSelect = document.querySelector("#education-link");
const aboutmeSelector = document.querySelectorAll(".tab-links");
const projectImg = document.querySelectorAll(".project-img");

aboutMe();
projectAnimation();
skillTab.classList.add("active-tab");
skillSelect.classList.add("active-link");



function aboutMe(){
    aboutmeSelector.forEach(element => {
    element.addEventListener("click", (e)=>{

        if(e.target.textContent == "Skills"){
          
            

          /*   muestra la tab correspondiente segun lin seleccionado */
            skillTab.classList.toggle("active-tab");
            experienceTab.classList.remove("active-tab");
            educationTab.classList.remove("active-tab");

            /*   Cambia la clase del link seleccionado */
            
            skillSelect.classList.toggle("active-link");
            educationSelect.classList.remove("active-link");
            experienceSelect.classList.remove("active-link");

        }
        if (e.target.textContent == "Experiencia"){
            experienceTab.classList.toggle("active-tab");
            skillTab.classList.remove("active-tab");
            educationTab.classList.remove("active-tab");

          /*   Cambia la clase del link seleccionado */
          experienceSelect.classList.toggle("active-link");
          educationSelect.classList.remove("active-link");
          skillSelect.classList.remove("active-link");
        }
        if(e.target.textContent == "Educación"){
            educationTab.classList.toggle("active-tab");
            skillTab.classList.remove("active-tab");
            experienceTab.classList.remove("active-tab");

            /* Cambia la clase del link seleccionado */

            educationSelect.classList.toggle("active-link");
            skillSelect.classList.remove("active-link");
            experienceSelect.classList.remove("active-link");
        }
    })
        
    });

}

function projectAnimation(){
  projectImg.forEach(project => {
    console.log(project.id);
    if (project.id == "calculator"){
      project.addEventListener("mouseover", ()=>{
        project.src = "assets/calculator-ani.gif";
       });
    
       project.addEventListener("mouseout", ()=>{

        project.src = "assets/calculator-static.png";
       })
    }

    else if (project.id == "ta-te-ti"){
      project.addEventListener("mouseover", ()=>{
        project.src = "assets/tateti-ani.gif";
       });
    
       project.addEventListener("mouseout", ()=>{
        console.log("hola");
        project.src = "assets/tateti-static.png";
       })
    }
    else if (project.id == "landingPage"){

      project.addEventListener("mouseover", ()=>{
        project.src = "assets/landing-ani.gif";
       });
    
       project.addEventListener("mouseout", ()=>{
        console.log("hola");
        project.src = "assets/landing-static.png";
       })

    }

    else if (project.id === "todo"){
      
      project.addEventListener("mouseover", ()=>{
        project.src = "assets/todo-ani.gif";
       });
    
       project.addEventListener("mouseout", ()=>{
        console.log("hola");
        project.src = "assets/todo-static.png";
       })

    }

    
  });
}







    
});