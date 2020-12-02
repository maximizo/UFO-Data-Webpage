// from data.js
var tableData = data;

// select tbody
let tbody = d3.select("tbody");

// make table from provided data
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    })
}

// 
buildTable(tableData);

