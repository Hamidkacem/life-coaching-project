import styles from "./styles.module.css";
import { Link , useNavigate} from "react-router-dom";

const Main = () => {
	const navigate = useNavigate()
	const handleLogout = () => {
		navigate('/');
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome</h1>
                <li>Profil</li>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
