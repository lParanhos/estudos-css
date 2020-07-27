const colors = {
    p: '#388e3c',
    div: '#6A5ACD',
    span: '#191970',
    section: '#87CEEB',
    ul: '#48D1CC',
    ol: '#7FFFD4',
    header: '#006400',
    nav: '#808000',
    main: '#8B4513',
    footer: '#D2691E',
    form: '#BA55D3',
    body: '#DC143C',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()
  
    element.style.borderColor = colors.get(tagName)
    
    if(!element.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
})