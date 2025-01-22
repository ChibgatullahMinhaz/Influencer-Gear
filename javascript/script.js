const data = [
    {
        image: "../images/tripod.png",
        title: "Flex Tripod",
        amount: 50.48,
        ratingPoint: 4.99,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Buyer's protection possible!"
    },
    {
        image: "../images/mic.png",
        title: "microphone",
        amount: 120.25,
        ratingPoint: 4.99,
        shifting: "International shipping",
        status: "Out of stock",
        protection: "Limited buyer protection!"
    },
    {
        image: "../images/airpod.png",
        title: "Airbuds",
        amount: "100.00",
        ratingPoint: 4.8,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/Drone.png",
        title: "Drone",
        amount: 980.25,
        ratingPoint: 4.8,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/lights.png",
        title: "Light Setup",
        amount: "1200.00",
        ratingPoint: 4.8,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/setup.png",
        title: "Photoshoot set",
        amount: "820.40",
        ratingPoint: 4.8,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/camera.png",
        title: "Vlogging Camera",
        amount:" 1800.80",
        ratingPoint: 4.99,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/single-light.png",
        title: "Green Screen",
        amount: 25.48,
        ratingPoint: 4.99,
        shifting: "Worldwide shifting",
        status: "Available",
        protection: "Full buyer protection!"
    }
    ,
    {
        image: "../images/action.png",
        title: "Action Camera",
        amount: "280.00",
        ratingPoint: 4.99,
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
