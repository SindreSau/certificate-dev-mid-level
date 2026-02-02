// Beer endpoint
const endpoint = `https://api.sampleapis.com/beers/ale/${Math.floor(Math.random() * 10) + 40}`;

// Promise - Old style
fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

// Async await
async function fetchData(endpoint) {
    try {
        let res = await fetch(endpoint);
        console.log(res);
        let data = res.json;
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

fetchData(endpoint);
