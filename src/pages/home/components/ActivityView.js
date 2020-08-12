/**
 * @description: 活动板块（新人专想、每日上新、品牌好店、家居生活、家居严选）
 * @author: pengzhenjin
 * @date: 2020/8/10
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const imageWidth = (width - 93) / 4;
const imageHeight = 100;

export default class ActivityView extends Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const imageUrl = require('../../../images/goods.png');
        return (
            <View style={styles.container}>
                <View style={styles.row_container}>
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{'新人专享'}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 10}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{''}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 15}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{'每日上新'}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 10}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{''}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                </View>

                <View style={{height: 18}} />

                <View style={styles.row_container}>
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{'品牌好店'}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 10}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{'家居生活'}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 15}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{'安居严选'}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
                    </TouchableOpacity>
                    <View style={{width: 10}} />
                    <TouchableOpacity style={styles.item_container} onPress={null}>
                        <Text style={styles.item_text}>{''}</Text>
                        <Image style={styles.item_image} source={imageUrl} />
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
    item_container: {
        flexDirection: 'column',
    },
    item_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    item_image: {
        width: imageWidth,
        height: imageHeight,
        minWidth: 70,
        borderRadius: 5,
    },
});
