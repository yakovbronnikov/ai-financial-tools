let install = document.querySelector('#install .heading')
let safari = navigator.userAgent.toLowerCase().includes('safari')
let ios = navigator.userAgent.toLowerCase().includes('ios')

if (safari && ios) {
  install.innerHTML = `
  <h2>Install the AINOM app</h2>
  <ul>
      <li>Tap the share button, it's located at the bottom center</li>
      <li>Select "Add to home screen" item</li>
      <li>Come up with a name for the shortcut and tap the add button</li>
      <li>Wait until the installation is complete</li>
      <li>Done, enjoy!</li>
  </ul>
  `
} else {
  install.innerHTML = `
  <h2>Install the AINOM app</h2>
  <ul>
      <li>Without leaving this page, open the browser menu (usually three dots in the upper right corner)</li>
      <li>Find the item “Add to home screen” or “Install”</li>
      <li>Confirm the action if necessary</li>
      <li>Wait until the installation is complete</li>
      <li>Done, enjoy!</li>
  </ul>
  `
}



if ('serviceWorker' in navigator) {
    // Весь код регистрации у нас асинхронный.
    navigator.serviceWorker.register('https://github.com/yakovbronnikov/ainom/blob/main/sw.js')
      .then(() => navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');
      }))
      .catch((err) => console.log(err));
}

