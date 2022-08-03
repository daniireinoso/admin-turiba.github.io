<template>
  <div class="fullscreen sitios-turisticos">
    <q-btn flat round class="button-back" icon="arrow_back_ios" to="/"></q-btn>
    <span class="title-sitios"> Sitios Turisticos</span>
    <q-btn
      icon="add_circle"
      push
      class="button_nuevo_sitio"
      label="Nuevo Sitio Turistico"
      @click="nuevoSitio()"
    ></q-btn>
    <nuevo-sitio-turistico
      v-if="nuevo"
      @place="nuevoPlace($event)"
      @nuevo="nuevo = $event"
    ></nuevo-sitio-turistico>
    <div class="grid-container">
      <q-card class="my-card grid-item" v-for="place in places" :key="place">
        <div
          class="col text-h6 ellipsis"
          style="color: white"
          v-text="place.name"
        ></div>
        <q-btn fab icon="more_vert" class="absolute btn-options">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>
                  <span
                    class="material-icons"
                    style="display: contents; color: #d5853b"
                    >edit</span
                  >Editar</q-item-section
                >
              </q-item>
              <q-separator></q-separator>
              <q-item clickable v-close-popup>
                <q-item-section @click="deleteSitio(place.name)"
                  ><span
                    class="material-icons"
                    style="display: contents; color: #d5853b"
                    >delete</span
                  >Eliminar</q-item-section
                >
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-img :src="place.image"></q-img>
        <q-card-section>
          <div class="items-center">
            <div
              style="text-align: left; width: fit-content"
              v-for="topic in place.topics"
              :key="topic"
            >
              <div class="text-subtitle1 text-white">{{ topic }}</div>
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap"
              style="margin-left: auto; width: fit-content; margin-top: -4em"
            >
              <q-icon name="place"></q-icon>
              {{ place.location }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey" v-text="place.description"></div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NuevoSitioTuristico from "../components/NuevoSitioTuristico";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebase } from "src/boot/firebase";
export default defineComponent({
  name: "SitiosTuristicos",
  data() {
    return {
      places: [],
      nuevo: false,
    };
  },
  mounted() {
    this.loadPlaces();
  },
  methods: {
    async loadPlaces() {
      const placesCollection = collection(firebase, "places");
      const citySnapshot = await getDocs(placesCollection);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      this.places = cityList;
    },
    nuevoSitio() {
      this.nuevo = true;
    },
    async nuevoPlace(val) {
      this.places.push(val);
      // const placesCollection = collection(firebase, "places");
      // const docRef = await setDoc(collection(firebase, "places"), {
      //   name: val.name,
      //   description: val.description,
      // });
      // console.log("Document written with ID: ", docRef.id);
    },
    deleteSitio(val) {
      console.log(val);
      this.places = this.places.filter(function (place) {
        return place.name !== val;
      });
    },
  },
  components: { NuevoSitioTuristico },
});
</script>
<style>
.sitios-turisticos {
  background: #1d1e3f;
  overflow: auto;
}
.title-sitios {
  font-family: "ABeeZee";
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  color: white;
  margin-top: -8em;
  margin-left: 7.5em;
}
.button_nuevo_sitio {
  top: 6em;
  float: right;
  background: #d5853b;
  border-radius: 10px;
  margin-right: 3em;
  color: white;
}
.button-back {
  color: #d5853b;
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
  color: #d5853b;
}
</style>
