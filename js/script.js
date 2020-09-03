// var state = {
    
// }

//dummy data

// var data = {
//     "entity": "collection",
//     "count": 3,
//     "items": [
//         {
//             "id": "inv_FXrfj1VFug8iMF",
//             "entity": "invoice",
//             "receipt": null,
//             "invoice_number": null,
//             "customer_id": "cust_FXrcTrGv8u2NpC",
//             "customer_details": {
//                 "id": "cust_FXrcTrGv8u2NpC",
//                 "name": "Sonam4 Gupta",
//                 "email": "gupta@razorpay.com",
//                 "contact": "9090909019",
//                 "gstin": null,
//                 "billing_address": null,
//                 "shipping_address": null,
//                 "customer_name": "Sonam4 Gupta",
//                 "customer_email": "gupta@razorpay.com",
//                 "customer_contact": "9090909019"
//             },
            
//         },
//         {
//             "id": "inv_FXfLqmKmx3gaP3",
//             "entity": "invoice",
//             "receipt": null,
//             "invoice_number": null,
//             "customer_id": "cust_FXeyTugYOgPBKi",
//             "customer_details": {
//                 "id": "cust_FXeyTugYOgPBKi",
//                 "name": "Sonam Gupta",
//                 "email": "sonam@razorpay.com",
//                 "contact": "9900990099",
//                 "gstin": null,
//                 "billing_address": null,
//                 "shipping_address": null,
//                 "customer_name": "Sonam Gupta",
//                 "customer_email": "sonam@razorpay.com",
//                 "customer_contact": "9900990099"
//             },
//         },
//         {
//             "id": "inv_FXf5Z31fOG2eho",
//             "entity": "invoice",
//             "receipt": null,
//             "invoice_number": null,
//             "customer_id": "cust_FXeyTugYOgPBKi",
//             "customer_details": {
//                 "id": "cust_FXeyTugYOgPBKi",
//                 "name": "Sonam Gupta",
//                 "email": "sonam@razorpay.com",
//                 "contact": "9900990099",
//                 "gstin": null,
//                 "billing_address": null,
//                 "shipping_address": null,
//                 "customer_name": "Sonam Gupta",
//                 "customer_email": "sonam@razorpay.com",
//                 "customer_contact": "9900990099"
//             },
            
//         }
//     ]
// };

//setup event listeners on three main tabs

init();


function init(){ 

    //Add event listeners to all buttons
    var btn = $(".left-panel .btn").click(function(event) {

        //if invoices tab is clicked then get invoices and render them
        // console.log($(event.target).attr("id") ==="Invoices");

        if($(event.target).attr("id") === "Invoices")
        {
            getInvoices();
        }

        else if($(event.target).attr("id") === "Customers")
        {
            getCustomers();
        }

        //diplay no content when page loads
        $(".content").css("display","none");

        //remove active class from all elements
        $(".btn").removeClass("active");

        //make current tab active
        $(event.target).addClass("active");

        //diplay content depending on the button pressed
        $(`.right-panel #${$(event.target).attr("id")}`).css("display","block");

        $(".right-panel").css("background-color","rgba(0,0,194,0.05)");

    }) ;

}
function getInvoices(){

    //get invoices from api
    $.get("https://rzp-training.herokuapp.com/team1/invoices", function(data,status){
    // console.log(data);

    
    //table for displaying data
    var table = `<table class="invoices-table">

                    <thead>
                        <th>INVOICE ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                    <thead>
                `
    //append row for each invoice in the data
    data.items.forEach(element => {

        var tr = `<tr class="tr">
                    <td>${element.id}</td>
                    <td>${element.customer_details.name}</td>
                    <td>${element.customer_details.email}</td>
                    <td>${element.customer_details.contact}</td>
                </tr>  
            `
        table+=tr;
    });
        
    table+=`</table>`;


    //title and btn for invoices
    var div = `
                <div class="invoices-title-container">
                    <div class="invoices-title">
                        Invoices
                    </div>
                    <button class=invoices-new-btn>
                    + New Invoice
                    </button>
                </div>
            `

    //clear element before adding invoices
    $(".right-panel #Invoices").empty();
    //append title and table
    $(".right-panel #Invoices").append(`<div id="">`+div+table+`</div>`);


}
)};

function getCustomers(){

    //get invoices from api
    $.get("https://rzp-training.herokuapp.com/team1/customers", function(data,status){
    // console.log(data);

    
    //table for displaying data
    var table = `<table class="customers-table">

                    <thead>
                        
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                    <thead>
                `
    //append row for each invoice in the data
    data.items.forEach(element => {

        var tr = `<tr class="tr">
                    
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.contact}</td>
                </tr>  
            `
        table+=tr;
    });
        
    table+=`</table>`;


    //title and btn for invoices
    var div = `
                <div class="customers-title-container">
                    <div class="customers-title">
                        Customers
                    </div>
                    <button class=customers-new-btn>
                    + New Customer
                    </button>
                </div>
            `

    //clear element before adding invoices
    $(".right-panel #Customers").empty();
    //append title and table
    $(".right-panel #Customers").append(`<div>`+div+table+`</div>`);

    $('.right-panel .customers-new-btn').click(displayAddCustomerForm);


}

)};


function displayAddCustomerForm(){

    var form = `<div  class="customers-form">

                    <div class="input-cnt">
                        <div>Name</div> 
                        <input class="input" id="name" type="text" placeholder="Enter name of customer">
                    </div>

                    <div class="input-cnt">
                        <div>Email</div> 
                        <input class="input" type="text" id="email" placeholder="Enter email">
                    </div>

                    <div class="input-cnt">
                        <div>Phone No.</div> 
                        <input class="input" type="text" id="phone" placeholder="Enter phone no.">
                    </div>
                    <div > 
                        <button class="customers-add-btn">
                            Add Customer
                        </button>
                        
                    </div>

                </div>`

    //clear element before adding form
    $(".right-panel #Customers").empty();
    //append form
    $(".right-panel #Customers").append(form);
    
    //add new customer on click
    $(".customers-add-btn").click(addCustomer);
    
    // console.log("disp")
}

function addCustomer(event){

    console.log(event);
    // console.log($(".customers-form #name").val());

    var name = $(".customers-form #name").val();
    var email = $(".customers-form #email").val();
    var phone = $(".customers-form #phone").val();

    var url = "https://rzp-training.herokuapp.com/team1/customers";


    var obj = {
        name : name,
        email : email,
        contact : phone
    }
    // console.log(obj);

    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(obj), 
        success: function(data) { 
            console.log('data: ' + data); 
            //get updated customers and display them
            getCustomers();
        },
        contentType: "application/json",
        dataType: 'json'
    });


    
}






