import { StyleSheet, Text, View, ScrollView, Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWeb(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View >
            <Text style={[styles.heading]} > ActionCards</Text>

            <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>    
                    <View style={[styles.card, styles.elevatedCard]}>
                        <View style={styles.headingContainer}>
                            <Text style={[styles.headerText]}>
                                SUPERMAN
                            </Text>
                        </View>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jt_9NVPiyyrvGK7gLlELNkOmhKgygchD1L5V2J5uyQ&s=10' }}
                            style={[styles.cardImage,]}
                        />
                        <View style={[styles.bodyContainer]}> 
                            <View>
                                <Text numberOfLines={3}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Soluta optio accusantium
                                    fugiat modi cupiditate quam quasi 
                                    accusamus enim maxime eius corporis nobis 
                                    hic totam quibusdam alias, reprehenderit consectetur
                                    voluptas nesciunt!</Text>
                            </View>        
                            
                            <View style={[styles.footerContainer]}>
                                <TouchableOpacity
                                onPress={() => {openWeb('https://github.com/whitebeast000')}}>
                                    <Text style={styles.socialLinks}>Read More</Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity
                                onPress={() => {openWeb('www.linkedin.com/in/abdul-m-384ba936a')}}>
                                    <Text style={styles.socialLinks}>Follow Me</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.card, styles.elevatedCard]}>
                        <View style={styles.headingContainer}>
                            <Text style={[styles.headerText]}>
                                FLASH
                            </Text>
                        </View>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZjBEz_hLpWJ5sOPsHlNckf2zGmmIKgPNpekWXvSCfA&s=10' }}
                            style={[styles.cardImage,]}
                        />
                        <View style={[styles.bodyContainer]}> 
                            <View>
                                <Text numberOfLines={3}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Soluta optio accusantium
                                    fugiat modi cupiditate quam quasi 
                                    accusamus enim maxime eius corporis nobis 
                                    hic totam quibusdam alias, reprehenderit consectetur
                                    voluptas nesciunt!</Text>
                            </View>        
                            
                            <View style={[styles.footerContainer]}>
                                <TouchableOpacity
                                onPress={() => {openWeb('https://github.com/whitebeast000')}}>
                                    <Text style={styles.socialLinks}>Read More</Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity
                                onPress={() => {openWeb('www.linkedin.com/in/abdul-m-384ba936a')}}>
                                    <Text style={styles.socialLinks}>Follow Me</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.card, styles.elevatedCard]}>
                        <View style={styles.headingContainer}>
                            <Text style={[styles.headerText]}>
                                BATMAN
                            </Text>
                        </View>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgAoUWE1M1cp4ig-iYNyy34WgcVHAo9OVAMPktBu7cG_JqhPsCQUDEPpBSAbKYQZPpLC8kLkjsSWipXWqeHGV8YXHId3JaIWVP4H353NOpA&s=10' }}
                            style={[styles.cardImage,]}
                        />
                        <View style={[styles.bodyContainer]}> 
                            <View>
                                <Text numberOfLines={3}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Soluta optio accusantium
                                    fugiat modi cupiditate quam quasi 
                                    accusamus enim maxime eius corporis nobis 
                                    hic totam quibusdam alias, reprehenderit consectetur
                                    voluptas nesciunt!</Text>
                            </View>        
                            
                            <View style={[styles.footerContainer]}>
                                <TouchableOpacity
                                onPress={() => {openWeb('https://github.com/whitebeast000')}}>
                                    <Text style={styles.socialLinks}>Read More</Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity
                                onPress={() => {openWeb('www.linkedin.com/in/abdul-m-384ba936a')}}>
                                    <Text style={styles.socialLinks}>Follow Me</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>




            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 30,
        fontFamily: 'mono',
        fontWeight: 'bold'
    },

    container:{
        flexDirection:'row'
    },
     card: {
        width:360,
        height:380,
        borderRadius: 10,   
        marginVertical:10,
        marginHorizontal:25,
        padding: 10,
    },
    elevatedCard: {
        backgroundColor:'#F1F5F9',
        elevation: 4,
        shadowOffset:
        {
            width:1,
            height:1,
        },
        shadowColor:'black',
        shadowOpacity: 0.6
    },

    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',

    },
    headerText: {
        color:'grey',
        fontSize: 16,
        fontWeight:'bold'
    },


    cardImage: {
        height: 180,
        marginBottom: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    bodyContainer:{
        padding:8
    },
    footerContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        marginTop:12,
        fontSize:16,
        color:'skyblue',
        backgroundColor:"darkblue",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:8
    }
});