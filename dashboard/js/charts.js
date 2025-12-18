// Chart configurations and initialization
// Using Chart.js for visualizations

// Color palettes
const colors = {
    primary: '#2563eb',
    secondary: '#7c3aed',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    
    // Extended palette for charts
    palette: [
        '#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444',
        '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
        '#6366f1', '#22c55e', '#eab308', '#a855f7', '#0ea5e9'
    ],
    
    // Gradient helpers
    lowCost: '#10b981',
    mediumCost: '#f59e0b',
    highCost: '#ef4444'
};

// Chart default options
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#64748b';

// Initialize all charts
function initializeCharts() {
    initTopDrugsChart();
    initCostDistributionChart();
    initCategoryChart();
    initPriceSpreadChart();
    initFacilityRankingChart();
    initGenericRateChart();
    initRiskDistributionChart();
    initIssueTypeChart();
}

// 1. Top Dispensed Drugs Chart (Bar Chart)
let topDrugsChart;
function initTopDrugsChart() {
    const ctx = document.getElementById('topDrugsChart');
    if (!ctx) return;
    
    // Sort by quantity and get top 15
    const sortedDrugs = [...drugCostQuantity]
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 15);
    
    const backgroundColors = sortedDrugs.map(drug => 
        drug.unitCost < GENERIC_PRICE_THRESHOLD ? colors.success : colors.danger
    );
    
    topDrugsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedDrugs.map(d => truncateLabel(d.name, 25)),
            datasets: [{
                label: 'Quantity Dispensed',
                data: sortedDrugs.map(d => d.quantity),
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const drug = sortedDrugs[context.dataIndex];
                            return [
                                `Quantity: ${formatNumber(drug.quantity)}`,
                                `Unit Cost: ₱${drug.unitCost.toFixed(2)}`,
                                `Category: ${drug.category}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: value => formatNumber(value)
                    },
                    grid: { display: false }
                },
                y: {
                    grid: { display: false }
                }
            }
        }
    });
}

// 2. Cost Distribution Chart (Doughnut)
let costDistributionChart;
function initCostDistributionChart() {
    const ctx = document.getElementById('costDistributionChart');
    if (!ctx) return;
    
    // Calculate volume by cost category
    const lowCostVolume = drugCostQuantity
        .filter(d => d.unitCost < 5)
        .reduce((sum, d) => sum + d.quantity, 0);
    
    const mediumCostVolume = drugCostQuantity
        .filter(d => d.unitCost >= 5 && d.unitCost <= 20)
        .reduce((sum, d) => sum + d.quantity, 0);
    
    const highCostVolume = drugCostQuantity
        .filter(d => d.unitCost > 20)
        .reduce((sum, d) => sum + d.quantity, 0);
    
    costDistributionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Under ₱5/unit', '₱5-20/unit', 'Over ₱20/unit'],
            datasets: [{
                data: [lowCostVolume, mediumCostVolume, highCostVolume],
                backgroundColor: [colors.success, colors.warning, colors.danger],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${formatNumber(context.raw)} units (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// 3. Category Distribution Chart (Polar Area)
let categoryChart;
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    // Group by category
    const categoryTotals = {};
    drugCostQuantity.forEach(drug => {
        categoryTotals[drug.category] = (categoryTotals[drug.category] || 0) + drug.quantity;
    });
    
    const sortedCategories = Object.entries(categoryTotals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    
    categoryChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: sortedCategories.map(c => c[0]),
            datasets: [{
                data: sortedCategories.map(c => c[1]),
                backgroundColor: colors.palette.slice(0, sortedCategories.length).map(c => c + '80'),
                borderColor: colors.palette.slice(0, sortedCategories.length),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { boxWidth: 12, padding: 10 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${formatNumber(context.raw)} units`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    ticks: { display: false },
                    grid: { color: '#e2e8f0' }
                }
            }
        }
    });
}

// 4. Price Spread Chart (Floating Bar - Box Plot Style)
let priceSpreadChart;
function initPriceSpreadChart() {
    const ctx = document.getElementById('priceSpreadChart');
    if (!ctx) return;
    
    // Sort by price ratio
    const sortedDrugs = [...drugPricing]
        .map(d => ({
            ...d,
            spread: d.highest - d.lowest,
            ratio: d.highest / d.lowest
        }))
        .sort((a, b) => b.ratio - a.ratio)
        .slice(0, 20);
    
    // Create datasets for min-median and median-max ranges
    priceSpreadChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedDrugs.map(d => truncateLabel(d.name, 30)),
            datasets: [
                {
                    label: 'Lowest Price',
                    data: sortedDrugs.map(d => d.lowest),
                    backgroundColor: colors.success,
                    borderColor: colors.success,
                    borderWidth: 1,
                    borderRadius: 2,
                    barPercentage: 0.6
                },
                {
                    label: 'Median Price',
                    data: sortedDrugs.map(d => d.median),
                    backgroundColor: colors.warning,
                    borderColor: colors.warning,
                    borderWidth: 1,
                    borderRadius: 2,
                    barPercentage: 0.6
                },
                {
                    label: 'Highest Price',
                    data: sortedDrugs.map(d => d.highest),
                    backgroundColor: colors.danger,
                    borderColor: colors.danger,
                    borderWidth: 1,
                    borderRadius: 2,
                    barPercentage: 0.6
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            const drug = sortedDrugs[context[0].dataIndex];
                            return [
                                `Spread: ₱${drug.spread.toFixed(2)}`,
                                `Ratio: ${drug.ratio.toFixed(1)}x`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Price (₱) - Log Scale'
                    },
                    ticks: {
                        callback: value => '₱' + value
                    }
                },
                y: {
                    grid: { display: false }
                }
            }
        }
    });
}

// 5. Facility Ranking Chart (Horizontal Bar)
let facilityRankingChart;
function initFacilityRankingChart() {
    const ctx = document.getElementById('facilityRankingChart');
    if (!ctx) return;
    
    // Sort by average unit cost
    const sortedFacilities = [...facilityData].sort((a, b) => a.avgUnitCost - b.avgUnitCost);
    
    const backgroundColors = sortedFacilities.map(f => {
        if (f.avgUnitCost < 4) return colors.success;
        if (f.avgUnitCost < 6) return colors.warning;
        return colors.danger;
    });
    
    facilityRankingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedFacilities.map(f => truncateLabel(f.name, 25)),
            datasets: [{
                label: 'Average Unit Cost (₱)',
                data: sortedFacilities.map(f => f.avgUnitCost),
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const facility = sortedFacilities[context.dataIndex];
                            return [
                                `Avg Cost: ₱${facility.avgUnitCost.toFixed(2)}`,
                                `Generic Rate: ${facility.genericRate}%`,
                                `Total Volume: ${formatNumber(facility.totalVolume)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Average Unit Cost (₱)' },
                    grid: { display: false }
                },
                y: {
                    grid: { display: false }
                }
            }
        }
    });
}

// 6. Generic Rate Chart (Horizontal Bar)
let genericRateChart;
function initGenericRateChart() {
    const ctx = document.getElementById('genericRateChart');
    if (!ctx) return;
    
    // Sort by generic rate
    const sortedFacilities = [...facilityData].sort((a, b) => b.genericRate - a.genericRate);
    
    const backgroundColors = sortedFacilities.map(f => {
        if (f.genericRate >= 90) return colors.success;
        if (f.genericRate >= 80) return colors.warning;
        return colors.danger;
    });
    
    genericRateChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedFacilities.map(f => truncateLabel(f.name, 25)),
            datasets: [{
                label: 'Generic Utilization Rate (%)',
                data: sortedFacilities.map(f => f.genericRate),
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const facility = sortedFacilities[context.dataIndex];
                            return [
                                `Generic Rate: ${facility.genericRate}%`,
                                `Flagged Drugs: ${facility.flaggedDrugs}`,
                                `Region: ${facility.region}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    max: 100,
                    title: { display: true, text: 'Generic Utilization Rate (%)' },
                    grid: { display: false }
                },
                y: {
                    grid: { display: false }
                }
            }
        }
    });
}

// 7. Risk Distribution Chart (Pie)
let riskDistributionChart;
function initRiskDistributionChart() {
    const ctx = document.getElementById('riskDistributionChart');
    if (!ctx) return;
    
    const highRisk = riskFlags.filter(r => r.severity === 'high').length;
    const mediumRisk = riskFlags.filter(r => r.severity === 'medium').length;
    const lowRisk = riskFlags.filter(r => r.severity === 'low').length;
    
    riskDistributionChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['High Risk', 'Medium Risk', 'Low Risk'],
            datasets: [{
                data: [highRisk, mediumRisk, lowRisk],
                backgroundColor: [colors.danger, colors.warning, colors.info],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 8. Issue Type Chart (Bar)
let issueTypeChart;
function initIssueTypeChart() {
    const ctx = document.getElementById('issueTypeChart');
    if (!ctx) return;
    
    // Group by issue type
    const issueTypes = {};
    riskFlags.forEach(flag => {
        issueTypes[flag.issue] = (issueTypes[flag.issue] || 0) + 1;
    });
    
    issueTypeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(issueTypes),
            datasets: [{
                label: 'Count',
                data: Object.values(issueTypes),
                backgroundColor: [colors.danger, colors.warning, colors.info, colors.secondary],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}

// Helper function to truncate labels
function truncateLabel(label, maxLength) {
    return label.length > maxLength ? label.substring(0, maxLength) + '...' : label;
}

// Helper function to format numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Update charts based on filters
function updateTopDrugsChart(filter) {
    if (!topDrugsChart) return;
    
    let filteredDrugs = [...drugCostQuantity];
    
    if (filter === 'low') {
        filteredDrugs = filteredDrugs.filter(d => d.unitCost < GENERIC_PRICE_THRESHOLD);
    } else if (filter === 'high') {
        filteredDrugs = filteredDrugs.filter(d => d.unitCost >= GENERIC_PRICE_THRESHOLD);
    }
    
    const sortedDrugs = filteredDrugs
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 15);
    
    const backgroundColors = sortedDrugs.map(drug => 
        drug.unitCost < GENERIC_PRICE_THRESHOLD ? colors.success : colors.danger
    );
    
    topDrugsChart.data.labels = sortedDrugs.map(d => truncateLabel(d.name, 25));
    topDrugsChart.data.datasets[0].data = sortedDrugs.map(d => d.quantity);
    topDrugsChart.data.datasets[0].backgroundColor = backgroundColors;
    topDrugsChart.data.datasets[0].borderColor = backgroundColors;
    topDrugsChart.update();
}

function updatePriceSpreadChart(category, threshold) {
    if (!priceSpreadChart) return;
    
    let filteredDrugs = [...drugPricing]
        .map(d => ({
            ...d,
            spread: d.highest - d.lowest,
            ratio: d.highest / d.lowest
        }));
    
    if (category !== 'all') {
        filteredDrugs = filteredDrugs.filter(d => d.category === category);
    }
    
    filteredDrugs = filteredDrugs
        .filter(d => d.ratio >= threshold)
        .sort((a, b) => b.ratio - a.ratio)
        .slice(0, 20);
    
    priceSpreadChart.data.labels = filteredDrugs.map(d => truncateLabel(d.name, 30));
    priceSpreadChart.data.datasets[0].data = filteredDrugs.map(d => d.lowest);
    priceSpreadChart.data.datasets[1].data = filteredDrugs.map(d => d.median);
    priceSpreadChart.data.datasets[2].data = filteredDrugs.map(d => d.highest);
    priceSpreadChart.update();
}

function updateFacilityCharts(sortBy, region) {
    let filteredFacilities = [...facilityData];
    
    if (region !== 'all') {
        filteredFacilities = filteredFacilities.filter(f => f.region === region);
    }
    
    // Sort based on criteria
    switch (sortBy) {
        case 'avgCost':
            filteredFacilities.sort((a, b) => a.avgUnitCost - b.avgUnitCost);
            break;
        case 'genericRate':
            filteredFacilities.sort((a, b) => b.genericRate - a.genericRate);
            break;
        case 'flaggedDrugs':
            filteredFacilities.sort((a, b) => b.flaggedDrugs - a.flaggedDrugs);
            break;
        case 'volume':
            filteredFacilities.sort((a, b) => b.totalVolume - a.totalVolume);
            break;
    }
    
    // Update facility ranking chart
    if (facilityRankingChart) {
        const bgColors = filteredFacilities.map(f => {
            if (f.avgUnitCost < 4) return colors.success;
            if (f.avgUnitCost < 6) return colors.warning;
            return colors.danger;
        });
        
        facilityRankingChart.data.labels = filteredFacilities.map(f => truncateLabel(f.name, 25));
        facilityRankingChart.data.datasets[0].data = filteredFacilities.map(f => f.avgUnitCost);
        facilityRankingChart.data.datasets[0].backgroundColor = bgColors;
        facilityRankingChart.data.datasets[0].borderColor = bgColors;
        facilityRankingChart.update();
    }
    
    // Update generic rate chart
    if (genericRateChart) {
        const sortedByRate = [...filteredFacilities].sort((a, b) => b.genericRate - a.genericRate);
        const bgColors = sortedByRate.map(f => {
            if (f.genericRate >= 90) return colors.success;
            if (f.genericRate >= 80) return colors.warning;
            return colors.danger;
        });
        
        genericRateChart.data.labels = sortedByRate.map(f => truncateLabel(f.name, 25));
        genericRateChart.data.datasets[0].data = sortedByRate.map(f => f.genericRate);
        genericRateChart.data.datasets[0].backgroundColor = bgColors;
        genericRateChart.data.datasets[0].borderColor = bgColors;
        genericRateChart.update();
    }
}

// Export for app.js
window.chartFunctions = {
    initializeCharts,
    updateTopDrugsChart,
    updatePriceSpreadChart,
    updateFacilityCharts,
    formatNumber
};
