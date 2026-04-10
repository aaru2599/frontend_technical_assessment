import React from 'react'
import { BaseNode } from '../base/BaseNode'

const MathNode = ({id}) => {
  return (
   <BaseNode
   id={id}
   title={'Math Node'}
   iconName={"home"}
    contents={<div>
    This is the Math Node.
    </div>}
   >
   </BaseNode>
  )
}

export default MathNode
