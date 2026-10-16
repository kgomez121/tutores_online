/* TutoresOn-Line · Script compartido
   Es temporal: sirve para pasar de una pantalla a otra mientras no hay backend.
   Cuando exista la API, cada formulario se enviará con fetch() a su endpoint. */

// Formularios con data-destino: al enviarse (y estar completos) pasan a la siguiente pantalla.
document.querySelectorAll('form[data-destino]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const rol = form.elements.rol ? form.elements.rol.value : '';
    location.href = (rol === 'tutor' && form.dataset.destinoTutor) || form.dataset.destino;
  });
});

// Resumen de la reserva (solo en tutor.html): se actualiza al elegir franja o modalidad.
const resumen = document.getElementById('resumen-txt');
if (resumen) {
  const form = resumen.closest('form');
  const actualizar = () => {
    const franja = form.elements.franja.value;
    const modalidad = form.elements.modalidad.value.toLowerCase();
    resumen.textContent = `${franja} · Modalidad ${modalidad} · 1 hora · ${resumen.dataset.tarifa}`;
  };
  form.addEventListener('change', actualizar);
  actualizar();
}
