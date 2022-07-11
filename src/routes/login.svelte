<script lang="ts">
  import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      await signInWithPopup(auth, provider);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  <button on:click={loginWithGoogle} class="btn">Login with google</button>
</div>
