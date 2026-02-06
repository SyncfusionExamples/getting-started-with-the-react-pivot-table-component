# 📊 Getting Started — React Pivot Table Component (Syncfusion EJ2)

[![License](https://img.shields.io/badge/license-SEE%20LICENSE%20IN%20license-blue.svg)](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf)
[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)](https://react.dev/)
[![Last Updated](https://img.shields.io/github/last-commit/SyncfusionExamples/getting-started-with-the-react-pivot-table-component.svg)](https://github.com/SyncfusionExamples/getting-started-with-the-react-pivot-table-component/commits)
[![Syncfusion Version](https://img.shields.io/badge/Syncfusion%20EJ2-32.1.19-green.svg)](https://www.syncfusion.com/react-components/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-v10%2B-blue.svg)](https://www.npmjs.com/)

> 🚀 **React quick-start template** demonstrating Syncfusion EJ2 `PivotView` (Pivot Table) with **Field List**, **Calculated Fields**, **Data Formatting**, **Multi-level Sorting & Filtering** — includes sample sales data, CLI scripts, and production-ready configuration.

> **📺 Official Demo:** https://ej2.syncfusion.com/react/demos/#/material3/pivot-table/overview  
> **📚 Official Documentation:** https://ej2.syncfusion.com/react/documentation/pivotview/getting-started

---

## 📑 Table of Contents

- [🔍 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [📋 Prerequisites](#-prerequisites)
- [🧭 Quick Start](#-quick-start)
- [🗂️ Project Structure](#-project-structure)
- [🎨 Theming & Styling](#-theming--styling)
- [🧩 Minimal Example](#-minimal-example)
- [⚙️ Configuration & Customization](#-configuration--customization)
- [💡 Usage Examples](#-usage-examples)
- [🔗 Dependencies & Browser Support](#-dependencies--browser-support)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)

---

## 🔍 Overview

This repository provides a **production-ready starter template** for integrating Syncfusion's powerful `PivotView` (Pivot Table) component into your **React applications**. It demonstrates essential pivot table features for real-world business intelligence and data analysis scenarios.

The sample includes:
- ✅ Interactive Pivot Table with comprehensive data analysis
- ✅ Dynamic Field List for runtime field configuration
- ✅ Calculated Fields for custom data computations
- ✅ Data Formatting (currency, percentages, custom formats)
- ✅ Multi-level Sorting and Filtering capabilities
- ✅ Sample sales dataset with real-world data structure
- ✅ Responsive design with Tailwind CSS styling
- ✅ Pre-configured data source with drill-down support

### Who Should Use This?

- 📈 Business analysts building custom reporting tools
- 💼 Enterprise developers creating dashboards and analytics
- 🎓 React developers learning Syncfusion component integration
- 🛠️ Teams migrating from legacy pivot table solutions

---

## ✨ Key Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| 🎯 **Field List Interface** | Dynamically add, remove, and rearrange data fields at runtime | Empowers end-users to customize reports without code modifications |
| 📊 **Flexible Data Binding** | Supports relational data binding with hierarchical structures | Handle complex multi-dimensional business data |
| 🧮 **Calculated Fields** | Create custom formulas combining multiple data fields | Advanced data analysis and business metric computation |
| 💱 **Data Formatting** | Display values in currency, percentages, and custom formats | Professional presentation of numerical data |
| ↕️ **Multi-Level Sorting** | Sort by multiple fields with ascending/descending control | Enhanced data exploration and trend analysis |
| 🔗 **Advanced Filtering** | Filter by single or multiple criteria across all dimensions | Focused data analysis and drill-down exploration |
| 📱 **Responsive Design** | Adapts seamlessly to desktop, tablet, and mobile screens | Universal accessibility across all devices |
| 📤 **Export Functionality** | Export pivot table data to Excel and PDF formats | Generate shareable reports and archives |
| 🎨 **Theme Support** | Multiple Tailwind and Bootstrap themes available | Consistent branding and visual customization |
| ⚡ **Performance Optimized** | Efficient rendering with virtual scrolling | Handle large datasets without performance degradation |

---

## 📋 Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (LTS version 18.x or higher) — [Download](https://nodejs.org/)
- **npm** (v9+) or **yarn** (v1.22+) — Included with Node.js
- **Visual Studio Code** (Recommended) — [Download](https://code.visualstudio.com/download)
- **Git** (For cloning the repository) — [Download](https://git-scm.com/)

### Supported Browsers

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

---

## 🧭 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/getting-started-with-the-react-pivot-table-component.git
cd getting-started-with-the-react-pivot-table-component
```

### 2️⃣ Install Dependencies

#### Using npm:

```bash
npm install
```

#### Using yarn:

```bash
yarn install
```

### 3️⃣ Start the Development Server

#### Using npm:

```bash
npm start
```

#### Using yarn:

```bash
yarn start
```

The application will automatically open in your default browser at:
```
http://localhost:3000
```

---

## 🔗 Dependencies & Browser Support

### Primary Dependencies

```
@syncfusion/ej2-react-pivotview (^26.1.39)
├── @syncfusion/ej2-pivotview
├── @syncfusion/ej2-data
├── @syncfusion/ej2-grids
├── @syncfusion/ej2-excel-export
├── @syncfusion/ej2-pdf-export
├── @syncfusion/ej2-calendars
├── @syncfusion/ej2-charts
├── @syncfusion/ej2-inputs
├── @syncfusion/ej2-buttons
├── @syncfusion/ej2-dropdowns
├── @syncfusion/ej2-lists
├── @syncfusion/ej2-popups
└── @syncfusion/ej2-navigations
```

### Other Project Dependencies

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-scripts": "5.0.1"
}
```

### Browser Compatibility

| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| IE 11 | - | ⚠️ Requires Polyfills |

---

## 🗂️ Project Structure

```
getting-started-with-the-react-pivot-table-component/
├── public/
│   ├── index.html                 # Main HTML entry point
│   ├── manifest.json              # PWA manifest configuration
│   └── robots.txt                 # SEO robots configuration
├── src/
│   ├── App.js                     # Main React component with PivotView
│   ├── App.css                    # Component styling & theme imports
│   ├── App.test.js                # Unit tests for App component
│   ├── datasource.js              # Sample sales data (pivot table dataset)
│   ├── index.js                   # React application entry point
│   ├── index.css                  # Global application styles
│   ├── reportWebVitals.js         # Performance monitoring
│   └── setupTests.js              # Test environment configuration
├── package.json                   # Project dependencies & scripts
├── README.md                       # This file
├── getting-started.md             # Detailed getting started guide
└── .gitignore                      # Git ignore configuration

### Key Files Explained:

- **`src/App.js`** — Core PivotView component with configuration, field list, and calculated fields enabled
- **`src/datasource.js`** — Sample dataset containing sales data across multiple countries
- **`src/App.css`** — Imports all required Syncfusion themes and component styles
```

---

## 🎨 Theming & Styling

### Available Themes

Syncfusion provides multiple professional themes. Update your `src/App.css` to use your preferred theme:

#### Option 1: Tailwind3 Theme (Default - Recommended)
```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-pivotview/styles/tailwind3.css';
```

#### Option 2: Bootstrap5 Theme
Replace `tailwind3.css` with `bootstrap5.css` in all imports

#### Option 3: Material Theme
Replace `tailwind3.css` with `material.css` in all imports

### Custom Styling

Add custom CSS to `src/App.css` after the theme imports:

```css
/* Override Syncfusion defaults */
.e-pivotview {
  background-color: #f5f5f5;
  border-radius: 8px;
}

.e-pivot-button {
  border-color: #007bff;
}
```

---

## 🧩 Minimal Example

Create a basic PivotView with just a few lines of code:

```jsx
import React from 'react';
import { PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import './App.css';

const MinimalPivotApp = () => {
  const dataSourceSettings = {
    dataSource: [
      { Country: 'USA', Product: 'Bike', Amount: 1000, Quantity: 10 },
      { Country: 'USA', Product: 'Car', Amount: 5000, Quantity: 5 },
      { Country: 'Canada', Product: 'Bike', Amount: 800, Quantity: 8 }
    ],
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Product' }],
    values: [{ name: 'Amount', caption: 'Sales Amount' }],
    filters: []
  };

  return (
    <PivotViewComponent 
      id='PivotView' 
      height={350} 
      dataSourceSettings={dataSourceSettings}
      showFieldList={true}
    >
      <Inject services={[FieldList]} />
    </PivotViewComponent>
  );
};

export default MinimalPivotApp;
```

---

## ⚙️ Configuration & Customization

### Essential Properties

```jsx
<PivotViewComponent
  id='PivotView'
  height={350}                      // Display height in pixels
  dataSourceSettings={dataSourceSettings}
  allowCalculatedField={true}       // Enable calculated fields
  showFieldList={true}              // Display field list panel
  showGroupingBar={true}            // Show grouping bar for drag-drop
  allowDrilling={true}              // Enable drill-down functionality
  allowExcelExport={true}           // Enable Excel export
  allowPdfExport={true}             // Enable PDF export
>
  <Inject services={[CalculatedField, FieldList, GroupingBar]} />
</PivotViewComponent>
```

### DataSourceSettings Configuration

```jsx
const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  
  // Field arrangement in axes
  rows: [
    { name: 'Country', caption: 'Country' },
    { name: 'State' }
  ],
  columns: [
    { name: 'Date', caption: 'Fiscal Year' },
    { name: 'Product' }
  ],
  values: [
    { name: 'Amount', caption: 'Total Sales', type: 'Sum' },
    { name: 'Quantity', caption: 'Quantity Sold', type: 'Count' }
  ],
  filters: [],
  
  // Formatting
  formatSettings: [
    { name: 'Amount', format: 'C2' },  // Currency with 2 decimals
    { name: 'Quantity', format: 'N0' } // Number without decimals
  ],
  
  // Drill-down configuration
  drilledMembers: [
    { name: 'Country', items: ['France'] }
  ]
};
```

### Format String Examples

| Format Code | Example Output | Use Case |
|------------|-----------------|----------|
| `C0` | $1,234 | Currency without decimals |
| `C2` | $1,234.56 | Currency with 2 decimals |
| `N0` | 1,234 | General number |
| `N2` | 1,234.56 | Decimal numbers |
| `P0` | 50% | Percentage |
| `P2` | 50.25% | Percentage with decimals |

---

## 💡 Usage Examples

### Example 1: Sales Dashboard with Calculated Fields

```jsx
import { PivotViewComponent, Inject, CalculatedField, FieldList } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';

function SalesDashboard() {
  const dataSourceSettings = {
    dataSource: pivotData,
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Date' }, { name: 'Product' }],
    values: [
      { name: 'Amount', caption: 'Sales' },
      { name: 'Quantity', caption: 'Qty' }
    ],
    formatSettings: [{ name: 'Amount', format: 'C0' }]
  };

  return (
    <div>
      <h1>📊 International Sales Dashboard</h1>
      <PivotViewComponent
        id='SalesPivot'
        height={400}
        dataSourceSettings={dataSourceSettings}
        allowCalculatedField={true}
        showFieldList={true}
      >
        <Inject services={[CalculatedField, FieldList]} />
      </PivotViewComponent>
    </div>
  );
}

export default SalesDashboard;
```

### Example 2: Regional Performance Analysis

```jsx
const regionalSettings = {
  dataSource: pivotData,
  rows: [{ name: 'Country' }, { name: 'State' }],
  columns: [{ name: 'Date' }],
  values: [
    { name: 'Amount', caption: 'Revenue' },
    { name: 'Quantity', caption: 'Units Sold' }
  ],
  filters: [{ name: 'Product', caption: 'Filter by Product' }],
  formatSettings: [{ name: 'Amount', format: 'C2' }],
  drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }]
};
```

### Example 3: Custom Formatting with Conditional Styling

```jsx
const advancedSettings = {
  dataSource: pivotData,
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Product' }],
  values: [{ name: 'Amount', caption: 'Total Amount' }],
  formatSettings: [
    {
      name: 'Amount',
      format: 'C2',
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 3
    }
  ]
};
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow React and ES6+ best practices
- Include comments for complex logic
- Add tests for new features
- Update documentation as needed

---

## 📜 License & Support

### License

This project is licensed under the **Syncfusion Community License**. See the [Syncfusion License](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf) for details.

### Support & Resources

- 📚 **Official Documentation:** [Syncfusion React PivotView](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- 🎬 **Video Tutorials:** [Syncfusion YouTube Channel](https://www.youtube.com/c/SyncfusionInc)
- 💬 **Support Forum:** [Syncfusion Support](https://www.syncfusion.com/forums/react-js2)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/SyncfusionExamples/getting-started-with-the-react-pivot-table-component/issues)
- 📧 **Contact Us:** support@syncfusion.com

### Additional Resources

- 🔗 [Syncfusion React Components](https://www.syncfusion.com/react-components/)
- 📖 [Syncfusion Community](https://www.syncfusion.com/forums/react-js2)
- 🎯 [Getting Started with React](https://ej2.syncfusion.com/react/documentation/getting-started/create-app)

---

## ⚡ Performance Tips

- ✅ Use **virtual scrolling** for large datasets (1000+ rows)
- ✅ Enable **lazy loading** for remote data sources
- ✅ Optimize **format settings** to reduce rendering overhead
- ✅ Use **filter and drill-down** to reduce data volume displayed
- ✅ Consider **server-side aggregation** for very large datasets

---
