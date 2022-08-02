<template>
  <q-page class="flex flex-center menu">
    <div class="title">Turiba</div>
    <q-btn push class="button_sitios" label="Sitios Turísticos" to="/sitios"></q-btn>
    <q-btn push class="button_etiquetas" label="Etiquetas" to="/etiquetas"></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style>
.menu
  { background: #1D1E3F;}
.title
  {font-family: 'ABeeZee';
font-style: italic;
font-weight: 400;
font-size: 50px;
line-height: 59px;
text-align: center;
color: white;
margin-top: -8em;}
.button_sitios {
  position: absolute;
width: 331px;
height: 69px;
top: 20em;
background: #D5853B;
border-radius: 20px;
color: white;
}
.button_etiquetas{
  position: absolute;
width: 331px;
height: 69px;
top: 28em;
background: #D5853B;
border-radius: 20px;
color: white;
}
</style>
