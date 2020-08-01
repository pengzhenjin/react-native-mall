/**
 * @description: App 路由表
 * @author: pengzhenjin
 * @date: 2020/7/31
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GoodsCategory from './pages/Category/GoodsCategory';
import GoodsSubCategory from './pages/Category/GoodsSubCategory';

// App路由
const AppRoute = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="GoodsCategory">
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
        </Stack.Navigator>
    );
};

export default AppRoute;
