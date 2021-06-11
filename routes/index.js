import authRoutes from "../modules/auth/auth.route";
import customerRoutes from "../modules/customer/customer.route";
import stockRoutes from "../modules/stock/stock.route";
import orderRoutes from "../modules/order/order.route";
import employeeRoutes from "../modules/employee/employee.route";
import supplierRoutes from "../modules/supplier/supplier.route";
import jobRoutes from "../modules/job/job.route";
import skillRoutes from "../modules/skills/skills.route"

let BASE_URL = "/api"

export default function(app) {
  app.use(`${BASE_URL}/auth`, authRoutes);
  app.use(`${BASE_URL}/customers`, customerRoutes);
  app.use(`${BASE_URL}/stocks`, stockRoutes);
  app.use(`${BASE_URL}/orders`, orderRoutes);
  app.use(`${BASE_URL}/employees`, employeeRoutes);
  app.use(`${BASE_URL}/suppliers`, supplierRoutes);
  app.use(`${BASE_URL}/jobs`, jobRoutes);
  app.use(`${BASE_URL}/skills`, skillRoutes);
}
