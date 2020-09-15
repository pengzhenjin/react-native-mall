/**
 * @description: 数据item
 * @author: pengzhenjin
 * @date: 2020/8/10
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Text, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const itemImageWidth = width / 2 - 24;
const itemImageHeight = 180;

export default class ListItem extends Component {
    static propTypes = {
        itemData: PropTypes.object.isRequired, // item 数据
        itemIndex: PropTypes.number.isRequired, // item 下标
    };
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    /**
     * 跳转到商品详情页面
     * @param itemData
     */
    gotoGoodsDetailPage = (itemData) => {

    };

    render() {
        const {itemData, itemIndex} = this.props;
        const isRightItem = itemIndex % 2 === 0; // 是否是右边的 item
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.item_container, isRightItem && {marginRight: 5}]}
                    onPress={() => this.gotoGoodsDetailPage(itemData)}
                >
                    <View style={styles.item_container2}>
                        <Image
                            style={styles.item_image}
                            source={itemData.imgUrl}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.item_text1} numberOfLines={2}>{itemData.name}</Text>
                    </View>
                    <View style={styles.item_container3}>
                        <Text style={[styles.item_text2, {fontSize: 12}]}>¥
                            <Text style={[styles.item_text2, {fontSize: 14}]}>888</Text>
                            <Text style={[styles.item_text2, {fontSize: 12}]}>.00</Text>
                        </Text>
                    </View>
                    {
                        isRightItem &&
                        <View style={styles.item_container4}>
                            <Text style={styles.item_tag1}>自营</Text>
                            <Text style={styles.item_tag2}>爆款</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
    },
    item_container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    item_container2: {
        width: itemImageWidth,
        justifyContent: 'center',
    },
    item_container3: {
        width: itemImageWidth,
        flexDirection: 'row',
        marginTop: 12,
    },
    item_container4: {
        width: itemImageWidth,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    item_image: {
        width: itemImageWidth,
        height: itemImageHeight,
    },
    item_text1: {
        fontSize: 14,
        color: '#333333',
        marginTop: 10,
    },
    item_text2: {
        fontSize: 14,
        color: '#FF0000',
    },
    item_tag1: {
        lineHeight: 16,
        fontSize: 11,
        color: '#FFFFFF',
        backgroundColor: '#FA7B00',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#FA7B00',
        borderRadius: 2,
        paddingHorizontal: 2,
    },
    item_tag2: {
        lineHeight: 16,
        fontSize: 11,
        color: '#FA7B00',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#FA7B00',
        borderRadius: 2,
        paddingHorizontal: 2,
        marginHorizontal: 8,
    },
});
