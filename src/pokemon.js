// This function loads pokemon data from the Pokemon API

function fetchSimpsonJSON() {
 
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

    axios.get(url)
        .then(function (response) {
            return response.data[0];
        })
        .then(function (simpson) {
            console.log('data decoded from JSON:', simpson);
            // Build a block of HTML
            const simpsonHtml = `
        <p><strong>${simpson.quote}</strong></p>
        <img src="${simpson.image}"/>
      `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });

}
