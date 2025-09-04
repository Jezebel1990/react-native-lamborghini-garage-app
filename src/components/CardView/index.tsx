import React from 'react';
import { View, Text, Button, Image } from "react-native";

import Logo from "../../../assets/logo.png";
import { styles } from './style';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton';

export default function CardView() {
    const renderLogoBox = () => (
     <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
      </View>
    );

    const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>Model</Text>
    </View>
  );

   const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}5.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => {}}
      />
      <Text style={styles.priceLabel}>VALOR</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => {}}
      />
    </View>
  );

    return (
        <View style={styles.imageContainer}>
          {renderLogoBox()}
          <Divider/>
          {renderCarDetails()}
          {renderCarImage()}
           <Divider/>
           <BuyButton/>
           {renderPriceControls()}
        </View>
    );
}