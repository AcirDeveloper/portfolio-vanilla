import { items } from '../db/db.js'

export const db = {
	items: window.localStorage.getItem('productos')
		? JSON.parse(window.localStorage.getItem('productos'))
		: items,
	methods: {
		find: (id) => {
			return db.items.find((item) => item.id === id)
		},
		getAll: () => {
			return db.items
		},
	},
}

export const renderPortfolio = () => {
	const portfolioContainer = document.querySelector('#portfolio .portfolio_links_container')
	const portfolio = db.methods.getAll()
	let html = ``
	portfolio.forEach((item) => {
		html += `
        <div class="flip-card">
            <a href="${item.url}" target="_blank">
              <div class="flip-card-inner">
                <div class="flip-card-front one" style="background-image: url('${item.image}');">
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-decor"></div>
                  <h2>${item.title}</h2>
                  <p>${item.description}</p>
                </div>
              </div>
            </a>
          </div>`
	})
	portfolioContainer.innerHTML = html
}
