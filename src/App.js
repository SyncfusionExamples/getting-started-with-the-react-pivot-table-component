import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalculatedField, FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
import './App.css';
function App() {
    const dataSourceSettings = {
        columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
    };
    let pivotObj;
    return (
    <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true}>
        <Inject services={[CalculatedField, FieldList]}/>
    </PivotViewComponent>
    );
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);