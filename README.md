# Branded vs Generic Drug Prescription Analysis
## CMA Compliance Audit Dashboard

An interactive dashboard for auditing compliance with the **Cheaper Medicines Act (RA 9502)** in the Philippines. This tool analyzes drug procurement patterns, price spreads, and facility-level compliance to identify potential issues with branded vs generic drug prescriptions.

---

## 📊 Dashboard Features

### A. Generic Availability & Utilization Proxy
- **KPI**: Percentage of drug volume under ₱5/unit threshold
- **Visualization**: Top 15 most dispensed drugs (color-coded by cost)
- **Table**: High-volume drugs with unexpectedly high unit costs

### B. Price Spread Analysis
- **Metrics**: Price spread (Highest − Lowest), Price ratio (Highest / Lowest)
- **Visualization**: Min/Median/Max bar chart for drug prices
- **Interactive**: Filter by category and ratio threshold
- **Flags**: Drugs with abnormally wide price spreads (potential branded/generic mix)

### C. Facility-Level Compliance Ranking
- **Ranked table**: Most to least cost-efficient facilities
- **Regional heatmap**: Color-coded compliance by region
- **Metrics**: Average unit cost, generic utilization rate, flagged drug count

### D. Cheaper Medicines Act Risk Flags
- **High Risk**: Price spread >10x reference
- **Medium Risk**: High volume + high cost combinations
- **Low Risk**: Price spread 5-10x reference
- **Recommendations panel**: Actionable CMA compliance steps

---

## 🚀 How to Run

1. Navigate to the dashboard folder:
   ```
   cd dashboard
   ```

2. Open `index.html` in any modern web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if http-server is installed)
   npx http-server
   ```

3. Access the dashboard at `http://localhost:8000`

---

## 📁 Project Structure

```
Pescription_Analysis/
├── README.md
├── Datasets/
│   ├── drug_cost_quantity.txt      # Drug procurement data
│   ├── drug_pricing.txt            # Drug price spread data
│   └── fhsis_*.txt                 # FHSIS health data files
└── dashboard/
    ├── index.html                  # Main dashboard page
    ├── css/
    │   └── styles.css              # Dashboard styling
    ├── js/
    │   ├── app.js                  # Main application logic
    │   └── charts.js               # Chart.js configurations
    └── data/
        └── drugData.js             # Processed drug data
```

---

## 📈 Data Sources

- **Drug Cost & Quantity**: Government procurement data for essential medicines
- **Drug Pricing**: Market price analysis (lowest, median, highest)
- **Facility Data**: Synthetic but realistic Philippine regional health facilities
- **Reference Prices**: CMA national reference pricing benchmarks

---

## 🔧 Technologies Used

- **HTML5** - Dashboard structure
- **CSS3** - Modern responsive styling with CSS Grid/Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js** - Data visualizations
- **Font Awesome** - Icons

---

## 📋 Compliance Metrics

| Metric | Green (Compliant) | Yellow (Review) | Red (High Risk) |
|--------|-------------------|-----------------|-----------------|
| Generic Rate | ≥90% | 80-89% | <80% |
| Avg Unit Cost | <₱4 | ₱4-6 | >₱6 |
| Price Ratio | <5x | 5-10x | >10x |
| Flagged Drugs | 0-2 | 3-5 | >5 |

---

## 📝 License

This project is for educational and compliance auditing purposes related to the Cheaper Medicines Act (RA 9502) of the Philippines.

---

## 🤝 Contributing

Contributions are welcome! Please ensure any additions align with the CMA compliance audit objectives.
