import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {Image, SafeAreaView,ScrollView,Text,TextInput,View,} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import twrnc from 'tailwind-react-native-classnames';
// import Categories from "../components/Categories";
// import FeatureRow from "../components/FeatureRow";




export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: false,
    });
  }, []);


  return (
    <SafeAreaView >
      <View style={myStyle}><Text>huu</Text></View>
    </SafeAreaView>
  );
}
//stylesheets


const myStyle = twrnc.style([
  'p-4', 'flex-row',
'android:bg-red-300', 
'ios:bg-green-300', 
'web:bg-blue-300'
]);
