import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './blog-page002-the-road-to-apple-car-play-in-an-older-car.css'

const BlogPage002TheRoadToAppleCarPlayInAnOlderCar = (props) => {
  return (
    <div className="blog-page002-the-road-to-apple-car-play-in-an-older-car-container">
      <Helmet>
        <title>
          BlogPage002-The-Road-to-Apple-CarPlay-in-an-older-car - Computer Smith
        </title>
        <meta
          property="og:title"
          content="BlogPage002-The-Road-to-Apple-CarPlay-in-an-older-car - Computer Smith"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="blog-page002-the-road-to-apple-car-play-in-an-older-car-container1">
        <div className="blog-page002-the-road-to-apple-car-play-in-an-older-car-feature-card">
          <h2 className="blog-page002-the-road-to-apple-car-play-in-an-older-car-text">
            Upgrade HP Microserver from XPenology to TrueNAS SCALE
          </h2>
          <h3 className="blog-page002-the-road-to-apple-car-play-in-an-older-car-heading">
            17-Nov-2021
          </h3>
          <span>
            <span>
              I wanted to add Apple CarPlay to my 2013 Land Rover Freelander 2,
              which turned out to be easier said than done!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              There didn&apos;t seem to be an easy way to replace the head unit
              in the car with a new unit that could run CarPlay.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I then found a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.redmondpie.com/how-to-add-wireless-carplay-to-any-car-with-a-cheap-android-tablet-adapter-video/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page002-the-road-to-apple-car-play-in-an-older-car-text07">
                website
              </span>
            </a>
            <span>
              {' '}
              where
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.redmondpie.com/author/taimurasad/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page002-the-road-to-apple-car-play-in-an-older-car-text09">
                Taimur Asad
              </span>
            </a>
            <span>
              {' '}
              had used an old android tablet with a USB device to make it a
              CarPlay unit so I thought I&apos;d give this a try.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>I bought myself the following items:</span>
          </span>
          <ul className="blog-page002-the-road-to-apple-car-play-in-an-older-car-ul list">
            <li className="list-item">
              <span>
                <span>A micro USB to USB OTG (on the go) adapter</span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>Amazon Fire HD 8 tablet</span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  A USB
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.ebay.co.uk/sch/i.html?_from=R40&amp;_trksid=p2334524.m570.l1313&amp;_nkw=carlinKit&amp;_sacat=0&amp;LH_TitleDesc=0&amp;_osacat=0&amp;_odkw=usb+12v+socket"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="blog-page002-the-road-to-apple-car-play-in-an-older-car-text21">
                    carlinKit
                  </span>
                </a>
                <span> which supported wireless CarPlay</span>
                <br></br>
                <span></span>
              </span>
            </li>
          </ul>
          <span>
            <span>
              I waited patiently for all the bits to arrive. Installed the APK
              on the tablet. When I had all the parts, plugged it all together,
              and hey presto I had a good working CarPlay device, with all the
              CarPlay compatible apps on my phone appearing on the device.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I installed a couple of hacks on the tablet to get it to not
              sleep:
            </span>
          </span>
          <ul className="blog-page002-the-road-to-apple-car-play-in-an-older-car-ul1 list">
            <li className="list-item">
              <span>
                <span>Enabled developer mode and enabled always on</span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>Removed the Lock Screen</span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Always on still dimmed the screen which I didn&apos;t like, so
                  another app sorted that
                </span>
                <br></br>
                <span></span>
              </span>
            </li>
          </ul>
          <span>
            <span>
              The final thing was to get a splitter cable so I could have the
              tablet charging when the car was on. This is when everything
              started to go downhill...
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              I tried a couple of splitter cables with no joy, then after a bit
              of web searching found out that not many tablets support being
              charged and having a USB device attached simultaneously. So my
              plans are scuppered, for now
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogPage002TheRoadToAppleCarPlayInAnOlderCar
