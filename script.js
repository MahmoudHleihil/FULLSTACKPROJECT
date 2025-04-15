window.onload = () => {
    initializeDateTimeUpdater();
    setupEmailHoverAndCopy();
    setupThemeToggle();
    showWelcomeToast();
    showRandomQuote();
};
  
function initializeDateTimeUpdater() {
    const dateTimeEl = document.getElementById("dateTime");
    const update = () => {
      dateTimeEl.textContent = `🕒 ${new Date().toLocaleString()}`;
    };
    update();
    setInterval(update, 1000);
}
  
function setupEmailHoverAndCopy() {
    const emailLink = document.getElementById("emailLink");
  
    emailLink.addEventListener("mouseover", () => {
      emailLink.style.textDecoration = "underline";
    });
  
    emailLink.addEventListener("mouseout", () => {
      emailLink.style.textDecoration = "none";
    });
  
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      const email = emailLink.textContent;
      navigator.clipboard.writeText(email)
        .then(() => {
          const toast = new bootstrap.Toast(document.getElementById("copyToast"));
          toast.show();
        })
        .catch(() => {
          alert("Failed to copy email.");
        });
    });
}
  
function setupThemeToggle() {
    const btn = document.getElementById("toggleThemeBtn");
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
}
  
function showWelcomeToast() {
    const toast = document.createElement("div");
    toast.className = "toast align-items-center text-bg-info border-0 show";
    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          👋 Welcome to my project!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;
    document.body.appendChild(toast);
  
    setTimeout(() => {
      bootstrap.Toast.getOrCreateInstance(toast).hide();
    }, 4000);
}
  
function showRandomQuote() {
    const quotes = [
      "Code is like humor. When you have to explain it, it’s bad.",
      "Fix the cause, not the symptom.",
      "Make it work, make it right, make it fast.",
      "Before software can be reusable it first has to be usable.",
      "Programs must be written for people to read."
    ];
  
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const container = document.getElementById("quoteContainer");
  
    const quoteEl = document.createElement("div");
    quoteEl.className = "alert alert-secondary mx-auto";
    quoteEl.style.maxWidth = "400px";
    quoteEl.textContent = `💡 ${quote}`;
  
    container.appendChild(quoteEl);
}  
  