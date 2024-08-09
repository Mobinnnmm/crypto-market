import { db } from '../../firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export const addFavorite = async (userId, cryptoId, cryptoName) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const favorites = userDoc.data().favorites || [];
      if (!favorites.some(favorite => favorite.id === cryptoId)) {
        await updateDoc(userRef, {
          favorites: arrayUnion({ id: cryptoId, name: cryptoName })
        });
        console.log(`Added crypto ${cryptoName} (ID: ${cryptoId}) to user ${userId}`);
      } else {
        console.log(`${cryptoName} (ID: ${cryptoId}) is already a favorite for user ${userId}`);
      }
    } else {
      await setDoc(userRef, {
        favorites: [{ id: cryptoId, name: cryptoName }]
      });
      console.log(`Created user ${userId} with favorite ${cryptoName} (ID: ${cryptoId})`);
    }
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
};

export const removeFavorite = async (userId, cryptoId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    const favorites = userDoc.data()?.favorites || [];

    const updatedFavorites = favorites.filter(favorite => favorite.id !== cryptoId);
    await setDoc(userRef, { favorites: updatedFavorites }, { merge: true });
    console.log(`Removed crypto ID ${cryptoId} from user ${userId}`);
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const getFavorites = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    console.log(`Fetched favorites for user ${userId}:`, userDoc.data()?.favorites || []);
    return userDoc.data()?.favorites || [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};
