import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import workerImg from '../../../../resources/images/worker2.jpeg'
import { useTailwind } from 'tailwind-rn'
import { Link } from '@react-navigation/native'
import { Alert } from '../components/Alert'

export function HomeScreen() {
  const tailwind = useTailwind()
  const [modalVisible, setModalVisible] = useState(false)

  // some styles that tailwind-rn cant handle yet are included after tailwind classes
  const styles = StyleSheet.create({
    modalView: {
      ...tailwind('m-5 bg-white rounded-2xl p-9 items-center'),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      ...tailwind('rounded-3xl p-2.5'),
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      ...tailwind('text-white font-bold justify-center'),
    },
    modalText: {
      ...tailwind('mb-4 justify-center'),
    },
  })

  return (
    <View style={tailwind('flex-1 justify-center items-center p-4')}>
      <Text>Welcome to Solito.</Text>
      <View style={tailwind('max-w-xl')}>
        <Text
          style={tailwind(
            'text-purple-600 md:text-slate-600 lg:text-yellow-600'
          )}
        >
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={tailwind('flex justify-center items-center mt-20')}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Image
          source={workerImg}
          accessibilityLabel="Worker at desk"
          //@ts-ignore
          alt="Worker at desk"
          style={tailwind('w-12 md:w-20 lg:w-48 h-12 md:h-20 lg:h-48')}
        ></Image>
        <Text>
          Solito is made by{' '}
          <Link
            to="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            style={tailwind('text-blue-600')}
          >
            Fernando Rojo
          </Link>
          .
        </Text>
      </View>
      <View style={tailwind('h-8')} />
      <View style={tailwind('flex flex-row')}>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: tailwind('text-base font-bold text-blue-600'),
          }}
        >
          Regular Link
        </TextLink>
        <View style={tailwind('w-8')} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'
            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
          as={undefined}
          shallow={undefined}
        >
          <Text
            selectable={false}
            style={tailwind('text-base text-black font-bold')}
          >
            Moti Link
          </Text>
        </MotiLink>
        <ScrollView>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => Alert.alert('Would you look at that?!')}
          >
            <Text style={styles.textStyle}>Show Alert</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  )
}
