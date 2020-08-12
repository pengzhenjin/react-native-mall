/**
 * @description: 图片 + 文本 组件
 * 支持：上下结构、左右结构，默认：上下结构
 * @author: pengzhenjin
 * @date: 2020/7/17
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ImageText extends Component {
    static propTypes = {
        image: PropTypes.any, // 图片资源
        imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 图片样式
        title: PropTypes.string, // 标题
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 标题样式
        onPress: PropTypes.func,
        horizontal: PropTypes.bool, // 是否横向显示（即：左右结构）
    };
    static defaultProps = {
        title: '',
        horizontal: false,
    };

    renderHorizontalView = () => {
        return (
            <View style={styles.horizontal_container}>
                <Image
                    source={this.props.image}
                    style={[styles.horizontal_image_style, this.props.imageStyle]}
                    resizeMode={'contain'}
                />
                <Text style={[styles.horizontal_title_style, this.props.titleStyle]} numberOfLines={1}>
                    {this.props.title}
                </Text>
            </View>
        );
    };

    renderVerticalView = () => {
        return (
            <View style={styles.vertical_container}>
                <Image
                    source={this.props.image}
                    style={[styles.vertical_image_style, this.props.imageStyle]}
                    resizeMode={'contain'}
                />
                <Text style={[styles.vertical_title_style, this.props.titleStyle]} numberOfLines={1}>
                    {this.props.title}
                </Text>
            </View>
        );
    };

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                {this.props.horizontal ? this.renderHorizontalView() : this.renderVerticalView()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    horizontal_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    horizontal_image_style: {
        width: 48,
        height: 48,
        marginHorizontal: 10,
    },
    horizontal_title_style: {
        fontSize: 12,
        color: '#232323',
    },

    vertical_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    vertical_image_style: {
        width: 48,
        height: 48,
    },
    vertical_title_style: {
        fontSize: 12,
        color: '#232323',
        marginTop: 10,
    },
});
