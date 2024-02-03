const buttons = document.querySelectorAll('.menu-button');
const allContent = document.querySelectorAll('.menu-content');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('menu-selected'));
        allContent.forEach(content => content.classList.add('hidden'));

        this.classList.add('menu-selected');

        const target = this.getAttribute('data-menu-target');
        document.querySelector(target).classList.remove('hidden');
        document.querySelector(target).classList.add('grid');
    });
});