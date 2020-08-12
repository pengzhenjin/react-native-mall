/**
 * @description: 功能球 组件
 * @author: pengzhenjin
 * @date: 2020/8/7
 */
import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import ImageText from '../../../components/ImageText';
import PropTypes from 'prop-types'

const width = Dimensions.get('window').width;

const iconFunctional1 = require('../../../images/home/icon_functional_1.png')
const iconFunctional2 = require('../../../images/home/icon_functional_2.png')
const iconFunctional3 = require('../../../images/home/icon_functional_3.png')
const iconFunctional4 = require('../../../images/home/icon_functional_4.png')
const iconFunctional5 = require('../../../images/home/icon_functional_5.png')

export default class FunctionalView extends Component {
    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.functional_container}>
                <ImageText
                    image={iconFunctional1}
                    title={'热销爆款'}
                    imageStyle={styles.functional_image}
                    titleStyle={styles.functional_title}
                    onPress={() => this.props.navigation.navigate('GoodsCategory')}
                />
                <ImageText
                    image={iconFunctional2}
                    title={'家居生活'}
                    imageStyle={styles.functional_image}
                    titleStyle={styles.functional_title}
                    onPress={() => this.props.navigation.navigate('GoodsCategory')}
                />
                <ImageText
                    image={iconFunctional3}
                    title={'促销优惠'}
                    imageStyle={styles.functional_image}
                    titleStyle={styles.functional_title}
                    onPress={() => this.props.navigation.navigate('GoodsCategory')}
                />
                <ImageText
                    image={iconFunctional4}
                    title={'每日上新'}
                    imageStyle={styles.functional_image}
                    titleStyle={styles.functional_title}
                    onPress={() => this.props.navigation.navigate('GoodsCategory')}
                />
                <ImageText
                    image={iconFunctional5}
                    title={'品牌好店'}
                    imageStyle={styles.functional_image}
                    titleStyle={styles.functional_title}
                    onPress={() => this.props.navigation.navigate('GoodsCategory')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    functional_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 14,
    },
    functional_image: {
        width: 44,
        height: 44,
    },
    functional_title: {
        fontSize: 12,
        color: '#333333',
        marginTop: 12,
    },
})
