import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController{
    async handle(req:Request, res:Response){

        const listOrders = new ListOrderService()

        const orderList = await listOrders.execute()

        return res.json(orderList)
    }
}

export { ListOrderController }