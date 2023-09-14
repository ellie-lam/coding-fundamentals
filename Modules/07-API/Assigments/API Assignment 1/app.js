const quoteCard = document.querySelector('#quote-card')
const quoteText = document.querySelector('#quote-text')
const authorName = document.querySelector('#author-name')
const newQuoteButton = document.querySelector('#new-quote-button')

const ENDPOINT = "https://api.quotable.io/random"

//to fetch the quotes from API
async function getQuotes() {

    try {
        //fetch data from API and parse JSON response and also checking status code. if status code = 200, request has been successfully processed.
        const response = await fetch(ENDPOINT);
        // if (!response.ok) {
        //     throw new Error(`Network response was not ok, status: ${response.status}`);
        // }
        const data = await response.json()

        //update quote with fetched data
        quoteText.textContent = data.content;
        authorName.textContent = `${data.author}`
    } catch (error) {
        //Handle any errors that occur during the fetch
        console.error("There was a problem fetching the quote:", error);
    }
}

//add event listener to the button to get new quote when clicked
newQuoteButton.addEventListener('click', getQuotes)

//initial call to get random quote when page loads
getQuotes()

// to test function getQuotes after page loads
// window.addEventListener('load', async() => {
//     await getQuotes()
// })