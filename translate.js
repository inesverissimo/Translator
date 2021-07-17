
/* This funtion clears the text in the textarea "insert-text" */
function eraseText() {
    document.getElementById("insertText").value = "";
}

/* This funtion is responsible to make the API request to DeepL API */
async function fun(res) {
    const data = {
        auth_key: "5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx",
        text: document.getElementById("insert-text").value,
        target_lang: document.getElementById("languages").value
    }

    fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: new URLSearchParams(data),
    })
    .then(response=>response.json())
    .then(data=>{document.getElementById("translated-text").value = data.translations[0].text;})
}
