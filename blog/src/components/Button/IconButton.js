import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const StyledButton = styled(BaseButton)`
       // style themes
`

export const IconButton = styled(({ icon, ...rest}) => {
    let clone = React.cloneElement(icon, rest)
    return <StyledButton {...rest} className={rest.className}>{clone}</StyledButton>
})`


`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired
}