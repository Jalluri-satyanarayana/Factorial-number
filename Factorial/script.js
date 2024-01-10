function calculation(){
    var input =  document.getElementById('Input').value
     
    
    if (input === '' || isNaN(input)) {
        alert('Please enter a valid number.');
        return;
    }
    
    var result = factorial(parseInt(input))
    
    document.getElementById('result').innerHTML = 'Factorial: ' +   result;
    }
    function factorial(n){
        if (n==1 ||n==0)
           return 1
        else
           return n*factorial(n-1)
     }