const db = require('../database')

module.exports = (req, res) => {
    try {
    db.remove({_id: req.params.id}, {}, err=>{
        if(err){
            console.log(`error: ${err}`)
            res.status(400).json({
                error: err
            })
        }else{
           res.status(200).json(req.params.id)       
        }
    })   

    }catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }

}