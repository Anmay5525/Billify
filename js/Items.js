export function getItems() {
  //get items from api
  $.get("https://rzp-training.herokuapp.com/team1/items", function (data) {
    //table for displaying data
    var table = `<table class="items-table">

                    <thead>
                        
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                        <th>CURRENCY</th>
                    <thead>
                `;
    //append row for each invoice in the data
    data.items.forEach((element) => {
      var tr = `<tr class="tr">
                    
                    <td>${element.name}</td>
                    <td>${element.description}</td>
                    <td>${element.amount / 100}</td>
                    <td>${element.currency}</td>
                </tr>  
            `;
      table += tr;
    });

    table += `</table>`;

    //title and btn for items
    var div = `
                <div class="items-title-container">
                    <div class="items-title">
                        Items
                    </div>
                    <button class=items-new-btn>
                    + New Item
                    </button>
                </div>
            `;

    //clear element before adding items
    $(".right-panel #Items").empty();
    //append title and table
    $(".right-panel #Items").append(`<div id="">` + div + table + `</div>`);

    //displays new item form on click.
    $(".right-panel .items-new-btn").click(displayAddItemForm);
  });
}

function displayAddItemForm() {
  var form = `<div  class="items-form">

                    <div class="input-cnt">
                        <div>Name</div> 
                        <input class="input" id="name" type="text" placeholder="Enter name of item">
                    </div>

                    <div class="input-cnt">
                        <div>Amount</div> 
                        <input class="input" type="text" id="amount" placeholder="Enter amount">
                    </div>

                    <div class="input-cnt">
                        <div>Description</div> 
                        <textarea class="textarea"  id="description" placeholder="Add description" rows="4"></textarea>
                    </div>
                    <div > 
                        <button class="items-add-btn">
                            Add Item
                        </button>
                        
                    </div>

                </div>`;

  //clear element before adding form
  $(".right-panel #Items").empty();
  //append form
  $(".right-panel #Items").append(form);

  //add new item on click
  $(".items-add-btn").click(addItem);
}

function addItem(event) {
  var name = $(".items-form #name").val();
  var description = $(".items-form #description").val();
  var amount = $(".items-form #amount").val();
  var curr = "INR";

  var url = "https://rzp-training.herokuapp.com/team1/items";

  var obj = {
    name: name,
    description: description,
    amount: amount,
    currency: curr,
  };
  console.log(obj);

  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(obj),
    success: function (data) {
      console.log(data);
      //get updated items and display them
      getItems();
    },
    contentType: "application/json",
    dataType: "json",
  });
}
