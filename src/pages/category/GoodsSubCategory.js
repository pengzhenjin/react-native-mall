/**
 * @description: 商品子分类
 * @author: pengzhenjin
 * @date: 2020/7/21
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import TopTabView from './components/TopTabView';
import GoodsSubCategoryTab from './tab/GoodsSubCategoryTab';

const tabArray = [
    {id: 0, name: '全部'},
    {id: 1, name: '单人沙发'},
    {id: 3, name: '双人沙发'},
    {id: 4, name: '单人沙发'},
    {id: 5, name: '多人沙发'},
    {id: 6, name: '多人沙发1'},
    {id: 7, name: '多人沙发2'},
    {id: 8, name: '多人沙发3'},
    {id: 9, name: '多人沙发4'},
    {id: 10, name: '多人沙发5'},
    {id: 11, name: '多人沙发6'},
];

export default class GoodsSubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0,
        };
    }

    componentDidMount() {
        const name = this.props.route.params.categoryName;
        this.props.navigation.setOptions({
            title: name,
        });
    }

    onChangeFunc = (index) => {
        this.setState({currentTabIndex: index});
    };

    renderPage = () => {
        const index = tabArray.findIndex((item, index) => {
            return index === this.state.currentTabIndex;
        });

        // console.log('===》 当前 tab 的下标：', index)

        return <GoodsSubCategoryTab {...this.props} />;
    };

    render() {
        return (
            <View style={styles.container}>
                <TopTabView data={tabArray} onChange={(index) => this.onChangeFunc(index)} />
                {this.renderPage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
