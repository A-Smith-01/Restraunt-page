import foodImg from "./assets/food.avif";

const loadHomeContent = function(){
    const rootDiv = document.createElement('div');

    const head = document.createElement('h1');
    const p1 = document.createElement('p');
    const img = document.createElement('img');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    head.textContent = "Our Family Restraunt";
    p1.textContent = "At our family restraunt we serve only the highest quality food, cooked fresh by our real trained chefs with locally sourced produce.";
    img.src = foodImg;
    p2.textContent = "Enjoy our menu full of recipies that have been passed down by our family for generations, lovingly made for you.";
    p3.textContent = "Order take out or come join us at our homeley restraunt with live music and rustic vibes.";

    rootDiv.appendChild(head);
    rootDiv.appendChild(p1);
    rootDiv.appendChild(img);
    rootDiv.appendChild(p2);
    rootDiv.appendChild(p3);

    return rootDiv;
}

export {loadHomeContent};