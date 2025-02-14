import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import { Card, Text, useTheme, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const rooms = [
  {
    name: 'Living room',
    consumption: '56 KWh',
    contribution: '50.45 DH',
    icon: 'sofa',
  },
  {
    name: 'Bed room',
    consumption: '48 KWh',
    contribution: '43.24 DH',
    icon: 'bed',
  },
  {
    name: 'Bath room',
    consumption: '38 KWh',
    contribution: '34.23 DH',
    icon: 'shower',
  },
  {
    name: 'Kitchen',
    consumption: '60 KWh',
    contribution: '54.30 DH',
    icon: 'food-turkey',
  },
  {
    name: 'Dining room',
    consumption: '35 KWh',
    contribution: '31.75 DH',
    icon: 'bowl-mix-outline',
  },
  {
    name: 'Home Office',
    consumption: '25 KWh',
    contribution: '22.50 DH',
    icon: 'desk',
  },
  {
    name: 'Garage',
    consumption: '20 KWh',
    contribution: '18.00 DH',
    icon: 'car',
  },
  {
    name: 'Guest room',
    consumption: '15 KWh',
    contribution: '13.50 DH',
    icon: 'human-greeting-variant',
  },
  {
    name: 'Laundry room',
    consumption: '28 KWh',
    contribution: '25.20 DH',
    icon: 'air-humidifier',
  },
  {
    name: 'Study room',
    consumption: '12 KWh',
    contribution: '10.80 DH',
    icon: 'book-education',
  },
];

export default function HomeRooms() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [switchStates, setSwitchStates] = useState(rooms.map(() => false));

  const handleSwitchChange = (index, value) => {
    const newStates = [...switchStates];
    newStates[index] = value;
    setSwitchStates(newStates);
  };

  const navigateToDetails = (room) => {
    navigation.navigate('RoomDetailsScreen', { room });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home Rooms</Text>
      {rooms.map((room, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title
            title={room.name}
            left={(props) => <Icon {...props} name={room.icon} size={40} color={theme.colors.primary} />}
            right={() => (
              <Switch
                value={switchStates[index]}
                onValueChange={(value) => handleSwitchChange(index, value)}
              />
            )}
          />
          <Card.Content>
            <View style={styles.roomInfo}>
              <Text>Monthly energy consumption</Text>
              <Text>{room.consumption}</Text>
            </View>
            <View style={styles.roomInfo}>
              <Text>Monthly bill contribution</Text>
              <Text>{room.contribution}</Text>
            </View>
            <View style={styles.icons}>
              <Icon name="television" size={24} color={theme.colors.primary} />
              <Icon name="lamp" size={24} color={theme.colors.primary} />
              <Icon name="lightbulb" size={24} color={theme.colors.primary} />
              <Icon name="fan" size={24} color={theme.colors.primary} />
            </View>
            <Button mode="outlined" onPress={() => navigateToDetails(room)}>
              View Details
            </Button>
          </Card.Content>
        </Card>
      ))}
      <Button mode="contained" style={styles.addButton}>
        ADD / REMOVE ROOM
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  card: {
    marginBottom: 16,
  },
  roomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  addButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
