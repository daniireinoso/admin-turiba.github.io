<template>
   <div class="fullscreen sitios-turisticos">
    <q-btn flat round class="button-back" icon="arrow_back_ios" to="/"></q-btn>
    <span class="title-sitios"> Etiquetas</span>
    <q-btn icon="add_circle" push class="button_nuevo_sitio" label="Nueva Etiqueta" @click="nuevoSitio()"></q-btn>
     <div class="grid-container">
     <q-card class="my-card grid-item" v-for="tag in tags" :key="tag">
      <div class="col text-h6 ellipsis" style="color: white;" v-text="tag.name">
          </div>
          <q-btn
          fab
          icon="more_vert"
          class="absolute btn-options">
             <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section >
                <span class="material-icons" style="display: contents; color: #D5853B;">edit</span>Editar</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable v-close-popup>
              <q-item-section @click="deleteEtiqueta(tag.name)"><span class="material-icons" style="display: contents; color: #D5853B;">delete</span>Eliminar</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
    </q-card>
    </div>
    <div class="q-mt-xl" v-if="nuevo" style="text-align: -webkit-center;">
      <span class="text-white">Nueva Etiqueta</span>
      <q-input class="input-label q-mb-lg" outlined v-model="tagName" label="Nombre de la etiqueta" dense></q-input>
      <div class="q-mt-lg" style="text-align: -webkit-center;">
       <q-btn flat rounded color="white" label="Cancelar" @click="cancel"></q-btn>
       <q-btn push class="btn-guardar" label="Guardar" @click="guardar"></q-btn>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SitiosTuristicos",
  data() {
    return {
      tags: [
        {name: 'Cascadas'},
        {name: 'Montañas'},
        {name: 'Ríos'},
        {name: 'Senderos'},
        {name: 'Bosques'},
        {name: 'Lagos'},
        {name: 'Lagunas'},
      ],
      nuevo: false,
      tagName: '',
      newTags: {name: ''},
  }
  },
  methods: {
    nuevoSitio() {
      this.nuevo = true
    },
    cancel() {
      this.nuevo = false
    },
    guardar() {
      this.newTags.name = this.tagName
      this.tags.push(this.newTags)
      this.nuevo = false
    },
    deleteEtiqueta(val) {
      this.tags = this.tags.filter(function(tag) {
        return tag.name !== val;
      })
    }
  },
});
</script>
<style>
.sitios-turisticos
  { background: #1D1E3F;
      overflow: auto;}
.title-sitios
  {font-family: 'ABeeZee';
font-style: italic;
font-weight: 400;
font-size: 50px;
line-height: 59px;
text-align: center;
color: white;
margin-top: -8em;
margin-left: 7.5em;}
.button_nuevo_sitio {
    top: 6em;
    float: right;
    background: #D5853B;
    border-radius: 10px;
    margin-right: 3em;
    color: white;
}
.button-back {
  color: #D5853B;
  font-size: xxx-large;
}
.my-card {
  max-width: 20em;
  margin-right: auto;
  margin-left: auto;
}
.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto auto;
  padding: 15px;
  max-height: 20em;
  row-gap: 10px;
}

.grid-item {
  background-color: #293952;
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.btn-options {
    top: 2.5em;
    right: -12px;
    transform: translateY(-50%);
    color: #D5853B;
}
.input-label {
  border: ridge;
  border-radius: 10px;
  width: 30em;

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
</style>
