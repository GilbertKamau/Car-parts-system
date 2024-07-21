const BASE_URL = 'http://localhost:5000/api';

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

// Function to create a product (without image)
export const createProduct = async (productData) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

// Function to update a product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
};

// Function to delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
    return null;
  }
};

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Failed to register user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};

// Function to login a user
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Failed to login user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in user:', error);
    return null;
  }
};

// Function to fetch user profile
export const fetchUserProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

// Function to add a product with an image
export const addProduct = async (productData) => {
  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('description', productData.description);
  formData.append('price', productData.price);
  formData.append('stock', productData.stock);
  formData.append('image', productData.image);

  try {
    const response = await fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
    return null;
  }
};

export default {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  registerUser,
  loginUser,
  fetchUserProfile,
  addProduct,
};

