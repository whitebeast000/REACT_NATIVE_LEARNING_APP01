import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Contact_List() {
    const contacts = [
  {
    uid: 1,
    name: "Ali",
    status: "Hi, I am Online",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZjBEz_hLpWJ5sOPsHlNckf2zGmmIKgPNpekWXvSCfA&s=10"

  },
  {
    uid: 2,
    name: "Ahmed",
    status: "Busy, as usual",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jt_9NVPiyyrvGK7gLlELNkOmhKgygchD1L5V2J5uyQ&s=10"
  },
  {
    uid: 3,
    name: "Sara",
    status: "Don't disturb, mind your own buisness",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZjBEz_hLpWJ5sOPsHlNckf2zGmmIKgPNpekWXvSCfA&s=10"
  },
  {
    uid: 4,
    name: "Zain",
    status: "Offline, Just wanna stay away from this world, as I am yet",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jt_9NVPiyyrvGK7gLlELNkOmhKgygchD1L5V2J5uyQ&s=10"

  }
];


  return (
    <View>
        <Text style={[styles.heading]}>Contact List</Text>

        <ScrollView style ={styles.container}
        scrollEnabled ={false}
        >
            {contacts.map(({uid,name,status,imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                        <Image
                        source={{uri: imageUrl}}
                        style={styles.userImage}
                        />
                        <View style={styles.userInfo}>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus} >{status}</Text>
                        </View>
                </View>
            ))}

        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        padding: 20,
        marginTop: 10,
        fontSize: 30,
        fontFamily: 'mono',
        fontWeight: 'bold'
    },

    container:{
        marginHorizontal:20
       
    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:10,
        backgroundColor:'skyblue',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10 


    },
    userImage:
    {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight:12,
    },
    userInfo:
    {

    },
    userName:
    {
        fontSize:18,
        fontWeight:'bold',
    },

    userStatus:
    {
        fontSize:14,
        fontWeight:'light',
        paddingRight:120,

    },

})