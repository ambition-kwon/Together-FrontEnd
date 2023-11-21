import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LikeItem from '../Components/LikeItem';
import Margin from '../Components/Margin';

function LikeActivityScreen() {
  const items = [
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
    {id: 4, text: 'Item 4'},
    {id: 5, text: 'Item 5'},
    {id: 6, text: 'Item 6'},
    {id: 7, text: 'Item 7'},
    {id: 8, text: 'Item 8'},
  ];
  const renderGridItems = () => {
    const gridItems = [];
    for (let i = 0; i < items.length; i += 2) {
      const rowItems = items.slice(i, i + 2).map(item => (
        <View key={item.id}>
          <LikeItem
            text1={item.text}
            text2={'고용노동부'}
            text3={23}
            text4={556}
            text5={1}
            color={'rgba(255, 241, 228, 1)'}
            uri={null}
          />
        </View>
      ));
      gridItems.push(
        <View key={i} style={styles.gridRow}>
          {rowItems}
        </View>,
      );
    }
    return gridItems;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Margin value={20} />
        {renderGridItems()}
        <Margin value={20} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
});

export default LikeActivityScreen;
