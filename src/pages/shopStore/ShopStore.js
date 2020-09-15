/**
 * @description: 店铺
 * @author: pengzhenjin
 * @date: 2020/9/15
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
} from 'react-native';
import Badge from '../../components/Badge';
import ListItem from './components/ListItem';
import BannerView from '../shopStore/components/BannerView';
import Billboard from './components/Billboard';

const iconBack = require('../../images/icon_back.png');
const imageShopStore = require('../../images/goods.png');
const iconCart = require('../../images/home/icon_home_cart.png');
const iconMessage = require('../../images/home/icon_home_message.png');
const iconSearch = require('../../images/home/icon_home_search.png');

const tabs = [
    {id: 0, name: '主页'},
    {id: 1, name: '商品'},
];

export default class ShopStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentTabIndex: 0,

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

            scrollY: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.getData();
    }

    /**
     * 获取数据
     */
    getData = () => {
        const data = [
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

        this.setState({data: data});
    };

    /**
     * 跳转到购物车页面
     */
    gotoShopCart = () => {
        console.log('===> 跳转到购物车页面');
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
     * 切换tab
     * @param index
     */
    changeTabFunc = (index) => {
        this.setState({currentTabIndex: index});
        this.getData();
    };

    /**
     * 滚动条监听事件
     * @param event
     */
    onScrollFunc = (event) => {
        Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: false},
        )(event);
    };

    /**
     * 返回按钮
     */
    onBackFunc = () => {
        this.props.navigation.goBack();
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
                <SafeAreaView>
                    <StatusBar barStyle='light-content' />
                </SafeAreaView>
            );
        }
    };

    renderLeftBackBtn = () => {
        return (
            <TouchableOpacity style={styles.top_nav_back_btn_container} onPress={this.onBackFunc}>
                <Image style={styles.top_nav_back_btn} source={iconBack} />
            </TouchableOpacity>
        );
    };

    renderSearchView = () => {
        return (
            <TouchableOpacity
                style={styles.top_search_container}
                activeOpacity={0.8}
                onPress={this.gotoSearch}
            >
                <Image style={styles.top_search_icon} source={iconSearch} />
                <Text style={styles.top_search_text}>{'新品'}</Text>
            </TouchableOpacity>
        );
    };

    renderRightOptionBtn = () => {
        return (
            <View style={styles.top_nav_right_container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.top_nav_right_icon_container, {marginHorizontal: 15}]}
                    onPress={this.gotoShopCart}
                >
                    <Image source={iconCart} />
                    <Badge
                        size={16}
                        text={2}
                        color={'#FFFFFF'}
                        badgeStyle={styles.top_nav_right_badge(4, -4)}
                        textStyle={styles.top_nav_right_badge_text}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.top_nav_right_icon_container}
                    onPress={this.gotoMessage}
                >
                    <Image source={iconMessage} />
                    <Badge
                        size={16}
                        text={2}
                        color={'#FFFFFF'}
                        badgeStyle={styles.top_nav_right_badge(4, -4)}
                        textStyle={styles.top_nav_right_badge_text}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    renderShopStoreInfo = () => {
        const marginTop = this.state.scrollY.interpolate({
            inputRange: [0, 260], // 当滚动条滚动到0～260的位置时
            outputRange: [0, -100], // 将上边距改为从0～-100（店铺信息高度=100）
            extrapolate: 'clamp', // 滚动超出0～160的范围，不在更改边距
        });
        const opacity = this.state.scrollY.interpolate({
            inputRange: [0, 260], // 当滚动条滚动到0～260的位置时
            outputRange: [1, 0], // 将透明度改为从1～0
            extrapolate: 'clamp', // 滚动超出0～160的范围，不在更改透明值
        });
        return (
            <Animated.View style={styles.top_shop_store_container(marginTop, opacity)}>
                <Image style={styles.top_shop_store_image} source={imageShopStore} />
                <View style={styles.top_shop_store_info_container}>
                    <Text style={styles.top_shop_store_title}>{'TOTO百安居旗舰店'}</Text>
                    <Text style={styles.top_shop_store_sub_title}>{'智能生活而你而生'}</Text>
                    <Text style={styles.top_shop_store_sub_title}>{'200万人关注'}</Text>
                </View>
            </Animated.View>
        );
    };

    renderTabBar = () => {
        return (
            <View style={styles.top_tab_container}>
                {
                    tabs.map((item, index) => {
                        const isSelected = index === this.state.currentTabIndex;
                        const textColor = isSelected ? '#333333' : '#999999';
                        const textUnderLineHeight = isSelected ? 4 : 0;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.top_tab_text_container}
                                onPress={() => this.changeTabFunc(index)}
                            >
                                <Text style={styles.top_tab_text(textColor)}>{item.name}</Text>
                                <View style={styles.top_tab_under_line(textUnderLineHeight)} />
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
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

                {/*导航栏*/}
                <View style={styles.top_nav_container}>
                    {/*左边返回按钮*/}
                    {this.renderLeftBackBtn()}
                    {/*中间搜索框*/}
                    {this.renderSearchView()}
                    {/*右边操作按钮*/}
                    {this.renderRightOptionBtn()}
                </View>

                {/*店铺信息*/}
                {this.renderShopStoreInfo()}

                {/*TabBar信息*/}
                {this.renderTabBar()}
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
                {/*广告位*/}
                <Billboard />

                {/*优化领劵*/}
                <Text style={styles.label_text}>{'优惠领劵'}</Text>
                <BannerView bannerData={this.state.bannerList} {...this.props} />

                {/*爆款商品*/}
                <Text style={styles.label_text}>{'爆款商品'}</Text>
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
        return <ListItem itemData={item} itemIndex={index} {...this.props} />;
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={this.renderListItem}
                    ListHeaderComponent={this.renderListHeader}
                    ItemSeparatorComponent={null}
                    onScroll={this.onScrollFunc}
                    scrollEventThrottle={16}
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
        backgroundColor: '#474F56',
    },
    top_nav_container: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 20,
    },
    top_nav_back_btn_container: {
        width: 32,
        height: 44,
        justifyContent: 'center',
    },
    top_nav_back_btn: {
        width: 18,
        height: 18,
    },
    top_nav_right_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    top_nav_right_icon_container: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top_nav_right_badge: (top, right) => ({
        position: 'absolute',
        top: top,
        right: right,
    }),
    top_nav_right_badge_text: {
        fontSize: 10,
        color: '#FA7B00',
    },
    top_search_container: {
        flex: 1,
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
    top_shop_store_container: (marginTop, opacity) => ({
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 14,
        marginTop: marginTop,
        opacity: opacity,
    }),
    top_shop_store_image: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    top_shop_store_info_container: {
        justifyContent: 'space-between',
        marginHorizontal: 14,
    },
    top_shop_store_title: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    top_shop_store_sub_title: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    top_tab_container: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
    },
    top_tab_text_container: {
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    top_tab_text: (color) => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: color,
        marginBottom: 7,
    }),
    top_tab_under_line: (height) => ({
        height: height,
        width: '100%',
        backgroundColor: '#FF9000',
    }),
    label_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
        paddingBottom: 12,
        paddingTop: 20,
    },
});


