import styles from './bottom.module.scss'

export default function Bottom() {
    return (
        <div className={styles.main}>
            <a>Связь со мной</a>
            <div className={styles.messengers}>
                <a href="https://github.com/bebroch">
                    <img src={'github-logo.png'} alt="github.com" />
                </a>
                <a href="https://vk.com/analfistingass">
                    <img src={'vk-logo.jpg'} alt="vk.com" />
                </a>
                <a href="https://t.me/qxzcw">
                    <img src={'telegram-logo.png'} alt="telegram.com" />
                </a>
                <a href="whatsapp://send?phone=+79531711208">
                    <img src={'whatsapp-logo.png'} alt="whatsapp.com" />
                </a>
            </div>
        </div>
    )
}
