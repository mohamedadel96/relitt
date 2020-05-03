<template>
  <section>
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Sales"],
        ["2014", 1000],
        ["2015", 1170],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
};
</script>