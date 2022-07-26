const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfString: Array<string> = ['Hello', 'Vlad']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfString)