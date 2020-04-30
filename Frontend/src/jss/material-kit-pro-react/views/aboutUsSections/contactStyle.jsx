import {
  title,
  description,
  mrAuto,
  mlAuto,
} from '../../../material-kit-pro-react.jsx'
import customSelectStyle from '../../customSelectStyle.jsx'

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: '70px',
  },
  textCenter: {
    textAlign: 'center!important',
  },
  selectUnderlineRoot: {
    '& > div': {
      marginTop: '13px',
    },
  },
  aboutUs: {
    padding: '80px 0px',
  },
}

export default contactStyle
