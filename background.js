'use strict';

chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
  // chrome.notifications.create({
  //   type: 'basic',
  //   iconUrl: 'stay_hydrated.png',
  //   title: 'Time to Hydrate',
  //   message: 'Everyday I\'m Guzzlin\'!',
  //   buttons: [
  //     { title: 'Keep it Flowing.' }
  //   ],
  //   priority: 0
  // });
  // open a popup (this worked for me)
  chrome.windows.create({ url: "test.html", type: "popup", height: 520, width: 550});
  // chrome.tabs.create({
  //   url: 'test.html'
  // });
  // window.open('test.html');
});

chrome.notifications.onButtonClicked.addListener(async () => {
  const item = await chrome.storage.sync.get(['minutes']);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: item.minutes });
});