import { useEffect, useState } from "react";

const DB_NAME = "educabotDB";
const STORE_NAME = "inscripciones";

function useIndexedDB() {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      database.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
    };

    request.onsuccess = (event) => {
      setDb(event.target.result);
    };
  }, []);

  const agregarInscripcion = (data) => {
      return new Promise((resolve, reject) => {
      if (!db) {
        console.error("DB no inicializada");
        return reject("DB no lista");
      }

      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.add(data);

      request.onsuccess = () => resolve();
      request.onerror = () => reject();
    });
  };

  const obtenerInscripciones = () => {
    return new Promise((resolve, reject) => {
      if (!db) {
        console.error("DB no inicializada");
        return resolve([]);
      }

      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject();
    });
  };

  return { agregarInscripcion, obtenerInscripciones, db };
}

export default useIndexedDB;