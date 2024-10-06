const synth = window.speechSynthesis;
function readAloud(message) {
    message = message.replaceAll("<br>", "")
    const utterThis = new SpeechSynthesisUtterance(message);
    utterThis.lang = "en-US";
    synth.speak(utterThis);
}
