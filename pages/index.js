import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Link } from 'react-scroll'

export default function Home() {

  return (
    <div className={styles.app__container}>
    <Head>
      <title>Márcio Rocha</title>
      <meta name="description" content="The portfolio of Márcio Rocha." />
      <link rel="icon" href="https://www.seanhalpin.design/favicon-96x96.png" />
    </Head>

    <main className={styles.main}>
      <header className={styles.s__nav}>
        <ul className={styles.ul}>
          <li className={styles.logo}>
            <Image src="/favicon-96x96.png" alt='logo' width="70" height="70"/>
          </li>
          <li className={styles.li}>
            <Link to='about' href="#about" smooth={true}>
              <a>About me</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link activeClass="active" to='skills' spy={true} href='/#skills' smooth={true}>
              <a className={styles.navbar_text}>Skills</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link activeClass="active" to='work' spy={true} href='/#work' smooth={true}>
              <a className={styles.navbar_text}>Work</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to='contact' href='/#contact' smooth={true}>
              <a className={styles.navbar_text}>Contact</a>
            </Link>
          </li>
        </ul>
      </header>

      <section className={styles.section} id="home">
          <div className={styles.c__hero}>
            <div className={styles.flexy__block}>
              <div>
                <h1 className={styles.c_hero__title}>Hi! I'm Márcio</h1>
                <h1 className={styles.c_hero__subtitle}>Game Developer</h1>
              </div>
              <div>
                something
              </div>
            </div>
            <div className={styles.flexy__block}>
              <div className={styles.c_hero_anim}>
                <Image src="/background.png" alt='logo' width="912" height="912"/>
              </div>
            </div>
          </div>
      </section>

      <section className={styles.about_bg} id='about'>
        <div className={styles.about}>
          <div className={styles.section_title}>
            <h1>About me</h1>
          </div>
          <div className={styles.about_contents}>
            <div class="profile-picture">
              <Image src="https://i.kym-cdn.com/entries/icons/mobile/000/035/310/Peepo_Animation_Banner.jpg" alt='me' width={300} height={300}/>
            </div>
            <div className={styles.about_container__info}>
              <div className={styles.about_wrapper__info_text}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <span className='d-flex mt-5'>
                <a title="Download my resume" href={"https://raw.githubusercontent.com/marsRocha/marsRocha.github.io/master/README.md"}>Download CV</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section} id='work'>
        work
        <img
          src='https://i.kym-cdn.com/entries/icons/mobile/000/035/310/Peepo_Animation_Banner.jpg'
          alt=''
        />
      </section>
      <section className={styles.section} id='contact'>
        Contact
        <img
          src='https://i.kym-cdn.com/entries/icons/mobile/000/035/310/Peepo_Animation_Banner.jpg'
          alt=''
        />
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
        
              {/*import { useRouter } from "next/router";

              const router = useRouter();

              <button
                onClick={() => {
                  router.push({
                    pathname: "/",
                    hash: "about"
                  },undefined, {scroll: true});
                }}
              >
              Static page with hash (good)
              </button>*/}
    </main>
    </div>
  )
}
