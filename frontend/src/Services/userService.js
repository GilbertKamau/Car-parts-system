// userService.js

const userService = {
    users: [],
  
    registerUser: (userData) => {
      // Register a new user
      userService.users.push(userData);
    },
  
    loginUser: (email, password) => {
      // Login a user
      return userService.users.find((user) => user.email === email && user.password === password);
    },
  
    getUserDetails: (userId) => {
      // Get user details by userId
      return userService.users.find((user) => user.id === userId);
    },
  
    updateUser: (userId, userData) => {
      // Update user information
      userService.users = userService.users.map((user) =>
        user.id === userId ? { ...user, ...userData } : user
      );
    },
  
    deleteUser: (userId) => {
      // Delete user by userId
      userService.users = userService.users.filter((user) => user.id !== userId);
    },
  
    // Simulated backend API interaction for loading users from persistent storage
    loadUsersFromBackend: () => {
      // Simulate fetching the user data from a backend API
      const savedUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password2' },
      ]; // Example user data
      userService.users = savedUsers;
    },
  
    // Simulated backend API interaction for saving users to persistent storage
    saveUsersToBackend: () => {
      // Simulate sending the user data to a backend API
      console.log('Saving users to backend:', userService.users);
      // You would typically make a network request to save the user data
    },
  };
  
  export default userService;
  