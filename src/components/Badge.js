/**
 * @description: 角标组件
 * @author: pengzhenjin
 * @date: 2020/8/11
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import PropTypes from 'prop-types'

const size = 18 // 默认大小
export default class Badge extends Component {
    static propTypes = {
        color: PropTypes.string, // 颜色
        size: PropTypes.number, // 大小
        text: PropTypes.number, // 文本数值
        textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 文本样式
        badgeStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 角标样式
    }

    static defaultProps = {
        color: '#FF4D41',
        size: size,
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {size, color, text, textStyle, badgeStyle} = this.props
        return (
            <View style={[styles.badge(size, color), badgeStyle]}>
                {
                    text &&
                    <Text style={[styles.text, textStyle]}>{text}</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    badge: (size, color) => ({
        minWidth: size,
        height: size,
        borderRadius: size / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
    }),
    text: {
        fontSize: 12,
        color: '#FFFFFF',
        paddingHorizontal: 4,
    },
})
