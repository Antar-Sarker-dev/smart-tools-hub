import { Tools_Data } from '@/constants/toolsData';
import { ToolDataType } from '@/types/toolDataType';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const ToolCard = ({
  item,
  navigation,
}: {
  item: ToolDataType;
  navigation: NavigationProp<any>;
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={styles.card}
    onPress={() => navigation.navigate(item.screenName)}>
    <Image source={item.icon} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
    <Text className="mt-14 text-center text-slate-600" style={styles.cardTitle}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

export default function ToolsScreen() {
  const navigation: any = useNavigation();
  return (
    <View className="bg-['#E5E4E2']" style={{ paddingBottom: 78 }}>
      {/* search */}
      <View style={styles.searchBox}>
        <TextInput placeholder="Search tools..." placeholderTextColor="#94a3b8" />
        <Image
          source={require('../../../assets/searchIcon.webp')}
          style={{ width: 17, height: 17, resizeMode: 'contain' }}
        />
      </View>

      {/* Grid */}
      <FlatList
        data={Tools_Data}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <ToolCard item={item} navigation={navigation} />}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#FAFBFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginHorizontal: 18,
    marginVertical: 16,
    height: 48,
    elevation: 1,
  },

  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#FAFBFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 32,
    marginHorizontal: 8,
    elevation: 1,
    height: 96,
  },

  cardTitle: {
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
    color: 'gray',
    fontWeight: '600',
  },
});
