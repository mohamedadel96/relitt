<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['timeline'],
  mounted() {
    this.renderChart(
      {
        labels: this.$props.timeline.slice(this.$props.timeline.length - 7).map(item => item.date),
        datasets: [
          {
            label: "average air level",
            backgroundColor: "#007bff60",
            data: [...this.$props.timeline.slice(this.$props.timeline.length - 7).map(item => item.avg_air_level), 0]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      }
    );
  }
};
</script>