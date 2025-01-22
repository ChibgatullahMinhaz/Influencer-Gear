const data = [
    {
        image: "../images/action.png",
        title: "Hello World",
        amount: 555,
        ratingPoint: 4.99,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Buyer's protection possible!"
    },
    {
        image: "../images/airpod.png",
        title: "Another World",
        amount: 499,
        ratingPoint: 4.5,
        shifting: "International shipping",
        status: "Out of stock",
        protection: "Limited buyer protection!"
    },
    {
        image: "../images/camera.png",
        title: "The Final World",
        amount: 699,
        ratingPoint: 4.8,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
];

const container = document.getElementById("collection"); // Assuming you have a container div

data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="card-image">
        <h3>${item.title}</h3>
        <p class="price"> $${item.amount}</p>
                <div class="rating_container">
                        <p> ${"⭐".repeat(Math.floor(item.ratingPoint))}${item.ratingPoint % 1 !== 0 ? "⭐" : ""}</p>
                                <p class="ratingpoint"> ${item.ratingPoint}</p>
                </div>
        <p class="pStatus"> ${item.shifting}</p>
        <p class="pStatus"> ${item.status}</p>
        <p class="pStatus"> ${item.protection}</p>
    `;

    container.appendChild(card);
});
