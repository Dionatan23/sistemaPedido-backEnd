import { Request, Response } from "express";
import { DetailsOrderService } from "../../services/order/DetailsOrderService";

class DetailsOrderController{
    async handle(req:Request, res:Response){
        const order_id = req.query.order_id as string

        const detailsOrders = new DetailsOrderService()

        const orders = await detailsOrders.execute({
            order_id
        })

        return res.json(orders)
    }
}

export { DetailsOrderController }