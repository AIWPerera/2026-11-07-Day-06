console.log("hello");
// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

// }
// let customer1 = new Customer("John Doe", 30, "123 Main St, Anytown, USA");
// let customer2 = new Customer("Jane Smith", 25, "456 Elm St, Othertown, USA");

// console.log(customer1);
// console.log(customer2);

// let Customer = {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St, Anytown, USA",
// }

// console.log(Customer);


// let CustomerList = [
//     {
//         name: "Saman Kumara",
//         age: 30,
//         address:"Colombo, Sri Lanka",
//         itemsDetails: [
//             {
//                 BillNumber: "0001",
//                 item : [
//                     {
//                         itemName: "Item 1",
//                         itemPrice: 100,
//                     },
//                     {
//                         itemName: "Item 2",
//                         itemPrice: 200,
//                     }
//                 ]
//             }

//         ]
//     },
//     {
//         name: "Nimal Perera",
//         age: 25,
//         address:"Kandy, Sri Lanka"
//     },
//     {
//         name: "Sunil Silva",
//         age: 35,
//         address:"Galle, Sri Lanka"
//     },
//     {
//         name: "Rajitha Fernando",
//         age: 40,
//         address:"Matara, Sri Lanka"
//     },
//     {
//         name: "Samantha Perera",
//         age: 30,
//         address:"Colombo, Sri Lanka"
//     }
// ]

// console.log(CustomerList);
// console.log(CustomerList[0].items[0].itemName);



// ----------------- DOM Manipulation (DOM - Document Object Model) -----------------

// console.log(document);

// document.write("<h1>Hello World</h1>");
// document.write("<h2>Hello World</h2>");



// let number = 0;
// function btnClickMeOnAction(){

//     title.innerText = "Saman Kumara - " + number++;
// }

// -- Number Count APP -- 

// let number = 0;
// function btnIncrementOnAction(){
//   number++;
//   numberCount.innerText = "Number Count - " +number;
// }

// function btnDecrementOnAction(){
//    number--;
//    numberCount.innerText = "Number Count - " +number;

// }


// function btnSubmitOnAction(){
//    let txtName = document.getElementById("txtName");
//    console.log(txtName.value);

//    submitedName.innerText = "My Name is - " + txtName.value;

// }


// function btnAddOnAction() {
//     let inputnum1 =document.getElementById("txtNum1").value;
//     let inputnum2 =document.getElementById("txtNum2").value;

//     let result = parseInt(inputnum1) + parseInt(inputnum2);
//     outPut.innerText = "Result is - " + result;


// }

// function btnSubtractOnAction() {
//    let inputnum1 =document.getElementById("txtNum1").value;
//     let inputnum2 =document.getElementById("txtNum2").value;

//     let result = parseInt(inputnum1) - parseInt(inputnum2);
//     outPut.innerText = "Result is - " + result;


// }


// ---------- Custoemr Form APP -----------------

let customerList = [];
function btnSubmitOnAction() {

    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

 

   let customer = {
         name:txtName,
         address:txtAddress,
         age:txtAge,
         email:txtEmail,
         salary:txtSalary
   }
   console.log(customer);
   customerList.push(customer);
   console.log(customerList);
   btnLoadTableOnAction();
   resetInputFields();
}
// function btnLoadTableOnAction(){
//    let tblCustomer = document.getElementById("tblCustomer");

//    tblCustomer.innerHTML += `
//         <tr>
//             <td>Saman</td>
//             <td>Colombo</td>
//             <td>25</td>
//             <td>saman@example.com</td>
//             <td>50000</td>
//         </tr>
//    `
// }


function btnLoadTableOnAction() {
     let tblCustomer = document.getElementById("tblCustomer");

     let body = "";

     for (let i = 0; i < customerList.length; i++) {
            body += `
        <tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
         </tr>
       `
     }
     tblCustomer.innerHTML = body;


}

function resetInputFields() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSalary").value = "";
}
