<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['timeline'],
  mounted() {
    this.renderChart(
      {
        labels: this.$props.timeline.map(item => item.date),
        datasets: [
          {
            label: "average air level",
            backgroundColor: "#007bff60",
            data: [...this.$props.timeline.map(item => item.avg_air_level), -6000]
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