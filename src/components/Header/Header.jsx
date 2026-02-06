import { onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';

// import style
import styles from './Header.module.scss'

// import logic
import HeaderClass from './Header.module';

function Header() {

	onMount(() => {
		// init nav primitive
    const navigate = useNavigate();

		// init logic
		const hdr = new HeaderClass(navigate);
	});

	return (
		<>
			<header className={`${styles.Container}`}>
				<div className={`${styles.Logo}`}>
					MONOLITH
				</div>
				<nav>
					<ul>
						<li data-target="/">
							HOME
						</li>
						<li data-target="/about">
							ABOUT
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header;
