document.getElementById('loan-form').addEventListener("submit",function(e){
    document.getElementById("results").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate,2000);
    e.preventDefault();
});

function calculate(e){
   const amount= document.getElementById('loan_amount');
   const interst= document.getElementById('interest');
   const years= document.getElementById('years');
   const monthlyPayment= document.getElementById('monthly_payment');
   const toatlAmount= document.getElementById('total_amount');
   const totalInterest= document.getElementById('total_interest');

    
    const principle=parseFloat(amount.value);
    // console.log(typeof(principle));
    const calculatedInterest=parseFloat(interst.value)/ 100/ 12;
    const calculatedPayments=parseFloat(years.value)*12;
    const x=Math.pow(1+calculatedInterest,calculatedPayments)
    const monthly=(principle * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        toatlAmount.value=(monthly * calculatedPayments).toFixed(2);
        totalInterest.value=(monthly * calculatedPayments-principle).toFixed(2);

        document.getElementById("results").style.display="block";
        document.getElementById("loading").style.display="none";
    }else{
        showAlert('Please Enter the Amount');
        document.getElementById("loading").style.display="none";
    }

    // console.log(monthly);
    
    e.preventDefault();


}

function showAlert(error){
   const errorDiv= document.createElement("div");
   errorDiv.className="alert alert-danger";
   errorDiv.appendChild(document.createTextNode(error));
   const card= document.querySelector('.card');
   const heading= document.querySelector('.heading');

   card.insertBefore(errorDiv,heading);

   setTimeout(function(){
    document.querySelector('.alert').remove();
   },3000);
}