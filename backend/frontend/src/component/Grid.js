import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Grid() {
  const defaultColDef = {
    filter: true,
    flex: 1
  };

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    async function getResults() {
      const results = await axios('https://feeder-application.herokuapp.com/feeder/fetch')
      setRowData(results.data);
    }
    getResults()
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'feedTime', headerName: 'Time', valueFormatter: (data) => { return new Date(data.data.feedTime)}},
    { field: 'food', headerName: 'Food' },
    { field: 'place', headerName: 'Place' },
    { field: 'numberOfDucks', headerName: 'Number Of Ducks' },
    { field: 'foodType', headerName: 'Food Type' },
    { field: 'foodWeight', headerName: 'Quantity (In grams)' }
]);


  return  (
    <div
      id="myGrid"
      style={{
        height: "450px",
        width: "95vw"
      }}
      className="ag-theme-alpine-dark"
    >
      <h2>Duck Feeding Information</h2>
      <AgGridReact
        applyColumnDefOrder={true}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        sideBar={{
          toolPanels: [
            {
              id: "filters",
              labelDefault: "Filters",
              labelKey: "filters",
              iconKey: "filter",
              toolPanel: "agFiltersToolPanel",
              toolPanelParams: {
                suppressExpandAll: true,
                suppressFilterSearch: true
              }
            }
          ]
        }}
      />
      
      <a className="link-color" href="" onClick={handleClick}>Go Back</a><br/>
     
    </div>
  );
}
