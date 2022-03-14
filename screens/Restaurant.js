import { object } from 'prop-types';
import React, { useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

import Page from '../patterns/atoms/Page';
import HeaderTitle from '../patterns/atoms/HeaderTitle';
import styles from './Restaurant.styles';
import { isIphoneX } from 'react-native-iphone-x-helper';

const Restaurant = ({ navigation, route }) => {
  const { item, currentLocation } = route.params;
  const [orderItems, setOrderItems] = useState(
    restaurant?.menu.map(menuItem => ({
      menuId: menuItem?.menuId,
      qty: 0,
      price: menuItem?.price,
      total: 0
    }))
  );
  const restaurant = item;
  const scrollX = new Animated.Value(0);

  const editOrder = (action, menuId, price) => {
    //create a copy of summer fruits.
    const orderItemsCopy = [...orderItems];

    //find index of item to be replaced
    const targetIndex = orderItems.findIndex(f => f.menuId === menuId);
    
    // filter food selected information
    const foodSelected = orderItems.filter(a => a.menuId === menuId);

    // food selected info object
    const foodSelectedObject = foodSelected[0];
    
    if (action === '+') {

      const newQty = foodSelectedObject.qty + 1;
      foodSelectedObject.qty = newQty;
      foodSelectedObject.total = foodSelectedObject.qty * price;

    } else {
      if (foodSelectedObject.qty > 0) {
        const newQty = foodSelectedObject.qty - 1;
        foodSelectedObject.qty = newQty;
        foodSelectedObject.total = newQty * price;
      }
    }
    // store new values on array copy
    orderItemsCopy[targetIndex] = foodSelectedObject;

    // save new order value on state
    setOrderItems(orderItemsCopy);
  };

  const getOrderQty = (menuId) => {
    const orderItem = orderItems.filter(a => a.menuId === menuId);
    
    if (orderItem.length > 0) {
      return orderItem[0].qty;
    } else {
      return 0;
    }
  };

  const getBasketItemCount = () => {
    const itemCount = orderItems.reduce((a, b) => a + (b?.qty || 0), 0);

    return itemCount;
  };

  const getOrderTotal = () => {
    const totalCount = orderItems.reduce((a, b) => a + (b?.total || 0), 0);

    return totalCount.toFixed(2);
  };

  const renderHeader = () => (
    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity 
        style={styles.backArrow}
        onPress={() => navigation.goBack()}
      >
        <Image 
          source={icons.back}
          style={styles.iconStyles}
        />
      </TouchableOpacity>

      {/* Restaurant Name Section */}
      <HeaderTitle 
        title={restaurant?.name}
        titleContainerStyles={styles.titleContainer}
        titleWrapperStyles={styles.titleTextWrapper}
      />

      <TouchableOpacity
        style={styles.multiMenu}
      >
        <Image 
          source={icons.list}
          resizeMode='contain'
          style={styles.iconStyles}
        />
      </TouchableOpacity>
    </View>
  );
  
  const renderFoodInfo = () => (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: scrollX } } },
      ],
      { useNativeDriver: false}
      )
      }
    >
      {
        restaurant?.menu.map((item, index) => (
          <View
            key={`menu-${index}`}
            style={{ alignItems: 'center'}}
          >
            <View style={styles.foodImageContainer}>
              {/* Food Image */}
              <Image 
                source={item.photo}
                resizeMode='cover'
                style={styles.foodImageStyles}
              />

              {/* Quantity */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityReducerButton}
                  onPress={() => editOrder('-', item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>

                <View style={styles.quantityTextContainer}>
                  <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
                </View>

                <TouchableOpacity
                  style={styles.quantityIncreaseButton}
                  onPress={() => editOrder('+', item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name & Description */}

            <View style={styles.foodInfoContainer}>
              <Text style={[styles.foodName, {...FONTS.h2}]}>
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3}}>
                {item.description}
              </Text>
            </View>

            {/* Calories */}
            <View style={styles.caloriesContainer}>
              <Image 
                source={icons.fire}
                style={styles.caloriesIcon}
              />

              <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))
      }
    </Animated.ScrollView>
  );

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30}}>
        <View style={styles.dotsContainer}>
          {
            restaurant?.menu.map((item, index) => {
              const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate:'clamp'
              });

              const dotSize = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                extrapolate:'clamp'
              });

              const dotColor = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                extrapolate:'clamp'
              });
              return (
                <Animated.View 
                  key={`dot-${index}`}
                  style={{
                    borderRadius:SIZES.radius,
                    opacity: opacity,
                    marginHorizontal: 6,
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: dotColor
                  }}
                />
              );
            })
          }
        </View>
      </View>
    );
  }
  ;

  const renderOrder = () => (
    <View>
      {renderDots()}
      <View style={styles.orderContainer}>
        <View style={styles.orderFirstRowContainer}>
          <Text style={{ ...FONTS.h3 }}>{getBasketItemCount()} items in cart</Text>
          <Text style={{ ...FONTS.h3 }}>$ {getOrderTotal()}</Text>
        </View>

        <View style={styles.orderSecondRowContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image 
              source={icons.pin}
              resizeMode='contain'
              style={styles.orderIcons}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
            Location
            </Text>
          </View>

          <View style={{ flexDirection: 'row'}}>
            <Image 
              source={icons.master_card}
              resizeMode='contain'
              style={styles.orderIcons}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>•••• 8888</Text>
          </View>
        </View>

        {/* Order Button  */}
        <View style={styles.orderButtonContainer}>
          <TouchableOpacity
            style={styles.orderButtonStyles}
            onPress={() => navigation.navigate("OrderDelivery", {
              restaurant, currentLocation
            })}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      { isIphoneX() &&  <View style={styles.footer} /> }
    </View>
  );

  return (
    <Page style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </Page>
  );
};

Restaurant.propTypes = {
  navigation: object,
  route: object
};

export default Restaurant;
