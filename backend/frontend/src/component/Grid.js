import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import axios from 'axios';



export default function Grid() {
  const defaultColDef = {
    filter: true,
    flex: 1
  };

  const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/feeder/fetch`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);


    const getData = () => {
        axios.get(`http://localhost:8080/feeder/fetch`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

  const [columnDefs, setColumnDefs] = useState([
    { field: 'time', header: 'Time', minWidth: 150 },
    { field: 'food', header: 'Food', maxWidth: 90 },
    { field: 'place', header: 'Place', minWidth: 150 },
    { field: 'numberOfDucks', header: 'Number Of Ducks', maxWidth: 90 },
    { field: 'foodType', header: 'Food Type', minWidth: 150 },
    { field: 'quantity', header: 'Quantity (In grams)', minWidth: 150 }
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
      <AgGridReact
        applyColumnDefOrder={true}
        defaultColDef={defaultColDef}
        rowData={APIData.data}
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
    </div>
  );
}
