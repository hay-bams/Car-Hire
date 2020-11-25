import React from 'react'
import { Skeleton } from 'antd'

export const PageSkeleton = () => {

  const SkeletonParagraph =  <Skeleton className="skeleton-css" active paragraph={{ rows: 4 }}/>
  return (
   <>
   {SkeletonParagraph}
   {SkeletonParagraph}
   {SkeletonParagraph}
   {SkeletonParagraph}
   </>
  )
}