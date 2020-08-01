/**
 * @description: 商城入口
 * @author: pengzhenjin
 * @date: 2020/7/31
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoute from './src/AppRoute';

const App = () => {
    return (
        <NavigationContainer>
            <AppRoute />
        </NavigationContainer>
    );
};

export default App;
