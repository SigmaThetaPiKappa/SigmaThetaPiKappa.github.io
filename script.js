function changeGreeting() {
    const greetings = ["Hello World", "Hola Mundo", "Bonjour le Monde", "Hallo Welt", "Ciao Mondo"];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById('greeting').innerText = greetings[randomIndex];
}
