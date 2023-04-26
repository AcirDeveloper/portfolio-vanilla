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
        }
    }
}

export const renderPortfolio = () => {
    const portfolioContainer = document.querySelector('#portfolio .portfolio_links_container')
    const portfolio = db.methods.getAll()
    let html = ``
    portfolio.forEach((item) => {
        let tagsHtml = ''
        for (let i = 0; i < item.tags.length; i++) {
            tagsHtml += `<span class="card-tag ${item.tags[i]}">${item.tags[i]}</span>`
        }
        html += `
            <div class="product-card">
		        <div class="product-tumb">
			        <img src="${item.image}" alt="Captura de pantalla de la página web">
		        </div>
                <div class="product-details">
			        ${tagsHtml}
			        <h4 style="margin-top: 10px;"><a href='${item.web}' target="_blank">${item.title}</a></h4>
			        <p>${item.description}</p>
			        <div class="product-bottom-details">
                        <div class="product-links">
					        <a href='${item.repo}' target="_blank"><i class="fa-brands fa-github" style="color: black;"></i></a>
					        <a href='${item.web}' target="_blank"><i class="fa-solid fa-earth-americas" style="color: blue;"></i></a>
				        </div>
			        </div>
		        </div>
		    </div>
		`
    })
    portfolioContainer.innerHTML = html
}
