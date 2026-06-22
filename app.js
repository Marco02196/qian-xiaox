const iconPaths = {
  location: `
    <path d="M12 21s6.2-5.4 6.2-11.1A6.2 6.2 0 0 0 5.8 9.9C5.8 15.6 12 21 12 21Z"></path>
    <circle cx="12" cy="9.8" r="2.1"></circle>
  `,
  scan: `
    <path d="M8 4H6a2 2 0 0 0-2 2v2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
    <path d="M20 16v2a2 2 0 0 1-2 2h-2"></path>
    <path d="M8 20H6a2 2 0 0 1-2-2v-2"></path>
    <rect x="8" y="8" width="8" height="8" rx="2"></rect>
  `,
  chat: `
    <path d="M5 6.5a7.4 7.4 0 0 1 7-3.2c4.3 0 7.7 2.8 7.7 6.3s-3.4 6.4-7.7 6.4c-.9 0-1.8-.1-2.6-.4L5 18.4l1.2-4A6 6 0 0 1 4.3 10c0-1.2.2-2.4.7-3.5Z"></path>
    <path d="M9 9.8h6"></path>
    <path d="M9 12.7h4"></path>
  `,
  students: `
    <circle cx="9" cy="8" r="3.2"></circle>
    <circle cx="16.5" cy="9.2" r="2.6"></circle>
    <path d="M3.8 19.2c.8-3.9 3-6 5.2-6s4.4 2.1 5.2 6"></path>
    <path d="M13.8 18.4c.7-2.7 2.2-4.1 4-4.1 1.7 0 3.1 1.4 3.7 4.1"></path>
  `,
  megaphone: `
    <path d="M4 13.3h3.2l9.8 4.4V6.3l-9.8 4.4H4a2 2 0 0 0-2 2v.6a2 2 0 0 0 2 2Z"></path>
    <path d="M7.4 15.4 8.8 20"></path>
    <path d="M20 9.4c1.2.8 1.8 2 1.8 3.6S21.2 15.8 20 16.6"></path>
    <path d="M18.2 11.2c.5.4.8 1 .8 1.8s-.3 1.4-.8 1.8"></path>
  `,
  schedule: `
    <rect x="4" y="5" width="16" height="15" rx="4"></rect>
    <path d="M8 3.5v3"></path>
    <path d="M16 3.5v3"></path>
    <path d="M4.5 10h15"></path>
    <path d="M8 14h3.2"></path>
    <path d="M8 17h6.7"></path>
  `,
  utilities: `
    <path d="M8.4 4.5c1.2 2.2.7 4.1-.9 5.7-1.8 1.9-2.1 4 .1 6.1"></path>
    <path d="M13 4.5c1.2 2.2.7 4.1-.9 5.7-1.8 1.9-2.1 4 .1 6.1"></path>
    <path d="M17.6 4.5c1.2 2.2.7 4.1-.9 5.7-1.8 1.9-2.1 4 .1 6.1"></path>
    <path d="M5 18.5h14"></path>
  `,
  checkin: `
    <circle cx="9" cy="8" r="3.2"></circle>
    <path d="M3.8 19.2c.7-4 2.9-6.2 5.2-6.2 1.9 0 3.6 1.5 4.6 4.1"></path>
    <path d="M17.3 10.5v7"></path>
    <path d="M13.8 14h7"></path>
  `,
  dorm: `
    <path d="M4 19V7.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 7.5V19"></path>
    <path d="M7 19v-5.5A2.5 2.5 0 0 1 9.5 11h5a2.5 2.5 0 0 1 2.5 2.5V19"></path>
    <path d="M4 19h16"></path>
    <path d="M8 8h2"></path>
    <path d="M14 8h2"></path>
  `,
  airConditioner: `
    <rect x="4" y="5" width="16" height="8" rx="3"></rect>
    <path d="M8 9h8"></path>
    <path d="M8 17c1.4-1.1 2.7-1.1 4 0s2.6 1.1 4 0"></path>
    <path d="M9 21c1.1-.8 2.1-.8 3.2 0"></path>
    <path d="M14 21c1.1-.8 2.1-.8 3.2 0"></path>
  `,
  temperature: `
    <path d="M10 13.2V5.8a3 3 0 0 1 6 0v7.4a5 5 0 1 1-6 0Z"></path>
    <path d="M13 8v7"></path>
  `,
  package: `
    <path d="m12 3.5 8 4.4v8.2l-8 4.4-8-4.4V7.9l8-4.4Z"></path>
    <path d="m4.5 8.2 7.5 4.2 7.5-4.2"></path>
    <path d="M12 12.4v8"></path>
    <path d="m8.2 5.8 7.6 4.3"></path>
  `,
  bike: `
    <circle cx="6.5" cy="16.5" r="3.2"></circle>
    <circle cx="17.5" cy="16.5" r="3.2"></circle>
    <path d="M9.7 16.5h3.2l2.2-5.1H10l-2 5.1"></path>
    <path d="M12.9 16.5 9.5 9.8"></path>
    <path d="M15.1 11.4h2.2"></path>
    <path d="M8.6 7.8h2"></path>
  `,
  bus: `
    <rect x="5" y="4.5" width="14" height="14" rx="3.5"></rect>
    <path d="M8 8.5h8"></path>
    <path d="M8 12.2h8"></path>
    <path d="M8.2 18.5v2"></path>
    <path d="M15.8 18.5v2"></path>
    <circle cx="8.7" cy="15.6" r=".9" fill="currentColor" stroke="none"></circle>
    <circle cx="15.3" cy="15.6" r=".9" fill="currentColor" stroke="none"></circle>
  `,
  sos: `
    <path d="M12 3.5 19.5 7v5.8c0 4.5-3.1 7.3-7.5 8.7-4.4-1.4-7.5-4.2-7.5-8.7V7L12 3.5Z"></path>
    <path d="M12 8v5"></path>
    <path d="M12 16.6h.1"></path>
    <path d="M8.2 11.2a4.2 4.2 0 0 1 7.6 0"></path>
  `,
  home: `
    <path d="M4.5 11.2 12 5l7.5 6.2"></path>
    <path d="M6.5 10.5V19h11v-8.5"></path>
    <path d="M10 19v-5h4v5"></path>
  `,
  life: `
    <path d="M17.6 4.6c-5.3.4-9.2 3.1-10.5 7.3-1 3.4.9 6 4.2 6.2 4.4.3 7.2-3.5 7.8-10.4"></path>
    <path d="M6.8 17.7c2.6-3.8 5.6-6.2 9.4-7.3"></path>
  `,
  study: `
    <path d="M5 6.2h5.4A3.6 3.6 0 0 1 14 9.8v9.7H8.2A3.2 3.2 0 0 1 5 16.3V6.2Z"></path>
    <path d="M19 6.2h-5a3.6 3.6 0 0 0-3.6 3.6v9.7"></path>
    <path d="M14 19.5h1.8a3.2 3.2 0 0 0 3.2-3.2V6.2"></path>
  `,
  profile: `
    <circle cx="12" cy="8" r="3.4"></circle>
    <path d="M5.5 20c.9-4.4 3.5-6.6 6.5-6.6s5.6 2.2 6.5 6.6"></path>
  `,
};

const createIcon = (name) => {
  const paths = iconPaths[name];
  if (!paths) return "";

  return `
    <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      ${paths}
    </svg>
  `;
};

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = createIcon(node.dataset.icon);
});

const tabs = document.querySelectorAll(".tab-bar button");
const airSwitch = document.querySelector(".switch");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

airSwitch?.addEventListener("click", () => {
  airSwitch.classList.toggle("is-on");
});
