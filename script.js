// Obtener el contexto del canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Datos de ejemplo (reemplaza con tus datos)
const labels = ['Enero', 'Febrero', 'Marzo'];
const data = [12, 19, 3];

// Crear el gráfico
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Ventas',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Obtener el elemento del menú
const selectYear = document.getElementById('select-year');

// Agregar un event listener para detectar cambios en el menú
selectYear.addEventListener('change', () => {
  const selectedYear = selectYear.value;

  // Aquí actualizarías los datos del gráfico según el año seleccionado
  // ... (código para obtener los nuevos datos y actualizar el gráfico)
});
