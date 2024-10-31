// script.js
const ctx = document.getElementById('myChart').getContext('2d');

// Datos de ejemplo (reemplaza con tus datos)
const labels = ['Tradicional', 'Orgánica', 'Precisión'];
const data = [120, 65, 35];

// Crear el gráfico
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Emisiones de CO2 (toneladas/ha)',
            data: data,
            backgroundColor: '#336633', // Verde oscuro
            borderColor: '#336633',
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
