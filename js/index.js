const hellos = [
    "cout << \"Hello, World!\\n\";",
    "System.out.println(\"Hello, World!\");",
    "console.log(\"Hello, World!\");",
    "print(\"Hello, World!\")",
    "<h1>Hello, World!</h1>"
];

function setHello() {
    document.getElementById("hello-world").innerText = hellos[Math.floor(Math.random() * hellos.length)];
}

window.onload = setHello;