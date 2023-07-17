

    let workExperience = {
        tata: `Service Desk
        Agent:<br />Brindar soporte técnico a los empleados de PWC en
        Estados Unidos, uso de sistema de tickets`,
        garmin: `Encargado de tienda<br />Atención
        al cliente: asesoramiento sobre características, uso y cuidado
        de los distintos productos.<br />
        Costumer service online: gestión de redes, creación ocasional de
        contenidos.<br />
        Servicio post-venta: evaluación primaria de problemas del
        producto, realización de reparaciones en casos específicos.<br />
        Asignación de productos defectuosos a departamento de
        reparaciones.<br />
        Gestión de caja y documentación: facturaciones a clientes, pagos
        a proveedores, arqueo de cierre de caja.<br />
        Gestión de stock: organización del espacio de almacenamiento.
        Control de disponibilidades y encargo a depósito según
        necesidades observadas.<br />`,
        pocho: `Atención al cliente:
        asesoramiento en la búsqueda de libros durante la zafra de
        comienzo de clases.`,
    };
    
    const tata = document.querySelector("#tata");
    const garmin = document.querySelector("#garmin");
    const pocho = document.querySelector("#pocho");
    

    const tataP = document.querySelector("#tata-paragraph");
    const garminP = document.querySelector("#garmin-paragraph");
    const pochoP = document.querySelector("#pocho-paragraph");

    
    
    addExperience(workExperience);

    function addExperience (experience) {

        tata.addEventListener("click", ()=>{
            if (tataP.innerHTML == ''){
                tataP.innerHTML = experience.tata;
            }else{
                tataP.innerHTML = "";
            }

            garminP.innerHTML = "";
            pochoP.innerHTML = "";
            
        })

        garmin.addEventListener("click", ()=>{
            if (garminP.innerHTML == ''){
                garminP.innerHTML = experience.garmin;
            }else{
                garminP.innerHTML = "";
            }

            pochoP.innerHTML = "";
            tataP.innerHTML = "";
            
        })

        pocho.addEventListener("click", ()=>{
            if (pochoP.innerHTML == ''){
                pochoP.innerHTML = experience.pocho;
            }else{
                pochoP.innerHTML = "";
            }

            garminP.innerHTML = "";
            tataP.innerHTML = "";
            
        })

        


    }
