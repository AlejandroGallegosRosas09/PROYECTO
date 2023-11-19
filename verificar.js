// verificar.js
function validarCorreo(correo) {
    // Tu implementación existente
    if (correo.indexOf('@') === -1) {
        return 'La dirección de correo electrónico debe contener el símbolo \'@\'.';
    }

    if (correo.indexOf(' ') !== -1) {
        return 'La dirección de correo electrónico no debe contener espacios en blanco.';
    }

    // Verifica si hay más de un símbolo '@'
    if ((correo.match(/@/g) || []).length > 1) {
        return 'La dirección de correo electrónico solo puede contener un símbolo \'@\'.';
    }

    return 'Correo Validado con Éxito';
}

module.exports = { validarCorreo };
