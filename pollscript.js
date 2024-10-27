// Function to create a chart for each river
function createRiverChart(canvasId, labels, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Pollutant Levels',
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#F44336'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Data for each river
const rivers = [
    { id: 'gangaChart', pollutants: ['Nitrogen', 'Phosphorus', 'Lead', 'Mercury', 'Cadmium'], data: [60, 50, 70, 45, 30] },
    { id: 'yamunaChart', pollutants: ['Ammonia', 'Chloride', 'Fluoride', 'Mercury', 'Pesticides'], data: [80, 60, 50, 70, 40] },
    { id: 'brahmaputraChart', pollutants: ['Copper', 'Zinc', 'Selenium', 'Lead', 'Mercury'], data: [40, 55, 65, 30, 50] },
    { id: 'godavariChart', pollutants: ['Pesticides', 'Fluoride', 'Iron', 'Lead', 'Mercury'], data: [55, 65, 45, 60, 50] },
    { id: 'krishnaChart', pollutants: ['Nitrate', 'Ammonia', 'Pesticides', 'Lead'], data: [50, 70, 40, 60] },
    { id: 'narmadaChart', pollutants: ['Pesticides', 'Chlorine', 'Phosphorus', 'Lead'], data: [65, 45, 50, 60] },
    { id: 'cauveryChart', pollutants: ['Iron', 'Fluoride', 'Pesticides', 'Mercury'], data: [68, 45, 55, 40] },
    { id: 'taptiChart', pollutants: ['Chloride', 'Pesticides', 'Iron'], data: [72, 60, 50] },
    { id: 'sutlejChart', pollutants: ['Ammonia', 'Nitrate', 'Fluoride', 'Pesticides'], data: [58, 60, 40, 50] },
    { id: 'ghagharaChart', pollutants: ['Mercury', 'Lead', 'Pesticides'], data: [64, 55, 45] },
];

// Create a chart for each river
rivers.forEach(river => {
    createRiverChart(river.id, river.pollutants, river.data);
});