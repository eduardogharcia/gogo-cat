<template>
  <button v-on:click="click" class="hamburger" v-bind:class="{ 'hamburger--active': active }"><span></span></button>
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
    padding: 10px 35px 16px 0px;
    position: relative;
    height: 40px;
    width: 40px;
    span{
      left: 50%;
      transform: translateX(-50%);
    }
    span,
    span:before,
    span:after
    {
      transition: all 200ms ease-in-out;
      cursor: pointer;
      border-radius: 1px;
      height: 3px;
      width: 35px;
      background: #fff;
      position: absolute;
      display: block;
      content: '';
      border-radius: 10px;
    }
    span{
      &::before {
        top: -10px; 
      }
      &::after {
        bottom: -10px;
      }
    }
    &--active{
      span{
        background-color: transparent;
        &:before, 
        &:after {
          top: 0;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
    &:active, &:focus{
      outline: none
    }
  }
</style>
