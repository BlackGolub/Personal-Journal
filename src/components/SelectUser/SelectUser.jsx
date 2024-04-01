import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import styles from './SelectUser.module.css'

function SelectUser({ setSelectedItem }) {
	const { userId, setUserId } = useContext(UserContext)

	const changeUser = e => {
		setUserId(Number(e.target.value))
		setSelectedItem(null)
	}

	return (
		<select
			className={styles['select']}
			name='user'
			id='user'
			value={userId}
			onChange={changeUser}
		>
			<option value='1'>User- 1</option>
			<option value='2'>User- 2</option>
		</select>
	)
}
export default SelectUser
