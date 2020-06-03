const db = require('../database');

module.exports = (req, res) => {
    try {
     
    const {title, value, date, comment} = req.body;
    const porcetagem = 5;
    let tax = (value*(porcetagem/100));    
    
    let data = {
        title, 
        value, 
        date,
        comment,
        tax
    };

    db.insert(data, (err, data)=>{
        if(err){
            console.log(`error: ${err}`)
            res.status(400).json({
                error: err
            })
        }else{
           res.status(200).json(data)       
        }
    })   

    }catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }

}