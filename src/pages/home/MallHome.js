/**
 * @description: 商城首页
 * @author: pengzhenjin
 * @date: 2020/7/16
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Badge from '../../components/Badge';
import BannerView from './components/BannerView';
import TopTabView from './components/TopTabView';
import FunctionalView from './components/FunctionalView';
import ActivityView from './components/ActivityView';
import SpecialView from './components/SpecialView';
import GuessLikeItemView from './components/GuessLikeItemView';

const logoHome = require('../../images/home/logo_home.png');
const iconCart = require('../../images/home/icon_home_cart.png');
const iconMessage = require('../../images/home/icon_home_message.png');
const iconSearch = require('../../images/home/icon_home_search.png');

const tabData = [
    {id: 0, name: '首页'},
    {id: 1, name: '厨房卫浴'},
    {id: 2, name: '百货'},
    {id: 3, name: '家用电器'},
    {id: 4, name: '医药'},
    {id: 5, name: '洗护'},
    {id: 6, name: '企业'},
    {id: 7, name: '箱包'},
    {id: 8, name: '数码'},
    {id: 9, name: '运动'},
    {id: 10, name: '进口'},
    {id: 11, name: '女装'},
    {id: 12, name: '男装'},
    {id: 13, name: '女鞋'},
    {id: 14, name: '男鞋'},
    {id: 15, name: '手机'},
    {id: 16, name: '饰品'},
    {id: 14, name: '男鞋'},
    {id: 15, name: '手机'},
    {id: 16, name: '饰品'},
    {id: 14, name: '男鞋'},
    {id: 15, name: '手机'},
    {id: 16, name: '饰品'},
    {id: 14, name: '男鞋'},
    {id: 15, name: '手机'},
    {id: 16, name: '饰品'},
    {id: 14, name: '男鞋'},
    {id: 15, name: '手机'},
    {id: 16, name: '饰品'},
];

export default class MallHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [
                {
                    title: 'banner1',
                    imgUrl: require('../../images/banner.png'),
                },
                {
                    title: 'banner2',
                    imgUrl: require('../../images/banner.png'),
                },
                {
                    title: 'banner3',
                    imgUrl: require('../../images/banner.png'),
                },
                {
                    title: 'banner4',
                    imgUrl: require('../../images/banner.png'),
                },
            ],
            guessLikeData: [],    // 猜你喜欢 数据
        };
    }

    componentDidMount() {
        this.getData();
    }

    /**
     * 获取数据
     */
    getData = () => {
        const guessLikeData = [
            {imgUrl: require('../../images/goods.png'), name: 'TOTO分体座厕CW706RBSW719RB', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO卫洗丽套餐CW764', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO分体座厕CW706RBSW719RB', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO卫洗丽套餐CW764', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO分体座厕CW706RBSW719RB', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO卫洗丽套餐CW764', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO分体座厕CW706RBSW719RB', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO卫洗丽套餐CW764', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO分体座厕CW706RBSW719RB', price: '3569.00'},
            {imgUrl: require('../../images/goods.png'), name: 'TOTO卫洗丽套餐CW764', price: '3569.00'},
        ];

        this.setState({guessLikeData: guessLikeData});
    };

    /**
     * 跳转到购物车页面
     */
    gotoShopCart = () => {

    };

    /**
     * 跳转到消息页面
     */
    gotoMessage = () => {
        console.log('===> 跳转到消息页面');
    };

    /**
     * 跳转到搜索页面
     */
    gotoSearch = () => {
        console.log('===> 跳转到搜索页面');
    };

    /**
     * 渲染状态栏
     * @returns {*}
     */
    renderStatusBar = () => {
        if (Platform.OS === 'android') { // android 设备
            return <StatusBar barStyle='light-content' translucent={false} backgroundColor={'#FA7B00'} />;
        } else { // iOS 设备
            return (
                <StatusBar barStyle='light-content' />
            );
        }
    };

    /**
     * 渲染顶部相关组件
     * @returns {*}
     */
    renderTopView = () => {
        return (
            <View style={styles.top_container}>
                {/*状态栏*/}
                {this.renderStatusBar()}

                {/*logo栏*/}
                <View style={styles.top_logo_container}>
                    <Image source={logoHome} />
                    <View style={styles.top_logo_right_container}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[styles.top_logo_right_icon_container, {marginRight: 15}]}
                            onPress={this.gotoShopCart}
                        >
                            <Image source={iconCart} />
                            <Badge
                                size={16}
                                text={2}
                                color={'#FFFFFF'}
                                badgeStyle={styles.top_logo_right_badge(4, -4)}
                                textStyle={styles.top_logo_right_badge_text}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.top_logo_right_icon_container}
                            onPress={this.gotoMessage}
                        >
                            <Image source={iconMessage} />
                            <Badge
                                size={16}
                                text={2}
                                color={'#FFFFFF'}
                                badgeStyle={styles.top_logo_right_badge(4, -4)}
                                textStyle={styles.top_logo_right_badge_text}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/*搜索栏*/}
                <TouchableOpacity style={styles.top_search_container} activeOpacity={0.8} onPress={this.gotoSearch}>
                    <Image style={styles.top_search_icon} source={iconSearch} />
                    <Text style={styles.top_search_text}>{'新品'}</Text>
                </TouchableOpacity>

                {/*顶部tab栏*/}
                <TopTabView data={tabData} {...this.props} />
            </View>
        );
    };

    /***
     * 渲染 list 头部
     * @returns {*}
     */
    renderListHeader = () => {
        return (
            <View>
                {/*banner板块*/}
                <BannerView bannerData={this.state.bannerList} {...this.props} />

                {/*功能球板块*/}
                <FunctionalView {...this.props} />

                {/*活动板块*/}
                <ActivityView {...this.props} />

                {/*精彩专题板块*/}
                <SpecialView {...this.props} />

                {/*猜你喜欢分割线*/}
                <View style={styles.guess_like_line_container}>
                    <View style={styles.guess_like_line} />
                    <Text style={styles.guess_like_line_text}>{'猜你喜欢'}</Text>
                    <View style={styles.guess_like_line} />
                </View>
            </View>
        );
    };

    /**
     * 渲染 list item
     * @param item
     * @param index
     * @returns {*}
     */
    renderListItem = ({item, index}) => {
        return <GuessLikeItemView itemData={item} itemIndex={index} {...this.props} />;
    };

    /**
     * 渲染 list 分割线
     * @returns {*}
     */
    renderListItemSeparator = () => {
        return <View style={styles.list_item_separator} />;
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns={2}
                    data={this.state.guessLikeData}
                    renderItem={this.renderListItem}
                    ListHeaderComponent={this.renderListHeader}
                    ItemSeparatorComponent={this.renderListItemSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        backgroundColor: '#FA7B00',
        paddingHorizontal: 14,
    },
    top_logo_container: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    top_logo_right_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    top_logo_right_icon_container: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top_logo_right_badge: (top, right) => ({
        position: 'absolute',
        top: top,
        right: right,
    }),
    top_logo_right_badge_text: {
        fontSize: 10,
        color: '#FA7B00',
    },
    top_search_container: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    },
    top_search_icon: {
        marginLeft: 12,
        marginRight: 6,
    },
    top_search_text: {
        fontSize: 14,
        color: '#CCCCCC',
    },
    guess_like_line_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },
    guess_like_line: {
        width: 28,
        height: 0.5,
        backgroundColor: '#CCCCCC',
    },
    guess_like_line_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginHorizontal: 10,
    },
    list_item_separator: {
        height: 10,
        color: 'transparent',
    },
});

