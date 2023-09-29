const { Orden } = require('../models');

// Crear una nueva orden
async function crearOrden(req, res) {
  try {
    const { nombreCliente, total } = req.body;
    const orden = await Orden.crear({ nombreCliente, total });
    res.status(201).json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

// Obtener todas las órdenes
async function obtenerTodasLasOrdenes(req, res) {
  try {
    const ordenes = await Orden.find();
    res.json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

// Obtener una orden por ID
async function obtenerOrdenPorId(req, res) {
  try {
    const ordenId = req.params.id;
    const orden = await Orden.find(ordenId);

    if (!orden) {
      res.status(404).json({ mensaje: 'Orden no encontrada' });
      return;
    }

    res.json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

// Actualizar una orden por ID
async function actualizarOrden(req, res) {
  try {
    const ordenId = req.params.id;
    const { nombreCliente, total } = req.body;
    const orden = await Orden.findByPk(ordenId);

    if (!orden) {
      res.status(404).json({ mensaje: 'Orden no encontrada' });
      return;
    }

    orden.nombreCliente = nombreCliente;
    orden.total = total;
    await orden.save();

    res.json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

// Eliminar una orden por ID
async function eliminarOrden(req, res) {
  try {
    const ordenId = req.params.id;
    const orden = await Orden.findByPk(ordenId);

    if (!orden) {
      res.status(404).json({ mensaje: 'Orden no encontrada' });
      return;
    }

    await orden.delete();
    res.json({ mensaje: 'Orden eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}