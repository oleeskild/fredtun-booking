<script>
    import "../app.css";
    import { auth } from "../firebase";
    import { user } from "../stores";
    auth.onAuthStateChanged((u) => {
        user.set(u);
    });
</script>

<slot />
