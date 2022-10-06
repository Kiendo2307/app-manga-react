import Home from "~/page/Home";
import Category from "~/page/Category/Category";
import History from "~/page/History";
import config from "~/config";
import StartReading from "~/page/StartReading/StartReading";
import ReadingPage from "~/page/ReadingPage/ReadingPage";

const publicRoute = [
  { path: config.routes.home, component: Home },
  { path: config.routes.category, component: Category },
  { path: config.routes.history, component: History },
  { path: config.routes.manga, component: StartReading },
  { path: config.routes.reading, component: ReadingPage },
];

const privateRoute = [];

export { publicRoute, privateRoute };
