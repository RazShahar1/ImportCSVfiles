export default  function Handler(req,res){
            console.log(req.body);
            var data
            data=req.body
            res.status(200).json({})
            return(data)
            // return (<div>{data.map((d)=>{<h3>{d}</h3>})}</div>)  
        }



