import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useMemo, useState, useEffect } from 'react';

import { createStyles, createContainers } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Management';
import { removeRequestForm } from '../../../Management/app/requestformManager';

export default function RequestScreen({ navigation, route }) {
    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const { data } = useSelector((state: RootState) => state.requestformManager);
    const styles = useMemo(() => createStyles(colors, fonts), [colors, fonts]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const dispatch = useDispatch();
    return (
        <View style={containers.main}>
            {data.length > 0 ? data.map((item, index) => {
                return (
                    <View key={index} style={containers.item}>
                        <View style={containers.detailsContainer}>
                            <Text style={styles.Headertext}>{item.name}</Text>
                            <View style={containers.TagContainer}>
                                {item.checkbox.map((checkbox, index) => {
                                    return (
                                        <Text key={index} style={styles.optionstext}>{checkbox}</Text>
                                    )
                                })}
                            </View>
                            <Text style={styles.detailstext}>{item.details}</Text>
                        </View>
                        <View style={containers.FiledetailContainer}>
                            <Image source={require('../../../assets/images/file.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                            <Text style={styles.lable}>{item.file.name}  </Text>
                            {/* <Text style={styles.filesizetext}>( {Math.floor(parseInt(item.file.size) / 1024)}kb )</Text> */}
                        </View>
                        <View style={containers.ActionContainer}>
                            <TouchableOpacity onPress={() => {
                                dispatch(removeRequestForm())
                            }}>
                                <Text style={styles.RemoveLable}>Remove</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                // dispatch(removeRequestForm())
                            }}>
                                <Text style={styles.UpdateLable}>Status: Panding</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }) : <Text style={styles.norequesttext}>No Requests</Text>}
        </View>
    )
}