import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota.css'

const BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota = (props) => {
  return (
    <div className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-container">
      <Helmet>
        <title>
          BlogPage003-Flashing-Costco-Feit-Smart-Bulbs-with-Tasmota - Computer
          Smith
        </title>
        <meta
          property="og:title"
          content="BlogPage003-Flashing-Costco-Feit-Smart-Bulbs-with-Tasmota - Computer Smith"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-container1">
        <div className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-feature-card">
          <h2 className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text">
            Flashing Costco Feit Smart Bulbs with Tasmota
          </h2>
          <h3 className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-heading">
            05-jan-2021
          </h3>
          <span>
            <span>
              About five years ago, a company in China came up with a low-cost
              microcontroller with Wi-Fi and a variety of I/O pins. The ESP8266
              proved to be incredibly cheap and versatile and has shown up in a
              ton of products since then. And the tinkerer/hacker community has
              embraced it, from Olimex to Adafruit to the ubiquitous Tuya and
              Sonoff products. If all this sounds like gibberish to you, let me
              explain more simply: Most generic Wi-Fi-controlled home automation
              devices today use the simple ESP8266 microcontroller, and these
              can run awesome open source software like Tasmota.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Costco sells a variety of home automation devices, from Ring
              cameras to WeMo switches to smart lightbulbs from Feit. These are
              often quite cheap too, with the Feit 60W bulbs currently priced at
              under $18 for two! But the best news is that these are supported
              by Tasmota and work perfectly!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Let&apos;s walk through the process of &quot;liberating&quot; a
              Costco Feit Smart Bulb.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Note that there are two slightly different models for sale as of
              2020, the BPA800/RGBW/AG/2 and BPA800/RGBW/AG/2(P). Both are
              supported by Tasmota but use slightly different templates. I found
              a pack of each in the same box at my local Costco so look closely
              and use the right template.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We&apos;re going to use the awesome Tuya-Convert software to
              install Tasmota over the air. It&apos;s a painless process and
              requires very little effort.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Before even opening the package, grab a Raspberry Pi and install
              the latest Raspbian/Raspberry Pi OS on it. Check out the
              Tuya-Connect GitHub page for details, but here&apos;s the quick
              and dirty:
            </span>
          </span>
          <span className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text13">
            <span>
              # git clone https://github.com/ct-Open-Source/tuya-convert
            </span>
            <br></br>
            <span># cd tuya-convert</span>
            <br></br>
            <span># ./install_prereq.sh</span>
            <br></br>
            <span># ./start_flash.sh</span>
          </span>
          <span>
            <span>
              Follow the notes on screen and connect your phone to the
              vtrust-flash wifi network, and place the bulb in connecting mode
              (turn on off 3 times to get it flashing quickly), then press Enter
              on your Pi to start the flashing.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Once the bulb has been flashed, it&apos;s time to configure it for
              your network. It will start a hotspot called
              &quot;tasmota-xxxx&quot;, which you&apos;ll connect to using any
              device with a browser. This will launch a captive portal to
              configure the device&apos;s Wi-Fi to associate with your network.
              Then the bulb will restart and join your Wi-Fi network instead of
              starting its own.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Next, locate the device&apos;s DHCP address and go there using a
              web browser. Click &quot;Firmware Upgrade&quot; from the main menu
              and perform an OTA upgrade by clicking &quot;Start upgrade.&quot;
              The device will reset and about 1 minute later will be running the
              latest version of Tasmota!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              The next step is configuring the device. Tasmota uses a
              &quot;template&quot; to configure the functions of the various
              GPIO pins. Many of these are listed at the Blakadder site,
              including for the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://templates.blakadder.com/feit_electric-BPA800RGBWAG2P"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text26">
                BPA800/RGBW/AG/2(P)
              </span>
            </a>
            <span>
              {' '}
              and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://templates.blakadder.com/feit_electric-BPA800RGBWAG2.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text28">
                BPA800/RGBW/AG/2
              </span>
            </a>
            <span>
              . On a fresh install, you can simply paste the template in on the
              &quot;Configuration -&gt; Configure Other&quot; page, or you can
              manually enter it on the &quot;Configure Template&quot; page.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              You will also want to enter a few parameters in various spots in
              the user interface:
            </span>
          </span>
          <ul className="list">
            <li className="list-item">
              <span>
                <span>
                  Perhaps enter &quot;Configuration -&gt; Configure
                  Logging&quot; and enable Syslog and enter your Syslog host.
                </span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Check &quot;Configuration -&gt; Configure WiFi&quot; for your
                  AP SSID and Password and optionally enter a Hostname.
                </span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Go to &quot;Configuration -&gt; Configure MQTT&quot; and enter
                  your MQTT broker IP address, username, and password. Also set
                  a unique Topic.
                </span>
                <br></br>
                <span></span>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Go to &quot;Configuration -&gt; Configure Other&quot; and give
                  the device a unique Device Name and Friendly Name 1. Also
                  consider adding a Web Admin Password.
                </span>
                <br></br>
                <span></span>
              </span>
            </li>
          </ul>
          <span>
            <span>
              The device will restart when you click &quot;Save&quot; on these
              screens, but don&apos;t worry - it restarts really quickly!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Next we have to enter a few things on the Console that can&apos;t
              be configured from the menus. Go to &quot;Console&quot; from the
              Main Menu and enter the following commands one at a time. These
              adjust the bulb to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://templates.blakadder.com/feit_electric-BPA800RGBWAG2P"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text48">
                disable Gamma, properly set the color slider, and enable
                auto-discovery in Home Assistant
              </span>
            </a>
            <span>
              . I like setting &quot;PowerOnState 1&quot; so it will turn on
              automatically when power is applied like a regular lightbulb.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://tasmota.github.io/docs/MQTT/#retained-mqtt-messages"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="blog-page003flashing-costco-feit-smart-bulbs-with-tasmota-text50">
                PowerRetain
              </span>
            </a>
            <span>
              {' '}
              to retain power state between reboots of Home Assistant.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota
