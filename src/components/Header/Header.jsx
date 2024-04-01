import Logo from '../Logo/Logo'
import SelectUser from '../SelectUser/SelectUser'

function Header({ setSelectedItem }) {
	return (
		<>
			<Logo image={'/logo.svg'} />
			<SelectUser setSelectedItem={setSelectedItem} />
		</>
	)
}
export default Header
