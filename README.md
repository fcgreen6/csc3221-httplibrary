# csc3221-httplibrary
coreHTTP.js:
- This file has been completley revised to include a class structure, use of the fetch API, and async/await syntax.
- When a request is called from script.js, the coreHTTP class is updated to hold the error state and request content as data members.
- If there is an error, the request content is updated to contain an error message related to status.

script.js:
- I have updated script.js to reflect the use of class data members.
- Specific Changes:
  - Changed the output of successful post, put, and delete requests. The user interface will output any confirmation returned from the server and display a success message.
  - Consolidated post, put, and delete request processing into a single function to reduce redundancy.
  - Process request functions are called with class data members as a promise is no longer returned.
  - Changed error output to be the content data member of my class. If there is an error, the content data member is updated to contain an error message related to status.
