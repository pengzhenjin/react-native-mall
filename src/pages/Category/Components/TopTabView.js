/**
 * @description: 商品分类顶部的 tab 组件
 * @author: pengzhenjin
 * @date: 2020/7/30
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
    Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import TopDropdownMenu from './TopDropdownMenu'


const iconArrowUp = require('../../../images/icon_arrow_up.png')
const iconArrowDown = require('../../../images/icon_arrow_down.png')

const itemHeight = 50 // item 的高度

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20
const headerNavHeight = Platform.OS === 'ios' ? 44 : 56
const topOffset = itemHeight  + headerNavHeight

export default class TopTabView extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired, // tab 名称（数组）
        onChange: PropTypes.func, // tab 切换事件函数
    }
    static defaultProps = {}

    constructor(props) {
        super(props)
        this.state = {
            data: props.data, // 数据
            currentTabIndex: 0, // 当前选中的 item index
            isShowDropdown: false, // 是否显示下拉列表
        }
    }

    /**
     * 切换 tab
     * @param index
     */
    onChangeTab = (index) => {
        this.flatList.scrollToIndex({
            animated: true,
            index: index,
        })
        this.setState({currentTabIndex: index})
        this.props.onChange && this.props.onChange(index)
    }

    /**
     * 显示下拉菜单
     * @param index
     */
    showDropdownMenu = (index) => {
        this.dropdownMenu.show(index)
    }

    renderListItem = ({item, index}) => {
        const isCurrentTabIndex = index === this.state.currentTabIndex // 判断是否是当前 index
        return (
            <TouchableOpacity
                style={[styles.item_container, isCurrentTabIndex ? styles.item_indicator : {}]}
                onPress={() => this.onChangeTab(index)}
            >
                <Text style={isCurrentTabIndex ? styles.item_title_selected : styles.item_title}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {data, isShowDropdown, currentTabIndex} = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    ref={refs => this.flatList = refs}
                    style={styles.list_container}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={this.renderListItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={0}
                />
                <TouchableOpacity style={styles.arrow_container} onPress={() => this.showDropdownMenu(currentTabIndex)}>
                    <Image source={isShowDropdown ? iconArrowUp : iconArrowDown} />
                </TouchableOpacity>

                <TopDropdownMenu
                    ref={refs => this.dropdownMenu = refs}
                    data={data}
                    topOffset={topOffset}
                    onItemSelected={(index) => this.onChangeTab(index)}
                    onShow={() => this.setState({isShowDropdown: true})}
                    onHide={() => this.setState({isShowDropdown: false})}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    list_container: {
        flex: 1,
        marginHorizontal: 10,
    },
    item_container: {
        height: itemHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    item_title: {
        fontSize: 16,
        color: '#333333',
    },
    item_title_selected: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
    },
    item_indicator: {
        borderBottomWidth: 3,
        borderColor: '#FF9000',
    },
    arrow_container: {
        height: itemHeight,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    }
})
