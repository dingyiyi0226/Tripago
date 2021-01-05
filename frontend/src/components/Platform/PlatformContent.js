import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import PlatformCard from './PlatformCard.js'
import './Platform.css'

function useQuery() {
  const params = new URLSearchParams(useLocation().search)
  return params.get('region')
}

function PlatformContent(props) {
  
  let region = useQuery()
  useEffect(() => {
    console.log('useeffect', region)
    // TODO: Fetch data from backend

  })


  return (
    <div className="h-100">
      <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        Region - { region || 'All Region' }
      </p>
      <div className="platform">
        <PlatformCard />
        <PlatformCard />
        <PlatformCard />

      </div>
    </div>
  )
  
}

export default PlatformContent