document.getElementById('Withdraw-btn').addEventListener('click', function(){
// get the value from withdraw input tag 
    const withdrawfiled = document.getElementById('withdraw-input')
    const withdrawAmount = withdrawfiled.value;
    const newWithdrawAmount = parseFloat(withdrawAmount)
   
// get the value from withdraw box 
    const totalWithdraw = document.getElementById('total-withdraw')
    const totalWithdrawAmount = totalWithdraw.innerText ;
    const previousWithdrawAmount = parseFloat(totalWithdrawAmount)
    totalWithdraw.innerText = previousWithdrawAmount + newWithdrawAmount

    //  get the main balanace
    const mainBalance = document.getElementById('main-balance')
    const totalMainbalance = mainBalance.innerText 
    const preMainbalance = parseFloat(totalMainbalance)
    
    //  calculate the balance and change it 
    const newMainbalance = preMainbalance - newWithdrawAmount
    mainBalance.innerText = newMainbalance
//  empty the input field
    withdrawfiled.value = '';
})
