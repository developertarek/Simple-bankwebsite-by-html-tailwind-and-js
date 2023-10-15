// for deposit withdraw and balance section here js start


// get the value from deposite input tag
document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeinput = document.getElementById('deposite-input')
    const depositeamount = depositeinput.value ;
    const newdepositetotal = parseFloat(depositeamount)


// get the value of defult deposite value 
    const depositeElement = document.getElementById('deposite-total');
    const depositeTotal = depositeElement.innerText;
    const previouspositetotal = parseFloat(depositeTotal)
    depositeElement.innerText = previouspositetotal + newdepositetotal;
  
// get the main balace after depsite  and calculate and change the main balance value 
    const mainBalance = document.getElementById('main-balance')
    const previousBalance = mainBalance.innerText
    const totalmainPrebalance = parseFloat(previousBalance)
    mainBalance.innerText = totalmainPrebalance + newdepositetotal;
//  empy the input deposite tag 
    depositeinput.value = '';
})