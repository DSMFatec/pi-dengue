import { signToNewsletter } from "./service.js";

const form = document.getElementById("footer_news-form");
const submitButton = document.getElementById("footer_news-submit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  if (!email) {
    alert("Por favor, forneca um email válido.");
    return;
  }

  try {
    submitButton.disabled = true;
    const data = await signToNewsletter(email);
    alert(data.message);
    form.email.value = "";

    submitButton.disabled = false;
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao tentar se inscrever na newsletter.");
    submitButton.disabled = false;
  }
});
