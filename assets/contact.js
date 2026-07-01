/* Contact form — mailto only, no backend, no data leaves the browser. */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var select = document.getElementById("cf-reason");
  var email = document.getElementById("cf-email");
  var message = document.getElementById("cf-message");
  var btn = document.getElementById("cf-send");
  var lang = document.documentElement.lang === "en" ? "en" : "it";

  // Preselect the reason from the URL (?reason=formazione / ?reason=training).
  var reason = (new URLSearchParams(location.search).get("reason") || "").toLowerCase();
  if (reason === "formazione" || reason === "training") {
    select.value = "training";
  }

  btn.addEventListener("click", function () {
    var isTraining = select.value === "training";
    var subject = lang === "en"
      ? (isTraining ? "Training enquiry" : "App enquiry")
      : (isTraining ? "Richiesta Formazione" : "Richiesta App");
    var contactLine = (lang === "en" ? "Contact email: " : "Email di contatto: ") + (email.value || "");
    var body = (message.value || "") + "\n\n" + contactLine;
    location.href = "mailto:emanuele.vinci.dev@gmail.com"
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);
  });
})();
