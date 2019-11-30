<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "average air level",
            backgroundColor: "#007bff60",
            data: [70, 20, 60, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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