<template>
  <div class="busline-schedule">
    <schedule-header v-if="line" :from="line.from" :to="line.to"/>
    <div class="content-list">
        <div class="container">
          <schedule-list v-if="line" :schedule="line.schedule"/>
        </div> <!-- container -->
    </div> <!-- content-list -->
  </div>
</template>

<script>
import ScheduleHeader from '@/components/ScheduleHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'

export default {
  props: {
    lines: Array
  },
  components: {
    'schedule-header': ScheduleHeader,
    'schedule-list': ScheduleList
  },
  computed: {
    line () {
      if ( this.lines != undefined ) {
        let id = this.$route.params.id;
        return this.lines.find( function( element ) {
          if ( element.id == id )  return element
        })
      }
      return []
    },
  }
}
</script>
