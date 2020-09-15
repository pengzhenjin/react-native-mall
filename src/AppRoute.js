/**
 * @description: App 路由表
 * @author: pengzhenjin
 * @date: 2020/7/31
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MallHome from './pages/home/MallHome';
import GoodsCategory from './pages/category/GoodsCategory';
import GoodsSubCategory from './pages/category/GoodsSubCategory';
import ShopStore from './pages/shopStore/ShopStore';

// App路由
const AppRoute = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="MallHome">
            <Stack.Screen
                name="MallHome"
                component={MallHome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GoodsCategory"
                component={GoodsCategory}
                options={{headerShown: true, title: '商品分类'}}
            />
            <Stack.Screen
                name="GoodsSubCategory"
                component={GoodsSubCategory}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="ShopStore"
                component={ShopStore}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AppRoute;
