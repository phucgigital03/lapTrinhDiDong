// app/_layout.tsx
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native'; // Import View and ActivityIndicator
import { initDb } from '../src/db/db'; // Import your init function

export default function RootLayout() {
  const [isDbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    async function setupDatabase() {
      try {
        await initDb(); // Run your database setup
      } catch (e) {
        console.error('Failed to init DB:', e);
      } finally {
        // When done, set state to true to show the app
        setDbInitialized(true); 
      }
    }

    setupDatabase();
  }, []); // Empty array means this runs once on app start

  // If DB is not ready, show a loading spinner
  if (!isDbInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Once DB is ready, render your Stack navigator
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Products' }} />
      <Stack.Screen name="cart" options={{ title: 'Your Cart' }} />
      <Stack.Screen name="invoice" options={{ title: 'Invoice' }} />
    </Stack>
  );
}

