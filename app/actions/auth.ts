'use server'
import { redirect } from 'next/navigation'

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get('email')
    const password = formData.get('password')
    
    // Validate input
    if (!email || !password) {
      console.log('Email and password are required')
      return { error: 'Email and password are required' }
    }
    
    // This approach exposes credentials in URL - should use POST request instead
    const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
    
    // Check if request was successful
    if (!response.ok) {
      console.log('Login request failed')
      return { error: 'Login failed' }
    }
    
    const users = await response.json()
    
    // Check if user array exists and has results
    if (!users || !Array.isArray(users) || users.length === 0) {
      console.log('Invalid credentials')
      return { error: 'Invalid credentials' }
    }
    
    const user = users[0]
    console.log('User logged in:', user.email)
    
    // Store user session/token here before redirecting
    // For example: cookies().set('token', user.token)
    
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'An error occurred during login' }
  }
  
  // Redirect should be outside try-catch as it throws
  redirect('/contact')
}