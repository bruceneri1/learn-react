// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/state'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
    </div>
  )
}
