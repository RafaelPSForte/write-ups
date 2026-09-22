/**
 * Security Researcher Portfolio - Main JS
 * GitHub Pages compatible (no build step, no frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initWriteups();
});

// ---- Writeups data & rendering ----
function initWriteups() {
  const grid = document.getElementById('writeups-grid');
  if (!grid) return;

  // ====================================================
  //  ADD YOUR WRITEUPS HERE
  // ====================================================
  const writeups = [
    {
      tag: 'Mobile',
      title: 'Bypassing Insecure Activity Access Controls',
      description: 'Research based on getCallingPackage(), getCallingActivity(), Intent.getPackage() and the referrer methods',
      date: '2026-09',
      url: 'writeups/caller-verification-bypass.html'
    }
  ];

  writeups.forEach(w => {
    const card = document.createElement('a');
    card.href = w.url;
    card.className = 'writeup-card';
    card.innerHTML = `
      <span class="writeup-tag">${w.tag}</span>
      <h3>${w.title}</h3>
      <p>${w.description}</p>
      <div class="writeup-meta">
        <span>${w.date}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}
