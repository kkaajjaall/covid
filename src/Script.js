const bussinessName = document.getElementById('bussinessName');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const town = document.getElementById('town');
// console.log(name, email, phone);
bussinessName.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = bussinessName.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        bussinessName.classList.remove('is-invalid');
      
    }
    else{
        console.log('Your name is not valid');
        bussinessName.classList.add('is-invalid');
        
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
    
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
      
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
     
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
      
    }
})
fullName.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = fullName.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        fullName.classList.remove('is-invalid');
       
    }
    else{
        console.log('Your phone is not valid');
        fullName.classList.add('is-invalid');
     
    }
})
town.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = town.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        town.classList.remove('is-invalid');
        
    }
    else{
        console.log('Your phone is not valid');
        town.classList.add('is-invalid');
        
    }
})









