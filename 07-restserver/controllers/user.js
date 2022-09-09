const { response } = require('express');

const userGet = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const userPut = (req, res = response) => {
    res.status(201).json({
        msg: 'put API - controller'
    });
}

const userPost = (req, res = response) => {
    res.json({
        msg: 'post API - controller'
    });
}

const userDelete = (req, res = response) => {
    res.status(418).json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}
