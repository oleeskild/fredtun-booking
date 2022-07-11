<script>
  import { onMount } from 'svelte';
  import { initializeApp, getApps, } from 'firebase/app';
  import { getAnalytics } from "firebase/analytics";
  import {getAuth} from "firebase/auth";

  let loggedInUser = null;
  onMount(() => {
    if (!getApps().length) {
      const app = initializeApp({
        apiKey: "AIzaSyAzJXmNs4vWzHcpvgMKCPiNxutOIoZLVlI",
        authDomain: "fredtunbooking.firebaseapp.com",
        projectId: "fredtunbooking",
        storageBucket: "fredtunbooking.appspot.com",
        messagingSenderId: "223706563035",
        appId: "1:223706563035:web:4b1986dda5974a597527fe",
        measurementId: "G-YKHH24PRCW"
      });
    }

    const auth = getAuth();

    auth.onAuthStateChanged(user => {
      loggedInUser = user;
      if (!user) {
        localStorage.removeItem("user");
        return;
      }
      
      localStorage.setItem("user", JSON.stringify(user));
    });

    $: loggedIn = loggedInUser !== null;
  });
</script>
<div>
  <slot {loggedIn} />
</div>