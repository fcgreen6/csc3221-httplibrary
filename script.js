// Instantiate the object...
const http = new coreHTTP;

function ProcessGet(err, res) {
  
  let output;

  if (err) {

    // Error message is stored within response content in my class.
    output = `<p>${res}</p>`;
  } else {

    // The following code has not been modified from the class example.
    const users = JSON.parse(res);

    output = "<ul style=\"list-style:none\">";

    users.forEach((user) => {
      output += `<li>User ${user.id} - ${user.name}</li>`
    });

    output += "</ul>";
  }

  document.querySelector("#response").innerHTML = output;
}

function ProcessPostPutDelete(err, res) {
  
  let output;

  if (err) {
    
    // Error message is stored within response content in my class.
    output = `<p>${res}</p>`;
  } else {
    
    // I changed this to just output the server response when data is added successfully.
    output = `<p>Response: ${res}</p><p>(Request successful)</p>`;
  }

  document.querySelector("#response").innerHTML = output;
}

async function sendRequest(reqType, targetURL) {
  
  let data;

  switch (reqType) {
    
    // Changed get syntax to support my class...
    case "get":
      await http.get(targetURL);
      
      /* Error state is stored as a data member within the class. 
      Content contains the response body of the request. If there is an error content contains the error message. */
      ProcessGet(http.error, http.content);
      break;

    // Changed post syntax to support my class...
    case "post":
      data = {name:"Dennis Vickers",
      username:"vickersd",
      email:"vickersd@spu.edu"};
      await http.post(targetURL, data);
      ProcessPostPutDelete(http.error, http.content);
      break;
    
    // Changed put syntax to support my class...
    case "put": 
      data = {id: 1,
      name:"Professor Vickers"};
      await http.put(targetURL, data);
      ProcessPostPutDelete(http.error, http.content);
      break;

    // Changed delete syntax to support my class...
    case "delete":
      await http.delete(targetURL);
      ProcessPostPutDelete(http.error, http.content);
      break;            
  }
}

// Add the listener to the SEND button. This has not been modified from the class example.
document.querySelector("#SendReq").addEventListener("click", (e) => {
  const radioButtons = document.querySelectorAll('input[name="HTTPtype"');
  const route = document.querySelector("#route").value;
  let reqType;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      reqType = radioButton.value;
      break;
    }
  }
  sendRequest(reqType,route);

  e.preventDefault();
});
