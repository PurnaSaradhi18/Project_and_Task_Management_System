import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // TODO: Save user to DB (replace this with actual DB logic)
        return res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
