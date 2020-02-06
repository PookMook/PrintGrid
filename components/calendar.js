import React from 'react'
import useSWR from 'swr'

import Day from './day'
import Header from './header'
import Footer from './footer'

import styles from './calendar.module.css'

export default () => {

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR(`/api/calendar/now`,fetcher)

  return (
    <>
      {error && <pre>{JSON.stringify(error,null,1)}</pre>}
      {data && <section className={styles.grid}>
        <Header/>
        {data.map(d=><Day key={d.date} {...d}/>)}
        <Footer/>
      </section>
      }
    </>
  )
}