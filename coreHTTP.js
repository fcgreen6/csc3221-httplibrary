/**
 * Simplified HTTP request class using the fetch API. 
 * The class contains get, post, put, and delete methods.
 * The fetch API automatically generates a promise which is returned by the class, containing a response body and error state.
 */
class coreHTTP {

  async get(url) {

    // Get request...
    let response = await fetch(url);

    if (response.ok) {

      // If the get request works, a new promise is returned which resolves as the resulting content.
      return await response.text();
    }
    
    // If the get request does not work, the original promise is returned in an error state.
    return response;
  }

  async post(url, data) {

    // Post request...
    let response = await fetch(url, {
      method: "POST",
      body: data
    });

    if (response.ok) {

      // If the post request works, a new promise is returned containing confirmation from the server.
      return await response.text();
    }
    
    // If the post request does not work, the original promise is returned in an error state.
    return response;
  }

  async put(url, data) {

    // Put request...
    let response = await fetch(url, {
      method: "PUT",
      body: data
    });

    if (response.ok) {

      // If the put request works, a new promise is returned containing confirmation from the server.
      return await response.text();
    }
    
    // If the put request does not work, the original promise is returned in an error state.
    return response;
  }

  async delete(url) {

    // Delete request...
    let response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {

      // If the delete request works, a new promise is returned containing confirmation from the server.
      return await response.text();
    }
    
    // If the delete request does not work, the original promise is returned in an error state.
    return response;
  }
}