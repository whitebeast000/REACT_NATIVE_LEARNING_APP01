// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import React from 'react'
import Flatcards from './components/Flatcards'
import Elevated_cards from './components/Elevated_cards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import Contact_List from './components/Contact_List'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} > 
        <Flatcards />
        <Elevated_cards/>
        <FancyCards/>
        <ActionCards/>
        <Contact_List/>
      </ScrollView>  
    </SafeAreaView>
  )
}

export default App