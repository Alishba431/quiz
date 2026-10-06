import { StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f2f4f8',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});
