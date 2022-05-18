export function submitData(data) {
    const url = 'https://przeprogramowani.pl/projekt-walidacja';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    return fetch(url, options);
}