import React from 'react'
import styled from 'styled-components'
import Resume from '../Resume'

const FinishPage = React.forwardRef((props, ref) => {
   return (
      <Finish>
         <Resume ref={ref} />
      </Finish>
   )
})
const Finish = styled.div`
   background-color: #ffffff;
   width: 60%;
`

export default FinishPage
