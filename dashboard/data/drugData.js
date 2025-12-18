// Drug Cost and Quantity Data (from actual government procurement)
const drugCostQuantity = [
    { name: "Metformin 500mg tablet", unitCost: 0.30, quantity: 9000000, category: "Antidiabetic" },
    { name: "Amlodipine 50mg tablet", unitCost: 0.10, quantity: 3000000, category: "Antihypertensive" },
    { name: "Losartan 50mg tablet", unitCost: 0.36, quantity: 3000000, category: "Antihypertensive" },
    { name: "Cetirizine 10mg tablet", unitCost: 0.31, quantity: 100000, category: "Antihistamine" },
    { name: "Paracetamol 500mg tablet", unitCost: 0.52, quantity: 1000000, category: "Analgesic" },
    { name: "Ascorbic Acid 500mg tablet", unitCost: 0.50, quantity: 1000000, category: "Vitamin" },
    { name: "Mefenamic Acid 250mg capsule", unitCost: 0.80, quantity: 100000, category: "Analgesic" },
    { name: "Albendazole 400mg chewable", unitCost: 0.92, quantity: 47856300, category: "Antiparasitic" },
    { name: "Multivitamins capsule", unitCost: 1.02, quantity: 1000000, category: "Vitamin" },
    { name: "Doxycycline 100mg capsule", unitCost: 1.28, quantity: 500000, category: "Antibiotic" },
    { name: "Carbamazepine 200mg tablet", unitCost: 1.50, quantity: 3000000, category: "Antiepileptic" },
    { name: "Fluoxetine 20mg capsule", unitCost: 1.48, quantity: 800000, category: "Antidepressant" },
    { name: "Escitalopram 10mg tablet", unitCost: 1.80, quantity: 1500000, category: "Antidepressant" },
    { name: "Haloperidol 5mg tablet", unitCost: 1.87, quantity: 1011400, category: "Antipsychotic" },
    { name: "Chlorpromazine 200mg tablet", unitCost: 1.97, quantity: 3000000, category: "Antipsychotic" },
    { name: "Sertraline 50mg tablet", unitCost: 2.90, quantity: 1400000, category: "Antidepressant" },
    { name: "Biperiden 2mg tablet", unitCost: 3.40, quantity: 4000000, category: "Antiparkinson" },
    { name: "Olanzapine 10mg tablet", unitCost: 3.48, quantity: 1400000, category: "Antipsychotic" },
    { name: "Dolutegravir 50mg tablet", unitCost: 3.56, quantity: 3021210, category: "Antiretroviral" },
    { name: "Clonidine 75mcg tablet", unitCost: 3.98, quantity: 50000, category: "Antihypertensive" },
    { name: "Clozapine 100mg tablet", unitCost: 4.00, quantity: 3000000, category: "Antipsychotic" },
    { name: "Cloxacillin 500mg capsule", unitCost: 3.52, quantity: 25000, category: "Antibiotic" },
    { name: "Lamotrigine 100mg tablet", unitCost: 4.85, quantity: 300000, category: "Antiepileptic" },
    { name: "Letrozole 2.5mg tablet", unitCost: 6.00, quantity: 173000, category: "Anticancer" },
    { name: "Levetiracetam 500mg tablet", unitCost: 6.15, quantity: 170000, category: "Antiepileptic" },
    { name: "Donepezil 10mg tablet", unitCost: 6.48, quantity: 150000, category: "Anti-Alzheimer" },
    { name: "Clindamycin 300mg tablet", unitCost: 6.80, quantity: 25000, category: "Antibiotic" },
    { name: "Emtricitabine+Tenofovir 200+300mg", unitCost: 7.04, quantity: 4211400, category: "Antiretroviral" },
    { name: "Divalproex Sodium 250mg ER", unitCost: 7.35, quantity: 1200000, category: "Antiepileptic" },
    { name: "Oxcarbazepine 300mg tablet", unitCost: 8.25, quantity: 72727, category: "Antiepileptic" },
    { name: "Sodium Valproate 300+145mg CR", unitCost: 8.00, quantity: 1150000, category: "Antiepileptic" },
    { name: "Cefuroxime 500mg tablet", unitCost: 10.88, quantity: 100000, category: "Antibiotic" },
    { name: "Tamoxifen 20mg tablet", unitCost: 11.31, quantity: 139600, category: "Anticancer" },
    { name: "Lopinavir+Ritonavir 200+50mg", unitCost: 10.65, quantity: 3492000, category: "Antiretroviral" },
    { name: "Abacavir 100mg tablet", unitCost: 14.18, quantity: 918000, category: "Antiretroviral" },
    { name: "Capecitabine 500mg tablet", unitCost: 16.50, quantity: 320500, category: "Anticancer" },
    { name: "Memantine 10mg tablet", unitCost: 17.00, quantity: 250000, category: "Anti-Alzheimer" },
    { name: "Oseltamivir 75mg capsule", unitCost: 19.11, quantity: 5129250, category: "Antiviral" },
    { name: "Ceftriaxone 1g vial", unitCost: 21.50, quantity: 62150, category: "Antibiotic" },
    { name: "Imatinib 100mg tablet", unitCost: 34.89, quantity: 44000, category: "Anticancer" },
    { name: "Fluconazole 200mg capsule", unitCost: 51.00, quantity: 143000, category: "Antifungal" },
    { name: "Daclatasvir 60mg tablet", unitCost: 51.10, quantity: 196000, category: "Antiviral" },
    { name: "Sofosbuvir 400mg tablet", unitCost: 60.57, quantity: 196000, category: "Antiviral" },
    { name: "Valganciclovir 450mg tablet", unitCost: 87.51, quantity: 162000, category: "Antiviral" }
];

// Drug Pricing Data (for price spread analysis)
const drugPricing = [
    { name: "Amlodipine 10mg Tablet", lowest: 0.26, median: 0.46, highest: 18.30, category: "Antihypertensive" },
    { name: "Amlodipine 5mg Tablet", lowest: 0.19, median: 0.33, highest: 4.50, category: "Antihypertensive" },
    { name: "Metformin 500mg Tablet", lowest: 0.25, median: 0.45, highest: 3.50, category: "Antidiabetic" },
    { name: "Losartan 50mg Tablet", lowest: 0.30, median: 0.55, highest: 8.00, category: "Antihypertensive" },
    { name: "Atorvastatin 10mg Tablet", lowest: 0.90, median: 1.96, highest: 6.00, category: "Antilipidemic" },
    { name: "Atorvastatin 20mg Tablet", lowest: 1.00, median: 1.98, highest: 7.80, category: "Antilipidemic" },
    { name: "Atorvastatin 40mg Tablet", lowest: 0.21, median: 3.80, highest: 24.20, category: "Antilipidemic" },
    { name: "Atorvastatin 80mg Tablet", lowest: 2.31, median: 7.50, highest: 29.50, category: "Antilipidemic" },
    { name: "Omeprazole 20mg Capsule", lowest: 0.45, median: 1.20, highest: 15.00, category: "Antacid" },
    { name: "Pantoprazole 40mg Tablet", lowest: 0.80, median: 2.50, highest: 18.00, category: "Antacid" },
    { name: "Amoxicillin 500mg Capsule", lowest: 1.38, median: 1.87, highest: 4.00, category: "Antibiotic" },
    { name: "Azithromycin 500mg Tablet", lowest: 5.29, median: 8.85, highest: 120.00, category: "Antibiotic" },
    { name: "Cefixime 200mg Capsule", lowest: 4.70, median: 6.98, highest: 47.50, category: "Antibiotic" },
    { name: "Cefalexin 500mg Capsule", lowest: 2.50, median: 4.16, highest: 28.75, category: "Antibiotic" },
    { name: "Carbamazepine 200mg Tablet", lowest: 1.75, median: 3.00, highest: 3.78, category: "Antiepileptic" },
    { name: "Phenytoin 100mg Capsule", lowest: 1.20, median: 2.50, highest: 8.50, category: "Antiepileptic" },
    { name: "Valproic Acid 250mg Tablet", lowest: 2.00, median: 4.50, highest: 12.00, category: "Antiepileptic" },
    { name: "Captopril 25mg Tablet", lowest: 0.38, median: 0.95, highest: 2.40, category: "Antihypertensive" },
    { name: "Enalapril 10mg Tablet", lowest: 0.50, median: 1.20, highest: 5.00, category: "Antihypertensive" },
    { name: "Lisinopril 10mg Tablet", lowest: 0.45, median: 1.50, highest: 8.00, category: "Antihypertensive" },
    { name: "Simvastatin 20mg Tablet", lowest: 0.80, median: 2.00, highest: 12.00, category: "Antilipidemic" },
    { name: "Simvastatin 40mg Tablet", lowest: 1.00, median: 3.50, highest: 18.00, category: "Antilipidemic" },
    { name: "Glimepiride 2mg Tablet", lowest: 0.60, median: 1.80, highest: 8.00, category: "Antidiabetic" },
    { name: "Gliclazide 80mg Tablet", lowest: 1.50, median: 3.20, highest: 10.00, category: "Antidiabetic" },
    { name: "Insulin Regular 100IU/mL Vial", lowest: 104.90, median: 245.81, highest: 575.00, category: "Antidiabetic" },
    { name: "Salbutamol 2mg Tablet", lowest: 0.25, median: 0.50, highest: 2.50, category: "Bronchodilator" },
    { name: "Salbutamol MDI 100mcg/dose", lowest: 80.00, median: 150.00, highest: 350.00, category: "Bronchodilator" },
    { name: "Prednisone 5mg Tablet", lowest: 0.50, median: 1.20, highest: 5.00, category: "Corticosteroid" },
    { name: "Dexamethasone 4mg Tablet", lowest: 1.00, median: 2.50, highest: 8.00, category: "Corticosteroid" },
    { name: "Ibuprofen 400mg Tablet", lowest: 0.40, median: 0.80, highest: 3.50, category: "Analgesic" },
    { name: "Mefenamic Acid 500mg Capsule", lowest: 0.80, median: 1.50, highest: 6.00, category: "Analgesic" },
    { name: "Tramadol 50mg Capsule", lowest: 2.00, median: 4.50, highest: 15.00, category: "Analgesic" },
    { name: "Ciprofloxacin 500mg Tablet", lowest: 1.50, median: 3.50, highest: 25.00, category: "Antibiotic" },
    { name: "Levofloxacin 500mg Tablet", lowest: 2.00, median: 8.00, highest: 45.00, category: "Antibiotic" },
    { name: "Clindamycin 300mg Capsule", lowest: 4.50, median: 8.00, highest: 25.00, category: "Antibiotic" },
    { name: "Fluoxetine 20mg Capsule", lowest: 0.80, median: 2.50, highest: 12.00, category: "Antidepressant" },
    { name: "Sertraline 50mg Tablet", lowest: 1.50, median: 4.00, highest: 18.00, category: "Antidepressant" },
    { name: "Escitalopram 10mg Tablet", lowest: 1.00, median: 5.00, highest: 25.00, category: "Antidepressant" },
    { name: "Risperidone 2mg Tablet", lowest: 1.20, median: 3.50, highest: 15.00, category: "Antipsychotic" },
    { name: "Olanzapine 10mg Tablet", lowest: 2.00, median: 8.00, highest: 35.00, category: "Antipsychotic" }
];

// Facility Data (synthetic but realistic Philippine regions)
const facilityData = [
    { id: "F001", name: "Region I Medical Center", region: "Region I", avgUnitCost: 4.25, totalVolume: 850000, genericRate: 92.5, flaggedDrugs: 2 },
    { id: "F002", name: "Region II Provincial Hospital", region: "Region II", avgUnitCost: 3.80, totalVolume: 620000, genericRate: 94.8, flaggedDrugs: 1 },
    { id: "F003", name: "NCR General Hospital", region: "NCR", avgUnitCost: 8.50, totalVolume: 2500000, genericRate: 75.2, flaggedDrugs: 8 },
    { id: "F004", name: "Region III Medical Center", region: "Region III", avgUnitCost: 5.20, totalVolume: 1200000, genericRate: 88.3, flaggedDrugs: 4 },
    { id: "F005", name: "Region IV-A General Hospital", region: "Region IV-A", avgUnitCost: 6.80, totalVolume: 1800000, genericRate: 82.1, flaggedDrugs: 5 },
    { id: "F006", name: "Region V Provincial Hospital", region: "Region V", avgUnitCost: 3.50, totalVolume: 480000, genericRate: 96.2, flaggedDrugs: 0 },
    { id: "F007", name: "Region VI Medical Center", region: "Region VI", avgUnitCost: 4.90, totalVolume: 720000, genericRate: 89.7, flaggedDrugs: 3 },
    { id: "F008", name: "Region VII General Hospital", region: "Region VII", avgUnitCost: 7.20, totalVolume: 980000, genericRate: 78.5, flaggedDrugs: 6 },
    { id: "F009", name: "Region VIII Provincial Hospital", region: "Region VIII", avgUnitCost: 3.20, totalVolume: 380000, genericRate: 97.1, flaggedDrugs: 0 },
    { id: "F010", name: "Region IX Medical Center", region: "Region IX", avgUnitCost: 4.10, totalVolume: 520000, genericRate: 91.8, flaggedDrugs: 2 },
    { id: "F011", name: "Region X General Hospital", region: "Region X", avgUnitCost: 5.60, totalVolume: 680000, genericRate: 85.4, flaggedDrugs: 4 },
    { id: "F012", name: "Region XI Medical Center", region: "Region XI", avgUnitCost: 4.75, totalVolume: 890000, genericRate: 90.2, flaggedDrugs: 3 },
    { id: "F013", name: "Region XII Provincial Hospital", region: "Region XII", avgUnitCost: 3.90, totalVolume: 450000, genericRate: 93.6, flaggedDrugs: 1 },
    { id: "F014", name: "CAR General Hospital", region: "CAR", avgUnitCost: 4.40, totalVolume: 320000, genericRate: 91.0, flaggedDrugs: 2 },
    { id: "F015", name: "Caraga Medical Center", region: "Caraga", avgUnitCost: 3.65, totalVolume: 410000, genericRate: 95.5, flaggedDrugs: 1 },
    { id: "F016", name: "BARMM Provincial Hospital", region: "BARMM", avgUnitCost: 3.30, totalVolume: 280000, genericRate: 96.8, flaggedDrugs: 0 },
    { id: "F017", name: "NCR City Hospital", region: "NCR", avgUnitCost: 9.20, totalVolume: 1500000, genericRate: 72.3, flaggedDrugs: 9 },
    { id: "F018", name: "Region IV-B District Hospital", region: "Region IV-B", avgUnitCost: 3.85, totalVolume: 290000, genericRate: 94.2, flaggedDrugs: 1 }
];

// Compliance Risk Flags Data
const riskFlags = [
    { drugName: "Azithromycin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 12, priceRatio: 22.7 },
    { drugName: "Atorvastatin 40mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 8, priceRatio: 115.2 },
    { drugName: "Cefixime 200mg Capsule", issue: "Price Spread >10x", severity: "high", facilityCount: 6, priceRatio: 10.1 },
    { drugName: "Olanzapine 10mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 5, priceRatio: 17.5 },
    { drugName: "Levofloxacin 500mg Tablet", issue: "Price Spread >10x", severity: "high", facilityCount: 7, priceRatio: 22.5 },
    { drugName: "Escitalopram 10mg Tablet", issue: "High Volume + High Cost", severity: "medium", facilityCount: 4, priceRatio: 25.0 },
    { drugName: "Insulin Regular 100IU/mL", issue: "High Volume + High Cost", severity: "medium", facilityCount: 3, priceRatio: 5.5 },
    { drugName: "Salbutamol MDI 100mcg", issue: "Price Above Reference", severity: "medium", facilityCount: 9, priceRatio: 4.4 },
    { drugName: "Simvastatin 40mg Tablet", issue: "Price Spread >5x", severity: "low", facilityCount: 4, priceRatio: 18.0 },
    { drugName: "Tramadol 50mg Capsule", issue: "Price Spread >5x", severity: "low", facilityCount: 3, priceRatio: 7.5 }
];

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

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        drugCostQuantity,
        drugPricing,
        facilityData,
        riskFlags,
        nationalReferencePrices,
        GENERIC_PRICE_THRESHOLD
    };
}
