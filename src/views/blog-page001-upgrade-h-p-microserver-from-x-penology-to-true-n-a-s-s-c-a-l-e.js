import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e.module.css'

const BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          BlogPage001-Upgrade-HP-Microserver-from-XPenology-to-TrueNAS-SCALE -
          Computer Smith
        </title>
        <meta
          property="og:title"
          content="BlogPage001-Upgrade-HP-Microserver-from-XPenology-to-TrueNAS-SCALE - Computer Smith"
        />
      </Helmet>
      <Header rootClassName="rootClassName1"></Header>
      <div className={styles['container1']}>
        <div className={styles['FeatureCard']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
          </svg>
          <h2 className={styles['text']}>
            Upgrade HP Microserver from XPenology to TrueNAS SCALE
          </h2>
          <h3 className={styles['Heading']}>17-Nov-2021</h3>
          <span className={styles['text01']}>
            <span>
              I&apos;ve been running Synology DSM for a few years now using the
              XPenology loader from Jun v1.02b. This has been great for years
              now, but I wanted to get it updated to the latest.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I have 2 HP Microservers Gen8, an older one with an Intel Celeron
              G1610T and 8GB of RAM, and a newer one with an Intel i3-3240 and
              12GB RAM.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I tested the latest Jun loader on my older machine which went
              fairly well but I had some issues and decided that it was quite a
              lot of research and work to get XPenology working so looked for an
              alternative. I wanted a NAS that would be capable of running
              Docker&apos;s, and the one that came out top was TrueNAS SCALE, a
              new offering from iXSystems which is based on Linux and can run
              Docker apps.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I decided to give TrueNAS SCALE a go. The install was very easy
              and the software will run all the Docker apps I want. The UI of
              TrueNAS is much more techie than Synology and seems to be aimed at
              people that know Linux (which I don&apos;t). The forums can be
              hard work because there are lots of very clever Linux people that
              like to assume everyone knows Linux console commands, but
              thankfully I didn&apos;t need to do much console work.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I use my server primarily for file storage and running Docker apps
              for Home Assistant, Node-RED, mosquitto, Plex, Resilio Sync, Plex.
              All of these installed fairly easily using either the built in
              catalog, or the truecharts catalog. An migration of data from one
              server to the other was simply a case of copying the mapped data
              folders from the live server to my new test server using SMB
              shares.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE
