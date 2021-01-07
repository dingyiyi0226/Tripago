import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import PlatformCard from './PlatformCard.js'
import './Platform.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

function useQuery() {
  const params = new URLSearchParams(useLocation().search)
  return params.get('region')
}

function PlatformContent(props) {
  const [ albums, setAlbums ] = useState([])
  
  let region = useQuery()
  useEffect(() => {
    console.log('useeffect', region)
    // TODO: Fetch data from backend
    const getAlbums = async () => {
      const res = await instance.get('/platform', { params: {region: region}})
      // console.log(res.data)
      setAlbums(res.data)
    }
    getAlbums()
  }, [region])

  return (
    <div className="h-100">
      <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        Region - { region || 'All Region' }
      </p>
      <div className="platform">
        { albums.length ? (
            albums.map( album => (<PlatformCard user={album.user} album={album.albumName} key={`${album.user}-${album.albumName}`}/>) )
          ) : (
            <h3 className="no-result"> No Result</h3>
          )
        }

      </div>
    </div>
  )
  
}

export default PlatformContent