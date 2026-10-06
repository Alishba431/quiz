import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from './components/ProductCardd';
import { PRODUCTS } from './data/products';

export default function App() {
  const [query, setQuery] = useState('');

  const filtered = PRODUCTS.filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Expo Product Explorer</Text>
          <Text style={styles.student}>Name: Alishba Rubab</Text>
          <Text style={styles.student}>Roll No: 23i3075</Text>
        </View>
        <TextInput
          style={styles.search}
          placeholder="Search products or categories..."
          value={query}
          onChangeText={setQuery}
        />
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          ListEmptyComponent={<Text style={styles.empty}>No products found</Text>}
          contentContainerStyle={styles.list}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  student: {
    fontSize: 18,
    color: '#333',
  },
  search: {
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 24,
  },
});
