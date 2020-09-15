/**
 * @description: 首页 banner
 * @author: pengzhenjin
 * @date: 2020/8/7
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const bannerHeight = 140;

export default class BannerView extends Component {
    static propTypes = {
        bannerData: PropTypes.array.isRequired,
    };
    static defaultProps = {
        bannerData: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            bannerList: props.bannerData,
        };
    }

    /**
     * 跳转到banner详情页面
     */
    gotoBannerDetail = () => {
        console.log('===> 跳转到banner详情页面');
    };

    renderBanner = () => {
        const bannerList = this.state.bannerList;
        if (!bannerList.isEmpty && bannerList.length > 0) {
            return (
                bannerList.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={1}
                            onPress={this.gotoBannerDetail}
                        >
                            <Image style={styles.banner_img} source={item.imgUrl} />
                        </TouchableOpacity>
                    );
                })
            );
        } else {
            return <View />;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner_swiper}>
                    <Swiper
                        height={bannerHeight}
                        horizontal={true}
                        dot={<View style={styles.banner_dot} />}
                        activeDot={<View style={styles.banner_dot_active_dot} />}
                        paginationStyle={styles.banner_pagination}
                        index={0}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={3}
                        removeClippedSubviews={false}
                    >
                        {this.renderBanner()}
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
    },
    banner_swiper: {
        height: 150,
    },
    banner_dot: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: 4,
        height: 4,
        borderRadius: 2,
        margin: 4,
    },
    banner_dot_active_dot: {
        backgroundColor: '#FFFFFF',
        width: 12,
        height: 4,
        borderRadius: 5,
        margin: 4,
    },
    banner_pagination: {
        bottom: 8,
    },
    banner_img: {
        width: width - 28,
        height: bannerHeight,
        borderRadius: 5,
    },
});
