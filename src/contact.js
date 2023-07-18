export default function loadContact() {
	let parent = document.querySelector("#content");
	document.querySelector("#heading").innerText = "CONTACT";
	parent.innerHTML = `
    <div class="contact-container">
        <div class="contact-item">
            <h2>John</h2>
            <p>Chef</p>
            <p>135-791-3579</p>
        </div>

        <div class="contact-item">
            <h2>Robert</h2>
            <p>Waiter</p>
            <p>246-802-4680</p>
        </div>

        <div class="contact-item">
            <h2>Mary</h2>
            <p>Manager</p>
            <p>123-456-7890</p>
        </div>
    </div>
    `;
}
