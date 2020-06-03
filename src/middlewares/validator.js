//responsible for making the necessary checks
module.exports = (req, res, next) =>{
    const {title, value, date} = req.body
    const regexValue = /^(\d*\.)?\d+$/

    const regexDate1 = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    const regexDate2 = /([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/ 
    
    if(title.length < 5 && title.length < 100)
        return res.status(400).send({error: 'title is not correct'})
    
    if(!regexValue.test(value))
        return res.status(400).send({error: 'number is not correct'})   
    
    if(!regexDate1.test(date) && !regexDate2.test(date))
        return res.status(400).send({error: 'the date format cannot be saved'})       
  
    next();    
};