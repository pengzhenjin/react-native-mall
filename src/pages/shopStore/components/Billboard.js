/**
 * @description: 广告牌
 * @author: pengzhenjin
 * @date: 2020/9/15
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const imageWidth = 280;
const imageHeight = 150;

const billboardData = [1, 1, 1, 1, 1, 1, 1];

export default class Billboard extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = require('../../../images/goods.png');
        return (
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.row_container}>
                    {
                        !!billboardData && billboardData.map((item, index) => {
                            const isLastItem = (index === billboardData.length - 1);
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.item_container, isLastItem && {marginRight: 0}]}
                                    onPress={null}
                                >
                                    <Image
                                        style={styles.item_image}
                                        source={imageUrl}
                                        resizeMode={'cover'}
                                    />
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
    },
    row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 14,
    },
    item_container: {
        flexDirection: 'column',
        marginRight: 20,
    },
    item_image: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 5,
    },
});

