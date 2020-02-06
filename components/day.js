import React from 'react'

import styles from './day.module.css'

import Image from './image'

export default (props) => {
  return (
    <article className={`${styles.day} ${styles[`day${props.weekDay}`]}`}>
      <h2>{props.day}</h2>
      <Image />

    </article>
  )
}