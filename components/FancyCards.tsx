import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={[styles.heading]}>Trending Places</Text>

            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jt_9NVPiyyrvGK7gLlELNkOmhKgygchD1L5V2J5uyQ&s=10' }}
                    style={[styles.cardImage]}
                />
                <View style={[styles.cardBody]}>
                    <Text style={[styles.cardTitle]}> SuperMan </Text>
                    <Text style={[styles.cardLabel]}> Gotham City, DarkKnight </Text>
                    <Text style={[styles.cardDescription]}> Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Aliquam quos quis omnis!
                        Illo ducimus nulla eius earum, culpa voluptatibus necessitatibus inventore.
                    </Text>
                    <Text style={[styles.cardFooter]}> 15 mins away</Text>
                </View>

            </View>
           
          

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

    card: {
        width:360,
        height:380,
        borderRadius: 10,   
        marginVertical:10,
        marginHorizontal:25,
        padding: 10,
    },
    cardElevated: {
        backgroundColor:'white',
        elevation: 4,
        shadowOffset:
        {
            width:1,
            height:1,
        }
    },

    cardImage: {
        height: 180,
        marginBottom: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,

    },
    cardTitle: {
        color: 'darkgreen',
        fontSize: 22,
        fontWeight:500,
        marginBottom: 6,
    },
    cardLabel: {
        color: 'darkgreen',
         fontSize: 16,
        marginBottom: 6,
    },  
    cardDescription: {
        color: 'cadetblue',
         fontSize: 12,
         marginTop: 6,
         marginBottom: 6,
         flexShrink: 1,
         
    },
    cardFooter: {

         fontSize: 12,
    },

})