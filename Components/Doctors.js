import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import Doctor from './Doctor';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() =>{
fetch('https://pure-plateau-65792.herokuapp.com/doctors')
.then(res => res.json())
.then(data => setDoctors (data));
  }, [])
  return (
    <View>
      <ScrollView>
      <Text>This is Doctors: {doctors.length}</Text>
      {
        doctors.map(doctor => <Doctor
        key={doctor._id}
        doctor={doctor}
        ></Doctor>)
      }
      </ScrollView>
    </View>
  )
}

