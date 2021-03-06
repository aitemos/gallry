import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Images, Sidebar,Footer} from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{padding:0}}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
        <Header/>
      
      <main className={styles.main} id="main" style={{padding:'20px 0px 0px 0px',textAlign:'center',display:'block'}}>
       <Sidebar/>
       <Images/>
       
      </main>
      <Footer/>
        

    </div>
  )
}

export default Home
