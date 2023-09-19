const toggleBtn = document.getElementById("toggle-btn");
const toggleBox = document.getElementById("toggle-box");

let speech = new SpeechSynthesisUtterance();
let speaking = false;
let voices = [];

toggleBtn.addEventListener("click", () => {
  toggleBox.style.backgroundColor = "#272156";
  toggleBox.innerHTML = `<div class="tg-bx-top">
    <h3>Choose Voice</h3>
    <button id="remove">x</button>
</div>
<select name="" id="select-voices">
</select>
<textarea name="" id="text-space" cols="30" rows="6" placeholder="Enter text to read..."></textarea>
<button id="Read-text">Read Text</button>`;
  toggleBox.addEventListener("click", (event) => {
    if (event.target.id === "remove") {
      toggleBox.style.display = "none";
      stopSpeaking();
      location.reload();
    }
  });
  toggleBtn.addEventListener("click", (event) => {
    if (event.target.id === "remove") {
      toggleBox.style.display = "none";
    }
    stopSpeaking();
    location.reload();
  });
  document.querySelector("#Read-text").addEventListener("click", () => {
    if (speaking) {
      stopSpeaking();
    }
    speech.text = document.querySelector("#text-space").value;
    window.speechSynthesis.speak(speech);
    speaking = true;
  });

  let voiceSelect = document.querySelector("#select-voices");

  function initializeVoices() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
      const option = new Option(voice.name, i);
      voiceSelect.appendChild(option);
    });
    speech.voice = voices[0];
  }

  initializeVoices();

  window.speechSynthesis.onvoiceschanged = () => {
    voiceSelect.innerHTML = "";
    initializeVoices();
  };
  voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
  });
});

function stopSpeaking() {
  window.speechSynthesis.cancel();
  speaking = false;
}

const img1 = document.getElementById("img1").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img2 = document.getElementById("img2").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img3 = document.getElementById("img3").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img4 = document.getElementById("img4").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img5 = document.getElementById("img5").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img6 = document.getElementById("img6").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img7 = document.getElementById("img7").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img8 = document.getElementById("img8").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img9 = document.getElementById("img9").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img10 = document.getElementById("img10").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img11 = document.getElementById("img11").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});
const img12 = document.getElementById("img12").addEventListener("click", () => {
  const text = event.currentTarget.querySelector("p").textContent;
  speakFunction(text);
});

function speakFunction(text) {
  let voiceSelect = text;
  speech.text = voiceSelect;
  window.speechSynthesis.speak(speech);
}

if (location.reload) {
  stopSpeaking();
}