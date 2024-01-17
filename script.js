/*
API - application program interface
- API call
fetch API
the Fetch API provides an interface for fething (sending/receiving) resources.

it uses Request and Response objects.

The fetch() method is used tp fetch a resource (data).

let promise = fetch(url,[optons])
*/


/*
 Uderstading Trems

 * AJAX is Asyncronous JS & XML 
 * JSON is JavaScript Object Nation
 
 * json() method : returns a second promise that resolves with the result o;f parsing the response body text as JSON.(input is JSON, output is JS object) 
*/

// using async await ->

// const URL = "https://cat-fact.herokuapp.com/facts";

// const factpara = document.querySelector("#fact");

// const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

// const getFacts = async () => {
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response); //JSON mormat.
//     // console.log(response.status);
//     let data = await response.json();
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].text);
//     // factpara.innerText = data[0].text; 
//     // factpara.innerText = data[1].text; 
//     factpara.innerText = data[2].text; 
// }; 

//==============================

// using promise chain

const URL = "https://cat-fact.herokuapp.com/facts";

const factpara = document.querySelector("#fact");

const btn = document.querySelector("#btn");

function getFacts() {
    fetch(URL)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        console.log(data);
        factpara.innerText = data[2].text; 
        });
}

btn.addEventListener("click", getFacts);

//==============================

/*
HTTp - hyper text transfer protocal.
Requests & Response

HTTP Verbs

Response Status Code

* HTTP response headers also contain details about the Responses,such as content type,HTTP status code etc.
*/


