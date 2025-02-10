window.addEventListener("message", function(event) {
    if (event.data.action === "showNotification") {
        showNotification(event.data.message, event.data.type, event.data.duration, event.data.position);
    }
});

function showNotification(message, type = "info", duration = 5000, position = "top-right") {
    const notificationContainer = document.getElementById("notifications");

    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    const icons = {
        success: "✔",
        error: "×",
        info: "ℹ️",
        warning: "!"
    };

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    iconContainer.innerText = icons[type] || "ℹ️";

    const textContainer = document.createElement("span");
    textContainer.innerText = message;

    notification.appendChild(iconContainer);
    notification.appendChild(textContainer);

    let positionContainer = document.querySelector(`.notifications-container.${position}`);
    if (!positionContainer) {
        positionContainer = document.createElement("div");
        positionContainer.classList.add("notifications-container", position);
        document.body.appendChild(positionContainer);
    }

    positionContainer.appendChild(notification);

    let sound = new Audio('sound.mp3');
    sound.volume = 0.5;
    sound.play();

    setTimeout(() => {
        notification.remove();
    }, duration);
}
