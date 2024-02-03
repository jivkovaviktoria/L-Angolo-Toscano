const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButtons.forEach(openButton => {
    openButton.addEventListener("click", () => {
        modal.showModal();
    });
});

closeButton.addEventListener("click", () => {
    modal.close();
});

document.getElementById('datePicker').addEventListener('change', function() {
    var date = new Date(this.value);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('dateText').textContent = formattedDate;
});

