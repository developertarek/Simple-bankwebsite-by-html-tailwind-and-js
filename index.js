document.getElementById('submit-btn').addEventListener('click', function(){

const emailfield= document.getElementById('user-email');
const email= emailfield.value ;

const passfield= document.getElementById('user_pass');
const password= passfield.value;

if( email ==='tarek@gmail.com' && password === 'tarek' ){
    window.location.href ="./bank.html"
}
else{

    window.alert('invalid user or password')
}
})


