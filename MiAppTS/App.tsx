import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { CARD_ITEMS } from './data/CardItems';
import React from 'react';
import BodyCard from './components/BodyCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

 
});
