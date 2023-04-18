window.addEventListener("load", () => {
  /*  ---------------------Variables globales--------------------- */
  const  backHome = document.querySelector("#backHome");

  //Botones de idioma
  const englishBtn = document.querySelector("#english");
  const spanishBtn = document.querySelector("#spanish");
  //Menu about me
  const skillTab = document.querySelector("#skills");
  const experienceTab = document.querySelector("#experience");
  const educationTab = document.querySelector("#education");
  const skillSelect = document.querySelector("#skill-link");
  const experienceSelect = document.querySelector("#experience-link");
  const educationSelect = document.querySelector("#education-link");
  const aboutmeSelector = document.querySelectorAll(".tab-links");
  //Menu de proyectos
  const project = document.querySelectorAll(".project");
  const projectImg = document.querySelectorAll(".project-img");
  //form
  const form = document.querySelector("form");
  const customerName = document.querySelector("#costumer-name");
  const customerEmail = document.querySelector("#email");
  const customerText = document.querySelector("#mensaje");

  aboutMe();
  projectAnimation();
  emailSend();
  changeSection();
  skillTab.classList.add("active-tab");
  skillSelect.classList.add("active-link");

  function changeSection() {


    backHome.addEventListener("click", ()=>{
      console.log("paso");
      window.scrollTo({
        top: document.getElementById("title-logo").getBoundingClientRect().top,
        left: document.getElementById("title-logo").getBoundingClientRect().left,
        behavior: "smooth"
      });
    })

  

  }

  

  function aboutMe() {
    aboutmeSelector.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target.textContent == "Skills") {
          /*   muestra la tab correspondiente segun lin seleccionado */
          skillTab.classList.toggle("hide");
          experienceTab.classList.add("hide");
          educationTab.classList.add("hide");

          /*   Cambia la clase del link seleccionado */

          skillSelect.classList.toggle("active-link");
          educationSelect.classList.remove("active-link");
          experienceSelect.classList.remove("active-link");
        }
        if (e.target.textContent == "Experiencia") {
          experienceTab.classList.toggle("hide");
          skillTab.classList.add("hide");
          educationTab.classList.add("hide");

          /*   Cambia la clase del link seleccionado */
          experienceSelect.classList.toggle("active-link");
          educationSelect.classList.remove("active-link");
          skillSelect.classList.remove("active-link");
        }
        if (e.target.textContent == "Educación") {
          educationTab.classList.toggle("hide");
          skillTab.classList.add("hide");
          experienceTab.classList.add("hide");

          /* Cambia la clase del link seleccionado */

          educationSelect.classList.toggle("active-link");
          skillSelect.classList.remove("active-link");
          experienceSelect.classList.remove("active-link");
        }
      });
    });
  }

  function projectAnimation() {
    
    for (let i = 0; i < project.length; i++) {
      if ( project[i].id == "calculator") {
        console.log(project[i]);
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/calculator-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
          projectImg[i].src = "assets/calculator-static.png";
        });
      } else if ( project[i].id == "ta-te-ti"
      ) {
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/tateti-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
          console.log("hola");
          projectImg[i].src = "assets/tateti-static.png";
        });
      } else if ( project[i].id == "landingPage")
      {
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/landing-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
          console.log("hola");
          projectImg[i].src = "assets/landing-static.png";
        });


      } else if (project[i].id === "todo") {
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/todo-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
          console.log("hola");
          project[i].src = "assets/todo-static.png";
        });
      }
    }
  }

  function emailSend() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
});
