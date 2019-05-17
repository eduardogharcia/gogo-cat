<template>
  <ul class="list-lines">
    <li v-for="line in lines" :key="line.id" class="list-lines__item">
      <router-link class="list-lines__link" :to="{ name: 'itinerario', params: { id: line.id } }">{{line.from}} <span>></span> {{line.to}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: [ 'lines' ]
}
</script>

<style lang="scss" scoped>
  .list-lines{
    margin: 0;
    padding: 0;
    &__item{
      list-style: none;
    }
    &__link{
      color: #fff;
      font-size: 25px;
      margin: 30px 0;
      display: block;
      span{
        color: #bdff2a;
      }
    }
  }
</style>
