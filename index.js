const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '44c49fd572b14b5d913a41dca78bea51',
  captureUncaught: true,
  captureUnhandledRejections: true,
})



const app = express()

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Chewy hit port ${port}`))