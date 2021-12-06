const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {

  console.log("type of name: ", typeof req.body.name)

  if (!req.body.name || !req.body.budget){
    res.status(400).json({ message: "name and budget are required" })
  }
  else if (typeof req.body.name !== "string"){
    console.log("type of name: ", typeof req.body.name)
    res.status(400).json({ message: "name of account must be a string" })
  }
  else if (typeof req.body.budget !== "number"){
    console.log("type of name: ", typeof req.body.name)
    res.status(400).json({ message: "budget of account must be a number" })
  }
  else{
    req.body.name = req.body.name.trim()
    if (req.body.name.length < 3 || req.body.name.length > 100){
      res.status(400).json({ message: "name of account must be between 3 and 100" })
    }
    else if (req.body.budget < 0 || req.body.budget > 1000000){
      res.status(400).json({ message: "budget of account is too large or too small" })
    }
    else{
      next();
    }
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
