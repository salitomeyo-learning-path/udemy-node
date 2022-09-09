const { response } = require('express');

const userGet = (req, res = response) => {
    const query = req.query;
    
    res.json({
        msg: 'get API - controller',
        query
    });
}

const userPut = (req, res = response) => {
    const { id } = req.params;
    
    res.status(201).json({
        msg: 'put API - controller',
        id
    });
}

const userPost = (req, res = response) => {
    const body = req.body;
    
    res.json({
        msg: 'post API - controller',
        body
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
