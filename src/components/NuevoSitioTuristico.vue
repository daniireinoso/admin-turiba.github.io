<template>
   <div class="fullscreen nuevo-sitio-turistico">
    <span class="title-nuevo-sitio"> Nuevo Sitio Turistico</span>
     <div class="row">
      <div class="col-md-4 q-ml-xl q-mt-xl">
        <span class="text-white">Nombre del lugar turistico</span>
        <q-input class="input q-mb-lg" outlined v-model="name" label="Nombre" dense></q-input>
        <span class="text-white">Descripcion del lugar turistico</span>
        <q-input class="input q-mb-lg" outlined v-model="description" type="textarea" label="Descipcion" dense></q-input>
        <span class="text-white">Ubicacion del lugar turistico</span>
        <q-input class="input" outlined v-model="ubicacion" label="Ubicacion" dense></q-input>
      </div>
      <div class="col-md-4 q-ml-xl q-mt-xl">
        <span class="text-white">Precios</span>
        <q-input class="input q-mb-lg" outlined v-model="precio" label="Precios" dense></q-input>
        <span class="text-white">Recomendaciones</span>
        <q-input class="input q-mb-lg" outlined v-model="recomendacion" type="textarea" label="Recomendaciones" dense></q-input>
        <span class="text-white">Horario</span>
        <q-input class="input" outlined v-model="horario" label="Horario" dense></q-input>
      </div>
      <div class="col-md-2 q-ml-xl q-mt-xl">
        <span class="text-white">Etiquetas</span>
        <q-card>
          <q-list bordered separator style="background: #313252;">
            <q-item clickable v-ripple>
              <q-item-section class="text-white">Single line item</q-item-section>
            </q-item>
         </q-list>
        </q-card>
      </div>
    </div>
    <div class="q-mt-lg" style="text-align: -webkit-center;">
        <q-file
        v-model="files"
        class="upload-file"
        label="Cargar Imagenes"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="max-width: 300px"
      >
        <template v-slot:prepend>
          <q-icon name="add_a_photo"></q-icon>
        </template>
      </q-file>
    </div>
    <div class="q-mt-lg" style="text-align: -webkit-center;">
      <q-btn flat rounded color="white" label="Cancelar" @click="cancel"></q-btn>
       <q-btn push class="btn-guardar" label="Guardar" @click="guardar"></q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NuevoSitioTuristico",
  data() {
    return {
      place: {name: '', description: '', ubicacion: '', topics: ''},
      files: null,
      name: '',
      description: '',
      ubicacion: '',
      precio: '',
      recomendacion: '',
      horario: '',
  }
  },
  methods: {
    guardar(){
      this.place.name = this.name
      this.place.description = this.description
      this.place.ubicacion = this.ubicacion
      this.$emit('place', this.place)
      this.$emit('nuevo', false)
    },
    cancel() {
      this.$emit('nuevo', false)
    }
  }
});
</script>
<style>
.nuevo-sitio-turistico
  { background: #1D1E3F;
      overflow: auto;}
.title-nuevo-sitio {
  font-family: 'ABeeZee';
font-style: italic;
font-weight: 400;
font-size: 50px;
line-height: 59px;
text-align: center;
color: white;
margin-top: -8em;
margin-left: 7.5em;
}
.input {
  border: ridge;
  border-radius: 10px;
}
.q-field__native {
  color: white;
}
.q-field__control {
  color: #e0e0e0;
}
.q-field--dense .q-field__label {
  color: white;
}
.upload-file {
    border-style: outset;
    border-radius: 10px;
}
.q-field__label {
  color: white;
}
.q-field__prepend {
  color: white;
}
.btn-guardar {
  background-color: #D5853B;
  color: white;
}
</style>
