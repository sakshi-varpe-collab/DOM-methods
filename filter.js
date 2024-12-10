var arr=[{
    clientName:"Aditya Roy",
    Payment:"Rs.15000",
    RemainingAmount:"Rs.2000",
    // paymentStatus:"UnPaid",
    DueDate:2024/10/14
},
{
    clientName:"Shraddha Kapoor",
    Payment:"Rs.20000",
    RemainingAmount:"Rs.1000",
    paymentStatus:"UnPaid",
    DueDate:2024/9/23
},
{
    clientName:"Akriti Negi",
    Payment:"Rs.10000",
    paymentStatus:"Paid",
    DueDate:2024/8/211
},
{
    clientName:"Jashwantt Bopana",
    Payment:"Rs.18000",
    paymentStatus:"Paid",
    DueDate:2024/3/5
},
{
    clientName:"Kashish Kapoor",
    // Payment:"Rs.12000",
    paymentStatus:"Paid",
    DueDate:2024/1/6
}]


var today = new Date();

// var payment=arr.filter(elem=>elem.DueDate>CurrentDate && elem.RemainingAmount>0);
// console.log(payment);

var overdueClients = arr.filter(elem => {
    var DueDate = new Date(elem.DueDate);
    return elem.paymentStatus === "UnPaid" && DueDate < today;
});

console.log(overdueClients);