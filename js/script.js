
// import {data} from "./data.js";
import {getCustomers} from "./Customers.js";
import {getInvoices} from "./Invoices.js";
import {getItems} from "./Items.js";



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

        else
        {
            getItems();
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





