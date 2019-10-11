// import HelloWorld from "../components/HelloWorld";
import HomePage from "../components/HomePage/HomePage";
import UserList from "../components/UserManage/UserList";
import UserFeedback from "../components/UserManage/UserFeedback";
import MajorManage from "../components/UserManage/MajorManage";
import ShopManage from "../components/ShopManage/ShopManage";
import GoodsManage from '../components/GoodsManage/GoosManage';
import RmpManage from "../components/OperateManage/RmpManage";
import TodayManage from "../components/OperateManage/TodayManage";
import PassageManage from "../components/OperateManage/PassageManage";
import AdminManage from "../components/AdminManage/AdminManage";
import RootManage from "../components/AdminManage/RootManage";
import OrderManage from "../components/OrderManage/OrderManage";
import NewPassage from "../components/OperateManage/NewPassage";


export default {
    routes:[
        {
            path:'/HomePage',
            component: HomePage,
            name: 'HomePage'
        },
        {
            path:'/UserList',
            component: UserList
        },
        {
            path:'/UserFeedBack',
            component: UserFeedback
        },
        {
            path:'/MajorManage',
            component: MajorManage
        },
        {
            path:'/ShopManage',
            component: ShopManage
        },
        {
            path:'/GoodsManage',
            component:GoodsManage
        },
        {
            path:'/RmpManage',
            component: RmpManage
        },
        {
            path:'/TodayManage',
            component: TodayManage
        },
        {
            path:'/PassageManage',
            component: PassageManage
        },
        {
            path:'/AdminManage',
            component:AdminManage
        },
        {
            path:'/RootManage',
            component:RootManage
        },
        {
            path:'/OrderManage',
            component:OrderManage
        },
        {
            path:'/NewPassage',
            component: NewPassage
        }
    ]

}
