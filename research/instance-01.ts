class Entity {
    private id: string = ''
    constructor() {
        this.id = Math.random().toString()
    }

    public getId(): string {
        return this.id
    }

}

interface IProduct2 {
    title: string,
    desc: string,
    price: number,
}

class Product2 extends Entity{
    title!: string
    desc!: string
    price!: number
    constructor(title: string, desc: string, price: number) {
        super()
        this.title = title
        this.desc = desc
        this.price = price
    }
}
type P2 = Required<Product2>
type P3 = Omit<P2, 'getId'>

abstract class IService<Type> {
    list: Type[] = [] as Type[]
    abstract insert(body: {}): any
    protected findById(id: any): [Type, number] {
        const instance = this.list.find((instance) => ((instance as Type & Entity).getId() === id))
        const index = this.list.findIndex((instance) => ((instance as Type & Entity).getId() === id))
        if (!instance) {
            throw new ErrorEvent('Not Found id')
        }
        return [instance, index] as [Type, number]
    }
    getOne(id: any): Type{
        const [instance, _] = this.findById(id)
        return instance
    }
    getAll(): Type[] {
        return this.list
    }
    abstract update(body: {}): any
    delete(id: any): any {
        const [_, index] = this.findById(id)
        this.list.splice(index, 1)
    }
}

class ProductI {
    id!: string
    title!: string
    desc!: string
    price!: number
}

type ProductType2 = Omit<ProductI, 'id'>
type ProductType3 = Required<ProductI>

class ProductService extends IService<Required<Product2>> {
    // list: ProductI[] = []
    // private products = []
    insert(product: ProductType2) {
        const instance = new Product2(product?.title, product?.desc, product?.price)
        this.list.push(instance)
    }
    
    update(product: ProductType3) {
        const [instance, index] = this.findById(product.id)
        const updatedProduct = {...instance}
        
        if (product.title) {
            updatedProduct.title = product.title 
        }
        if (product.desc) {
            updatedProduct.desc = product.desc 
        }
        if (product.price) {
            updatedProduct.price = product.price 
        }
        this.list[index] = updatedProduct
    }

}

const b = new Product2('a', 'b', 1)
console.log(b);
const c = {...b}
console.log(b.getId());

const product_service = new ProductService()
product_service.insert({title:'a1',desc:'b1', price:1})
product_service.insert({title:'a2',desc:'b2', price:2})
product_service.insert({title:'a3',desc:'b3', price:3})
product_service.insert({title:'a4',desc:'b4', price:4})

console.log(product_service.getAll());
// console.log(product_service.getOne('0.5165060128433268'));

