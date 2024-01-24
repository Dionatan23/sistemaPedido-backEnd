import prismaClient from "../../prisma";

interface ItemsRequest{
    order_id: string;
    product_id: string;
    amount: number
}

class AddItemService{
    async execute({ amount, order_id, product_id }: ItemsRequest){
        
        const itemOrder = await prismaClient.orderItem.create({
            data:{
                amount: amount,
                order_id: order_id,
                product_id: product_id
            }
        })

        return itemOrder
    }   
}

export { AddItemService }