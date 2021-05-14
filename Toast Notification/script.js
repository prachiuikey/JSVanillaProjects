const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notify = document.createElement('div');
    notify.classList.add('toast');

    notify.innerHTML = "Hey this is notification!";
    
    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    },5000);
}