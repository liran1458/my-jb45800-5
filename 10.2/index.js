function getMax(arr) {
    const max = Math.max(...arr)
    console.log(max)
    return max;
}

function getMaxAndMin(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    console.log(max , min)
    return [max, min ];
}
// getMaxAndMin([10,20,30,40,32])
