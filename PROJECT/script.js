let data, output, result;
async function init(){
  
  let link = "covid.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
let q = 0, bk = 0, bx = 0, m = 0, s = 0;
function ByBorough() {
    let q = 0, bk = 0, bx = 0, m = 0, s = 0;

    for (let i = 0; i < data.length; i++) {
        let complaint = data[i];

        if (complaint.qn_case_count != "0") q+=parseInt(complaint.qn_case_count);
        console.log(q)
        if (complaint.mn_case_count != "0") m+=parseInt(complaint.mn_case_count);
        if (complaint.bk_case_count != "0") bk+=parseInt(complaint.bk_case_count);
        if (complaint.bx_case_count != "0") bx+=parseInt(complaint.bx_case_count);
        if (complaint.si_case_count != "0") s+=parseInt(complaint.si_case_count);
    }

    let chartData = [
        ["QUEENS", q],
        ["MANHATTAN", m],
        ["BROOKLYN", bk],
        ["BRONX", bx],
        ["STATEN ISLAND", s]
    ];

    let chartType = document.getElementById("chartType").value;

    displayChart(chartData, "output", chartType);
}
  
 

function filterByBorough() {
    let borough = document
        .getElementById("borough")
        .value
        .toUpperCase();
    let output = document.getElementById("output");
    let result = document.getElementById("result");

    let build = "";
    let ct = 0;

    for (let i = 0; i < data.length; i+=1) {

        let complaint = data[i];
        let boroughCases = 0;

        if (borough === "BRONX")
            boroughCases = complaint.bx_case_count;
        else if (borough == "BROOKLYN")
            boroughCases = complaint.bk_case_count;
        else if (borough == "MANHATTAN")
            boroughCases = complaint.mn_case_count;
        else if (borough == "QUEENS")
            boroughCases = complaint.qn_case_count;
        else if (borough == "STATEN ISLAND")
            boroughCases = complaint.si_case_count;

        if (boroughCases != "0") {
            build += `
                <div class="fitted card">
                    <h3>${complaint.date_of_interest}</h3>
                    <hr>
                    <p>${borough}: ${boroughCases}</p>
                    <p>Total Cases: ${complaint.case_count}</p>
                    <p>Deaths: ${complaint.death_count}</p>
                    <p>Hospitalized: ${complaint.hospitalized_count}</p>
                    <hr>
                    <p>7 Day Avg Cases: ${complaint.all_case_count_7day_avg}</p>
                    <p>7 Day Avg Deaths: ${complaint.death_count_7day_avg}</p>
                </div>
            `;
            ct+= 1
        }
    }

    result.innerHTML = `${ct} Results found.`;
    output.innerHTML = build;
}