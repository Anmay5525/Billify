export function getInvoices() {
  //get invoices from api
  $.get("https://rzp-training.herokuapp.com/team1/invoices", function (
    data,
    status
  ) {
    //table for displaying data
    var table = `<table class="invoices-table">

                    <thead>
                        <th>INVOICE ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                    <thead>
                `;
    //append row for each invoice in the data
    data.items.forEach((element) => {
      var tr = `<tr class="tr">
                    <td>${element.id}</td>
                    <td>${element.customer_details.name}</td>
                    <td>${element.customer_details.email}</td>
                    <td>${element.customer_details.contact}</td>
                </tr>  
            `;
      table += tr;
    });

    table += `</table>`;

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
            `;

    //clear element before adding invoices
    $(".right-panel #Invoices").empty();
    //append title and table
    $(".right-panel #Invoices").append(`<div id="">` + div + table + `</div>`);
  });
}
