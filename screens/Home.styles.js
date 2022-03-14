import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50
  },
  nearbyIconContainer: {
    width: 50,
    padding: SIZES.padding * 2,
    justifyContent: 'center'
  },
  iconStyle: {
    width: 30,
    height: 30
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextWrapper: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius
  },
  basketIconContainer: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center'
  },
  mainCategoriesContainer: {
    padding: SIZES.padding * 2
  },
  categoriesListContainer: {
    paddingVertical: SIZES.padding * 2
  },
  categoryButton: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
  },
  categoryImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray
  },
  categoryNameStyle: {
    marginTop: SIZES.padding,
    color: COLORS.black
  },
  categoryButtonSelected: {
    backgroundColor: COLORS.primary
  },
  categoryImageContainerSelected: {
    color: COLORS.white
  },
  categoryTextSelected: {
    color: COLORS.white
  },
  restaurantsListContainer: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 30
  },
  restaurantCardButton: {
    marginBottom: SIZES.padding * 2
  },
  restaurantCardContent: { 
    position: 'relative',
    marginBottom: SIZES.padding
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius
  },
  timeLabelContainer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingContainer: {
    marginTop: SIZES.padding,
    flexDirection: 'row'
  },
  ratingStar: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
    marginRight: 10
  },
  restaurantCategoriesContainer: {
    flexDirection: 'row',
    marginLeft: 10
  },
  restaurantCategory: {
    flexDirection: 'row'
  },
  separator: {
    marginHorizontal: 5,
    transform: [{ translateY: 10 }]
  }
});