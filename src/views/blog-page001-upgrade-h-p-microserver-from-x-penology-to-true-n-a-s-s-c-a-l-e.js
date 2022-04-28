import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e.css'

const BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE = (props) => {
  return (
    <div className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-container">
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
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-container1">
        <div className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-feature-card">
          <h2 className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-text">
            Upgrade HP Microserver from XPenology to TrueNAS SCALE
          </h2>
          <h3 className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-heading">
            17-Nov-2021
          </h3>
          <span className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-text01">
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
              Docker&apos;s, and the one that came out top was
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.truenas.com/truenas-scale/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page001upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e-text07">
                TrueNAS SCALE
              </span>
            </a>
            <span>
              , a new offering from iXSystems which is based on Linux and can
              run Docker apps.
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
