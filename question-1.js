let lowerCaseWords = (input) => {
    let newArray = input.filter(e => typeof e === 'string' && e !== '');
    let lowercaseFilterArr = newArray.map
        (x => x.toLowerCase());
    return lowercaseFilterArr;
}

mixedArray = ['pIZZA', 10, true, 25, false, 'wings', 'pPPEE']
console.log(lowerCaseWords(mixedArray));