/* window.addEventListener("load", () => { */

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
  const presentacion = document.querySelector("#presentacion");
  //Menu de proyectos
  const project = document.querySelectorAll(".project");
  const projectImg = document.querySelectorAll(".project-img");
  //form
  const formulario = document.querySelector("form");
  const customerName = document.querySelector("#costumer-name");
  const customerEmail = document.querySelector("#email");
  const customerText = document.querySelector("#mensaje");
  //nav
  const hamburger = document.querySelector("#hamburger");
  const navBar = document.querySelector("#nav-bar");
  const media = window.matchMedia("(max-width: 414px)");
  console.log(media.matches);

  aboutMe();
  projectAnimation();
  changeSection();
  /* skillTab.classList.add("active-tab");
  skillSelect.classList.add("active-link"); */

  
  function showMenu(media){
    if (media.matches){
        navBar.classList.add("hide");
        hamburger.classList.remove("hide");

    }else{
        hamburger.classList.add("hide");
        navBar.classList.remove("hide");

    }
}

media.addEventListener("change",showMenu(media));

function expandMenu() {
  hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("hide");
/*     `<ul>
    <li><a href="#" id="backHome">Inicio</a></li>
    <li><a href="#about" id="backAbout">Sobre mí</a></li>
    <li><a href="#portfolio" id="backPortfolio">Portfolio</a></li>
    <li><a href="#contact" id="backContact">Contacto</a></li>
    <li>
      <img src="assets/united-kingdom-uk-svgrepo-com .svg" alt="english" id="english" />
      <img src="assets/flag-for-flag-spain-svgrepo-com.svg" alt="spanish" id="spanish" />
    </li>
  </ul>` */
  })
}


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
          
          presentacion.classList.add("hide");
          if (skillTab.classList.contains("hide")){
            presentacion.classList.remove("hide");
          }
          

          /*   Cambia la clase del link seleccionado */

          skillSelect.classList.toggle("active-link");
          educationSelect.classList.remove("active-link");
          experienceSelect.classList.remove("active-link");
        }
        if (e.target.textContent == "Experiencia") {
          experienceTab.classList.toggle("hide");
          skillTab.classList.add("hide");
          educationTab.classList.add("hide");

          presentacion.classList.add("hide");
          if (experienceTab.classList.contains("hide")){
            presentacion.classList.remove("hide");
          }

          /*   Cambia la clase del link seleccionado */
          experienceSelect.classList.toggle("active-link");
          educationSelect.classList.remove("active-link");
          skillSelect.classList.remove("active-link");
        }
        if (e.target.textContent == "Educación") {
          educationTab.classList.toggle("hide");
          skillTab.classList.add("hide");
          experienceTab.classList.add("hide");

          presentacion.classList.add("hide");
          if (educationTab.classList.contains("hide")){
            presentacion.classList.remove("hide");
          }

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
          
          projectImg[i].src = "assets/tateti-static.png";
        });
      } else if ( project[i].id == "landingPage")
      {
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/landing-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
          
          projectImg[i].src = "assets/landing-static.png";
        });


      } else if (project[i].id === "todo") {
        project[i].addEventListener("mouseover", () => {
          projectImg[i].src = "assets/todo-ani.gif";
        });

        project[i].addEventListener("mouseout", () => {
        
          project[i].src = "assets/todo-static.png";
        });
      }
    }
  }
/* 
  function emailSend() {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }


}); */

console.log(formulario);
const email = document.querySelector("#email");
const message = document.querySelector("#textarea");

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("paso");
  const datos = {
    email: email.value,
    message: message.value
  }
  validarTexto(datos.message);
  normalizarTexto(datos.message);
  validarEmail(datos.email);
  normalizarEmail(datos.email);
enviarMail(datos);

  
})

function enviarMail(datos){
  const URL = "https://formspree.io/f/mjvdpnlz";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    
    },
    body: JSON.stringify(datos)
  }

  fetch(URL, config)
.then((response) => {
  console.log(response);
  return response.json();
})
.catch((err) => console.log(err))

}


