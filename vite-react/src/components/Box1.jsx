import styles from './Box1.module.css'

function Box1() {

    return (
        <>
            <div className={styles.box}>
                Box1
            </div>

            {/* <h2 className={styles.title}>타이틀1</h2> */}
            <h2 className="title">타이틀1</h2>
        </>
    )
}

export default Box1