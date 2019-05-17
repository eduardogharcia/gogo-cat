<template>
  <div>
    <schedule-header :from="line.from" :to="line.to"/>
    <div class="content-list">
        <div class="container">
          <schedule-list :schedule="line.schedule"/>
        </div> <!-- container -->
    </div> <!-- content-list -->
  </div>
</template>

<script>
import ScheduleHeader from '@/components/ScheduleHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'

export default {
  props: ['lines'],
  components: {
    'schedule-header': ScheduleHeader,
    'schedule-list': ScheduleList
  },
  computed: {
    line () {
      let id = this.$route.params.id;
      return this.lines.find( function( element ) {
        if ( element.id == id )  return element
      })
    },
  }
}
</script>
