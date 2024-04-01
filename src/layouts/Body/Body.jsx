import cn from 'classnames'
import styles from './Body.module.css'

function Body({ children }) {
	return <div className={cn(styles.body)}>{children}</div>
}

export default Body
