let quotesArr;

function fetchQuotes() {
    return $.ajax({
        url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function(data) {
            quotesArr = JSON.parse(data)
        }
    })
}

function randomQuote() {
    return quotesArr.quotes[Math.floor(Math.random() * quotesArr.quotes.length)];
}

function quote() {
    let random = randomQuote()
    $('.text').fadeOut(600, (() => {
        $('#quote').text(random.quote)
        $('#author').text('- ' + random.author)
    }))

    $('.text').fadeIn(400)

    $('#tweet-quote').attr('href',
        'https://twitter.com/intent/tweet?text=' + encodeURIComponent(
            '"' + random.quote + '" ' + random.author
        )
    )
}

 $(document).ready(() => {
    
    fetchQuotes().then(() => {
        quote()
    })

    $('#new-quote').click(() => {
        quote()
    })
});