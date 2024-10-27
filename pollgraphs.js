document.addEventListener("DOMContentLoaded", function () {
    const riversData = {
        ganga: [60, 20, 10, 5, 5],
        yamuna: [45, 25, 15, 10, 5],
        brahmaputra: [70, 10, 10, 5, 5],
        godavari: [55, 15, 20, 5, 5],
        krishna: [50, 25, 15, 10, 0],
        narmada: [65, 15, 10, 5, 5],
        cauvery: [68, 12, 10, 5, 5],
        tapti: [72, 10, 10, 5, 3],
        sutlej: [58, 20, 15, 5, 2],
        ghaghara: [64, 18, 10, 5, 3],
    };

    const riversLabels = ['Nitrogen', 'Phosphorus', 'Lead', 'Mercury', 'Cadmium'];

    for (const river in riversData) {
        const ctx = document.getElementById(`${river}Chart`).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: riversLabels,
                datasets: [{
                    label: 'Pollution Levels',
                    data: riversData[river],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Pollution Level (%)'
                        }
                    }
                }
            }
        });
    }
});
