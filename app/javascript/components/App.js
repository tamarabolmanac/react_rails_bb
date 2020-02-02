import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from './Home'
import Notes from './Notes'
import Contact from './Contact'

class App extends React.Component {
	render () {
		return (
			<div>
				<nav>
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            <li>
		              <Link to="/notes">Notes</Link>
		            </li>
		            <li>
		              <Link to="/contact">Contact</Link>
		            </li>
		          </ul>
		        </nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/notes" component={Notes} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		)
	}
}

export default App