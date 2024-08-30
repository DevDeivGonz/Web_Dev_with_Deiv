function login() {
    const role = document.getElementById('role').value;
    
    switch (role) {
        case 'admin':
            window.location.href = 'dashboard_admin.html';
            break;
        case 'bodega':
            window.location.href = 'dashboard_bodega.html';
            break;
        case 'recepcion':
            window.location.href = 'dashboard_recepcion.html';
            break;
        case 'conductor':
            window.location.href = 'dashboard_conductor.html';
            break;
        default:
            alert('Perfil no reconocido.');
    }
}

function manageUsers() {
    alert('Función para gestionar usuarios.');
}

function viewReports() {
    alert('Función para ver reportes.');
}

function updateInventory() {
    document.getElementById('inventory-status').textContent = 'Inventario actualizado.';
}

function checkOrders() {
    alert('Mostrando órdenes.');
}

function registerArrival() {
    alert('Registro de llegada de envíos completado.');
}

function manageShipments() {
    document.getElementById('shipment-status').textContent = 'Gestionando envíos...';
}

function startRoute() {
    document.getElementById('route-status').textContent = 'Ruta iniciada.';
}

function updateRoute() {
    alert('Estado de ruta actualizado.');
}
