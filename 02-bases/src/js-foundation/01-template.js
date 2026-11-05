let title = "Welcome to Our Service!";
let body = "Thank you for signing up. We're excited to have you on board!";
let footer = "If you have any questions, feel free to reach out to our support team.";


// ELEMENTOS DE PLANTILLA PARA EXPORTAR A LA APLICACIÓN PRINCIPAL
const emailTemplate = `
  <h1>${title}</h1>
  <p>${body}</p>
  <footer>${footer}</footer>
`;

// FORMA DE EXPORTAR EL ELEMENTO DE PLANTILLA PARA USARLO EN OTRO ARCHIVO DESDE NODE.JS (FORMA BASICA)
module.exports = {
    emailTemplate
}