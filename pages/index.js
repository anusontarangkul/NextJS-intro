import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui magni consectetur animi velit natus officiis cum explicabo? Omnis dolore facilis id laboriosam velit nihil architecto nostrum et odit iste?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui magni consectetur animi velit natus officiis cum explicabo? Omnis dolore facilis id laboriosam velit nihil architecto nostrum et odit iste?</p>
      <Link href="ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
