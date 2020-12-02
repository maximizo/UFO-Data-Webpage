// from data.js
var tableData = data;

// Level 1
// select tbody
var tbody = d3.select('tbody');

// make table 
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        var row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
           var cell = row.append('td');
           cell.text(val);
       });
    })
}

// return table 
buildTable(tableData);

// Level 2
// Activate 'filter' button
d3.selectAll('#filter-btn').on('click', handleClick);

// Create button function
function handleClick(){
    d3.event.preventDefault();
    let date = d3.select('#datetime').property('value');
    let filterData = tableData;
    if(date){
        filterData = filterData.filter((row) => row.datetime === date);
        }
        buildTable(filterData);
    }

// return table
    buildTable(tableData);
    