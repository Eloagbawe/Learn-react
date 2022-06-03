import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  const bannerClick = () => {
    console.log('banner button clicked')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View stores nearby' clickHandler={bannerClick}/>
        <div className={styles.heroImage}>
        <Image src="/static/hero-image.png" width={700} height={400}/>
        </div>
      </main>

    </div>
  )
}
