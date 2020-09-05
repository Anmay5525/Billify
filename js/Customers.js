export function getCustomers() {
  //get customers from api
  $.get("https://rzp-training.herokuapp.com/team1/customers", function (data) {
    //table for displaying data
    var table = `<table class="customers-table">

                    <thead>
                        
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                    <thead>
                `;
    //append row for each cust in the data
    data.items.forEach((element) => {
      var tr = `<tr class="tr">
                    
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.contact}</td>
                </tr>  
            `;
      table += tr;
    });

    table += `</table>`;

    //title and btn for cust
    var div = `
                <div class="customers-title-container">
                    <div class="customers-title">
                        Customers
                    </div>
                    <button class=customers-new-btn>
                    + New Customer
                    </button>
                </div>
            `;

    //clear element before adding custs
    $(".right-panel #Customers").empty();
    //append title and table
    $(".right-panel #Customers").append(`<div>` + div + table + `</div>`);

    $(".right-panel .customers-new-btn").click(displayAddCustomerForm);
  });
}

function displayAddCustomerForm() {
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

                </div>`;

  //clear element before adding form
  $(".right-panel #Customers").empty();
  //append form
  $(".right-panel #Customers").append(form);

  //add new customer on click
  $(".customers-add-btn").click(addCustomer);
}

function addCustomer(event) {
  var name = $(".customers-form #name").val();
  var email = $(".customers-form #email").val();
  var phone = $(".customers-form #phone").val();

  var url = "https://rzp-training.herokuapp.com/team1/customers";

  var obj = {
    name: name,
    email: email,
    contact: phone,
  };

  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(obj),
    success: function (data) {
      console.log(data);
      //get updated customers and display them
      getCustomers();
    },
    contentType: "application/json",
    dataType: "json",
  });
}
