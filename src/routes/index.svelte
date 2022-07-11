<script>
    import { auth, googleProvider, popupSignIn } from "../firebase";
    import { user } from "../stores";
    import BookingTable from "../components/BookingTable.svelte";
    import NavBar from "../components/NavBar.svelte";

    let userInfo;
    user.subscribe((value) => {
        userInfo = value;
    });

    function login() {
        popupSignIn(auth, googleProvider);
    }

    let bookings = [
        {
            id: 1,
            bookedByPerson: {
                name: "Ole Eskild Steensen",
                phoneNumber: "123456789",
                email: "email@example.com",
            },
            bookings: ["kapell", "boble-fotball"],
            dateFrom: "2022-08-01",
            dateTo: "2022-08-01",
            message:
                "Hei! Vi skal leie for evig og alltid. Gleder oss! Også vil jeg gjerne skrive enda litt mer tekst her for å se om det wrapper eller overflower.",
            internalComment: "Må huske å legge til en bil på parkeringen.",
        },
        {
            id: 2,
            bookedByPerson: {
                name: "Per Persen",
                phoneNumber: "123456789",
                email: "email@example.com",
            },
            bookings: ["kapell", "hovedhus"],
            dateFrom: "2022-08-01",
            dateTo: "2022-08-01",
            message: "Nice! Har booket så dette blir sweetolini",
            internalComment: "Ting skjer",
        },
    ];

    let bookable = [
        {
            id: "kapell",
            name: "Kapell",
            description: "Kappelet mann",
            pricePerDay: "120",
            currency: "NOK",
            type: "building",
        },
        {
            id: "hele-fredtun",
            name: "Hele Fredtun",
            description: "Heila driten",
            pricePerDay: "1200",
            currency: "NOK",
            type: "all-buildings",
        },
        {
            id: "hovedhus",
            name: "Hele Fredtun",
            description: "Heila driten",
            pricePerDay: "1200",
            currency: "NOK",
            type: "building",
        },
        {
            id: "boble-fotball",
            name: "Boblefotball",
            description: "Fotball i bobler",
            pricePerDay: "1000",
            currency: "NOK",
            type: "activity",
        },
    ];
</script>

<section>
    {#if userInfo}
        <NavBar {userInfo} {auth} />
        <div class="m-2">
            <hr />
            <h1 class="text-5xl mb-6">Fredtun Bookinger</h1>
            <BookingTable {bookings} />
        </div>
    {:else}
        <button on:click={login}> Signin with Google </button>
    {/if}
</section>
