'use strict';

const repositorio = require('../repositories/servico-repositorio');

exports.Inserir = async (req, res) => {
    try {
        const data = repositorio.Inserir(req.body);
        res.status(200).send({
            message: 'Servico cadastrado.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar',
            data: e
        });
    }
}

exports.Alterar = async (req, res) => {
    try {
        const data = repositorio.Alterar(req.body.id, req.body);
        res.status(200).send({
            message: 'Servico alterada.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao alterar',
            data: e
        });
    }
}

exports.Remover = async (req, res) => {
    try {
        const data = repositorio.Remover(req.body.id);
        res.status(200).send({
            message: 'Servico removido.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao remover',
            data: e
        });
    }
}

exports.PegarServicoID = async (req, res) => {
    try {
        const data = await repositorio.PegarServicoID(req.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objeto',
            data: e
        });
    }
}

exports.PegarTodos = async (req, res) => {
    try {
        const data = await repositorio.PegarTodos();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objetos',
            data: e
        });
    }
}
