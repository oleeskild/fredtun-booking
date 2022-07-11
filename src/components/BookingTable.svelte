<script>
    import InfoLine from "./InfoLine.svelte";

    export let bookings = [];

    let modalOpen = false;
    let activeBooking = {};

    let editComment = false;

    function openModal(booking) {
        activeBooking = booking;
        modalOpen = true;
    }

    function closeModal() {
        activeBooking = {};
        modalOpen = false;
    }

    function enableCommentEdit() {
        editComment = true;
    }
</script>

<section>
    <div
        class="modal modal-bottom sm:modal-middle {modalOpen
            ? 'modal-open'
            : ''}"
    >
        <div class="modal-box relative text-xl">
            <button
                class="btn btn-sm btn-circle absolute right-2 top-2"
                on:click={closeModal}>✕</button
            >
            <h3 class="font-bold text-2xl">Booking {activeBooking?.id}</h3>
            <InfoLine
                title={"Navn"}
                data={activeBooking?.bookedByPerson?.name}
            />

            <InfoLine title={"Kommentar"} data={activeBooking?.message} />
            <InfoLine
                title={"Epost"}
                data={activeBooking?.bookedByPerson?.email}
            />
            <InfoLine
                title={"Telefon"}
                data={activeBooking?.bookedByPerson?.phoneNumber}
            />
            <InfoLine
                title={"Intern kommentar"}
                data={editComment ? "" : activeBooking?.internalComment}
            />
            {#if !editComment}
                <button
                    class="btn btn-secondary inline"
                    on:click={enableCommentEdit}>Endre kommentar</button
                >
            {:else}
                <textarea
                    cols="50"
                    class="textarea textarea-primary"
                    placeholder="Skriv interne kommentarer..."
                    value={activeBooking.internalComment}
                />
                <button class="btn btn-secondary block">Lagre endringer</button>
            {/if}

            <div class="modal-action">
                <button class="btn btn-primary" on:click={closeModal}
                    >Ferdig</button
                >
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="overflow-x-auto w-full">
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th>Dato fra</th>
                        <th>Dato til</th>
                        <th>Kontaktperson</th>
                        <th>Bygninger</th>
                        <th>Aktiviteter</th>
                        <th>Kommentar</th>
                        <th>Intern kommentar</th>
                    </tr>
                </thead>
                <tbody>
                    {#each bookings as booking}
                        <tr
                            class="hover cursor-pointer"
                            on:click={() => openModal(booking)}
                        >
                            <td>{booking.dateFrom}</td>
                            <td>{booking.dateTo}</td>
                            <td>{booking.bookedByPerson.name}</td>
                            <td>{booking.bookings.join(", ")}</td>
                            <td>{booking.bookings.join(", ")}</td>
                            <td class="whitespace-normal">
                                {booking.message}
                            </td>
                            <td class="whitespace-normal"
                                >{booking.internalComment}</td
                            >
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</section>
