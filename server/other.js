const getHome =  (req,res)=>{
    res.json({
      Message:'Welcome to film Hub'
    })
  }
const getHealth = (req,res)=>{
    res.json({
      Message:"server is up and running"
    })
  }

  const getNotFound =(req,res)=>{
    res.status(400).json({
      Message:"API endpoint is not found"
    })
  }


  export {getHome, getHealth,getNotFound}