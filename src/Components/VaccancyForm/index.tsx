import { View, Text } from 'react-native';
import React, { useMemo, useState, UseRef, useEffect } from 'react';
import { createStyles, createContainers } from './styles';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Management';


export default function VaccancyForm() {

    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const styles = useMemo(() => createStyles(colors, fonts), [colors, fonts]);
    const containers = useMemo(() => createContainers(colors), [colors]);

    return (
        <View style={containers.main}>
            <Text style={styles.text}>VaccancyForm</Text>
        </View>
    )
}