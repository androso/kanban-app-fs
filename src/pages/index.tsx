import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanban app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} !mb-4`}>
          Welcome to my Kanban app
        </h1>
				<Link href="/login">
					<a className="btn btn-primary mb-4">Sign in</a>
				</Link>
				<Link href="/register">
					<a className="btn btn-secondary">Register</a>
				</Link>
			</main>
    </div>
  )
}

export default Home
