import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Elevated_cards() {
  return (
    <View>
      <Text style={[styles.heading]}>Elevated Cards</Text>
        <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
            <View style={[styles.outer]}>
                <View  style={[styles.box, styles.bg_r]}>
                    <Text style={[styles.innerText]}>Red</Text>
                </View>
                <View  style={[styles.box, styles.bg_r]}>
                    <Text style={[styles.innerText]}>Red</Text>
                </View>
                <View  style={[styles.box, styles.bg_y]}>
                    <Text style={[styles.innerText,styles.innerText_y]}>Yellow</Text>
                </View>
                <View  style={[styles.box, styles.bg_y]}>
                    <Text style={[styles.innerText,styles.innerText_y]}>Yellow</Text>
                </View>
                <View  style={[styles.box, styles.bg_b]}>
                    <Text style={[styles.innerText]}> Blue </Text>
                </View>
                <View  style={[styles.box, styles.bg_b]}>
                    <Text style={[styles.innerText]}> Blue </Text>
                </View>
            </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    
    heading:{
        paddingHorizontal:20, 
        marginVertical:10,
        fontSize: 30,
        fontFamily: 'mono',
        fontWeight: 'bold'
    },
    
    outer:{
        paddingHorizontal:20,        
        flexDirection:'row',
        alignItems:'center',
        gap: 10
        
    },

    box:{
        
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height: 100,
        borderRadius: 6,
        marginHorizontal:6,
        shadowOffset:{
            height: 5,
            width:5
        },
        shadowColor:"blue",
    },

    bg_b:{
        backgroundColor:'darkblue',
        color: 'aqua'
    },
    
    bg_r:{
        backgroundColor:'red',
        color: 'yellow'
    },

    bg_y:{
        backgroundColor: 'yellow',
        color: 'darkGreen'
    },

    innerText:{
        fontFamily:'sans',
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    innerText_y:{
        color: 'black'
    }
})