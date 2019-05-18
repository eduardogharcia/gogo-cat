<template>
  <header class="schedule-header">
    <div class="schedule-header__normal" v-bind:style="{ opacity: opacityNormal }">
      <span class="schedule-header__place">{{from}}</span>
      <span class="schedule-header__arrow"><chevron-down-icon /></span>
      <span class="schedule-header__place">{{to}}</span>
    </div>
    <div class="schedule-header__float" v-bind:style="{ opacity: opacityFloat }">
      <span class="schedule-header__place">{{from}}</span>
      <span class="schedule-header__arrow"><chevron-down-icon /></span>
      <span class="schedule-header__place">{{to}}</span>
    </div>
  </header>
</template>

<script>
import ChevronDownIcon from '@/assets/img/chevron-down.svg?inline'

export default {
  name: 'ScheduleHeader',
  components: {
    'chevron-down-icon': ChevronDownIcon
  },
  props: {
    from: String,
    to: String
  },
  data () {
    return {
      opacityFloat: 0,
      opacityNormal: 100
    }
  },
  methods: {
    handleSroll () {
      this.opacityFloat = ( window.scrollY * 0.5 ) / 100
      this.opacityNormal = (100 - ( window.scrollY * 0.8 ) ) / 100
    }
  },
  mounted () {
    window.addEventListener( 'scroll', this.handleSroll )
  }
}
</script>

<style scoped lang="scss">
  .schedule-header{
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    padding: 50px 0;
    background-color: #296e99;
    &__arrow{
      margin: 10px 0;
    }
    &__normal{
      background-color: #296e99;
      min-height: 180px;
      font-size: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__float{
      height: 50px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #296e99;
      z-index: 1;
      .schedule-header__arrow svg{
        width: 16px;
        transform: rotate(-90deg);
        margin: 0 10px;
      }
    }
  }
</style>
