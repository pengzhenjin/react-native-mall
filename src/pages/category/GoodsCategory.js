/**
 * @description: 商品分类
 * @author: pengzhenjin
 * @date: 2020/7/21
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    SectionList, Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const firstCategoryItemHeight = 56;

const imageGoods = require('../../images/goods.png');

export default class GoodsCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryData: [], // 一级分类数据
            secondCategoryData: [], // 二级分类数据

            selectedFirstCategoryIndex: 0, // 选中的一级分类的索引
        };
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        const firstCategoryData = [
            {id: 0, name: '品牌家装'},
            {id: 1, name: '厨房卫浴'},
            {id: 2, name: '百货'},
            {id: 3, name: '家用电器'},
            {id: 4, name: '医药'},
            {id: 5, name: '洗护'},
            {id: 6, name: '企业'},
            {id: 7, name: '箱包'},
            {id: 8, name: '数码'},
            {id: 9, name: '运动'},
            {id: 10, name: '进口'},
            {id: 11, name: '女装'},
            {id: 12, name: '男装'},
            {id: 13, name: '女鞋'},
            {id: 14, name: '男鞋'},
            {id: 15, name: '手机'},
            {id: 16, name: '饰品'},

            {id: 14, name: '男鞋'},
            {id: 15, name: '手机'},
            {id: 16, name: '饰品'},
            {id: 14, name: '男鞋'},
            {id: 15, name: '手机'},
            {id: 16, name: '饰品'},
            {id: 14, name: '男鞋'},
            {id: 15, name: '手机'},
            {id: 16, name: '饰品'},
            {id: 14, name: '男鞋'},
            {id: 15, name: '手机'},
            {id: 16, name: '饰品'},
        ];

        const imgUrl1 = imageGoods;
        const imgUrl2 = imageGoods;

        const secondCategoryData = [
            {
                id: 1,
                name: '家装1',
                data: [
                    {name: '沙发1', imgUrl: imgUrl1}, {name: '沙发2', imgUrl: imgUrl2},
                    {name: '沙发3', imgUrl: imgUrl1}, {name: '沙发4', imgUrl: imgUrl2},
                ],
            },
            {
                id: 2,
                name: '家装2',
                data: [
                    {name: '沙发1', imgUrl: imgUrl1}, {name: '沙发2', imgUrl: imgUrl2},
                    {name: '沙发3', imgUrl: imgUrl1}, {name: '沙发4', imgUrl: imgUrl2},
                ],
            },
            {
                id: 3,
                name: '家装3',
                data: [
                    {name: '沙发1', imgUrl: imgUrl1}, {name: '沙发2', imgUrl: imgUrl2},
                    {name: '沙发3', imgUrl: imgUrl1}, {name: '沙发4', imgUrl: imgUrl2},
                ],
            },
            {
                id: 4,
                name: '家装4',
                data: [
                    {name: '沙发1', imgUrl: imgUrl1}, {name: '沙发2', imgUrl: imgUrl2},
                    {name: '沙发3', imgUrl: imgUrl1}, {name: '沙发4', imgUrl: imgUrl2},
                ],
            },
        ];

        this.setState({firstCategoryData: firstCategoryData, secondCategoryData: secondCategoryData});
    };

    onClickFirstCategoryItem = (item, index) => {
        this.setState({selectedFirstCategoryIndex: index});

        // 计算当前 item 的高度
        const indexHeight = firstCategoryItemHeight * index;

        // 计算屏幕一半的高度
        const halfHeight = (height - 65) / 2;

        if (indexHeight > halfHeight) {
            this.flatList.scrollToOffset({
                animated: true,
                offset: indexHeight - halfHeight,
            });
        }

        this.sectionList.scrollToLocation({
            animated: true,
            itemIndex: 0,
            sectionIndex: 0,
        });
    };

    renderFirstCategoryItem = ({item, index}) => {
        const selectedFirstCategoryIndex = this.state.selectedFirstCategoryIndex;

        let itemContainerStyle;
        let itemTextColor;
        if (selectedFirstCategoryIndex === index) {
            itemContainerStyle = styles.first_category_item_selected_container;
            itemTextColor = '#FA7B00';
        } else {
            itemContainerStyle = styles.first_category_item_container;
            itemTextColor = '#333333';
        }

        return (
            <TouchableOpacity
                style={itemContainerStyle}
                onPress={() => this.onClickFirstCategoryItem(item, index)}
            >
                <Text style={[styles.first_category_item_text, {color: itemTextColor}]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    renderSecondCategoryItem = (item) => {
        if (item.index === 0) {
            const data = item.section.data;
            return (
                <View style={styles.second_category_item_container1}>
                    {
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.second_category_item_container2}
                                    onPress={() => this.props.navigation.navigate('GoodsSubCategory', {categoryName: item.name})}
                                >
                                    <Image
                                        style={styles.second_category_item_image}
                                        source={item.imgUrl}
                                    />
                                    <Text style={styles.second_category_item_title}
                                        numberOfLines={1}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            );
        } else {
            return null;
        }
    };

    renderSecondCategorySectionHeader = ({section}) => {
        return (
            <Text style={styles.second_category_section_title}>{section.name}</Text>
        );
    };

    renderSeparatorLine = () => {
        return (
            <View style={{backgroundColor: '#FFFFFF'}}>
                <View style={styles.separator_line} />
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.first_category_container}>
                    <FlatList
                        ref={refs => this.flatList = refs}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.firstCategoryData}
                        renderItem={this.renderFirstCategoryItem}
                        ItemSeparatorComponent={this.renderSeparatorLine}
                    />
                </View>
                <View style={styles.second_category_container}>
                    <SectionList
                        ref={refs => this.sectionList = refs}
                        renderSectionHeader={this.renderSecondCategorySectionHeader}
                        renderItem={this.renderSecondCategoryItem}
                        sections={this.state.secondCategoryData}
                        ItemSeparatorComponent={null}
                        ListHeaderComponent={null}
                        ListFooterComponent={null}
                        keyExtractor={(item, index) => index + item}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    first_category_container: {
        flexDirection: 'column',
        width: 90,
    },
    first_category_item_container: {
        height: firstCategoryItemHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        backgroundColor: '#FFFFFF',
    },
    first_category_item_selected_container: {
        height: firstCategoryItemHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        borderLeftWidth: 4,
        borderColor: '#FA7B00',
        backgroundColor: 'transparent',
    },
    first_category_item_text: {
        fontSize: 14,
        color: '#333333',
    },
    second_category_container: {
        flex: 1,
        flexDirection: 'column',
    },
    second_category_item_container1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 14,
    },
    second_category_item_container2: {
        width: (width - 118) / 3,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    second_category_item_image: {
        width: 65,
        height: 65,
    },
    second_category_item_title: {
        marginTop: 16,
        fontSize: 14,
        color: '#333333',
    },
    second_category_section_title: {
        fontSize: 14,
        color: '#333333',
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 15,
    },
    separator_line: {
        flex: 1,
        flexDirection: 'row',
        height: 1,
        backgroundColor: '#E4E4E4',
        marginHorizontal: 14,
    },
});
