import React, { useState } from 'react';
import {
  View, 
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { object } from 'prop-types';

import { COLORS, FONTS, icons } from '../constants';
import { categoryData, restaurantData, initialCurrentLocation, priceRating } from '../data/dummyData';
import styles from './Home.styles';
import SvgCircle from '../patterns/atoms/svg/SvgCircle';
import HeaderTitle from '../patterns/atoms/HeaderTitle';
import Page from '../patterns/atoms/Page';

const Home = ({ navigation }) => {
  const [categories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation] = useState(initialCurrentLocation);

  const onSelectCategory = category => {

    // If same category is already selected, clear filter.
    if (selectedCategory !== null && selectedCategory.name === category.name) {
      setRestaurants(restaurantData);
      setSelectedCategory(null);
    } else {

      // Filter restaurant
      const restaurantList = restaurantData.filter(restaurant => restaurant.categories.includes(
        category.id)
      );
      setRestaurants(restaurantList);
      setSelectedCategory(category);
    }
  };

  const getCategoryNameById = id => {
    const newCategory = categories.filter(category => category.id === id);
    if (newCategory.length > 0) {
      return newCategory[0].name;
    } else {
      return "";
    }
  };

  const keyExtractor = item => item.id;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.nearbyIconContainer}
      >
        <Image
          source={icons.nearby}
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      <HeaderTitle 
        title={currentLocation.streetName} 
        titleContainerStyles={styles.titleContainer}
        titleWrapperStyles={styles.titleTextWrapper}
      />

      <TouchableOpacity style={styles.basketIconContainer}>
        <Image 
          source={icons.basket}
          resizeMode='contain'
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );

  const renderMainCategories = () => {
  
    const renderCategoryItem = ({item}) => {
      const isSelected = selectedCategory?.id == item.id;
      return (
        <TouchableOpacity 
          style={[styles.categoryButton,
            { ...styles.shadow }, 
            isSelected && styles.categoryButtonSelected
          ]}
          onPress={() => onSelectCategory(item)}
        >
          <View style={[styles.categoryImageContainer,
            isSelected && styles.categoryImageContainerSelected
          ]}>
            <Image
              source={item.icon}
              resizeMode='contain'
              style={styles.iconStyle}
            />
          </View>
          
          <Text style={[styles.categoryNameStyle,
            {...FONTS.body5},
            isSelected && styles.categoryTextSelected
          ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.mainCategoriesContainer}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>
  
        <FlatList 
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderCategoryItem}
          contentContainerStyle={styles.categoriesListContainer}
        />
      </View>
    );
  };

  const renderRestaurantList = () => {

    const renderRestaurantItem = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.restaurantCardButton}
          onPress={() => navigation.navigate('Restaurant', { item, currentLocation} )}
        >
          <View style={styles.restaurantCardContent}>
            <Image
              source={item.photo}
              resizeMode='cover'
              style={styles.restaurantImage}
            />
  
            <View style={[styles.timeLabelContainer, {...styles.shadow}]}>
              <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
            </View>
          </View>
  
          {/* Restaurant Info */}
          <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
  
          <View style={styles.ratingContainer}>
            {/* Rating */}
            <Image 
              source={icons.star}
              style={styles.ratingStar}
            />
            <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
  
            {/* Categories */}
            <View style={styles.restaurantCategoriesContainer}>
              {
                item.categories.map((categoryId) => (
                  <View
                    style={styles.restaurantCategory}
                    key={categoryId}
                  >
                    <Text style={{ ...FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <SvgCircle style={styles.separator}/>
                  </View>
                ))
              }
  
              {/* Price */}
              {
                priceRating.map((rate) => {
                  const isExpensive = rate <= item.priceRating;
                  return (
                    <Text
                      key={rate}
                      style={{
                        ...FONTS.body3,
                        color: isExpensive ? COLORS.black : COLORS.darkgray
                      }}
                    >
                      $
                    </Text>
                  );
                })
              }
            </View>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <FlatList 
        data={restaurants}
        keyExtractor={keyExtractor}
        renderItem={renderRestaurantItem}
        contentContainerStyle={styles.restaurantsListContainer}
  
      />
    );
  };

  return (
    <Page style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </Page>
  );
};

Home.propTypes = {
  navigation: object
};

export default Home;
