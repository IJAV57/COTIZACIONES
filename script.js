// Cargar datos de clientes y productos al iniciar
let clientes = [];
let productos = [];

async function cargarDatos() {
    const resClientes = await fetch('clientes.json');
    clientes = await resClientes.json();

    const resProductos = await fetch('productos.json');
    productos = await resProductos.json();
}

document.addEventListener('DOMContentLoaded', cargarDatos);

// Autocompletar cliente
document.getElementById('clienteNo').addEventListener('input', function () {
    const clienteNo = this.value;
    const cliente = clientes.find(c => c.NumeroCliente === clienteNo);
    
    if (cliente) {
        document.getElementById('clienteNombre').value = cliente.Nombre;
        document.getElementById('clienteDomicilio').value = cliente.DomicilioFiscal;
        // Autocompleta los demás campos
    }
});

// Autocompletar producto
document.getElementById('producto').addEventListener('input', function () {
    const productoNombre = this.value;
    const producto = productos.find(p => p.Producto === productoNombre);

    if (producto) {
        document.getElementById('codigoProducto').value = producto.CodigoProducto;
        // Completa otros datos como Unidad y Precio
    }
function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Datos de la cotización
    doc.text("Cotización", 10, 10);
    doc.text("Nombre del Cliente: " + document.getElementById('clienteNombre').value, 10, 20);
    // Continúa con otros datos

    doc.save("cotizacion.pdf");
}
});
