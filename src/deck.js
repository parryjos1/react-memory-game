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
        // https://i.picsum.photos/id/108/200/300.jpg
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

    return shuffle(cards)
}
// export default function initalizeDeck(){
//     let id = 0
//     // TODO: will need to change this
//     const cards = ['react', 'reactu', 'redux', 'vue', 'angular', 'javascript', 'ruby on rails'
//     ].reduce((acc, type) => {
//         acc.push({
//             id: id++,
//             type
//         })
//         acc.push({
//             id: id++,
//             type
//         })
//         return acc
//     }, [])

//     return shuffle(cards)
// }