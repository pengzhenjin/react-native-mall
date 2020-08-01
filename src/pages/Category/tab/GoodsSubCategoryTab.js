/**
 * @description: 商品子分类 tab
 * @author: pengzhenjin
 * @date: 2020/7/22
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    FlatList,
} from 'react-native'

const {width, height} = Dimensions.get('window')

const itemImageWidth = 165
const itemImageHeight = 165

const iconSolidArrowDown = require('../../../images/icon_solid_arrow_down.png')
const iconSolidArrowUp = require('../../../images/icon_solid_arrow_up.png')
const imageGoods = require('../../../images/goods.png')

export default class GoodsSubCategoryTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],

            isOrderSynthesize: true, // 是否是综合排序
            isOrderPrice: false, // 是否是价格排序
        }
    }

    componentDidMount() {
        this.initData()
    }

    initData = () => {
        const imgUrl1 = imageGoods
        const imgUrl2 = imageGoods

        const dataList = [
            {
                id: 1,
                name: '沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发沙发1',
                imgUrl: imgUrl1,
            },
            {
                id: 2,
                name: '沙发1',
                imgUrl: imgUrl2,
            },
            {
                id: 3,
                name: '沙发1',
                imgUrl: imgUrl1,
            },
            {
                id: 4,
                name: '沙发1',
                imgUrl: imgUrl2,
            },
            {
                id: 5,
                name: '沙发1',
                imgUrl: imgUrl1,
            },
            {
                id: 6,
                name: '沙发1',
                imgUrl: imgUrl2,
            },
            {
                id: 7,
                name: '沙发1',
                imgUrl: imgUrl1,
            },
            {
                id: 8,
                name: '沙发1',
                imgUrl: imgUrl2,
            },
            {
                id: 9,
                name: '沙发1',
                imgUrl: imgUrl1,
            },
        ]

        this.setState({goodsList: dataList})
    }

    /**
     * 跳转到商品详情页面
     * @param item
     */
    gotoGoodsDetailPage = (item) => {
        // this.props.navigation.navigate('GoodsDetail')
    }

    /**
     * 综合排序
     */
    orderSynthesizeFunc = () => {
        this.setState({
            isOrderSynthesize: true,
            isOrderPrice: false,
        })
    }

    /**
     * 价格排序
     */
    orderPriceFunc = () => {
        this.setState({
            isOrderSynthesize: false,
            isOrderPrice: true,
        })
    }

    /**
     * 渲染排序 tab
     * @returns {*}
     */
    renderSortTab() {
        const isOrderSynthesize = this.state.isOrderSynthesize
        const isOrderPrice = this.state.isOrderPrice
        const textActivateStyle = styles.sort_tab_item_text_activate
        return (
            <View style={styles.sort_tab_container}>
                <TouchableOpacity style={styles.sort_tab_item_container} onPress={this.orderSynthesizeFunc}>
                    <Text style={[styles.sort_tab_item_text, isOrderSynthesize ? textActivateStyle : null]}>综合</Text>
                </TouchableOpacity>
                <View style={styles.sort_tab_item_separator} />
                <TouchableOpacity style={styles.sort_tab_item_container} onPress={this.orderPriceFunc}>
                    <Text style={[styles.sort_tab_item_text, isOrderPrice ? textActivateStyle : null]}>价格</Text>
                    <View>
                        <Image style={[styles.sort_tab_item_icon, {marginBottom: 2}]} source={iconSolidArrowUp} />
                        <Image style={styles.sort_tab_item_icon} source={iconSolidArrowDown} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderSeparator = () => {
        return <View style={styles.list_item_separator} />
    }

    renderItem = ({item, index}) => {
        let marginStyle
        if (index % 2 === 0) {
            marginStyle = {marginLeft: 10, marginRight: 5}
        } else {
            marginStyle = {marginLeft: 5, marginRight: 10}
        }
        return (
            <View style={styles.list_item_container1}>
                <TouchableOpacity
                    key={index}
                    style={[styles.list_item_container2, marginStyle]}
                    onPress={() => this.gotoGoodsDetailPage(item)}
                >
                    <View style={styles.list_item_container3}>
                        <Image
                            style={styles.list_item_image}
                            source={item.imgUrl}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.list_item_text1} numberOfLines={2}>{item.name}</Text>
                    </View>
                    <View style={styles.list_item_container4}>
                        <Text style={[styles.list_item_text2, {fontSize: 12}]}>¥
                            <Text style={[styles.list_item_text2, {fontSize: 14}]}>888</Text>
                            <Text style={[styles.list_item_text2, {fontSize: 12}]}>.00</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSortTab()}
                <FlatList
                    style={styles.list_container}
                    keyExtractor={(item) => item.id.toString()}
                    data={this.state.goodsList}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sort_tab_container: {
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderColor: '#E0E0E0',
    },
    sort_tab_item_container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sort_tab_item_text: {
        fontSize: 14,
        color: '#333333',
    },
    sort_tab_item_text_activate: {
        color: '#FA7B00',
    },
    sort_tab_item_icon: {
        width: 9,
        height: 6,
        marginLeft: 5,
    },
    sort_tab_item_separator: {
        width: 1,
        height: 20,
        backgroundColor: '#E4E4E4',
    },
    list_container: {
        marginVertical: 10,
    },
    list_item_container1: {
        width: width / 2,
    },
    list_item_container2: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    list_item_container3: {
        width: itemImageWidth,
        justifyContent: 'center',
    },
    list_item_container4: {
        flexDirection: 'row',
        width: itemImageWidth,
        marginTop: 12,
    },
    list_item_image: {
        width: itemImageWidth,
        height: itemImageHeight,
    },
    list_item_text1: {
        fontSize: 14,
        color: '#333333',
        marginTop: 10,
    },
    list_item_text2: {
        fontSize: 14,
        color: '#FF0000',
    },
    list_item_separator: {
        height: 10,
        backgroundColor: 'transparent',
    },
})
