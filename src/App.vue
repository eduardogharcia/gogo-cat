<template>
  <div id="app" class="app">
    <nav-bar v-on:openclose="toggleAbout"/>
    <transition name="page" mode="out-in">
    <router-view/>
    </transition>
    <about v-bind:class="{ app__about: true, 'app__about--open': aboutOpen }"/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import About from '@/components/About.vue'
  export default {
    components: {
      'nav-bar': NavBar,
      'about': About
    },
    data() {
      return {
        aboutOpen: false
      }
    },
    methods: {
      toggleAbout () {
        this.aboutOpen = this.aboutOpen ? false : true
      }
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
      &--open{
        left: 0;
        box-shadow: 0 0 0px 6px rgba(0,0,0,0.4);
      }
    }
  }
  .page-enter-active, .page-leave-active {
    transition: opacity 200ms, transform 200ms;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(30%);
  }
  .page-leave-to{
    opacity: 0;
    transform: translateX(-30%);
  }

</style>
