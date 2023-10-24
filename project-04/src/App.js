import { Component } from "react";

import {
	Link,
	NavLink,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<header>
						<nav>
							<ul>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink to='/news'>Skills</NavLink>
								</li>
								<li>
									<NavLink to='/contact'>Contact</NavLink>
								</li>
							</ul>
						</nav>
					</header>
					<section>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/news' element={<Skills />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
						Home Page
					</section>
				</div>
			</Router>
		);
	}
}

const Home = () => <h1>Strona startowa</h1>;

const Skills = () => <h1>Umiejętności</h1>;
const Contact = () => <h1>Kontakt</h1>;
export default App;
