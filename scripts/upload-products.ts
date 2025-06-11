import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
}

async function uploadProducts() {
  try {
    // Read products from JSON file
    const productsPath = path.join(process.cwd(), 'products.json');
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products: Product[] = JSON.parse(productsData);

    // Upload each product to Firebase
    for (const product of products) {
      await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    console.log('✅ Products uploaded successfully!');
  } catch (error) {
    console.error('❌ Error uploading products:', error);
    process.exit(1);
  }
}

// Run the upload function
uploadProducts(); 