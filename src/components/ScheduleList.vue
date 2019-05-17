<template>
  <ul class="schedule">
    <li v-for="item in schedule" :key="item.id" class="schedule__item">
      <div class="schedule__item__time">
        <h2>{{item.time}}</h2>
      </div>
      <div class="schedule__item__info">
        <p class="schedule__item__info__company">{{item.company}}</p>
        <div v-if="item.description != ''" class="schedule__item__info__obs">
            {{item.obs}}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    "schedule": Array
  }
}
</script>



<style scoped lang="scss">
  .schedule {
    padding: 0;
    margin: 0;
    &__item{
      list-style: none;
      display: flex;
      justify-content: center;
      margin: 25px 0;
      &__time{
        text-align: right;
        padding-right: 30px;
        position: relative;
        width: 50%;
        h2{
          font-weight: 100;
          font-size: 50px;
          margin: 20px 0;
        }
        &::after{
          content: '';
          display: block;
          width: 2px;
          height: 100%;
          position: absolute;
          right: -1px;
          top: 0;
          background-color: rgba(255,255,255,0.3);
        }
      }
      &__info{
        width: 50%;
        padding-left: 30px;
        font-weight: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__company{
          font-size: 20px;
        }
        &__obs{
          color: #c8ff2a;
          font-weight: bold;
        }
      }
    }
  }
</style>
