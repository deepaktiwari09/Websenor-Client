import { StyleSheet, Dimensions } from "react-native";
import type { Color, Font } from '../../Management/app/appApperienceManager';

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    main: {
        flex: 1,
    }
})

export const createStyles = (colors: Color, font: Font) => StyleSheet.create({
    text: {
        color: colors.Text,
    }
})