
 const sortNumber = (a, b) => a - b

// both arrays have only integers
export const intersection = (array1, array2) => {
    // return all the elements that are in both arrays at least once
    // sort from lowest to highest, and do not include duplicate elements

    const  res = new Set(array1.filter(value => array2.includes(value)).sort(sortNumber));
    return [...res]
}

export const union = (array1, array2) => {
    // return all the elements that are in at least one array
    // sort from lowest to highest, and do not include duplicate elements
    const  res = new Set(array1.concat(array2))
    return [...res].sort(sortNumber)
}

export const distinct = (array1, array2) => {
    // return all the elements that are in one of the arrays
    // but not both
    // sort from lowest to highest, and do not include duplicate elements
    const firstArrNumbers  =  array1.filter(value => !array2.includes(value));
    const secondArrNumbers  =  array2.filter(value => !array1.includes(value))
    const  res = new Set(firstArrNumbers.concat(secondArrNumbers).sort(sortNumber));
    return [...res]
}
