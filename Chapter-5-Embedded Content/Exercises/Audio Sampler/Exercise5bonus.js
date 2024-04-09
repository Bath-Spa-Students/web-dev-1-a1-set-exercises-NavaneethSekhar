document.addEventListener('DOMContentLoaded', function() {
    const samples = document.querySelectorAll('.sample');
    samples.forEach(sample => {
        sample.addEventListener('click', function() {
            const soundName = this.dataset.sound;
            playAudio(soundName);
        });
    });
});

function playAudio(soundName) {
    const audio = new Audio(`${soundName}.mp3`);
    audio.play();
}