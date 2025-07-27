const loadContactContent = function(){
    const rootDiv = document.createElement('div');

    const head = document.createElement('h1');
    const tel = document.createElement('h3');
    const address = document.createElement('h3');
    const email = document.createElement('h3');


    head.textContent = "Contact Us";
    tel.textContent = "Telephone: +44 73462359";
    address.textContent = "Address: 156 spaghetti street SP49 3TI";
    email.textContent = "Email: familyfoodrestraunt@yummy.com";
    
    rootDiv.appendChild(head);
    rootDiv.appendChild(tel);
    rootDiv.appendChild(address);
    rootDiv.appendChild(email);

    return rootDiv;
}

export {loadContactContent};