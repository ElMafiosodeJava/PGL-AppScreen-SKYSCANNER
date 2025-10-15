import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { CARD_ITEMS } from './data/CardItems';
import React from 'react';
import BodyCard from './components/BodyCard';
import { CardColors } from './CardColor';
import TravelList from './components/TravelList';

export default function App() {
  return (
    <View>
      <Header />
       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       style={{height:180}} 
       >
            {
            CARD_ITEMS.length > 0 ? (
              CARD_ITEMS.map((card) => (
                <BodyCard
                  key={card.description}
                  imageSource={card.imageSource}
                  description={card.description}
                />
              ))
            ) : (
              <Text>No hay cards que mostrar.</Text>
            )
            }
          </ScrollView>
         <TravelList />
    </View>
    
  );
}

const styles = StyleSheet.create({});
