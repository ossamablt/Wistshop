import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string; // Main image
  images?: string[]; // Additional images
  stock: number;
  colors?: string[];
  specifications?: string;
  createdAt?: any;
  updatedAt?: any;
}

// Static product images mapping
export const PRODUCT_IMAGES: Record<string, string> = {
  "product-1": "/images/products/ii.png",
  "product-2": "/images/products/product-2.jpg",
  "product-3": "/images/products/product-3.jpg",
  "product-4": "/images/products/product-4.jpg",
  "product-5": "/images/products/product-5.jpg",
  // Add more product images as needed
}

// Helper function to get product image
export const getProductImage = (productId: string): string => {
  return PRODUCT_IMAGES[productId] || "/placeholder.svg"
}

// Helper function to get product image path
export const getProductImagePath = (imageFilename: string): string => {
  return `/images/${imageFilename}`
}

// Add a new product
export const addProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const productsRef = collection(db, 'products');
    const newProduct = {
      ...productData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    
    const docRef = await addDoc(productsRef, newProduct);
    return { id: docRef.id, ...newProduct };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Product));
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Get a single product by ID
export const getProduct = async (productId: string): Promise<Product | null> => {
  try {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);
    
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() } as Product;
    }
    return null;
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (productId: string, productData: Partial<Product>) => {
  try {
    const productRef = doc(db, 'products', productId);
    const updateData = {
      ...productData,
      updatedAt: serverTimestamp(),
    };
    
    await updateDoc(productRef, updateData);
    return { id: productId, ...updateData };
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId: string) => {
  try {
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Get products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef,
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Product));
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
}; 