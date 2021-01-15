/* Global Variables */
const apiKey='&appid=415520c6bdb771d7f43e7ab3c2b09b7e&units=metric';
let baseURL='http://api.openweathermap.org/data/2.5/weather?zip='


//perform action on clicking on the button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipcode =  document.getElementById('zip').value;
    const feelings =  document.getElementById('feelings').value;
  
 getZip(baseURL,zipcode, apiKey)

 
  .then(function(data){
    
     //Return And Show Alert If City Is Not Found
    if (data.cod != 200){
      return alert(data.message)};

    let d = new Date(data.dt * 1000);
    let date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    postData('/adddata', {temp:data.main.temp,date:date,feelings:feelings});

    updateUI();
    console.log(data);

  })
  
};


// Async GET
const getZip = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+key)
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    };
  };

  // Async POST
  const postData = async (url='',data = {})=>{
  
    const res = await fetch(url,{
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await res.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    };
};

// Async UPDATE UI
  const updateUI = async () => {
    const req = await fetch('/all');
    try{
      const allData = await req.json();
      document.getElementById('date').innerHTML =`Date: ${allData.date}`;
      document.getElementById('temp').innerHTML = `Temp: ${allData.temp} °C`;
      document.getElementById('content').innerHTML = `Feel: ${allData.feelings}`;
  
    }catch(error){
      console.log("error", error);
    };
  };
  


 




