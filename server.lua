RegisterCommand('sendNotify', function(source, args, rawCommand)
    TriggerClientEvent('startup:showNotification', source, 'Message', 'info', 5000)
end, false)
