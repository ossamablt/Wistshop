const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const fs = require('fs');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwjsmMYfY7ykh8NS6KxzajURBRyOh4Hpg",
  authDomain: "wistshop-d7d1e.firebaseapp.com",
  projectId: "wistshop-d7d1e",
  storageBucket: "wistshop-d7d1e.firebasestorage.app",
  messagingSenderId: "154147646817",
  appId: "1:154147646817:web:5a2b06c30965c61a132920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProducts() {
  try {
    // Read products from JSON file
    const productsData = fs.readFileSync('./products.json', 'utf8');
    const products = JSON.parse(productsData);

    // Upload each product to Firebase
    for (const product of products) {
      await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      console.log(`Uploaded product: ${product.name}`);
    }

    console.log('✅ All products uploaded successfully!');
  } catch (error) {
    console.error('❌ Error uploading products:', error);
  }
}

// Run the upload function
uploadProducts(); 