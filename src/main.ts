// 1. We grab the text input. We use 'as HTMLInputElement' so TS knows it has a '.value' property.
const nameInput = document.getElementById("user-name") as HTMLInputElement;

// 2. We grab the button. 'as HTMLButtonElement' unlocks button properties like '.disabled'.
const submitButton = document.getElementById("submit-btn") as HTMLButtonElement;

// 3. We grab the paragraph tag. 'as HTMLParagraphElement' lets us modify text safely.
const greetingDisplay = document.getElementById("greeting-text") as HTMLParagraphElement;

// 4. We listen for a click event on our button.
submitButton.addEventListener("click", () => {
    // We extract whatever text the user has typed into the input field
    const typedName: string = nameInput.value;

    // If the input is completely empty, we alert the user and stop execution
    if (typedName.trim() === "") {
        greetingDisplay.innerText = "Please enter a valid name!";
        greetingDisplay.style.color = "red";
        return; // Exits the function early
    }

    // If they typed a name, display the greeting using template literals
    greetingDisplay.innerText = `Hello, ${typedName}! Welcome to TypeScript.`;
    greetingDisplay.style.color = "green";

    // Clear out the input field so it's ready for a new name
    nameInput.value = "";
});