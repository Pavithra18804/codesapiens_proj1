function updateCharacterCount() {
    const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const maxLength = textarea.getAttribute("maxlength");
    const currentLength = textarea.value.length;

    charCount.textContent = `${currentLength} / ${maxLength}`;

    // If character limit is reached, change border to red
    if (currentLength >= maxLength) {
        textarea.classList.add("red-border");
    } else {
        textarea.classList.remove("red-border");
    }
}
