/**
 * @description: 顶部下拉菜单
 * @author: pengzhenjin
 * @date: 2020/7/30
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    Text,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const iconItemSelected = require('../../../images/icon_check_mark.png');

export default class TopDropdownMenu extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired, // 数据（数组）
        onItemSelected: PropTypes.func, // 选中 item 时的回调函数
        onShow: PropTypes.func, // 显示时的回调函数
        onHide: PropTypes.func, // 隐藏时的回调函数
    };
    static defaultProps = {

    };

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            topOffset: props.topOffset, // 距离屏幕顶部的偏移量
            currentItemIndex: 0, // 当前选中时的 item index
            isVisible: false, // 是否显示弹框
        };
    }

    /**
     * 显示
     * @param topOffset 距离页面顶部的偏移量
     * @param index 当前选中时的 item index
     */
    show = (topOffset, index) => {
        this.setState({isVisible: true, topOffset: topOffset, currentItemIndex: index})
        this.props.onShow && this.props.onShow()
    }

    /**
     * 隐藏
     */
    hide = () => {
        this.setState({isVisible: false});
        this.props.onHide && this.props.onHide();
    };

    /**
     * 选择 item
     * @param item
     * @param index
     */
    onItemSelectedFunc = (item, index) => {
        this.setState({currentItemIndex: index, isVisible: false});
        this.props.onItemSelected && this.props.onItemSelected(index);
    };

    renderItem = ({item, index}) => {
        const isCurrentItemIndex = index === this.state.currentItemIndex; // 判断是否是当前 index
        const boldStyle = isCurrentItemIndex ? {fontWeight: 'bold'} : null;
        const icon = isCurrentItemIndex ? iconItemSelected : null;
        return (
            <TouchableOpacity style={styles.item_container} onPress={() => this.onItemSelectedFunc(item, index)}>
                <Text style={[styles.item_text, boldStyle]} numberOfLines={1}>{item.name}</Text>
                <Image style={styles.item_image} source={icon} />
            </TouchableOpacity>
        );
    };

    render() {
        const {isVisible, data, topOffset} = this.state;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={() => this.hide()}
                visible={isVisible}
            >
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={() => this.hide()}
                >
                    <FlatList
                        style={[styles.content_container, {top: topOffset}]}
                        keyExtractor={(item, index) => index.toString()}
                        data={data}
                        renderItem={this.renderItem}
                        horizontal={false}
                        numColumns={2}
                        renderSeparator={null}
                    />
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content_container: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#FFFFFF',
    },
    item_container: {
        height: 50,
        width: width / 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_text: {
        lineHeight: 20,
        fontSize: 14,
        color: '#333333',
    },
    item_image: {
        width: 13,
        height: 9,
        marginLeft: 10,
    },
});

