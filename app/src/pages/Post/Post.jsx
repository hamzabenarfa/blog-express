import React from 'react'
import { useParams } from 'react-router-dom'


function Post() {
  const { id } = useParams()

  
 
  return (
    <div>

      <div className="container">

          <div  className="post">
          <h1 className="display-4"></h1>
            <div>...</div>
            <img src=".." class="card-img" alt="..." />

          </div>

      </div>
    </div>
  )
}

export default Post