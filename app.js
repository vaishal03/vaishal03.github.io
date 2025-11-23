import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const auth = getAuth();
const db = getFirestore();

document.getElementById("signupBtn").addEventListener("click", async () => {
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const username = document.getElementById("signupUsername").value.trim().toLowerCase();

    if (!username) {
        alert("Enter a username");
        return;
    }

    // Check if username already exists
    const q = query(collection(db, "users"), where("username", "==", username));
    const checkSnapshot = await getDocs(q);

    if (!checkSnapshot.empty) {
        alert("Username already taken — choose another");
        return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // Save user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                createdAt: Date.now()
            });

            alert("Signup successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
