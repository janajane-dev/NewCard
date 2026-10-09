
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import ProfileCard from './components/ProfileCard';

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addProfile = () => {
    const newProfile = {
      id: nextId.toString(),
      name: `Jana Jane ${nextId}`,
      role: 'IT Student',
      email: `student${nextId}@example.com`,
    };

    setProfiles(prev => [...prev, newProfile]);
    setNextId(prev => prev + 1);
  };

  const deleteProfile = (id) => {
    setProfiles(prev =>
      prev.filter(profile => profile.id !== id)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>My Profiles</Text>
        <Text style={styles.subtitle}>
          Manage your profile cards
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={addProfile}
        >
          <Text style={styles.addButtonText}>
            + Add Profile
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard
            name={item.name}
            role={item.role}
            email={item.email}
            onDelete={() => deleteProfile(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          profiles.length > 0 ? (
            <Text style={styles.count}>
              {profiles.length} Profile(s)
            </Text>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No profiles yet
            </Text>
            <Text style={styles.emptyText}>
              Tap Add Profile to create your first card.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
    flexGrow: 1,
  },
  count: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 8,
    textAlign: 'center',
  },
});
