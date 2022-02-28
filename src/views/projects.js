import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import styles from './projects.module.css'

const Projects = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Projects - Computer Smith</title>
        <meta property="og:title" content="Projects - Computer Smith" />
      </Helmet>
      <Header></Header>
      <div className={styles['container1']}>
        <div className={styles['Container2']}>
          <a
            href="https://code.computersmith.co.uk/PlexRatingsSync/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <FeatureCard
              text="Ratings sync and iTunes Smart Playlist import for Plex."
              title="Plex Ratings Sync"
              rootClassName="rootClassName"
              className={styles['component1']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/DS.Controls"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <FeatureCard
              text="A bunch of simple user controls."
              title="DS.Controls"
              rootClassName="rootClassName4"
              className={styles['component2']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/AutoMerge"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link2']}
          >
            <FeatureCard
              text="TFS changeset simple merge. Usefull when need merge bugfix changeset to several branches. Adds support for Visual Studio 2022."
              title="AutoMerge"
              Forked_From="CDuke/AutoMerge"
              rootClassName="rootClassName1"
              className={styles['component3']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/iTunesLibraryUpdater"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link3']}
          >
            <FeatureCard
              text="A simple tool to update iTunes ratings, and export playlist info."
              title="iTunes Library Updater"
              rootClassName="rootClassName2"
              className={styles['component4']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/PrivateGalleryCreator"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link4']}
          >
            <FeatureCard
              text="Create VSIX private gallery ATOM feed."
              title="Private Gallery Creator"
              Forked_From="madskristensen/PrivateGalleryCreator"
              rootClassName="rootClassName3"
              className={styles['component5']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/ColinsALMCornerCheckinPolicies"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link5']}
          >
            <FeatureCard
              text="This version has been updated from Colin's original to support Visual Studio 2019 and 2022 using Microsoft's guidelines using a Shared Project for the code."
              title="Colins ALM Corner Checkin Policies"
              Forked_From="colindembovsky/ColinsALMCornerCheckinPolicies"
              rootClassName="rootClassName5"
              className={styles['component6']}
            ></FeatureCard>
          </a>
          <a
            href="https://github.com/vbtrek/OutlookAutoArchive"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link6']}
          >
            <FeatureCard
              text="Apply auto archive rules across folders quickly and easily."
              title="Outlook Auto Archive"
              rootClassName="rootClassName6"
              className={styles['component7']}
            ></FeatureCard>
          </a>
        </div>
      </div>
      <div className={styles['container3']}>
        <a
          href="https://www.buymeacoffee.com/dereksmith"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link7']}
        >
          <img
            alt="image"
            src="/playground_assets/bmc-button-200h.png"
            className={styles['image']}
          />
        </a>
      </div>
    </div>
  )
}

export default Projects
