import React from 'react'

function Create() {
  return (
    <div className='Container'>
      <h1>Create New Blog Here</h1>
      <form action="" method="post" className='form'>
        <div className="con-1">
        <label htmlFor="Title">Title:</label>
        <input type="text" placeholder='Enter your blog title' />
        </div>
        <div className="con-1">
            <label htmlFor="Image"></label>
            <input type="file" placeholder='put your blog image'/>
        </div>
        <div className="con-1">
            <label htmlFor="Content">Enter Your Content</label><br />
            <textarea name="Content" id="Content" cols="50" rows="10"></textarea>
        </div>
        <div className="con-1">
            <button className='submit-button'>Publish Blog</button>
        </div>
      </form>
    </div>
  )
}

export default Create
