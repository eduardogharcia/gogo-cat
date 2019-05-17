<template>
  <div id="app" class="app">
    <nav-bar v-on:openclose="toggleAbout"/>
    <transition name="slide" mode="out-in">
      <router-view :lines="lines"/>
    </transition>
    <about v-bind:class="{ app__about: true, 'app__about--open': aboutOpen }"/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import About from '@/components/About.vue'
  import axios from 'axios'

  export default {
    components: {
      'nav-bar': NavBar,
      'about': About
    },
    data() {
      return {
        aboutOpen: false,
        lines: []
      }
    },
    methods: {
      toggleAbout () {
        this.aboutOpen = this.aboutOpen ? false : true
      }
    },
    created () {
      this.lines = localStorage.lines ? JSON.parse( localStorage.lines ) : []
      axios.get( 'lines.js' )
      .then( response => {
        localStorage.lines =  JSON.stringify( response.data )
        let date = new Date()
        localStorage.lastUpdate = date.getTime()
        this.lines = JSON.parse( localStorage.lines )
      })
      .catch ( e => {
        console.log( 'Error' )
        this.errors.push( e )
      })
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/style.scss';
  .app{
    &__about{
      position: fixed;
      top: 0;
      left: -300px;
      width: 300px;
      max-width: 80%;
      height: 100vh;
      transition: left 200ms linear;
      z-index: 3;
      &--open{
        left: 0;
        box-shadow: 0 0 0px 6px rgba(0,0,0,0.4);
      }
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: opacity 200ms, transform 200ms;
  }
  .slide-enter{
    opacity: 0;
    &.home{
      transform: translateX(-30%);
    }
    &.busline-schedule{
      transform: translateX(30%);
    }
  }
  .slide-leave-to{
    opacity: 0;
    &.home{
      transform: translateX(-30%);
    }
    &.busline-schedule{
      transform: translateX(30%);
    }
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>
