const jokesDiv = document.querySelector(".joke");

const grabJokes = async () => {
    const jokeResponse = await fetch("https://geek-jokes.sameerkumar.website/api");

    if (jokeResponse.status != 200) {
        throw new Error();
    }
    const joke = await jokeResponse.json();

    return joke;
}

const getJokes = () => {
    grabJokes()
    .then(joke => {
        jokesDiv.innerHTML = joke;
    });
}

getJokes();

setInterval(getJokes, 10000);
