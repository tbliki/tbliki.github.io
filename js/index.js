const hellos = [
    "cout << \"Hello, World!\\n\";",
    "System.out.println(\"Hello, World!\");",
    "console.log(\"Hello, World!\");",
    "print(\"Hello, World!\")",
    "<h1>Hello, World!</h1>"
];

let isTyping = false;

function setHello() {
    if (!isTyping) {
        isTyping = true;

        let prev = document.getElementById("hello-world").innerText;
        let next = hellos[Math.floor(Math.random() * hellos.length)];
        while (prev === next) {
            next = hellos[Math.floor(Math.random() * hellos.length)];
        }
        let location = document.getElementById("hello-world");
        for (let i = 0; i <= prev.length; i++) {
            setTimeout(() => {location.innerText = prev.substring(0, prev.length - i);}, 750 + i * 40);
        }
        for (let i = 1; i <= next.length; i++) {
            setTimeout(() => {location.innerText = next.substring(0, i);}, 1500 + (i + prev.length) * 20);
        }
        setTimeout(() => {isTyping = false;}, 1500 + (next.length + prev.length) * 20);
    }
}

window.onload = setHello;