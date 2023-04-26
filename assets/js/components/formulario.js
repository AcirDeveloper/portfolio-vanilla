document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input')
    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')

    function focusFunc() {
        let parent = this.parentNode
        parent.classList.add('focus')
    }

    function blurFunc() {
        let parent = this.parentNode
        if (this.value == '') {
            parent.classList.remove('focus')
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('focus', focusFunc)
        input.addEventListener('blur', blurFunc)
    })

    $form.addEventListener('submit', (event) => handleSubmit(event, $buttonMailto))

    const handleSubmit = (event, $buttonMailto) => {
        event.preventDefault()
        const form = new FormData(event.target)
        console.log(form.get('name'))
        $buttonMailto.setAttribute(
            'href',
            `mailto:acirdeveloper@gmail.com?subject=nombre: ${form.get(
                'asunto'
            )} correo: ${form.get('email')}&body=${form.get('message')}`
        )
        $buttonMailto.click()
    }
})
