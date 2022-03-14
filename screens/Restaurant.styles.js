import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../constants/theme';

const defaultQuantityStyles = {
  width: 50,
  backgroundColor: COLORS.white,
  alignItems: 'center',
  justifyContent: 'center',
};

const defaultRowStyles = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: SIZES.padding * 2,
  paddingHorizontal: SIZES.padding * 3,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2
  },
  backArrow: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center'
  },
  multiMenu: {
    width: 50,
    justifyContent: 'center',
    paddingRight: SIZES.padding * 2
  },
  iconStyles: {
    width: 30,
    height: 30
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextWrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 3,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray3
  },
  foodImageContainer: {
    height: SIZES.height * 0.35
  },
  foodImageStyles: { 
    width: SIZES.width,
    height: '100%'
  },
  quantityContainer: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  quantityReducerButton: {
    ...defaultQuantityStyles,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  quantityTextContainer: {
    ...defaultQuantityStyles
  },
  quantityIncreaseButton: {
    ...defaultQuantityStyles,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
  foodInfoContainer: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: SIZES.padding * 2
  },
  foodName: {
    marginVertical: 10,
    textAlign: 'center',
  },
  caloriesContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  caloriesIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding
  },
  orderContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  orderFirstRowContainer: {
    ...defaultRowStyles,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1
  },
  orderSecondRowContainer: {
    ...defaultRowStyles
  },
  orderIcons: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray
  },
  orderButtonContainer: { 
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonStyles: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius
  },
  footer: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white
  }
});