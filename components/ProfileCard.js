
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ProfileCard({
  name,
  role,
  email,
  onDelete,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        accessibilityLabel="Delete profile"
      >
        <Ionicons
          name="trash-outline"
          size={21}
          color="#DC2626"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    marginBottom: 14,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    paddingRight: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  role: {
    fontSize: 15,
    color: '#4B5563',
    marginTop: 6,
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#FEE2E2',
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
