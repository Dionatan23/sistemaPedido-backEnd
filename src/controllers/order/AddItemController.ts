import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
    async handle(req:Request, res:Response){
        const { order_id, product_id, amount } = req.body

        const addItem = new AddItemService()

        const itemOrder = await addItem.execute({
            order_id,
            product_id,
            amount
        })

        return res.json(itemOrder)
    }
}

export { AddItemController }