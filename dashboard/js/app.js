// Main Application JavaScript
// CMA Compliance Dashboard - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTabs();
    initCharts();
    initTables();
    initFilters();
    initHeatmap();
    updateKPIs();
    
    console.log('CMA Compliance Dashboard initialized successfully');
});

// Tab Navigation
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Initialize Charts
function initCharts() {
    if (window.chartFunctions && window.chartFunctions.initializeCharts) {
        window.chartFunctions.initializeCharts();
    }
}

// Initialize Data Tables
function initTables() {
    populateHighCostDrugsTable();
    populatePriceSpreadTable();
    populateFacilityTable();
    populateRiskFlagsTable();
}

// Populate High Cost Drugs Table
function populateHighCostDrugsTable() {
    const tbody = document.querySelector('#highCostDrugsTable tbody');
    if (!tbody) return;
    
    // Filter high volume, high cost drugs
    const highCostDrugs = drugCostQuantity
        .filter(drug => drug.unitCost > 10 && drug.quantity > 100000)
        .sort((a, b) => (b.quantity * b.unitCost) - (a.quantity * a.unitCost))
        .slice(0, 10);
    
    tbody.innerHTML = highCostDrugs.map(drug => {
        const totalValue = drug.quantity * drug.unitCost;
        const status = drug.unitCost > 50 ? 'high-risk' : 'review';
        const statusText = drug.unitCost > 50 ? 'High Risk' : 'Review Needed';
        
        return `
            <tr onclick="showDrugDetails('${drug.name}')">
                <td><strong>${drug.name}</strong></td>
                <td>${drug.category}</td>
                <td>₱${drug.unitCost.toFixed(2)}</td>
                <td>${formatNumber(drug.quantity)}</td>
                <td>₱${formatNumber(totalValue)}</td>
                <td><span class="status-badge ${status}"><i class="fas fa-exclamation-circle"></i> ${statusText}</span></td>
            </tr>
        `;
    }).join('');
}

// Populate Price Spread Table
function populatePriceSpreadTable() {
    const tbody = document.querySelector('#priceSpreadTable tbody');
    if (!tbody) return;
    
    const drugsWithSpread = drugPricing.map(drug => ({
        ...drug,
        spread: drug.highest - drug.lowest,
        ratio: drug.highest / drug.lowest
    })).sort((a, b) => b.ratio - a.ratio);
    
    tbody.innerHTML = drugsWithSpread.map(drug => {
        const flagClass = drug.ratio > 10 ? 'red' : drug.ratio > 5 ? 'orange' : 'green';
        const flagIcon = drug.ratio > 10 ? 'times-circle' : drug.ratio > 5 ? 'exclamation-circle' : 'check-circle';
        
        return `
            <tr onclick="showDrugDetails('${drug.name}')">
                <td><strong>${drug.name}</strong></td>
                <td>${drug.category}</td>
                <td>₱${drug.lowest.toFixed(2)}</td>
                <td>₱${drug.median.toFixed(2)}</td>
                <td>₱${drug.highest.toFixed(2)}</td>
                <td>₱${drug.spread.toFixed(2)}</td>
                <td><strong>${drug.ratio.toFixed(1)}x</strong></td>
                <td><span class="flag-indicator ${flagClass}"><i class="fas fa-${flagIcon}"></i></span></td>
            </tr>
        `;
    }).join('');
}

// Populate Facility Table
function populateFacilityTable() {
    const tbody = document.querySelector('#facilityTable tbody');
    if (!tbody) return;
    
    const sortedFacilities = [...facilityData].sort((a, b) => a.avgUnitCost - b.avgUnitCost);
    
    tbody.innerHTML = sortedFacilities.map((facility, index) => {
        let status, statusClass;
        if (facility.genericRate >= 90 && facility.flaggedDrugs <= 2) {
            status = 'Compliant';
            statusClass = 'compliant';
        } else if (facility.genericRate >= 80 && facility.flaggedDrugs <= 5) {
            status = 'Review Needed';
            statusClass = 'review';
        } else {
            status = 'High Risk';
            statusClass = 'high-risk';
        }
        
        return `
            <tr>
                <td><strong>#${index + 1}</strong></td>
                <td>${facility.name}</td>
                <td>${facility.region}</td>
                <td>₱${facility.avgUnitCost.toFixed(2)}</td>
                <td>${facility.genericRate}%</td>
                <td>${formatNumber(facility.totalVolume)}</td>
                <td>${facility.flaggedDrugs}</td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
            </tr>
        `;
    }).join('');
}

// Populate Risk Flags Table
function populateRiskFlagsTable() {
    const tbody = document.querySelector('#riskFlagsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = riskFlags.map(flag => {
        const severityClass = `severity-${flag.severity}`;
        const action = flag.severity === 'high' ? 'Immediate Review' : 
                       flag.severity === 'medium' ? 'Schedule Audit' : 'Monitor';
        
        return `
            <tr>
                <td><strong>${flag.drugName}</strong></td>
                <td>${flag.issue}</td>
                <td class="${severityClass}">${flag.severity.toUpperCase()}</td>
                <td>${flag.priceRatio.toFixed(1)}x</td>
                <td>${flag.facilityCount}</td>
                <td><button class="btn-action" onclick="scheduleAction('${flag.drugName}')">${action}</button></td>
            </tr>
        `;
    }).join('');
    
    // Update risk counts
    document.getElementById('high-risk-count').textContent = riskFlags.filter(r => r.severity === 'high').length;
    document.getElementById('medium-risk-count').textContent = riskFlags.filter(r => r.severity === 'medium').length;
    document.getElementById('low-risk-count').textContent = riskFlags.filter(r => r.severity === 'low').length;
}

// Initialize Filters
function initFilters() {
    // Chart filter buttons
    document.querySelectorAll('.chart-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest('.chart-filters');
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            if (window.chartFunctions && window.chartFunctions.updateTopDrugsChart) {
                window.chartFunctions.updateTopDrugsChart(filter);
            }
        });
    });
    
    // Category filter for price spread
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', updatePriceSpreadFilters);
    }
    
    // Ratio threshold slider
    const ratioThreshold = document.getElementById('ratio-threshold');
    if (ratioThreshold) {
        ratioThreshold.addEventListener('input', (e) => {
            document.getElementById('ratio-value').textContent = e.target.value + 'x';
            updatePriceSpreadFilters();
        });
    }
    
    // Facility filters
    const facilitySort = document.getElementById('facility-sort');
    const regionFilter = document.getElementById('region-filter');
    
    if (facilitySort) {
        facilitySort.addEventListener('change', updateFacilityFilters);
    }
    if (regionFilter) {
        regionFilter.addEventListener('change', updateFacilityFilters);
    }
    
    // Drug search
    const drugSearch = document.getElementById('drug-search');
    if (drugSearch) {
        drugSearch.addEventListener('input', (e) => {
            filterPriceSpreadTable(e.target.value);
        });
    }
}

function updatePriceSpreadFilters() {
    const category = document.getElementById('category-filter')?.value || 'all';
    const threshold = parseInt(document.getElementById('ratio-threshold')?.value || 5);
    
    if (window.chartFunctions && window.chartFunctions.updatePriceSpreadChart) {
        window.chartFunctions.updatePriceSpreadChart(category, threshold);
    }
}

function updateFacilityFilters() {
    const sortBy = document.getElementById('facility-sort')?.value || 'avgCost';
    const region = document.getElementById('region-filter')?.value || 'all';
    
    if (window.chartFunctions && window.chartFunctions.updateFacilityCharts) {
        window.chartFunctions.updateFacilityCharts(sortBy, region);
    }
    
    // Also update the table
    updateFacilityTable(sortBy, region);
}

function updateFacilityTable(sortBy, region) {
    const tbody = document.querySelector('#facilityTable tbody');
    if (!tbody) return;
    
    let filteredFacilities = [...facilityData];
    
    if (region !== 'all') {
        filteredFacilities = filteredFacilities.filter(f => f.region === region);
    }
    
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
    
    tbody.innerHTML = filteredFacilities.map((facility, index) => {
        let status, statusClass;
        if (facility.genericRate >= 90 && facility.flaggedDrugs <= 2) {
            status = 'Compliant';
            statusClass = 'compliant';
        } else if (facility.genericRate >= 80 && facility.flaggedDrugs <= 5) {
            status = 'Review Needed';
            statusClass = 'review';
        } else {
            status = 'High Risk';
            statusClass = 'high-risk';
        }
        
        return `
            <tr>
                <td><strong>#${index + 1}</strong></td>
                <td>${facility.name}</td>
                <td>${facility.region}</td>
                <td>₱${facility.avgUnitCost.toFixed(2)}</td>
                <td>${facility.genericRate}%</td>
                <td>${formatNumber(facility.totalVolume)}</td>
                <td>${facility.flaggedDrugs}</td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
            </tr>
        `;
    }).join('');
}

function filterPriceSpreadTable(searchTerm) {
    const tbody = document.querySelector('#priceSpreadTable tbody');
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    const term = searchTerm.toLowerCase();
    
    rows.forEach(row => {
        const drugName = row.querySelector('td:first-child')?.textContent.toLowerCase() || '';
        const category = row.querySelector('td:nth-child(2)')?.textContent.toLowerCase() || '';
        
        if (drugName.includes(term) || category.includes(term)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Initialize Regional Heatmap
function initHeatmap() {
    const container = document.getElementById('regionHeatmap');
    if (!container) return;
    
    // Calculate regional averages from facility data
    const regions = {};
    facilityData.forEach(facility => {
        if (!regions[facility.region]) {
            regions[facility.region] = { total: 0, count: 0 };
        }
        regions[facility.region].total += facility.genericRate;
        regions[facility.region].count++;
    });
    
    const regionAverages = Object.entries(regions).map(([name, data]) => ({
        name,
        avgRate: data.total / data.count
    })).sort((a, b) => b.avgRate - a.avgRate);
    
    container.innerHTML = regionAverages.map(region => {
        const rate = region.avgRate;
        let bgColor;
        if (rate >= 90) bgColor = '#10b981';
        else if (rate >= 85) bgColor = '#22c55e';
        else if (rate >= 80) bgColor = '#f59e0b';
        else if (rate >= 75) bgColor = '#f97316';
        else bgColor = '#ef4444';
        
        return `
            <div class="heatmap-cell" style="background-color: ${bgColor};" onclick="filterByRegion('${region.name}')">
                <div class="region-name">${region.name}</div>
                <div class="region-value">${rate.toFixed(1)}%</div>
            </div>
        `;
    }).join('');
}

// Update KPI Values
function updateKPIs() {
    // Calculate average generic rate
    const avgGenericRate = facilityData.reduce((sum, f) => sum + f.genericRate, 0) / facilityData.length;
    document.getElementById('kpi-generic-rate').textContent = avgGenericRate.toFixed(1) + '%';
    
    // Calculate average unit cost
    const avgCost = facilityData.reduce((sum, f) => sum + f.avgUnitCost, 0) / facilityData.length;
    document.getElementById('kpi-avg-cost').textContent = '₱' + avgCost.toFixed(2);
    
    // Count flagged drugs
    document.getElementById('kpi-flagged-drugs').textContent = riskFlags.length;
    
    // Count high-risk facilities
    const highRiskFacilities = facilityData.filter(f => f.genericRate < 80 || f.flaggedDrugs > 5).length;
    document.getElementById('kpi-risk-facilities').textContent = highRiskFacilities;
}

// Helper Functions
function formatNumber(num) {
    if (window.chartFunctions && window.chartFunctions.formatNumber) {
        return window.chartFunctions.formatNumber(num);
    }
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
}

// Modal Functions
function showDrugDetails(drugName) {
    const modal = document.getElementById('drugModal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Find drug in data
    const costData = drugCostQuantity.find(d => d.name === drugName);
    const priceData = drugPricing.find(d => d.name === drugName);
    const refPrice = nationalReferencePrices[drugName];
    
    modalTitle.textContent = drugName;
    
    let content = '<div class="drug-details">';
    
    if (costData) {
        content += `
            <div class="detail-section">
                <h4>Procurement Data</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">Category:</span>
                        <span class="value">${costData.category}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Unit Cost:</span>
                        <span class="value">₱${costData.unitCost.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Quantity Dispensed:</span>
                        <span class="value">${formatNumber(costData.quantity)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Total Value:</span>
                        <span class="value">₱${formatNumber(costData.quantity * costData.unitCost)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (priceData) {
        const ratio = priceData.highest / priceData.lowest;
        content += `
            <div class="detail-section">
                <h4>Price Analysis</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">Lowest Price:</span>
                        <span class="value">₱${priceData.lowest.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Median Price:</span>
                        <span class="value">₱${priceData.median.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Highest Price:</span>
                        <span class="value">₱${priceData.highest.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Price Ratio:</span>
                        <span class="value ${ratio > 10 ? 'text-danger' : ratio > 5 ? 'text-warning' : ''}">${ratio.toFixed(1)}x</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (refPrice) {
        content += `
            <div class="detail-section">
                <h4>CMA Reference</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">National Reference Price:</span>
                        <span class="value">₱${refPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    content += '</div>';
    modalBody.innerHTML = content;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('drugModal').classList.remove('active');
}

// Click outside modal to close
document.addEventListener('click', (e) => {
    const modal = document.getElementById('drugModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Filter by region from heatmap
function filterByRegion(regionName) {
    // Switch to facility tab
    document.querySelector('[data-tab="facility-ranking"]').click();
    
    // Set the region filter
    const regionFilter = document.getElementById('region-filter');
    if (regionFilter) {
        regionFilter.value = regionName;
        updateFacilityFilters();
    }
}

// Schedule action for risk flag
function scheduleAction(drugName) {
    alert(`Action scheduled for: ${drugName}\n\nA compliance review task has been created and assigned to the procurement audit team.`);
}

// Export Report Function
function exportReport() {
    // Create a summary report
    const report = {
        generatedAt: new Date().toISOString(),
        period: document.getElementById('quarter-select').value,
        summary: {
            avgGenericRate: (facilityData.reduce((sum, f) => sum + f.genericRate, 0) / facilityData.length).toFixed(1) + '%',
            avgUnitCost: '₱' + (facilityData.reduce((sum, f) => sum + f.avgUnitCost, 0) / facilityData.length).toFixed(2),
            totalFlaggedDrugs: riskFlags.length,
            highRiskFacilities: facilityData.filter(f => f.genericRate < 80 || f.flaggedDrugs > 5).length
        },
        riskFlags: riskFlags,
        facilities: facilityData
    };
    
    // Create and download JSON
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `CMA_Compliance_Report_${report.period}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('Report exported successfully!');
}

// Add styles for modal content
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .drug-details {
        padding: 0.5rem 0;
    }
    
    .detail-section {
        margin-bottom: 1.5rem;
    }
    
    .detail-section:last-child {
        margin-bottom: 0;
    }
    
    .detail-section h4 {
        font-size: 0.875rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .detail-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .detail-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    
    .detail-item .label {
        font-size: 0.75rem;
        color: #94a3b8;
    }
    
    .detail-item .value {
        font-size: 1rem;
        font-weight: 600;
        color: #1e293b;
    }
    
    .text-danger {
        color: #ef4444 !important;
    }
    
    .text-warning {
        color: #f59e0b !important;
    }
    
    .btn-action {
        padding: 0.375rem 0.75rem;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        border-radius: 0.375rem;
        font-size: 0.75rem;
        font-weight: 500;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .btn-action:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    
    @media (max-width: 480px) {
        .detail-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(modalStyles);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Tab navigation with numbers
    if (e.key >= '1' && e.key <= '4' && !e.ctrlKey && !e.altKey) {
        const tabs = ['generic-utilization', 'price-spread', 'facility-ranking', 'risk-flags'];
        const index = parseInt(e.key) - 1;
        if (tabs[index]) {
            document.querySelector(`[data-tab="${tabs[index]}"]`)?.click();
        }
    }
});

// Console welcome message
console.log('%c CMA Compliance Dashboard ', 'background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; font-size: 14px; padding: 10px 20px; border-radius: 4px;');
console.log('%c Cheaper Medicines Act (RA 9502) Audit Tool ', 'color: #64748b; font-size: 12px;');
console.log('%c Keyboard shortcuts: 1-4 for tabs, ESC to close modals ', 'color: #94a3b8; font-size: 11px;');
