import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >

        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui magni consectetur animi velit natus officiis cum explicabo? Omnis dolore facilis id laboriosam velit nihil architecto nostrum et odit iste?</p>

        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui magni consectetur animi velit natus officiis cum explicabo? Omnis dolore facilis id laboriosam velit nihil architecto nostrum et odit iste?</p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}
