const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

const uri = 'mongodb+srv://ZwayneLars:Lars123@cluster0.iyswi2k.mongodb.net/'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.error('Connection error', err)
})

//Define user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema)

//This is Register Endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body

    //define of Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    try {
        const newUser = new User({username, password: hashedPassword})
        await newUser.save()
        res.status(201).send('User registered successfully')
    } catch (error) {
        res.status(500).send('Failed to register user')
    }
})

//This is Login Endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).send('User not found')
        }

        const isMatch = await bcrypt.compare(password, user.password) 

        if (!isMatch) {
            return res.status(401).send('Invalid credentials')
        }


        const token = jwt.sign({ usernamme: user.username }, 'secret-key', { expiresIn: '1h' })
        res.json({ token })
    } catch (error) {
        res.status(500).send('Login failed')
    }
})

app.get('/', (req, res) => {
    res.send('Hello world! Test App and MongoDB')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})