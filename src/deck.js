function shuffle(array){
    const _array = array.slice(0);
    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}

export default function initalizeDeck(){
    let id = 0
    // TODO: will need to change this
    const cards = ['react', 'reactu', 'redux', 'vue', 'angular', 'javascript', 'ruby on rails'
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}