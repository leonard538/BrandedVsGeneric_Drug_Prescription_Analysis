// ============================================
// QUARTERLY DATA STRUCTURE FOR CMA COMPLIANCE
// ============================================

// Drug Cost and Quantity Data - Q1 2025
const drugCostQuantityQ1 = [
    { name: "Metformin 500mg tablet", unitCost: 0.32, quantity: 4200000, category: "Antidiabetic" },
    { name: "Amlodipine 50mg tablet", unitCost: 0.12, quantity: 1400000, category: "Antihypertensive" },
    { name: "Losartan 50mg tablet", unitCost: 0.38, quantity: 1350000, category: "Antihypertensive" },
    { name: "Cetirizine 10mg tablet", unitCost: 0.33, quantity: 45000, category: "Antihistamine" },
    { name: "Paracetamol 500mg tablet", unitCost: 0.55, quantity: 480000, category: "Analgesic" },
    { name: "Ascorbic Acid 500mg tablet", unitCost: 0.52, quantity: 450000, category: "Vitamin" },
    { name: "Mefenamic Acid 250mg capsule", unitCost: 0.85, quantity: 48000, category: "Analgesic" },
    { name: "Albendazole 400mg chewable", unitCost: 0.95, quantity: 22000000, category: "Antiparasitic" },
    { name: "Multivitamins capsule", unitCost: 1.05, quantity: 480000, category: "Vitamin" },
    { name: "Doxycycline 100mg capsule", unitCost: 1.32, quantity: 230000, category: "Antibiotic" },
    { name: "Carbamazepine 200mg tablet", unitCost: 1.55, quantity: 1400000, category: "Antiepileptic" },
    { name: "Fluoxetine 20mg capsule", unitCost: 1.52, quantity: 380000, category: "Antidepressant" },
    { name: "Escitalopram 10mg tablet", unitCost: 1.85, quantity: 700000, category: "Antidepressant" },
    { name: "Haloperidol 5mg tablet", unitCost: 1.92, quantity: 480000, category: "Antipsychotic" },
    { name: "Chlorpromazine 200mg tablet", unitCost: 2.02, quantity: 1400000, category: "Antipsychotic" },
    { name: "Sertraline 50mg tablet", unitCost: 2.95, quantity: 650000, category: "Antidepressant" },
    { name: "Biperiden 2mg tablet", unitCost: 3.45, quantity: 1850000, category: "Antiparkinson" },
    { name: "Olanzapine 10mg tablet", unitCost: 3.55, quantity: 650000, category: "Antipsychotic" },
    { name: "Dolutegravir 50mg tablet", unitCost: 3.60, quantity: 1400000, category: "Antiretroviral" },
    { name: "Clonidine 75mcg tablet", unitCost: 4.05, quantity: 22000, category: "Antihypertensive" },
    { name: "Clozapine 100mg tablet", unitCost: 4.10, quantity: 1400000, category: "Antipsychotic" },
    { name: "Cloxacillin 500mg capsule", unitCost: 3.58, quantity: 11000, category: "Antibiotic" },
    { name: "Lamotrigine 100mg tablet", unitCost: 4.92, quantity: 140000, category: "Antiepileptic" },
    { name: "Letrozole 2.5mg tablet", unitCost: 6.10, quantity: 80000, category: "Anticancer" },
    { name: "Levetiracetam 500mg tablet", unitCost: 6.25, quantity: 78000, category: "Antiepileptic" },
    { name: "Donepezil 10mg tablet", unitCost: 6.55, quantity: 70000, category: "Anti-Alzheimer" },
    { name: "Clindamycin 300mg tablet", unitCost: 6.90, quantity: 12000, category: "Antibiotic" },
    { name: "Emtricitabine+Tenofovir 200+300mg", unitCost: 7.15, quantity: 1950000, category: "Antiretroviral" },
    { name: "Divalproex Sodium 250mg ER", unitCost: 7.45, quantity: 560000, category: "Antiepileptic" },
    { name: "Oxcarbazepine 300mg tablet", unitCost: 8.35, quantity: 33000, category: "Antiepileptic" },
    { name: "Sodium Valproate 300+145mg CR", unitCost: 8.15, quantity: 530000, category: "Antiepileptic" },
    { name: "Cefuroxime 500mg tablet", unitCost: 11.20, quantity: 46000, category: "Antibiotic" },
    { name: "Tamoxifen 20mg tablet", unitCost: 11.55, quantity: 65000, category: "Anticancer" },
    { name: "Lopinavir+Ritonavir 200+50mg", unitCost: 10.85, quantity: 1620000, category: "Antiretroviral" },
    { name: "Abacavir 100mg tablet", unitCost: 14.45, quantity: 425000, category: "Antiretroviral" },
    { name: "Capecitabine 500mg tablet", unitCost: 16.80, quantity: 148000, category: "Anticancer" },
    { name: "Memantine 10mg tablet", unitCost: 17.30, quantity: 115000, category: "Anti-Alzheimer" },
    { name: "Oseltamivir 75mg capsule", unitCost: 19.50, quantity: 2380000, category: "Antiviral" },
    { name: "Ceftriaxone 1g vial", unitCost: 22.00, quantity: 28000, category: "Antibiotic" },
    { name: "Imatinib 100mg tablet", unitCost: 35.50, quantity: 20000, category: "Anticancer" },
    { name: "Fluconazole 200mg capsule", unitCost: 52.50, quantity: 66000, category: "Antifungal" },
    { name: "Daclatasvir 60mg tablet", unitCost: 52.20, quantity: 91000, category: "Antiviral" },
    { name: "Sofosbuvir 400mg tablet", unitCost: 62.00, quantity: 91000, category: "Antiviral" },
    { name: "Valganciclovir 450mg tablet", unitCost: 89.50, quantity: 75000, category: "Antiviral" }
];

// Drug Cost and Quantity Data - Q2 2025
const drugCostQuantityQ2 = [
    { name: "Metformin 500mg tablet", unitCost: 0.28, quantity: 4800000, category: "Antidiabetic" },
    { name: "Amlodipine 50mg tablet", unitCost: 0.09, quantity: 1600000, category: "Antihypertensive" },
    { name: "Losartan 50mg tablet", unitCost: 0.34, quantity: 1650000, category: "Antihypertensive" },
    { name: "Cetirizine 10mg tablet", unitCost: 0.29, quantity: 55000, category: "Antihistamine" },
    { name: "Paracetamol 500mg tablet", unitCost: 0.49, quantity: 520000, category: "Analgesic" },
    { name: "Ascorbic Acid 500mg tablet", unitCost: 0.48, quantity: 550000, category: "Vitamin" },
    { name: "Mefenamic Acid 250mg capsule", unitCost: 0.75, quantity: 52000, category: "Analgesic" },
    { name: "Albendazole 400mg chewable", unitCost: 0.89, quantity: 25856300, category: "Antiparasitic" },
    { name: "Multivitamins capsule", unitCost: 0.98, quantity: 520000, category: "Vitamin" },
    { name: "Doxycycline 100mg capsule", unitCost: 1.24, quantity: 270000, category: "Antibiotic" },
    { name: "Carbamazepine 200mg tablet", unitCost: 1.45, quantity: 1600000, category: "Antiepileptic" },
    { name: "Fluoxetine 20mg capsule", unitCost: 1.44, quantity: 420000, category: "Antidepressant" },
    { name: "Escitalopram 10mg tablet", unitCost: 1.75, quantity: 800000, category: "Antidepressant" },
    { name: "Haloperidol 5mg tablet", unitCost: 1.82, quantity: 531400, category: "Antipsychotic" },
    { name: "Chlorpromazine 200mg tablet", unitCost: 1.92, quantity: 1600000, category: "Antipsychotic" },
    { name: "Sertraline 50mg tablet", unitCost: 2.85, quantity: 750000, category: "Antidepressant" },
    { name: "Biperiden 2mg tablet", unitCost: 3.35, quantity: 2150000, category: "Antiparkinson" },
    { name: "Olanzapine 10mg tablet", unitCost: 3.42, quantity: 750000, category: "Antipsychotic" },
    { name: "Dolutegravir 50mg tablet", unitCost: 3.52, quantity: 1621210, category: "Antiretroviral" },
    { name: "Clonidine 75mcg tablet", unitCost: 3.92, quantity: 28000, category: "Antihypertensive" },
    { name: "Clozapine 100mg tablet", unitCost: 3.90, quantity: 1600000, category: "Antipsychotic" },
    { name: "Cloxacillin 500mg capsule", unitCost: 3.46, quantity: 14000, category: "Antibiotic" },
    { name: "Lamotrigine 100mg tablet", unitCost: 4.78, quantity: 160000, category: "Antiepileptic" },
    { name: "Letrozole 2.5mg tablet", unitCost: 5.90, quantity: 93000, category: "Anticancer" },
    { name: "Levetiracetam 500mg tablet", unitCost: 6.05, quantity: 92000, category: "Antiepileptic" },
    { name: "Donepezil 10mg tablet", unitCost: 6.42, quantity: 80000, category: "Anti-Alzheimer" },
    { name: "Clindamycin 300mg tablet", unitCost: 6.70, quantity: 13000, category: "Antibiotic" },
    { name: "Emtricitabine+Tenofovir 200+300mg", unitCost: 6.95, quantity: 2261400, category: "Antiretroviral" },
    { name: "Divalproex Sodium 250mg ER", unitCost: 7.25, quantity: 640000, category: "Antiepileptic" },
    { name: "Oxcarbazepine 300mg tablet", unitCost: 8.15, quantity: 39727, category: "Antiepileptic" },
    { name: "Sodium Valproate 300+145mg CR", unitCost: 7.85, quantity: 620000, category: "Antiepileptic" },
    { name: "Cefuroxime 500mg tablet", unitCost: 10.55, quantity: 54000, category: "Antibiotic" },
    { name: "Tamoxifen 20mg tablet", unitCost: 11.08, quantity: 74600, category: "Anticancer" },
    { name: "Lopinavir+Ritonavir 200+50mg", unitCost: 10.45, quantity: 1872000, category: "Antiretroviral" },
    { name: "Abacavir 100mg tablet", unitCost: 13.92, quantity: 493000, category: "Antiretroviral" },
    { name: "Capecitabine 500mg tablet", unitCost: 16.20, quantity: 172500, category: "Anticancer" },
    { name: "Memantine 10mg tablet", unitCost: 16.70, quantity: 135000, category: "Anti-Alzheimer" },
    { name: "Oseltamivir 75mg capsule", unitCost: 18.75, quantity: 2749250, category: "Antiviral" },
    { name: "Ceftriaxone 1g vial", unitCost: 21.00, quantity: 34150, category: "Antibiotic" },
    { name: "Imatinib 100mg tablet", unitCost: 34.28, quantity: 24000, category: "Anticancer" },
    { name: "Fluconazole 200mg capsule", unitCost: 49.50, quantity: 77000, category: "Antifungal" },
    { name: "Daclatasvir 60mg tablet", unitCost: 50.00, quantity: 105000, category: "Antiviral" },
    { name: "Sofosbuvir 400mg tablet", unitCost: 59.15, quantity: 105000, category: "Antiviral" },
    { name: "Valganciclovir 450mg tablet", unitCost: 85.50, quantity: 87000, category: "Antiviral" }
];

// Combined Data (calculated dynamically)
let drugCostQuantity = [];

// Function to get combined data
function getCombinedDrugCostQuantity() {
    const combined = {};
    
    // Aggregate Q1
    drugCostQuantityQ1.forEach(drug => {
        if (!combined[drug.name]) {
            combined[drug.name] = { ...drug, quantity: 0, totalCost: 0, count: 0 };
        }
        combined[drug.name].quantity += drug.quantity;
        combined[drug.name].totalCost += drug.unitCost * drug.quantity;
        combined[drug.name].count++;
    });
    
    // Aggregate Q2
    drugCostQuantityQ2.forEach(drug => {
        if (!combined[drug.name]) {
            combined[drug.name] = { ...drug, quantity: 0, totalCost: 0, count: 0 };
        }
        combined[drug.name].quantity += drug.quantity;
        combined[drug.name].totalCost += drug.unitCost * drug.quantity;
        combined[drug.name].count++;
    });
    
    // Calculate weighted average unit cost
    return Object.values(combined).map(drug => ({
        name: drug.name,
        unitCost: drug.totalCost / drug.quantity, // weighted average
        quantity: drug.quantity,
        category: drug.category
    }));
}

// Initialize combined data
drugCostQuantity = getCombinedDrugCostQuantity();

// Drug Pricing Data - Q1 2025
const drugPricingQ1 = [
    { name: "Amlodipine 10mg Tablet", lowest: 0.28, median: 0.50, highest: 19.50, category: "Antihypertensive" },
    { name: "Amlodipine 5mg Tablet", lowest: 0.21, median: 0.36, highest: 4.80, category: "Antihypertensive" },
    { name: "Metformin 500mg Tablet", lowest: 0.27, median: 0.48, highest: 3.75, category: "Antidiabetic" },
    { name: "Losartan 50mg Tablet", lowest: 0.32, median: 0.58, highest: 8.50, category: "Antihypertensive" },
    { name: "Atorvastatin 10mg Tablet", lowest: 0.95, median: 2.05, highest: 6.30, category: "Antilipidemic" },
    { name: "Atorvastatin 20mg Tablet", lowest: 1.05, median: 2.10, highest: 8.20, category: "Antilipidemic" },
    { name: "Atorvastatin 40mg Tablet", lowest: 0.23, median: 4.00, highest: 25.50, category: "Antilipidemic" },
    { name: "Atorvastatin 80mg Tablet", lowest: 2.45, median: 7.80, highest: 31.00, category: "Antilipidemic" },
    { name: "Omeprazole 20mg Capsule", lowest: 0.48, median: 1.28, highest: 16.00, category: "Antacid" },
    { name: "Pantoprazole 40mg Tablet", lowest: 0.85, median: 2.65, highest: 19.00, category: "Antacid" },
    { name: "Amoxicillin 500mg Capsule", lowest: 1.42, median: 1.95, highest: 4.20, category: "Antibiotic" },
    { name: "Azithromycin 500mg Tablet", lowest: 5.50, median: 9.20, highest: 125.00, category: "Antibiotic" },
    { name: "Cefixime 200mg Capsule", lowest: 4.90, median: 7.25, highest: 50.00, category: "Antibiotic" },
    { name: "Cefalexin 500mg Capsule", lowest: 2.65, median: 4.35, highest: 30.00, category: "Antibiotic" },
    { name: "Carbamazepine 200mg Tablet", lowest: 1.80, median: 3.15, highest: 3.95, category: "Antiepileptic" },
    { name: "Phenytoin 100mg Capsule", lowest: 1.28, median: 2.65, highest: 9.00, category: "Antiepileptic" },
    { name: "Valproic Acid 250mg Tablet", lowest: 2.15, median: 4.75, highest: 12.80, category: "Antiepileptic" },
    { name: "Captopril 25mg Tablet", lowest: 0.42, median: 1.00, highest: 2.55, category: "Antihypertensive" },
    { name: "Enalapril 10mg Tablet", lowest: 0.55, median: 1.28, highest: 5.30, category: "Antihypertensive" },
    { name: "Lisinopril 10mg Tablet", lowest: 0.48, median: 1.60, highest: 8.50, category: "Antihypertensive" },
    { name: "Simvastatin 20mg Tablet", lowest: 0.85, median: 2.15, highest: 12.80, category: "Antilipidemic" },
    { name: "Simvastatin 40mg Tablet", lowest: 1.08, median: 3.70, highest: 19.00, category: "Antilipidemic" },
    { name: "Glimepiride 2mg Tablet", lowest: 0.65, median: 1.92, highest: 8.50, category: "Antidiabetic" },
    { name: "Gliclazide 80mg Tablet", lowest: 1.58, median: 3.40, highest: 10.60, category: "Antidiabetic" },
    { name: "Insulin Regular 100IU/mL Vial", lowest: 110.00, median: 258.00, highest: 600.00, category: "Antidiabetic" },
    { name: "Salbutamol 2mg Tablet", lowest: 0.28, median: 0.55, highest: 2.70, category: "Bronchodilator" },
    { name: "Salbutamol MDI 100mcg/dose", lowest: 85.00, median: 160.00, highest: 370.00, category: "Bronchodilator" },
    { name: "Prednisone 5mg Tablet", lowest: 0.55, median: 1.28, highest: 5.30, category: "Corticosteroid" },
    { name: "Dexamethasone 4mg Tablet", lowest: 1.08, median: 2.65, highest: 8.50, category: "Corticosteroid" },
    { name: "Ibuprofen 400mg Tablet", lowest: 0.45, median: 0.88, highest: 3.80, category: "Analgesic" },
    { name: "Mefenamic Acid 500mg Capsule", lowest: 0.85, median: 1.60, highest: 6.40, category: "Analgesic" },
    { name: "Tramadol 50mg Capsule", lowest: 2.15, median: 4.80, highest: 16.00, category: "Analgesic" },
    { name: "Ciprofloxacin 500mg Tablet", lowest: 1.60, median: 3.70, highest: 26.50, category: "Antibiotic" },
    { name: "Levofloxacin 500mg Tablet", lowest: 2.15, median: 8.50, highest: 48.00, category: "Antibiotic" },
    { name: "Clindamycin 300mg Capsule", lowest: 4.80, median: 8.40, highest: 26.50, category: "Antibiotic" },
    { name: "Fluoxetine 20mg Capsule", lowest: 0.88, median: 2.65, highest: 12.80, category: "Antidepressant" },
    { name: "Sertraline 50mg Tablet", lowest: 1.60, median: 4.25, highest: 19.00, category: "Antidepressant" },
    { name: "Escitalopram 10mg Tablet", lowest: 1.08, median: 5.30, highest: 26.50, category: "Antidepressant" },
    { name: "Risperidone 2mg Tablet", lowest: 1.28, median: 3.70, highest: 16.00, category: "Antipsychotic" },
    { name: "Olanzapine 10mg Tablet", lowest: 2.15, median: 8.50, highest: 37.00, category: "Antipsychotic" }
];

// Drug Pricing Data - Q2 2025
const drugPricingQ2 = [
    { name: "Amlodipine 10mg Tablet", lowest: 0.24, median: 0.42, highest: 17.00, category: "Antihypertensive" },
    { name: "Amlodipine 5mg Tablet", lowest: 0.17, median: 0.30, highest: 4.20, category: "Antihypertensive" },
    { name: "Metformin 500mg Tablet", lowest: 0.23, median: 0.42, highest: 3.25, category: "Antidiabetic" },
    { name: "Losartan 50mg Tablet", lowest: 0.28, median: 0.52, highest: 7.50, category: "Antihypertensive" },
    { name: "Atorvastatin 10mg Tablet", lowest: 0.85, median: 1.88, highest: 5.70, category: "Antilipidemic" },
    { name: "Atorvastatin 20mg Tablet", lowest: 0.95, median: 1.86, highest: 7.40, category: "Antilipidemic" },
    { name: "Atorvastatin 40mg Tablet", lowest: 0.19, median: 3.60, highest: 22.90, category: "Antilipidemic" },
    { name: "Atorvastatin 80mg Tablet", lowest: 2.18, median: 7.20, highest: 28.00, category: "Antilipidemic" },
    { name: "Omeprazole 20mg Capsule", lowest: 0.42, median: 1.12, highest: 14.00, category: "Antacid" },
    { name: "Pantoprazole 40mg Tablet", lowest: 0.75, median: 2.35, highest: 17.00, category: "Antacid" },
    { name: "Amoxicillin 500mg Capsule", lowest: 1.34, median: 1.80, highest: 3.80, category: "Antibiotic" },
    { name: "Azithromycin 500mg Tablet", lowest: 5.08, median: 8.50, highest: 115.00, category: "Antibiotic" },
    { name: "Cefixime 200mg Capsule", lowest: 4.50, median: 6.72, highest: 45.00, category: "Antibiotic" },
    { name: "Cefalexin 500mg Capsule", lowest: 2.35, median: 3.98, highest: 27.50, category: "Antibiotic" },
    { name: "Carbamazepine 200mg Tablet", lowest: 1.70, median: 2.85, highest: 3.60, category: "Antiepileptic" },
    { name: "Phenytoin 100mg Capsule", lowest: 1.12, median: 2.35, highest: 8.00, category: "Antiepileptic" },
    { name: "Valproic Acid 250mg Tablet", lowest: 1.85, median: 4.25, highest: 11.20, category: "Antiepileptic" },
    { name: "Captopril 25mg Tablet", lowest: 0.34, median: 0.90, highest: 2.25, category: "Antihypertensive" },
    { name: "Enalapril 10mg Tablet", lowest: 0.45, median: 1.12, highest: 4.70, category: "Antihypertensive" },
    { name: "Lisinopril 10mg Tablet", lowest: 0.42, median: 1.40, highest: 7.50, category: "Antihypertensive" },
    { name: "Simvastatin 20mg Tablet", lowest: 0.75, median: 1.85, highest: 11.20, category: "Antilipidemic" },
    { name: "Simvastatin 40mg Tablet", lowest: 0.92, median: 3.30, highest: 17.00, category: "Antilipidemic" },
    { name: "Glimepiride 2mg Tablet", lowest: 0.55, median: 1.68, highest: 7.50, category: "Antidiabetic" },
    { name: "Gliclazide 80mg Tablet", lowest: 1.42, median: 3.00, highest: 9.40, category: "Antidiabetic" },
    { name: "Insulin Regular 100IU/mL Vial", lowest: 100.00, median: 234.00, highest: 550.00, category: "Antidiabetic" },
    { name: "Salbutamol 2mg Tablet", lowest: 0.22, median: 0.45, highest: 2.30, category: "Bronchodilator" },
    { name: "Salbutamol MDI 100mcg/dose", lowest: 75.00, median: 140.00, highest: 330.00, category: "Bronchodilator" },
    { name: "Prednisone 5mg Tablet", lowest: 0.45, median: 1.12, highest: 4.70, category: "Corticosteroid" },
    { name: "Dexamethasone 4mg Tablet", lowest: 0.92, median: 2.35, highest: 7.50, category: "Corticosteroid" },
    { name: "Ibuprofen 400mg Tablet", lowest: 0.35, median: 0.72, highest: 3.20, category: "Analgesic" },
    { name: "Mefenamic Acid 500mg Capsule", lowest: 0.75, median: 1.40, highest: 5.60, category: "Analgesic" },
    { name: "Tramadol 50mg Capsule", lowest: 1.85, median: 4.20, highest: 14.00, category: "Analgesic" },
    { name: "Ciprofloxacin 500mg Tablet", lowest: 1.40, median: 3.30, highest: 23.50, category: "Antibiotic" },
    { name: "Levofloxacin 500mg Tablet", lowest: 1.85, median: 7.50, highest: 42.00, category: "Antibiotic" },
    { name: "Clindamycin 300mg Capsule", lowest: 4.20, median: 7.60, highest: 23.50, category: "Antibiotic" },
    { name: "Fluoxetine 20mg Capsule", lowest: 0.72, median: 2.35, highest: 11.20, category: "Antidepressant" },
    { name: "Sertraline 50mg Tablet", lowest: 1.40, median: 3.75, highest: 17.00, category: "Antidepressant" },
    { name: "Escitalopram 10mg Tablet", lowest: 0.92, median: 4.70, highest: 23.50, category: "Antidepressant" },
    { name: "Risperidone 2mg Tablet", lowest: 1.12, median: 3.30, highest: 14.00, category: "Antipsychotic" },
    { name: "Olanzapine 10mg Tablet", lowest: 1.85, median: 7.50, highest: 33.00, category: "Antipsychotic" }
];

// Combined Drug Pricing Data
let drugPricing = [];

// Function to get combined pricing data
function getCombinedDrugPricing() {
    const combined = {};
    
    // Process Q1
    drugPricingQ1.forEach(drug => {
        if (!combined[drug.name]) {
            combined[drug.name] = { 
                name: drug.name,
                category: drug.category,
                lowest: drug.lowest, 
                highestMedian: drug.median,
                highest: drug.highest,
                medians: [drug.median]
            };
        }
    });
    
    // Process Q2 and compare
    drugPricingQ2.forEach(drug => {
        if (combined[drug.name]) {
            combined[drug.name].lowest = Math.min(combined[drug.name].lowest, drug.lowest);
            combined[drug.name].highest = Math.max(combined[drug.name].highest, drug.highest);
            combined[drug.name].medians.push(drug.median);
        } else {
            combined[drug.name] = { 
                name: drug.name,
                category: drug.category,
                lowest: drug.lowest, 
                highest: drug.highest,
                medians: [drug.median]
            };
        }
    });
    
    // Calculate average median
    return Object.values(combined).map(drug => ({
        name: drug.name,
        category: drug.category,
        lowest: drug.lowest,
        median: drug.medians.reduce((a, b) => a + b, 0) / drug.medians.length,
        highest: drug.highest
    }));
}

// Initialize combined pricing
drugPricing = getCombinedDrugPricing();

// Facility Data - Q1 2025
const facilityDataQ1 = [
    { id: "F001", name: "Region I Medical Center", region: "Region I", avgUnitCost: 4.45, totalVolume: 395000, genericRate: 91.2, flaggedDrugs: 3 },
    { id: "F002", name: "Region II Provincial Hospital", region: "Region II", avgUnitCost: 3.95, totalVolume: 285000, genericRate: 93.5, flaggedDrugs: 2 },
    { id: "F003", name: "NCR General Hospital", region: "NCR", avgUnitCost: 8.95, totalVolume: 1150000, genericRate: 73.8, flaggedDrugs: 9 },
    { id: "F004", name: "Region III Medical Center", region: "Region III", avgUnitCost: 5.45, totalVolume: 550000, genericRate: 86.8, flaggedDrugs: 5 },
    { id: "F005", name: "Region IV-A General Hospital", region: "Region IV-A", avgUnitCost: 7.15, totalVolume: 820000, genericRate: 80.5, flaggedDrugs: 6 },
    { id: "F006", name: "Region V Provincial Hospital", region: "Region V", avgUnitCost: 3.65, totalVolume: 220000, genericRate: 95.0, flaggedDrugs: 1 },
    { id: "F007", name: "Region VI Medical Center", region: "Region VI", avgUnitCost: 5.10, totalVolume: 330000, genericRate: 88.2, flaggedDrugs: 4 },
    { id: "F008", name: "Region VII General Hospital", region: "Region VII", avgUnitCost: 7.55, totalVolume: 450000, genericRate: 76.8, flaggedDrugs: 7 },
    { id: "F009", name: "Region VIII Provincial Hospital", region: "Region VIII", avgUnitCost: 3.35, totalVolume: 175000, genericRate: 96.2, flaggedDrugs: 1 },
    { id: "F010", name: "Region IX Medical Center", region: "Region IX", avgUnitCost: 4.28, totalVolume: 240000, genericRate: 90.5, flaggedDrugs: 3 },
    { id: "F011", name: "Region X General Hospital", region: "Region X", avgUnitCost: 5.85, totalVolume: 315000, genericRate: 83.8, flaggedDrugs: 5 },
    { id: "F012", name: "Region XI Medical Center", region: "Region XI", avgUnitCost: 4.95, totalVolume: 410000, genericRate: 88.8, flaggedDrugs: 4 },
    { id: "F013", name: "Region XII Provincial Hospital", region: "Region XII", avgUnitCost: 4.08, totalVolume: 205000, genericRate: 92.2, flaggedDrugs: 2 },
    { id: "F014", name: "CAR General Hospital", region: "CAR", avgUnitCost: 4.60, totalVolume: 145000, genericRate: 89.5, flaggedDrugs: 3 },
    { id: "F015", name: "Caraga Medical Center", region: "Caraga", avgUnitCost: 3.80, totalVolume: 190000, genericRate: 94.2, flaggedDrugs: 2 },
    { id: "F016", name: "BARMM Provincial Hospital", region: "BARMM", avgUnitCost: 3.45, totalVolume: 128000, genericRate: 95.8, flaggedDrugs: 1 },
    { id: "F017", name: "NCR City Hospital", region: "NCR", avgUnitCost: 9.65, totalVolume: 690000, genericRate: 70.5, flaggedDrugs: 10 },
    { id: "F018", name: "Region IV-B District Hospital", region: "Region IV-B", avgUnitCost: 4.02, totalVolume: 132000, genericRate: 93.0, flaggedDrugs: 2 }
];

// Facility Data - Q2 2025
const facilityDataQ2 = [
    { id: "F001", name: "Region I Medical Center", region: "Region I", avgUnitCost: 4.05, totalVolume: 455000, genericRate: 93.8, flaggedDrugs: 1 },
    { id: "F002", name: "Region II Provincial Hospital", region: "Region II", avgUnitCost: 3.65, totalVolume: 335000, genericRate: 96.2, flaggedDrugs: 0 },
    { id: "F003", name: "NCR General Hospital", region: "NCR", avgUnitCost: 8.05, totalVolume: 1350000, genericRate: 76.5, flaggedDrugs: 7 },
    { id: "F004", name: "Region III Medical Center", region: "Region III", avgUnitCost: 4.95, totalVolume: 650000, genericRate: 89.8, flaggedDrugs: 3 },
    { id: "F005", name: "Region IV-A General Hospital", region: "Region IV-A", avgUnitCost: 6.45, totalVolume: 980000, genericRate: 83.8, flaggedDrugs: 4 },
    { id: "F006", name: "Region V Provincial Hospital", region: "Region V", avgUnitCost: 3.35, totalVolume: 260000, genericRate: 97.5, flaggedDrugs: 0 },
    { id: "F007", name: "Region VI Medical Center", region: "Region VI", avgUnitCost: 4.70, totalVolume: 390000, genericRate: 91.2, flaggedDrugs: 2 },
    { id: "F008", name: "Region VII General Hospital", region: "Region VII", avgUnitCost: 6.85, totalVolume: 530000, genericRate: 80.2, flaggedDrugs: 5 },
    { id: "F009", name: "Region VIII Provincial Hospital", region: "Region VIII", avgUnitCost: 3.05, totalVolume: 205000, genericRate: 98.0, flaggedDrugs: 0 },
    { id: "F010", name: "Region IX Medical Center", region: "Region IX", avgUnitCost: 3.92, totalVolume: 280000, genericRate: 93.2, flaggedDrugs: 1 },
    { id: "F011", name: "Region X General Hospital", region: "Region X", avgUnitCost: 5.35, totalVolume: 365000, genericRate: 87.0, flaggedDrugs: 3 },
    { id: "F012", name: "Region XI Medical Center", region: "Region XI", avgUnitCost: 4.55, totalVolume: 480000, genericRate: 91.5, flaggedDrugs: 2 },
    { id: "F013", name: "Region XII Provincial Hospital", region: "Region XII", avgUnitCost: 3.72, totalVolume: 245000, genericRate: 95.0, flaggedDrugs: 0 },
    { id: "F014", name: "CAR General Hospital", region: "CAR", avgUnitCost: 4.20, totalVolume: 175000, genericRate: 92.5, flaggedDrugs: 1 },
    { id: "F015", name: "Caraga Medical Center", region: "Caraga", avgUnitCost: 3.50, totalVolume: 220000, genericRate: 96.8, flaggedDrugs: 0 },
    { id: "F016", name: "BARMM Provincial Hospital", region: "BARMM", avgUnitCost: 3.15, totalVolume: 152000, genericRate: 97.8, flaggedDrugs: 0 },
    { id: "F017", name: "NCR City Hospital", region: "NCR", avgUnitCost: 8.75, totalVolume: 810000, genericRate: 74.2, flaggedDrugs: 8 },
    { id: "F018", name: "Region IV-B District Hospital", region: "Region IV-B", avgUnitCost: 3.68, totalVolume: 158000, genericRate: 95.5, flaggedDrugs: 0 }
];

// Combined Facility Data
let facilityData = [];

// Function to get combined facility data
function getCombinedFacilityData() {
    const combined = {};
    
    // Process Q1
    facilityDataQ1.forEach(facility => {
        combined[facility.id] = {
            ...facility,
            totalCost: facility.avgUnitCost * facility.totalVolume,
            totalGenericRate: facility.genericRate,
            totalVolume: facility.totalVolume,
            totalFlagged: facility.flaggedDrugs,
            count: 1
        };
    });
    
    // Process Q2 and aggregate
    facilityDataQ2.forEach(facility => {
        if (combined[facility.id]) {
            combined[facility.id].totalCost += facility.avgUnitCost * facility.totalVolume;
            combined[facility.id].totalGenericRate += facility.genericRate;
            combined[facility.id].totalVolume += facility.totalVolume;
            combined[facility.id].totalFlagged += facility.flaggedDrugs;
            combined[facility.id].count++;
        }
    });
    
    // Calculate averages
    return Object.values(combined).map(facility => ({
        id: facility.id,
        name: facility.name,
        region: facility.region,
        avgUnitCost: facility.totalCost / facility.totalVolume,
        totalVolume: facility.totalVolume,
        genericRate: facility.totalGenericRate / facility.count,
        flaggedDrugs: Math.round(facility.totalFlagged / facility.count)
    }));
}

// Initialize combined facility data
facilityData = getCombinedFacilityData();

// Compliance Risk Flags - Q1 2025
const riskFlagsQ1 = [
    { drugName: "Azithromycin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 14, priceRatio: 22.7 },
    { drugName: "Atorvastatin 40mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 10, priceRatio: 110.9 },
    { drugName: "Cefixime 200mg Capsule", issue: "Price Spread >10x", severity: "high", facilityCount: 8, priceRatio: 10.2 },
    { drugName: "Olanzapine 10mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 7, priceRatio: 17.2 },
    { drugName: "Levofloxacin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 9, priceRatio: 22.3 },
    { drugName: "Escitalopram 10mg Tablet", issue: "High Volume + High Cost", severity: "medium", facilityCount: 6, priceRatio: 24.5 },
    { drugName: "Insulin Regular 100IU/mL", issue: "High Volume + High Cost", severity: "medium", facilityCount: 4, priceRatio: 5.5 },
    { drugName: "Salbutamol MDI 100mcg", issue: "Price Above Reference", severity: "medium", facilityCount: 11, priceRatio: 4.4 },
    { drugName: "Simvastatin 40mg Tablet", issue: "Price Spread >5x", severity: "low", facilityCount: 5, priceRatio: 17.6 },
    { drugName: "Tramadol 50mg Capsule", issue: "Price Spread >5x", severity: "low", facilityCount: 4, priceRatio: 7.4 },
    { drugName: "Risperidone 2mg Tablet", issue: "Price Spread >5x", severity: "low", facilityCount: 3, priceRatio: 12.5 }
];

// Compliance Risk Flags - Q2 2025
const riskFlagsQ2 = [
    { drugName: "Azithromycin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 10, priceRatio: 22.6 },
    { drugName: "Atorvastatin 40mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 6, priceRatio: 120.5 },
    { drugName: "Cefixime 200mg Capsule", issue: "Price Spread >10x", severity: "medium", facilityCount: 4, priceRatio: 10.0 },
    { drugName: "Olanzapine 10mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 3, priceRatio: 17.8 },
    { drugName: "Levofloxacin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 5, priceRatio: 22.7 },
    { drugName: "Escitalopram 10mg Tablet", issue: "High Volume + High Cost", severity: "medium", facilityCount: 2, priceRatio: 25.5 },
    { drugName: "Insulin Regular 100IU/mL", issue: "High Volume + High Cost", severity: "medium", facilityCount: 2, priceRatio: 5.5 },
    { drugName: "Salbutamol MDI 100mcg", issue: "Price Above Reference", severity: "low", facilityCount: 7, priceRatio: 4.4 },
    { drugName: "Simvastatin 40mg Tablet", issue: "Price Spread >5x", severity: "low", facilityCount: 3, priceRatio: 18.5 }
];

// Combined Risk Flags
let riskFlags = [];

// Function to get combined risk flags
function getCombinedRiskFlags() {
    const combined = {};
    
    // Process Q1
    riskFlagsQ1.forEach(flag => {
        const key = flag.drugName;
        if (!combined[key]) {
            combined[key] = { ...flag, totalFacilities: flag.facilityCount, priceRatios: [flag.priceRatio] };
        }
    });
    
    // Process Q2 and aggregate
    riskFlagsQ2.forEach(flag => {
        const key = flag.drugName;
        if (combined[key]) {
            combined[key].totalFacilities = Math.max(combined[key].totalFacilities, flag.facilityCount);
            combined[key].priceRatios.push(flag.priceRatio);
            // Use highest severity
            if (flag.severity === 'high' || combined[key].severity === 'high') {
                combined[key].severity = 'high';
            } else if (flag.severity === 'medium' || combined[key].severity === 'medium') {
                combined[key].severity = 'medium';
            }
        } else {
            combined[key] = { ...flag, totalFacilities: flag.facilityCount, priceRatios: [flag.priceRatio] };
        }
    });
    
    // Calculate averages
    return Object.values(combined).map(flag => ({
        drugName: flag.drugName,
        issue: flag.issue,
        severity: flag.severity,
        facilityCount: flag.totalFacilities,
        priceRatio: flag.priceRatios.reduce((a, b) => a + b, 0) / flag.priceRatios.length
    }));
}

// Initialize combined risk flags
riskFlags = getCombinedRiskFlags();

// National Reference Prices (CMA benchmark)
const nationalReferencePrices = {
    "Amlodipine 5mg Tablet": 0.35,
    "Amlodipine 10mg Tablet": 0.50,
    "Metformin 500mg Tablet": 0.40,
    "Losartan 50mg Tablet": 0.50,
    "Atorvastatin 10mg Tablet": 1.50,
    "Atorvastatin 20mg Tablet": 2.00,
    "Atorvastatin 40mg Tablet": 3.00,
    "Simvastatin 20mg Tablet": 1.80,
    "Simvastatin 40mg Tablet": 2.50,
    "Omeprazole 20mg Capsule": 1.00,
    "Amoxicillin 500mg Capsule": 2.00,
    "Azithromycin 500mg Tablet": 10.00,
    "Captopril 25mg Tablet": 0.80,
    "Glimepiride 2mg Tablet": 1.50,
    "Gliclazide 80mg Tablet": 2.50,
    "Salbutamol 2mg Tablet": 0.40,
    "Ibuprofen 400mg Tablet": 0.70,
    "Paracetamol 500mg Tablet": 0.50,
    "Cetirizine 10mg Tablet": 0.35,
    "Prednisone 5mg Tablet": 1.00
};

// Generic Price Threshold (CMA-compliant)
const GENERIC_PRICE_THRESHOLD = 5.00; // Drugs below this are considered low-cost generics

// Current selected quarter (default: all)
let currentQuarter = 'all';

// Function to switch quarter data
function switchQuarterData(quarter) {
    currentQuarter = quarter;
    
    switch (quarter) {
        case 'q1-2025':
            drugCostQuantity = [...drugCostQuantityQ1];
            drugPricing = [...drugPricingQ1];
            facilityData = [...facilityDataQ1];
            riskFlags = [...riskFlagsQ1];
            break;
        case 'q2-2025':
            drugCostQuantity = [...drugCostQuantityQ2];
            drugPricing = [...drugPricingQ2];
            facilityData = [...facilityDataQ2];
            riskFlags = [...riskFlagsQ2];
            break;
        case 'all':
        default:
            drugCostQuantity = getCombinedDrugCostQuantity();
            drugPricing = getCombinedDrugPricing();
            facilityData = getCombinedFacilityData();
            riskFlags = getCombinedRiskFlags();
            break;
    }
    
    return {
        drugCostQuantity,
        drugPricing,
        facilityData,
        riskFlags
    };
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        drugCostQuantityQ1,
        drugCostQuantityQ2,
        drugCostQuantity,
        drugPricingQ1,
        drugPricingQ2,
        drugPricing,
        facilityDataQ1,
        facilityDataQ2,
        facilityData,
        riskFlagsQ1,
        riskFlagsQ2,
        riskFlags,
        nationalReferencePrices,
        GENERIC_PRICE_THRESHOLD,
        switchQuarterData,
        getCombinedDrugCostQuantity,
        getCombinedDrugPricing,
        getCombinedFacilityData,
        getCombinedRiskFlags
    };
}
