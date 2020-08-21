/**
 * @description: 首页 tab
 * @author: pengzhenjin
 * @date: 2020/8/7
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import GoodsCategory from '../../category/GoodsCategory';

const itemHeight = 32; // item 的高度

export default class TopTabView extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired, // tab 数据
        onChangeTab: PropTypes.func, // tab 切换事件函数
    };
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            data: props.data, // 数据
            currentTabIndex: 0, // 当前选中的 item index
        };
    }

    /**
     * 切换 tab
     * @param index
     */
    onChangeTab = (index) => {
        // this.flatList.scrollToIndex({
        //     animated: true,
        //     index: index,
        // })
        this.setState({currentTabIndex: index});
        this.props.navigation.navigate('GoodsCategory', {tabIndex: index - 1});
    };

    renderListItem = ({item, index}) => {
        const {currentTabIndex, data} = this.state;
        const isCurrentTabIndex = index === currentTabIndex; // 判断是否是当前 index
        const isLastItem = index === data.length - 1; // 是否是最后一条item
        return (
            <TouchableOpacity
                style={[styles.item_container, isCurrentTabIndex && styles.item_indicator, isLastItem && {marginRight: 0}]}
                onPress={() => this.onChangeTab(index)}
            >
                <Text style={isCurrentTabIndex ? styles.item_title_selected : styles.item_title}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={refs => this.flatList = refs}
                    style={styles.list_container}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={this.renderListItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={0}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FA7B00',
        paddingHorizontal: 14,
    },
    list_container: {
        flex: 1,
    },
    item_container: {
        height: itemHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 18,
    },
    item_title: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    item_title_selected: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    item_indicator: {
        borderBottomWidth: 4,
        borderColor: '#FFFFFF',
    },
});
