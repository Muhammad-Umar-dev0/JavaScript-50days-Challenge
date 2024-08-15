const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value.trim();
    
    
    if (!inpWord) {
        result.innerHTML = `<h3 class="error">Please enter a word</h3>`;
        return;
    }

    fetch(`${url}${inpWord}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        .then((data) => {
            
            const word = data[0];
            const phonetics = word.phonetics.find(p => p.audio) || {};

            result.innerHTML = `
                <div class="word">
                    <h3>${word.word}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${word.meanings[0].partOfSpeech}</p>
                    <p>${word.phonetic || ''}</p>
                </div>
                <p class="word-meaning">
                   ${word.meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${word.meanings[0].definitions[0].example || ""}
                </p>`;

            if (phonetics.audio) {
                sound.setAttribute("src", phonetics.audio);
            } else {
                sound.removeAttribute("src");
            }
        })
        .catch((error) => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    if (sound.src) {
        sound.play();
    } else {
        alert("Audio not available");
    }
}
