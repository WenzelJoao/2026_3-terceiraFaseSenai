import express from "express";
import { createUser } from "./userService.js";

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
    try {
        const user = createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

export default app;