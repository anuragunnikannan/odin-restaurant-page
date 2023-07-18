import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import './styles/style.css';

home();
document.querySelector("#home").addEventListener("click", home);
document.querySelector("#menu").addEventListener("click", menu);
document.querySelector("#contact").addEventListener("click", contact);