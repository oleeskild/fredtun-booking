<script>
    export let userInfo = {};
    export let auth;
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">{userInfo.displayName} ({userInfo.email})</div>
    <button class="btn" on:click={() => auth.signOut()}>Logg ut</button>
</div>
