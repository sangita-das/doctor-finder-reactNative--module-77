import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  doctorName: {
    color: 'goldenrod',
    fontSize: 30
  }
})

export default function Doctor({doctor}) {
  const {name, email, image} = doctor;
  return (
    <View>
      <Image
          source={{
            uri: `data:image/png;base64,${image}`,
          }}
          style={{ width: 200, height: 200 }}
        />
      <Text>{email}</Text>
      <Text style={styles.doctorName}>{name}</Text>
    </View>
  )
}
