import { extendTheme } from '@chakra-ui/react';

{/* Begin reusable values */}
const colors = {
    card: '#FFFFFF',
    text: '#000000',
    primarybg: '#EFEDE9',
    secondarybg: '#EFE9DC',
    accentbg: '#EBDAB7',
    button: '#373737',
    link: '#0077ff',
    alert: '#E53E3E',
}

const sizes = {
    huge: '48px',
    large: '32px',
    medium: '24px',
    small: '20px',
    tiny: '16px',
}

const weights = {
    verythick: '700',
    thick: '500',
    normal: '400',
    thin: '300',
}

const defaults = {
    shadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    genradius: '20px',
    btnradius: '10px',
    font: 'Space Grotesk, sans-serif',
    transition: '400ms',
}
{/* End reusable values */}

const theme = extendTheme({
    styles: {
      global: {
        // General styling (large screens)
        body: {
          bg: colors.primarybg,
          fontFamily: defaults.font,
          color: colors.text,
          fontSize: sizes.medium,
          fontWeight: weights.normal,
          lineHeight: '30px',
        },
        // Navbar styling (large screens)
        nav: {
          display: 'flex',
          width: '1339px',
          m: '37px auto 41px auto',
        },
        'nav .logo': {
          fontSize: sizes.large,
          fontWeight: weights.verythick,
        },
        'nav li': {
          ml: '93px',
          textTransform: 'uppercase',
        },
        'nav a': {
          _hover: {
            color: colors.link,
            transition: defaults.transition,
          },
        },
        // Footer styling (large screens)
        footer: {
          pt: '71px',
          pb: '97px',
          mt: '82px',
          bg: colors.accentbg,
          fontSize: sizes.small,
          fontWeight: weights.verythick,
        },
        'footer .footer-content': {
          justifyContent: 'space-around',
          w: '1339px',
          m: 'auto',
          pr: '139px',
          pl: '148px',
        },
        'footer a': {
          _hover: {
            color: colors.link,
            transition: defaults.transition,
          },
        },
        'footer .internal-links ul': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        'footer .internal-links li': {
          mr: '110px',
        },
        'footer .social-links': {
          mr: '110px',
        },
        'footer .social-links ul': {
          display: 'flex',
          justifyContent: 'space-around',
          m: '40px auto 0px auto',
          fontSize: sizes.large,
          w: '192px',
        },
        'footer .subscribe-button': {
          mt: '40px',
          bg: colors.button,
          color: colors.card,
          fontSize: sizes.tiny,
          borderRadius: defaults.btnradius,
          p: '0px 24px',
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          },
        // Hero styling (large screens)
        },
        '.hero-outer': {
          width: '1339px',
          m: '0px auto',
        },
        '.hero-inner': {
          w: '960px',
          h: '555px',
          m: '77px auto',
        },
        '.hero': {
          flexDirection: 'row-reverse',
        },
        '.hero-img': {
          minWidth: 'fit-content',
        },
        '.hero-img img': {
          w: '512px',
          h: '555px',
        },
        '.hero-text': {
          pt: '51px',
          pl: '62px',
        },
        '.hero h1': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
        },
        '.hero p': {
          lineHeight: '40px',
          pt: '33px',
          pb: '76px',
        },
        '.hero .hero-button': {
          bg: colors.button,
          color: colors.card,
          textSize: sizes.small,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          p: '7px 39px',
          borderRadius: defaults.btnradius,
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          }
        // Call-to-action (subscribe) styling (large screens)
        },
        '#subscribe': {
          width: '1339px',
          m: '0px auto',
          pl: '55px',
          pr: '34px',
        },
        '#subscribe .subscribe-text': {
          mr: '97px',
        },
        '#subscribe h2': {
          fontSize: sizes.huge,
          lineHeight: '100%',
        },
        '#subscribe .subscribe-subtext': {
          pt: '79px',
          pb: '86px',
        },
        '#subscribe .alert': {
          color: colors.alert,
        },
        '#subscribe input[type=email]': {
          mt: '22px',
          bg: colors.card,
          borderRadius: defaults.btnradius,
          boxShadow: defaults.shadow,
          p: '0px 12px',
          w: '438px',
          h: '40px',
        },
        '#subscribe h3': {
          textSize: sizes.large,
          lineHeight: '30px',
          textTransform: 'uppercase',
          pt: '56px',
        },
        '#subscribe .permissions-text': {
          pt: sizes.medium,
        },
        '#subscribe .subscribe-button': {
          bg: colors.button,
          color: colors.card,
          textSize: sizes.small,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          p: '7px 39px',
          mt: '30px',
          borderRadius: defaults.btnradius,
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          }
        },
        '#subscribe .subscribe-img': {
          minWidth: 'fit-content',
        },
        '#subscribe .subscribe-img img': {
          w: '625px',
          borderRadius: defaults.genradius,
        },
        // Testimonials styling (large screens)
        '.testimonials h2': {
          fontSize: sizes.huge,
          lineHeight: '100%',
          width: '440px',
          textAlign: 'center',
          m: 'auto',
        },
        '.testimonials .quotes': {
          mt: '76px',
          mr: 'auto',
          ml: 'auto',
          w: '1394px',
          justifyContent: 'space-around',
        },
        '.testimonials .quote': {
          bg: colors.accentbg,
          borderRadius: defaults.genradius,
          boxShadow: defaults.shadow,
          width: '420px',
          height: '414px',
          textAlign: 'center',
          p: '0px 22px 22px 22px'
        },
        '.testimonials .quote-portrait': {
          w: '119px',
          h: '119px',
          m: 'auto',
          position: 'relative',
          top: '-60px',
          borderRadius: '50%',
        },
        '.testimonials h3': {
          fontSize: sizes.medium,
          fontWeight: weights.verythick,
          lineHeight: '27.5px',
          mt: '10px',
          position: 'relative',
          top: '-60px',
        },
        '.testimonials h4': {
          fontSize: sizes.small,
          fontWeight: weights.thick,
          lineHeight: '27.5px',
          position: 'relative',
          top: '-60px',
        },
        '.testimonials p': {
          fontSize: sizes.small,
          lineHeight: '27.5px',
          mt: '18px',
          position: 'relative',
          top: '-60px',
        },
        // Overview styling (large screens)
        '.overview-outer': {
          width: '1339px',
          m: '0px auto',
          borderRadius: '0px',
        },
        '.overview-inner': {
          w: '960px',
          h: '555px',
          m: '77px auto',
        },
        '.overview': {
          flexDirection: 'row-reverse',
        },
        '.overview-img': {
          minWidth: 'fit-content',
        },
        '.overview-img img': {
          w: '512px',
          h: '555px',
        },
        '.overview-text': {
          pt: '72px',
          pl: '62px',
        },
        '.overview h2': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
        },
        '.overview p': {
          lineHeight: '26px',
          pt: '53px',
        },
        // Our People styling (large screens)
        '.people': {
          w: '1339px',
          m: 'auto',
        },
        '.people h2': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people h3': {
          fontSize: sizes.large,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people h4': {
          fontSize: '26px',
          fontWeight: weights.thick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people img': {
          w: '625px',
          h: '414px',
          borderRadius: defaults.genradius,
        },
        '.people p': {
          lineHeight: '27.5px',
          textAlign: 'center',
          w: '625px',
          mt: '43px',
        },
        '.people .person': {
          mt: '113px',
          justifyContent: 'space-between',
        },
        '.people .person:nth-of-type(2)': {
          flexDirection: 'row-reverse',
        },
        // What We Stand For styling (large screens)
        '.wwsf': {
          w: '1339px',
          flexDirection: 'row-reverse',
          m: 'auto',
        },
        '.wwsf .wwsf-text': {
          pr: '115px',
        },
        '.wwsf h2': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
        },
        '.wwsf p': {
          pt: '20px',
          pb: '20px',
          lineHeight: '27.5px;',
        },
        '.wwsf h3': {
          fontSize: sizes.large,
          fontWeight: weights.verythick,
          lineHeight: '100%',
          pb: '20px',
        },
        '.wwsf li': {
          fontSize: sizes.small,
          lineHeight: '35px',
          ml: '35px',
        },
        '.wwsf img': {
          w: '625px',
          h: '340px',
          mt: '85px',
          borderRadius: defaults.genradius,
        },
        // Cookie consent banner styling (large screens)
        '#cookie-banner': {
          w: '960px',
          m: '0px auto 10px auto',
          p: '26px 97px 35px 120px',
          bg: colors.primarybg,
          boxShadow: defaults.shadow,
          borderRadius: defaults.genradius,
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: "translateX(-50%)",
        },
        '#cookie-banner h2': {
          fontSize: '26px',
          lineHeight: '100%',
          fontWeight: weights.verythick,
        },
        '#cookie-banner p': {
          lineHeight: '50px',
          mt: '30px',
          mb: '30px',
        },
        '#cookie-banner a': {
          color: colors.link,
          _hover: {
            color: colors.text,
            transition: defaults.transition,
          }
        },
        '#cookie-banner .cookie-buttons': {
          m: 'auto',
        },
        '#cookie-banner .cookie-button': {
          bg: colors.button,
          color: colors.card,
          borderRadius: defaults.btnradius,
          fontSize: sizes.small,
          p: '12px 30px',
          mr: '97px',
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          },
        },
        '#cookie-banner .cookie-button:nth-of-type(2)': {
          mr: '0px',
        },
        // Privacy Policy styling (large screens)
        '.privacy-policy': {
          p: '44px 52px 123px 44px',
          w: '1339px',
          m: 'auto',
        },
        '.privacy-policy h1': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          m: 'auto',
        },
        '.privacy-policy .privacy-static': {
          w: '777px',
          m: '82px auto 120px auto',
          lineHeight: '40px'
        },
        '.privacy-policy h2': {
          fontSize: '26px',
          fontWeight: weights.verythick,
          lineHeight: '26px',
          mt: '26px',
        },
        '.privacy-policy h2:nth-of-type(1)': {
          mt: '0px'
        },
        '.privacy-policy .privacy-dynamic p': {
          lineHeight: '26px',
        },
        '.privacy-policy .privacy-dynamic p:last-of-type': {
          mt: '26px',
        },
        '@media screen and (max-width: 1000px)': {
          html: {
            // General style adjustments (mobile screens)
            hr: {
              display: 'none',
            },
            // Navbar style adjustments (mobile screens)
            nav: {
              width: '90%',
            },
            // Footer style adjustments (mobile screens)
            footer: {
              fontSize: sizes.medium,
              fontWeight: weights.normal,
            },
            'footer .footer-content': {
              flexDirection: 'column',
              w: '100%',
              pr: '0px',
              pl: '0px',
              textAlign: 'center',
              fontSize: sizes.l
            },
            'footer .internal-links ul': {
              display: 'flex',
              flexDirection: 'column',
            },
            'footer .internal-links li': {
              pt: '20px',
              mr: '0px',
            },
            'footer .internal-links li:first-of-type': {
              pt: '0px',
            },
            'footer .social-links': {
              pt: '20px',
              mr: '0px',
              mb: '20px',
            },
            'footer p': {
              fontWeight: weights.thick,
              pt: '10px',
            },
            'footer .subscribe-button': {
              m: '30px auto 0px auto',
              fontSize: sizes.medium,
              w: '75%',
              p: '40px 0px',
            },
            // Cookie consent banner style adjustments (mobile screens)
            '#cookie-banner': {
              w: '100%',
              p: '20px',
              position: 'fixed',
              bottom: '0px',
              mb: '0px',
              borderRadius: '0px',
            },
            '#cookie-banner h2': {
              fontSize: sizes.small,
            },
            '#cookie-banner p': {
              fontSize: sizes.tiny,
              lineHeight: '150%',
              mt: '10px',
            },
            // Hero style adjustments (mobile screens)
            '.hero-outer': {
              w: '100%',
            },
            '.hero-inner': {
              w: '95%',
              h: 'fit-content',
              mt: '30px',
              mb: '30px',
            },
            '.hero': {
              flexDirection: 'column',
              alignItems: 'center',
              w: 'inherit',
            },
            '.hero .hero-img': {
              w: '100%',
              pt: '30px',
            },
            '.hero .hero-img img': {
              w: '80%',
              h: '100px',
              m: 'auto',
              objectFit: 'none',
              objectPosition: 'top right',
              borderRadius: defaults.genradius,
            },
            '.hero .hero-text': {
              pl: '40px',
              pr: '0px',
              pb: '40px',
              w: '100%',
            },
            '.hero h1': {
              textAlign: 'center',
              fontSize: sizes.large,
            },
            '.hero p': {
              textAlign: 'center',
              fontSize: sizes.small,
              pt: '20px',
              pb: '40px',

            },
            '.hero .hero-button': {
              m: '0px auto',
              fontSize: sizes.small,
              w: '100%',
              p: '30px 0px',
            },
            // Call-to-action (subscribe) style adjustments (mobile screens)
            '#subscribe': {
              mt: '50px',
              w: '100%',
              flexDirection: 'column-reverse',
              textAlign: 'center',
            },
            '#subscribe img': {
              margin: 'auto',
            },
            '#subscribe .subscribe-text': {
              mr: '0px',
            },
            '#subscribe h2': {
              mt: '40px',
              fontSize: sizes.large,
            },
            '#subscribe h3': {
              pt: '20px',
              fontSize: sizes.medium,
            },
            '#subscribe p': {
              fontSize: sizes.small,
            },
            '#subscribe .subscribe-subtext': {
              pt: '20px',
              pb: '20px',
            },
            '#subscribe .permissions-text': {
              pt: sizes.small,
            },
            '#subscribe input[type=email]': {
              m: '20px auto',
              w: '100%',
              h: '60px',
              fontSize: sizes.medium,
              textAlign: 'center',
            },
            // Testimonials style adjustments (mobile screens)
            '.testimonials': {
              mt: '50px',
            },
            '.testimonials h2': {
              fontSize: sizes.large,
            },
            '.testimonials .quotes': {
              alignItems: 'center',
              w: '100%',
              flexDirection: 'column',
            },
            '.testimonials .quote': {
              mt: '100px',
              h: 'fit-content',
              p: '30px 30px 0px 30px',
            },
            '.testimonials .quote:first-of-type': {
              mt: '30px',
            },
            '.testimonials .quote-portrait': {
              top: '-90px',
            },
            // Overview style adjustments (mobile screens)
            '.overview-outer': {
              w: '100%',
            },
            '.overview-inner': {
              w: '95%',
              h: 'fit-content',
              mt: '30px',
              mb: '30px',
            },
            '.overview': {
              flexDirection: 'column',
              alignItems: 'center',
              w: 'inherit',
            },
            '.overview .overview-img': {
              h: '140px',
              w: 'fit-content'
            },
            '.overview img': {
              transform: 'rotate(90deg)',
              w: '100px',
              h: '525px',
              m: '30px auto',
              pr: '0px',
              objectFit: 'none',
              objectPosition: 'center',
              borderRadius: defaults.genradius,
              position: 'relative',
              top: '-200',
            },
            '.overview .overview-text': {
              w: '100%',
              pt: '30px',
              pl: '0px',
              ml: '35px',
            },
            '.overview h2': {
              textAlign: 'center',
              fontSize: sizes.large,
            },
            '.overview p': {
              textAlign: 'center',
              pt: '30px',
              pb: '30px',
              fontSize: sizes.small,
            },
            // Our People style adjustments (mobile screens)
            '.people': {
              w: '100%',
              mt: '50px',
            },
            '.people h2': {
              fontSize: sizes.large,
            },
            '.people .person': {
              flexDirection: 'column',
              alignItems: 'center',
              m: 'auto',
            },
            '.people .person:nth-of-type(2)': {
              flexDirection: 'column',
            },
            '.people .person img': {
              mt: '40px',
              w: '90%',
              h: 'auto',
            },
            '.people .person h3': {
              mt: '20px',
              fontSize: sizes.medium,
            },
            '.people .person h4': {
              mb: '20px',
              fontSize: sizes.small,
            },
            '.people p': {
              fontSize: sizes.small,
              w: '90%',
              m: 'auto',
            },
            // What We Stand For style adjustments (mobile screens)
            '.wwsf': {
              w: '100%',
              flexDirection: 'column-reverse',
              mt: '50px',
            },
            '.wwsf h2': {
              fontSize: sizes.large,
            },
            '.wwsf h3': {
              fontSize: sizes.medium,
            },
            '.wwsf .wwsf-text': {
              p: '0px 40px',
              textAlign: 'center',
            },
            '.wwsf p': {
              fontSize: sizes.small,
            },
            '.wwsf li': {
              fontSize: sizes.small,
              ml: '0px',
              listStyle: 'none',
            },
            '.wwsf img': {
              margin: 'auto',
              w: '90%',
              h: 'auto',
              mt: '40px',
            },
            // Privacy Policy style adjustments (mobile screens)
            '.privacy-policy': {
              w: '100%',
              textAlign: 'center',
            },
            '.privacy-policy .privacy-static': {
              w: '90%',
            },
            '.privacy-policy h1': {
              fontSize: sizes.large,
            },
            '.privacy-policy h2': {
              fontSize: sizes.medium,
            },
            '.privacy-policy .privacy-static': {
              lineHeight: '150%',
              fontSize: sizes.small,
              w: '90%',
              mt: '20px',
              mb: '50px',
            },
            '.privacy-policy .privacy-dynamic p': {
              lineHeight: '150%',
              fontSize: sizes.small,
              mt: '20px',
            },
          },
        },
      },
    },
    // Chakra component styling
    components: {
      Heading: {
        baseStyle: {
          fontFamily: defaults.font,
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            width: sizes.medium,
            height: sizes.medium,
            borderColor: colors.text,
            mt: sizes.medium,
          },
          fontSize: sizes.medium,
        },
        sizes: {
          md: {
            label: {
              fontSize: sizes.medium,
              mt: sizes.medium,
            },
          },
        },
      },
    },
  });
  
  export default theme;