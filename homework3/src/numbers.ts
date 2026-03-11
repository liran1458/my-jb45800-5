export default class AvgOp {
    static getSum(arr: number[]) {
        const sum = arr.reduce((total, current) => total + current, 0);
        // console.log(sum)
        return sum;
    }

    static getAvg(arr: number[]) {
        const sum = arr.reduce((total, current) => total + current, 0);
        const avg = sum / arr.length
        // console.log(avg)
        return avg

    }
    static getMax(arr: number[]) {
        const max = Math.max(...arr)
        // console.log(max);
        return max

    }
    static getMin(arr: number[]) {
        const min = Math.min(...arr)
        // console.log(min);
        return min

    }


}