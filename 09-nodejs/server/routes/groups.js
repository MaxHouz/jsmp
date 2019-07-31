const express = require('express');
const router = express.Router();
const groupsService = require('../services/groups');

router.get('/', async (req, res) => {
    const groups = await groupsService.getGroups();
    res.json(groups);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const group = await groupsService.getGroupById(id);

    if (group) {
        res.json(group);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', async (req, res) => {
    const {name, devices} = req.body;

    await groupsService.addGroup({
        name,
        devices
    });

    res.sendStatus(201);
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await groupsService.removeGroup(id);

    res.sendStatus(201);
});

module.exports = router;
