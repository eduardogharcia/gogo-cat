<template>
  <button v-on:click="click" class="hamburger" v-bind:class="{ 'hamburger--active': active }">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('click')
      this.active = this.active ? false : true
    }
  },
  data () {
    return {
      active : false
    }
  }
}
</script>


<style lang="scss" scoped>
  .hamburger {
    background: transparent;
    border: none;
    cursor: pointer; 
    padding: 0;
    position: relative;
    height: 25px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      // left: 50%;
      // transform: translateX(-50%);

      transition: all 200ms ease-in-out;
      cursor: pointer;
      height: 2px;
      width: 40px;
      background: #fff;
      // position: absolute;
      display: block;
      content: '';
      border-radius: 1px;

      transform-origin: 1px 1px;
     
    }
    &--active{
      span{
        background-color: transparent;
        &:first-child {
          transform: rotate(31deg);
          background-color: #fff;
          width: 46px;
        }
        &:last-child {
          transform: rotate(-31deg);
          background-color: #fff;
          width: 46px;
        }
      }
    }
    &:active, &:focus{
      outline: none
    }
  }
</style>
