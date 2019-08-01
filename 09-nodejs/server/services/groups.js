const Group = require('../models/group');
const {sendRequest} = require('../utils/request');
const devicesService = require('../services/devices');

module.exports = {
    getGroups,
    getGroupById,
    addGroup,
    removeGroup,
    updateGroup
};

function groupAdapter(group) {
    const {_id, state, devices, name} = group;
    return {
        id: _id,
        state,
        devices,
        name
    }
}
async function getGroups() {
    const groups = await Group.find({}).exec();

    return groups.map(groupAdapter);
}

async function getGroupById(groupId) {
    const group = await Group.findById(groupId).exec();

    if (group) {
        return groupAdapter(group)
    } else {
        return null;
    }
}

async function addGroup(groupData) {
    const group = new Group({
        state: 'off',
        ...groupData
    });

    await group.save();
}

async function removeGroup(groupId) {
    return await Group.findByIdAndDelete(groupId).exec();
}

async function updateGroup(groupId, data) {
    const group = await Group.findById(groupId);

    if (!group) {
        return null;
    }

    return await Group.findByIdAndUpdate(groupId, { ...data }).exec();
}
