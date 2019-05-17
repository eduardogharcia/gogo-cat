<template>
  <div class="home">
    <img class="home__logo" src="../assets/img/logo.svg">
    <h1 class="home__name">IBusao</h1>
    <ListLines/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListLines from '@/components/ListLines.vue'

export default {
  name: 'home',
  components: {
    ListLines
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
