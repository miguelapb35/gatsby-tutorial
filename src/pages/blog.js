import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p  className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium reiciendis tempore aperiam, voluptates voluptatibus consequuntur expedita dolor, asperiores quibusdam repellat debitis et ipsa vel totam?
        </p>
      </div>
    </Layout>
  )
}

export default blog
