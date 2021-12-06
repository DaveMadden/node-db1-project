const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {

  if (req.body.name === undefined || req.body.budget === undefined){
    res.status(400).json({ message: "name and budget are required" })
  }
  else if (typeof req.body.name !== "string"){
    res.status(400).json({ message: "name of account must be a string" })
  }
  else if (typeof req.body.budget !== "number"){
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
  Account.getByName(req.body.name)
    .then(response => {
      console.log("response", response)
      if (response.length === 0){
          next();
      }
      else{
          res.status(400).json({ message: "that name is taken" })
      }
    })
    .catch(err => {
        res.status(500).json({ message: `${err}`})
    })
}

exports.checkAccountId = (req, res, next) => {
        console.log("CHECKING ID OF ", req.params.id)
  Account.getById(req.params.id)
        .then(response => {
            console.log
            if (!response){
                res.status(404).json({ message: "account not found" })
            }
            else{
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}`})
        })
}
