const dbPool = require('../config/database');

const getAllUsers = async () => {
  try {
    const result = await dbPool.query('SELECT * FROM karyawan');
    return result.recordset; // Mengambil hasil record
  } catch (error) {
    throw error; // Lempar error untuk penanganan di controller
  }
}

const createNewUser = async (body) => {
  const { name, email, address, phone } = body;
  const sqlQuery = `INSERT INTO karyawan (name, email, address, phone) VALUES ('${body.name}', '${body.email}', '${body.address}', '${body.phone}')`;

  try {
    const result = await dbPool.query(sqlQuery, {
      name,
      email,
      address,
      phone,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (body, id) => {
  const { name, email, address, phone } = body;
  const sqlQuery = `UPDATE karyawan SET name='${body.name}', email='${body.email}', address='${body.address}', phone='${body.phone}' WHERE id='${id}'`;

  try {
    const result = await dbPool.query(sqlQuery, {
      name,
      email,
      address,
      phone,
      id,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  const sqlQuery = `DELETE FROM karyawan WHERE id='$id'`;

  try {
    const result = await dbPool.query(sqlQuery, {
      id,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers, // Perbarui nama fungsi ini untuk sesuai dengan nama yang benar
  createNewUser,
  updateUser,
  deleteUser,
};
