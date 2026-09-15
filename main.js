// Builds the project sections and the side index from js/projects.js,
// then keeps the index highlighted as the visitor scrolls.

function renderProjects() {
  const list = document.getElementById("project-list");
  const rail = document.getElementById("index-rail");
  if (!list || !rail) return;

  PROJECTS.forEach((p) => {
    // Section + card
    const section = document.createElement("section");
    section.className = "project-section";
    section.id = p.id;

    const linkHtml = p.link
      ? `<a class="view-link" href="${p.link}">View project</a>`
      : "";

    const metaHtml = p.meta
      ? `<div class="project-meta">${p.meta
          .map((m) => `<span>${m}</span>`)
          .join("")}</div>`
      : "";

    section.innerHTML = `
      <div class="project-card">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div>
          <span class="project-tag">${p.tag}</span>
          <h2>${p.title}</h2>
          <p class="descriptor">${p.descriptor}</p>
          ${metaHtml}
          ${linkHtml}
        </div>
      </div>
    `;
    list.appendChild(section);

    // Matching entry in the running index
    const a = document.createElement("a");
    a.href = `#${p.id}`;
    a.textContent = p.section;
    a.dataset.target = p.id;
    rail.appendChild(a);
  });

  setupScrollSpy();
}

function setupScrollSpy() {
  const links = document.querySelectorAll("#index-rail a");
  if (!links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(
          `#index-rail a[data-target="${entry.target.id}"]`
        );
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  document.querySelectorAll(".project-section").forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", renderProjects);
