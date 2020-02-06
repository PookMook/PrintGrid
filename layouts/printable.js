import React, {useState} from 'react'
import styles from './printable.module.css'

export default (props) => {

  const [print,setPrint] = useState(false)

  return (
    <main className={[styles.print]}>
      <p className={print?styles.previewOn:null} onClick={()=>setPrint(!print)}>Toggle Print preview</p>
      <article className={print?styles.preview:null}>
        {props.children}
      </article>
    </main>
  )
}