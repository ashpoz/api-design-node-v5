import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res
    .send({
      message: 'hi!',
    })
    .status(200)
})

export { app }

export default app