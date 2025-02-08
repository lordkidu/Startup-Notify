# Startup-Notify

**Overview:** Startup Notify is a versatile and customizable notification system designed specifically for FiveM servers. This script allows server owners and developers to easily trigger in-game notifications with dynamic messages, customizable types, and a built-in sound system for enhanced player experience. Perfect for informing players of server events, announcements, or other important updates during gameplay.

### **Key Features:**

**Customizable Notifications:** Display success, error, info, and warning notifications with personalized messages.
**Built-in Sound System:** Play a notification sound with every notification, making messages more impactful.
**Flexible Export System:** Use exports to trigger notifications from any script, allowing for easy integration with your existing server framework.
**Easy-to-Use UI:** The notification system uses a clean and modern UI, ensuring messages are easy to read without interrupting gameplay.
**Client and Server Side Integration:** With both client and server-side support, you can trigger notifications from any part of your server, whether you are handling events or informing players of specific actions.

Use the provided exports to trigger notifications from other scripts or directly via commands.

### **Usage Example:**

**Client Side Notification: Trigger notifications from any other script using this export function:**

exports['startup_notify']:exportStartupNotify('Message', 'type', time)

---

**Server Side Notification: Notify a specific player or all players with:**

exports['startup_notify']:exportStartupNotifyServer(playerId, 'Message', 'type', time)


### **Supported Notification Types:**

**Success:** Green notification with a checkmark icon.
**Error:** Red notification with a cross icon.
**Info:** Blue notification with an info icon.
**Warning:** Yellow notification with a warning icon.

### **Custom Sound:**
The script comes with a default sound, but you can easily replace it with any custom sound by placing the .mp3 file into the html folder.

### **Customization:**
You can configure the duration, style, and type of the notification to suit your needs. Easily integrate it with your existing server workflows to provide feedback to players on various in-game events.

### **Perfect For:**

Announcing server events.
Informing players of updates or changes.
Triggering notifications based on custom actions like completing a task, achieving a milestone, or interacting with a key element.

feel free to join the discord: https://discord.gg/WP44YxqXqH
