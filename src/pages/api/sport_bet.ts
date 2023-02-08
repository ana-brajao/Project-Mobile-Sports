export default function validate(req, res){ 
    let data = JSON.parse(req.body)
    let number = data.valueAposta
    if (number %2==0){
        res.status(200)
    } 
    else res.status(400)
}