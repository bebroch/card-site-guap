import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header} style={{ fontSize: 64 }}>
            <div className={styles.headerStyle + ' arctika'}>Погорелый Александр</div>
            <div className={styles.guapStyle}>ГУАП</div>
        </div>
    )
}
