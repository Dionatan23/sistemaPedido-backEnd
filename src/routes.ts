import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { FinishOrderController } from "./controllers/order/FInishOrderController";

import uploadConfig from "./config/multer"

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// --- Rota teste ---
router.get("/", (req: Request, res: Response) =>{
    return res.json({ ok: true })
});

// --- Rotas USER ---
router.post("/users", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)

// --- Rotas CATEGORY ---
router.post("/category", isAuthenticated, new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListCategoryController().handle)

// --- Rotas PRODUCT ---
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle)
router.get("/category/products", isAuthenticated, new ListByCategoryController().handle)

// ---- Rotas de Orders
router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/additem' , isAuthenticated, new AddItemController().handle )
router.delete ('/removeitem', isAuthenticated,new RemoveItemController().handle )
router.put ("/sendOrder", isAuthenticated, new SendOrderController().handle )
router.get ("/orders", isAuthenticated, new ListOrderController().handle)
router.get ("/details",isAuthenticated, new DetailsOrderController().handle)
router.put ("/finish", isAuthenticated, new FinishOrderController().handle)

export { router };