document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent
            .replace(/\s+/g, " ")
            .trim();



        const icon = copyButton.querySelector(".copy-icon");

        // icon paths
        const originalIcon = "src/assets/icons/copy-32.svg";
        const successIcon = "src/assets/icons/correct-svg.svg"; // for example

        navigator.clipboard.writeText(textToCopy).then(() => {

            // disable button
            copyButton.disabled = true;

            // change icon to success
            icon.src = successIcon;

            // revert after 1 second
            setTimeout(() => {
                icon.src = originalIcon;
                copyButton.disabled = false;
            }, 1000);
        })
    })
})