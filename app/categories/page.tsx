// ✅ Correct
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
// ✅ Correct
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { CategoriesPage } from "@/components/pages/categories-page"

export default function Categories() {
  return <CategoriesPage />
}
