import { StyleSheet, Dimensions } from 'react-native';
import type { Color, Font } from '../../../Management/app/appApperienceManager'

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.Background,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    companyProfileContainer: {
        paddingHorizontal: 20,
        marginVertical: 12
    },
    requestContainer: {
        backgroundColor: colors.Secondry,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 5
    },
    requestImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    EventContainer: {
        paddingHorizontal: 20,
        // paddingVertical: 15,
    },
    swapItem: {
        borderRadius: 10,
        width: width - 40,
        height: 160,
    },
    ServicesContainer: {
        // paddingLeft: 20,
        marginTop: 30
    },
    ServicesScrollContainer: {

    },
    ServiceItemContainer: {
        height: 150,
        width: width / 3,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 20,
    },
    QuoteContainer: {
        paddingTop: 15
    },
    QuoteHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    SelectLocationContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        // height: height - 200,
        // width: width,
    },
    locationItemContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 10
    },
    JobsContainer: {
        // paddingLeft: 20,
        marginTop: 30
    },
    JobsScrollContainer: {
        // paddingLeft: 20
    },
    JobsItemContainer: {
        height: 200,
        width: width / 2,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 15,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    ApplyButtonContainer: {
        backgroundColor: colors.Primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        marginTop: 10

    },
    MemebersContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    memberitemContainer: {
        // height: 50,
        // width: 50,
        // borderRadius: 25,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    memberImage: {
        elevation: 4,
        width: 50,
        borderRadius: 25,
        height: 50,
    },
    PortfolioContainer: {
        marginTop: 30,
    },
    PortfolioItemContainer: {
        height: 250,
        width: width - 40,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // paddingVertical: 10,
    },
    portfolioImages: {
        width: width - 40,
        height: 200
    },
    PortfolioModalContainer: {
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 20
    },
    portfolioModelImages: {
        width: width - 40,
        height: 200,
        borderRadius: 20
    },
    PortfolioModaldetailsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    FooterContainer: {
        marginTop: 10,
        marginBottom: 40,
        // borderTopColor: 'rgba(51,51,51,.3)',
        // borderTopWidth: 1,
        // borderStyle: 'solid',
        paddingVertical: 30,
        paddingHorizontal: 20
    }

})


export const createStyles = (colors: Color, font: Font) => {
    const basetext = {
        color: colors.Text,
        fontFamily: font.Primary,
        fontSize: 16,
    }

    const boldtext: {} = {
        fontWeight: 'bold'
    }
    const centertext: {} = {
        textAlign: 'center'
    }


    return StyleSheet.create({
        text: {
            color: colors.Text,
        },
        logotext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.md2,
            color: colors.Secondry,
        }]),
        locationtext: StyleSheet.flatten([basetext, {
            fontSize: width * font.md,
        }]),
        companyprofileText: StyleSheet.flatten([basetext, {
            fontSize: width * font.xs,
            marginVertical: 20,
        }]),
        requestButtonText: StyleSheet.flatten([basetext, centertext, boldtext, {
            fontSize: width * font.xs,
            color: colors.OnPrimary,
        }]),
        eventText: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.sm5,
            marginVertical: 10
        }]),
        servicetitle: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.sm5,
            marginVertical: 10,
            marginLeft: 20
        }]),
        serviceitemtext: StyleSheet.flatten([basetext, centertext, boldtext, {
            fontSize: width * font.xs2,
        }]),
        QuoteHeaderText: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.sm8,

        }]),
        locationslectionbuttonext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.xs7,
        }]),
        jobtitle: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.sm5,
            marginVertical: 10,
            marginHorizontal: 20
        }]),
        jobsitemtext: StyleSheet.flatten([basetext, boldtext, centertext, {
            fontSize: width * font.xs,
        }]),
        ApplyButtontext: StyleSheet.flatten([basetext, centertext, {
            fontSize: width * font.xs,
            color: colors.OnPrimary,
        }]),
        vaccancytext: StyleSheet.flatten([basetext, boldtext, centertext, {
            fontSize: width * font.xs,
            color: colors.OnPrimary,
        }]),
        joblabletext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * (font.xs + 0.008),
        }]),
        jobdetailstext: StyleSheet.flatten([basetext, {
            fontSize: width * font.xs,
        }]),
        JobModelHeader: StyleSheet.flatten([basetext, boldtext, {
            color: colors.Secondry,
            fontSize: width * font.md,
        }]),
        aaplyjobHeader: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.md,
        }]),
        membernametext: StyleSheet.flatten([basetext, centertext, {
            fontSize: width * font.md5,
        }]),
        memberpositiontext: StyleSheet.flatten([basetext, centertext, boldtext, {
            fontSize: width * font.xs2,
        }]),
        portfolioitemtext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.sm,
        }]),
        portfoliomodeltext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.md,
        }]),
        portfoliomodeldescription: StyleSheet.flatten([basetext, {
            fontSize: width * (font.xs + 0.005),
            marginVertical: 10
        }]),
        fotterheadertext: StyleSheet.flatten([basetext, boldtext, {
            fontSize: width * font.md,
            color: 'rgba(51,51,51,.5)',
        }]),
        fottertext: StyleSheet.flatten([basetext, {
            fontSize: width * font.xs,
            color: 'rgba(51,51,51,.5)',
        }])
    })
}


