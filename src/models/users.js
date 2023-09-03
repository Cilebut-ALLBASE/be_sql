const dbPool = require('../config/database')

const getAllUser = () => {
    const sqlQuery = 'SELECT * FROM karyawan';
    return dbPool.execute(sqlQuery)
}

const createNewUser = (body) => {
    const sqlQuery = `INSERT INTO karyawan (name, email, address, phone) VALUES ('${body.name}', '${body.email}', '${body.addres}', '${body.phone}')`
    return dbPool.execute(sqlQuery)
}

const updateUser = (body, id) => {
    const sqlQuery = `UPDATE emp SET name='${body.name}', email='${body.email}', addres='${body.addres}', phone='${body.phone}' WHERE id='${id}'`
    return dbPool.execute(sqlQuery)
}

const deleteUser = (id) => {
    const sqlQuery = `DELETE FROM emp WHERE id='${id}'`
    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}