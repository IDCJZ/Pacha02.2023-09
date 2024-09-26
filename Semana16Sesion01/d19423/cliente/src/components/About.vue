<template>
    <div class="about">
      <h1>Ruta protegida</h1>
    </div>
  </template>
  
  <script>
  import {mapState} from 'vuex'
  export default {
    created(){
      this.ruta()
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      async ruta(){
        try {
          const res = await fetch('http://localhost:8009/api/admin', {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': this.token
            },
          })
          const resDB = await res.json()
          console.log(resDB)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  </script>