import React from 'react'

const GalleryCard = ({item}) => {
    let {title,imgUrl} = item
    return (
        
       <div clasName="item-content" style={{backgroundImage:`URL(${imgUrl})`,backgroundPosition:"center",backgroundSize:"cover",width:"250px",height:"250px",display: "flex", alignItems: "flex-end",justifyContent: "center",textAlign:"center",margin:"1rem",borderRadius:"8px"}}>
           {title? <h5 style={{backgroundColor:"black",color:"white",width:"inherit",padding:"5px",opacity:"0.7"}}>{title}</h5>:null}
            
       </div>
    )
}

export default GalleryCard;
