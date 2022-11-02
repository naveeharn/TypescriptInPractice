/* eslint-disable prettier/prettier */
class Product {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        public price: number,
    ) { }
}

interface IProduct {
    id: string,
    title: string,
    desc: string,
    price: number,
}

type ProductType = Required<IProduct>

class ProductsService {
    private products: Product[] = []

    // insertProduct(product: IProduct) {
    //     const id = Math.random().toString()
    //     const newProduct = new Product(product.id, product.title, product.desc, product.price)
    //     this.products.push(newProduct)
    //     return id
    // }

    insertProduct(product: ProductType) {
        const id = Math.random().toString()
        const newProduct = new Product(product.id, product.title, product.desc, product.price)
        this.products.push(newProduct)
        return id
    }
    
    getAllProducts(): Product[] {
        return [...this.products]
    }
    
}

const products = new ProductsService()
products.insertProduct({ id: '1', title: "a", desc: 'ss', price: 123 })
products.insertProduct({ id: '1', title: "a", desc: 'ss', price: 123 })
// products.insertProduct({})
console.log(products.getAllProducts());

console.log({ id: '1', title: "a", desc: 'ss', price: 123 });


type Methods<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]?: (value: Type[Property]) => any
} & {
    [Property in keyof Type as `update${Capitalize<string & Property>}`]?: (value: Type[Property]) => any
}

const p1: IProduct = { id: '1', title: "a", desc: 'ss', price: 123 }

