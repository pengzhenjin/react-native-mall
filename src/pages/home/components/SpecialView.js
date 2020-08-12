/**
 * @description: 精彩专题
 * @author: pengzhenjin
 * @date: 2020/8/10
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const imageWidth = (width - 70) / 2;
const imageHeight = 100;

const iconSpecialArrow = require('../../../images/home/icon_home_special_arrow.png');

export default class SpecialView extends Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = require('../../../images/goods.png');
        return (
            <View style={styles.container}>
                <View style={styles.row_container}>
                    <Text style={styles.title_text}>{'精彩专题'}</Text>
                    <TouchableOpacity
                        style={styles.title_right_container}
                        activeOpacity={0.8}
                        onPress={null}
                    >
                        <Text style={styles.title_right_text}>{'发现更多专题'}</Text>
                        <Image style={styles.title_right_image} source={iconSpecialArrow} />
                    </TouchableOpacity>
                </View>
                <View style={{height: 12}} />
                <View style={styles.row_container}>
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Image style={styles.item_image} source={imageUrl} />
                        <Text style={styles.item_text} numberOfLines={2}>
                            {'卫生间重新翻修，不注意这几个问题，真的遭罪了！'}
                        </Text>
                    </TouchableOpacity>
                    <View style={{width: 14}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Image style={styles.item_image} source={imageUrl} />
                        <Text style={styles.item_text} numberOfLines={2}>
                            {'房子采光不好，如何技巧来解决？'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        marginBottom: 18,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
    },
    row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title_text: {
        lineHeight: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    title_right_container: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title_right_text: {
        fontSize: 12,
        color: '#999999',
        marginHorizontal: 4,
    },
    title_right_image: {
        width: 12,
        height: 12,
    },
    item_container: {
        flexDirection: 'column',
    },
    item_text: {
        width: imageWidth,
        lineHeight: 20,
        fontSize: 14,
        color: '#333333',
        marginTop: 10,
    },
    item_image: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 5,
    },
});
