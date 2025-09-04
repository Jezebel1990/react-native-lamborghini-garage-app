import React from 'react';
import { View, Text, Button, Image } from "react-native";

import Logo from "../../../assets/logo.png";
import { styles } from './style';
import Divider from '../Divider';

export default function CardView() {
    const renderLogoBox = () => (
     <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
      </View>
    );

    return (
        <View style={styles.imageContainer}>
          {renderLogoBox()}
          <Divider/>
        </View>
    );
}