import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import workerImg from '../../../../resources/images/worker2.jpeg'
import { useTailwind } from 'tailwind-rn'
import { Link } from '@react-navigation/native'

export function HomeScreen() {
  const tailwind = useTailwind()
  const [modalVisible, setModalVisible] = useState(false)

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
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
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Text>Welcome to Solito.</Text>
      <View style={{ maxWidth: 600 }}>
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
          <View style={styles.centeredView}>
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
          //@ts-ignore
          source={workerImg}
          //@ts-ignore
          alt="Worker at desk"
          style={tailwind('w-12 md:w-18 lg:w-48 h-12 md:h-18 lg:h-48')}
        ></Image>
        <Text>
          Solito is made by{' '}
          <Link
            to="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            style={{ color: 'blue' }}
          >
            Fernando Rojo
          </Link>
          .
        </Text>
      </View>
      <View style={{ height: 32 }} />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: { fontSize: 16, fontWeight: 'bold', color: 'blue' },
          }}
        >
          Regular Link
        </TextLink>
        <View style={{ width: 32 }} />
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
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
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
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  )
}
