# 📊 React Pivot Table Sample (Syncfusion EJ2)

[![React](https://img.shields.io/badge/React-19.2.6-blue.svg)](https://react.dev/)
[![Syncfusion](https://img.shields.io/badge/Syncfusion%20EJ2-33.2.6-green.svg)](https://www.syncfusion.com/react-components/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple.svg)](https://vitejs.dev/)

> A **minimal React sample** demonstrating Syncfusion EJ2 `PivotView` with **Field List**, **Calculated Fields**, and **Currency Formatting**. Built with TypeScript, Vite, and includes sample sales data.

> **📺 Official Demo:** https://ej2.syncfusion.com/react/demos/#/material3/pivot-table/overview  
> **📚 Documentation:** https://ej2.syncfusion.com/react/documentation/pivotview/getting-started

---

## 📑 Quick Links

- [🔍 Overview](#-overview)
- [✨ Features](#-features)
- [⚡ Quick Start](#-quick-start)
- [🗂️ Project Structure](#-project-structure)
- [📦 Dependencies](#-dependencies)

---

## 🔍 Overview

A practical React sample showcasing Syncfusion's `PivotView` component. This sample demonstrates:

- **Interactive Pivot Table** with sales data (Country, State, Product, Date, Amount, Quantity)
- **Dynamic Field List** for runtime field configuration
- **Calculated Fields** for custom calculations
- **Currency Formatting** (Amount displayed in currency format)
- **Pre-configured Data Source** with drill-down support for France

### Use Cases

- 📊 Business analytics dashboards
- 💼 Sales data visualization
- 📈 Multi-dimensional data exploration

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🎯 **Field List** | Dynamically configure rows, columns, values, and filters |
| 🧮 **Calculated Fields** | Create custom formulas for advanced analysis |
| 💱 **Currency Formatting** | Amount values displayed in currency format |
| 📊 **Drill-Down Support** | France pre-configured for drill-down exploration |
| 🔄 **Multi-Dimensional Data** | Organized by Country, State, Product, and Date |
| 📏 **Compact & Efficient** | Minimal setup, ready-to-run sample

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** v18+ — [Download](https://nodejs.org/)
- **npm** v9+ (included with Node.js)

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application opens at `http://localhost:5173`

---

## � Dependencies

### Production

```json
{
  "@syncfusion/ej2-react-pivotview": "^33.2.6",
  "react": "^19.2.6",
  "react-dom": "^19.2.6"
}
```

### Development

- TypeScript (~6.0.2)
- Vite (^8.0.12)
- ESLint (^10.3.0)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

## 🗂️ Project Structure

```
getting-started-with-the-react-pivot-table-component/
├── src/
│   ├── App.tsx              # Main React component with PivotView
│   ├── App.css              # Component styling
│   ├── datasource.ts        # Sales dataset (15 records)
│   ├── main.tsx             # React entry point
│   └── index.css             # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

### Key Files

- **src/App.tsx** — PivotView configuration with rows (Country, State), columns (Date, Product), and values (Amount, Quantity)


---

## 📖 Core Implementation

### PivotView Configuration (src/App.tsx)

```tsx
const dataSourceSettings: DataSourceSettingsModel = {
  columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
  dataSource: pivotData as IDataSet[],
  expandAll: false,
  filters: [],
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  rows: [{ name: 'Country' }, { name: 'State' }],
  values: [
    { name: 'Amount', caption: 'Sold Amount' }, 
    { name: 'Quantity', caption: 'Quantity' }
  ]
};
```

- **Rows:** Country, State (hierarchical)
- **Columns:** Date, Product
- **Values:** Amount (currency), Quantity
- **Currency Formatting:** Amount shows as C0 (e.g., $2,100)
- **Drill-Down:** France pre-configured for exploration

### Sample Data Structure

```typescript
{
  Amount: number,
  Country: string,        // Canada, France, Germany, United Kingdom, United States
  Date: string,          // FY 2005-2008
  Product: string,       // Bike, Van, Car
  Quantity: number,
  State: string
}
```

---

## 🚀 Next Steps

1. Modify `src/datasource.ts` to add your own data
2. Update `dataSourceSettings` in `src/App.tsx` for different dimensions
3. Add more field services (`GroupingBar`, `ConditionalFormatting`, etc.) via Inject
4. Enable exports: `allowExcelExport`, `allowPdfExport`

---

## 📚 Resources

- [Syncfusion PivotView Docs](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- [Syncfusion React Components](https://www.syncfusion.com/react-components/)
- [GitHub Issues](https://github.com/SyncfusionExamples/)
