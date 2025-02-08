window.addEventListener("message", function(event) {
    if (event.data.action === "showNotification") {
        showNotification(event.data.message, event.data.type, event.data.duration);
    }
});

function showNotification(message, type = "info", duration = 5000) {
    const notificationContainer = document.getElementById("notifications");
    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    const icons = {
        success: "✔",
        error: "×",
        info: "",
        warning: "!"
    };

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    iconContainer.innerText = icons[type] || "ℹ️";

    const textContainer = document.createElement("span");
    textContainer.innerText = message;

    notification.appendChild(iconContainer);
    notification.appendChild(textContainer);

    notificationContainer.appendChild(notification);


    let sound = new Audio('sound.mp3');  
    sound.volume = 0.5;
    sound.play();

    setTimeout(() => {
        notification.remove();
    }, duration);
}
