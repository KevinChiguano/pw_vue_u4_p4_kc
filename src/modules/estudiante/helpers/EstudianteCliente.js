import axios from "axios"

export const obtenerEstudianteFachada = async (cedula)=>{
    console.log('AXIOS')
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada = (bodyEstudiante) =>{
    ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = async (id) =>{
    return await eliminarEstudiante(id);
}

const obtenerEstudianteAPI = async (cedula)=>{
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios = async (cedula)=>{

    //En el config vamos a enviar todos los datos de cabecera
    //declarar una cabecera
    //declarar como si fuera un json
    //por cada cabecera o key declarar como si fuera un atributo
    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZXZpbiIsImlhdCI6MTY5Mjc1MDkxMywiZXhwIjoxNjkyNzUyMTEzfQ.1eoPO-IDgs4pxmpG_sO7Nl6kVApoNKll9WQgImdGBJH66bccOeFCs0f99oWha06f3VioyM7cA6zV3uwEjX_CVQ",
        "Mensaje": "Valor1"
    }

    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r=>r.data);
    return data;
}

const ingresarEstudiante = (bodyEstudiante) =>{

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZXZpbiIsImlhdCI6MTY5Mjc1MDkxMywiZXhwIjoxNjkyNzUyMTEzfQ.1eoPO-IDgs4pxmpG_sO7Nl6kVApoNKll9WQgImdGBJH66bccOeFCs0f99oWha06f3VioyM7cA6zV3uwEjX_CVQ",
        "Mensaje": "Valor1"
    }

    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,bodyEstudiante, {headers: headers}).then(r=>r.data);
}

const actualizarEstudiante = (bodyEstudiante, id) => {


    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZXZpbiIsImlhdCI6MTY5Mjc1MDkxMywiZXhwIjoxNjkyNzUyMTEzfQ.1eoPO-IDgs4pxmpG_sO7Nl6kVApoNKll9WQgImdGBJH66bccOeFCs0f99oWha06f3VioyM7cA6zV3uwEjX_CVQ",
        "Mensaje": "Valor1"
    }

    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers: headers}).then(r=>r.data);
}

const eliminarEstudiante = async (id) =>{

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZXZpbiIsImlhdCI6MTY5Mjc1MDkxMywiZXhwIjoxNjkyNzUyMTEzfQ.1eoPO-IDgs4pxmpG_sO7Nl6kVApoNKll9WQgImdGBJH66bccOeFCs0f99oWha06f3VioyM7cA6zV3uwEjX_CVQ",
        "Mensaje": "Valor1"
    }

    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, {headers: headers}).then(r=>r.data);
    return data
}
