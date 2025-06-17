document.addEventListener("DOMContentLoaded", () => {
	document.getElementById('yds-link').addEventListener('click', ydslink);
	document.getElementById('batch-link').addEventListener('click', batchlink);
	document.getElementById('disbot-link').addEventListener('click', botlink);
});


async function ydslink() {
    window.open("https://github.com/transfem-emilia/youtube-downloader-script/releases/latest");
}

async function batchlink() {
    window.open("https://github.com/transfem-emilia/chromium-updater-batch-script/releases/latest");
}

async function botlink() {
    window.open("https://github.com/transfem-emilia/translate-bot")
}