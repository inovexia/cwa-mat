import React from 'react'

const Api = () => {
  const baseUrl = 'https://developer1.website/dev/cwa' // Replace with your API endpoint

  const get = async endpoint => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  const post = async (endpoint, body) => {
    const formdata = new FormData()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer 3e4b9d7f92d8d3494c07d936998fbb49f96b775051bc769ff537c14fdd8cef1a')
    myHeaders.append('Network', 'dev369')
    // You can add more headers if needed

    // Assuming 'myHeaders' is defined elsewhere, you should pass it directly, not inside 'requestOptions'.
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }
    console.log(baseUrl)
    try {
      // You should pass 'requestOptions' directly to the fetch function, not within an object.
      const response = await fetch(`${baseUrl}${endpoint}`, requestOptions)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  // You can add more methods for different HTTP requests (e.g., PUT, DELETE)

  return {
    get,
    post
    // Add other HTTP methods here as needed
  }
}

export default Api
