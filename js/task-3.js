console.log(`Task-3`);

const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', updateName);

function updateName(event) {
    let name = event.target.value.trim();

    if (name === '') {
        name = 'Anonymous';
    }

    nameOutputEl.textContent = name;
}
