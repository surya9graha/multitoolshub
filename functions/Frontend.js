async function generateContent(prompt) {
    const res = await fetch("https://YOUR-FUNCTION-URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await res.json();
    console.log(data.result);
  }