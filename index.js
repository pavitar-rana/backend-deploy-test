const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = {
        name,
        email,
        password,
    };
    users.push(user);

    res.status(201).json({ message: "User created successfully", users });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
