const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid");
const bounties = require("../Data.js");
bountyRouter.route("/")

    .get((req, res) => {
        const { query } = req
        const queriedbounties = bounties.filter(bounty => {
            for (let key in query) {
                if (!Bounty.hasOwnProperty(key) || String(Bounty[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedbounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty)
    });
bountyRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundBounty = bounties.filter(Bounty => Bounty._id === id)[0];
        res.status(200).send(foundBounty)
    })
    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(Bounty => Bounty._id !== id)
        res.status(204).send()
    })
    .put((req, res) => {
        const { id } = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(Bounty => Bounty._id === id ? editedBounty = { ...Bounty, ...editedBounty } : Bounty);
        res.status(200).send(editedBounty)
    })
module.exports = bountyRouter;
