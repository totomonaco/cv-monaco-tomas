document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.tab-content');
    const extraProjects = document.getElementById('extra-projects');
    const btnViewMore = document.getElementById('btn-view-more');

    // Función para cambiar de sección
    function switchSection(targetId) {
        // Ocultar todo
        sections.forEach(s => s.classList.remove('active'));
        links.forEach(l => l.classList.remove('active'));

        // Mostrar lo que elegimos
        document.getElementById(targetId).classList.add('active');
        
        // Marcar el link del menú como activo
        const menuLink = document.querySelector(`.menu .nav-link[data-target="${targetId}"]`);
        if (menuLink) menuLink.classList.add('active');

        // Si entramos a cualquier sección, reseteamos los proyectos extra
        if (extraProjects && btnViewMore) {
            extraProjects.style.display = 'none';
            btnViewMore.style.display = 'block'; // Volvemos a mostrar el botón
        }
    }

    // Escuchar los clics del menú
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            switchSection(targetId);
        }
    });

    // Lógica del botón Ver Más
    if (btnViewMore) {
        btnViewMore.addEventListener('click', function() {
            extraProjects.style.display = 'grid';
            this.style.display = 'none';
        });
    }

    // Botón de enviar formulario
    const btnSend = document.getElementById('btnSend');
    if (btnSend) {
        btnSend.addEventListener('click', () => {
            alert('¡Gracias! Tu mensaje ha sido enviado correctamente.');
        });
    }
});