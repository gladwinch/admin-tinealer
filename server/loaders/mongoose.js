const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (!err) return console.log('CONNECTED TO DATABASE SUCCESSFULLY')

        console.log('[Error] COULD NOT CONNECT DATABASE', err)
    }
)