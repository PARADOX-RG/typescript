interface Person {
    name: string
    age: number
}

type PersonKey = keyof Person

let key: PersonKey = "name"
key = "age"

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'