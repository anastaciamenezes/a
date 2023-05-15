import { createGlobalStyle } from 'styled-components'

import BoldFont from './RobotoSerif-Bold.ttf'
import RegularFont from './RobotoSerif-Regular.ttf'
import BoldItalicFont from './RobotoSerif-BoldItalic.ttf'
import ItalicFont from './RobotoSerif-Italic.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'bold';
        src: url(${BoldFont})
    }

    @font-face {
        font-family: 'regular';
        src: url(${RegularFont})
    }

    @font-face {
        font-family: 'bold italic';
        src: url(${BoldItalicFont})
    }

    @font-face {
        font-family: 'italic';
        src: url(${ItalicFont})
    }
`
export default FontStyles