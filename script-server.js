// script-server.js (for Node.js)
function validateLoginForm(email) {
    // Tu implementación existente
    return email.indexOf('@') !== -1;
}

function validateRegisterForm(email) {
    // Tu implementación existente
    return email.indexOf('@') !== -1;
}

module.exports = { validateLoginForm, validateRegisterForm };
