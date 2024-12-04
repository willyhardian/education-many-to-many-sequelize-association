const express = require("express");
const app = express();
const port = 3000;
const { User, Project, UserProject } = require("./models/index.js");

app.get("/", async (req, res) => {
    const users = await Project.findAll({
        include: {
            model: User, // to do many to many or super many to many, we do User include to Project directly
            // through: {
            //     attributes: ["id", "role"], // Specify fields to include from the junction table
            // },
        },
    });

    //double one to many
    // const users = await User.findAll({
    //     include: {
    //         model: UserProject,
    //         include: {
    //             model: Project, // basically we include from User until Project to do double one to many
    //         },
    //     },
    // });

    // const users = await Project.getAllProjects(); //static method example
    res.send(users);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
