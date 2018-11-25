const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', handleUpdate));
inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}
