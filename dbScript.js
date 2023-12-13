


 const fullName = localStorage.getItem('fullName');
    const phone = localStorage.getItem('phone');

    const Name = document.querySelector('.fname');
    const Phone = document.querySelector('.phoneNumber');

    Name.textContent = `Welcome ${fullName}`;
    Phone.textContent = `Phone: ${phone}`;