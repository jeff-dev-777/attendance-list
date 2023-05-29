import styles from './styles.css'

export const Card = (props) => {
    return ( 
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
     );
}
 
