import Group from "../models/Group.js";

export const createGroup = async (req, res) => {
    try {
        const { name, members } = req.body;
        const group = await Group.create({ name, members });
        res.status(201).json(group);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({ members: req.user.id });
        res.json(groups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
