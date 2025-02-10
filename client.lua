function exportStartupNotify(message, type, duration)
    TriggerEvent('startup:showNotification', message, type, duration or 5000)
end

RegisterNetEvent('startup:showNotification')
AddEventHandler('startup:showNotification', function(message, type, duration)
    SendNUIMessage({
        action = 'showNotification',
        message = message,
        type = type,
        duration = duration,
        position = Config.NotificationPosition -- Envoi de la position
    })
end)
