const db = require('../database')

module.exports = (req, res) => {
    try {
        db.find({}).sort({name: 1}).exec((err, data)=>{
            if(err){
                console.log(`error ${err}`)
                res.status(400).json({
                    error: err
                })
            }else{
                res.statusCode = 200;
                res.json({
                    data
                })
            }
        })  

    }catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }

}