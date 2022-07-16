'use strict';

function setAlarm(event) {
    let minutes = parseFloat(document.getElementById('input').value) || parseFloat(event.target.value);
    // let minutes = setTime;
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
    window.close();
    // chrome.tabs.create({
    //     url: 'test.html'
    // });
}

function clearAlarm() {
    chrome.action.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
document.getElementById('sendButton').addEventListener('click', setAlarm);
document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);