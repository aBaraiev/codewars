function changer(str) {
    const vowels = 'aeiouAEIOU'
    let zCode = ('z'.charCodeAt());
    let _aCode = ('A'.charCodeAt());

    return str.split('')
        .map(e => {
            let eCode = e.charCodeAt(0);
            return (eCode >= _aCode && eCode <= zCode)
                ?
                e.toLowerCase() === 'z' ? 'a' : String.fromCharCode(eCode + 1)
                :
                e
        })
        .map(e => vowels.includes(e) ? e.toUpperCase() : e.toLowerCase())
        .join('');
}