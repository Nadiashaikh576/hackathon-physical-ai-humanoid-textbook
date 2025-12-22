/**
 * API Services for AI-Native Book
 * 
 * This file contains utility functions for API calls, data fetching,
 * and other services used throughout the application
 */

// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

// Fetch modules data
export const fetchModules = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/modules`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching modules:', error);
    throw error;
  }
};

// Fetch module details by ID
export const fetchModuleById = async (moduleId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/modules/${moduleId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching module ${moduleId}:`, error);
    throw error;
  }
};

// Fetch progress data for a user
export const fetchUserProgress = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/progress`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching progress for user ${userId}:`, error);
    // Return default progress if API fails
    return {
      completedModules: [],
      currentModule: null,
      overallProgress: 0
    };
  }
};

// Save user progress
export const saveUserProgress = async (userId, progressData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(progressData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error saving progress for user ${userId}:`, error);
    throw error;
  }
};

// Fetch exercises for a module
export const fetchExercises = async (moduleId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/modules/${moduleId}/exercises`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching exercises for module ${moduleId}:`, error);
    return [];
  }
};

// Submit exercise answer
export const submitExerciseAnswer = async (exerciseId, answer) => {
  try {
    const response = await fetch(`${API_BASE_URL}/exercises/${exerciseId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error submitting answer for exercise ${exerciseId}:`, error);
    throw error;
  }
};

// Utility function to get a random quote for motivation
export const getRandomMotivationalQuote = () => {
  const quotes = [
    "The future of robotics is being written today.",
    "Every complex system starts with simple components.",
    "AI and robotics will reshape how we interact with the world.",
    "The journey of a thousand miles begins with a single step.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to invent it.",
    "Success is the sum of small efforts repeated day in and day out."
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Format module progress percentage
export const formatProgress = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Debounce function for API calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};