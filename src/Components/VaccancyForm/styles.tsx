import { StyleSheet, Dimensions } from "react-native";
import type { Color, Font } from '../../Management/app/appApperienceManager';

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    Form: {
        // flex: 1,
        paddingHorizontal: 20,
        height: height - 100,
    },
    projectDetailsContainer: {
        marginVertical: 20
    },
    DocumentButtonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    chooseFileButtonContainer: {
        backgroundColor: colors.Background,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'flex-start',
        borderRadius: 10,
        elevation: 3,
        borderColor: colors.Outline,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    submitButtonContainer: {
        // backgroundColor: colors.Primary,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopColor: colors.Outline,
        borderTopWidth: 1,
        borderStyle: 'solid',
        // alignSelf: 'flex-start',
        // borderRadius: 10,
        // elevation: 2,
    },
    submitButton: {
        backgroundColor: colors.Primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // alignSelf: 'flex-start',
        borderRadius: 10,
        elevation: 2,
    }
})

export const createStyles = (colors: Color, font: Font) => StyleSheet.create({
    lable: {
        color: colors.Text,
        fontWeight: 'bold',
        marginTop: 20
    },
    sublable: {
        color: 'rgba(51,51,51,.7)',
        // fontWeight: 'bold',
        marginTop: 20
    },
    textInput: {
        // borderBottomWidth: 1,
        // borderBottomColor: colors.Outline,
        // borderStyle: 'solid',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 3,
        borderRadius: 8,
        fontSize: width * 0.035,
        color: 'black',
        elevation: 3,
        backgroundColor: 'white',
    },
    chosenFiletext: {
        color: colors.Text,
        fontFamily: 'Roboto-Medium',
        // fontSize: width * font.md,
    },
    selectedfiletext: {
        color: colors.Text,
        fontSize: width * font.sm,
        fontFamily: font.Primary,
        marginLeft: 10
    },
    submitButtontext: {
        color: colors.OnPrimary,
        fontSize: width * font.sm,
        fontFamily: font.Primary,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})