// document.querySelector(".submit").addEventListener("click", () => {
//   alert("Address Saved");
// });

//total amount and quantiy;
let total = JSON.parse(localStorage.getItem("total")) || 0;

document.querySelector('#Amount').innerText=total[0];
document.querySelector('#Quantity').innerText=total[1];
document.querySelector('#Payment').addEventListener('click',()=>{
    alert('Congratulations !!! Your Order Got Placed');
    window.location.href='./index.html';
});
