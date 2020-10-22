const getSession = (item) => {
	let res = window.sessionStorage.getItem(item)
	return res ? JSON.parse(res) : ''
}

const setSession = (key, value) => {
	window.sessionStorage.setItem(key, JSON.stringify(value))
}

const clearOneSession = (key) => {
	window.sessionStorage.removeItem(key)
}

const clearAllSession = () => {
	window.sessionStorage.clear()
}

export {
	setSession,
	getSession,
	clearOneSession,
	clearAllSession
}