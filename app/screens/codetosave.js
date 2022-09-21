function handleEventCreation (email, title, time, description){
  try{
    const colRef = collection(db, "users", email, "events")
    const docRef = await addDoc(colRef, {
      Title: title,
      Time: time, 
      Description: description, 
    });

    console.log("Document written with ID: ", docRef.id);
  } catch(e){
    console.error("Error adding document: ", e);
  }
};