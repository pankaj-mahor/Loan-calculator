//listen submiit
document.getElementById('loan-form').addEventListener('submit',function(e){
    //HIde Result
    document.getElementById('results').style.display ='none';

    //Show Loader
    document.getElementById('loading').style.display ='block';

    setTimeout(calculateResult , 1000);
    

    e.preventDefault();
});


//Calculate result
function calculateResult(){
    // console.log('calculating');
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const yearsToPay = document.getElementById('years');
    
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value);
    const calculatedPayment = parseFloat(yearsToPay.value);

    let totalInterestToPay = (principle * calculatedInterest * calculatedPayment)/100;
    let total = principle + totalInterestToPay; 
    //compute monthly payment   
    const monthly = total / (calculatedPayment*12);


    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = total;
        totalInterest.value = (principle * calculatedInterest * calculatedPayment)/100;

        //Show Results 
        document.getElementById('results').style.display = 'block';

        //hide loader 

        document.getElementById('loading').style.display = 'none';  

    } else {

        showError('Please check Your Number Again ...');
    }
}
//SHow Error
function showError(error){
    document.getElementById('loading').style.display = 'none';///hide loader
    document.getElementById('results').style.display = 'none';//hide results
    //create element
    const errorDiv = document.createElement('div');
    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';
    //give text content
    errorDiv.appendChild(document.createTextNode(error));

    //insert before heading 
    card.insertBefore(errorDiv ,heading);

    // Remove error after 3 seconds
    setTimeout(clearError , 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
