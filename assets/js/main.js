// Shared lightweight site interactions.
// Keep the Resources dropdown consistent across all pages that load this file.

document.addEventListener('DOMContentLoaded', function () {
  const resourceLinks = [
    { href: '/resources/', label: 'All Resources' },
    { href: '/new-zealand-apostille-requirements/', label: 'NZ Apostille Requirements' },
    { href: '/documents-for-overseas-use/', label: 'Documents for Overseas Use' },
    { href: '/apostille-vs-authentication-nz/', label: 'Apostille vs Authentication NZ' },
    { href: '/who-can-certify-documents-nz/', label: 'Who Can Certify Documents in NZ?' },
    { href: '/e-apostille-nz/', label: 'Paper vs E-Apostille NZ' }
  ];

  const currentPath =
    window.location.pathname.replace(/\/+$/, '/') || '/';

  document.querySelectorAll('header .nav-dropdown').forEach(function (dropdown) {
    const button = dropdown.querySelector('.nav-dropbtn');
    const menu = dropdown.querySelector('.nav-dropdown-menu');

    if (!button || !menu) return;

    if (
      button.textContent
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase()
        .startsWith('resources')
    ) {
      menu.innerHTML = '';

      resourceLinks.forEach(function (item) {
        const link = document.createElement('a');

        link.href = item.href;
        link.textContent = item.label;

        if (currentPath === item.href) {
          link.setAttribute('aria-current', 'page');
        }

        menu.appendChild(link);
      });
    }
  });
});
