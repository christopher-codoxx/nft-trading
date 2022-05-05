<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <Subheader></Subheader>
  <Nuxt />
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '@/components/header-component.vue'
import Subheader from '@/components/subheader.vue'
export default Vue.extend({

  components: {
    HeaderComponent,
    Subheader
  }
  
})
</script>