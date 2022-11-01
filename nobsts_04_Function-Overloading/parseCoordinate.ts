interface Coordinate {
    x: number,
    y: number,
}

console.log({ ...{ a: 1, b: 2 }, ...{ c: 1, d: 2 } });
console.log({ ...{ x: 3, y: 2 } as Coordinate });

function parseCoordinateFromObject(object: Coordinate): Coordinate {
    return {
        ...object
    }
}

function parseCooordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y
    }
}

console.log(parseCoordinateFromObject({
    x: 20,
    y: 40
}));

console.log(parseCoordinateFromObject(parseCooordinateFromNumbers(6, 8)));

//

function parseCoordinate(object: Coordinate): Coordinate
function parseCoordinate(str: string): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coordinate: Coordinate = {
        x: 0,
        y: 0
    }
    if (typeof arg1 === 'object') {
        coordinate = {
            ...(arg1 as Coordinate)
        }
    } else if (typeof arg1 === 'string') {
        console.log((arg1 as string).split(','));
        console.log((arg1 as string).split(',').map((str) => {
            return str.split(':')[1]
        }));

        (arg1 as string).split(',').forEach((str)=> {
            const [key, value] = str.split(':')
            coordinate[key as 'x' | 'y'] = parseInt(value, 10)
        })
    } else {
        coordinate = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    return coordinate
}
console.log(parseCoordinate(4, 6));
console.log(parseCoordinate({ x: 7, y: 8 }));
console.log(parseCoordinate('x:2,y:4'));

const a = (value:number, cbf: (number:number)=>number): number => {
    let result: number = cbf(value)
    return result
}
console.log(a(6, (number) => {
    return number * 8
}));
