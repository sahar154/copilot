document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  function getData() {
    const incomeElements = document.querySelectorAll(".income");
    const expensesElements = document.querySelectorAll(".expenses");

    const incomeData = Array.from(incomeElements).map(
      (input) => parseFloat(input.value) || 0
    );
    const expensesData = Array.from(expensesElements).map(
      (input) => parseFloat(input.value) || 0
    );

    return { incomeData, expensesData };
  }

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Label 1",
        "Label 2",
        "Label 3",
        "Label 4",
        "Label 5",
        "Label 6",
        "Label 7",
        "Label 8",
        "Label 9",
        "Label 10",
        "Label 11",
        "Label 12",
      ],
      datasets: [
        {
          label: "Income",
          data: getData().incomeData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: getData().expensesData,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  document.querySelectorAll(".income, .expenses").forEach((input) => {
    input.addEventListener("input", () => {
      const { incomeData, expensesData } = getData();
      myChart.data.datasets[0].data = incomeData;
      myChart.data.datasets[1].data = expensesData;
      myChart.update();
    });
  });
});
