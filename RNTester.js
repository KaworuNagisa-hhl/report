/**
 * Copyright (c) 2024 Huawei Technologies Co., Ltd.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree.
 */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    smallContainerRow: {
        width: 200,
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    bigContainer: {
        width: 150,
        height: 120,
        backgroundColor: 'red',
    },
    smallTextWidth: {
        height: 40,
        color: 'white',
        width: 150,
    },
    smallText: {
        fontSize:24,
        height: 30,

        color: 'white',
        backgroundColor: "blue"
    },
});
export function TextTest() {
    return (
        <View style={styles.smallContainerRow}>
                                <Text
                                    style={{
                                        ...styles.smallText,
                                        textAlignVertical: 'center',
                                        includeFontPadding: true,
                                    }}>
                                    TEXT
                                </Text>
                                <Text
                                    style={{
                                        ...styles.smallText,
                                        textAlignVertical: 'center',
                                        includeFontPadding: false,
                                    }}>
                                    TEXT
                                </Text>
                            </View>

    );
}

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 20,
      },
      textContainer: {
        // width: 300,
        // marginVertical: 20,
        // padding: 10,
        // borderWidth: 1,
        // borderColor: '#000',
        // backgroundColor: '#E0E0E0', // 灰色背景
      },
      text: {
        fontSize: 24,
        lineHeight: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
      },
});