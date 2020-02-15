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
    const cards = ['pair1', 'pair2', 'pair3', 'pair4', 'pair5', 'pair5', 'pair7'
    ].reduce((acc, type) => {
        const randNumber = Math.floor(Math.random() * (200));
        const photoURL = `https://i.picsum.photos/id/${ randNumber }/200/300.jpg`;
        acc.push({
            id: id++,
            photoURL,
            type
        })
        acc.push({
            id: id++,
            photoURL,
            type
        })
        return acc
    }, [])

    // Add one more card to make it the required 15

    // Get an extra photo
    const photoURL = `https://i.picsum.photos/id/300/200/300.jpg`;
    cards.push({
        id: 15,
        photoURL,
        type: "pair8"
    })

    return shuffle(cards)
}


// Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>