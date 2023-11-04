const events = [
  {
    src: "./img/integrantes/integrante-1.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Presentación libro impreso de “Conceptos Computacionales Nahualt – Español”.",
    email: "example@zongolica.tecnm.mx",
    status: "Proximamente",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-2.png",
    name: "Martin Contreras de la Cruz",
    alias: "@Martin",
    type: "Presentación libro impreso de “Conceptos Computacionales Nahualt – Español”.",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },

  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-2.png",
    name: "Martin Contreras de la Cruz",
    alias: "@Martin",
    type: "Presentación libro impreso de “Conceptos Computacionales Nahualt – Español”.",
    email: "example@zongolica.tecnm.mx",
    status: "Pendiente",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
  {
    src: "./img/integrantes/integrante-3.png",
    name: "Ricardo García Castro ",
    alias: "@Martin",
    type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciber Seguridad..",
    email: "example@zongolica.tecnm.mx",
    status: "Terminado",
    date: "2023-10-22T13:12:00Z",
  },
];

const tableWidget = document.getElementsByClassName("table-widget");

const itemsOnPage = 5;

const numberOfPages = Math.ceil(events.length / itemsOnPage);

const start = new URLSearchParams(window.location.search).get("page") || 1;

const mappedRecords = events
  .filter(
    (_, i) => (start - 1) * itemsOnPage < i + 1 && i + 1 <= start * itemsOnPage
  )
  .map((teamMember) => {
    return `<tr>
          <td class="team-member-profile">
              <img
                  src="${teamMember.src}"
                  alt="${teamMember.name}"
              >
              <span class="profile-info">
                  <span class="profile-info__name">
                      ${teamMember.name}
                  </span>
                  <span class=profile-info__alias>
                      ${teamMember.email}
                  </span>
              </span>
          </td>
          <td>
              ${teamMember.type}
          </td>
          <td>
              <span
                  class="status status--${teamMember.status}"
              >
                  ${teamMember.status}
              </span>
          </td>
          <td>
          ${new Date(teamMember.date).toLocaleDateString("en-us", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
                </td>
            </tr>`;
  });

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
  const pageNumber = i + 1;
  linkList.push(
    `<li>
            <a
                href="?page=${pageNumber}" 
                ${pageNumber == start ? 'class="active1"' : ""} 
                title="page ${pageNumber}">
                ${pageNumber}
            </a>
        </li>`
  );
}

const table = DOMPurify.sanitize(`<table>
    <caption>
        Calendario
        <span class="table-row-count">(${events.length})</span>
    </caption> 
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Evento</th>
            <th>Estado</th>
            <th>Fecha</th>
        </tr>
    </thead>
    <tbody id="table-rows">
        ${mappedRecords.join("")}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <ul class="pagination">
                    <!--? generated pages -->
                    ${linkList.join("")}
                </ul>
            </td>
        </tr>
    </tfoot>
</table>`);

tableWidget[0].innerHTML = table;
