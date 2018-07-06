import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../../components/appWrapper/appWrapperComponent'

if (module.hot) {
	module.hot.accept()
}
export default class Root extends Component {
	constructor () {
		super()

		this.views = {}
	}

	loadView (fileName) {
		if (this.views[fileName]) {
			return this.views[fileName]
		}

		new Promise(resolve =>
      require.ensure([], require => {
	switch (fileName) {
	case 'dummy':
		if (module.hot) {
			module.hot.accept('../dummyPage/homePageRoute', () => {
                require('../dummyPage/homePageRoute').default // eslint-disable-line
				this.forceUpdate()
			})
		}
		resolve(require('../dummyPage/homePageRoute').default)
		break
	case 'home':
		if (module.hot) {
			module.hot.accept('../homePage/homePageRoute', () => {
                require('../homePage/homePageRoute').default // eslint-disable-line
				this.forceUpdate()
			})
		}
		resolve(require('../homePage/homePageRoute').default)
		break
	case 'landing':
		if (module.hot) {
			module.hot.accept('../landingPage/landingPageRoute', () => {
                require('../landingPage/landingPageRoute').default // eslint-disable-line
				this.forceUpdate()
			})
		}
		resolve(require('../landingPage/landingPageRoute').default)
		break
	case 'registerProcess':
		if (module.hot) {
			module.hot.accept('../registerProcessPage/registerProcessPageRoute', () => {
                require('../registerProcessPage/registerProcessPageRoute').default // eslint-disable-line
				this.forceUpdate()
			})
		}
		resolve(require('../registerProcessPage/registerProcessPageRoute').default)
		break
	case 'components':
		if (module.hot) {
			module.hot.accept('../componentsPage/componentsPageRoute', () => {
                require('../componentsPage/componentsPageRoute').default // eslint-disable-line
				this.forceUpdate()
			})
		}
		resolve(require('../componentsPage/componentsPageRoute').default)
		break
	default:
		break
	}
})
    )
      .then(View => {
	this.views[fileName] = <View />
})
      .then(() => this.forceUpdate())
      .catch(err => {
	console.error(err)
	throw new Error(err)
})

		return <div />
	}
	render () {
		return (
  <AppWrapper>
    <BrowserRouter>
      <Switch>
        <Route path='/landing' component={() => this.loadView('landing')} />
        <Route path='/registering' component={() => this.loadView('registerProcess')} />
        <Route path='/home' component={() => this.loadView('home')} />
        <Route path='/components' component={() => this.loadView('components')} />
        <Route path='/' component={() => this.loadView('landing')} />
      </Switch>
    </BrowserRouter>
  </AppWrapper>
		)
	}
	props: {
    store: Object
  }
}
