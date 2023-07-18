import menu from "./menu.js";
export default function loadHome() {
    let parent = document.querySelector("#content");
    document.querySelector("#heading").innerText = "";
    parent.innerHTML = `
        <div class="left">
            <h1>PIZZA LA VISTA RESTAURANT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <button class="order">ORDER NOW</button>
        </div>

        <img class="banner-img" src="https://cdn.dribbble.com/users/1731254/screenshots/8346192/italian_food_illustration_tubikarts.png">

    `;
    document.querySelector(".order").addEventListener("click", menu);
}