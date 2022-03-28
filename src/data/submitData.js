export function submitData(data) {
    const url = 'https://przeprogramowani.pl/projekt-walidacja';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            console.log(`Sukces! Formularz z danymi ${res} został wysłany`);
        })
        .catch(() => {
            console.log('Problemy z połączeniem');
        });
}