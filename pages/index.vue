<template>
  <div class="container">
    
    <dashboard></dashboard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Dashboard from '../components/dashboard.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    Dashboard
  }
})
</script>
