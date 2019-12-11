<template>
    <div>
       <apexchart type="line" :options="options" :series="series"></apexchart> 
    </div>
</template>

<script>
import apexchart from 'vue-apexcharts'
export default {
    props:['timeline'],
    components: {
        apexchart
    },
data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: this.$props.timeline.map(item => item.date)
        }
      },
      series: [{
        name: 'average air level',
        data: [...this.$props.timeline.map(item => item.avg_air_level)]
      }]
    }
  }
}

</script>


