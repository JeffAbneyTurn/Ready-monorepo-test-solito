import { useSx, H1, P, Row, A } from 'dripsy'
import React from 'react';
import { View, Text } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import tailwind from 'tailwind-rn';

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View style={{ maxWidth: 600 }}>
        <Text style={tailwind('text-blue-600')}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View style={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View style={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet';
            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            };
          } }
          transition={{
            type: 'timing',
            duration: 150,
          }} as={undefined} shallow={undefined}        >
          <Text
            selectable={false}
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
