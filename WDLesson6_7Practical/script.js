let data;
async function init(){


  let link = "collision.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
         <h3>${complaint.contributing_factor_vehicle_1}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.zip_code}</p>
                 <p>${complaint.on_street_name}</p>
                 <hr>
                 <p>Total People Injured: ${complaint.number_of_persons_injured}</p>
                 <p>Total People Killed: ${complaint.number_of_persons_killed}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <hr>
                 <p>${complaint.vehicle_type_code1}</p>
              </div>` 
  }
      output.innerHTML = build;
  }

  function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;


for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                  <h3>${complaint.contributing_factor_vehicle_1}</h3>
                  <hr>
                  <p>${complaint.borough}</p>
                  <p>${complaint.zip_code}</p>
                  <p>${complaint.on_street_name}</p>
                  <hr>
                  <p>${complaint.crash_date}</p>
                  <hr>
                  <p>${complaint.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
