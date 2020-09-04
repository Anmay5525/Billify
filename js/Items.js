
export function getItems(){

    //get items from api
    $.get("https://rzp-training.herokuapp.com/team1/items", function(data,status){
    // console.log(data);

    
    //table for displaying data
    var table = `<table class="items-table">

                    <thead>
                        
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                    <thead>
                `
    //append row for each invoice in the data
    data.items.forEach(element => {

        var tr = `<tr class="tr">
                    
                    <td>${element.name}</td>
                    <td>${element.description}</td>
                    <td>INR ${element.amount/100}</td>
                </tr>  
            `
        table+=tr;
    });
        
    table+=`</table>`;


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
            `

    //clear element before adding items
    $(".right-panel #Items").empty();
    //append title and table
    $(".right-panel #Items").append(`<div id="">`+div+table+`</div>`);


}
)};
