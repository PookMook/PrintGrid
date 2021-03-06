import React,{useState} from 'react'

import styles from './image.module.css'

export default (props) => {

  const [img,setImg] = useState('/default.png')

  const handleImage = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onloadend = (e)=>{
      setImg(e.target.result)
    }
    
  }

  const array = [props.className,styles.image]
  if(img==='/default.png'){
    array.push("noShow")
  }

  return (
    <figure className={array.join(' ')} style={{backgroundImage:`url('${img}')`}} >
      
    <label><input type="file" onChange={e=>handleImage(e)}/></label>

    </figure>
  )
}