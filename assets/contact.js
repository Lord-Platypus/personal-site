/* Contact form — mailto only, no backend, no data leaves the browser. */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var select = document.getElementById("cf-reason");
  var message = document.getElementById("cf-message");
  var btn = document.getElementById("cf-send");
  var lang = document.documentElement.lang === "en" ? "en" : "it";

  // Preselect the reason from the URL
  // (?reason=formazione / ?reason=training / ?reason=ai).
  var reason = (new URLSearchParams(location.search).get("reason") || "").toLowerCase();
  if (reason === "formazione" || reason === "training") {
    select.value = "training";
  } else if (reason === "ai" || reason === "ai-in-ufficio" || reason === "ai-at-work") {
    select.value = "ai";
  }

  var subjects = {
    it: { app: "Richiesta App", ai: "Richiesta AI in ufficio", training: "Richiesta Formazione" },
    en: { app: "App enquiry", ai: "AI at work enquiry", training: "Training enquiry" }
  };

  btn.addEventListener("click", function () {
    var subject = subjects[lang][select.value] || subjects[lang].app;
    var body = message.value || "";
    location.href = "mailto:emanuele.vinci.dev@gmail.com"
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);
  });
})();
