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

.btn-outline-primary {
  --bs-btn-color: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0d6efd;
  --bs-btn-hover-border-color: #0d6efd;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0d6efd;
  --bs-btn-active-border-color: #0d6efd;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0d6efd;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0d6efd;
  --bs-gradient: none;
}
</style>