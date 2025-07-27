const loadMenuContent = function(){
    const rootDiv = document.createElement('div');

    const appetizers = document.createElement('h2');
    const a1 = document.createElement('p');
    const a2 = document.createElement('p');
    const a3 = document.createElement('p');
    const mains = document.createElement('h2');
    const m1 = document.createElement('p');
    const m2 = document.createElement('p');
    const m3 = document.createElement('p');
    const dessert = document.createElement('h2');
    const d1 = document.createElement('p');
    const d2 = document.createElement('p');
    const d3 = document.createElement('p');

    appetizers.textContent = "Appetizers";
    a1.textContent = "Bruschetta - £.6.80";
    a2.textContent = "Fried Calamari With Homemade Dipping Sauce - £7.50";
    a3.textContent = "Soup of the Day - Check with the board";
    mains.textContent = "Main Dishes"
    m1.textContent = "Pasta alla norma - £13.00";
    m2.textContent = "Chicken Byhriani - £11.00";
    m3.textContent = "Chicken Yaki Soba - £11.00";
    dessert.textContent = "Desserts"
    d1.textContent = "Millionare's Flapjack - £8.00";
    d2.textContent = "Lemon Meruange Pie - £9.00";
    d3.textContent = "Raspberry Blondie - £6.00";
    
    rootDiv.appendChild(appetizers);
    rootDiv.appendChild(a1);
    rootDiv.appendChild(a2);
    rootDiv.appendChild(a3);
    rootDiv.appendChild(mains);
    rootDiv.appendChild(m1);
    rootDiv.appendChild(m2);
    rootDiv.appendChild(m3);
    rootDiv.appendChild(dessert);
    rootDiv.appendChild(d1);
    rootDiv.appendChild(d2);
    rootDiv.appendChild(d3);

    return rootDiv;
}

export {loadMenuContent};