import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

console.log('Hello World!')
// this is a comment

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})