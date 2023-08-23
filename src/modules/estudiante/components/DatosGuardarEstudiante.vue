<template>
  <div class="container">
    <label class="form-label">Cedula</label>
    <input v-model="cedula" type="text" class="form-input" />

    <label class="form-label">Nombre</label>
    <input v-model="nombre" type="text" class="form-input" />

    <label class="form-label">Apellido</label>
    <input v-model="apellido" type="text" class="form-input" />

    <label class="form-label">Provincia</label>
    <input v-model="provincia" type="text" class="form-input" />

    <label class="form-label">Fecha de Nacimiento</label>
    <input v-model="fechaNacimiento" type="datetime" class="form-input" />

    <button @click="guardarEstudiante" class="submit-button">Guardar</button>
  </div>
</template>
  
  <script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
      fechaNacimiento: null,
    };
  },

  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
        fechaNacimiento: this.fechaNacimiento, 
      };

      await ingresarEstudianteFachada(data);

      /*this.cedula = ""
      this.nombre = ""
      this.apellido = ""
      this.provincia = ""
      this.fechaNacimiento = ""*/

    },
  },
};
</script>
  
  <style scoped>

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}


.form-label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}


.form-input {
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}


.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>