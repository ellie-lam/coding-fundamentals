const notification = document.querySelector('.notification')
const addButton = document.querySelector('.add__button')
const ctaButton = document.querySelector('.cta__button')

//for notification to appear
function createNotification() {
    notification.classList.add('show')
}

addButton.addEventListener('click', () => {
    createNotification()
})

//for notification to disappear when clicked on 'X' button
function removeNotification() {
    notification.classList.remove('show')
}

ctaButton.addEventListener('click', () => {
    removeNotification()
})

// // Add a click event listener to the body to dismiss the notification
// document.body.addEventListener('click', () => {
//     removeNotification();
// });

