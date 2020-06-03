const db = require('../database')

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
    


    db.update({_id: req.params.id}, data, err=>{
        if(err){
            console.log(`error: ${err}`)
            res.status(400).json({
                error: err
            })
        }else{
           res.status(200).json(req.body)       
        }
    })   

    }catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }

}