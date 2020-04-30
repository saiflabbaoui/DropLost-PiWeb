import React from 'react'
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
// core components
import Button from '../../../components/CustomButtons/Button.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import sectionsStyle from '../../../jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx'

// images array used in rendering a function for this section
import imgs from '../../../../src/static/img/assets-for-demo/sections/imgs.jsx'

class SectionSections extends React.Component {
  renderContainerFluid(cssClass) {
    return imgs.map((row) => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem
                md={3}
                sm={3}
                xs={12}
                key={`${el}_${index}`}
                className={cssClass}
              >
                <img
                  src={require(`../../../../src/static/img/assets-for-demo/sections/${el}.jpg`)}
                  alt={el}
                  key={el[index]}
                />
              </GridItem>
            )
          })}
        </GridContainer>
      )
    })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.sectionSections}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem
              md={8}
              className={classNames(classes.mrAuto, classes.mlAuto)}
            >
              <div className={classes.sectionDescription}>
                <h2 className={classes.title}>Ready to Use Sections</h2>
                <h5 className={classes.description}>
                  Build your page section by section! We have created multiple
                  options for you to put together and customise into pixel
                  perfect pages. From headers to footers, you will be able to
                  choose the best combination for your project.
                </h5>
                <Link href={'/sections'}>
                  <Button
                    color='rose'
                    target='_blank'
                    className={classes.navButton}
                    round
                  >
                    view all sections
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.containerFluid}>
          {this.renderContainerFluid(classes.photoGallery)}
        </div>
      </div>
    )
  }
}

SectionSections.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(sectionsStyle)(SectionSections)
