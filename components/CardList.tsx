import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

interface CardItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const cardData: CardItem[] = [
  {
    id: "1",
    title: "Mountain Adventure",
    description:
      "Explore breathtaking mountain landscapes and challenging trails.",
    imageUrl: "https://picsum.photos/seed/mountain/400/300",
  },
  {
    id: "2",
    title: "Ocean Expedition",
    description: "Discover the beauty of marine life and underwater wonders.",
    imageUrl: "https://picsum.photos/seed/ocean/400/300",
  },
  {
    id: "3",
    title: "Forest Retreat",
    description: "Immerse yourself in the tranquility of lush green forests.",
    imageUrl: "https://picsum.photos/seed/forest/400/300",
  },
];

const CardListComponent: React.FC = () => {
  const renderCard = ({ item }: { item: CardItem }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => console.log(`Pressed ${item.title}`)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  listContainer: {
    padding: 16,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTextContainer: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default CardListComponent;
