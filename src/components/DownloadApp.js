import React from 'react';
import appstore from '../asset/svg/download_on_app_store.svg';
import playstore from '../asset/svg/get_it_on_google.svg';
import styles from '../asset/css/Download.module.css'

function DownloadApp() {
  return (
    <section className="download_app">
        <div className="container">
            <div className="container text-center">
                <h1 className={ styles.headingText }>Shop on the go</h1>
                <p>Get the best Shopascart experience all in one app.</p>
                <div className="app_download_logo mt-4 d-flex justify-content-center align-items-center gx-4">
                    <div className="appstore me-2">
                        <img src={appstore} alt="Appstore download" className={styles.img} width="180"/>
                    </div>
                    <div className="playstore">
                        <img src={playstore} alt="Playstore download" className={styles.img} width="180"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadApp;