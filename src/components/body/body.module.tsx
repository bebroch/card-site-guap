import styles from './body.module.scss'

export default function Body() {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <img className={styles.images} src={'public/typescript-logo.jpg'} />
                <a>Разрабатываю веб приложения на TypeScript.</a>
            </div>
            <div className={styles.card}>
                <img className={styles.images} src={'public/heldent.png'} />
                <a>Разработал Backend на Хакатоне ZavodIT.</a>
            </div>
            <div className={styles.card}>
                <img className={styles.images} src={'public/github.png'} />
                <a>Пишу свои собственные маленькие проекты.</a>
            </div>
        </div>
    )
}
