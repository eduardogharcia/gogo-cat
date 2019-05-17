<template>
  <header class="schedule-header">
    <span class="schedule-header__place">{{from}}</span>
    <span class="schedule-header__arrow"><img src="@/assets/img/chevron-down.svg" alt=""></span>
    <span class="schedule-header__place">{{to}}</span>
  </header>
</template>

<script>
export default {
  name: 'ScheduleHeader',
  props: {
    from: String,
    to: String
  }
}
</script>

<style scoped lang="scss">
  .schedule-header{
    color: #fff;
    background-color: #296e99;
    text-align: center;
    text-transform: uppercase;
    padding: 50px 0;
    min-height: 250px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__arrow{
      margin: 10px 0;
    }
    &--contact{
      flex-direction: row;
    }
  }
</style>
