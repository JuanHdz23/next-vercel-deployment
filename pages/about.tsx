import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>About - JC</title>
    //     <meta name="description" content="About Page" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <Navbar />

    //   <main className={styles.main}>

    //     <h1>About Page</h1>

    //     <h1 className={styles.title}>
    //       Ir a <a href="/">Home</a>
    //       Ir a <Link href="/">Home</Link>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/about.jsx</code>
    //     </p>
    //   </main>
    // </div>
    <>
     {/* <MainLayout>
       <DarkLayout> */}
        <h1>About Page</h1>

        <h1 className={'title'}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
        {/* </DarkLayout>
      </MainLayout> */}
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
