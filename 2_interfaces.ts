interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '12',
    size: {
        width: 50,
        height: 40
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12',
    size: {
        width: 50,
        height: 40
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =============

interface RectWidthArea extends Rect {
    getArea: () => number
}

const rect5: RectWidthArea = {
    id: '12345',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number{
      return this.size.width * this.size.height
    }
}

// ==========

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ==============
interface Styles {
    [key: string]: string
}

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}




