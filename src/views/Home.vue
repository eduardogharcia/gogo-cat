<template>
  <div class="home">
    <div class="home__logo">
      <Logo />
    </div>
    <h1 class="home__name">GogoCat</h1>
    <ListLines :lines="lines"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListLines from '@/components/ListLines.vue'
import Logo from '@/assets/img/logo.svg?inline'

export default {
  name: 'home',
  props: ['lines'],
  components: {
    ListLines,
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    &__name{
      font-size: 25px;
    }
  }
</style>
