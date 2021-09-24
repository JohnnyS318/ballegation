<script lang="ts">
    import {watchResize} from "../utils/resize"
    let navOpen = false;

    function handleOpenNav(){
        navOpen = !navOpen
        if(navOpen){
            document.getElementsByTagName("body")[0].classList.add("no-scroll")
        }else{
            document.getElementsByTagName("body")[0].classList.remove("no-scroll")
        }
    }

    function handleResize(element){
        if(element.clientWidth > 768 && navOpen){
            navOpen = false;
        }
    }
</script>

<style global>
    .no-scroll{
    overflow: hidden;   
}
</style>

<header class={navOpen ? "sticky h-screen top-0 left-0 right-0 bottom-0" : ""} use:watchResize={handleResize}>
    <nav class="py-0 px-10 flex justify-between flex-row w-full h-full relative">
        <a class="logo" href="/">
        Ballegation</a>
        <button class="absolute top-0 right-0 md:hidden py-5 px-8" on:click={handleOpenNav}>{navOpen ? "Closee" : "Open"}</button>
        <ul class="flex w-full flex-col absolute t-20 md:flex-row items-start justify-start md:items-center md:justify-center md:max-w-5xl md:m-0 md:p-0 md:flex-grow ">
            <li class="py-0 px-10">Games</li>
            <li class="py-0 px-10">Utitlites</li>
            <li class="py-0 px-10">About</li>
        </ul>
        <ul class="flex">
            <li class="py-0 px-10">Register</li>
            <li class="py-0 px-10">Login</li>
        </ul>
    </nav>
</header>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

