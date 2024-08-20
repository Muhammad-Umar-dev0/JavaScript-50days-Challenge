const textarea = document.querySelector('textarea');
const voiceList = document.querySelector('select');
const btn = document.querySelector('button');

let synth = speechSynthesis,
    isSpeaking = true;

function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function speech(text) {
    let utter = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utter.voice = voice;
        }
    }
    synth.speak(utter);
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (textarea.value !== "") {
        if (!synth.speaking) {
            speech(textarea.value);
        }
        if (textarea.value.length > 80) {
            let interval = setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    btn.innerText = "Convert to Speech";
                    clearInterval(interval);  
                }
            }, 500);
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                btn.innerText = "Pause Speech";
            } else {
                synth.pause();
                isSpeaking = true;
                btn.innerText = "Resume Speech";
            }
        } else {
            btn.innerText = "Convert to Speech";
        }
    }
});
