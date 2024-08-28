function resizeIcons() {
    // Select all <i> elements
    const icons = document.querySelectorAll('.icon-tray > i');

    icons.forEach(icon => {
        const parent = icon.parentElement;
        const parentStyle = window.getComputedStyle(parent);

        const parentColumns = parentStyle.gridTemplateColumns;

        icon.style.fontSize = parentColumns.split(" ")[0];
    });
}

window.addEventListener('load', resizeIcons);
window.addEventListener('resize', resizeIcons);