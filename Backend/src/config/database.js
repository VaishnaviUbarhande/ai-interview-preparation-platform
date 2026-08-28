const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        // A silent console.log() here made every subsequent request just
        // hang/time out with no clue why. Fail loudly instead so a bad
        // MONGO_URI is obvious immediately in the server logs.
        console.error("Failed to connect to MongoDB:", err.message)
        process.exit(1)
    }
}

module.exports = connectToDB