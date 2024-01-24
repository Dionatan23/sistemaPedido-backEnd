import prismaClient from "../../prisma";

interface productRequest{
    name: string;
    description: string;
    price: string;
    banner: string;
    category_id: string
}

class CreateProductService{
    async execute({name, description, price, banner, category_id}: productRequest){

        const product = await prismaClient.product.create({
            data:{
                name: name,
                description: description,
                price: price,
                banner: banner,
                category_id: category_id,
            }

        })
        return product
    }
}

export { CreateProductService }