let quotesArr;

function fetchQuotes() {
    return $.ajax({
        url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function(data) {
            quotesArr = JSON.parse(data)
            //console.log(quotes) 
        }
    })
}

function randomQuote() {
    return quotesArr.quotes[Math.floor(Math.random() * quotesArr.quotes.length)];
}


 $(document).ready(() => {
    fetchQuotes().then(() => {
        let random = randomQuote()
        $('#text').text(random.quote).fadeIn()
        $('#author').text(random.author)
    })

    $('#new-quote').click(() => {
        fetchQuotes().then(() => {
            let random = randomQuote()
            $('#text').fadeOut(400, (() => {
                $('#text').text(random.quote)
            }))
            
            $('#text').fadeIn()
            $('#author').text(random.author)
        })
    })
});

