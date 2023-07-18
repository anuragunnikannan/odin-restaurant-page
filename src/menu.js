export default function loadMenu() {
    let parent = document.querySelector("#content");
    document.querySelector("#heading").innerText = "MENU";
    parent.innerHTML = `
    <div class="menu-container">
        <div class="item">
            <img src="https://ezvabiieq5g.exactdn.com/blog/wp-content/uploads/2011/05/DSC_0195-scaled.jpg?lossy=1&resize=768%2C510&ssl=1" alt="pizza">
            
            <h2>Pizza</h2>
            <p>Rs. 300</p>
        </div>
    
        <div class="item">
            <img src="https://ezvabiieq5g.exactdn.com/blog/wp-content/uploads/2016/07/11735294004_b68f0ab3ef_k.jpg?lossy=1&resize=768%2C512&ssl=1" alt="lasagna">
            
            <h2>Lasagna</h2>
            <p>Rs. 250</p>
        </div>
    
        <div class="item">
            <img src="https://cdn.tasteatlas.com//Images/Dishes/ca0da7070c0a4ff7ad2bd7e251c21435.jpg?w=905&h=510" alt="panzerotti">
            
            <h2>Panzerotti</h2>
            <p>Rs. 400</p>
        </div>
    
        <div class="item">
            <img src="https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6-500x375.jpg" alt="pasta">
            
            <h2>Pasta</h2>
            <p>Rs. 250</p>
        </div>
    </div>
    `;
}