import { StyleSheet, Dimensions } from "react-native";
import type { Color, Font } from '';

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    item: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    detailsContainer: {
        // marginLeft: 20
    },
    TagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 10,
        flexWrap: 'wrap',
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    FiledetailContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }

})

export const createStyles = (colors: Color, font: Font) => {
    const basetext = {
        fontFamily: font.Primary,
        color: colors.Text,
        fontSize: 16,
    }
    const boldtext: {} = {
        fontWeight: 'bold',
    }
    const centertext: {} = {
        textAlign: 'center',
    }


    return StyleSheet.create({
        lable: basetext,
        boldlable: StyleSheet.flatten([basetext, boldtext, {

        }]),
        Headertext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.md,
        }]),
        RemoveLable: StyleSheet.flatten([basetext, boldtext, {
            color: 'red',
        }]),
        detailstext: StyleSheet.flatten([basetext, {
            marginTop: 10,
            fontSize: width * font.xs2,
            // width: width * 0.7,
        }]),
        optionstext: StyleSheet.flatten([basetext, {
            marginTop: 10,
            fontSize: width * font.xxs5,
            borderWidth: 1,
            borderColor: 'rgba(51,51,51,.2)',
            borderStyle: 'solid',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignSelf: 'flex-start',
        }]),
        UpdateLable: StyleSheet.flatten([basetext, boldtext, {
            color: 'rgba(51,51,51,.5)'
        }]),
        filesizetext: StyleSheet.flatten([basetext, {
            marginRight: 10,
            fontSize: width * font.xs,
        }]),
        norequesttext: StyleSheet.flatten([basetext, {
            fontSize: width * font.md,
            color: 'rgba(51,51,51,.5)',
            textAlign: 'center',
            top: height * 0.2,
        }])
    })
}