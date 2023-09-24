// onClick button Read More
const btnReadMore = document.getElementById("btnReadMore");
const certificatesContainer = document.getElementById("certificates");
const containerCertificates = document.getElementById("containerCertificates");

btnReadMore.onclick = () => {
  if (containerCertificates.hidden) {
    containerCertificates.hidden = !containerCertificates.hidden;
    btnReadMore.innerText = "Hide";
  } else {
    containerCertificates.hidden = !containerCertificates.hidden;

    //scroll smooth to the top of the page
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    btnReadMore.innerText = "Read More";
  }
};

// Contact form
const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#trucazo");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:gabobrako@gmail.com?subject=nombre ${form.get(
      "name"
    )}  correo ${form.get("email")}&body=${form.get("message")}`
  );
  $buttonMailto.click();
}
