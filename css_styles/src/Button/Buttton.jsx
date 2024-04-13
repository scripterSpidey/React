
//? This is module wise import, which is preffered for individual stylings

import styles from './Button.module.css'


const Button = ()=>{

    const inlineStyle = {
        backgroundColor: 'rgb(48, 134, 171)',
        borderRadius: '5px',
        padding: '2px 5px',
    }
    return(
        <>
            <button className={styles.button}>Click here</button>
            <button style = {inlineStyle}>Inline button</button>
        </>
        
    )
}

export default Button