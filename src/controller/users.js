const userModels = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [dataDB] = await userModels.getAllUsers();

        res.json({
            message: "GET all users succsess", 
            data: dataDB,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error,
        })
    }
}

const createNewUsers = async (req, res) => {
    try {
        await userModels.createNewUsers(req.body);

        res.json({
            message: "CREATE new user succsess",
            body: req.body
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await userModels.updateUser(body, id)

        res.json({
            message: "UPDATE user succsess",
            body: {
                id: id,
                ...body
            }
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await userModels.deleteUser(id);
        res.json({
            message: "DELETE user ID "+id+" succsess",
            body: null
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: ErrorEvent,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}