 //DIS PLAY NAME FUNCTION//
 const fullname = localStorage.getItem('fullname');
 const phone = localStorage.getItem('phone');
 

 const Name = document.querySelector('.fname');
 const Phone = document.querySelector('.phoneNumber');


 Name.textContent =`Welcome ${fullname}`;
 Phone.textContent = phone;
 //END OF DISPLAY NAME FUCTION//
