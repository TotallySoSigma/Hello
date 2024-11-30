function changeColor() {
    let selectedColor;
    const colors = document.getElementsByName('rb');

    for (const aColor of colors) {
        if (aColor.checked) {
            selectedColor=aColor.value;
        }

    }
    document.body.style.backgroundColor=selectedColor;
}