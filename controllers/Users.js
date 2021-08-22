const usuariosGet = (req, res) => {
  const query = req.query;

  res.json({
    msg: "get API - controllador",
    query,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put API",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
