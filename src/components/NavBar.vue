<template>
  <header class="navbar">
    <router-link class="navbar__back-btn" v-bind:class="{ 'navbar__back-btn--hidden': backBtnHidde }" to="/"><left-arrow-icon /></router-link>
    <hamburger-btn v-on:click="openClose" class="navbar__show-info-btn" />
  </header>
</template>

<script>
import HamburgerBtn from '@/components/HamburgerBtn';
import LeftArrowIcon from '@/assets/img/arrow-left.svg?inline'

export default {
  components: {
    'hamburger-btn': HamburgerBtn,
    'left-arrow-icon': LeftArrowIcon
  },
  methods: {
    openClose () {
      this.$emit( 'openclose' );
    }
  },
  watch: {
    '$route' ( to ) {
      if ( to.name == 'home' ) {
        this.backBtnHidde = true 
      } else {
        this.backBtnHidde = false
      }
    }
  }, 
  created () {
    if ( this.$route.name == 'home' ) {
      this.backBtnHidde = true 
    } else {
      this.backBtnHidde = false
    }
  },
  data () {
    return {
      backBtnHidde: false
    }
  }
}
</script>


<style lang="scss" scoped>
  .navbar{
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    z-index: 2;
    &__back-btn{
      background-repeat: no-repeat;
      cursor: pointer;
      &--hidden{
        opacity: 0;
      }
    }
  }
</style>

